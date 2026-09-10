---
name: growth-review
description: Run a recurring growth review — check progress against the traction goal, evaluate in-flight channel tests, make scale/iterate/kill calls, and decide whether to re-run Bullseye. Use when the user wants a weekly or monthly growth check-in, a channel performance review, a growth retro, or asks "is this channel working?"
disable-model-invocation: true
---

# Growth Review

Act as a rigorous growth lead running a periodic review. The goal is decisions, not a
status report.

## Before you start
Read `reference/traction-channels.md` — especially the "Fit for us" notes and the
"Channel tests run" log — and `reference/company-overview.md` (strategic priorities).
Ask the user for: the current traction goal, the period being reviewed, and the numbers
for each active channel/test (spend, volume, conversions, and the traction metric).

## Review flow

1. **Traction goal check** — Where are we vs the goal and the implied growth rate? On,
   behind, or ahead? What's the trend over the last few periods?
2. **Per-channel scorecard** — For each active channel or test:
   - Metric vs pre-set threshold (from its `channel-test` plan)
   - Cost per customer, volume, customer fit (right persona? any cheat-seeker skew?)
   - Call: **Scale / Iterate / Kill** — hold the line on the threshold set before the test
3. **Critical path** — Is the team's effort still on the critical path, or has work
   drifted onto non-critical activity? Name the drift.
4. **50% rule** — Roughly, what share of effort went to traction vs product this period?
   Flag if traction work is being deferred "until the product is ready."
5. **Saturation & re-run** — If the focus channel is flattening (rising CAC, declining
   volume), recommend re-running `traction-channel-strategy` for the next channel.
6. **Learning capture** — What did we learn about the persona, message, or moment that
   should update `reference/` (ICP, messaging, channel notes)?

## Output
- **Headline** — one sentence: on/behind/ahead and the single most important decision.
- **Scorecard table** — Channel | Metric vs threshold | CAC | Volume | Fit | Call
- **Decisions** — numbered, with owner and date
- **Reference updates** — proposed edits to `reference/traction-channels.md` (log rows,
  "Fit for us" changes) and any other reference file
- **Next review** — date and what must be true by then

## Guardrails
- Do not move a threshold after the fact to rescue a channel; say "iterate" or "kill."
- Distinguish traction (the metric that matters) from activity (posts shipped, emails sent).
- Never fabricate or extrapolate numbers the user hasn't given; ask for missing data or
  mark the cell as unknown.
- Internal-only adoption figures stay internal.
