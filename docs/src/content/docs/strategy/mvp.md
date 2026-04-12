---
title: MVP Definition
description: CAOS v1 scope -- what goes in, what stays out, and why. Five core modules for the Month 1-3 minimum viable product.
---

## MVP Philosophy

The CAOS MVP is not the smallest possible product. It is the smallest product that delivers the full value proposition: **document intelligence + compliance tracking + client management + task management + WhatsApp communication, working together.**

A document intelligence tool alone is a feature. A compliance calendar alone is a spreadsheet replacement. The MVP must demonstrate the integrated workflow -- the reason CAOS exists.

:::caution
The temptation in MVP definition is to cut modules to ship faster. Cutting any of the five core modules breaks the integrated value proposition. Instead, cut depth within each module. Ship all five modules, but ship them thin.
:::

---

## Month 1-3 Scope

### Timeline Breakdown

| Period | Focus | Deliverable |
|---|---|---|
| **Week 1-4** | Core infrastructure + Document Intelligence | Upload, classify, extract for top 6 doc types |
| **Week 5-8** | Client Management + Compliance Calendar | Client profiles, master calendar, status tracking |
| **Week 9-10** | Task Management + WhatsApp Integration | Tasks from calendar, WhatsApp notifications |
| **Week 11-12** | Integration, testing, polish | End-to-end workflow, bug fixes, onboarding flow |

### Success Criteria for MVP Launch

| Metric | Target |
|---|---|
| Document classification accuracy (top 6 types) | 90%+ |
| Data extraction accuracy | 85%+ |
| End-to-end workflow completion | Upload doc to task assignment in < 2 minutes |
| Onboarding time | New firm operational in < 30 minutes |
| Critical bugs | Zero at launch |

---

## Module 1: Document Intelligence

### What Is In

| Feature | Specification |
|---|---|
| Upload channels | Web upload, drag-and-drop, WhatsApp forward |
| Supported document types | PAN card, Aadhaar card, Form 16, bank statement (top 5 banks), GST invoice, ITR acknowledgment |
| Auto-classification | Identify document type from image/PDF without user input |
| Data extraction | Extract key fields per document type (see table below) |
| Client linking | Match extracted PAN/name to existing client profile |
| Smart filing | Auto-organize into client folder by document type and date |
| Bulk upload | Upload up to 20 documents in a single batch |

### Extracted Fields by Document Type

| Document | Fields Extracted |
|---|---|
| PAN card | PAN number, full name, date of birth, father's name |
| Aadhaar card | Aadhaar number, name, date of birth, address |
| Form 16 | Employee name, PAN, employer TAN, gross salary, tax deducted, assessment year |
| Bank statement | Account holder, account number, bank name, period, opening/closing balance |
| GST invoice | Supplier GSTIN, buyer GSTIN, invoice number, date, taxable value, CGST, SGST, IGST, total |
| ITR acknowledgment | PAN, name, assessment year, ITR form type, date of filing, acknowledgment number |

### What Is Out (MVP)

| Excluded Feature | Reason |
|---|---|
| Multi-page bank statement extraction | Complex; top 5 bank single-page summaries first |
| Handwritten document processing | Accuracy insufficient without extensive training data |
| Document comparison (YoY) | Requires at least 2 years of data; no value on day 1 |
| Cross-document validation | Needs full client document set; premature for MVP |
| More than 6 document types | Nail the top 6 before expanding coverage |

:::tip
The document types chosen for MVP cover 80%+ of a typical CA's document processing volume during ITR season. Expanding to the remaining 20% is a P1 priority, not a P0 requirement.
:::

---

## Module 2: Client Management

### What Is In

| Feature | Specification |
|---|---|
| Client profiles | Name, PAN, GSTIN, entity type (Individual, Company, LLP, Trust, HUF), contact info |
| Entity types | Individual, Proprietorship, Partnership, LLP, Pvt Ltd, Public Ltd, Trust, HUF |
| Contact management | Primary contact + up to 3 additional contacts per client |
| Client import | Bulk import from CSV with column mapping |
| Search and filter | Full-text search, filter by entity type, status, assigned CA |
| Document vault | Auto-populated from document intelligence; manual upload fallback |
| Client notes | Timestamped notes with author attribution |
| Activity log | Automatic log of all actions on a client (documents, tasks, notes) |
| Client status | Active, Inactive, Onboarding, Suspended |

### What Is Out (MVP)

| Excluded Feature | Reason |
|---|---|
| Client portal (client-facing) | P1 feature; requires separate auth system, branding, and UX |
| Client grouping/tagging | Nice to have; simple search and filters are sufficient for MVP |
| Client-level analytics | Requires accumulated data; no value on day 1 |
| Tally client sync | Tally integration is valuable but adds 4-6 weeks of scope |
| Multiple firm support | Single-firm MVP; multi-firm is P3 |

---

## Module 3: Compliance Calendar

### What Is In

| Feature | Specification |
|---|---|
| Master deadline database | All statutory deadlines for FY 2025-26 and FY 2026-27 |
| Covered compliances | GST (GSTR-1, GSTR-3B, GSTR-9), TDS (quarterly returns), ITR (all forms), ROC annual filing, advance tax |
| Client-specific calendar | Show only deadlines applicable to each client's entity type and registrations |
| Status tracking | Not Started, In Progress, Pending Review, Completed, Overdue |
| Configurable alerts | Reminder at 7 days, 3 days, 1 day, and overdue (customizable) |
| Views | Monthly calendar, weekly view, list view (sortable and filterable) |
| Bulk status update | Mark multiple compliances as completed in one action |
| Deadline extensions | Handle government-announced deadline extensions |

### Compliance Coverage Detail

| Compliance | Frequency | Entity Types |
|---|---|---|
| GSTR-1 | Monthly/Quarterly | All GST-registered entities |
| GSTR-3B | Monthly/Quarterly | All GST-registered entities |
| GSTR-9/9A | Annual | All GST-registered entities |
| TDS returns (24Q, 26Q, 27Q) | Quarterly | Entities with TDS obligations |
| ITR-1 to ITR-7 | Annual | All entities (form varies by type) |
| Tax audit report | Annual | Entities above threshold |
| ROC annual filing (AOC-4, MGT-7) | Annual | Companies |
| Advance tax | Quarterly | Entities with tax liability > INR 10,000 |
| PF/ESI returns | Monthly | Entities with employees |

### What Is Out (MVP)

| Excluded Feature | Reason |
|---|---|
| Government portal status sync | P1 feature; extremely complex to build reliably |
| Custom compliance types | Standard compliances cover 95%+ of needs |
| Historical compliance data | No import; start tracking from date of adoption |
| Compliance analytics (on-time rate, etc.) | Requires accumulated data |

:::note
The compliance calendar is a commodity feature -- every competitor has one. The CAOS differentiator is how the calendar integrates with task management (auto-generated tasks), document intelligence (required documents flagged), and WhatsApp (automated reminders to clients). This integration is MVP-critical.
:::

---

## Module 4: Task Management

### What Is In

| Feature | Specification |
|---|---|
| Task creation | Manual creation with title, description, client, deadline, assignee, priority |
| Auto-generated tasks | Compliance calendar deadlines automatically create tasks |
| Task status | Open, In Progress, Under Review, Completed, Blocked |
| Assignment | Assign to any team member; reassignment supported |
| Priority levels | Urgent, High, Medium, Low |
| Due date tracking | Visual overdue indicators; sortable by due date |
| Dashboard | "My Tasks Today" view as the default landing page |
| Filters | By status, assignee, client, priority, due date range |
| Task comments | Internal comments on tasks (not visible to clients) |

### What Is Out (MVP)

| Excluded Feature | Reason |
|---|---|
| Time tracking | P1 feature; tied to billing module |
| Recurring tasks | Auto-generation from compliance calendar handles most recurrence |
| Task templates | P2 feature; marketplace dependency |
| Subtasks and checklists | Adds UI complexity; simple task list is sufficient for MVP |
| Kanban board view | List and calendar views are sufficient; Kanban is cosmetic at this stage |
| Workload balancing | P1 feature; requires team management module |

---

## Module 5: WhatsApp Integration

### What Is In

| Feature | Specification |
|---|---|
| WhatsApp Business API | Official API integration (not unofficial/grey routes) |
| Deadline reminders (to CA) | Upcoming deadline notifications to the CA's WhatsApp |
| Client reminders | Send document/payment reminders to client WhatsApp numbers |
| Template messages | 8-10 pre-approved templates (deadline reminder, document request, payment reminder, acknowledgment) |
| Document receipt via WhatsApp | Client forwards document to firm's WhatsApp; CAOS processes it |
| Document received confirmation | Auto-reply "Document received and being processed" |
| Opt-in management | Client consent tracking for WhatsApp communications |

### Template Messages (MVP Set)

| Template | Trigger | Content Summary |
|---|---|---|
| Deadline reminder (7-day) | 7 days before compliance deadline | "[Client], your [compliance] is due on [date]. Please share pending documents." |
| Deadline reminder (3-day) | 3 days before deadline | Urgent reminder with specific document list |
| Document request | Manual trigger by CA | "We need the following documents for your [filing]: [list]" |
| Document received | Auto on WhatsApp document receipt | "Thank you, [Client]. Your [doc type] has been received and is being processed." |
| Filing completed | CA marks compliance as done | "Your [filing] for [period] has been successfully completed." |
| Payment reminder | Manual or auto from billing | "Your invoice of INR [amount] for [service] is pending. Please arrange payment." |
| Welcome message | New client onboarded | Welcome message with firm branding and portal link |
| General update | Manual broadcast | Regulatory update or firm announcement |

### What Is Out (MVP)

| Excluded Feature | Reason |
|---|---|
| AI chatbot (conversational) | P2 feature; requires NLP, intent detection, context management |
| Two-way WhatsApp conversations | MVP has templates + document receipt only; free-form chat is P2 |
| WhatsApp group management | Complex; not core to practice management |
| Voice notes processing | P2/P3; requires speech-to-text integration |
| Hindi/regional language support | P2; English-first MVP |

:::caution
WhatsApp Business API requires Meta Business verification and template approval. This process takes 2-4 weeks. Start the application process in Week 1 of development, not when the feature is ready for testing.
:::

---

## Explicit Exclusions and Rationale

The following features are deliberately excluded from MVP despite being commonly requested or expected.

| Excluded Feature | Common Request Level | Reason for Exclusion |
|---|---|---|
| **Client portal** | High | Requires separate auth, branding, UX. Doubles frontend scope. P1. |
| **Billing and invoicing** | High | Monetization feature, not adoption feature. CAs have existing billing methods. P1. |
| **Tally integration** | Very High | Complex (XML-based, desktop-only, version fragmentation). Adds 4-6 weeks. P1. |
| **Government portal sync** | High | Extremely complex, maintenance-heavy. Single highest-risk feature. P1. |
| **Mobile app** | High | Responsive web + WhatsApp integration covers mobile use cases for MVP. P1/P2. |
| **Team analytics** | Medium | Requires accumulated data. No value in first 30 days. P1. |
| **DSC management** | Medium | Niche feature. Solves a real problem but not daily. P2. |
| **GST filing** | Low-Medium | Competing with ClearTax/Zoho. Not a practice management feature. P3. |
| **Multi-branch** | Low | < 5% of target market in Year 1. P3. |
| **Advisory intelligence** | Low | Requires 12+ months of data. No value on day 1. P3. |

:::note
The hardest exclusion is Tally integration. Every CA will ask "does it work with Tally?" at MVP launch. The answer must be: "Tally integration is coming in the next release. Today, CAOS works alongside Tally -- you continue using Tally for accounting while CAOS manages everything else." This answer is honest and acceptable if the standalone value is strong enough.
:::

---

## MVP User Journey

### Onboarding (Day 1)

1. Sign up with email/phone
2. Set up firm profile (name, GSTIN, address)
3. Import client list from CSV (or add manually)
4. System auto-populates compliance calendar based on client entity types
5. Connect WhatsApp Business number

### Daily Usage (Day 2+)

1. Open CAOS -- see today's tasks and upcoming deadlines on dashboard
2. Receive documents from clients via WhatsApp -- auto-processed and filed
3. Upload additional documents via web -- auto-classified and linked
4. Update task status as work progresses
5. Send WhatsApp reminders to clients for pending documents
6. Mark compliances as completed

### Monthly Rhythm

1. Review compliance status across all clients
2. Send bulk reminders for upcoming deadlines
3. Process month-end documents
4. Update client records as needed

---

## MVP Technical Requirements

| Requirement | Specification |
|---|---|
| Hosting | Cloud-hosted (AWS/GCP India region) |
| Uptime target | 99.5% |
| Response time | < 2 seconds for all UI actions |
| Document processing time | < 30 seconds for classification + extraction |
| Concurrent users | Support 100 simultaneous users at launch |
| Data security | Encryption at rest and in transit, per-firm data isolation |
| Backup | Daily automated backups with 30-day retention |
| Browser support | Chrome, Edge, Safari (latest 2 versions) |

---

## Summary

The CAOS MVP ships five modules, each deliberately thin but fully integrated. The integration is the product -- documents flow into client profiles, calendars generate tasks, WhatsApp connects the firm to clients. What the MVP excludes is as important as what it includes. Every exclusion has a clear rationale and a planned timeline. The goal is not to build the smallest product but to build the smallest product that proves the integrated value proposition.
