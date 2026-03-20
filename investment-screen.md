---
name: investment-screen
description: >
  Apply the SQGLP + 100-Bagger composite investment framework to evaluate, score, and rank any US-listed stock or watchlist.
  Use this skill whenever the user wants to: evaluate a stock, screen for multibaggers, rank their watchlist, score a company
  against QGLP criteria, check if a stock fits their framework, add a new stock to their ranking, build an investment thesis
  with a scorecard, ask "how does X rank?", "does Y fit my framework?", "evaluate Z", "add ABC to my list", or any request
  to analyze or compare stocks through a structured lens. Also trigger when the user asks about AI tailwinds/headwinds for
  a company, pure SaaS risk, owner-operator quality, or whether valuation is attractive. This is the user's personal
  investment framework — use it proactively whenever stocks are being discussed.
---

# Investment Screen: SQGLP + 100-Bagger Composite Framework

This skill applies the user's personal composite investment framework to evaluate US-listed stocks as potential multibagger investments. The framework combines:
- **SQGLP** (Motilal Oswal BRST/QGLP): Systematic 50-point quality/growth/longevity filter
- **100-Bagger Add-On** (Chris Mayer): Owner-operator, twin engine, ROIC quality — 30 additional points
- **AI Signal Classification**: Is AI a tailwind, headwind, or is AI the product?
- **Valuation Attractiveness**: PSG ratio, EV/NTM Rev, FCF yield

The composite score is out of **90 points** (SQGLP/50 + OO/10 + TE/10 + RQ/10 + Glassdoor/10).

---

## Part 1 — SQGLP Scoring (50 points)

Score each of the five dimensions 0–10. Use current data: look up revenue, growth rates, margins, market cap, and guidance.

### S — Size (0–10): How early are we in the journey?

The ideal multibagger is still small enough to 10–100x. A company already at $100B+ has less room to run.

| Market Cap | Score |
|---|---|
| < $1B (micro-cap) | 9–10 |
| $1B–$5B (small-cap) | 7–8 |
| $5B–$20B (mid-cap) | 5–6 |
| $20B–$50B (large emerging) | 3–4 |
| $50B–$100B | 1–2 |
| > $100B | 0–1 |

**Important**: Score S dynamically — a company that surges from $5B to $20B between evaluations loses S score points. This is a built-in discipline against chasing momentum.

---

### Q — Quality (0–10): Is the business durable and defensible?

Quality is the moat score. Look for: network effects, switching costs, data flywheel, brand, regulatory moat, proprietary technology. Also evaluate gross margin profile and capital efficiency.

| Signal | Points |
|---|---|
| Gross margin ≥ 70% | +2 |
| Clear, defensible moat (network effect, switching cost, data flywheel) | +2–3 |
| NRR (net revenue retention) > 120% or equivalent retention signal | +1–2 |
| Founder-led or founder-ethos management | +1 |
| No viable substitute product exists | +1 |
| Capital-light, high ROIC potential | +1 |

Deduct 1–3 points for: undifferentiated product, commodity pricing pressure, easy-to-replicate technology, heavy capex.

---

### G — Growth (0–10): Is growth fast, durable, and compounding?

Focus on **revenue growth** primarily. Also consider whether growth is accelerating or decelerating.

| Revenue Growth (YoY) | Score |
|---|---|
| > 40% | 9–10 |
| 30–40% | 7–8 |
| 20–30% | 5–6 |
| 15–20% | 3–4 |
| 10–15% | 1–2 |
| < 10% | 0–1 |

Boost score by 1 if: growth is accelerating, TAM is still <10% penetrated, or company just entered international expansion.
Reduce score by 1 if: growth is decelerating more than 5pp year-over-year, or revenue quality is poor (lots of professional services).

---

### L — Longevity (0–10): Can this growth last 5–10 years?

Longevity is the TAM × durability score. A company in a massive, secular, structurally growing market with a durable competitive position scores high.

Evaluate:
- **TAM size**: Is there a credible path to 5–10x current revenue?
- **Secular tailwind**: Is the industry growing on its own (cloud migration, AI adoption, digitization)?
- **Competitive stability**: Are incumbents weak? Is the company taking share from a fragmented market?
- **Customer concentration**: Heavy reliance on 1–2 customers reduces longevity

| Signal | Points |
|---|---|
| TAM > $50B, less than 5% penetrated | +3 |
| Clear secular tailwind (AI, cloud, digitization, healthcare digitization) | +2 |
| Low customer concentration (no single customer >10%) | +1 |
| Recurring/subscription revenue model | +1 |
| Platform business (expands within customers over time) | +2 |
| International expansion runway | +1 |

---

### P — Price (0–10): Is the valuation reasonable for the quality on offer?

Use **PSG ratio** as the primary valuation signal. PSG = EV/NTM Revenue ÷ NTM Revenue Growth %. A lower PSG means you're paying less for each unit of growth.

**PSG Thresholds:**
| PSG | Interpretation | P Score |
|---|---|---|
| < 0.10 | Extremely cheap — potential value trap or genuine opportunity | 9–10 |
| 0.10–0.15 | Very attractive | 8–9 |
| 0.15–0.25 | Attractive | 6–7 |
| 0.25–0.35 | Fair value | 4–5 |
| 0.35–0.50 | Slightly expensive | 2–3 |
| 0.50–0.75 | Expensive | 1–2 |
| > 0.75 | Very expensive | 0–1 |

Also note: **EV/NTM Revenue** as context (typical SaaS: 5–15x = fair; >20x = expensive; <5x = potentially cheap or declining). **FCF Yield** > 3% is a positive signal.

---

## Part 2 — 100-Bagger Add-On (30 points)

From Chris Mayer's *100 Baggers* framework. These three criteria identify the rare setup where a stock can compound 100x.

### OO — Owner-Operator (0–10)

A founder, family, or highly aligned CEO with significant skin in the game (ideally >5% ownership) thinks and acts like an owner. They reinvest into the business rather than maximizing short-term EPS.

> **Incentives principle**: Incentives drive behavior. When management has real skin in the game, their interests are aligned with shareholders. Always verify ownership from SEC proxy filings (DEF 14A) — don't rely on estimates.

| Signal | Points |
|---|---|
| Founder still CEO with >10% ownership | +5 |
| Non-founder CEO with >10% ownership | +3 |
| CEO with 5–10% ownership | +2 |
| CEO compensation is mostly equity, not cash bonus | +2 |
| Long-tenured management (5+ years), capital allocation track record | +1 |
| **Named to Glassdoor Best Places to Work (current or prior year)** | **+10** |

> **Glassdoor Best Places to Work**: This is a rare and meaningful signal — it reflects employee trust, leadership quality, mission clarity, and cultural strength. Companies where employees are genuinely engaged and proud to work tend to attract top talent, retain it, and execute better over time. Always verify via the current Glassdoor Best Places to Work list. Award the full +10 only for confirmed list inclusion; award +3–5 for a high Glassdoor rating (4.2+) without explicit list inclusion.

Reduce score if: frequent equity dilution, large executive departures, or CEO is primarily a "hired manager."

---

### TE — Twin Engine (0–10)

The 100-bagger setup requires **both engines firing**: (1) earnings/revenue compounding AND (2) P/E or revenue multiple expansion. If only one fires, you get a good stock. If both fire, you get a 100-bagger.

Evaluate whether the setup exists for multiple re-rating:
- Is the company currently under-covered or misunderstood by the market?
- Is profitability improving rapidly (FCF margin expansion)?
- Is the narrative still forming (early innings, not yet consensus)?
- Is the stock off its high by 30%+ despite business fundamentals intact?

| Signal | Points |
|---|---|
| Currently unprofitable but on clear FCF margin expansion path | +2 |
| Under-covered (few sell-side analysts, low media profile) | +2 |
| Multiple expansion catalyst visible (profitability inflection, index inclusion, large contract) | +2 |
| Stock is 30%+ off its 52-week high | +2 |
| Consensus expectations are low (estimate revision cycle turning) | +2 |

---

### RQ — ROIC Quality (0–10)

This measures the quality of returns on capital deployed — the true long-run driver of compounding. A business that can earn 20%+ ROIC and reinvest at those rates is a compounding machine.

| Signal | Points |
|---|---|
| ROIC currently > 20% OR credible path to 20%+ within 3 years | +3 |
| Incremental ROIC improving over time | +2 |
| Asset-light model (software, marketplace, data) | +2 |
| High gross margin (>65%) enabling strong unit economics | +2 |
| Negative working capital or customer prepayment (capital-light scaling) | +1 |

Reduce score for: heavy debt load, declining ROIC trend, capital-intensive business model with uncertain payback.

---

## Part 3 — AI Signal Classification

Classify each company's relationship with AI on a four-point scale:

| Symbol | Label | Meaning |
|---|---|---|
| 🔵 | **AI = Product/Customer** | AI is the core product or AI companies are the primary customers (e.g., Palantir, Runway, Pagaya) |
| 🟢 | **AI Tailwind** | AI accelerates their business — makes product better, reduces costs, or drives more demand for their infrastructure (e.g., Samsara using AI to enhance fleet analytics) |
| 🟡 | **AI Mixed** | AI is both a tailwind (product efficiency) and a headwind (could replace parts of their workflow) |
| 🔴 | **AI Headwind** | AI commoditizes or substitutes their core product — pure SaaS workflow tools most at risk (e.g., basic CRM, email marketing, DevOps tools) |

**Key rule**: Marketing automation, generic workflow SaaS, basic coding tools, and undifferentiated productivity software are most exposed to AI headwinds. Fintech infrastructure, hardware-enabled SaaS, healthcare data networks, and AI-native platforms are most protected.

---

## Part 4 — Business Model Tag

Label each company with its business model type:

| Tag | Meaning | Examples |
|---|---|---|
| 🔵 Pure SaaS | Purely subscription software, no hardware | DDOG, SNOW, S |
| ⚡ Hardware-SaaS | Physical hardware enables recurring software/data revenue | IOT, AXON, TMDX |
| 💳 Fintech/Payments | Transaction revenue, lending, or payments infrastructure | FOUR, KLAR |
| 🏥 Health Tech | Healthcare data, clinical AI, or life sciences | TEM, DOCS, GEHC |
| 🤖 AI-Native | AI is the core product | PLTR, APP |
| 🧩 Marketplace | Platform connecting buyers/sellers | APPF |

---

## Part 5 — Composite Score & Output Format

**Composite Score = SQGLP Total (/50) + OO + TE + RQ + Glassdoor = Total /90**

### Owner-Operated Flag (OO?)

Before scoring OO numerically, first assign a binary flag:

| Flag | Meaning | Criteria |
|---|---|---|
| 👤 Yes | Owner-operated | Founder still active as CEO/Executive Chair, OR family-controlled (>20% family ownership), OR CEO with >5% personal stake AND tenure >5 years |
| — No | Professional management | Hired CEO with <5% ownership and no founder still in operating role |

This flag appears as its own column in the master table, separate from the OO/10 score. A company can be "— No" but still score 5–6 on OO if the hired CEO has long tenure and meaningful equity alignment. The flag is the quick visual signal; the score captures the nuance.

### Master Ranking Table Format

Always output the ranking table in this format (use markdown table or HTML as appropriate):

```
Rank | Ticker | Company | Mkt Cap | OO? | S/10 | Q/10 | G/10 | L/10 | P/10 | SQGLP/50 | OO/10 | TE/10 | RQ/10 | Glassdoor/10 | Total/90 | Model | AI Signal | Valuation
```

### Valuation Column
Include:
- EV/NTM Rev: `Xх`
- PSG: `0.XX`
- FCF Yield: `X.X%`
- Val. Rating: one of ✅ Attractive / ⚠️ Fair / ❌ Expensive

### Score Interpretation
| Total /90 | Tier | Label |
|---|---|---|
| 75–90 | Tier 1 | 🏆 Core Holding — Highest conviction |
| 62–74 | Tier 2 | ⭐ High Conviction |
| 50–61 | Tier 3 | 👀 Watch List |
| < 50 | Tier 4 | ❌ Avoid / Trim |

---

## Research Protocol

When scoring a stock, follow this sequence:

1. **SEC Filings first**: Fetch the latest **10-Q** (most recent quarter) and **10-K** (annual report) from SEC EDGAR (https://www.sec.gov/cgi-bin/browse-edgar). Read the MD&A, revenue breakdown, risk factors, and management discussion sections. Also check the **DEF 14A** (proxy statement) for CEO compensation structure and insider ownership percentages.
2. **Web search**: Look up current market cap, latest quarterly revenue, NTM revenue estimate, revenue growth YoY, gross margin, FCF margin, and stock price vs. 52-week range.
3. **Insider ownership**: Confirm from DEF 14A proxy filing — look for CEO/founder share count and % of total shares outstanding.
4. **Competitive position**: Briefly research moat — NRR, switching costs, product differentiation.
5. **AI exposure**: Assess whether AI helps or hurts the core business.
6. **Calculate PSG**: `EV/NTM Revenue ÷ NTM Revenue Growth %`. If NTM estimates aren't available, use last twelve months (LTM) data with a note.
7. **Score each dimension** using the criteria above.
8. **Output the filled row** in the master table format, then write 2–3 sentences of thesis commentary below the table explaining the score rationale.

> **Due Diligence principle**: Always do thorough due diligence. Understand what you're investing in and, more importantly, *why*. If you can't explain the investment thesis in simple terms — even to a five-year-old — the business is probably not well enough understood. The 10-K risk factors section is required reading before any score is finalized.

---

## Output Example

When evaluating a single stock, output:

1. The filled row in the master table (or a standalone scorecard if no existing table)
2. A short thesis note (2–4 sentences) with the key bull case and main risk
3. A recommendation: **Add / Hold / Watch / Avoid**

When updating a full watchlist, output the complete re-ranked master table with all stocks sorted by Total/80 descending, then a brief summary of what changed and why.

---

## Part 6 — Investment Philosophy & Portfolio Discipline

These principles govern how scores translate into portfolio decisions. Apply them when making Add / Hold / Trim / Avoid recommendations.

### Capital Protection — Never Lose Money
Rule #1: Never lose money. Rule #2: Never forget Rule #1. Protecting capital is essential for long-term success. When evaluating a stock, always consider the **downside scenario** first — what does the bear case look like, and is the permanent loss of capital risk acceptable? A Tier 1 score doesn't override a binary risk (regulatory shutdown, fraud, unsustainable debt).

### Long-Term Mindset — Invest in Decades, Not Quarters
Invest with a long-term horizon — ideally 3–10 years minimum. More money is made in waiting than in frequent buying and selling. The L (Longevity) score specifically addresses this — a business that can compound for a decade is worth far more than a faster-growing business with a 2-year runway. When writing recommendations, explicitly state the expected holding period.

### Capital Allocation Discipline — Water the Flowers, Not the Weeds
Don't keep investing in poor performers while trimming winners too early. When a stock drops in score due to fundamental deterioration (not just market cap size change), that is a signal to reduce — not average down. When a stock remains high-scoring despite price appreciation, trimming purely on price momentum is the wrong instinct.

### Avoid FOMO — EQ over IQ
Stay away from fear of missing out, envy, and greed. These emotions lead to buying at the top of a hype cycle. The PSG and Size (S) score exist specifically to impose discipline — a company that has surged 3x loses S score points, signaling reduced upside. If the only reason to buy is that "everyone is talking about it," flag this explicitly in the recommendation.

### Diversification — Concentrate Your Best Ideas
Diversification beyond 8–15 stocks does little to reduce overall market risk and dilutes best ideas. When the user's watchlist has more than 15 holdings, flag which are lowest-conviction (Tier 3–4) and suggest concentration into top-ranked names. Quality over quantity.

---

## Important Notes

- **Always use the latest available data** — market caps change dramatically and can shift S scores significantly. A stock that surged 3x loses S score points — this is intentional discipline.
- **Always reference SEC filings** — the 10-Q (latest quarter), 10-K (annual), and DEF 14A (proxy/ownership) are primary sources. Do not rely solely on financial data aggregators for ownership or compensation data.
- **PSG is the primary valuation signal**, not absolute EV/Revenue. A high-growth company at 15x revenue with 50% growth may have a PSG of 0.30 — fair. A 10% grower at 8x revenue has a PSG of 0.80 — expensive.
- **Hardware-SaaS companies** (⚡) should be evaluated with the understanding that capital intensity is higher and gross margins are lower than pure SaaS — adjust Q and RQ expectations accordingly (65%+ gross margin is strong for hardware-SaaS, not weak).
- **The Twin Engine (TE) score is forward-looking** — it's about whether the setup for multiple expansion exists today, not whether it has already happened.
- **Owner-Operator quality** can be partially preserved post-founder if the incoming CEO has long tenure, significant equity, and maintains the founder's capital allocation philosophy.
- **Explain the thesis simply** — if the bull case can't be summarized in 2–3 sentences a non-expert could understand, the thesis needs more work before a position is taken.