---
title: "The 15 atomic primitives"
description: "The load-bearing list. Every feature in CAOS is one or two of these primitives plus a presentation layer. CAs and Indian finance teams share the same 15 substrates — building them well gives you 80-85% of what either buyer needs."
sidebar:
  order: 2
---

The single most consequential design move in the whole CAOS planning corpus is reducing the surface from "features" to **15 atomic primitives**. Every screen the CA sees, every workflow an in-house controller runs, every API endpoint exposed to a vendor, every Tally voucher pushed at the back end — all of it composes from these 15 substrates. Build them well and the use cases assemble for free. Ship them as features (per-doctype, per-persona, per-buyer) and you re-implement the same logic 25 times.

The 15 primitives were derived by taking every CA workflow in the original CAOS plan and asking, for each one: what is the irreducible computational unit underneath the user-facing flow? The list compresses to 15 — fewer than the doctype count, fewer than the use-case count, fewer than the persona count.

## Why this list, and why exactly 15

Each primitive satisfies four properties that together justify its inclusion:

- **Atomic.** It cannot be expressed as the composition of two other primitives on the list.
- **Reusable.** It serves at least one CA workflow AND at least one finance-team workflow without re-implementation.
- **Substrate, not feature.** It is invisible to the user when used well; it surfaces only as the thing it enables.
- **Architecturally coherent.** It maps to a defined boundary in the CAOS backend — a table cluster, a worker job type, a provider interface, or a state machine.

Forty-plus draft features in the original CAOS v0 plan reduced to these 15 primitives plus presentation layers. The primitives are stable; the presentation layers are where the SKU differentiation happens.

## The 15 primitives — full table

The table below is the load-bearing list. Citations link to the verified populations and workflow volumes that justify each primitive's existence.

| # | Primitive | Definition (one line) | CA workflow it powers | Finance-team workflow it powers |
|---|---|---|---|---|
| **P1** | **Document ingest + classification + extraction** | PDF/image → structured JSON via 4-stage classifier + LLM extract pipeline | Form 26AS, Form 16, bank statement, GSTR-9C, Tally TB extraction | Vendor invoice intake, customer remittance, audit confirmation, BRSR plant data |
| **P2** | **Counterparty master with identity validators** | PAN / GSTIN / MSME / IEC / LEI / Aadhaar with portal-validated status | Client master across [1,00,138 CA firms](https://thefinancestory.com/mid-sized-indian-ca-firms-employing-20-percent-audit-workforce) | Vendor + customer + employee + director master across [1.51 cr active GST taxpayers](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) |
| **P3** | **Recurring-deadline calendar with cascading dependencies** | Statute × entity-type × period seed; auto-cascade per counterparty | 22-entity × ~100-deadline matrix per client | Group statutory + close calendar across N entities × M GSTINs |
| **P4** | **"Request from counterparty" workflow** | Token + OTP + WhatsApp/email/portal with reminders, escalation, attestation | CA → client document requests | Year-end balance confirmations, BRSR plant data pulls, vendor reverification |
| **P5** | **Evidence locker tied to a filing/notice/JV** | Bidirectional graph: document ↔ filing ↔ notice ↔ reply ↔ outcome | "Show me everything supporting this GSTR-9 ITC claim" | "Show me everything supporting JV-2024-Q3-1287 / SCN ASMT-10/14" |
| **P6** | **Notice / query / appeal lifecycle** | Intake → triage → assign → draft reply → due-date → outcome → next-step | Client-side IT/GST/MCA notices ([4.2L+ GST notices in FY22-23 alone](https://durity.com/en-in/blog/gst-notices-causes-and-solutions/)) | In-house notices across 12 portals + appeal stages |
| **P7** | **Reconciliation engine** | Generic `ledger ↔ external source` matcher with confidence scoring + auto-link | GSTR-2B vs purchase register, 26AS vs books, Tally vs GSTR-1 | BRS, intercompany, FAR vs IT-block, AP vs vendor SOA, AR vs customer SOA |
| **P8** | **Maker-checker workflow with role-gated approval** | State machine with conditional rules, audit-trail attached | Reviewer-partner sign-off on returns | JV approval, payment release, vendor onboarding, RPT approval |
| **P9** | **Mapping memory** | Persistent rules (counterparty → ledger / narration → category) with client + firm scope | Per-client Tally mapping flywheel | AP coding rules, BRS auto-match, ICO mapping, expense GL |
| **P10** | **Channel-routed comms** | Email / WhatsApp / portal abstracted behind one channel API | Client communications | Vendor + customer + employee + plant communications |
| **P11** | **Compliance-grade audit trail** | Immutable append-only log; who/what/when; replayable | ICAI peer review, working-paper attestation | IFC / SOX / internal audit evidence, ISO 27001 surface |
| **P12** | **Multi-entity / multi-GSTIN / multi-CIN data model** | Entity is first-class; "client" and "group entity" are the same shape | CA serves N client entities | Group has N entities × M GSTINs × K branches |
| **P13** | **Government portal scraper / fetcher** | Stored credentials + MFA handling + ERI/GSP certification path | GST/IT/MCA/TRACES on behalf of client | Same portals on behalf of self ([62 GSPs](https://www.microvistatech.com/blog/gst-suvidha-providers-gsp-list-2025/), [50+ ERIs](https://cleartax.in/s/e-return-intermediary-eri-income-tax) integration surface) |
| **P14** | **AI extraction over Indian semi-structured forms** | Domain-specific schemas + parsing instructions for 3CD, 9C, AOC-4, BRSR | Tax audit, ROC, transfer pricing | Statutory schedule prep, board-pack inputs, BRSR Core |
| **P15** | **Schedule generator from raw ledger** | Sch-III layout, IND-AS notes, XBRL output | CA prepares for client | Finance team prepares for own filing |

## Architectural test (restated)

:::tip[The architecture test]
Every feature in the CAOS plan must be expressible as **one or two of these primitives plus a presentation layer**. If a feature uses a primitive that is not on this list, either the list is incomplete or the feature is mis-scoped. The list grows only by design decisions; mis-scoped features die at this gate.
:::

The test is intentionally hard to pass. Two examples of how it bites:

- **"Build a payroll module."** The proposed feature would require a new primitive: payroll-run computation engine. That primitive does not appear on the list and would fail the [overview test](/caos/product/overview/) — it conflicts with the explicit "CAOS is NOT a payroll engine" exclusion. Outcome: kill the feature; refer the user to greytHR / Zoho Payroll / Keka / RazorpayX Payroll. CAOS classifies Form 16 and salary registers (P1, P14) and pushes the resulting TDS receivable entries to Tally (P9) — that is the limit.

- **"Build a fixed asset register."** The proposed feature decomposes to P2 (counterparty master extended to assets), P3 (deadline calendar for depreciation cycles), P5 (evidence locker tied to invoice + capitalisation entry + IT block), P7 (FAR vs IT-block reconciliation), and P15 (schedule generator for Schedule III FAR + deferred tax). Five existing primitives, no new substrate. Outcome: ship as a presentation layer over existing primitives; estimate is small because the substrates are already there. (This is exactly how use case #17 in [the use-cases catalogue](/caos/product/use-cases/) lands.)

## How each primitive forward-links to use cases

The next page in this section — [25 finance-team use cases + 7 bridge use cases](/caos/product/use-cases/) — ranks the actual buyer-facing workflows that compose from these primitives. Each use case explicitly cites the primitives it consumes. The forward-link below is the inverse view: per-primitive, which use cases reach for it.

| Primitive | Use cases it powers (link to /caos/product/use-cases/) |
|---|---|
| P1 | UC1 (GSTR-2B reco), UC2 (TDS reco), UC4 (vendor onboarding), UC9 (E-invoice/IRN), UC12 (multi-bank reco), UC18 (BRSR Core), UC19 (15CA/15CB), UC21 (contract metadata), UC22 (expense reimbursement), UC23 (SFT 61A), UC24 (TP master file), UC25 (Schedule III generation) |
| P2 | UC3 (MSME 45-day), UC4 (vendor onboarding), UC8 (Sec 194Q tracking), UC14 (RPT tracking), B2 (3CD), B5 (IT assessment) |
| P3 | UC3 (MSME 45-day), UC15 (ROC event filings), UC20 (FEMA filings), UC21 (contract metadata renewal calendar) |
| P4 | UC6 (statutory audit PBC), UC7 (year-end balance confirmation), UC11 (IFC controls evidence), UC18 (BRSR plant data), B1 (statutory audit), B6 (TP study) |
| P5 | UC6 (audit PBC), UC10 (hearing prep), UC11 (IFC), UC14 (RPT), UC19 (15CA/15CB), UC24 (TP), B1-B7 (all bridge cases) |
| P6 | UC5 (notice intake), UC10 (hearing prep), UC15 (ROC events), B3 (GST SCN/DRC-01), B5 (IT assessment) |
| P7 | UC1 (2B reco), UC2 (TDS reco), UC8 (194Q), UC9 (E-invoice), UC12 (multi-bank reco), UC13 (intercompany), UC17 (FAR vs IT-block), UC22 (expense duplicates), B4 (GSTR-9/9C reco) |
| P8 | UC4 (vendor onboarding approval), UC11 (IFC controls), UC14 (RPT), UC19 (15CA/15CB) |
| P9 | UC1 (2B reco), UC2 (TDS reco), UC4 (vendor onboarding), UC8 (194Q), UC13 (intercompany mapping), UC22 (expense GL), UC25 (Sch-III) |
| P10 | UC5 (notice triage comms), UC6 (PBC chase), UC7 (balance confirms), UC18 (BRSR plant comms), B1-B3 (audit + tax notice handoff) |
| P11 | UC3 (MSME audit trail), UC11 (IFC evidence), UC14 (RPT register), B1, B5 (assessment audit trail), B7 (ROC) |
| P12 | UC1 (multi-GSTIN reco), UC13 (intercompany consolidation context), UC15 (group ROC tracker), UC18 (multi-plant BRSR) |
| P13 | UC1 (GSTN portal data), UC2 (TRACES/26AS), UC5 (notice portal sweep), UC12 (bank-portal stmts), UC15 (MCA21 events), UC20 (RBI portals) |
| P14 | UC18 (BRSR Core taxonomy), UC24 (3CEB), UC25 (Schedule III + IND-AS notes), B2 (3CD clauses), B7 (XBRL) |
| P15 | UC16 (advance tax schedule), UC17 (FAR + deferred tax), UC23 (SFT 61A), UC25 (Schedule III + IND-AS) |

Every cell in the use-cases catalogue traces back to one or two of these 15 cells. That is the architectural test made visible.

## What the primitive list is NOT (anti-list)

To reinforce the discipline, here are draft primitives that were considered and rejected — they failed at least one of the four properties above.

- **"Tally voucher writer."** Rejected: this is the *output* of P1+P9, not a primitive. It is presentation. The CAOS backend ([rebuild-knowledge-map.md §8](/caos/product/document-intelligence/)) treats Tally export as a worker job (`tally_export_jobs`), not a substrate.
- **"Per-doctype validator."** Rejected: subsumed by P1's validation retry loop. The validator is *configuration* (per-doctype rule set in `doc_types.validation_rules`), not a primitive.
- **"Email service."** Rejected: subsumed by P10. Email + WhatsApp + portal share one channel API; the channel is the primitive, the transport is the implementation.
- **"User authentication."** Rejected: this is platform infrastructure (design decision OTP-only), not a domain primitive. It is the foundation under all 15, not one of them.
- **"PAN/GSTIN validator."** Rejected: subsumed by P2 (counterparty master with identity validators). Validation is the verb on a P2 record, not its own primitive.
- **"Bank statement parser."** Rejected: subsumed by P1 (extraction over a doctype) and P13 (portal fetcher when the bank publishes statements via API). Per-bank format catalogue (HDFC/ICICI/SBI/Axis/Kotak/PNB top-6 first per [doctype-catalog Phase 4 sequencing](/caos/product/document-intelligence/)) is implementation detail, not a new primitive.
- **"GSTR-2B reconciler."** Rejected: this is *use case #1* (composes P1+P7+P9), not a primitive. The reco engine (P7) is the primitive; the GSTR-2B context is the configuration.

The pattern in every rejection: if you can express the candidate as a composition of two existing primitives, or as a configuration of one, it is not a primitive. It is a use case.

## Why both buyers need the same 15

The strongest evidence that the same 15 primitives serve both CA and finance-team workflows is the [in-house CA insight](/caos/stakeholders/composite/): **2,48,072 ICAI members (60.8%) work in industry without a Certificate of Practice** ([ICAI 2025 Members Report via Careers360](https://finance.careers360.com/articles/icai-student-and-member-report-2025)). The CFO buyer in a mid-market Indian company is, statistically, often a CA themselves. They were trained on the same regulatory substrate as the practising CA. They speak the same vocabulary. They reach for the same primitive when reconciling 2B vs PR or extracting Form 16 — the only difference is whose name is on the GSTIN.

The 7 bridge use cases in the [next page](/caos/product/use-cases/) literally cross the CA-to-finance-team boundary on the same documents and the same primitives. Statutory audit (B1), tax audit (B2), GST notice (B3), GSTR-9/9C (B4), IT assessment/appeal (B5), transfer pricing (B6), ROC/secretarial (B7) — every one of these has the CA on one side, the in-house finance team on the other, and the same 15 primitives doing the work in the middle. Owning that bridge is the single biggest reason CAOS can credibly own both sides without dual-branding or re-platforming.

## Forward references

- **[25 finance-team use cases + 7 bridge use cases](/caos/product/use-cases/)** — what these primitives compose into, ranked by buyer pain × WTP × competitive whitespace.
- **[Document intelligence pipeline](/caos/product/document-intelligence/)** — how P1, P9, P11, P13, P14 wire together inside the CAOS backend.
- **[Tally / ERP integration](/caos/product/tally-erp-integration/)** — how the primitives plug into Tally / SAP / Oracle / Zoho / NetSuite without replacing them.
- **[Architecture — what's locked, what's open](/caos/product/architecture/)** — the 26 design decisions and the 18 architectural pre-investments that operationalise these primitives.

The discipline is simple to state and hard to keep: 15 primitives, no more. Every new design decisions that proposes a 16th must justify the primitive against the four properties above and explain why it cannot be expressed as a composition of the existing 15.
