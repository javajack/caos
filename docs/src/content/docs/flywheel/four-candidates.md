---
title: "Four candidate flywheels"
description: "Practitioner-Led, Vendor-Network, Audit-Workspace, DPI Fact Graph — the four loop designs evaluated, with their math, strengths, weaknesses, defensive moats."
sidebar:
  order: 2
---

Before settling on the [composite four-loop sequence](/caos/flywheel/composite/), four candidate flywheel designs were evaluated independently. Each was tested against verified Indian regulator and ecosystem data: ICAI, GSTN, MCA21, IBBI, Sahamati, NFRA, PIB. This page documents the side-by-side evaluation that led to the composite.

## The four candidates at a glance

| Candidate | Loop type | Activation energy | Ceiling | Time to ignite | Defensive moat |
|---|---|---|---|---|---|
| **A. CA-Led Practitioner Network** | Two-sided practitioner-client | Lowest | Capped at ~1.59L COP holders | 6-12 months | Switching cost from mapping memory + vendor-master accumulation |
| **B. Vendor-Network Fact Graph** | Multi-sided graph (Plaid-style) | High (needs base mass) | 1.51 cr GST taxpayers TAM | 18-30 months | Network — practically impossible to replicate at scale |
| **C. Audit-Workspace Bridge** | Triangulation (auditor + in-house + external CA) | Very high (Big-6 procurement) | 326 Nifty 500 + 5K mid-tier | 24-36 months | Auditor workflow stickiness + audit-committee non-tolerance for change |
| **D. DPI-Powered Fact Graph** | Data-graph + regulatory APIs | Highest (years of build) | ₹150-500 cr ARR | 36-60 months | Network + regulatory + integration depth combined |

## Candidate A — The CA-Led Practitioner Network

### The loop in 5 steps

1. **CA signs up to CAOS.** Brings 50-200 client entities into the system (typical solo practice serves 100-300 clients; small firm 200-500).
2. **Each client entity now has a CAOS presence** (their CA's portal). Clients access only when their CA invites them to a doc collection / billing / status view.
3. **As CAOS adds vendor onboarding**, each client invites *its* vendors to verify GSTIN/PAN/MSME status. Each vendor is itself an enterprise.
4. **Each vendor has its own CA** — who often is also onboarded by their own clients on CAOS. CA discovers CAOS via its client → CA brings own clients → loop continues.
5. **The fact graph compounds.** Each vendor verified once is a free verification for the next enterprise that pays them.

### Pre-conditions (verified)

| Anchor | Value | Source |
|---|---|---|
| Total CA firms in India | [1,00,138](https://thefinancestory.com/mid-sized-indian-ca-firms-employing-20-percent-audit-workforce) | The Finance Story (Oct 2025) |
| COP holders (in active practice) | [1,59,557](https://finance.careers360.com/articles/icai-student-and-member-report-2025) | ICAI 2025 Report via Careers360 |
| Avg client per firm (solo) | 50-100 | ICAI member surveys |
| Avg client per firm (small) | 100-500 | (same) |
| E-invoice generators (auto-validated) | [9.92 lakh](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | GST@8 Report (Jun 2025) |
| Tally partner network | [28,000+](https://tallysolutions.com/about-tally/) | Tally Solutions |
| UDINs annually issued | [~1.7 cr](https://udin.icai.org/) | ICAI UDIN portal |

### Flywheel math

- 1,000 CAs × 100 entities each = **1 lakh entity-attachments** (~0.5% of [18.17 lakh active MCA companies](https://www.newkerala.com/news/o/number-active-companies-registered-india-crosses-1817-lakh-jan-297), or 0.07% of 1.51 cr GST taxpayers)
- Each entity's vendor universe at avg 50-200 vendors → **5-20 lakh vendors invited** (rough)
- 30-40% are existing GSTIN holders → **1.5-8 lakh validated counterparty profiles after Year 1**
- Each validated counterparty is a node visible to the next enterprise that pays them — network compounds

### Strengths

- Uses existing CA distribution (the cheapest channel verified by file 12)
- Tally's [28K+ partner network](https://tallysolutions.com/about-tally/) and [ICAI's 51 overseas chapters and 176 India branches](https://taxguru.in/chartered-accountant/icai-75th-annual-report-celebrating-75-years-excellence.html) are pre-built distribution rails
- 1.7 cr UDINs/year proves CAs already use a digital infrastructure for every certificate they sign — the digital habit exists

### Weaknesses

- CA practice is concentrated in Tier-1/Tier-2 metros (West 32%, Central 21%, South 20% of ICAI distribution)
- 72% sole-prop CAs are time-poor and less likely to evangelise software
- Conversion from client-portal user to paying user is unproven at India scale

### Defensive moat

Switching cost compounds with mapping memory + vendor-master accumulation. Hard to dislodge once 1,000+ firms × 100 clients are wired into the system.

## Candidate B — The Vendor-Network Fact Graph (Plaid-for-Indian-vendors)

### The loop in 5 steps

1. **Enterprise E1 onboards CAOS** (direct, or via its CA per Candidate A).
2. **E1's 200 vendors are asked to register / validate.** Each vendor V provides its GSTIN, PAN, MSME status, bank, IRN-eligible status, contact.
3. **The validated vendor profile lives on CAOS** as a node in the fact graph.
4. **E2 onboards** (separate enterprise). E2 has ~30% vendor overlap with E1 statistically. Those 60 vendors are *already* in CAOS; E2 onboards them in 1 click instead of 1 hour.
5. **Each vendor receives invoices from many enterprises.** Each enterprise's CA can verify the vendor's filed-vs-claimed GSTR-1 vs GSTR-2B. The reconciliation engine works across the network, not just per enterprise.

A sixth and seventh step extend the loop into bank-side pull (covered in [Phase 2](/caos/flywheel/phase-2-vendor-network/)): lenders ([1,157 AA participants](https://sahamati.org.in/fip-fiu-in-account-aggregators-ecosystem/)) underwrite verified vendors for working-capital loans.

### Pre-conditions (verified)

| Anchor | Value | Source |
|---|---|---|
| Active GST taxpayers | [1,53,56,323 (~1.51 cr)](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | GST@8 Report / PIB |
| E-invoice generators (active) | [9.92 lakh](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | GST@8 Report |
| E-invoice recipients (registered) | [81.88 lakh](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | GST@8 Report |
| AA ecosystem participants | [1,157](https://sahamati.org.in/fip-fiu-in-account-aggregators-ecosystem/) | Sahamati (Mar 2026) |
| Sec 194Q (TDS on purchases) | [Active; turnover > ₹10 cr trigger](https://cleartax.in/s/an-overview-on-section-194q-of-the-income-tax-act-1961-ita) | ClearTax |
| MSME 45-day clock + Sec 43B(h) | Active regulatory pull on vendor-master accuracy | Income Tax Act |

### Flywheel math

- If CAOS reaches even **1% of 1.51 cr GST taxpayers** (1.51 lakh enterprises), each contributing ~50-200 vendors:
 - Gross vendor-touches = **75 lakh – 3 cr**
 - Deduplicated unique vendor profiles at typical 30-40% network overlap = **20-50 lakh validated nodes**
- For comparison, [Sahamati's AA framework hit 28.46 cr account-link footprint over ~5 years](https://sahamati.org.in/aa-dashboard/). CAOS could plausibly hit 20-50 lakh in 4-5 years given vendor concentration is much higher than retail bank accounts
- If 5% of those 20-50 lakh vendors then start using CAOS for their *own* billing → 1-2.5 lakh paying business users at vendor-side ARPU of ₹3-10K/month = **₹360 cr – ₹3,000 cr ARR potential at the vendor tier alone**

### Strengths

- **Strongest network effect** of all four candidates
- Vendor verified once = pre-onboarded for every next enterprise that pays them
- Tied directly to AA + GSP + IRP regulatory infrastructure (verified daily volume)

### Weaknesses

- Requires Phase-2/3 product surface (vendor onboarding + KYC + master at scale)
- Privacy/consent design under [DPDP Act (May 2027 enforcement)](https://www.meity.gov.in/) is non-trivial
- Needs critical mass of enterprises before vendors see value — chicken-and-egg

### Defensive moat

Plaid-style network. **Hardest possible to replicate once at scale.** Aligns with India Stack ethos (DPI-first, consent-driven).

## Candidate C — The Audit-Workspace Bridge (Big-6 + Mid-Tier + Client)

### The loop in 6 steps

1. **Big-6 audit firm (or mid-tier) adopts CAOS Audit Workspace** for one engagement (lighthouse pilot at heavily discounted price).
2. **The client of that audit firm is required to use CAOS** (or its API) for PBC + query response — auditor pushes; client accepts because the alternative is Caseware on auditor side + Excel chaos on client side.
3. **The client's in-house finance team adopts CAOS.** Their external CA (often a different firm doing tax audit + advisory) joins because the data lives there.
4. **The auditor's next engagement now has higher CAOS adoption probability** — clients learn CAOS is "what auditors prefer."
5. **After 2-3 engagement cycles, auditor uses CAOS as the default tool.** Each new client onboarded inherits the workspace. Mid-tier firms join because Big-6 is on it.
6. **Spillover:** the same audit team does internal audit, IFC review, BRSR assurance — all reuse the same workspace.

### Pre-conditions (verified)

| Anchor | Value | Source |
|---|---|---|
| Big-6 share of Nifty 500 audits | [326 of 483 (~67%)](http://www.primedatabasegroup.com/newsroom/BIG_6_CONTINUE_DOMINANCE_OF_INDIAN_AUDIT_LANDSCAPE_2024-25.pdf) | PrimeDatabase (FY25) |
| Big-6 share of NSE main board | [694 of 2,069 (~34%)](http://www.primedatabasegroup.com/newsroom/BIG_6_CONTINUE_DOMINANCE_OF_INDIAN_AUDIT_LANDSCAPE_2024-25.pdf) | PrimeDatabase |
| Big-6 partners (combined) | ~3,400+ (EY 1,000+, Del ~700, PwC 525, KPMG 615, GT 224, BDO 350+) | [Business Standard](https://www.business-standard.com/companies/news/big-four-indian-firms-revenue-growth-consulting-fy24-outpaces-global-125010700317_1.html), [The Finance Story](https://thefinancestory.com/big-4-and-bdo-india-add-over-3300-partners) |
| Statutory audit cap per partner | [20 audits](https://ebizfiling.com/blog/company-audit-ceiling-limit-under-the-companies-act-2013/) (Sec 141(3) Companies Act 2013) | Ebizfiling |
| NFRA disciplinary orders | [94 cumulative](https://taxguru.in/company-law/action-nfra-prevent-audit-failure-regulatory-lapses.html) (19 firms + 84 CAs penalised) | TaxGuru on NFRA |
| NFRA inspection reports published | 12 since Dec 2022 | (same) |
| ICAI in-house members (industry CAs) | [2,48,072 (60.8% of total)](https://finance.careers360.com/articles/icai-student-and-member-report-2025) | ICAI 2025 Report |

### Flywheel math

- 326 Nifty 500 lighthouse logos × 1 audit firm per company = **326 firm-engagement adoptions possible in Year 2-3**
- Each Big-6 firm has 100-200 listed clients → if 5 firms × 150 logos = **750 client adoptions plausible in Year 3-4**
- Each adopted listed client's in-house team (avg 30-100 finance staff) adopts CAOS = **22,500-75,000 enterprise users at the in-house tier in Year 4**
- Mid-tier firms ([T R Chadha 1,000+ professionals](https://trchadha.com/the-firm/), Walker Chandiok, RSM, MSKA, Nangia, ASA) join at heavy discount once Big-6 normalises; adds another 1-2K firm adoptions
- **Pricing:** ₹25-75K per audit per year (auditor fee), plus ₹3-15L per listed client per year (in-house side)
- **Math:** 750 listed × ₹6L = ₹45 cr ARR + 5K firm-engagements × ₹50K = ₹25 cr ARR by Year 4 from this lever alone = **~₹70 cr ARR**

### Strengths

- **Highest individual deal size** of all four candidates
- Strongest competitive whitespace — no Indian competitor; Caseware is auditor-only
- Locks in regulatory tailwind (NFRA-driven audit-tooling demand)

### Weaknesses

- Big-6 sales motion is brutal (12-18 months, procurement, security review, on-prem demands)
- SOC 2 Type II + ISO 27001 + DPDP DPA are pre-conditions
- Long lead time before flywheel ignites

### Defensive moat

Once a Big-6 firm standardises on CAOS, replacement risk is extremely low — auditor workflow is sticky and audit committees do not tolerate disruption mid-engagement-cycle.

## Candidate D — The DPI-Powered Fact Graph (long-term, highest ceiling)

### The loop in 5 steps

1. **Each entity on CAOS connects bank statements via AA** (consent-driven), GST data via GSP, IT data via ERI, MCA via aggregator, EPFO/ESIC via portal connectors.
2. **The entity's compliance health, cash flow, vendor-customer graph, employee growth, statutory-deduction history is all live**, indexed by PAN/GSTIN/CIN.
3. **Lenders, investors, auditors, advisors all want access to this graph** for underwriting / diligence / assurance. CAOS becomes the Plaid + Carta + ERP-snapshot of Indian businesses — *consent-mediated*.
4. **More entities → richer graph → more institutional consumers** → CAOS can offer free basic features to enterprises in exchange for graph access (with consent), funded by data-graph subscriptions from the institutional side.
5. **Cross-loop:** the same consent infrastructure (AA framework) drives lending decisions. CAOS-onboarded SMEs see better loan terms because their data is consent-shareable. Adoption pulled by SME demand for credit, not just compliance.

### Pre-conditions (verified)

| Anchor | Value | Source |
|---|---|---|
| AA monthly consents (Mar 2026) | [22.31 million](https://sahamati.org.in/aa-dashboard/) | Sahamati dashboard |
| AA YoY consent growth | [+78.6%](https://www.business-standard.com/finance/news/aa-ecosystem-consent-processing-up-78-in-fy25-shows-sahamati-data-125031301053_1.html) | Business Standard / Sahamati |
| AA cumulative accounts linked | [28.46 cr](https://sahamati.org.in/aa-dashboard/) | Sahamati |
| AA loans facilitated FY25 | [₹1.67 lakh cr / 1.89 cr loans](https://sahamati.org.in/the-credit-reimagined-account-aggregator-aa-impact-report-h2-fy25/) | Sahamati H2 FY25 impact report |
| AA ecosystem participants | [1,157](https://sahamati.org.in/fip-fiu-in-account-aggregators-ecosystem/) | Sahamati |
| RBI-licensed NBFC-AAs | [17](https://sahamati.org.in/account-aggregators-in-india/) | Sahamati |
| GSPs empanelled | [62](https://www.microvistatech.com/blog/gst-suvidha-providers-gsp-list-2025/) | Microvistatech |
| ERIs (named entities) | [50+](https://cleartax.in/s/e-return-intermediary-eri-income-tax) | ClearTax |
| DigiLocker registered users | [62 cr+](https://www.digilocker.gov.in/) | DigiLocker |
| DigiLocker documents issued | [950 cr+](https://www.digilocker.gov.in/) | DigiLocker |

### Flywheel math

- AA's growth trajectory ([1.59 lakh daily consents FY24 → 2.84 lakh FY25 = +78.6% YoY](https://www.business-standard.com/finance/news/aa-ecosystem-consent-processing-up-78-in-fy25-shows-sahamati-data-125031301053_1.html)) suggests **5-7 cr cumulative consents by 2027**
- If CAOS holds the entity-side relationship for even 5% of AA consent-flowing entities = **5-10 lakh entities with consent infrastructure**
- Consumer-side TAM: 1,157 AA participants today + ~100 SEBI-registered investment advisors + ~50 large NBFCs with retail-MSME books + Big-6 + 50 mid-tier audit firms = **1,500-2,000 institutional consumers**
- Average graph-access subscription ₹50K-5L/month → **₹200 cr - ₹2,000 cr ARR potential by Year 5+**
- Even 1% of [Sahamati's reported ₹1.67 lakh cr lending FY25](https://sahamati.org.in/the-credit-reimagined-account-aggregator-aa-impact-report-h2-fy25/) flowing through CAOS-mediated entities = ₹1,670 cr lending volume → ~₹17-50 cr in lender-side fees if CAOS participates

### Strengths

- **Highest absolute ceiling** of all four candidates
- Multiple monetisation sides (entity SaaS + lender access fees + assurance fees + advisory subscriptions)
- Aligns perfectly with India Stack / DPDP regulatory direction

### Weaknesses

- 3-5 year payoff
- Heavy build (AA TSP / FIU certification; GSP partner contracts; DPDP-compliant consent flows)
- Requires data-platform thinking on top of SaaS thinking

### Defensive moat

Network + regulatory + integration depth combined. **Practically impossible to replicate at scale** once established.

## Why the composite wins: each loop's gap is the previous loop's strength

Looking across the four candidates, a clean pattern emerges. **Every candidate's biggest weakness is solved by the candidate that came before it in the natural sequence.**

| Candidate | Biggest weakness | Solved by |
|---|---|---|
| A. CA-Led | Capped at ~1.59L COP holders ceiling | B. Vendor-Network expands TAM to 1.51 cr GST taxpayers |
| B. Vendor-Network | Chicken-and-egg — needs base mass | A. CA-Led brings in the first 50K entities |
| C. Audit-Workspace | 12-18 month enterprise sales motion | A + B already have entity adoption when auditor lands |
| D. DPI-Graph | 3-5 years to monetise | A + B + C already have data graph + lender appetite |

This is not an accident. The atomic primitives identified in (P1 ingest, P2 classify, P3 calendar, P4 reconcile, P5 e-sign, P6 file, P7 communicate, P8 review, P9 post, P10 confirm, P11 audit-trail, P12 collect, P13 access, P14 valuation, P15 cost) are *the same primitives* across all four loops. What changes is the network density at which they operate.

In Phase 1, P1 ingest is "CA receives a document from one client." In Phase 2, P1 ingest is "vendor receives an invoice from any of N enterprises CAOS serves." In Phase 3, P1 ingest is "auditor receives a PBC item from any of N listed-co clients." In Phase 4, P1 ingest is "lender receives a consent-flowing AA bundle from any of N pre-onboarded SMEs."

**Same primitive, four progressively denser networks.** This is why the composite is not just "do all four" — it is "use the same architecture, run it at four progressively higher network densities, where each density unlocks the next."

## The choice rationale

The composite wins because:

1. **No single loop covers the full strategic horizon** — each is either too capped, too slow, or too late to monetise on its own.
2. **Each loop's weakness is the previous loop's strength** — the sequence is naturally self-supporting.
3. **The atomic primitives are the same** — no architectural rework required between phases; only network-density expansion.
4. **The defensive moat compounds** — by Year 4, displacement requires rebuilding all four loops simultaneously.
5. **Verified data supports every transition** — each Phase N → Phase N+1 trigger is grounded in observable, regulator-published metrics.

For the full sequenced transition logic, see [The composite flywheel](/caos/flywheel/composite/). For the per-phase verified math, see [Phase 1](/caos/flywheel/phase-1-ca-led/), [Phase 2](/caos/flywheel/phase-2-vendor-network/), [Phase 3](/caos/flywheel/phase-3-audit-workspace/), [Phase 4](/caos/flywheel/phase-4-dpi-graph/), and [Sizing math](/caos/flywheel/sizing-math/).
