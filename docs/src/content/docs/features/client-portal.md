---
title: Client Portal
description: CAOS branded client portal with custom domain, OTP login, task status, document upload/download, invoices, online payment, and messaging.
---

The client portal transforms the CA-client experience from "call and ask" to "check and self-serve." It reduces routine client communication by up to 80% while making the CA firm look professional and modern.

## Overview

The CAOS client portal is a **white-label web application** that CA firms offer to their clients under their own brand. Clients access it to check service status, upload documents, view invoices, make payments, and communicate with their CA team -- all without phone calls or office visits.

## Portal Features

### Custom Domain & Branding

| Feature | Standard Plan | Business Plan | Enterprise Plan |
|---|---|---|---|
| Portal access | Yes | Yes | Yes |
| Firm logo | Yes | Yes | Yes |
| Custom colors | No | Yes | Yes |
| Custom domain | No | Yes (portal.yourfirm.com) | Yes |
| Remove CAOS branding | No | No | Yes |
| Custom welcome message | Yes | Yes | Yes |
| Custom favicon | No | Yes | Yes |
| Email from firm domain | No | No | Yes |

:::tip[Revenue Impact]
CAs who offer client portal access report 10-20% higher fees. The professional experience justifies premium pricing. Clients who can self-check status stop calling the office, saving the CA firm hours of non-billable time every week.
:::

### OTP Login

No passwords to remember -- clients login with their mobile number.

| Step | What Happens |
|---|---|
| 1 | Client visits portal URL (e.g., portal.cafirm.com) |
| 2 | Enters registered mobile number |
| 3 | Receives OTP via SMS or WhatsApp |
| 4 | Enters OTP, session begins |
| 5 | Auto-logout after configurable timeout (default: 30 minutes) |

Security features:
- OTP expires after 5 minutes
- Maximum 3 OTP attempts before temporary lockout
- Session logging with IP and device tracking
- Optional email-based login as alternative

### Real-Time Task Status

Clients see the status of all their engagements in a clear dashboard.

```
┌────────────────────────────────────────────────┐
│  Welcome, Rajesh Sharma                         │
├────────────────────────────────────────────────┤
│                                                │
│  ITR Filing (AY 2026-27)    ████████░░  80%    │
│  Status: Under Review       Due: 31 Jul 2026   │
│                                                │
│  GST Returns (Apr 2026)     ██████████  Done    │
│  GSTR-3B filed on 18 Apr    ARN: AA123456       │
│                                                │
│  TDS Return (Q4)            ██░░░░░░░░  20%    │
│  Status: In Progress        Due: 15 May 2026   │
│                                                │
│  Tax Audit (FY 2025-26)     Pending             │
│  Starts: 01 Jul 2026       Due: 30 Sep 2026   │
│                                                │
└────────────────────────────────────────────────┘
```

Features:
- Progress percentage per task
- Status labels (Pending, In Progress, Under Review, Completed, Filed)
- Due dates with countdown
- Filing acknowledgment numbers when completed
- Notification on status change (WhatsApp + portal)

### Document Upload & Download

**Upload:**
- Drag-and-drop interface (desktop)
- Camera capture option (mobile)
- AI auto-detection of document type
- Auto-classification by PAN and assessment year
- Upload acknowledgment sent instantly
- File size limit: 25MB per file
- Supported: PDF, JPG, PNG, Excel, CSV

**Download:**
- Filed returns with acknowledgment
- Computation sheets
- Audit reports
- TDS certificates
- Any document shared by the CA firm
- Download history tracking

### Invoice & Payment

| Feature | Description |
|---|---|
| **Invoice list** | All invoices with status (Paid, Pending, Overdue) |
| **Invoice detail** | Full invoice with line items, GST, TDS |
| **Pay online** | Click-to-pay via Razorpay/PayU/UPI |
| **Payment methods** | UPI, credit/debit card, net banking, wallets |
| **Receipt** | Auto-generated receipt on payment |
| **Outstanding** | Running balance with aging |
| **Statement** | Download full account statement |

### AI Chatbot (Portal-Embedded)

A conversational AI assistant embedded in the portal for instant client support.

| Query Type | Response |
|---|---|
| Status queries | "Your ITR is currently being reviewed. Expected completion: July 20." |
| Document queries | "You need to upload Form 16 and bank statements for ITR filing." |
| Billing queries | "Your outstanding balance is Rs 15,000. Pay here: {link}" |
| General queries | "Your CA firm is open Mon-Sat, 10am-7pm. You can reach them at {number}." |
| Complex queries | "I'll connect you with your assigned team member, Amit, for this question." |

### Secure Messaging

Thread-based messaging between client and CA team.

| Feature | Description |
|---|---|
| **Threads** | Separate conversation threads per topic |
| **Attachments** | Share files within messages |
| **Read receipts** | Know when messages are read |
| **Notifications** | WhatsApp alert for new messages |
| **History** | Full conversation history preserved |
| **Context** | Staff sees all prior communication before responding |

## "Powered by CAOS" Growth Loop

On Standard and Business plans, client portals display a subtle "Powered by CAOS" badge. This creates a viral growth loop:

```
CA firm uses CAOS
    │
    ▼
Client sees "Powered by CAOS" on portal
    │
    ▼
Client's other CA friends/firms ask about it
    │
    ▼
New CA firm discovers CAOS
    │
    ▼
New CA firm adopts CAOS
```

Enterprise plan removes this branding for firms that want a fully white-label experience.

## Mobile Experience

The client portal is fully responsive and works on all devices.

| Device | Experience |
|---|---|
| **Desktop** | Full dashboard with all features |
| **Tablet** | Optimized layout, all features |
| **Mobile** | Compact layout, camera upload, UPI pay |

Key mobile features:
- Camera capture for document upload
- UPI deep link for instant payment
- Push-style notifications via WhatsApp
- Swipe gestures for navigation

## Portal Analytics (for CA Firm)

The CA firm gets analytics on portal usage.

| Metric | Insight |
|---|---|
| **Active users** | How many clients actively use the portal |
| **Login frequency** | How often clients check their portal |
| **Document uploads** | Volume and timeliness of client documents |
| **Payment rate** | % of invoices paid via portal |
| **Chatbot usage** | Queries handled without staff intervention |
| **Self-service rate** | % of interactions that did not require staff |

## Competitive Comparison

| Feature | CAOS | Practive | QwikCA | Zoho Practice | Others |
|---|---|---|---|---|---|
| Custom domain | Yes | Yes | No | No | No |
| Custom branding | Full | Full | Basic | Basic | No |
| OTP login | Yes | No | No | No | No |
| Task status | Real-time | Yes | Yes | Yes | Partial |
| Document upload | AI-classified | Basic | Basic | Basic | Basic |
| Online payment | Razorpay/PayU | Razorpay | Limited | No | No |
| AI chatbot | Yes | No | No | No | No |
| Messaging | Thread-based | No | No | No | No |
| Mobile optimized | Yes | Yes | Yes | Yes | Partial |
| Analytics | Yes | No | No | No | No |
