---
title: Product Roadmap
description: Phased product roadmap for CAOS -- from MVP through Platform stage. Milestones, metrics, and deliverables across four phases over 24 months.
---

## Roadmap Overview

The CAOS roadmap spans 24 months across four phases. Each phase has a clear objective, defined deliverables, and measurable success criteria.

| Phase | Period | Objective | Key Metric |
|---|---|---|---|
| **Phase 1: MVP** | Month 1-3 | Ship core product, validate wedge | 200+ firms signed up |
| **Phase 2: Growth** | Month 3-6 | Drive adoption and first paid conversions | 1,000 firms, 100 paid |
| **Phase 3: Differentiation** | Month 6-12 | Competitive separation and market leadership | 5,000 firms, 500 paid |
| **Phase 4: Platform** | Month 12-24 | Ecosystem and long-term defensibility | 15,000+ firms, 2,000+ paid |

:::note
This roadmap is a strategic plan, not a rigid schedule. Dates will shift based on user feedback, competitive dynamics, and resource availability. The sequence of phases is firm; the exact timing within each phase is flexible.
:::

---

## Phase 1: MVP (Month 1-3)

### Objective

Ship a working product with the five core modules that demonstrates the integrated value proposition. Acquire 200+ early adopter firms.

### Deliverables

| Month | Deliverable | Details |
|---|---|---|
| **M1** | Document Intelligence v1 | Upload, classify, extract for 6 document types |
| **M1** | Core infrastructure | Auth, firm setup, database, file storage, API layer |
| **M1-2** | Client Management v1 | Profiles, import, search, document vault, notes |
| **M2** | Compliance Calendar v1 | Master deadlines, client-specific calendar, status tracking, alerts |
| **M2-3** | Task Management v1 | Task CRUD, auto-generation from calendar, assignment, dashboard |
| **M3** | WhatsApp Integration v1 | Template messages, deadline reminders, document receipt |
| **M3** | Onboarding flow | Guided setup: firm profile, client import, calendar setup, WhatsApp connect |
| **M3** | Beta launch | Limited release to 50-100 firms for feedback |

### Key Milestones

| Milestone | Target Date | Success Criteria |
|---|---|---|
| Internal alpha (team testing) | End of M1 | Core document flow works end-to-end |
| Closed beta (20-30 firms) | Mid M2 | Real firms processing real documents |
| Open beta (100+ firms) | End of M2 | Self-service signup and onboarding |
| MVP launch | End of M3 | 200+ firms, documented onboarding flow |

### Metrics Targets (End of Phase 1)

| Metric | Target |
|---|---|
| Firms registered | 200+ |
| Active firms (weekly) | 100+ (50% activation) |
| Documents processed | 10,000+ |
| Document classification accuracy | 90%+ |
| NPS from beta users | 40+ |
| Critical bugs | Zero unresolved |

### Risks and Mitigations

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Document AI accuracy below target | Medium | High | Human-in-loop fallback; limit to highest-confidence doc types |
| WhatsApp Business API approval delay | Medium | Medium | Start application in Week 1; have email fallback ready |
| Scope creep from beta feedback | High | Medium | Strict P0-only scope; log all feedback for P1 prioritization |
| Engineering timeline slip | Medium | High | Buffer week built into M3; cut polish before cutting features |

---

## Phase 2: Growth (Month 3-6)

### Objective

Drive organic adoption through the wedge (document intelligence), convert free users to paid, and ship the features that enable monetization.

### Deliverables

| Month | Deliverable | Details |
|---|---|---|
| **M4** | Client Portal v1 | Branded portal, document requests, client-side upload |
| **M4** | Billing and Invoicing v1 | Fee management, invoice generation, payment tracking |
| **M4** | Expanded doc types | Add 6-8 more document types based on user demand |
| **M5** | Government Portal Integration v1 | ITR filing status auto-fetch (income tax portal) |
| **M5** | Team Management v1 | Roles, workload view, activity log |
| **M5** | Tally Integration v1 | Client data sync, basic data import from Tally |
| **M6** | GST Portal Integration v1 | GSTR filing status auto-fetch |
| **M6** | Paid tier launch | Professional and Business tier billing activated |
| **M6** | Mobile-responsive optimization | Full mobile web experience (not native app) |

### Key Milestones

| Milestone | Target Date | Success Criteria |
|---|---|---|
| Client portal live | End of M4 | 50+ firms with active client portals |
| First paid customer | Mid M4 | Revenue generated |
| Government portal v1 | End of M5 | ITR status fetch working for 80%+ of clients |
| 1,000 firms registered | End of M6 | Organic + referral growth |
| 100 paid firms | End of M6 | 10% free-to-paid conversion |

### Metrics Targets (End of Phase 2)

| Metric | Target |
|---|---|
| Firms registered | 1,000+ |
| Paid firms | 100+ |
| Monthly recurring revenue (MRR) | INR 50,000+ |
| Documents processed (cumulative) | 100,000+ |
| Free-to-paid conversion rate | 10-15% |
| Monthly churn (paid) | < 5% |
| Client portal adoption | 30%+ of paid firms |
| NPS | 45+ |

:::tip
Phase 2 is where the business model is validated. The target is not just 100 paid firms -- it is understanding why they pay, what features drive conversion, and what the expansion revenue potential looks like. Instrument every conversion event and cancellation reason.
:::

### Revenue Model Activation

| Tier | Price | Target Segment |
|---|---|---|
| Free | INR 0 | Solo CAs, evaluation users |
| Professional | INR 499/month | Solo and small firms with 15-50 clients |
| Business | INR 1,999/month | Mid firms with 50-200 clients |
| Enterprise | Custom | Large firms with 200+ clients |

---

## Phase 3: Differentiation (Month 6-12)

### Objective

Create competitive separation through advanced features that no competitor can match. Establish CAOS as the category leader for CA practice management.

### Deliverables

| Month | Deliverable | Details |
|---|---|---|
| **M7** | WhatsApp AI Chatbot v1 | FAQ auto-response, document submission via chat, ITR status queries |
| **M7** | Advanced Document Intelligence | Multi-page processing, cross-document validation, completeness scoring |
| **M8** | TDS Portal Integration | TDS return status, Form 16 verification |
| **M8** | DSC Management v1 | Certificate inventory, expiry alerts, signing workflow |
| **M9** | Analytics Dashboard v1 | Practice overview, client profitability, compliance scoreboard |
| **M9** | Referral program launch | In-product referral mechanics with incentives |
| **M10** | MCA Portal Integration | ROC filing status, company compliance tracking |
| **M10** | Hindi language support | WhatsApp chatbot + notifications in Hindi |
| **M11** | Template Marketplace v1 | Community-contributed workflow and document request templates |
| **M11** | Mobile app v1 (iOS + Android) | Native mobile app for on-the-go task and notification management |
| **M12** | Advanced billing | Recurring invoices, payment gateway integration, revenue forecasting |

### Key Milestones

| Milestone | Target Date | Success Criteria |
|---|---|---|
| AI chatbot live | End of M7 | 100+ firms using chatbot features |
| 3 government portals integrated | End of M10 | ITR + GST + TDS status fetch operational |
| Template marketplace live | End of M11 | 50+ community templates, 500+ downloads |
| 5,000 firms registered | End of M12 | Market leadership position |
| 500 paid firms | End of M12 | Sustainable revenue growth |

### Metrics Targets (End of Phase 3)

| Metric | Target |
|---|---|
| Firms registered | 5,000+ |
| Paid firms | 500+ |
| MRR | INR 500,000+ |
| Annual recurring revenue (ARR) | INR 60,00,000+ |
| Documents processed (cumulative) | 1,000,000+ |
| Government portal queries (monthly) | 50,000+ |
| WhatsApp chatbot interactions (monthly) | 20,000+ |
| Free-to-paid conversion | 12-18% |
| Monthly churn (paid) | < 3% |
| NPS | 50+ |

:::caution
Phase 3 is the competitive battleground. If a well-funded competitor enters the market, they will likely reach this phase within 12-18 months. CAOS must be firmly in Phase 3 by the time any competitor reaches Phase 2. Speed through Phases 1-2 is existential.
:::

---

## Phase 4: Platform (Month 12-24)

### Objective

Transform CAOS from a product into a platform. Build ecosystem features, enable third-party value creation, and establish long-term defensibility through data and network effects.

### Deliverables

| Month | Deliverable | Details |
|---|---|---|
| **M13-14** | Advisory Intelligence v1 | Client health scoring, compliance risk alerts, basic benchmarking |
| **M13-14** | API platform | Public API for third-party integrations |
| **M15-16** | GST Filing v1 | GSTR-1 preparation and filing from within CAOS |
| **M15-16** | Multi-branch support | Branch hierarchy, cross-branch visibility, consolidated reporting |
| **M17-18** | Template Marketplace v2 | Revenue sharing for template creators, premium templates |
| **M17-18** | Advanced analytics | Seasonal workload forecasting, revenue optimization, team performance |
| **M19-20** | ITR Filing assistance | Pre-filled ITR data from documents, guided filing workflow |
| **M19-20** | Partner ecosystem | Integration marketplace (banks, insurance, legal services) |
| **M21-22** | Data intelligence platform | Anonymized benchmarking, industry insights, predictive compliance |
| **M23-24** | Regional expansion prep | Multi-language support, CS/tax consultant workflows |

### Key Milestones

| Milestone | Target Date | Success Criteria |
|---|---|---|
| Public API live | End of M14 | 10+ third-party integrations |
| GST filing operational | End of M16 | 100+ firms filing through CAOS |
| Advisory intelligence live | End of M14 | 50+ firms using advisory features |
| 15,000 firms registered | End of M24 | Clear market leader |
| 2,000 paid firms | End of M24 | Sustainable, growing business |

### Metrics Targets (End of Phase 4)

| Metric | Target |
|---|---|
| Firms registered | 15,000+ |
| Paid firms | 2,000+ |
| MRR | INR 25,00,000+ |
| ARR | INR 3,00,00,000+ |
| Documents processed (cumulative) | 10,000,000+ |
| API calls (monthly) | 500,000+ |
| Template marketplace items | 500+ |
| Free-to-paid conversion | 15-20% |
| Monthly churn (paid) | < 2% |
| NPS | 55+ |

---

## Cross-Phase Metrics Dashboard

| Metric | Phase 1 | Phase 2 | Phase 3 | Phase 4 |
|---|---|---|---|---|
| **Firms registered** | 200 | 1,000 | 5,000 | 15,000 |
| **Paid firms** | 0 | 100 | 500 | 2,000 |
| **MRR** | 0 | 50K | 5L | 25L |
| **Documents processed** | 10K | 100K | 1M | 10M |
| **Doc classification accuracy** | 90% | 93% | 96% | 98% |
| **NPS** | 40 | 45 | 50 | 55 |
| **Monthly churn (paid)** | n/a | < 5% | < 3% | < 2% |
| **Team size** | 5-8 | 10-15 | 20-30 | 40-60 |

:::note
All MRR and ARR figures are in INR. "L" denotes lakh (100,000). Phase 4 ARR target of INR 3 crore represents a solid Series A trajectory for an India-focused B2B SaaS.
:::

---

## Roadmap Dependencies and Critical Path

### Hard Dependencies (Cannot Parallelize)

| Dependency | Blocks |
|---|---|
| WhatsApp Business API approval | All WhatsApp features |
| Document Intelligence v1 | Client auto-linking, smart filing |
| Client Management v1 | Client portal, billing, government portal integration |
| Compliance Calendar v1 | Auto-generated tasks |

### Soft Dependencies (Can Start in Parallel with Risk)

| Dependency | Can Start Early With Risk |
|---|---|
| Government portal integration | Can prototype before client management is complete |
| Billing module | Can build UI before payment gateway is integrated |
| Analytics | Can build dashboard structure before data accumulates |

### Critical Path

```
Week 1-4: Core Infrastructure + Document Intelligence
    |
Week 5-8: Client Management + Compliance Calendar (parallel)
    |
Week 9-10: Task Management + WhatsApp Integration (parallel)
    |
Week 11-12: Integration Testing + Beta Launch
    |
Month 4-6: Client Portal + Billing + Govt Portals (Growth features)
    |
Month 7-12: AI Chatbot + Advanced Docs + Analytics (Differentiation)
    |
Month 13-24: Advisory + API + GST Filing + Platform (Platform)
```

---

## Seasonal Considerations

The CA profession has extreme seasonality. The roadmap must account for peak periods.

| Period | Activity | Roadmap Implication |
|---|---|---|
| **Apr-Jun** | Year-end closing, audit season | High document volume; stress-test doc intelligence |
| **Jul-Sep** | ITR filing season (peak) | Maximum user engagement; no major releases, focus on stability |
| **Oct-Dec** | GST annual returns, advance tax | Moderate activity; good window for feature releases |
| **Jan-Mar** | Tax planning, statutory audit | Steady activity; ideal for onboarding new firms |

:::tip
The ITR filing season (July-September) is when CAs evaluate tools most seriously. Plan the MVP launch to be stable by June, so the product is battle-tested when CAs need it most. A launch that coincides with ITR season and fails under load is a catastrophic first impression.
:::

---

## Resource Allocation by Phase

| Phase | Engineering | Design | Product | GTM | Total |
|---|---|---|---|---|---|
| **Phase 1** | 4-5 | 1 | 1 | 0-1 | 6-8 |
| **Phase 2** | 6-8 | 1-2 | 1 | 2-3 | 10-14 |
| **Phase 3** | 10-15 | 2-3 | 2 | 5-8 | 19-28 |
| **Phase 4** | 15-25 | 3-5 | 3-4 | 10-15 | 31-49 |

---

## Summary

The CAOS roadmap follows a disciplined sequence: build the wedge (Phase 1), prove the business model (Phase 2), win the market (Phase 3), build the platform (Phase 4). Each phase builds on the previous one. Skipping phases or rushing through them creates fragile growth. The target is to reach Phase 3 faster than any competitor can reach Phase 2 -- speed through the early phases is the most important strategic lever.
