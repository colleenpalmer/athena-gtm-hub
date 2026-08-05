---
name: competitive-battlecard
description: Create a sales-ready competitive battlecard for a specific competitor, including their positioning, strengths, weaknesses, where we win, objection handling, and landmine questions. Use when the user asks for a battlecard, competitor comparison, competitive analysis, or how to sell against a rival.
disable-model-invocation: true
---

# Competitive Battlecard

Produce a concise, sales-ready battlecard for one competitor.

## Before you start
Read `reference/competitive-landscape.md`, `reference/positioning.md`,
`reference/messaging-framework.md`, and `reference/product-catalog.md`.
Identify which competitor; if it's not in the landscape file, gather the basics first.

## Conversation flow
1. Confirm the competitor and the selling context (segment, deal type).
2. Summarize their positioning and where they genuinely win (be honest — credibility matters).
3. Identify their weaknesses/gaps relative to our differentiators.
4. Draft "why we win" with proof for each point.
5. Draft objection handling for the claims they make against us.
6. Draft 3–5 "landmine" questions reps can plant that expose their weaknesses.
7. Note pricing model differences (respect internal-only info).

## Output
Produce the battlecard using `templates/battlecard.md`. Keep it to one screen where
possible — reps scan, not read. Then offer to update `reference/competitive-landscape.md`.

## Guardrails
- No FUD or unverifiable claims. Every "where we win" needs a proof point or a "needs proof" flag.
- Stay factual and defensible; assume the competitor may see it.
