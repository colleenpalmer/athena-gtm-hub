# AGENTS.md

This repository is a **marketing / product marketing / go-to-market knowledge base and skill library**.
It exists to make every AI chat consistent with our positioning, messaging, and brand voice, and to
run structured GTM conversations.

## How to use this repo

1. **Reference first.** For any marketing/PMM/GTM request, read the relevant files in `reference/` & `docs/`
   before answering. This is enforced by `.cursor/rules/reference-context.mdc`
2. **Use a skill for structured work.** Invoke a skill by name for common conversations
   (see `.cursor/skills/`). Examples: "use the positioning-messaging skill", "run a launch-gtm-plan".
3. **Keep the source of truth current.** When we finalize new positioning, messaging, personas,
   competitors, or pricing, update the matching file in `reference/`.

## What's here

- `reference/` — the single source of truth (fill in the placeholders).
- `docs/` — the official documentation for the project, reference docs for the project.
- `.cursor/skills/` — named playbooks for specific conversations.
- `.cursor/rules/reference-context.mdc` — always-on rule to ground answers in `reference/`.
- `templates/` — reusable output formats the skills produce.
- `templates/project-page.html` — the default format for project tracking pages (see Conventions).

## Available skills

| Skill | Use it to |
|---|---|
| `positioning-messaging` | Build/refine positioning + messaging framework |
| `icp-persona-development` | Define ICP and buyer personas |
| `launch-gtm-plan` | Plan a product/feature launch and GTM motion |
| `competitive-battlecard` | Create a sales-ready competitor battlecard |
| `content-brief` | Turn a topic into an on-brand content brief |
| `campaign-plan` | Plan an integrated multi-channel campaign |
| `sales-enablement-onepager` | Draft a one-pager / pitch / FAQ |
| `messaging-review` | Critique copy against positioning + brand voice |
| `traction-channel-strategy` | Run Bullseye: set a traction goal, rank all 19 channels, pick 3 to test |
| `traction-channel-test` | Design a cheap, time-boxed test for one traction channel |
| `growth-review` | Periodic growth check-in: scale/iterate/kill calls, re-run Bullseye |

The three growth skills form a loop — strategy → test → review — grounded in
`reference/traction-channels.md` (the *Traction* / Bullseye framework plus our channel log).

## Conventions

- Do not invent metrics, customers, or features. Use documented proof points or flag the gap.
- Respect public vs internal-only labels (especially pricing/discounts).
- Prefer approved terms from `reference/glossary.md`.

### Project pages are HTML by default

Every project in `work-in-progress/` gets a **single self-contained HTML page** as its tracking doc
(status, plan, open questions, update log). HTML is easier to share and digest than Markdown.

- Start from `templates/project-page.html`. Save to `work-in-progress/<folder>/<slug>.html`.
- Keep it self-contained (inline CSS/JS, no external dependencies) so it opens anywhere as one file.
- Don't keep a parallel `.md` copy of the same plan; the HTML page is the source of truth.
- Mirror it to `app/public/<folder>/<slug>.html` so the GTM app serves it at
  `http://localhost:3000/<folder>/<slug>.html`, and add that link as a note on the project in `data/projects.json`.
- On every edit: update "Last updated" in the hero, add an Update log entry, and re-copy to `app/public/`.
- Folder `README.md` files, skill outputs from `templates/*.md`, and `reference/` stay Markdown.
