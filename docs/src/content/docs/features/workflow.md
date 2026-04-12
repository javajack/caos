---
title: Workflow Engine
description: How the CAOS compliance calendar, task engine, and recurring automation works. 600+ workflow templates for GST, ITR, TDS, ROC, Audit, FEMA.
---

The CAOS workflow engine is the operational backbone of the platform -- connecting compliance calendars, task management, and recurring automation into a unified system that ensures nothing falls through the cracks.

## Architecture Overview

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Compliance      │────▶│  Task Engine      │────▶│  Assignment     │
│  Calendar        │     │                  │     │  & Routing      │
└─────────────────┘     └──────────────────┘     └─────────────────┘
        │                        │                        │
        ▼                        ▼                        ▼
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Deadline        │     │  Status           │     │  Notification   │
│  Monitoring      │     │  Tracking         │     │  Engine         │
└─────────────────┘     └──────────────────┘     └─────────────────┘
        │                        │                        │
        ▼                        ▼                        ▼
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Auto-Escalation │     │  Portal Status    │     │  WhatsApp/Email │
│                  │     │  Sync             │     │  Alerts         │
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

## Three-Layer System

### Layer 1: Compliance Calendar

The compliance calendar holds the **master schedule** of all regulatory deadlines. It operates independently of individual tasks -- when a deadline exists, tasks are auto-generated.

| Calendar Type | Frequency | Auto-Generate |
|---|---|---|
| GST Returns | Monthly / Quarterly | Yes -- creates tasks 15 days before due date |
| ITR Filing | Annual (July/Oct/Nov) | Yes -- creates tasks 60 days before due date |
| TDS Returns | Quarterly | Yes -- creates tasks 20 days before due date |
| Advance Tax | Quarterly (Jun/Sep/Dec/Mar) | Yes -- creates tasks 10 days before due date |
| ROC Filing | Annual + Event-based | Yes -- creates tasks 30 days before due date |
| Audit | Annual | Yes -- creates tasks 90 days before due date |
| FEMA | Event-based | Yes -- creates tasks on trigger event |

:::note[Lead Time Configuration]
Lead times (days before deadline) are fully configurable per compliance type, per client, and per firm. A firm that completes ITR filings early can set 90-day lead times; a firm that works closer to deadlines can set 30 days.
:::

### Layer 2: Task Engine

The task engine transforms calendar events and manual inputs into actionable work items.

#### Task Lifecycle

```
Created --> Assigned --> In Progress --> Review --> Client Approval --> Filed --> Verified --> Closed
```

Each status transition can trigger:
- **Notifications** to the assigned staff, reviewer, or client
- **WhatsApp messages** to the client (e.g., "Your ITR has been filed")
- **Billing events** (e.g., auto-generate invoice when task closes)
- **Document requests** (e.g., request Form 16 from client when task starts)

#### Task Types

| Type | Trigger | Example |
|---|---|---|
| **Calendar-Generated** | Compliance deadline approaching | GSTR-3B for ABC Pvt Ltd - Sept 2026 |
| **Recurring** | Fixed schedule (monthly, quarterly) | Monthly bookkeeping for XYZ & Co |
| **Portal-Triggered** | Portal status change detected | Intimation received for PAN XXXXX |
| **Manual** | Staff creates ad-hoc task | Advisory meeting with client |
| **Client-Requested** | Client submits request via portal/WhatsApp | Client requests TAN registration |
| **Document-Triggered** | Document uploaded triggers workflow | Form 16 received, start ITR preparation |

### Layer 3: Recurring Automation

Recurring automation handles the repetitive setup work that consumes hours every month.

| Automation | What It Does | Trigger |
|---|---|---|
| **Monthly GST Batch** | Create GSTR-1 and GSTR-3B tasks for all applicable clients | 1st of every month |
| **Quarterly TDS Batch** | Create TDS return tasks for all TAN holders | 1st of Apr/Jul/Oct/Jan |
| **Annual ITR Batch** | Create ITR tasks for all clients by entity type | 1st April |
| **Annual ROC Batch** | Create AGM, annual filing tasks for companies | 1st April |
| **Advance Tax Reminders** | Create advance tax installment tasks | 1st Jun/Sep/Dec/Mar |
| **Audit Assignments** | Create audit tasks with team allocation | Per engagement letter |

## 600+ Workflow Templates

### Template Categories

| Category | Templates | Coverage |
|---|---|---|
| **GST** | 85+ | GSTR-1, 3B, 9, 9C, ITC-04, refunds, amendments, cancellation, new registration |
| **ITR** | 60+ | ITR-1 through ITR-7, revised returns, belated returns, defective response |
| **TDS** | 45+ | 24Q, 26Q, 27Q, 27EQ, corrections, lower deduction certificates |
| **ROC/MCA** | 80+ | AOC-4, MGT-7, DIR-3 KYC, charge creation, conversion, winding up |
| **Audit** | 40+ | Statutory, tax, internal, GST audit, transfer pricing |
| **FEMA** | 35+ | FCRA, ODI, FDI, ECB, compounding, annual returns |
| **Trust/NGO** | 30+ | 12A, 80G, FCRA, annual compliance, audit |
| **Payroll** | 25+ | PF, ESI, PT, gratuity, bonus, POSH compliance |
| **Advisory** | 50+ | Tax planning, structure optimization, succession |
| **Client Onboarding** | 15+ | KYC, engagement letter, credential collection |
| **Other** | 135+ | Import/export, cooperative, LLP, startup, trademark |

:::tip[Template Structure]
Each template includes:
- **Checklist** of required steps
- **Document list** for required client documents
- **SOP** with standard operating procedure
- **Timeline** with recommended milestones
- **Review points** for quality control
:::

### Template Example: GSTR-3B Monthly Filing

```
Template: GSTR-3B Monthly Filing
Frequency: Monthly
Lead Time: 15 days before 20th of next month
Steps:
  1. Download GSTR-2B from portal          [auto-fetch]
  2. Reconcile with purchase register       [doc intelligence]
  3. Prepare GSTR-3B computation            [auto-compute]
  4. Review by senior / partner             [assignment]
  5. Client approval via portal             [portal notification]
  6. File on GST portal                     [manual/assisted]
  7. Save ARN and acknowledgment            [auto-store]
  8. Generate invoice for service           [auto-bill]
Documents Required: Sales register, purchase register, GSTR-2B
SOP: Link to detailed GSTR-3B filing procedure
```

## Custom Workflow Builder

Beyond pre-configured templates, firms can build their own workflows:

- Create custom task sequences for firm-specific procedures
- Set dependencies between tasks ("Task B can't start until Task A is complete")
- Define approval gates ("Partner must review before filing")
- Attach checklists and SOPs to workflow steps
- Template import/export for sharing with other firms

## Automation Rules Engine

### Conditional Rules

| If... | Then... |
|---|---|
| Task overdue by 3 days | Escalate to team lead, notify partner |
| Client document not received 7 days before deadline | Send WhatsApp reminder to client |
| All subtasks complete | Auto-move task to "Review" status |
| Review approved | Notify assigned staff, move to "Filing" |
| Filing confirmed | Send confirmation to client, create invoice |
| Payment received | Close billing cycle, update outstanding |

### Assignment Rules

| Rule | Logic |
|---|---|
| **Round Robin** | Distribute tasks equally among team members |
| **Skill-Based** | Assign GST tasks to GST team, ITR to ITR team |
| **Client-Based** | Always assign same client to same staff |
| **Load-Based** | Assign to team member with lowest current workload |
| **Escalation** | If not started within 2 days, reassign to backup |

## Escalation Matrix

| Trigger | Action |
|---|---|
| Task approaching deadline (7 days) | WhatsApp notification to assignee |
| Task approaching deadline (3 days) | Email to assignee + notification to manager |
| Task overdue (1 day) | Alert to partner + client notification option |
| Task overdue (7 days) | Dashboard red flag + daily reminders |

## Portal Status Sync

CAOS monitors government portal status and updates tasks automatically.

| Portal | Status Monitored | Task Action |
|---|---|---|
| **Income Tax** | Return processing status, intimation, refund | Create response task on intimation |
| **GST** | Filing status, notice, SCN | Create response task on notice |
| **MCA** | Approval/rejection, SRN status | Update task status on change |
| **TRACES** | TDS correction status, defaults | Create correction task on default |

:::caution[Portal Monitoring]
Portal status sync requires client credentials stored in the encrypted credential vault. CAOS monitors portals at scheduled intervals (configurable) and creates alerts/tasks on status changes.
:::

## Performance Metrics

The workflow engine tracks execution metrics for practice analytics.

| Metric | Measurement |
|---|---|
| **On-Time Filing Rate** | % of compliances filed before deadline |
| **Average Task Cycle Time** | Days from task creation to completion |
| **Review Rejection Rate** | % of tasks sent back from review |
| **Client Response Time** | Days for client to provide documents |
| **Automation Rate** | % of tasks auto-generated vs. manual |
| **Template Usage** | Most/least used templates |

## Competitive Comparison

| Capability | CAOS | Bizalys | QwikCA | SimplifyPractice | MyTask |
|---|---|---|---|---|---|
| Pre-built templates | 600+ | 600+ | ~100 | ~50 | ~50 |
| FEMA workflows | Yes | Yes | No | No | No |
| Hearing/tribunal | Yes | Yes | No | No | No |
| Auto-assignment | Advanced | Basic | Basic | Basic | Basic |
| Portal status sync | Yes | No | No | No | Partial |
| Document triggers | Yes | No | No | No | No |
| Conditional rules | Yes | No | No | No | No |
| WhatsApp-integrated | Yes | No | No | No | No |
