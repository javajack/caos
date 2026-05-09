---
title: "25 finance-team use cases + 7 bridge use cases"
description: "What the 15 atomic primitives compose into. The ranked finance-team catalogue, the 7 bridge cases that cross the CA-finance-team boundary, and the explicit cheap-to-add vs fundamental-rearchitecture line."
sidebar:
  order: 3
---

This is the buyer-facing catalogue. The [15 atomic primitives](/caos/product/atomic-primitives/) are the substrate; the use cases below are what they compose into when wrapped in a UI, a buyer persona, a price tag, and a contract.

The catalogue is in three parts:

1. **The 25 ranked finance-team use cases** — each scored on pain × frequency × WTP × adjacency to existing CAOS primitives × competitive whitespace.
2. **The 7 bridge use cases** — workflows where the same document, notice, or audit query crosses the CA-to-finance-team boundary. The single biggest reason CAOS can credibly own both sides.
3. **Cheap-to-add vs fundamental-rearchitecture** — the explicit line between what extends naturally from the primitives (18 of the 25 use cases land here) and what requires a new product line CAOS will deliberately not build.

## Part 1 — The 25 ranked finance-team use cases

Personas are coded F1 (CFO/Finance Head), F2 (Financial Controller), F3 (GST/Indirect Tax Lead), F4 (Direct Tax Lead), F5 (AP Manager), F6 (AR Manager), F7 (Statutory Audit Liaison), F8 (Internal Audit Manager), F9 (Treasury Manager), F10 (Compliance Officer / In-house CS), F11 (Subsidiary/Group Consolidation Lead). WTP bands are per-month per-entity in INR.

| # | Use case | Persona owner | Why ERP leaves a gap | Primitive used | WTP/month |
|---|---|---|---|---|---|
| 1 | GSTR-2B vs purchase register reco at scale (multi-GSTIN) | F3 | SAP/Oracle do not reconcile against GSTN; ClearTax breaks past 10 GSTINs ([1.34 cr regular GST taxpayers, 9.92L e-invoice generators](https://a2ztaxcorp.net/gst-8-years-report-released-gstn-highlights-record-revenue-compliance-milestones/)) | P1 + P7 + P9 | ₹25K-1L |
| 2 | TDS reco: 26AS / AIS / Form 16A vs books vs Form 26Q | F4 | No tool ties all four; quarterly fire-drill | P1 + P7 | ₹20K-75K |
| 3 | MSME 45-day payment + MSME-1 + Sec 43B(h) provisioning | F5 | SAP has flag but no watchlist; 43B(h) hits IT computation directly | P2 + P3 + P11 | ₹30K-1L |
| 4 | Vendor onboarding + KYC + MSME + bank validation in one flow | F5 / Procurement | Manual today; vendor master is a swamp | P1 + P2 + P8 | ₹25K-1.5L |
| 5 | Notice intake from GST/IT/MCA/PF/ESI/Customs portals → triage → reply | F10 | No tool aggregates across portals ([4.2L+ GST notices in FY22-23](https://durity.com/en-in/blog/gst-notices-causes-and-solutions/)) | P6 + P13 | ₹25K-1L |
| 6 | Statutory audit PBC + query log + working-paper handover | F7 + Big-4 | Caseware on auditor; Excel on client; Big 6 own [67% of Nifty 500 audits](http://www.primedatabasegroup.com/newsroom/BIG_6_CONTINUE_DOMINANCE_OF_INDIAN_AUDIT_LANDSCAPE_2024-25.pdf) | P4 + P5 + P10 + P11 | ₹20K-75K |
| 7 | Year-end balance confirmation campaign (vendors + customers) | F7 | Manual mail-merge for 500-2K letters | P4 + P10 | ₹15-50K seasonally |
| 8 | Sec 194Q TDS-on-purchases tracking | F4 | ERP does not compute ₹50L-per-counterparty threshold + reco. **Note:** Sec 206C(1H) was *removed* by Budget 2025 effective Apr 1, 2025 ([source](https://taxguru.in/income-tax/tcs-sale-goods-removed-april-1-2025-faqs.html)). Sec 194Q remains active (buyer turnover >₹10 cr, trigger >₹50 lakh per seller per FY) per [ClearTax 194Q overview](https://cleartax.in/s/an-overview-on-section-194q-of-the-income-tax-act-1961-ita). The original use case combined both sections; this revision covers Sec 194Q only. | P2 + P7 + P9 | ₹15K-50K |
| 9 | E-Invoice / IRN exception handling + GSTR-1 reco | F3 | IRP issues; cancellation windows; mismatches surface late ([₹5 cr threshold since Aug 2023](https://cleartax.in/s/e-invoicing-businesses-above-rs-5-crore-turnover); 30-day reporting cap effective [Apr 1, 2025 for AATO ≥ ₹10 cr](https://tax2win.in/guide/e-invoicing-gst)) | P1 + P7 | ₹15K-50K |
| 10 | Hearing prep pack assembly (reply + annexures + case laws + orders) | F4 / Litigation | No tool; assistants build PDFs manually | P5 + P6 | ₹25K-1L |
| 11 | IFC (ICFR) controls evidence + testing log | F8 | Excel today; Sec 134(5)(e) Companies Act mandate | P4 + P5 + P8 + P11 | ₹30K-1.5L |
| 12 | Multi-bank reconciliation (10-50 accounts, statement parsing) | F9 | Each bank has own format; SAP BRS is clunky | P1 + P7 + P13 | ₹20K-75K |
| 13 | Intercompany reconciliation + elimination working | F11 | HFM is overkill for ₹500 cr; Excel breaks | P7 + P9 | ₹25K-1L |
| 14 | Related-party transaction tracking (Sec 188 + IND-AS 24 + SEBI Reg 23) | F10 + Audit committee | RPT register lives in 3 places | P2 + P5 + P11 | ₹15K-50K |
| 15 | ROC/MCA event-based filings tracker (CHG, MGT-14, DIR-12, etc.) | F10 | MCA21 does not push reminders for event triggers ([80.26L MCA21 forms in 10 months FY24-25](https://www.caclubindia.com/news/mca21-records-80-26-lakh-form-filings-in-fy-2024-25-24515.asp)) | P3 + P6 | ₹15K-50K |
| 16 | Advance tax computation + payment schedule (15/45/75/100% milestones) | F4 | Saral does single entity; group view absent | P9 + P15 | ₹10K-30K |
| 17 | Fixed Asset Register vs IT Block of Assets reco + deferred tax | F2 | Two registers diverge over years; depreciation policy gaps | P7 + P9 | ₹15K-40K |
| 18 | BRSR Core data collection from plants + assurance evidence | BRSR Lead | New mandate (top 1,000 listed); no Indian solution. SEBI glide path: 150 (FY23-24) → 250 (FY24-25) → 500 (FY25-26) → 1,000 (FY26-27) per [SEBI BRSR circular](https://www.sebi.gov.in/legal/circulars/jul-2023/brsr-core-framework-for-assurance-and-esg-disclosures-for-value-chain_73854.html) | P4 + P5 + P10 | ₹50K-2L |
| 19 | Form 15CA/15CB workflow (foreign remittances) | F4 / F9 | Manual; CA signs 15CB; back-and-forth ([₹3,25,631 cr Indian OFDI in 2024](https://www.ibef.org/economy/indian-investments-abroad)) | P1 + P5 + P8 | ₹10K-30K |
| 20 | FEMA filings: FC-GPR, FLA, ECB-2, ODI | F9 | RBI portals; complex schemas ([US$190.4 bn ECB outstanding Sep 2024](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2096480)) | P3 + P13 + P15 | ₹15K-50K |
| 21 | Contract metadata extraction + obligation calendar | F2 / Legal-Finance | Contracts in folders; renewals missed | P1 + P3 | ₹20K-1L |
| 22 | Expense reimbursement OCR + GST claim + duplicate detection | F5 | Concur is foreign-priced; SAP weak on India GST | P1 + P9 | ₹10K-50K |
| 23 | SFT (Statement of Financial Transactions) Form 61A + AIS reverse-validation | F4 | High-value transaction aggregation; complex | P1 + P15 | ₹10K-30K |
| 24 | Transfer pricing master file + local file + 3CEB pack | F4 / TP Lead | Outsourced today; data lives in finance | P1 + P5 + P14 | ₹30K-2L |
| 25 | Schedule III + IND-AS notes auto-generation from TB | F2 | Re-built every quarter in Excel | P9 + P14 + P15 | ₹25K-1L |

**Honourable mentions** (close calls): MAT/AMT working, AS-15 / IndAS-19 actuarial liaison, segment reporting, going-concern documentation pack, DPT-3 deposits, foreign sub compliance, CSR Schedule VII tracker, ESI/PF challan reco, e-way bill exception, GSTR-9C audit trail, customs duty refund tracker, IBBI claims tracker for stressed-counterparty exposure ([8,175 CIRPs cumulative](https://ibclaw.in/analysis-of-insolvency-cases-under-ibc-as-on-31-12-2024-cirp-initiation-closures-recovery-and-yield-from-resolution-plan-and-liquidation/)).

:::caution[Use case #8 has been revised post-Budget 2025]
The original file-13 use case #8 ("Sec 194Q / 206C(1H) cross-charge tracking") combined two TDS/TCS provisions. **Sec 206C(1H) (TCS on sales of goods) was removed effective 1 April 2025 by Union Budget 2025** ([TaxGuru FAQs](https://taxguru.in/income-tax/tcs-sale-goods-removed-april-1-2025-faqs.html)). The cross-charge friction the section created — buyer's 194Q vs seller's 206C(1H), often double-collected — no longer exists. Use case #8 is now narrower: only Sec 194Q (TDS on purchases) tracking remains. Architecture impact: the tracking module loses one column; the reconciliation logic loses the buyer-vs-seller deduplication path. WTP band drops slightly because the pain is half what it was.
:::

## Part 2 — The 7 bridge use cases

These are the workflows where the same document / notice / audit query / filing crosses the CA-to-finance-team boundary. Today this is six tools, four email threads, and two WhatsApp groups. The CAOS bridge collapses that to one workspace with three role-views (CA / in-house team / external auditor). Owning the bridge is the single biggest reason CAOS can credibly own both buyer sides.

| # | Bridge | CA does | Finance team does | Today's friction | CAOS unlock |
|---|---|---|---|---|---|
| **B1** | **Statutory audit** | Big-4 / mid-tier signs 3CB/3CD; uses Caseware, EY GAM, KPMG Clara, Deloitte Engage, PwC Aura | Audit Liaison ships PBC, replies | Same doc requested 3x; Excel + Drive + email | One workspace, three roles (auditor / liaison / reviewer), shared evidence locker (P5), query log (P6) |
| **B2** | **Tax audit (Form 3CD)** | CA prepares + signs 44-clause Form 3CD ([29.5 lakh tax audit reports filed AY23-24](https://www.taxcorner.co.in/2023/10/cbdt-releases-tax-audit-reports-filing-data-till-30-09-2023.html)) | Finance gives 44-clause data | CA's tool ≠ client ERP; clause data re-keyed | Clause-by-clause request → reply → evidence with auto-fill from books |
| **B3** | **GST notice / SCN / DRC-01 / DRC-01A** | CA drafts reply + represents (incl. recently operational [GSTAT (Sep 2025)](https://taxguru.in/goods-and-service-tax/gstat-operational-complete-guide-gst-appellate-tribunal-appeals.html)) | Finance gathers ledger evidence | Notice opened on portal by one; reply by other; deadline missed | Notice intake (P6) + auto-create "gather evidence" task on finance team's CAOS |
| **B4** | **GSTR-9 / 9C reco** | CA certifies 9C | Finance prepares 9 + reco | Multiple iterations; 9C audit trail weak | Single workspace; reco engine (P7) shared between roles |
| **B5** | **Income tax assessment / appeal (CIT(A), ITAT)** | CA represents | Finance compiles old workings | Old documents lost; CA succession loses context | Persistent evidence locker per assessment year (P5) survives both CA and staff turnover |
| **B6** | **Transfer pricing study + Form 3CEB** | TP firm prepares | Finance gives ICO data, agreements, comparables | Annual fire-drill | Continuous data feed; TP firm's workspace inside finance team's CAOS |
| **B7** | **ROC / secretarial filings** | CA + CS jointly | Finance gives financials, board minutes, registers | Versioning chaos; XBRL re-keying ([28.05 lakh MCA-registered companies, 18.17 lakh active](https://www.business-standard.com/companies/news/over-2-8-million-companies-registered-in-india-65-active-govt-data-125021800695_1.html)) | Single source of board pack + statutory registers; one-click XBRL |

**The bridge insight:** the marginal cost of the second user (the CA's client) is near zero because the data is *already* in CAOS on the CA's side. **Build for the bridge from day one in the data model**, even if the audit-workspace product itself does not ship until Month 19-24 of the CAOS roadmap. The data-model commitments needed today are listed in [/caos/product/architecture/](/caos/product/architecture/).

The bridge is also where competitive defensibility compounds. Every existing competitor sits on one side of the bridge: Caseware on the auditor side; ClearTax / IRIS / Avalara on the indirect-tax side; Tally / SAP / Oracle on the GL side. None of them sit *across* the bridge. The flywheel-3 (audit-workspace) loop in [/caos/flywheel/composite/](/caos/flywheel/composite/) ignites precisely on this gap.

## Part 3 — Cheap to add vs fundamental rearchitecture

This separates the easy expansions (most of the 25 + 7 use cases above) from the ones that need a new product line — and from the ones CAOS will deliberately never build.

### Cheap (reuses existing primitives 1:1)

These extend naturally from the [15 atomic primitives](/caos/product/atomic-primitives/). Eighteen of the 25 ranked use cases and all 7 bridge use cases land in this set. Estimates are days-to-weeks of engineering, not months.

- Vendor invoice intake (no PO match) — reuses `TAX_INVOICE_PURCHASE` schema + extraction + ReviewItem
- AP approval routing — reuses `firm_members` + role enum + workflow status state machine (P8)
- Vendor master — reuses `mapping_rules` table; surface as UI (P2 + P9)
- Corporate card / expense intake — add `EXPENSE_RECEIPT` doctype; reuse pipeline (P1)
- Bank payment file generation — add new worker job emitting NEFT/RTGS file
- Contract metadata + renewal calendar — reuse `system_master_calendar` engine (P3)
- Statutory deadline expansion — add rows to seed migration (P3)
- Per-customer collections / debtor chase — repurpose `collection_requests` tokens (P4)
- Document e-sign (eMudhra / Signzy / Leegality / NSDL) — share-link layer + provider interface ([eMudhra ~40% DSC market share, ₹527.8 cr FY25 revenue](https://www.icra.in/Rating/GetRationalReportFilePdf?id=128000))
- MIS dashboards on extracted vouchers — read-only aggregation queries
- Multi-firm consulting CFO model — already supported via role-switcher
- IFC controls testing log — add `controls_test` entity; reuse review workflow (P11)
- Close calendar (T+5, T+10) — repurpose `client_calendar` (P3)
- Channel diversity (WhatsApp Cloud, SMS) — already on Phase 4+ roadmap (P10)
- Notice intake doctype `NOTICE_GENERIC` — manual triage workflow on Phase 1 (P6, no extraction yet)
- BRSR Core taxonomy module — composes P4 + P5 + P10 + P14 (the SEBI glide path makes this a budgeted line item at top-1000 listed companies)
- DSC management — generalises the credential vault primitive that the CA wedge accidentally builds
- AA TSP integration — provider interface analogous to the LlamaIndex provider abstraction; FIU registration is light

### Fundamental (requires new architecture, not just extension — and CAOS will not build them)

These are the explicit exclusions. Each one would require either a new primitive, a new schema layer, or a new design decisions that contradicts a locked decision. They are the lines that, if crossed, turn CAOS into another mid-market Indian ERP wannabe and destroy the moat.

| # | Capability | Why it requires fundamental rearchitecture | Recommended alternative |
|---|---|---|---|
| 1 | **Multi-entity consolidation** (full HFM-class) | Needs `client_group`, parent-sub model, eliminating-entry concept, minority interest. Today every Tally master is scoped to one `client_id`. New schema layer. (Note: a *schema-only* `entity_group` table is being reserved as a Phase-1 architectural pre-investment per [/caos/decisions/architectural-pre-investments/](/caos/decisions/architectural-pre-investments/) — UI is not built.) | Oracle HFM, OneStream, Workiva |
| 2 | **IFRS / IND-AS reporting engine** | No double-entry GL inside CAOS. Needs parallel reporting engine + IND-AS taxonomy + classification rules. | Trintech Cadency, Workiva, IRIS Carbon (XBRL) |
| 3 | **Intercompany transactions + eliminations** (real engine) | Needs `intercompany_transaction` linkage between two clients; pipeline currently assumes one client per doc. Reconciliation only is supported (P7); elimination engine is not. | Same as #1 |
| 4 | **Multi-currency / FX revaluation** | Money is INR paise (`int64`); no currency column. Adding FX requires schema changes on every money-bearing table + rates module + revaluation jobs. (Note: currency column reservation is a Phase 0 pre-investment to keep the option open without committing.) | SAP, Oracle, NetSuite |
| 5 | **Real-time GL / sub-ledger inside CAOS** | Re-implements what Tally does. Forks from the Tally-XML thesis. Destroys the moat. | Tally is the GL. Always. |
| 6 | **Inventory accounting** (FIFO / LIFO / weighted-avg, lot / serial) | Tally master mirrors only; no transactional engine. | Tally Inventory, Unicommerce, Zoho Inventory |
| 7 | **Payroll computation engine** | Only payroll documents today; no payroll-run engine, no PT/PF/ESI computation. | greytHR, Zoho Payroll, Keka, RazorpayX Payroll |
| 8 | **Budgeting / rolling forecasts** | No budget/forecast tables; Tally voucher model is actuals-only. | Anaplan, Workday Adaptive, Cube |
| 9 | **SSO / SAML / SCIM for enterprise IdP** | OTP-only is locked at architectural level (design decision). Needs new design decisions (planned for Year 2 — see [/caos/decisions/architectural-pre-investments/](/caos/decisions/architectural-pre-investments/)). | Okta, Azure AD via custom integration (deferred) |
| 10 | **Multi-step conditional workflows** (BPMN-class) | Current workflow status pipeline is single-actor state machine. | Camunda, Workato, n8n |
| 11 | **Master data management** (dimensions, segments, hierarchies) | No dimension / segment taxonomy beyond Tally cost_centres. | Reltio, Informatica MDM |
| 12 | **Statutory financial-statement compilation** (BS / P&L / CF generation) | These are T6 OUTPUT classify-only docs in the doctype catalogue; no engine generates them from the underlying ledger inside CAOS. | Tally / SAP / Oracle / Zoho native; specialised XBRL tools for filing |

The Fundamental list is what stops CAOS from competing with SAP / Oracle / IBM Cognos / Workday — and that's the design. CAOS's position is "messy edges and document fabric," not "ERP replacement." The Cheap list covers 18 of the 25 ranked finance use cases and all 7 bridge use cases; the Fundamental list covers the other 7 and the entire ERP replacement temptation.

## How to read this catalogue alongside the rest of the docs

- The [15 atomic primitives](/caos/product/atomic-primitives/) are the substrate. Every cell in the 25+7 use case tables traces back to one or two primitive cells.
- The [document intelligence pipeline](/caos/product/document-intelligence/) is how P1, P9, P11, P13, P14 wire together to make use cases 1, 2, 4, 9, 12, 18, 19, 22, 23, 24, 25 possible.
- The [Tally / ERP integration](/caos/product/tally-erp-integration/) is how the use cases connect to the GL of record without replacing it — the moat that prevents the Fundamental rearchitecture list from being a competitive vulnerability.
- The [architecture page](/caos/product/architecture/) explains which Fundamental items have *schema-only* pre-investments (multi-entity grouping, currency column) so the option to expand later is preserved without committing engineering today.
- The [composite flywheel](/caos/flywheel/composite/) explains the 60-month sequencing: which use cases ship in Phase 1 (CA-led) vs Phase 2 (vendor-network) vs Phase 3 (audit-workspace) vs Phase 4 (DPI-graph).
- The [stakeholder atlas](/caos/stakeholders/composite/) explains who buys each use case and why.

The single most important architectural discipline this catalogue enforces: when a customer asks for use case #36 ("can you also do payroll?"), the answer is the Fundamental list. CAOS does not. CAOS classifies Form 16 (P1, use case #2 already on the catalogue), pushes the resulting TDS receivable entry to Tally (P9), and refers the user to greytHR for the payroll run itself. That is the discipline that lets the moat compound.
