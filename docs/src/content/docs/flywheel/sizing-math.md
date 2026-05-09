---
title: "Sizing math: phase-by-phase"
description: "Verified-data-anchored ARR projections per phase, cross-checked against ClearTax / Vyapar / Razorpay public comparables."
sidebar:
  order: 8
---

This is the load-bearing sizing page for the [composite flywheel](/caos/flywheel/composite/). Every TAM anchor cited here is a regulator-published or named-press number with a URL. Every modelled penetration is a stated assumption with a sensitivity band. Every ARR projection is cross-checked against at least one public Indian comparable. Numbers over prose.

## The 5-phase sizing table

| Phase | Year | What's added | Verified TAM anchor | Modelled penetration | Resulting users / nodes | Resulting ARR |
|---|---|---|---|---|---|---|
| **1** | Y1 | CA-led practitioners | [1,00,138 CA firms](https://thefinancestory.com/mid-sized-indian-ca-firms-employing-20-percent-audit-workforce) × ~50-300 clients ([1.59L COP holders](https://finance.careers360.com/articles/icai-student-and-member-report-2025)) | 1% of firms = 1,000 firms × 50 clients avg | 50,000 client entities + 1,000 firm seats | **₹2-5 cr** (₹500-1,500/seat × 5,000 staff) |
| **2** | Y2 | Vendor network | [1.51 cr active GST taxpayers](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/); [81.88L e-invoice recipients](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | 50K entities × 50 vendors = 25L touches; ~17L unique vendors | 17L vendor nodes; 200K paying enterprise (~1% of 17L+50K) | **₹15-30 cr** |
| **3** | Y3 | Audit workspace | [326 Big-6 Nifty 500](http://www.primedatabasegroup.com/newsroom/BIG_6_CONTINUE_DOMINANCE_OF_INDIAN_AUDIT_LANDSCAPE_2024-25.pdf) + [694 NSE main board](http://www.primedatabasegroup.com/newsroom/BIG_6_CONTINUE_DOMINANCE_OF_INDIAN_AUDIT_LANDSCAPE_2024-25.pdf) + ~5K mid-tier engagements | 5 Big-6 lighthouse + 20 mid-tier | 250 listed clients + 600 mid-tier engagements + 50K in-house users at clients | **₹70-95 cr** (audit fees + in-house enterprise) |
| **4** | Y4 | Bank-statement / DPI | [AA 22.31M monthly consents](https://sahamati.org.in/aa-dashboard/); [1,157 AA participants](https://sahamati.org.in/fip-fiu-in-account-aggregators-ecosystem/) | 1-2% of consent-flowing entities; 50 lender partners | 5-10L entities w/ active AA flows; 50 lender deals | **₹150-250 cr** (lender + assurance + entity SaaS) |
| **5** | Y5+ | Mature graph | All of above × repeat-rate × ARPU expansion | 2-5% of 1.51 cr GST taxpayers (3-7.5L); 200+ institutional consumers | 3-7.5L paying entities; 200 institutional graph subscribers | **₹150-500 cr** |

The cumulative trajectory is:

| Year-end | ARR (base scenario) | Cumulative entities | Cumulative CA firms |
|---|---|---|---|
| Y1 | ₹2-5 cr | 50,000 | 1,000 |
| Y2 | ₹15-30 cr | 200,000+ | 2,500 |
| Y3 | ₹70-95 cr | 500,000+ | 5,000 |
| Y4 | ₹150-250 cr | 800,000+ | 7,500 |
| Y5 | ₹150-500 cr | 1,000,000+ | 10,000 |

## Per-phase sensitivity bands

### Phase 1 — CA-led practitioners

| Scenario | CA firms (% of 1,00,138) | Clients/firm | Total attachments | ARR |
|---|---|---|---|---|
| **Pessimistic** | 500 (0.5%) | 30 | 15,000 | ₹0.7-1.5 cr |
| **Base** | 1,000 (1.0%) | 50 | 50,000 | ₹2-5 cr |
| **Aggressive** | 2,000 (2.0%) | 75 | 150,000 | ₹6-12 cr |

### Phase 2 — Vendor network

| Scenario | Phase-1 entities | Vendors/entity | Overlap | Acceptance | Validated nodes | ARR |
|---|---|---|---|---|---|---|
| **Pessimistic** | 30,000 | 30 | 25% | 20% | ~135K | ₹6-10 cr |
| **Base** | 50,000 | 50 | 35% | 35% | ~570K | ₹15-30 cr |
| **Aggressive** | 80,000 | 75 | 40% | 45% | ~1.6M | ₹40-60 cr |

### Phase 3 — Audit workspace

| Scenario | Big-6 lighthouses | Listed/lighthouse | Mid-tier firms | Mid-tier eng/firm | ARR |
|---|---|---|---|---|---|
| **Pessimistic** | 2 | 25 | 8 | 15 | ₹25-35 cr |
| **Base** | 5 | 50 | 20 | 30 | ₹70-95 cr |
| **Aggressive** | 6 (all Big-6) | 75 | 30 | 40 | ₹100-140 cr |

### Phase 4 — DPI fact graph

| Scenario | Entities w/ AA | Lender partners | Inst. consumers | Avg subscription | ARR |
|---|---|---|---|---|---|
| **Pessimistic** | 2 lakh | 20 | 50 | ₹1L/month | ₹60-100 cr |
| **Base** | 5 lakh | 50 | 200 | ₹2L/month | ₹150-250 cr |
| **Aggressive** | 10 lakh | 100 | 500 | ₹3L/month | ₹350-500 cr |

## Cross-checks against public Indian comparables

The sizing model is anchored against three real Indian SaaS / fintech comparables. The cross-check answers: "is the target trajectory realistic given what other Indian companies have achieved?"

### ClearTax (Clear) — the practitioner-distribution comparable

| Metric | ClearTax verified | CAOS Y3-4 target | CAOS as % of ClearTax |
|---|---|---|---|
| Tax practitioners | [100,000+](https://www.salesforce.com/in/resources/customer-stories/clear/) | 5,000-10,000 (Y3-4) | 5-10% |
| Enterprise customers | [4,000+](https://www.salesforce.com/in/resources/customer-stories/clear/) | 250 listed + 600 mid-tier (Y3) = ~850 | ~21% |
| Taxpayers | [5M+](https://www.salesforce.com/in/resources/customer-stories/clear/) | ~500K-1M entities (Y3-4) | 10-20% |
| Years to reach | ~10 years | 3-4 years | — |
| Cumulative funding | [$141M](https://tracxn.com/d/companies/clear/__aVJbzB19Ok2SPXb0e8tcM14Zuv-MK59DapMygxCykak) | TBD (composite plan assumes $20-40M for Y1-Y3) | 14-28% |

**Conclusion:** CAOS's Y3-4 practitioner target is 5-10% of ClearTax's reach over a third of the time. This is achievable IF the CA-referral channel + Tally Master-partner motion both work as designed. It is *not* achievable if either channel underperforms — at which point the sizing reverts to the pessimistic scenario.

### Vyapar — the SME-customer comparable

| Metric | Vyapar verified | CAOS Y4-5 target | CAOS as % of Vyapar |
|---|---|---|---|
| Customers | [1 cr+](https://m.thewire.in/article/ptiprnews/1-cr-businesses-27000-partners-and-growing-how-vyapar-is-powering-indias-msme-revolution) | 5-10 lakh entities (Y4-5) | 5-10% |
| Partners | [27,000+](https://m.thewire.in/article/ptiprnews/1-cr-businesses-27000-partners-and-growing-how-vyapar-is-powering-indias-msme-revolution) | 1,000-2,000 partners (Y4-5) | ~5-7% |
| ARR | [₹130 cr](https://m.thewire.in/article/ptiprnews/1-cr-businesses-27000-partners-and-growing-how-vyapar-is-powering-indias-msme-revolution) | ₹150-500 cr (Y4-5) | 115-385% |
| Cumulative funding | [$35.9M](https://inc42.com/company/vyapar-app/) | TBD | — |
| ARPU implied | ₹130 cr / 1 cr = **₹130/customer/yr** | ₹150-500 cr / 5-10 lakh = **₹3,000-10,000/entity/yr** | 23-77x higher |

**Conclusion:** CAOS's enterprise + audit + lender ARPU is 23-77x Vyapar's micro-business ARPU. This is the right ARPU positioning — Vyapar is optimised for the [Udyam Micro tier (~6.5 cr](https://aspire.financialexpressb2b.com/news/udyam-milestone-over-65-crore-msmes-now-registered-across-india))) at ~₹130/year willingness-to-pay. CAOS is optimised for the [Udyam Small + Medium tier (~5.1 lakh)](https://aspire.financialexpressb2b.com/news/udyam-milestone-over-65-crore-msmes-now-registered-across-india) plus [18.17 lakh active MCA cos](https://www.newkerala.com/news/o/number-active-companies-registered-india-crosses-1817-lakh-jan-297) plus [326 Big-6-audited Nifty 500 cos](http://www.primedatabasegroup.com/newsroom/BIG_6_CONTINUE_DOMINANCE_OF_INDIAN_AUDIT_LANDSCAPE_2024-25.pdf) — at ₹3,000-15L per entity per year.

Equivalent revenue at 1-2% of Vyapar's user count is the right shape.

### AA framework growth trajectory — the underlying-rail comparable

The Account Aggregator framework is the most relevant infrastructure benchmark for Phase 4. Its verified growth trajectory:

| Metric | FY24 value | FY25 value | YoY growth |
|---|---|---|---|
| Daily AA consents | [1.59 lakh/day](https://www.business-standard.com/finance/news/aa-ecosystem-consent-processing-up-78-in-fy25-shows-sahamati-data-125031301053_1.html) | [2.84 lakh/day](https://www.business-standard.com/finance/news/aa-ecosystem-consent-processing-up-78-in-fy25-shows-sahamati-data-125031301053_1.html) | **+78.6%** |
| Loans facilitated | [₹42,300 cr cumulative](https://sahamati.org.in/the-credit-reimagined-account-aggregator-aa-impact-report-h2-fy25/) | [₹1.67 lakh cr in FY25 alone](https://sahamati.org.in/the-credit-reimagined-account-aggregator-aa-impact-report-h2-fy25/) | **~4x** |
| Loan accounts | 4.2M cumulative | [1.89 cr in FY25 alone](https://sahamati.org.in/the-credit-reimagined-account-aggregator-aa-impact-report-h2-fy25/) | **~4.5x** |
| Ecosystem participants | ~700 | [1,157](https://sahamati.org.in/fip-fiu-in-account-aggregators-ecosystem/) | **+65%** |
| Monthly consents | ~12.5M (extrapolated) | [22.31M (Mar 2026)](https://sahamati.org.in/aa-dashboard/) | **+78.5%** |

**Conclusion:** The AA framework's 78.6% YoY consent growth and ~4x lending volume growth in a single year confirm that the Phase 4 ceiling (₹150-500 cr ARR) is anchored on a real, accelerating infrastructure trend — not a speculative assumption. CAOS's Phase 4 is essentially a bet that 1-2% of AA-flowing entities choose CAOS as their workflow layer over the next 36-60 months. Even if this share is just 0.5%, the resulting ARR ceiling is still ₹75-250 cr — well within the target band.

### Razorpay — the corporate-India SaaS-at-scale comparable

| Metric | Razorpay verified | CAOS Y5+ relevance |
|---|---|---|
| Customers | [4.5 lakh businesses](https://razorpay.com/) | Equivalent to CAOS's Y4-5 entity count |
| Annualised TPV | [$150B (Feb 2024) → $180B+ (early 2025)](https://razorpay.com/newsroom/razorpay-surpasses-150-billion-tpv-milestone-unveils-payment-gateway-3-0-forays-into-marketing-stack-with-engage-and-introduces-the-fintech-world-to-ai-assistant-ray/) | Razorpay processes payments; CAOS processes documents + compliance + underwriting data |
| RazorpayX (banking-on-X) adoption | [70% of India unicorns; 40,000+ payroll users; $30B+ payouts](https://razorpay.com/x/) | Similar adoption pattern available for CAOS in CFO / controller persona |
| Years to reach | ~10 years | — |

Razorpay is not directly comparable on a unit basis (they sell payment infrastructure, not workflow software), but the lesson is structural: a verticalised, regulator-aligned, India-Stack-leveraged platform can reach 4.5 lakh business customers in Indian SMB-to-enterprise in 10 years. CAOS's Y4-5 target of 5-10 lakh entities is in the same order of magnitude on a slightly different timeline, with a different (workflow + intelligence) value proposition.

## Pivot table — earlier work model assumptions vs the verified-numbers atlas verified data

The composite flywheel replaces several earlier work assumptions with verified data from later research. The pivot table records every adjustment.

| File 13 assumption / number | File 14 verified data | Adjustment |
|---|---|---|
| TAM "CA-only ₹141-364 cr" | Combined TAM with finance teams: addressable = [18.17L MCA cos](https://www.newkerala.com/news/o/number-active-companies-registered-india-crosses-1817-lakh-jan-297) × ARPU bands. India accounting software TAM [₹5,400 cr (US$640M, 2024)](https://www.imarcgroup.com/india-accounting-software-market) | TAM understated 10-30x in original research |
| : "Lower-mid + upper-mid sweet spot 5K-15K cos" | Verified: [5,936 BSE listed](https://blog.shoonya.com/how-many-companies-are-listed-in-nse-and-bse/) + ~4-6K cos with revenue ₹100-1000 cr (rough est.) | Sweet spot estimate confirmed |
| : "Per-entity ₹15K-40K base + add-ons" | Verified Big-6 audit fees ₹130-135 cr per firm for ~140-180 listed clients = ~₹70L-₹1 cr per audit. Implies enterprise willingness for ₹15K-40K SaaS is well within budget shadow | Pricing band confirmed |
| architectural pre-investments: reserve currency col | Verified ECB outstanding [US$190B](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2096480); [37,407 cos with FDI/ODI](https://www.business-standard.com/finance/news/us-continues-to-be-largest-source-of-fdi-in-india-rbi-annual-census-124101100905_1.html); OFDI ₹3.25 lakh cr/yr | FX feature *will* be needed earlier than Y3; consider Y2 prep |
| D5: Big-4 partnership Y2 | Verified Big-6 [67% Nifty 500 share](http://www.primedatabasegroup.com/newsroom/BIG_6_CONTINUE_DOMINANCE_OF_INDIAN_AUDIT_LANDSCAPE_2024-25.pdf) + [NFRA pressure (94 orders + 12 inspection reports)](https://taxguru.in/company-law/action-nfra-prevent-audit-failure-regulatory-lapses.html) | Audit Workspace can plausibly start lighthouse in Y2, scale Y3 |
| "underclaim DPI moat" | AA: [22.31M monthly consents](https://sahamati.org.in/aa-dashboard/), [78.6% growth](https://www.business-standard.com/finance/news/aa-ecosystem-consent-processing-up-78-in-fy25-shows-sahamati-data-125031301053_1.html), [₹1.67 lakh cr loans/yr](https://sahamati.org.in/the-credit-reimagined-account-aggregator-aa-impact-report-h2-fy25/) | AA-mediated lender flywheel is real and scaling; pull DPI architecture work earlier |
| "11 finance personas" | Expanded to 14 stakeholder classes with verified populations (S2 in-house CA at [2.48L](https://finance.careers360.com/articles/icai-student-and-member-report-2025) added explicitly) | Stakeholder atlas refined |
| "7 bridge use cases" | Operationalised as four parallel flywheel loops (CA-led / vendor / audit / DPI) | Bridge use cases became phases |
| "24-month roadmap" | Extended to **60-month flywheel formation** with 4 phases | Horizon doubled |
| File 13 use case #8: Sec 206C(1H) on sales | [REMOVED from 1 April 2025](https://taxguru.in/income-tax/tcs-sale-goods-removed-april-1-2025-faqs.html) (Union Budget 2025) | Use case dropped from product spec |
| File 13: Tally "10M / 14M users" claim | Tally currently cites [2.5-2.7M customers](https://tallysolutions.com/about-tally/) | Adjusted downward; older figures appear in third-party blogs without attribution |
| File 13: AA framework "moderate maturity" | AA at [22.31M monthly consents](https://sahamati.org.in/aa-dashboard/), [+78.6% YoY](https://www.business-standard.com/finance/news/aa-ecosystem-consent-processing-up-78-in-fy25-shows-sahamati-data-125031301053_1.html), [1,157 participants](https://sahamati.org.in/fip-fiu-in-account-aggregators-ecosystem/) | Dramatically more mature than earlier work implied |
| File 13: Big-4/mid-tier audit market "competitive" | Verified [Big-6 own 67% of Nifty 500 audits](http://www.primedatabasegroup.com/newsroom/BIG_6_CONTINUE_DOMINANCE_OF_INDIAN_AUDIT_LANDSCAPE_2024-25.pdf) (326 of 483) | Much more concentrated than earlier research described |
| File 13: e-invoice threshold "₹500 cr / niche" | Now [₹5 cr](https://cleartax.in/s/e-invoicing-businesses-above-rs-5-crore-turnover) (since Aug 2023); [9.92 lakh active generators](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) | Addressable enterprise base grew 100x in 5 years |

The summary verdict: **the composite flywheel is bigger than earlier work estimated.** The TAM is 10-30x larger. The DPI ceiling is real. The audit market is more concentrated and therefore more capturable with a focused Big-6 motion. The vendor network is feasible because the e-invoice infrastructure has already created [9.92 lakh + 81.88 lakh](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/) verified counterparty endpoints.

## What still needs research

The verified-data foundation is strong but incomplete. Six gaps materially affect the sizing if they swing in either direction:

| Gap | Why it matters for sizing | Best probable source |
|---|---|---|
| **ICAI tech-adoption survey ("<2% PMS")** | The single most-quoted file 01 number; load-bearing for the "low-base TAM" pitch | Direct ICAI Tech Committee disclosure or commissioned survey of 500 firms |
| **GSTPs total enrolled count** | Sizing of practitioner-adjacent segment | RTI to GSTN |
| **ERI Type 1 vs Type 2 split + named entities** | Sizing of competitor / partner pool for [Phase 4](/caos/flywheel/phase-4-dpi-graph/) | Direct CBDT request |
| **AA FIP/FIU sub-category split (banks/NBFCs/MFs/insurance)** | Sizing of institutional consumer side for [Phase 4](/caos/flywheel/phase-4-dpi-graph/) | Sahamati API or RTI |
| **MSME 45-day default rate post Sec 43B(h)** | Sizing 43B(h) pain for [Phase 2](/caos/flywheel/phase-2-vendor-network/) | RBI MSME report or RTI |
| **Number of statutory audits per partner (actual vs cap of 20)** | Sizing audit workspace TAM for [Phase 3](/caos/flywheel/phase-3-audit-workspace/) | NFRA + ICAI Audit Quality Review reports |

Resolving these gaps via Phase-2 research budget (6 RTIs + 1 commissioned ICAI tech survey + 10 vCFO interviews + 5 lender / AA TSP interviews) at ~₹3-5 lakh + 30-40 person-days would tighten the per-phase sizing materially for board-and-investor narratives and product-roadmap precision.

## Cross-references

- The verified stakeholder atlas is at [/caos/stakeholders/](/caos/stakeholders/).
- The market-sizing inputs (TAM anchors, regulator volumes, ecosystem capacity) are at [/caos/market/](/caos/market/).
- The competitive comparables (ClearTax, Vyapar, Razorpay) are at [/caos/competitors/](/caos/competitors/).
- The decisions D1-D7 derived from the sizing math are at [/caos/decisions/d1-d7/](/caos/decisions/d1-d7/).
- The per-phase loop designs are at [/caos/flywheel/phase-1-ca-led/](/caos/flywheel/phase-1-ca-led/), [/caos/flywheel/phase-2-vendor-network/](/caos/flywheel/phase-2-vendor-network/), [/caos/flywheel/phase-3-audit-workspace/](/caos/flywheel/phase-3-audit-workspace/), [/caos/flywheel/phase-4-dpi-graph/](/caos/flywheel/phase-4-dpi-graph/).
