---
title: Compliance Calendar
description: CAOS pre-configured compliance calendar for GST, ITR, TDS, Advance Tax, ROC with custom deadlines, auto-assignment, and dashboard views.
---

The compliance calendar is the **backbone of CA firm operations**. Missing a deadline means penalties, client dissatisfaction, and potential professional liability. CAOS ships with every major Indian compliance deadline pre-configured and automatically linked to task creation and team assignment.

## Pre-Configured Deadlines

### GST Compliance

| Deadline | Due Date | Frequency | Applicability |
|---|---|---|---|
| GSTR-1 (monthly) | 11th of next month | Monthly | Turnover > Rs 5Cr or opted for monthly |
| GSTR-3B (monthly) | 20th of next month | Monthly | All monthly filers |
| GSTR-1 (QRMP) | 13th of month after quarter | Quarterly | Turnover < Rs 5Cr (opted) |
| GSTR-3B (QRMP) | 22nd/24th of month after quarter | Quarterly | Based on state category |
| GSTR-9 (annual) | 31 December | Annual | Turnover > Rs 2Cr |
| GSTR-9C (reconciliation) | 31 December | Annual | Turnover > Rs 5Cr |
| ITC-04 (job work) | Half-yearly/Annual | Periodic | Manufacturers sending goods for job work |
| CMP-08 (composition) | 18th of month after quarter | Quarterly | Composition scheme dealers |

### Income Tax Compliance

| Deadline | Due Date | Applicability |
|---|---|---|
| ITR (non-audit individuals/HUF) | 31 July | Individuals, HUFs without audit |
| ITR (audit cases) | 31 October | Companies, firms with audit requirement |
| ITR (transfer pricing) | 30 November | Entities with international transactions |
| Tax Audit Report (Sec 44AB) | 30 September | Businesses above turnover threshold |
| Transfer Pricing Report (Sec 92E) | 31 October | International/specified domestic transactions |
| Revised Return | 31 December of AY | All assessees (within time limit) |
| Belated Return | 31 December of AY | Returns filed after due date |

### Advance Tax

| Installment | Due Date | Cumulative % |
|---|---|---|
| Q1 | 15 June | 15% of estimated tax |
| Q2 | 15 September | 45% cumulative |
| Q3 | 15 December | 75% cumulative |
| Q4 | 15 March | 100% |

:::note[Advance Tax Intelligence]
CAOS auto-computes advance tax based on prior year data and known income changes. When a client's TDS credits, estimated business income, or capital gains change, the system recalculates and alerts the client.
:::

### TDS Compliance

| Deadline | Due Date | Quarter |
|---|---|---|
| TDS deposit | 7th of next month | Monthly |
| TDS Return Q4 (24Q/26Q) | 15 May | Jan-Mar |
| TDS Return Q1 | 31 July | Apr-Jun |
| TDS Return Q2 | 31 October | Jul-Sep |
| TDS Return Q3 | 31 January | Oct-Dec |
| Government TDS Q4 | 15 May | Jan-Mar |
| Government TDS Q1 | 15 August | Apr-Jun |
| Government TDS Q2 | 15 November | Jul-Sep |
| Government TDS Q3 | 15 January | Oct-Dec |

### ROC / Company Law

| Deadline | Due Date | Filing |
|---|---|---|
| AGM | 30 September | Annual General Meeting |
| AOC-4 | 30 October (30 days from AGM) | Financial statements |
| MGT-7 / MGT-7A | 28 November (60 days from AGM) | Annual return |
| ADT-1 | 15 days from AGM | Auditor appointment |
| DIR-3 KYC | 30 September | Director KYC (annual) |
| DPT-3 | 30 June | Return of deposits |
| MSME-1 | Half-yearly | MSME payment disclosure |

### Other Compliances

| Category | Deadlines Covered |
|---|---|
| **PF/ESI** | Monthly PF deposit (15th), ESI deposit (15th), annual returns |
| **Professional Tax** | Monthly/quarterly deposit, annual return |
| **FEMA** | FCRA annual return, ODI/FDI reporting, ECB returns |
| **Trust/NGO** | Form 10A/10AB, 12A renewal, FCRA renewal, audit report |
| **LLP** | Form 8 (Statement of Account), Form 11 (Annual Return) |
| **Cooperative** | Annual audit, AGM, statutory filings |

## Client-Specific Calendar

Not all deadlines apply to every client. CAOS **auto-filters based on client registrations**.

| Client Has... | Calendar Shows... |
|---|---|
| GSTIN | GST deadlines (monthly or quarterly based on scheme) |
| Company CIN | ROC deadlines (AOC-4, MGT-7, DIR-3 KYC) |
| TAN | TDS deadlines (quarterly returns, monthly deposits) |
| Trust registration | Trust/NGO deadlines (12A, 80G, audit) |
| QRMP opted | Quarterly GST instead of monthly |
| Audit requirement | Tax audit and extended ITR deadline |
| International transactions | Transfer pricing deadlines |

:::tip[Zero Configuration]
When a new client is added with their registrations (PAN, GSTIN, CIN, TAN), the compliance calendar auto-populates all relevant deadlines. No manual setup required.
:::

## Auto-Assignment

### From Calendar to Task

When a compliance deadline approaches (based on configured lead time), CAOS automatically:

1. **Creates a task** with the compliance template (checklist, SOP, documents needed)
2. **Assigns to staff** based on assignment rules (client-based, skill-based, or load-based)
3. **Sends notifications** to assigned staff via app and WhatsApp
4. **Requests documents** from client via WhatsApp if needed
5. **Tracks progress** through the compliance workflow

### Assignment Rules

| Rule Type | Example |
|---|---|
| **Client-based** | "All tasks for Sharma Group go to Priya" |
| **Service-based** | "All GST tasks go to the GST team" |
| **Load-based** | "Assign to team member with fewest pending tasks" |
| **Skill-based** | "Tax audit tasks only to semi-qualified and above" |
| **Round-robin** | "Rotate ITR filing equally across the team" |

## Dashboard Views

| View | Purpose | Best For |
|---|---|---|
| **Calendar View** | Month/week grid with deadline markers | Visual overview of busy periods |
| **List View** | Sortable list of all upcoming deadlines | Detailed planning and filtering |
| **Kanban View** | Board with columns by status | Tracking work in progress |
| **Timeline View** | Gantt-style timeline of deadlines | Capacity planning across months |
| **Today View** | Only today's deadlines and overdue items | Daily action list |
| **By Client** | All deadlines for a specific client | Client-specific review |
| **By Staff** | All deadlines assigned to a specific person | Workload review |

### Filters

| Filter | Options |
|---|---|
| **Compliance type** | GST, ITR, TDS, ROC, Audit, Other |
| **Status** | Not started, In progress, Review, Completed, Overdue |
| **Staff member** | Filter by assigned person |
| **Client** | Filter by specific client |
| **Date range** | This week, this month, next 30/60/90 days |
| **Priority** | High, medium, low |
| **Entity type** | Individual, Company, LLP, Trust |

## Custom Deadlines

Beyond pre-configured compliance deadlines:

| Custom Deadline Type | Examples |
|---|---|
| **Client commitments** | "Deliver audit report to ABC Ltd by March 15" |
| **Internal deadlines** | "Complete all January GST by February 8" |
| **Board meetings** | Quarterly board meeting schedules |
| **Partner meetings** | Monthly partner review |
| **Training** | CPE hours, skill development deadlines |
| **License renewals** | Firm license, professional membership |

Features:
- One-time or recurring custom deadlines
- Custom reminder rules per deadline type
- Color-coding by compliance type (GST = blue, ITR = green, TDS = orange, ROC = purple)
- Attach notes and documents to deadlines

## Competitive Comparison

| Feature | CAOS | Bizalys | QwikCA | MyTask | SimplifyPractice |
|---|---|---|---|---|---|
| Pre-configured deadlines | All major | All major | Major | Major | Basic |
| FEMA/Trust/LLP | Yes | Yes | No | No | No |
| Auto-task creation | Yes (advanced) | No | No | No | No |
| Smart assignment | 5 rule types | Basic | Basic | Basic | Basic |
| Client auto-filter | Yes | No | No | No | No |
| Dashboard views | 7 views | 2 views | 2 views | 2 views | 2 views |
| WhatsApp integration | Yes | No | No | No | No |
| Custom deadlines | Full | Partial | Basic | Basic | Basic |
