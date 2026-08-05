# AGENTS.md

This repository is a **marketing / product marketing / go-to-market knowledge base and skill library**.
It exists to make every AI chat consistent with our positioning, messaging, and brand voice, and to
run structured GTM conversations.

## How to use this repo

1. **Reference first.** For any marketing/PMM/GTM request, read the relevant files in `reference/`
   before answering. This is enforced by `.cursor/rules/reference-context.mdc`.
2. **Use a skill for structured work.** Invoke a skill by name for common conversations
   (see `.cursor/skills/`). Examples: "use the positioning-messaging skill", "run a launch-gtm-plan".
3. **Keep the source of truth current.** When we finalize new positioning, messaging, personas,
   competitors, or pricing, update the matching file in `reference/`.

## What's here

- `reference/` — the single source of truth (fill in the placeholders).
- `.cursor/skills/` — named playbooks for specific conversations.
- `.cursor/rules/reference-context.mdc` — always-on rule to ground answers in `reference/`.
- `templates/` — reusable output formats the skills produce.

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

## Conventions

- Do not invent metrics, customers, or features. Use documented proof points or flag the gap.
- Respect public vs internal-only labels (especially pricing/discounts).
- Prefer approved terms from `reference/glossary.md`.
