---
title: "Phase 2 — Vendor-Network Fact Graph (Year 2)"
description: "Plaid-for-Indian-vendors: each verified counterparty becomes a free pre-validation for the next enterprise that pays them. Up to 17 lakh validated nodes by Y2 end."
sidebar:
  order: 4
---

Phase 2 is where CAOS stops being a CA-tool and starts being a network. The 50,000 client entities attached in [Phase 1](/caos/flywheel/phase-1-ca-led/) become the seed population for vendor invitations. By the end of Year 2, the vendor-network fact graph holds up to 17 lakh validated counterparty nodes — each one a free pre-validation for the next enterprise that pays them. This is Plaid-for-Indian-vendors.

## The loop in 7 steps

### Step 1 — Enterprise E1 onboards CAOS

Either via its CA (the [Phase 1 path](/caos/flywheel/phase-1-ca-led/)) or directly via inbound. By Year 2 start, ~50,000 entities are already on the platform; new enterprises continue to onboard at the Phase 1 rate plus organic acceleration from network signal.

### Step 2 — E1's vendors are invited to validate

When E1 uploads its first GSTR-2B, runs a 3-way match, or completes a vendor-master cleanup, CAOS surfaces the unique counterparties in those documents and offers a one-click invitation. The invitation is sent via email + WhatsApp Cloud API.

Each vendor receives a 30-second flow:

- **Tap link** in WhatsApp / email
- **Confirm GSTIN** (auto-validated against GSTN)
- **Confirm PAN** (auto-validated against CBDT)
- **Confirm MSME status** (Udyam check; matches against [7.83 cr Udyam-registered MSMEs](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2246892))
- **Confirm bank** (optional; AA-linkable for Phase 4)
- **Done** — vendor profile is now a fact graph node

### Step 3 — The validated vendor profile becomes a graph node

The node carries:

- A canonical entity identifier (PAN-anchored)
- All known GSTINs (multi-state vendors have multiple)
- MSME status with Udyam Registration Number
- IRN-eligibility flag (turnover ≥ ₹5 cr → e-invoice mandate per [the August 2023 threshold reduction](https://cleartax.in/s/e-invoicing-businesses-above-rs-5-crore-turnover))
- Last-verified timestamp + verification method audit-trail
- The set of CAOS enterprises that have a payable to this vendor

The graph node is the unit that compounds.

### Step 4 — Enterprise E2 onboards and finds 30% overlap

When E2 uploads its first GSTR-2B, ~30% of its vendors are *already* in the CAOS graph (validated by E1, E3,... E_N). E2 onboards those vendors in **one click** instead of one hour. The 30% overlap rate is a network-density assumption that grows over time:

| Network density | Vendor overlap rate | Avg invitation time per vendor |
|---|---|---|
| Year 1 (50K entities) | 5-10% | 5-10 min |
| Year 2 (200K entities) | 25-35% | 1-2 min |
| Year 3 (500K entities) | 45-55% | <30 sec |
| Year 4 (1M+ entities) | 60-70% | One-click |

### Step 5 — The reconciliation engine works across the network

The [GSTR-1 vs GSTR-2B reconciliation](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) runs across the network, not just per enterprise. If vendor V filed GSTR-1 declaring ₹50 lakh of sales to enterprise E1, and E1's GSTR-2B shows ₹52 lakh of purchases from V, the discrepancy is visible at the *vendor side* — V's CA can resolve once for all customers, instead of replying to N customer queries individually.

Network reconciliation reduces the cumulative reconciliation work in the CA ecosystem from O(N²) (every CA pair) to O(N) (every vendor once).

### Step 6 — Lender-side pull (S14 stakeholder)

This is the bridge to [Phase 4](/caos/flywheel/phase-4-dpi-graph/). The [1,157 AA participants](https://sahamati.org.in/fip-fiu-in-account-aggregators-ecosystem/) — banks, NBFCs, lenders — want to underwrite the *vendor* (a small business) for working-capital loans. The CAOS verified profile + invoice history + bank-statement-via-AA is the credit datapoint that makes pre-clean underwriting possible.

Verified context: [₹1.67 lakh cr / 1.89 cr loan accounts were facilitated via AA in FY25 alone](https://sahamati.org.in/the-credit-reimagined-account-aggregator-aa-impact-report-h2-fy25/), with consent volume growing [+78.6% YoY](https://www.business-standard.com/finance/news/aa-ecosystem-consent-processing-up-78-in-fy25-shows-sahamati-data-125031301053_1.html). The lender appetite for verified SME data is real and scaling.

### Step 7 — Vendor accepts more enterprise customers

Being on CAOS is a *positive credit signal* (pre-validated, ITR/26AS-clean, MSME-tagged). Vendors actively promote their CAOS presence to win more enterprise contracts. The loop closes: enterprise demand creates vendor invitation → vendor validates → vendor visibility creates more enterprise demand.

The 7-step loop runs simultaneously across all 50,000+ Phase 1 entities and every new entity onboarded thereafter.

## Pre-conditions (verified)

| Anchor | Value | As of | Source |
|---|---|---|---|
| Active GST taxpayers | [1,53,56,323 (~1.51 cr)](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | Jun 2025 | GST@8 Report / PIB |
| Normal/regular GST taxpayers | [1.34 cr](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | Jun 2025 | (same) |
| Composition scheme | [14.80 lakh](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | Jun 2025 | (same) |
| TDS-deductors registered | [3.71 lakh](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | Jun 2025 | (same) |
| **E-invoice generators (active)** | [9.92 lakh](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | Jun 2025 | (same) |
| **E-invoice recipients (registered)** | [81.88 lakh](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | Jun 2025 | (same) |
| E-way bill registered users | [55.23 lakh](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | Jun 2025 | (same) |
| GSTR-1 filers monthly | [~1.2 cr (May 2025)](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | May 2025 | (same) |
| **AA ecosystem participants** | [1,157](https://sahamati.org.in/fip-fiu-in-account-aggregators-ecosystem/) | Mar 2026 | Sahamati |
| Sec 194Q (TDS on purchases) | Active; turnover > ₹10 cr; trigger > ₹50 lakh per seller | Active | [ClearTax 194Q](https://cleartax.in/s/an-overview-on-section-194q-of-the-income-tax-act-1961-ita) |
| **Sec 43B(h) MSME 45-day clock** | Active; payments to MSME beyond 45 days lose tax deductibility | FY24-25 onwards | Income Tax Act |
| Sec 206C(1H) (TCS on sales) | [REMOVED from 1 April 2025](https://taxguru.in/income-tax/tcs-sale-goods-removed-april-1-2025-faqs.html) (Union Budget 2025) | Apr 2025 | TaxGuru |
| Udyam-registered MSMEs total | [7.83 cr](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2246892) | Feb 2026 | PIB |
| Udyam Small + Medium (the SaaS-buying subset) | ~5.1 lakh ([4.76L Small + 35,682 Medium](https://aspire.financialexpressb2b.com/news/udyam-milestone-over-65-crore-msmes-now-registered-across-india)) | Jul 2025 | Aspire FinancialExpress |

The regulatory pull is what makes Phase 2 inevitable. **Sec 194Q forces the buyer to track every seller's turnover band.** **Sec 43B(h) forces payment within 45 days to MSME-registered vendors, on pain of losing tax deductibility.** The buyer's vendor-master MUST be accurate and live. CAOS's vendor-network is the only frictionless tool to keep it accurate at scale. A single GSTR-2B-driven vendor invitation flow does the work that ten reconciliation calls cannot.

## Flywheel math

The Phase 2 sizing model:

| Variable | Value | Derivation |
|---|---|---|
| Phase-1 client entities | 50,000 | From Phase 1 end-of-year |
| Avg vendors per entity | 50 | Conservative (typical SME has 50-200) |
| Total vendor-touches | **25 lakh** | 50,000 × 50 |
| Network overlap (deduplication) | 30-40% | Year 2 network density |
| Unique vendor profiles after dedup | **~17 lakh** | 25 lakh × 0.68 |
| Vendor acceptance rate | 30-40% | Calibrated against [AA's 78.6% consent growth](https://www.business-standard.com/finance/news/aa-ecosystem-consent-processing-up-78-in-fy25-shows-sahamati-data-125031301053_1.html) for India SaaS norms |
| Validated vendor nodes | **~5-7 lakh** | 17 lakh × 0.35 |
| % of e-invoice recipient universe (81.88 lakh) | **~6-8%** | Real meaningful penetration |
| % of full GST taxpayer universe (1.51 cr) | **~0.4%** | Tip of the iceberg |
| Vendors converting to paid CAOS users (5%) | **25,000-35,000** | At ₹3-10K/month ARPU = ₹9-42 cr ARR (low end) |
| Total Phase-2 ARR contribution | **₹15-30 cr** | Including enterprise expansion |

Three sensitivity bands for the Year-2 vendor node count:

| Scenario | Phase-1 entities | Vendors/entity | Overlap | Acceptance | Validated nodes |
|---|---|---|---|---|---|
| **Pessimistic** | 30,000 | 30 | 25% | 20% | ~135K |
| **Base** | 50,000 | 50 | 35% | 35% | ~570K |
| **Aggressive** | 80,000 | 75 | 40% | 45% | ~1.6M (16 lakh) |

The base scenario produces ~570K validated vendor nodes by Year-2 end — about 0.7% of the [81.88 lakh e-invoice recipient universe](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/). The aggressive scenario approaches 16 lakh nodes, materially close to the 17-lakh round-number target used elsewhere in this section.

## The magic moment

> **CA promotes a "verified vendor profile" from client-scope to firm-scope.**
>
> 's mapping_rules table introduces the "promote to firm" action: when a CA realises a vendor of one client is also a vendor of another client (commonly true for shared service providers — auditor, valuer, registered office, software vendor, courier), the CA promotes the vendor profile from client-scope to firm-scope.
>
> Once promoted, **every next enterprise paying that same vendor onboards them in one click** — they see the pre-validated profile, accept, and the vendor doesn't need to be re-invited.
>
> Network effect ignites at the firm level. The CA's effort on vendor 1 compounds across all clients of that CA. Multiplied across 1,000 CAs, the firm-scope promotion is the engine that lifts the network density curve from "Year 1: 5-10% overlap" to "Year 2: 25-35% overlap."

The product surface required for the magic moment is well-defined:

- A "promote to firm" button on the vendor master
- A firm-level vendor master visible to all the firm's clients (with consent)
- An audit-trail that records who promoted, when, and which clients consented
- An auto-suggestion that surfaces "this vendor exists at firm-scope" when any client uploads a document mentioning it

## What this unlocks for Phase 3

By Year 2 end, CAOS holds:

| Asset | Value | Role in Phase 3 |
|---|---|---|
| Client entities | 200,000+ (Phase 1 + Phase 2 organic) | Source population for in-house team adoption |
| Validated vendor nodes | 5-17 lakh | Counterparty fact graph |
| Verified GST invoices | ~3 cr (50K entities × ~6,000 invoices/yr avg) | Audit working-paper substrate |
| Tally voucher pushes | ~1 cr (P9 primitive working at scale) | Reconciliation engine credibility |
| Bank statements (subset) | ~10K (early AA pilots) | Phase 4 seed |
| First Big-6 inbound interest | ~3-5 firms | Phase 3 lighthouse pipeline |

This handoff is what makes Phase 3 viable. Without Phase 2's vendor graph and ~3 cr verified invoices, the Audit Workspace would have nothing to triangulate against — it would just be Caseware-with-prettier-UI. With Phase 2 in place, the Audit Workspace becomes an *evidence-graph workspace*, where every PBC item can be cross-referenced against vendor-confirmed counterparty data.

## Architectural pre-investments unlocked

Phase 2 requires three architecture additions over Phase 1:

| New pre-investment | Why | Status by Phase 2 end |
|---|---|---|
| **Vendor master schema** (separate from client/entity) | The vendor-network flywheel can't start without a first-class vendor entity decoupled from "client" semantics | Live; promoted to firm-scope |
| **MSME 45-day watchlist** as a first-class entity | Sec 43B(h) compliance is regulatory wedge; needs surfaced UI, not buried in vendor master | Live; daily watchlist alerts |
| **WhatsApp Cloud API integration** | Vendor invitation acceptance depends on sub-30s friction; WhatsApp is the verified-low-friction channel | Live |

Two architecture pre-investments are *seeded* in Phase 2 for Phase 3 / 4 readiness:

| Pre-investment | Phase 2 status | Phase 3/4 use |
|---|---|---|
| **AA TSP / FIU integration architecture** | Provider-interface scaffolding seeded; no live AA integration yet | Phase 3 — first lender-side pilot |
| **Public-graph query API with consent-flow** | Schema-only; no public endpoint yet | Phase 4 — institutional consumer subscription |

## Phase 2 → Phase 3 transition triggers

The transition gates from [the composite plan](/caos/flywheel/composite/):

- At least **5 lakh validated vendor nodes** in the fact graph (3% of the modelled 17 lakh)
- At least **one Big-6 audit firm has expressed inbound interest** (driven by [NFRA's 94 disciplinary orders](https://taxguru.in/company-law/action-nfra-prevent-audit-failure-regulatory-lapses.html))
- At least **one pilot listed-company in-house team is using CAOS** for AP/AR reconciliation
- **SOC 2 Type II + ISO 27001 + DPDP DPA** ready (Big-6 procurement pre-condition)

If these are true by Month 21, Phase 3 lighthouse engagements ship in Q4 of Year 2, and the Audit Workspace ignites in Q1 of Year 3.

## Cross-references

- The verified GST taxpayer universe (1.51 cr) and e-invoice math is at [/caos/market/](/caos/market/).
- The 14 stakeholder classes including S11 (Counterparty: Vendor) and S12 (Counterparty: Customer) are at [/caos/stakeholders/](/caos/stakeholders/).
- The Phase 1 → Phase 2 transition triggers are at [/caos/flywheel/composite/](/caos/flywheel/composite/).
- The decision D7 (AA / GSP / ERI ecosystem participation) is at [/caos/decisions/d1-d7/](/caos/decisions/d1-d7/).
