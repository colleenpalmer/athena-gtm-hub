# Marketing / PMM / GTM Hub

A shared knowledge base and AI skill library for **marketing, product marketing, and
go-to-market**. Open it in [Cursor](https://cursor.com) and every chat is automatically
grounded in our positioning, messaging, and brand voice — plus a set of skills that run
structured GTM conversations.

## Why this exists

- **Consistency** — one source of truth so every message, asset, and plan says the same thing.
- **Speed** — named skills run repeatable conversations (positioning, launches, battlecards…).
- **Shareability** — clone the repo and your teammates get the same context and skills.

## How it works

1. **Reference files** in [`reference/`](reference/) are the source of truth.
2. An always-on rule ([`.cursor/rules/reference-context.mdc`](.cursor/rules/reference-context.mdc))
   tells the AI to read the relevant reference files before answering — so you don't have to
   attach them every time.
3. **Skills** in [`.cursor/skills/`](.cursor/skills/) run structured conversations on demand.

## Getting started

1. **Fill in the reference files.** Replace the `<placeholders>` in [`reference/`](reference/),
   starting with `company-overview.md`, `positioning.md`, `messaging-framework.md`, and
   `brand-voice-and-tone.md`. Tip: run the `positioning-messaging` and `icp-persona-development`
   skills to build these interactively.
2. **Open the folder in Cursor.** The rule and skills load automatically.
3. **Start chatting** — the AI will reference your material. Or invoke a skill by name.

## Using the skills

Ask for a skill by name, e.g.:
- "Use the **positioning-messaging** skill to refine our positioning."
- "Run a **launch-gtm-plan** for the Q3 release."
- "Make a **competitive-battlecard** vs Acme."
- "Do a **messaging-review** of this landing page copy."

| Skill | Use it to |
|---|---|
| `positioning-messaging` | Build/refine positioning + messaging framework |
| `icp-persona-development` | Define ICP and buyer personas |
| `launch-gtm-plan` | Plan a launch and GTM motion |
| `competitive-battlecard` | Create a sales-ready battlecard |
| `content-brief` | Turn a topic into an on-brand content brief |
| `campaign-plan` | Plan an integrated multi-channel campaign |
| `sales-enablement-onepager` | Draft a one-pager / pitch / FAQ |
| `messaging-review` | Critique copy against positioning + brand voice |

## Keeping it current

When positioning, messaging, personas, competitors, or pricing change, update the matching
file in [`reference/`](reference/) and commit. The AI improves as your reference material does.

## Repo layout

```
marketing-gtm-hub/
├── README.md
├── AGENTS.md                 # repo-wide guidance Cursor auto-reads
├── .cursor/
│   ├── rules/                # always-on grounding rule
│   └── skills/               # the 8 GTM conversation skills
├── reference/                # source of truth (fill in the placeholders)
└── templates/                # output formats the skills produce
```

## Publishing to GitHub

This repo is initialized locally. To share it:

```bash
# create the repo on GitHub and push (requires the GitHub CLI)
gh repo create marketing-gtm-hub --private --source=. --push

# or, without gh: create an empty repo on github.com, then
git remote add origin <your-repo-url>
git push -u origin main
```

Use `--public` instead of `--private` if you want it open.
