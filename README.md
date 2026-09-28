# Marketing / PMM / GTM Hub

A shared knowledge base and AI skill library for **marketing, product marketing, and
go-to-market** — with an integrated web app for tracking projects and experiments.

## 👉 **[START HERE](START-HERE.md)** if you're new to this repo

## 🚀 NEW: GTM Web App

**Run the web app to manage your GTM work in one place:**

```bash
cd app
npm install
cp .env.example .env.local  # Add your Anthropic API key
npm run dev
```

Open http://localhost:3000

**Features:**
- 📋 **Project Tracker** — Manage all GTM projects with status, deadlines, next actions
- 🧪 **Experiment Log** — Track channel tests and results (Bullseye framework)
- 💬 **AI Assistant** — Chat interface with access to your reference materials
- 🔗 **Integrated Context** — Automatically loads your positioning, personas, messaging
- 💀 **Design Deadites** — Summon AI design directors for brand, copy, design, PMM & GTM reviews

[See the app README →](app/README.md)

---

## Why this exists

- **Consistency** — one source of truth so every message, asset, and plan says the same thing.
- **Speed** — named skills run repeatable conversations (positioning, launches, battlecards…).
- **Shareability** — clone the repo and your teammates get the same context and skills.
- **Trackability** — web app keeps projects and experiments organized.

## How it works

**Two ways to use this repo:**

### 1. In Zed/Cursor (Chat & Skills)
1. **Reference files** in [`reference/`](reference/) are the source of truth.
2. An always-on rule tells the AI to read the relevant reference files before answering.
3. **Skills** in [`.cursor/skills/`](.cursor/skills/) run structured conversations on demand.

### 2. Web App (Project Management & Chat)
1. **Run the app** in the `app/` directory (Next.js)
2. **Track projects** — add, update, and organize GTM work
3. **Log experiments** — channel tests with results and decisions
4. **Chat with AI** — same context as Zed, different interface
5. **Data stored** in `data/` as JSON files (version-controlled)

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
- "Run **traction-channel-strategy** for the D2C motion."

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
| `traction-channel-strategy` | Run Bullseye: traction goal, rank all 19 channels, pick 3 to test |
| `traction-channel-test` | Design a cheap, time-boxed test for one channel |
| `growth-review` | Periodic growth check-in with scale/iterate/kill calls |

### Growth marketing loop

The three growth skills follow the Bullseye framework from *Traction* (Weinberg & Mares)
and share [`reference/traction-channels.md`](reference/traction-channels.md):

```
traction-channel-strategy  →  traction-channel-test (×3)  →  growth-review
        ▲                                                         │
        └──────────── re-run when the focus channel saturates ────┘
```

## Keeping it current

When positioning, messaging, personas, competitors, or pricing change, update the matching
file in [`reference/`](reference/) and commit. The AI improves as your reference material does.

## New to this repo?

👉 **Start here:** [`HOW-TO-USE-THIS-REPO.md`](HOW-TO-USE-THIS-REPO.md) — explains the folder structure and common workflows  
👉 **Track active work:** [`GTM-PROJECT-TRACKER.md`](GTM-PROJECT-TRACKER.md) — central dashboard for all GTM projects

## Repo layout

```
athena-marketing-gtm-hub/
├── README.md
├── AGENTS.md                      # repo-wide guidance for AI agents
├── HOW-TO-USE-THIS-REPO.md        # 👈 Start here if you're new
├── GTM-PROJECT-TRACKER.md         # Central dashboard for active GTM work
├── .claude/
│   ├── rules/                     # always-on grounding rule
│   └── skills/                    # the 11 GTM + growth conversation skills
├── reference/                     # ✅ Single source of truth (validated content)
├── docs/                          # Official documentation and assets
├── work-in-progress/              # 🚧 Active projects and exploration
│   ├── educator-segment/          # Educator ICP development
│   ├── drip-campaigns/            # Email lifecycle planning
│   └── institutional-page-revamp/ # Institutional landing page redesign
├── decisions/                     # Decision log and experiment results
└── templates/                     # Reusable output formats
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
