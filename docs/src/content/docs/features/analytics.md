---
title: Analytics & Reporting
description: CAOS practice health dashboard with revenue analysis, staff utilization, compliance status, client profitability, billable hours, and practice metrics.
---

Most CA firms operate on intuition -- "we feel busy, so we must be profitable." CAOS analytics replaces gut feeling with data-driven insights across revenue, clients, staff, compliance, and practice health.

## Practice Health Dashboard

The single-screen view of how the firm is performing.

| Metric | What It Shows | Healthy Range |
|---|---|---|
| **Revenue this month** | Total billed and collected amounts | Trending upward MoM |
| **Collection rate** | % of billed amount collected | >85% |
| **Outstanding receivables** | Total unpaid invoices with aging | <15% of annual revenue |
| **Compliance on-time rate** | % of filings completed before deadline | >95% |
| **Team utilization** | Average staff capacity used | 70-85% |
| **Active clients** | Clients with at least one active task | Stable or growing |
| **Overdue tasks** | Tasks past their deadline | <5% of total tasks |
| **Client health average** | Mean client health score across portfolio | >70 |

:::note[Dashboard Refresh]
The practice health dashboard updates in real-time. Revenue and collection figures refresh when payments are recorded. Task and compliance metrics update when task statuses change. No manual report generation needed.
:::

## Revenue Analytics

### Revenue by Client

| Report | Description | Business Question |
|---|---|---|
| **Top clients** | Ranked list by annual billing | "Who are my most valuable clients?" |
| **Revenue concentration** | % of revenue from top 10/20% clients | "How dependent am I on a few clients?" |
| **Client-wise collection** | Billing vs. collection per client | "Who pays on time? Who doesn't?" |
| **New client revenue** | Revenue from clients added this year | "Is new business growing?" |
| **Lost client impact** | Revenue lost from churned clients | "How much did we lose this year?" |

### Revenue by Service

| Report | Description | Business Question |
|---|---|---|
| **Service ranking** | Revenue per service type | "Which services generate the most revenue?" |
| **Service mix** | % distribution across service types | "Am I over-reliant on ITR filing?" |
| **Service profitability** | Revenue minus estimated cost per service | "Which services are most profitable?" |
| **Cross-sell gaps** | Clients not using services they should | "Who should I offer audit services to?" |

### Revenue by Period

| Report | Description | Business Question |
|---|---|---|
| **Monthly trend** | MoM revenue for the current year | "Is revenue growing steadily?" |
| **Quarterly comparison** | This quarter vs. same quarter last year | "Are we growing YoY?" |
| **Seasonal analysis** | Revenue patterns by month (ITR season peaks) | "When should I hire temp staff?" |
| **YoY growth** | Annual revenue growth trajectory | "What's my compound growth rate?" |

### Revenue per Employee

| Metric | Calculation | Benchmark |
|---|---|---|
| **Billing per staff** | Total firm billing / number of staff | Rs 5-10L per staff/year for small firms |
| **Collection per staff** | Total collection / number of staff | Track alongside billing |
| **Revenue per partner** | Total revenue / number of partners | Growth indicator |

## Client Profitability

The most powerful report for practice optimization.

### Profitability Score

Each client gets a composite profitability score based on:

| Factor | Weight | Measurement |
|---|---|---|
| **Revenue** | 30% | Annual billing from this client |
| **Time invested** | 25% | Total hours logged against this client |
| **Effective hourly rate** | 20% | Revenue / hours invested |
| **Payment behavior** | 15% | Average days to pay, outstanding history |
| **Support load** | 10% | WhatsApp messages, calls, ad-hoc requests |

### Profitability Matrix

```
             High Revenue
                  │
    ★ Stars       │    ⚠ Demanding
    (Keep, grow)  │    (Raise fees)
                  │
    ──────────────┼───────────────
                  │
    ? Questions   │    ✕ Drains
    (Develop)     │    (Exit or reprice)
                  │
             Low Revenue
                  │
     Low Effort ──┼── High Effort
```

:::tip[Fee Revision Conversations]
The profitability report gives CAs data to support fee revision conversations. Instead of "I need to increase fees," the conversation becomes "Your engagement required 120 hours this year vs. 80 last year, and here is why our fees need to reflect that."
:::

## Staff Utilization

### Utilization Dashboard

| Metric | Calculation | Target |
|---|---|---|
| **Utilization rate** | Billable hours / available hours | 70-85% |
| **Task completion rate** | Tasks completed / tasks assigned | >90% |
| **On-time rate** | Tasks completed before deadline | >95% |
| **Average task time** | Hours per task type | Benchmarked per service |
| **Rework rate** | Tasks sent back from review / total tasks | <10% |

### Staff Performance Comparison

| Staff Member | Tasks | On-Time % | Avg Hours/Task | Utilization |
|---|---|---|---|---|
| Amit | 45 | 96% | 4.2h | 82% |
| Priya | 52 | 91% | 3.8h | 78% |
| Neha | 38 | 100% | 5.1h | 75% |
| Rajesh (intern) | 28 | 85% | 6.3h | 68% |

### Workload Distribution

Visual workload heatmap showing:
- Current task count per staff member
- Upcoming deadlines per staff member
- Capacity availability for new assignments
- Overloaded staff who need task redistribution

## Compliance Performance

### On-Time Filing Rate

| Compliance Type | Filed | On-Time | Late | On-Time % |
|---|---|---|---|---|
| GSTR-3B | 245 | 238 | 7 | 97.1% |
| GSTR-1 | 245 | 240 | 5 | 98.0% |
| ITR (Individual) | 180 | 165 | 15 | 91.7% |
| ITR (Company) | 35 | 34 | 1 | 97.1% |
| TDS Returns | 80 | 78 | 2 | 97.5% |
| ROC (Annual) | 40 | 40 | 0 | 100% |

### Late Filing Analysis

| Reason | Count | % of Late Filings | Fix |
|---|---|---|---|
| Client documents delayed | 15 | 50% | Earlier document reminders |
| Staff overload | 8 | 27% | Better workload distribution |
| Complex issues | 5 | 17% | Earlier start on complex clients |
| System/portal issues | 2 | 7% | Backup filing windows |

### Compliance Trend

Track improvement or degradation over time:
- Monthly on-time filing rate trend
- Quarter-over-quarter comparison
- Best and worst months identified
- Correlation with staff changes, client additions

## Practice Health Score

A composite score (0-100) that summarizes overall practice performance.

| Component | Weight | Score Driver |
|---|---|---|
| Revenue growth | 20% | MoM and YoY revenue trend |
| Collection efficiency | 20% | % collected within 30 days |
| Compliance on-time rate | 20% | % filed before deadline |
| Staff utilization | 15% | Average team utilization rate |
| Client satisfaction | 15% | Portal usage, payment behavior, health scores |
| Operational efficiency | 10% | Automation rate, rework rate |

Score interpretation:
- **80-100:** Excellent -- practice is healthy and growing
- **60-79:** Good -- some areas need attention
- **40-59:** Needs improvement -- multiple areas underperforming
- **Below 40:** Critical -- urgent action required

## Export & Scheduling

| Feature | Description |
|---|---|
| **Excel export** | All reports exportable to .xlsx |
| **PDF export** | Print-ready reports for partner meetings |
| **Scheduled delivery** | Auto-email reports on daily/weekly/monthly schedule |
| **Partner dashboard** | Read-only dashboard access for partners |
| **Custom date ranges** | Flexible date range selection for all reports |
| **Comparison mode** | Side-by-side period comparison |

## Competitive Comparison

| Feature | CAOS | SimplifyPractice | QwikCA | Karbon (benchmark) | Others |
|---|---|---|---|---|---|
| Practice health score | Yes | No | No | Yes | No |
| Client profitability | Yes | No | No | Yes | No |
| Staff utilization | Yes | Basic | Basic | Advanced | No |
| Revenue analytics | Advanced | Basic | Basic | Advanced | Basic |
| Compliance performance | Yes | No | No | N/A (no India compliance) | No |
| Automated reports | Yes | No | No | Yes | No |
| Profitability matrix | Yes | No | No | Partial | No |
| Workload heatmap | Yes | No | No | Yes | No |

:::note[Advisory Intelligence (Future)]
In the platform phase (Month 12-24), CAOS will add advisory intelligence -- using compliance data to generate client-facing insights: tax planning suggestions from ITR data, working capital insights from GST data, business health alerts from financial statements. This transforms CAOS from a practice management tool into a practice growth engine.
:::
