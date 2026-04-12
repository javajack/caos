---
title: Document Intelligence
description: The CAOS wedge feature - 26AS/AIS/Form16 extraction, bank statement processing, PAN-based clustering, GST reconciliation, anomaly detection, OCR.
---

Document intelligence is the **core wedge feature** of CAOS. It delivers immediate, measurable ROI by automating the most time-consuming part of a CA's day -- processing client documents. No competitor combines document intelligence with practice management in a single platform.

:::caution[Product Roadmap]
The capabilities described below represent the planned feature set. Phase 1 (Launch) capabilities are marked. Advanced capabilities are Phase 2+ roadmap targets.
:::

## Why Document Intelligence is the Wedge

CAs spend **30-40% of operational time** on document collection and processing. For a firm managing 200 clients, that is 400-1,000 hours per year on manual data extraction alone.

:::tip[Value Proposition]
CAOS document intelligence saves 2-5 hours per client during ITR season. For 200 clients, that is 400-1,000 hours saved -- equivalent to 2-3 full-time employees.
:::

## Core Capabilities

### 26AS / AIS Extraction

| Capability | Description |
|---|---|
| **Upload** | Accept 26AS or AIS PDF from IT portal or auto-fetch |
| **Extract** | All income entries, TDS deductions, source details, PAN of deductors |
| **Map** | Entries mapped to tax heads and sections automatically |
| **Cross-Reference** | Flag discrepancies between 26AS and AIS data |
| **Prepare** | Pre-fill ITR schedules from extracted data |

How it works:
1. Upload 26AS PDF (or auto-download via stored credentials)
2. AI extracts all TDS entries with deductor PAN, amount, section
3. Cross-reference with AIS for additional income sources
4. Flag mismatches (TDS in 26AS not in AIS, or vice versa)
5. Generate reconciliation report for client review
6. Pre-populate ITR computation worksheet

### Form 16 Processing

| Capability | Description |
|---|---|
| **Part A** | TDS certificate -- employer TAN, PAN, tax deducted, deposited |
| **Part B** | Salary computation -- breakup, deductions, exemptions |
| **Multiple** | Handle multiple Form 16s per client (job changes) |
| **Merge** | Auto-merge data from multiple employers |
| **Verify** | Cross-check with 26AS TDS entries |

Supports all Form 16 formats including:
- Standard TRACES-generated format
- Employer-customized formats
- Scanned/photographed copies (via OCR)

### Bank Statement Processing

| Capability | Description |
|---|---|
| **Formats** | Support for 500+ Indian bank PDF and Excel formats (target: 500+ formats at scale) |
| **Categorize** | Auto-categorize: income, expense, transfer, investment, EMI, SIP |
| **Patterns** | Identify recurring transactions (rent, salary credits, loan EMIs) |
| **Tally Map** | Map transactions to Tally ledger heads |
| **Batch** | Process multiple statements for the same client in one batch |
| **Interest** | Extract interest income for ITR reporting |

Bank format coverage:

| Bank Category | Banks Supported | Format Types |
|---|---|---|
| **Public Sector** | SBI, PNB, BOB, BOI, Canara, Union, Indian | PDF, Excel |
| **Private** | HDFC, ICICI, Axis, Kotak, Yes, IndusInd, Federal | PDF, Excel |
| **Small Finance** | AU, Equitas, Ujjivan, Jana, Fincare | PDF |
| **Payments** | Paytm Payments, Fino, Airtel Payments | PDF |
| **Co-operative** | Major state and district co-operative banks | PDF |
| **International** | Citi, HSBC, Standard Chartered, DBS | PDF, Excel |

### PAN-Based Document Clustering

All documents auto-organized by client PAN across every source.

```
PAN: ABCPS1234A (Rajesh Sharma)
├── AY 2026-27
│   ├── 26AS_2026.pdf          [auto-extracted]
│   ├── AIS_2026.pdf           [auto-extracted]
│   ├── Form16_Infosys.pdf     [auto-extracted]
│   ├── Form16_TCS.pdf         [auto-extracted]
│   ├── SBI_Statement_2025.pdf [auto-categorized]
│   ├── HDFC_Statement_2025.pdf[auto-categorized]
│   └── Rent_Agreement.pdf     [manually uploaded]
├── AY 2025-26
│   └── [previous year documents]
└── Permanent
    ├── PAN_Card.pdf
    ├── Aadhaar.pdf
    └── Address_Proof.pdf
```

Features:
- Automatic document type detection (26AS, Form 16, bank statement, invoice)
- Assessment year tagging based on document content
- Full-text search across all documents
- Version tracking when documents are re-uploaded

### GST Reconciliation

| Step | What Happens |
|---|---|
| **1. Import** | Upload or auto-fetch GSTR-2A/2B data from GST portal |
| **2. Match** | Match with purchase register (Tally export or manual upload) |
| **3. Compare** | Invoice-level matching with mismatch highlighting |
| **4. Report** | Generate reconciliation report with exceptions |
| **5. Optimize** | ITC optimization: claimed vs. available analysis |
| **6. Detect** | Auto-detect missing invoices and unmatched credits |

Reconciliation types:
- **GSTR-2A vs. Purchase Register** -- inward supplies matching
- **GSTR-1 vs. Sales Register** -- outward supplies matching
- **GSTR-3B vs. GSTR-1** -- summary vs. detail matching
- **Annual (GSTR-9)** -- full year reconciliation for annual return

### Anomaly Detection

AI-powered anomaly detection across all processed documents.

| Anomaly Type | Detection Method | Example |
|---|---|---|
| **TDS Mismatch** | 26AS vs. client-reported income | TDS of Rs 50K on interest but client shows no FD income |
| **Income Mismatch** | AIS vs. ITR preparation | Property sale in AIS not reported in capital gains |
| **Pattern Break** | Current vs. prior year comparison | Salary dropped 50% without explanation |
| **Unusual Transaction** | Bank statement analysis | Large cash deposit exceeding normal patterns |
| **GST Discrepancy** | Purchase register vs. 2B | Claimed ITC for invoices not in GSTR-2B |
| **Missing Documents** | Expected vs. received | TDS entry in 26AS but no Form 16 from that deductor |

:::caution[Anomaly Alerts]
Anomalies are flagged with severity levels (Info / Warning / Critical) and routed to the assigned staff for review. Critical anomalies are also notified to the partner. These alerts are actionable -- they link directly to the source document and the affected task.
:::

## Advanced Capabilities (Phase 2)

### OCR for Physical Documents
- Process scanned/photographed documents with 95%+ accuracy (target accuracy)
- Handle handwritten bills and receipts
- Support for Indian stamp papers and government forms
- Multi-language support (English, Hindi, regional languages)

### Auto-Classification
- Automatically categorize expenses by tax head
- Suggest HSN/SAC codes from invoice descriptions
- Map transactions to correct ITR schedule items
- Pre-fill ITR computation from extracted data

### Tally Reconciliation
- Import Tally trial balance and ledger data
- Reconcile Tally books with bank statements
- Reconcile Tally sales register with GSTR-1
- Generate reconciliation reports with exceptions

## Processing Limits by Plan

| Plan | Documents/Month | Supported Formats |
|---|---|---|
| Free | 10 | PDF, Excel (basic extraction) |
| Professional | 500 | PDF, Excel, images (full extraction) |
| Business | 2,000 | All formats including OCR for scanned docs |
| Enterprise | Unlimited | All formats, custom model training |

## Data Moat

:::note[Compounding Advantage]
Every document processed improves the extraction models. After processing millions of Indian tax documents -- with their unique formats, stamps, and quirks -- the accuracy advantage becomes very hard for new entrants to replicate. This is a compounding data moat.
:::

## Competitive Comparison

| Capability | CAOS | VouchrIT | Accomation | Digital Doc Sys |
|---|---|---|---|---|
| 26AS/AIS extraction | Yes | No | No | No |
| Form 16 processing | Yes | No | No | No |
| Bank statement formats | 500+ | 1000+ | Limited | Limited |
| PAN-based clustering | Yes | No | No | No |
| GST reconciliation | Yes | No | No | No |
| Anomaly detection | Yes | No | No | No |
| Tally auto-entry | Yes | Yes | Yes | Yes |
| Integrated with PMS | Yes | No | No | No |
| Confidence scoring | Yes | Yes | No | No |
