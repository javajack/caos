# CAOS Product Features & MVP Specification

## Vision

CAOS = The layer above Tally that runs the CA firm.

**Core modules:**
1. Document Intelligence (wedge)
2. Client Management (CRM)
3. Compliance Calendar
4. Task & Workflow Management
5. WhatsApp Communication Hub
6. Client Portal
7. Billing & Invoicing
8. Government Portal Auto-fetch
9. Team Management
10. Analytics & Reporting

---

## MVP (Month 1-3): 5 Core Modules

### Module 1: Document Intelligence (THE WEDGE)

**Purpose:** Automate the most time-consuming part of a CA's day -- processing client documents.

**Features:**
- **26AS/AIS Extraction:** Upload 26AS or AIS PDF, auto-extract all income/TDS entries with source mapping
- **Form 16 Processing:** Extract salary details, TDS, employer info, Section 80 deductions
- **Bank Statement Processing:** Support 500+ Indian bank formats (PDF + Excel), auto-categorize transactions
- **PAN-based Clustering:** All documents auto-organized by client PAN
- **Tally Data Import:** Import trial balance, ledger data from Tally for reconciliation
- **Anomaly Detection:** Flag mismatches between 26AS data and client-provided information
- **Batch Processing:** Upload multiple documents, process in background
- **Export:** Processed data exportable to Excel/CSV for Tally import

**Value proposition:** Saves 2-5 hours per client during ITR season. 100 clients = 200-500 hours saved.

### Module 2: Client Management

**Features:**
- **Client Master:** PAN, GSTIN, TAN, CIN, DIN, addresses, multiple contact persons
- **Credential Vault:** AES-256 encrypted storage for GST/IT/MCA portal credentials
- **Service Package Mapping:** Which services each client subscribes to
- **Client Grouping:** Family groups, business groups (e.g., "Sharma Group" = 3 companies + 5 individuals)
- **Bulk Import:** Excel/CSV import for migrating from existing systems
- **Client History:** Timeline of all interactions, documents, tasks, invoices
- **Quick Search:** PAN-based search across all clients

### Module 3: Compliance Calendar

**Features:**
- **Pre-configured Deadlines:**
  - GST: GSTR-1 (11th), GSTR-3B (20th), GSTR-9 (31 Dec), GSTR-2B match
  - ITR: By type and audit applicability (31 Jul, 31 Aug, 30 Sep, 31 Oct)
  - TDS: Quarterly returns (31 May, 31 Jul, 31 Oct, 31 Jan)
  - Advance Tax: 15 Jun, 15 Sep, 15 Dec, 15 Mar
  - ROC: AGM (30 Sep), AOC-4 (30 Oct), MGT-7 (30 Nov)
- **Client-Specific Calendar:** Only show deadlines relevant to each client's registrations
- **Auto-Assignment:** When a deadline approaches, auto-create task and assign to responsible team member
- **Dashboard Views:** Today / This Week / Overdue / Upcoming 30 days
- **Custom Deadlines:** Add one-off or recurring custom deadlines
- **Alerts:** WhatsApp/email notifications for approaching and overdue deadlines

### Module 4: Task Management

**Features:**
- **Task Creation:** Manual + auto from compliance calendar
- **Assignment:** Assign to team members with priority and due date
- **Status Flow:** Pending -> In Progress -> Review -> Completed
- **Recurring Engine:** Monthly/Quarterly/Half-Yearly/Annual auto-creation
- **Sub-tasks & Checklists:** Break large tasks into steps
- **Time Logging:** Track time spent per task
- **Views:** List view, Kanban board, Calendar view
- **Filters:** By client, assignee, status, due date, service type
- **Bulk Operations:** Bulk assign, bulk status change

### Module 5: WhatsApp Integration

**Features:**
- **Automated Reminders:** Send deadline reminders to clients via WhatsApp
- **Document Request:** Pre-formatted messages requesting specific documents
- **Status Updates:** Auto-notify clients when their filing is complete
- **Bulk Messaging:** Send to multiple clients with template personalization
- **Document Upload Links:** Send secure upload links via WhatsApp
- **Template Library:** Pre-built message templates for common scenarios
- **Delivery Tracking:** Confirm message delivery and read status

---

## Growth Phase (Month 3-6): 4 Additional Modules

### Module 6: Client Portal
- Branded portal with optional custom domain
- OTP-based secure client login
- Real-time task status visibility
- Document upload and download
- Invoice viewing and online payment
- Secure messaging with CA firm
- "Powered by CAOS" branding on free tier

### Module 7: Billing & Invoicing
- Service-based invoice creation
- Recurring/auto-invoicing
- GST-compliant invoices with TDS support
- Payment gateway integration (Razorpay, PhonePe, UPI)
- Outstanding tracking with aging analysis
- Automated payment reminders (WhatsApp + email)
- Tally XML export for billing entries

### Module 8: Government Portal Auto-fetch
- **GST Portal:** GSTR-2B data, cash/credit ledger, registration status, return filing status
- **Income Tax Portal:** Notices, demands, proceedings, UDIN validation, refund status
- **TRACES:** TDS return status, TDS certificates
- Scheduled auto-sync (daily/weekly configurable)
- Unified compliance dashboard across all portals
- Alert on new notices or demands

### Module 9: Team Management
- Role-based access control (Partner / Manager / Staff / Intern)
- Attendance tracking with optional geo-tagging
- Leave management
- Workload view and capacity planning
- Performance analytics (tasks completed, time per task, on-time rate)
- Internal messaging / team chat

---

## Differentiation Phase (Month 6-12)

### WhatsApp AI Chatbot
- Clients query task status ("What's the status of my ITR?")
- Download documents and invoices via chat
- Check outstanding balance
- Upload documents via WhatsApp
- Natural language understanding in English and Hindi

### Advanced Document Intelligence
- GST reconciliation: GSTR-2B vs purchase register
- 26AS/AIS mismatch detection against filed returns
- Auto-classification of expenses by tax head
- HSN/SAC code suggestion from invoice descriptions
- OCR for handwritten/scanned documents (95%+ accuracy target)

### DSC Management
- Digital Signature Certificate inventory
- Expiry alerts and renewal tracking
- Physical location tracking (which team member has which DSC)
- Assignment to tasks requiring DSC

### Module 10: Analytics & Reporting
- Revenue by client / service / period
- Staff utilization and productivity metrics
- Compliance status (on-time vs late filings)
- Client profitability analysis
- Billable vs non-billable hours
- Practice health dashboard
- Export to Excel / PDF

---

## Platform Phase (Month 12-24)

### Advisory Intelligence
- Tax planning suggestions from ITR data
- Working capital insights from GST data
- Business health alerts from financial statements
- Automated advisory report generation
- Benchmarking against similar businesses

### Template Marketplace
- Shareable workflow templates
- Community-contributed compliance checklists
- Document request templates
- Import/export with one click
- Rating and review system

### Direct GST Filing
- GSTR-1 preparation and filing from platform
- GSTR-3B with auto-computed liability
- E-way bill generation
- E-invoice generation and management

### Multi-Branch Support
- Centralized dashboard across branches
- Branch-wise access control and reporting
- Inter-branch task transfer
- Consolidated billing and analytics

### Open API
- RESTful API for custom integrations
- Tally bidirectional real-time sync
- Zapier/Make connector
- Webhook support for event notifications

---

## What CAOS Explicitly Does NOT Do

| We Don't Do This | Why | Use This Instead |
|------------------|-----|-----------------|
| Accounting / bookkeeping | Tally does this; we work above it | Tally, Zoho Books |
| GST return filing (MVP) | Complex, requires GSP license; defer to Phase 4 | ClearTax, TaxOne |
| ITR filing | Government portal does this; we track status | IT e-filing portal |
| Payroll processing | Not core to CA practice management | Zoho Payroll, HROne |
| Full ERP | CAOS is lightweight practice management, not ERP | Tally, Busy |
| Legal research | Different product category | Vidur, Vaive AI |

**Principle:** Do fewer things exceptionally well. Integrate with best-of-breed tools for everything else.
