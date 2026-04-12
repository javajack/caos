---
title: Billing & Invoicing
description: CAOS service-based billing, recurring invoices, GST-compliant invoicing, payment gateways, Tally export, and outstanding tracking for CA firms.
---

Billing in a CA practice is uniquely complex -- services vary by client, billing cycles differ by engagement type, and outstanding management is a constant challenge. CAOS billing is designed specifically for these realities.

## Invoice Types

| Type | Use Case | Automation |
|---|---|---|
| **Service invoice** | One-time billing for specific services (ITR filing, registration) | Manual or auto on task completion |
| **Recurring invoice** | Monthly/quarterly/annual retainer billing | Fully automated on schedule |
| **Auto-generated** | Triggered when a task reaches "Completed" status | Automatic |
| **Proforma invoice** | Pre-engagement estimate for client approval | Manual |
| **Credit note** | Adjustments, refunds, and corrections | Manual |
| **Consolidated** | Bundle multiple services into one invoice | Scheduled (monthly/quarterly) |

## Service-Based Invoicing

### How It Works

1. **Define services** in the firm's service catalog with default pricing
2. **Map services to clients** with client-specific pricing overrides
3. **Link tasks to services** so completed work auto-triggers invoicing
4. **Generate invoice** with all service line items, GST, and TDS
5. **Deliver** via WhatsApp, email, or client portal

### Invoice Format

Every CAOS invoice is **GST-compliant** with:

| Field | Description |
|---|---|
| Firm GSTIN | CA firm's GST registration number |
| Client GSTIN | Client's GST number (if registered) |
| HSN/SAC code | Service Accounting Code for professional services (SAC 998231) |
| CGST/SGST or IGST | Based on same-state or inter-state supply |
| Place of supply | Determined from client address |
| TDS section | Applicable TDS section (194J for professional services) |
| TDS amount | Auto-computed based on section and threshold |
| Invoice series | Configurable series with auto-numbering |

:::note[TDS Handling]
For CA fees, clients typically deduct TDS under Section 194J (10%). CAOS auto-computes TDS, shows the net payable amount, and tracks TDS receivable for the CA firm's own ITR filing.
:::

## Recurring / Auto-Invoicing

### Configuration

| Setting | Options |
|---|---|
| **Frequency** | Monthly, quarterly, half-yearly, annual |
| **Generation date** | 1st of month, end of month, custom date |
| **Auto-send** | Immediately, after review, manual send |
| **Consolidation** | Separate invoices per service or consolidated |
| **Price escalation** | Annual % increase, manual revision |

### Auto-Invoice on Task Completion

```
Task "GSTR-3B for Client X - March 2026" marked as Completed
    │
    ▼
System checks: Service mapped? Billing terms set? Auto-invoice enabled?
    │
    ▼ (Yes to all)
Invoice generated: Rs 2,000 + 18% GST = Rs 2,360
    │
    ▼
Invoice sent via WhatsApp + email with payment link
    │
    ▼
Outstanding updated in client ledger
```

## Payment Gateway Integration

### Supported Gateways

| Gateway | Payment Methods | Settlement |
|---|---|---|
| **Razorpay** | UPI, cards, net banking, wallets | T+2 working days |
| **PayU** | UPI, cards, net banking | T+2 working days |
| **Direct UPI** | UPI payment links | Instant |
| **Bank Transfer** | Manual entry with reference matching | Manual reconciliation |
| **Cash/Cheque** | Manual entry | Manual |

### Payment Flow

1. Invoice generated with unique payment link
2. Client receives link via WhatsApp/email/portal
3. Client pays via preferred method (UPI, card, net banking)
4. Payment confirmation received automatically
5. Receipt auto-generated and sent to client
6. Outstanding updated in real-time
7. Payment reconciled with invoice

## Tally Export

| Export Type | Format | Use Case |
|---|---|---|
| **Invoice export** | Tally-compatible XML | Import CA firm's invoices into Tally |
| **Receipt export** | Tally-compatible XML | Import payment receipts into Tally |
| **Ledger sync** | XML/CSV | Sync client ledger balances |
| **Outstanding report** | Excel | Share with Tally for reconciliation |

:::tip[Two-Way Tally]
CAOS can both export billing data to Tally and import Tally ledger data for reconciliation. This ensures the CA firm's own books in Tally match the billing in CAOS without manual data entry.
:::

## Outstanding Tracking

### Aging Dashboard

| Bucket | Display | Action |
|---|---|---|
| **Current** | Invoices within payment terms | No action needed |
| **1-30 days** | Mildly overdue | Automated WhatsApp reminder |
| **31-60 days** | Moderately overdue | Email reminder + staff notification |
| **61-90 days** | Seriously overdue | Partner notification + escalation |
| **90+ days** | Critical | Manual intervention required |

### Automated Reminders

| Trigger | Channel | Message |
|---|---|---|
| 7 days overdue | WhatsApp | Gentle reminder with payment link |
| 15 days overdue | WhatsApp + Email | Firm reminder with outstanding details |
| 30 days overdue | Email (formal) | Formal demand with full account statement |
| 45 days overdue | Staff alert | Partner notified, manual follow-up |

### Client Ledger

Complete payment history per client:
- All invoices with payment status
- Payment dates and methods
- TDS deducted and certificates received
- Credit notes and adjustments
- Running balance

## Reporting

| Report | Description |
|---|---|
| **Revenue by service** | Which services generate the most revenue |
| **Revenue by client** | Client-wise billing and collection |
| **Revenue by period** | Monthly/quarterly/annual trends |
| **Outstanding aging** | Overdue amounts by age bucket |
| **Collection efficiency** | % of billed amount collected within 30/60/90 days |
| **Unbilled work** | Completed tasks without invoices |
| **TDS receivable** | TDS deducted by clients, pending for claim |
| **Revenue per employee** | Staff-wise billing productivity |

## Multi-Currency Support

For firms serving NRI clients or international businesses:

| Feature | Description |
|---|---|
| **Currency selection** | Invoice in USD, GBP, EUR, AED, SGD |
| **Exchange rate** | Auto-fetch or manual rate entry |
| **Dual display** | Show both foreign currency and INR equivalent |
| **FEMA compliance** | Ensure billing complies with FEMA regulations |

## Competitive Comparison

| Feature | CAOS | SimplifyPractice | QwikCA | Practive | Bizalys |
|---|---|---|---|---|---|
| Service-based billing | Yes | Yes | Yes | Basic | Basic |
| Recurring invoices | Yes | Yes | Yes | No | No |
| Auto on task completion | Yes | No | No | No | No |
| Payment gateway | Razorpay, PayU | Limited | Yes | Razorpay | No |
| Tally export | Yes | No | Partial | No | No |
| Outstanding tracking | Advanced | Basic | Basic | No | No |
| WhatsApp reminders | Yes | No | No | No | No |
| TDS handling | Auto-compute | Manual | Manual | No | No |
| Multi-currency | Yes | No | No | No | No |
