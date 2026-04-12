---
title: Communication Hub
description: CAOS WhatsApp automation (notifications, AI chatbot, bulk messaging, doc collection), email integration, and SMS for CA practices.
---

WhatsApp is the primary communication channel for 90%+ of Indian CA firms. CAOS embraces this reality by making WhatsApp a **first-class workflow channel**, not just a notification pipe. The Communication Hub unifies WhatsApp, email, and SMS into a single system tied to client records and task workflows.

## WhatsApp Integration (Core)

### Architecture

```
┌─────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Client on   │────▶│  WhatsApp Business│────▶│  CAOS Message   │
│  WhatsApp    │     │  API              │     │  Router         │
└─────────────┘     └──────────────────┘     └─────────────────┘
                                                      │
                    ┌─────────────────────────────────┤
                    ▼                 ▼                ▼
              ┌──────────┐    ┌──────────┐    ┌──────────┐
              │ AI        │    │ Document  │    │ Workflow  │
              │ Chatbot   │    │ Processor │    │ Trigger   │
              └──────────┘    └──────────┘    └──────────┘
```

### Automated Notifications

Task and compliance events trigger WhatsApp messages automatically.

| Event | Message Template | Timing |
|---|---|---|
| **Deadline approaching** | "Dear {name}, your {compliance} is due in {days} days. Please share any pending documents." | 15, 7, 3 days before |
| **Document request** | "We need your {document} for {service}. Please upload here: {link}" | When task starts |
| **Status update** | "Your {service} for AY {year} has been filed. Acknowledgment: {arn}" | On task completion |
| **Payment reminder** | "Invoice #{number} of Rs {amount} is due. Pay online: {link}" | 7, 15, 30 days overdue |
| **Receipt confirmation** | "Thank you! Payment of Rs {amount} received for Invoice #{number}." | On payment |
| **Document received** | "We received your {document}. Processing will begin shortly." | On upload |

:::note[Template Approval]
WhatsApp Business API requires pre-approved message templates. CAOS ships with 25+ pre-approved templates covering all common scenarios. Firms can submit custom templates for approval through the CAOS admin panel.
:::

### AI Chatbot

Clients can self-serve common queries without calling the CA firm.

| Client Query | Bot Response |
|---|---|
| "What's the status of my ITR?" | "Your ITR-1 for AY 2026-27 is In Progress. Assigned to Amit. Expected: 15 July." |
| "Download my last invoice" | Sends the latest invoice PDF |
| "How much do I owe?" | "Outstanding: Rs 12,500. Pay online: {link}" |
| "Upload a document" | Sends secure upload link |
| "When is my next GST due?" | "Your GSTR-3B for March 2026 is due on April 20, 2026." |
| "I changed my bank account" | "Noted. I've created a task for your team to update records. They'll reach out shortly." |
| "What documents do you need from me?" | Lists all pending document requests for the client |

**Fallback handling:** When the chatbot cannot answer a query, it:
1. Acknowledges the question
2. Routes to the assigned staff member with full context
3. Notifies the client that a team member will respond

:::tip[80% Call Reduction]
CAs report that client communication is their number one non-billable time sink. A WhatsApp AI chatbot handles 80% of routine queries, freeing up hours every day. The remaining 20% that need human attention are routed with full context.
:::

### Document Collection via WhatsApp

Clients can send documents directly via WhatsApp.

| Step | What Happens |
|---|---|
| **1. Request** | CAOS sends secure upload link via WhatsApp template |
| **2. Upload** | Client taps link, opens browser-based upload interface |
| **3. Detect** | AI auto-detects document type (Form 16, bank statement, invoice) |
| **4. Classify** | Document auto-classified and tagged with PAN and assessment year |
| **5. Route** | Document routed to correct task and team member |
| **6. Acknowledge** | Client receives automatic confirmation |
| **7. Process** | Document intelligence engine extracts data |

Alternative flow: clients can also directly share images/PDFs via WhatsApp chat, and the system processes them.

### Bulk Messaging

Send compliance reminders to all relevant clients at once.

| Bulk Message Type | Audience | Example |
|---|---|---|
| **GST deadline reminder** | All GST-registered clients | "GSTR-3B for March is due by April 20. Please ensure sales data is shared." |
| **ITR document collection** | All individual ITR clients | "ITR filing season has begun. Please share Form 16, bank statements, and investment proofs." |
| **Advance tax reminder** | Clients with advance tax obligation | "Q1 advance tax (15% of estimated liability) is due by June 15." |
| **Festival greetings** | All clients | "Wishing you a Happy Diwali from {firm name}!" |
| **Fee revision** | Selected clients | "We are revising our service fees effective April 1. Updated fee schedule attached." |

Features:
- Delivery tracking and read receipts per client
- Schedule messages for specific dates/times
- Personalization with client name, service, and amount variables
- Rate limiting to comply with WhatsApp Business API policies

### Workflow Triggers

WhatsApp messages can trigger task actions.

| Client Message | System Action |
|---|---|
| Client sends a document | Create document receipt task, run extraction |
| Client confirms "approved" | Move task to "Filed" status |
| Client asks to reschedule | Flag task for staff review |
| Client reports an issue | Create ad-hoc support task |

### Conversation History

Every WhatsApp interaction is logged against the client record.

- Full conversation history searchable by client
- Messages linked to tasks and documents
- Staff can see all prior client communication before responding
- Conversation context available to AI chatbot for personalized responses

## Email Integration

| Feature | Description |
|---|---|
| **Invoice delivery** | Auto-send invoices as PDF attachments |
| **Report delivery** | Send periodic reports to clients or partners |
| **Template library** | Pre-built email templates with firm branding |
| **Gmail/Outlook** | Integration with Gmail and Microsoft Outlook |
| **History tracking** | Email history tracked against client records |
| **Scheduled delivery** | Schedule emails for specific dates and times |

## SMS (Optional)

| Feature | Description |
|---|---|
| **DLT-compliant** | Registered sender ID and approved templates |
| **OTP delivery** | OTP for client portal login |
| **Critical alerts** | Urgent deadline or notice alerts |
| **Fallback** | Automatic SMS when WhatsApp delivery fails |

## Channel Priority

CAOS uses a smart channel selection based on client preferences.

| Priority | Channel | Use Case |
|---|---|---|
| 1 | **WhatsApp** | Default for all communication |
| 2 | **Email** | Formal documents, invoices, reports |
| 3 | **SMS** | OTP, urgent alerts, WhatsApp fallback |
| 4 | **Portal** | Self-service, document upload, payment |

## Competitive Comparison

| Feature | CAOS | Practive | WebLedger | Vidur | Others |
|---|---|---|---|---|---|
| WhatsApp notifications | Yes | Yes | Yes | No | No |
| AI chatbot | Full | Basic | No | Bot | No |
| Document collection | Yes | No | No | No | No |
| Bulk messaging | Yes | No | No | No | No |
| Workflow triggers | Yes | No | No | No | No |
| Conversation history | Yes | Partial | No | No | No |
| Email integration | Yes | No | No | No | Partial |
| SMS fallback | Yes | No | No | No | No |
