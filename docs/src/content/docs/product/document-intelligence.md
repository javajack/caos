---
title: "Document intelligence pipeline"
description: "How CAOS turns an unstructured PDF into a Tally voucher: capture from four channels, dedup, 4-stage classification, cost-aware routing, validated extraction, mapping memory, CA review, idempotent export. Cache key correctness as a load-bearing invariant."
sidebar:
  order: 4
---

The document intelligence pipeline is what powers atomic primitives **P1** (ingest + classify + extract), **P9** (mapping memory), **P11** (audit trail), **P13** (portal fetcher), and **P14** (AI extraction over Indian semi-structured forms). It is the single most engineering-dense surface in the whole CAOS backend, and the surface where most of the design-decisions live ([rebuild-knowledge-map.md §8](/caos/decisions/architectural-pre-investments/) details the locked sequence).

This page is the architecture-level walk-through. The eight stages below are the canonical lifecycle for every document that enters the system, from a WhatsApp-forwarded vendor invoice to a TRACES-fetched Form 26AS.

## The eight-stage lifecycle

```
1. CAPTURE 4 paths: web upload | mobile camera | WhatsApp/email forward | OTP-gated portal
 │
 ▼
2. INBOX (RECEIVED) SHA-256 hash, dedup check, enqueue file_classify_job
 │
 ▼
3. CLASSIFY Stage A heuristics → Stage B content patterns → Stage C OCR (opt-in) → Stage D LlamaClassify
 │
 ▼
4. ROUTE If doctype has active schema + status=CONFIRMED → enqueue extraction_run_job
 │ Provider = doctype.default_provider OR firm-level override OR system default
 ▼
5. PREFLIGHT + ROUTE lit-local SourceProfile → cost-aware A/B/C/D route → cache check
 │
 ▼
6. EXTRACT Parse → validate-retry loop → multimodal/two-pass/agentic-reread → best-by-score
 │ Cache write 30d TTL → DeriveTags → ClassifyReviewReason
 ▼
7. REVIEW Mapping memory lookup (per-client primary + per-firm fallback) → ReviewItem in batch
 │ CA approves → learn MappingRule → save TrainingSample → satisfy ComplianceDocReq
 ▼
8. EXPORT Validate batch → generate IMPORTDATA XML with REMOTEID → push to Tally
 Mark approved → exported. Meter every operation as UsageEvent.
```

Each stage below maps to a specific table cluster, worker job type, and design decisions.

## Stage 1 — Capture (four paths)

Documents enter CAOS through exactly four channels. All four converge on the same inbox. The capture diversity is the reason the [reconciliation primitive](/caos/product/atomic-primitives/) (P7) eventually has so much data to work with.

| Path | Endpoint | Source | Auth |
|---|---|---|---|
| CA bulk upload (web/mobile) | `POST /firms/:f/clients/:c/inbox/upload` | CA staff working through a batch | Bearer JWT + `X-Firm-ID` |
| Public collection portal (OTP-gated) | `POST /collect/:token/upload/:item` | The CA's client (a director, accountant, or counterparty) | Token + 1-tap OTP (5-min, single-use, IP-bind per design decision) |
| Mobile camera capture | `POST /firms/:f/clients/:c/inbox/upload` | CA on field, or client via portal app | Bearer JWT |
| Email-to-firm forwarding (Phase 4+) | inbox processor reads the firm's intake mailbox | Vendor / customer / CA staff forwards an invoice | Per-firm mailbox + DKIM verification |

Channel diversity is enforced because the [stakeholder atlas](/caos/stakeholders/composite/) lists 14 distinct stakeholder classes who all produce documents. A vendor will email; a director will WhatsApp; a CA will bulk-upload from desktop; an audit liaison will use the portal. One inbox absorbs all four.

## Stage 2 — Inbox + dedup

Every uploaded artefact is hashed (SHA-256), checked against the existing `client_documents` table for the same client, and either enqueued for classification or marked as a duplicate (`duplicate_of_id` set). The batch upload identifier (`upload_batch_id`) carries through so the CA can see the original collection-request context even after individual docs flow into separate review queues.

**Why dedup at inbox not at extract:** the cost of running the extraction pipeline on a duplicate is wasted LLM tokens. Catching the duplicate at SHA-256 stage costs one DB read.

## Stage 3 — Classification (4 stages, all opt-in escalation)

Classification is the gate between "we have a PDF" and "we know what kind of PDF this is." It runs as a worker job (`file_classify_job`), and it runs in four explicitly-ordered stages. Each stage can match and exit early; the next stage runs only if the previous one fails to classify with sufficient confidence.

```
Stage A — Filename heuristics (~60 patterns, free, instant)
 ↓ if no match
Stage B — Content-pattern PDF text match (~28 patterns, free, fast — ledongthuc/pdf for text extraction)
 ↓ if no match
Stage C — Tesseract OCR (build tag `ocr`, opt-in, slower)
 ↓ if no match
Stage D — LlamaClassify (LLM, paid, opt-in via doctype rule, last resort)
```

The escalation order is locked by **design decision** (pluggable rule-set engine) and the cost-aware routing principle. Stage A and B are zero-marginal-cost; they catch the bulk of well-formed documents from CA-side bulk uploads. Stage C requires a build with the `ocr` tag (Tesseract is opt-in; cloud OCR like Textract / Claude vision is locked OFF at launch by **design decision**). Stage D is the LLM gate — opt-in per doctype because not every doctype needs LLM classification.

After classification, the document gets period detection, folder resolution, summary generation, and `suggested_*` fields populated. Status becomes `PENDING_REVIEW` so a CA can confirm before extraction kicks off.

## Stage 4 — Route to extraction (per-doctype provider routing)

Two conditions must both hold for the extraction pipeline to run on a document:

1. The document's `doc_type` has an active `doc_type_schema` (versioned JSONSchema for the structured output).
2. The document's status is `CONFIRMED` (CA has approved the classification).

If either fails, the document remains in DMS as a filed document with a regex summary — sufficient for Tier 4-6 doctypes (PAN cards, MOA/AOA, partnership deeds) where extraction is not needed.

If both hold, an `extraction_run_job` is enqueued with the resolved provider. Provider resolution is per-doctype, with a precedence order:

```
provider = doc_type.default_provider
 OR firm-level override (firms.settings.provider_overrides)
 OR system default (config: 'llamaindex')
```

This precedence is the operationalisation of **design decision** (LLM provider interface day one). The pipeline never imports a provider SDK directly; it talks only to the `provider.Provider` interface defined in `internal/provider/`. Adding Gemini / Claude / OpenRouter / a local OSS model is a new directory under `internal/provider/`, not edits to the pipeline. **design decision** locks LlamaIndex-first uniform pipeline as the default; regex stays as test infrastructure (corpus-accuracy rig), never in production routing.

## Stage 5 — Preflight + cost-aware route + cache check

The extraction pipeline (`extraction_run_job`) runs five sub-stages.

### 5a. Preflight (`lit` local pre-flight)

A local pass extracts a `SourceProfile`: text-vs-image ratio, page count, language detection, layout complexity. Cost: zero LLM tokens, milliseconds of CPU.

### 5b. Cost-aware route choice (A / B / C / D)

The `SourceProfile` feeds `ChooseRoute(profile)`, which selects one of four routes:

- **Route A**: text-PDF, fast LLM, single-pass. Cheapest. Vendor invoices in clean PDF format.
- **Route B**: image-PDF, multimodal LLM, single-pass. Mid-cost. Scanned bank statements where Tesseract is acceptable.
- **Route C**: image-PDF, multimodal LLM, two-pass + validation retry. Higher cost. Form 16, GSTR-9C — long forms with structured tables.
- **Route D**: agentic re-read with self-correction. Most expensive. Used only when Routes A/B/C fail validation.

Route choice is the cost lever. design decision (post-invoice α/β/γ/δ doctype sequencing) and design decision (LlamaIndex-first uniform pipeline) together ensure that the same routing logic applies to every extractable doctype — bank statement, GSTR-2B, Form 16, Form 26AS, TDS challan — without per-doctype branching in the routing code.

### 5c. Cache check (cache key correctness as load-bearing invariant)

This is the single most important invariant in the entire pipeline. The cache key is:

```
cache_key = sha256(pdf_bytes) :
 schema_version :
 provider_name :
 route_id :
 sha256(parsing_instruction)
```

Every component is non-negotiable.

- `sha256(pdf_bytes)` — same bytes ⇒ same content. If the PDF changes by one byte, the cache misses. Correct.
- `schema_version` — if the doctype's JSONSchema changes (a new field, a renamed field), all prior extractions are invalidated. Correct.
- `provider_name` — if we switch from LlamaIndex to Claude for a doctype, the cache misses. Correct (different providers may parse differently even with the same prompt).
- `route_id` — if the route changes from B to C (multimodal single-pass to two-pass), the cache misses. Correct (the second pass may yield different output).
- `sha256(parsing_instruction)` — if we change the parsing instruction by even one word, the cache misses. Correct (prompt-level changes must invalidate cache).

**Why this matters:** simplifying the cache key — dropping any of these components — silently serves stale or incorrect output to the CA's ReviewItem queue. The CA approves it. The wrong voucher posts to Tally. The error is undetectable except by audit. The cache key invariant is enforced at the code level: **never simplify** (per CLAUDE.md hard rules in the CAOS repo).

### 5d. Parse via routed provider

The parser produces structured candidate output. Cache hit ⇒ return cached output (and write `UsageEvent` with `cache_hit=true` for metering). Cache miss ⇒ run the provider, cache the result with 30-day TTL, write a `UsageEvent` for the parse operation.

### 5e. Extract + validate retry loop

The candidate output is validated against the doctype's validation rule set. On failure, the loop retries with escalation:

- First retry: same route, different prompt.
- Second retry: escalate route (e.g., A → B, or B → C).
- Third retry: agentic re-read (Route D).
- Final fallback: mark for `pending_review` with the best-scored candidate as a hint.

The retry/escalation logic is per-doctype (configured in `doc_types.validation_rules`). The pipeline never silently consumes credits — every retry writes its own `UsageEvent` with deterministic ID `jobID:attempt:operation` per the CAOS CLAUDE.md hard rule "All metering is mandatory."

After best-by-score selection, `DeriveTags` runs (semantic tags from extracted entities), then `ClassifyReviewReason` decides whether the result is `auto_safe` (high confidence + no validation warnings) or `pending_review` (needs CA eyes).

## Stage 6 — Mapping memory lookup

Before the ReviewItem is created, the pipeline runs `LookupMappingForExtract` against the `mapping_rules` table. The lookup is two-tier per **design decision** (mapping memory scope):

- **Per-client primary** — first lookup `mapping_rules WHERE scope='CLIENT' AND client_id = $client_id`. This is the per-counterparty memory built up over the relationship's history (e.g., "Vendor ACME → ledger Purchase A/c → cost centre PROJECT_42").
- **Per-firm fallback** — if no client-scope match, lookup `mapping_rules WHERE scope='FIRM' AND tenant_id = $firm_id`. This is the firm-wide memory promoted from individual client matches that the firm decided are general patterns.

The match result becomes a *suggested* mapping on the ReviewItem; the CA can accept or override. On approval, the auto-learn-on-approve flywheel kicks in (Stage 7).

The two-tier scope is the operationalisation of mapping memory as **primitive P9**. It is what makes the [GSTR-2B reco use case](/caos/product/use-cases/) (UC1) compound: the more invoices flow through, the better the per-counterparty mapping gets, and the more CA review time the pipeline saves.

## Stage 7 — Review (CA workspace), auto-learn-on-approve

The CA workspace is the mutable counterpart to the immutable extraction job. Two tables, two states:

- `extraction_jobs` — **immutable post-completion**. Pipeline-owned. The CA never writes to this table. (CLAUDE.md hard rule.)
- `review_items` — **mutable**. CA workspace. Holds suggested mapping, suggested ledger, suggested voucher type, plus space for the CA's overrides.

On approve, four side-effects fire:

1. **Learn MappingRule** — the (counterparty, ledger, voucher type) triple is written / strengthened in `mapping_rules` with `scope='CLIENT'` by default. UI button to promote to `scope='FIRM'`.
2. **Save TrainingSample** — auto-saved as few-shot input for future LLM calls on the same doctype + counterparty.
3. **Stamp `reviewed_at` / `reviewed_by`** — for audit trail (P11).
4. **Satisfy compliance_doc_requirement** — if the document was uploaded against a compliance deadline, the deadline state advances (this is the **Phase 7 δ compliance evidence** path in the doctype catalogue).

This is the auto-learn-on-approve flywheel. Every approval makes the next extraction faster and more accurate. The mapping memory is the primary competitive moat for the Tally export use case — competitors who treat mapping as a one-shot configuration step never get the compounding effect.

## Stage 8 — Tally export with REMOTEID idempotency

The final stage validates the approved batch (`BatchReport`), generates IMPORTDATA XML with `REMOTEID` set per voucher, and pushes to Tally. The `REMOTEID` is what enforces **idempotency** — re-running the export does not duplicate vouchers. It is also the field that lets CAOS reconcile back: "for this `client_documents.id`, the resulting Tally voucher's REMOTEID is X, and X exists / does not exist in Tally."

The `tally_export_jobs` worker handles UTF-16 encoding (Tally XML is malformed-tolerant; the import endpoint treats invalid-by-XML-spec inputs as recoverable). XML import (the inbound direction — pulling Tally masters into CAOS mirrors) follows the same UTF-16 + tolerance rule.

The export is one-directional in the sense that **CAOS is not the GL**. Tally remains the book of record. CAOS holds Tally master mirrors (`account_groups`, `ledgers`, `stock_items`, etc.) for lookup convenience and writes vouchers via export — never via direct Tally DB writes. The full integration architecture is on the [/caos/product/tally-erp-integration/](/caos/product/tally-erp-integration/) page.

## Provider abstraction in detail

design decision locks "Provider interface for LLMs" as a day-one architectural commitment. The interface lives at `internal/provider/Provider`. Concrete implementations live under `internal/provider/<name>/`:

- `internal/provider/llamaindex/` — LlamaIndex-heavy primary impl (Parse, Extract, Classify all available). This is the design decision default.
- `internal/provider/claude/` — Anthropic Claude (planned, config-only addition).
- `internal/provider/gemini/` — Google Gemini (planned).
- `internal/provider/openrouter/` — multi-model routing via OpenRouter (planned).
- `internal/provider/local-oss/` — locally-hosted OSS model (Mistral / Llama / Qwen) for VPC-isolated tenant deployments (deferred until first enterprise customer requires it).

The pipeline imports `provider.Provider` and never the concrete SDK. Per-doctype routing means a customer can decide that "TAX_INVOICE_PURCHASE goes via LlamaIndex but BANK_STATEMENT_HDFC goes via Claude" via a `firms.settings.provider_overrides` config — no code change.

## ExtractionJob immutable, ReviewItem mutable

The hardest invariant to internalise for new engineers on the codebase is the immutable-post-completion rule for `extraction_jobs`. Restated:

- The pipeline writes `extraction_jobs` rows with `status=running` ⇒ `status=complete` (or `status=failed`).
- After `status=complete`, **no code path may mutate the row.** Not the CA. Not a sysadmin. Not a re-extraction job (that creates a new row).
- The CA's mutable workspace is `review_items`. CA edits, overrides, mapping changes — all live here.

The reason: the immutable extraction job is the audit-trail anchor (primitive P11). It is what lets the system answer "what did the LLM actually return?" two years later, even if the CA edited the result and the mapping memory has been retrained. Mutating it would break the audit trail and violate ICAI peer review expectations + DPDP data lineage requirements.

## Per-doctype provider routing — the operational consequence

Per-doctype routing is what makes the cost-aware A/B/C/D scheme actually save money in production. Examples:

- `TAX_INVOICE_SALES` — clean PDFs, well-formed tables, Route A via LlamaIndex. Cheap.
- `BANK_STATEMENT_HDFC` — image-heavy with consistent layout, Route B via LlamaIndex multimodal. Mid-cost.
- `FORM_16` — long, structured, sometimes scanned. Route C with two-pass via LlamaIndex. Higher cost but cached aggressively.
- `GSTR_9C` — extreme structure complexity, Route D agentic re-read via Claude (because Claude tends to follow long XBRL-like extraction instructions better). Most expensive but rare event (annual filing).
- `EXPENSE_RECEIPT` — short, often hand-photographed, multimodal Route B via Gemini (cheap, fast, good for receipts). Low cost.

Configuring all of these is a `doc_type.default_provider` + `route_id` change in the doctype rule-set engine. No pipeline code change. That is what design decision (pluggable rule-set engine) buys.

## Cross-references

- The 8-stage pipeline is the operationalisation of primitives **P1, P9, P11, P13, P14** from [/caos/product/atomic-primitives/](/caos/product/atomic-primitives/).
- Each ReviewItem feeds the [25 finance-team use cases](/caos/product/use-cases/) — particularly UC1 (GSTR-2B reco), UC2 (TDS reco), UC4 (vendor onboarding), UC9 (E-invoice/IRN), UC12 (multi-bank reco), and UC18 (BRSR).
- The Tally export step (Stage 8) hands off to [/caos/product/tally-erp-integration/](/caos/product/tally-erp-integration/) — the rules for the GL of record.
- Cache key correctness, immutability of `extraction_jobs`, and provider abstraction are all locked at the architecture level — see [/caos/product/architecture/](/caos/product/architecture/) and [/caos/decisions/architectural-pre-investments/](/caos/decisions/architectural-pre-investments/).

The pipeline is the load-bearing engineering surface of the entire product. Every primitive that compounds (mapping memory, audit trail, extraction quality) compounds *here*. Get this right and the use-case catalogue assembles. Get it wrong (cache key sloppiness, mutable extraction jobs, provider lock-in) and the moat collapses.
