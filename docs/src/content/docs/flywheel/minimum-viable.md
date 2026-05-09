---
title: "The minimum viable flywheel"
description: "Smallest stakeholder set + actions that prove the loop. 1 CA firm × 20 clients × 5 vendors each = 100 vendors invited × 30% acceptance = 30 verified vendor nodes."
sidebar:
  order: 7
---

Before scaling the [composite four-phase plan](/caos/flywheel/composite/) to 1,000 firms and 50,000 entities, the loop must be proven at the smallest possible stakeholder scale. The minimum viable flywheel (MVF) is the test that proves Phase 1's atomic primitives work and Phase 2's network effect is actually triggerable. If the MVF runs cleanly across 5 CA firms in 90 days, the rest of the plan becomes a function of CA-acquisition velocity. If it fails, no amount of capital or sales motion fixes it.

## The MVF in 6 steps

### Step 1 — One CA firm signs up with 20 client entities

A single CA firm — ideally a 2-5 partner firm with 100-300 clients on its books — agrees to participate. The firm selects **20 of its most active clients** for the pilot. "Most active" here means clients who already file at least monthly (GSTR-3B) or quarterly (TDS, advance tax) — i.e., clients where the document-flow cadence is high enough to expose CAOS to repeat usage.

### Step 2 — The CA invites all 20 clients to upload core documents

The CA sends an in-app invitation (with email + WhatsApp fallback) to each client, asking for four document categories per client:

- **Form 26AS** (the consolidated tax credit statement from the Income Tax department)
- **GSTR-2B** (the auto-populated input tax credit statement from GSTN)
- **Bank statement** (current account, last 3 months — uploadable as PDF or AA-flowing where the client is comfortable)
- **Top-10 vendor invoices** (any format — PDF, scan, image)

The 4-document × 20-client request creates **80 data-pull events** that test the full P1 (ingest) → P2 (classify) → P9 (post) primitive chain.

### Step 3 — CAOS classifies, extracts, and proposes Tally vouchers

For each upload, CAOS:

- **Classifies** the document type (P2 primitive)
- **Extracts** structured data (counterparty PAN/GSTIN, invoice number, taxable value, tax breakup, dates)
- **Validates** the GSTIN against GSTN, the PAN against CBDT, the MSME status against Udyam
- **Proposes** a Tally voucher (or Zoho Books / SAP / custom-ERP voucher) for the CA to review
- **Pushes** the voucher to the destination ERP after CA approval (P9 primitive)

The CA reviews and approves. Each approval = one closed primitive cycle. Across 20 clients × ~10 docs each = ~200 closed cycles in the first 30 days.

### Step 4 — Each of the 20 clients invites their top 5 vendors

After the CA's reconciliation work is done, CAOS presents each client with a one-click "invite your top 5 vendors to verify themselves" prompt. The vendor invitation is calibrated to be **sub-30-second**:

- Tap link in WhatsApp / email
- Confirm GSTIN (auto-validated)
- Confirm PAN (auto-validated)
- Confirm MSME status (Udyam check)
- Done

20 clients × 5 vendors = **100 vendors invited** in the first 60 days.

### Step 5 — Vendors accept and become CAOS graph nodes

Calibrated against [AA's 78.6% YoY consent growth](https://www.business-standard.com/finance/news/aa-ecosystem-consent-processing-up-78-in-fy25-shows-sahamati-data-125031301053_1.html), the MVF assumes **30% vendor acceptance** in 90 days (lower than AA's 78.6% because AA acceptance is tied to immediate credit benefit; first-pass vendor invitation has a softer benefit). This produces:

- 100 vendors invited
- **30 vendors accept and validate** their GSTIN + PAN + MSME status
- 30 vendors are now CAOS graph nodes
- 30 vendors are visible to any other CAOS enterprise that pays them

The first network edges of the [Phase 2 vendor-network fact graph](/caos/flywheel/phase-2-vendor-network/) are now live.

### Step 6 — At least one vendor converts to paid

Within 90 days, the MVF expects:

- 5 of those 30 vendors hit a **"your enterprise customer is also using CAOS" trigger** — i.e., they discover that another customer they bill is on the platform
- **1 of those 5 upgrades to a paid CAOS account** for their own books (₹3-10K/month vendor-tier ARPU)

One paid conversion in 90 days from a 1-firm × 20-client pilot is the minimum signal that the network-effect premise holds. If 0 vendors convert across 5 pilot firms (i.e., 0 of 150 vendors invited produce a paid conversion in 90 days), the network-effect assumption is wrong and the [composite plan](/caos/flywheel/composite/) needs revision.

## The 4 measurement criteria

The MVF's success is measured against four binary criteria. **Three of four positive across 5 pilot firms is the threshold for proceeding to scale.** Two of four positive triggers a 90-day re-run with adjusted parameters. One of four positive triggers a Phase-1 product reset.

| # | Criterion | Test | Pass threshold |
|---|---|---|---|
| 1 | **Did the CA spend less time on Tally entry?** | Self-reported time per voucher; CAOS-tracked turnaround time per primitive cycle | At least 40% reduction vs baseline (P1 + P9 working as designed) |
| 2 | **Did clients respond to portal request?** | % of clients who completed at least one upload in 30 days | At least 60% (P4, P10 working) |
| 3 | **Did vendors accept invitation and validate GSTIN?** | % of invited vendors who completed validation in 60 days | At least 25% (P2, P10 working at network edge) |
| 4 | **Did at least 1 vendor convert to paid?** | Count of vendors who paid at least one month of subscription within 90 days | At least 1 across the 5 pilot firms (network-effect ignition signal) |

The four criteria map to the four atomic primitive pairs that the composite flywheel relies on:

- **P1 + P9** (ingest + post) — criterion #1 (CA time saving)
- **P4 + P10** (reconcile + confirm) — criterion #2 (client portal usage)
- **P2 + P10** (classify + confirm at network edge) — criterion #3 (vendor validation)
- **All primitives compounding** — criterion #4 (network-effect ignition)

If all four primitive pairs work, the [composite four-phase plan](/caos/flywheel/composite/) has a clean architectural path to scale. If even one pair fails, the plan needs revision at the architectural layer, not the sales layer.

## What "ignition" looks like

If the MVF passes all four criteria across 5 CA firms in 90 days, the platform is ready for ignition. Ignition has three observable signatures:

### Signature 1 — Compounding network density

By Day 90, the second cohort of CA firms onboarded sees a higher vendor overlap rate than the first cohort (because the first cohort's vendors are already in the graph). This is the first measurable network effect.

| Cohort | Vendors invited | Already in graph (overlap) | Overlap rate |
|---|---|---|---|
| First 5 firms (Day 1-30) | 100 | 0 | 0% |
| Next 5 firms (Day 31-60) | 100 | ~5-10 | 5-10% |
| Next 5 firms (Day 61-90) | 100 | ~15-25 | 15-25% |

A monotonically rising overlap rate is the cleanest possible quantitative confirmation that the network effect is real.

### Signature 2 — Inbound CA acquisition

By Day 60, at least one CA firm onboards **without being directly recruited** — i.e., they signed up because a peer told them, or because a client of theirs is already on the platform and asked them to join. This is the first organic-channel signal. File 12's "60-70% software adoption via peer recommendation" claim is qualitative (and unverified), but a single inbound CA signup is the MVF-stage observable equivalent.

### Signature 3 — At least one vendor-to-paid conversion

The fourth measurement criterion is the most expensive to achieve at MVF scale, but it is the single signal that most directly predicts the [Phase 2 → Phase 3 transition](/caos/flywheel/composite/). One paid vendor in 90 days from a 5-firm × 20-client × 5-vendor cohort is a 0.7% conversion rate — within tolerance for a 90-day-old network with no marketing spend.

## What MVF failure looks like

The MVF is also designed to fail cleanly. Each failure mode points to a specific architectural revision:

| Failure mode | What it suggests | Architectural response |
|---|---|---|
| <40% CA time saving | P1 ingest or P9 post are not actually less work than the CA's status quo | Re-evaluate the OCR / extraction / mapping accuracy; consider a Tally Connector deep-rewrite |
| <60% client portal response | The client-side UX is too high-friction, or the CA didn't actually push the invitation hard enough | A/B test WhatsApp-first vs email-first flow; add a CA-side "your client hasn't responded; nudge them" surface |
| <25% vendor acceptance | Vendor-side invitation is unclear or insufficiently incentivised | Add a value proposition to the vendor-side flow (e.g., "you've been validated; show this to your other customers"); add WhatsApp Cloud API |
| 0 paid conversions in 90 days | Network effect premise is broken at MVF scale OR pricing is wrong for vendor tier | Revisit pricing band; revisit the cross-customer trigger; consider extending the test to 180 days |

A clean MVF failure is not a project termination — it is a re-architecture trigger. The principle: the MVF should fail in ways that point unambiguously to the next architectural change, not in ways that require interpretation.

## Cross-references

- The composite plan that the MVF tests is at [/caos/flywheel/composite/](/caos/flywheel/composite/).
- The Phase 1 → 2 → 3 → 4 transition triggers (which scale up from MVF criteria) are at [/caos/flywheel/composite/](/caos/flywheel/composite/).
- The 15-primitive lattice (P1 ingest, P2 classify, P4 reconcile, P9 post, P10 confirm) is at [/caos/product/](/caos/product/).
- The verified-anchor sizing math is at [/caos/flywheel/sizing-math/](/caos/flywheel/sizing-math/).
