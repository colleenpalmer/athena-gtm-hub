---
name: traction-channel-strategy
description: Build a growth marketing strategy using the Bullseye framework from the book Traction (Weinberg & Mares) — set a traction goal, brainstorm all 19 traction channels, rank them A/B/C, pick 3 to test, and define the critical path. Use when the user wants a growth strategy, wants to decide which acquisition channels to pursue, asks to "run Bullseye," or wants to prioritize marketing channels.
disable-model-invocation: true
---

# Traction Channel Strategy (Bullseye)

Run a structured conversation that produces a growth strategy grounded in the Bullseye
framework: one traction goal, all 19 channels considered, 3 chosen for testing.

## Before you start
Read `reference/traction-channels.md` (the framework + our channel notes),
`reference/company-overview.md`, `reference/icp-and-personas.md`,
`reference/positioning.md`, and `reference/competitive-landscape.md`.
Check the "Channel tests run" log in `reference/traction-channels.md` so you don't
re-propose something already killed.

## Conversation flow

1. **Motion** — Which motion is this for: D2C (students) or institutional? Run Bullseye
   separately for each; never blend them into one ranking.
2. **Traction goal** — One quantitative milestone with a date (e.g. "X paying students by
   date," "N institutional pilots signed by Fall"). Work backwards: what growth rate does
   that imply per month? What's the metric that counts as traction (not activity)?
3. **Phase** — Phase I (making something people want), II (marketing it), or III (scaling).
   Use the phase table in the reference to sanity-check channel fit.
4. **Critical path** — The 3–5 milestones between now and the goal. Anything proposed later
   that isn't on this path gets cut.
5. **Outer ring: brainstorm all 19** — For every channel write one plausible strategy
   specific to the persona and this motion. Do not skip channels because they feel
   unfamiliar; the book's point is that underused channels are where the cheap growth is.
   Note what competitors in `reference/competitive-landscape.md` are doing and where
   they're absent.
6. **Rank** — A (promising), B (possible), C (long shot), with a one-line reason each.
   Push back if the user's A-list is just the channels they already know.
7. **Middle ring: pick 3** — Choose 3 A's to test in parallel. Tiebreak on cheapest,
   fastest test. For each, state the hypothesis and the three test questions: cost per
   customer, volume available, and whether these are the right customers *right now*.
8. **Constraints & risks** — Budget, team capacity, brand guardrails (e.g. no
   "AI-powered" headlines, no mass paid before validation), timing (semester calendar).

## Output
Produce the strategy using `templates/traction-strategy.md`: traction goal + implied
growth rate, critical path, full 19-channel ranking table, the 3 chosen channels with
hypotheses and test outlines, and the parked ideas.

Then offer to run `traction-channel-test` for each of the 3 chosen channels to design
the actual tests.

## Guardrails
- One traction goal, one motion, three channels. Resist scope creep.
- Every channel strategy must name the persona it reaches and the moment it reaches them.
- Never invent CAC, conversion, or volume numbers. Mark all estimates as assumptions to
  be tested; use logged results from `reference/traction-channels.md` when they exist.
- Respect the strategic priority to validate before a large marketing push — flag any
  channel plan that conflicts with it.
- When the ranking or hypotheses are agreed, suggest updating the "Fit for us" section of
  `reference/traction-channels.md`.
