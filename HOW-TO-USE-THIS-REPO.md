# How to Use This Repo

Quick guide to navigating the Athena marketing/GTM knowledge base.

---

## Start Here

**New to this repo?** Read these first:
1. `AGENTS.md` — How AI agents use this repo
2. `reference/positioning.md` — Core positioning statement
3. `reference/icp-and-personas.md` — Who we sell to
4. `GTM-PROJECT-TRACKER.md` — What's currently in flight

---

## Folder Structure

### `reference/` — Single Source of Truth
The official, validated content. AI agents read this first.

**What's here:**
- `positioning.md` — How we're positioned in the market
- `messaging-framework.md` — Approved language and value props
- `icp-and-personas.md` — Who we sell to (students, institutions, + emerging segments)
- `brand-voice-and-tone.md` — How we sound
- `competitive-landscape.md` — Competitors and our differentiation
- `traction-channels.md` — Growth framework + channel test log
- `product-catalog.md` — What we sell, features, limitations
- `pricing-and-packaging.md` — Pricing structure
- `company-overview.md` — Mission, vision, facts
- `glossary.md` — Approved terms

**When to update:** When something is validated and becomes the new source of truth.

---

### `docs/` — Supporting Documentation
Official docs, FAQs, enablement materials, research.

**What's here:**
- Athena FAQs (public, internal, CSM, sales)
- Enablement guides
- Playbooks
- Creative briefs
- Social analytics

**When to update:** When you create new official docs or assets.

---

### `work-in-progress/` — Active Projects
Exploratory work, drafts, experiments. Organized by project.

**Current folders:**
- `educator-segment/` — ICP development for educator market
- `drip-campaigns/` — Email lifecycle planning
- `institutional-page-revamp/` — Institutional landing page redesign

**Project pages:** each project's tracking doc is a self-contained HTML page (copy `templates/project-page.html`),
mirrored to `app/public/<folder>/` so the app can serve it. See "Project pages are HTML by default" in `AGENTS.md`.

**When to use:**
- Starting a new GTM initiative
- Exploring a new segment or channel
- Drafting messaging before it's validated

**When to graduate to `reference/`:** When work is validated and becomes the approved version.

---

### `templates/` — Reusable Formats
Templates for common deliverables.

**What's here:**
- `icp-persona.md` — Persona template
- `project-page.html` — Default project tracking page (HTML)
- Campaign briefs, one-pagers, etc. (add as needed)

**When to use:** Starting a new deliverable from scratch.

---

### `decisions/` — Decision & Experiment Log
Track what you tested, what you learned, what you decided.

**What's here:**
- `DECISION-LOG.md` — Record of major GTM decisions and tests

**When to update:** 
- After making a significant decision (launch, kill, pivot)
- After completing a channel test or experiment
- Before starting work (check if it's been tried before)

---

### `.claude/skills/` — AI Agent Playbooks
Structured conversation scripts for common GTM tasks.

**Available skills:**
- `positioning-messaging` — Build/refine positioning + messaging
- `icp-persona-development` — Define ICP and personas
- `launch-gtm-plan` — Plan a product/feature launch
- `competitive-battlecard` — Create competitor battlecards
- `content-brief` — Turn topics into content briefs
- `campaign-plan` — Plan integrated campaigns
- `sales-enablement-onepager` — Draft one-pagers and pitch docs
- `messaging-review` — Critique copy against brand/positioning

**How to use:** Tell the AI agent "use the [skill-name] skill" or "run a [skill-name]."

---

## Common Workflows

### Starting a New GTM Initiative
1. Check `GTM-PROJECT-TRACKER.md` to see what's already in flight
2. Create a folder in `work-in-progress/[project-name]/`
3. Add the project to the tracker
4. Use relevant skills (e.g. `icp-persona-development`, `launch-gtm-plan`)
5. Draft work in `work-in-progress/`
6. When validated, move to `reference/` or `docs/`

### Answering a Marketing Question
1. Read `reference/` files first (positioning, personas, messaging)
2. Check `docs/` for existing materials
3. Check `decisions/DECISION-LOG.md` to see if it's been answered before
4. If still unclear, explore in `work-in-progress/` or ask for help

### Running a Channel Test
1. Use the `traction-channel-test` skill (if available) or plan manually
2. Document the test plan in `work-in-progress/`
3. Run the test
4. Log results in `reference/traction-channels.md` (channel test table)
5. Log decision (scale/iterate/kill) in `decisions/DECISION-LOG.md`

### Creating Messaging/Copy
1. Read `reference/messaging-framework.md` and `reference/brand-voice-and-tone.md`
2. Draft copy
3. Run through `messaging-review` skill to check for off-brand language
4. Revise and finalize

### Weekly Habit
- Update `GTM-PROJECT-TRACKER.md` with current status
- Move completed work from `work-in-progress/` to `reference/` or `docs/`
- Archive or delete dead work
- Log any major decisions or learnings

---

## Questions?

- **Not sure where something goes?** Default to `work-in-progress/` until it's validated
- **Don't know if something's been tried?** Check `decisions/DECISION-LOG.md` and `reference/traction-channels.md`
- **Need to run a structured conversation?** Look in `.claude/skills/` for a playbook
- **Want to update the source of truth?** Edit files in `reference/` (and document why)
