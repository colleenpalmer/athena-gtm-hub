---
name: traction-channel-test
description: Design a cheap, time-boxed experiment for one of the 19 traction channels from the book Traction — hypothesis, test design, budget, success threshold, and a scale/iterate/kill decision rule. Use when the user wants to test a marketing channel, design a growth experiment, or turn a Bullseye channel pick into a concrete test plan.
disable-model-invocation: true
---

# Traction Channel Test

Design a single channel experiment that answers the Bullseye test questions cheaply:
**What does a customer cost through this channel? How many are available? Are they the
customers we want right now?**

## Before you start
Read `reference/traction-channels.md` (find the channel's row and the "Fit for us" notes),
`reference/icp-and-personas.md`, `reference/messaging-framework.md`, and
`reference/brand-voice-and-tone.md`. If the user hasn't run `traction-channel-strategy`,
ask which channel, which motion (D2C or institutional), and what traction goal this serves.

## Conversation flow

1. **Channel & hypothesis** — Name the channel (one of the 19). Write the hypothesis in
   the form: "If we <tactic> to <persona> at <moment>, we'll acquire <customers> at
   ≤ <cost> because <reason>."
2. **Traction metric** — The single metric that proves the channel works (e.g. trial
   starts, connected-Canvas signups, pilot meetings booked). Name leading indicators too,
   but only one counts.
3. **Test design** — The minimum tactic that gives a real signal. Specify the audience
   slice, the offer/hook (mapped to a messaging pillar), the assets needed, and how
   tracking works (UTM, unique code/URL, landing page, form).
4. **Budget & time box** — Money and hours, capped. Default to a few weeks and low
   four figures at most; smaller if possible. State what "enough sample" looks like.
5. **Success threshold** — Set the decision rule *before* running:
   - **Scale** — metric ≥ threshold and unit economics are plausible at $5/mo (D2C) or
     seat pricing (institutional)
   - **Iterate** — signal but below threshold; name the one variable to change
   - **Kill** — below floor or wrong customers
6. **Risks & guardrails** — Brand risk, persona mismatch (e.g. attracting cheat-seekers),
   privacy claims, semester timing, dependency on other teams.
7. **Owner & dates** — Who runs it, start, review date.

## Output
Produce the plan using `templates/channel-test.md`. Keep it to one page. Include the
hypothesis, metric, test design, budget, decision rule, and a results section to fill in
after the test.

## After the test
When the user reports results, help them:
- Fill in the results section and make the Scale / Iterate / Kill call against the
  pre-set threshold — don't move the goalposts.
- Add a row to the "Channel tests run" log in `reference/traction-channels.md`.
- If scaling, hand off to `campaign-plan` for the full build-out; if iterating, redesign
  the single variable and re-run.

## Guardrails
- A test proves whether a channel works at all; it is not the place to optimize creative.
- Do not invent benchmark CACs or conversion rates. If the user wants a comparison
  point, ask for their data or label it clearly as an assumption.
- Any copy directions must be on-brand and use approved terms from `reference/glossary.md`.
- Do not publish internal-only figures (adoption counts, discounts) in any test asset.
