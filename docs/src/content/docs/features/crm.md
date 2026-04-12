---
title: CRM & Client Management
description: CAOS client master, credential vault, service mapping, grouping, bulk import, and 360-degree client view for CA practices.
---

Client management in CAOS goes beyond a basic address book. It is a complete CRM designed for CA practices -- managing entities, credentials, services, documents, and communication history in a unified 360-degree view.

## Client Master

### Entity Information

The client master captures all information needed to serve a client across compliance types.

| Field Group | Fields |
|---|---|
| **Identity** | PAN, Aadhaar, GSTIN, CIN, TAN, DIN, LLPIN |
| **Contact** | Name, mobile, email, WhatsApp number, alternate contacts |
| **Address** | Registered office, business address, communication address |
| **Entity Type** | Individual, HUF, Firm, LLP, Pvt Ltd, Public Ltd, Trust, AOP, BOI |
| **Business** | Industry, turnover range, nature of business, date of incorporation |
| **Compliance** | Applicable compliances, filing history, jurisdiction |
| **Banking** | Bank accounts (for TDS, refund tracking) |
| **Directors/Partners** | Linked persons with DIN/DPIN and roles |
| **Related Entities** | Group companies, family members, associated concerns |

:::note[Auto-Population]
When a PAN is entered, CAOS auto-fetches available data from IT portal and pre-populates entity fields. GSTIN entry auto-fills GST registration details. This reduces manual data entry by 60-70%.
:::

### Entity Relationships

```
┌──────────────────┐
│  Rajesh Sharma    │ (Individual - PAN: ABCPS1234A)
│  ├── ITR-2        │
│  ├── Tax Planning  │
│  └── Investments   │
├──────────────────┤
│  Sharma & Co      │ (Firm - PAN: AABFS5678B)
│  ├── ITR-5        │
│  ├── GST Returns   │
│  └── Tax Audit     │
├──────────────────┤
│  Sharma Pvt Ltd   │ (Company - CIN: U12345MH2020)
│  ├── ITR-6        │
│  ├── GST Returns   │
│  ├── ROC Filing    │
│  └── Statutory Audit│
└──────────────────┘
  Family/Group Linkage ──▶ All entities visible in one view
```

## Credential Vault

### Secure Storage

CAOS stores government portal credentials with **AES-256 encryption** at rest and role-based access control.

| Portal | Credentials Stored | Used For |
|---|---|---|
| **Income Tax** | PAN, password, Aadhaar OTP flow | ITR filing, 26AS download, AIS fetch |
| **GST** | GSTIN, username, password | GSTR filing, 2A/2B download |
| **MCA** | CIN, DIN credentials | ROC filing, form submission |
| **TRACES** | TAN, username, password | TDS return filing, corrections |
| **PF** | Establishment code, credentials | PF return filing |
| **ESI** | Employer code, credentials | ESI return filing |

:::caution[Security Model]
- Credentials are encrypted at rest with AES-256
- Access is role-based: only authorized staff can use credentials
- Credential usage is audit-logged (who accessed, when, for what)
- Optional: credentials can require partner approval before use
- No plaintext credential display -- used only for portal automation
:::

### Auto-Login & Portal Fetch

Stored credentials enable **automated portal interactions**:
1. Auto-login to IT portal and download 26AS/AIS
2. Auto-login to GST portal and download GSTR-2A/2B
3. Monitor portal for notices, intimations, and status changes
4. Fetch computation and acknowledgment receipts post-filing

## Service Mapping

### Service Catalog

Define the services your firm offers and map them to clients.

| Service | Frequency | Billing Type | Typical Price Range |
|---|---|---|---|
| ITR Filing (Individual) | Annual | Per filing | Rs 1,000-5,000 |
| ITR Filing (Company) | Annual | Per filing | Rs 10,000-50,000 |
| GST Returns (Monthly) | Monthly | Per month | Rs 1,000-3,000/month |
| GST Returns (Quarterly) | Quarterly | Per quarter | Rs 2,000-5,000/quarter |
| Tax Audit | Annual | Per engagement | Rs 15,000-100,000 |
| Statutory Audit | Annual | Per engagement | Rs 25,000-500,000 |
| ROC Compliance | Annual | Per company | Rs 5,000-25,000 |
| Bookkeeping | Monthly | Per month | Rs 3,000-15,000/month |
| TDS Returns | Quarterly | Per quarter | Rs 2,000-5,000/quarter |
| Advisory | Ad-hoc | Per hour/project | Rs 5,000-50,000 |

### Client-Service Matrix

Each client has a **service card** showing all mapped services, their status, assigned staff, billing terms, and next due date.

| Client | Services | Staff | Annual Value |
|---|---|---|---|
| Sharma Pvt Ltd | ITR, GST, ROC, Audit, TDS | Amit (primary), Priya (backup) | Rs 2,40,000 |
| Rajesh Sharma | ITR, Tax Planning | Amit | Rs 15,000 |
| ABC Traders | GST, Bookkeeping | Neha | Rs 60,000 |

## Client Grouping

### Grouping Dimensions

| Dimension | Examples | Use Case |
|---|---|---|
| **Entity Type** | Individual, Company, LLP, Trust | Batch operations by entity type |
| **Service Type** | GST clients, Audit clients, ITR-only | Service-specific communication |
| **Industry** | Manufacturing, IT, Retail, Real Estate | Industry-specific advisory |
| **Revenue Band** | <10L, 10L-1Cr, 1Cr-10Cr, >10Cr | Tiered service delivery |
| **Custom Tags** | VIP, Problem, New, Referral source | Firm-specific categorization |
| **Geography** | Mumbai, Delhi, Bangalore, Multi-state | Regional compliance needs |
| **Staff Assignment** | By primary accountant | Workload management |

### Smart Groups

AI-powered dynamic groups that auto-update:
- **At Risk:** Clients with overdue compliances or pending documents
- **High Value:** Top 20% clients by annual billing
- **Growth Opportunity:** Clients with services they should be using but are not
- **Churn Risk:** Clients with declining engagement or late payments

## Bulk Import

### Import Sources

| Source | Format | Fields Mapped |
|---|---|---|
| **Excel/CSV** | .xlsx, .csv | All client master fields |
| **Tally** | XML export | Entity details, ledger balances |
| **SimplifyPractice** | CSV export | Client, service, and task data |
| **Jamku** | CSV export | Client and compliance data |
| **Manual Entry** | Web form | Single client at a time |

### Import Workflow

1. Upload file (Excel/CSV)
2. Auto-detect columns and suggest field mapping
3. Review mapping, fix mismatches
4. Validate data (PAN format, GSTIN checksum, duplicate detection)
5. Preview import results
6. Confirm and import
7. Post-import report: imported, skipped, duplicates, errors

:::tip[Duplicate Detection]
CAOS uses PAN as the primary dedup key. If a PAN already exists, the import merges data rather than creating duplicates. Conflicts are flagged for manual resolution.
:::

## 360-Degree View

The client 360 view is a **single page** that shows everything about a client at a glance.

### View Sections

| Section | Contents |
|---|---|
| **Header** | Client name, PAN, entity type, health score, primary staff |
| **Compliance Status** | Traffic-light view of all applicable compliances |
| **Active Tasks** | Current open tasks with status and assignee |
| **Recent Documents** | Last 10 documents uploaded or generated |
| **Billing Summary** | Annual value, outstanding, last payment date |
| **Communication** | Recent WhatsApp messages, emails, and notes |
| **Timeline** | Chronological activity feed (tasks, docs, billing, communication) |
| **Related Entities** | Linked family members, group companies |

### Client Health Score

AI-generated composite score (0-100) based on:

| Factor | Weight | Score Drivers |
|---|---|---|
| Compliance status | 30% | On-time filing rate, pending compliances |
| Document readiness | 20% | Required documents submitted on time |
| Payment history | 20% | Outstanding amount, payment timeliness |
| Communication | 15% | Response time, engagement level |
| Complexity | 15% | Number of services, entity complexity |

:::note[Health Score Actions]
When a client's health score drops below thresholds:
- **Below 70:** Yellow alert to primary staff
- **Below 50:** Red alert to partner, review meeting recommended
- **Below 30:** Critical -- intervention required, potential compliance risk
:::

## Competitive Comparison

| Feature | CAOS | SimplifyPractice | QwikCA | Jamku | Zoho Practice |
|---|---|---|---|---|---|
| Client master fields | 50+ | 30+ | 40+ | 20+ | 40+ |
| Credential vault | AES-256, audit trail | Basic | Basic | Basic | N/A |
| Service mapping | Full with billing | Basic | Good | Basic | Good |
| Smart groups | AI-powered | Manual only | Manual only | Manual only | Basic |
| Family/group linkage | Yes | No | No | No | No |
| 360-degree view | Full | Partial | Partial | Basic | Partial |
| Health scoring | AI-generated | No | No | No | No |
| Auto-population | PAN/GSTIN | No | No | No | No |
