---
title: Unit Economics
description: CAOS customer acquisition cost by channel, lifetime value calculation, LTV/CAC ratios, and break-even analysis for the CA practice management market.
---

## Unit Economics Summary

| Metric | Value | Notes |
|---|---|---|
| **Blended CAC** | INR 2,000-4,000 | Varies by channel and phase |
| **ARPU (monthly)** | INR 800-1,200 | Blended across paid tiers |
| **ARPU (annual)** | INR 10,000-15,000 | After annual discount |
| **Gross margin** | 75-85% | Infrastructure + API costs are primary COGS |
| **Monthly churn** | 2-4% (early), 1.5-2.5% (mature) | Target < 2% at scale |
| **Customer lifetime** | 4-6 years | Based on churn and firm lifecycle |
| **LTV** | INR 45,000-75,000 | Per paid firm |
| **LTV/CAC ratio** | 6-15x | Healthy across all channels |

:::note
These unit economics are modeled, not proven. Actual numbers will emerge from Phase 2 (first paid customers). The model uses conservative assumptions for CAC and churn, and moderate assumptions for ARPU and lifetime. All figures should be treated as targets to validate.
:::

---

## Customer Acquisition Cost (CAC) by Channel

### Channel-Level CAC Breakdown

| Channel | CAC Range | Typical CAC | Volume Potential | Quality |
|---|---|---|---|---|
| **Referral (CA-to-CA)** | INR 500-1,500 | INR 1,000 | Medium-High | Very High |
| **ICAI branch events** | INR 1,000-3,000 | INR 2,000 | Medium | High |
| **YouTube influencers** | INR 1,500-4,000 | INR 2,500 | High | Medium-High |
| **Google Ads (search)** | INR 2,000-5,000 | INR 3,500 | High | Medium |
| **LinkedIn Ads** | INR 3,000-6,000 | INR 4,500 | Medium | Medium-High |
| **WhatsApp group seeding** | INR 500-2,000 | INR 1,000 | Medium | Medium |
| **CA community portals** | INR 1,000-3,000 | INR 2,000 | Low-Medium | High |
| **Direct sales (outbound)** | INR 5,000-15,000 | INR 8,000 | Low | Very High (Enterprise) |
| **Content/SEO (inbound)** | INR 800-2,000 | INR 1,200 | High (long-term) | Medium-High |

### CAC Calculation Methodology

```
CAC = Total Channel Spend / Paid Customers Acquired Through Channel

Total Channel Spend includes:
  - Direct ad spend or sponsorship cost
  - Content creation cost (amortized)
  - Sales team cost (allocated by time)
  - Referral incentive payouts
  - Event participation costs (booth, travel, materials)
```

### CAC by Firm Segment

| Segment | Primary Channels | Blended CAC | Rationale |
|---|---|---|---|
| Solo CA | Referral, WhatsApp seeding, YouTube | INR 1,000-2,000 | Low touch, high volume |
| Small firm | ICAI events, Google Ads, referral | INR 2,000-4,000 | Medium touch |
| Mid firm | LinkedIn, direct sales, ICAI events | INR 4,000-8,000 | Higher touch, longer cycle |
| Large firm | Direct sales, events | INR 8,000-15,000 | Enterprise sales motion |

:::tip
Referral is the lowest-CAC and highest-quality channel. Every unit of investment in making the product referral-worthy (remarkable experience, visible ROI, easy sharing) pays dividends across all segments. Budget 30-40% of GTM spend on referral incentives and mechanics.
:::

---

## Lifetime Value (LTV) Calculation

### Core LTV Formula

```
LTV = ARPU (monthly) x Gross Margin x Customer Lifetime (months)

Where:
  Customer Lifetime = 1 / Monthly Churn Rate
```

### LTV by Scenario

| Scenario | ARPU (Monthly) | Gross Margin | Monthly Churn | Lifetime (Months) | LTV |
|---|---|---|---|---|---|
| **Conservative** | INR 800 | 75% | 4% | 25 | INR 15,000 |
| **Base case** | INR 1,000 | 80% | 2.5% | 40 | INR 32,000 |
| **Moderate** | INR 1,200 | 80% | 2% | 50 | INR 48,000 |
| **Optimistic** | INR 1,500 | 85% | 1.5% | 67 | INR 85,000 |
| **Target (Y3+)** | INR 1,200 | 82% | 2% | 50 | INR 49,200 |

### LTV with Expansion Revenue

The base LTV formula assumes static ARPU. In practice, ARPU grows over a customer's lifetime through tier upgrades and add-ons.

| Period | Base ARPU | Expansion | Effective ARPU | Cumulative Revenue |
|---|---|---|---|---|
| Month 1-6 | INR 0 (free) | -- | INR 0 | INR 0 |
| Month 7-12 | INR 499 | -- | INR 499 | INR 2,994 |
| Month 13-24 | INR 499 | +INR 149 (extra user) | INR 648 | INR 10,770 |
| Month 25-36 | INR 1,999 (upgrade) | +INR 298 (2 extra users) | INR 2,297 | INR 38,334 |
| Month 37-48 | INR 1,999 | +INR 500 (add-ons) | INR 2,499 | INR 68,322 |

**Expansion-adjusted LTV for a growing small firm:** INR 68,000+ over 4 years.

:::note
Expansion revenue is the most important lever for LTV. A 20% net revenue retention (NRR > 120%) means existing customers generate more revenue each year even without new acquisition. Target NRR of 115-125% by Year 2.
:::

---

## LTV/CAC Ratio Analysis

### By Channel

| Channel | CAC | LTV (Base) | LTV/CAC | Assessment |
|---|---|---|---|---|
| Referral | INR 1,000 | INR 48,000 | 48x | Excellent -- maximize |
| WhatsApp seeding | INR 1,000 | INR 32,000 | 32x | Excellent -- scale carefully |
| Content/SEO | INR 1,200 | INR 48,000 | 40x | Excellent -- long-term investment |
| ICAI events | INR 2,000 | INR 48,000 | 24x | Strong -- sustain |
| CA community portals | INR 2,000 | INR 48,000 | 24x | Strong -- sustain |
| YouTube influencers | INR 2,500 | INR 32,000 | 13x | Good -- optimize |
| Google Ads | INR 3,500 | INR 32,000 | 9x | Acceptable -- optimize targeting |
| LinkedIn Ads | INR 4,500 | INR 48,000 | 11x | Good -- for mid/large firms |
| Direct sales | INR 8,000 | INR 85,000 | 11x | Good -- enterprise only |

### By Segment

| Segment | Blended CAC | LTV | LTV/CAC | Payback Period |
|---|---|---|---|---|
| Solo CA | INR 1,500 | INR 15,000-32,000 | 10-21x | 3-5 months |
| Small firm | INR 3,000 | INR 32,000-48,000 | 11-16x | 4-6 months |
| Mid firm | INR 6,000 | INR 48,000-85,000 | 8-14x | 3-5 months |
| Large firm | INR 12,000 | INR 85,000+ | 7-10x | 3-4 months |
| **Blended** | **INR 3,000** | **INR 48,000** | **16x** | **4 months** |

:::tip
A blended LTV/CAC of 16x with a 4-month payback period is exceptional for B2B SaaS. Standard benchmarks consider 3x LTV/CAC healthy and 5x excellent. The key driver is low CAC from community and referral channels combined with strong retention in a professional services market where firms rarely switch tools once embedded.
:::

---

## Gross Margin Analysis

### COGS Breakdown (Per Firm Per Month)

| Cost Component | Estimated Cost | Notes |
|---|---|---|
| Cloud infrastructure (compute, storage) | INR 30-50 | Scales with usage |
| Document AI processing (OCR + ML) | INR 40-80 | Per-document cost amortized |
| WhatsApp Business API messages | INR 20-60 | Per-message cost x volume |
| Government portal integration (compute) | INR 10-30 | Scraping and automation costs |
| Payment gateway fees | INR 15-30 | 2-3% of subscription revenue |
| Support (allocated) | INR 20-50 | Scales with tier |
| **Total COGS per firm** | **INR 135-300** | -- |

### Gross Margin by Tier

| Tier | Revenue (Monthly) | COGS (Monthly) | Gross Margin |
|---|---|---|---|
| Free | INR 0 | INR 50-80 | Negative (investment) |
| Professional | INR 499 | INR 100-150 | 70-80% |
| Business | INR 1,999 | INR 200-350 | 82-90% |
| Enterprise | INR 5,000+ | INR 300-500 | 90-94% |
| **Blended (paid only)** | **INR 1,000** | **INR 175** | **82%** |

:::caution
Free tier firms cost INR 50-80/month to serve with zero revenue. At 1,000 free firms, this is INR 50,000-80,000/month. This is the cost of acquisition and must be budgeted as marketing expense, not COGS. Monitor the free-to-paid conversion rate obsessively -- if it drops below 8%, the free tier economics become unsustainable.
:::

---

## Churn Analysis

### Expected Churn by Segment

| Segment | Monthly Churn (Y1) | Monthly Churn (Y2) | Monthly Churn (Mature) | Primary Churn Reason |
|---|---|---|---|---|
| Solo CA (free) | 8-12% | 6-8% | 5-7% | Did not adopt / tool not needed |
| Solo CA (paid) | 4-6% | 3-4% | 2-3% | Price sensitivity |
| Small firm (paid) | 3-5% | 2-3% | 1.5-2% | Feature gaps / competitor switch |
| Mid firm (paid) | 2-3% | 1.5-2% | 1-1.5% | Team resistance / admin change |
| Large firm (paid) | 1-2% | 1-1.5% | < 1% | Rare -- high switching cost |

### Churn Reduction Levers

| Lever | Impact | Implementation |
|---|---|---|
| Onboarding quality | HIGH | Guided setup, first-week milestones, check-in messages |
| Document data lock-in | HIGH | More documents = higher switching cost |
| WhatsApp history | MEDIUM-HIGH | Communication records cannot be exported |
| Compliance calendar usage | MEDIUM | Firm depends on CAOS for deadline tracking |
| Team workflow embedding | HIGH | Multiple users = collective switching cost |
| Annual billing | MEDIUM | 40% discount for annual commitment |

---

## Break-Even Analysis

### Firm-Level Break-Even

| Tier | Monthly Revenue | Monthly COGS | Monthly Contribution | Months to Recover CAC |
|---|---|---|---|---|
| Professional | INR 499 | INR 125 | INR 374 | 5-8 months (CAC INR 2,000-3,000) |
| Business | INR 1,999 | INR 275 | INR 1,724 | 2-4 months (CAC INR 4,000-6,000) |
| Enterprise | INR 5,000+ | INR 400 | INR 4,600+ | 2-3 months (CAC INR 10,000) |

### Company-Level Break-Even

| Scenario | Monthly Burn | Revenue to Break Even | Firms Needed (at blended ARPU) | Timeline |
|---|---|---|---|---|
| Lean (5-8 people) | INR 8-12L | INR 10L MRR | 1,000 paid firms | Month 14-18 |
| Moderate (15-20 people) | INR 20-30L | INR 25L MRR | 2,500 paid firms | Month 18-24 |
| Scaled (30+ people) | INR 40-60L | INR 50L MRR | 5,000 paid firms | Month 24-30 |

:::note
Company-level break-even assumes no external funding subsidizing operations. With seed or Series A funding, the break-even timeline is less critical than growth rate and unit economics health. Investors want to see: (1) LTV/CAC > 5x, (2) payback period < 12 months, (3) improving churn. All three are achievable within Year 2.
:::

---

## Sensitivity Analysis

### Impact of Key Variables on LTV

| Variable | Base Case | -20% Scenario | +20% Scenario | LTV Impact |
|---|---|---|---|---|
| ARPU | INR 1,000/mo | INR 800/mo | INR 1,200/mo | +/- 20% |
| Gross margin | 80% | 64% | 96% | +/- 20% |
| Monthly churn | 2.5% | 3% | 2% | -17% / +25% |
| Customer lifetime | 40 months | 33 months | 50 months | -17% / +25% |

**Most sensitive variable:** Monthly churn. A 0.5% improvement in monthly churn (from 2.5% to 2%) increases LTV by 25%. Churn reduction is the highest-ROI investment in the business model.

### Impact of Key Variables on Payback Period

| Variable | Base Case | Pessimistic | Optimistic |
|---|---|---|---|
| Blended CAC | INR 3,000 | INR 5,000 | INR 2,000 |
| Monthly contribution | INR 800 | INR 600 | INR 1,000 |
| **Payback period** | **3.75 months** | **8.3 months** | **2 months** |

Even in the pessimistic scenario, the payback period is well under 12 months -- the standard B2B SaaS benchmark.

---

## Key Unit Economics Targets by Phase

| Phase | Target CAC | Target ARPU | Target Churn | Target LTV/CAC |
|---|---|---|---|---|
| Phase 1 (M1-3) | n/a (free users) | n/a | Track activation | n/a |
| Phase 2 (M3-6) | INR 3,000-5,000 | INR 600-800 | < 5% monthly | > 5x |
| Phase 3 (M6-12) | INR 2,500-4,000 | INR 800-1,200 | < 3% monthly | > 10x |
| Phase 4 (M12-24) | INR 2,000-3,500 | INR 1,000-1,500 | < 2% monthly | > 15x |

---

## Summary

CAOS unit economics are strong by B2B SaaS standards. The combination of low CAC (community-driven acquisition), healthy ARPU (tiered pricing with expansion revenue), high gross margins (75-85%), and low churn (professional services stickiness) produces LTV/CAC ratios of 6-15x with payback periods under 6 months. The most important lever is churn reduction -- every 0.5% improvement in monthly churn translates to a 20-25% increase in LTV. The business reaches firm-level contribution margin positive from month 1 of a paid subscription and company-level break-even between month 14 and 24 depending on team size and growth investment.
