# System Diagram

How all the pieces of the GTM Hub fit together.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Athena GTM Hub Repo                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌────────────────┐         ┌──────────────────┐          │
│  │   reference/   │────────▶│  Zed / Cursor    │          │
│  │                │         │  AI Agent        │          │
│  │ • positioning  │         └──────────────────┘          │
│  │ • messaging    │                 │                     │
│  │ • personas     │                 │                     │
│  │ • channels     │                 ▼                     │
│  └────────────────┘         ┌──────────────────┐          │
│         │                   │   .claude/       │          │
│         │                   │   skills/        │          │
│         │                   │                  │          │
│         │                   │ • ICP dev        │          │
│         │                   │ • Launch GTM     │          │
│         │                   │ • Battlecards    │          │
│         │                   └──────────────────┘          │
│         │                                                 │
│         │                                                 │
│         │                   ┌──────────────────┐          │
│         └──────────────────▶│   Web App        │          │
│                             │   (Next.js)      │          │
│                             │                  │          │
│                             │ ┌──────────────┐ │          │
│  ┌────────────────┐         │ │  Projects    │ │          │
│  │     data/      │◀───────▶│ │  Tab         │ │          │
│  │                │         │ └──────────────┘ │          │
│  │ • projects.json│         │                  │          │
│  │ • experiments  │◀───────▶│ ┌──────────────┐ │          │
│  │ • decisions    │         │ │  Experiments │ │          │
│  └────────────────┘         │ │  Tab         │ │          │
│         ▲                   │ └──────────────┘ │          │
│         │                   │                  │          │
│         │                   │ ┌──────────────┐ │          │
│         │                   │ │  GTM Chat    │ │          │
│         │                   │ │  Assistant   │ │          │
│         │                   │ └──────────────┘ │          │
│         │                   └────────┬─────────┘          │
│         │                            │                     │
│         │                            ▼                     │
│         │                   ┌──────────────────┐          │
│         │                   │  Anthropic API   │          │
│         │                   │  (Claude)        │          │
│         │                   └──────────────────┘          │
│         │                                                 │
│  ┌────────────────┐                                       │
│  │ work-in-       │                                       │
│  │ progress/      │                                       │
│  │                │                                       │
│  │ • educator/    │                                       │
│  │ • drip-camps/  │                                       │
│  │ • inst-page/   │                                       │
│  └────────────────┘                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Flow

### 1. Reference Context Flow

```
reference/*.md
      │
      ├─▶ Zed/Cursor reads on every chat
      │   (via .cursor/rules)
      │
      └─▶ Web App reads on every chat
          (via /api/chat endpoint)
```

**Result:** Both interfaces have the same GTM context.

---

### 2. Project Management Flow

```
User Action (Web App)
      │
      ▼
React Component
      │
      ▼
API Route (/api/projects)
      │
      ▼
Storage Layer (lib/storage.ts)
      │
      ▼
JSON File (data/projects.json)
      │
      ▼
Git Commit (optional)
      │
      ▼
Team Pull & Sync
```

**Result:** Projects tracked, persisted, shared via git.

---

### 3. AI Chat Flow

```
User Message
      │
      ▼
Chat Component
      │
      ▼
/api/chat Endpoint
      │
      ├─▶ Load reference files
      │   (positioning, personas, etc.)
      │
      ├─▶ Build system prompt
      │   (includes reference context)
      │
      └─▶ Call Anthropic API
          (Claude Sonnet 4)
      │
      ▼
Response
      │
      ▼
Display in Chat
```

**Result:** AI has full GTM context, gives grounded advice.

---

### 4. Experiment Tracking Flow

```
Plan Experiment
      │
      ▼
Add to Web App (Experiments Tab)
      │
      ▼
Saved to data/experiments.json
      │
      ▼
Run Test in Real World
      │
      ▼
Log Results in Web App
      │
      ▼
Make Decision (Scale/Iterate/Kill)
      │
      ▼
(Manually) Update reference/traction-channels.md
      │
      ▼
AI learns from updated reference
```

**Result:** Experiment history builds, informs future decisions.

---

## Two Interfaces, Same Brain

### Zed/Cursor
**Strengths:**
- File editing
- Code generation
- Deep strategic work
- Running skills

**Reads:**
- `reference/` (auto)
- `work-in-progress/`
- `docs/`

**Writes:**
- Any markdown file
- New files in `work-in-progress/`

---

### Web App
**Strengths:**
- Visual tracking
- Quick updates
- Structured data entry
- Persistent logging

**Reads:**
- `reference/` (for chat)
- `data/` (for UI)

**Writes:**
- `data/*.json`

---

## Sync Strategy

### What Gets Committed to Git

```
✅ reference/           # Single source of truth
✅ work-in-progress/    # Active projects
✅ data/                # Project/experiment data (optional)
✅ docs/                # Official documentation
✅ decisions/           # Decision log
❌ app/node_modules/    # Dependencies (in .gitignore)
❌ app/.env.local       # API keys (in .gitignore)
❌ app/.next/           # Build artifacts (in .gitignore)
```

### Team Collaboration Workflow

```
Team Member A                Team Member B
      │                            │
      ├─▶ Adds project in app      │
      │                            │
      ├─▶ git commit data/         │
      │                            │
      ├─▶ git push                 │
      │                            │
      │                            ├─▶ git pull
      │                            │
      │                            ├─▶ Sees new project
      │                            │
      │                            ├─▶ Updates project
      │                            │
      │                            ├─▶ git commit data/
      │                            │
      │                            ├─▶ git push
      │                            │
      ├─▶ git pull                 │
      │                            │
      ├─▶ Sees update              │
      │                            │
      ▼                            ▼
```

---

## Technology Stack

```
┌──────────────────────────────────────────┐
│           User Interface                 │
├──────────────────────────────────────────┤
│                                          │
│  React 18 + TypeScript                   │
│  Tailwind CSS                            │
│  Lucide Icons                            │
│  React Markdown                          │
│                                          │
└──────────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────┐
│           Application Layer              │
├──────────────────────────────────────────┤
│                                          │
│  Next.js 14 (App Router)                 │
│  API Routes                              │
│  Server Components                       │
│                                          │
└──────────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────┐
│           Data Layer                     │
├──────────────────────────────────────────┤
│                                          │
│  JSON Files (data/*.json)                │
│  Markdown Files (reference/*.md)         │
│  File System APIs (Node.js fs)           │
│                                          │
└──────────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────┐
│           External Services              │
├──────────────────────────────────────────┤
│                                          │
│  Anthropic API (Claude Sonnet 4)         │
│  HTTPS (Encrypted)                       │
│                                          │
└──────────────────────────────────────────┘
```

---

## Security Model

```
┌────────────────────────────────────────┐
│         Browser (Client)               │
│                                        │
│  • No API keys exposed                 │
│  • No sensitive data in localStorage   │
│  • HTTPS only                          │
│                                        │
└────────────────────────────────────────┘
                  │
                  ▼ HTTPS
┌────────────────────────────────────────┐
│       Next.js Server (API Routes)      │
│                                        │
│  • API key in .env.local (server-side) │
│  • Validates requests                  │
│  • Proxies to Anthropic                │
│                                        │
└────────────────────────────────────────┘
                  │
                  ▼ HTTPS
┌────────────────────────────────────────┐
│         Anthropic API                  │
│                                        │
│  • Encrypted in transit                │
│  • Rate limited                        │
│  • No data training                    │
│                                        │
└────────────────────────────────────────┘
```

---

## File System Layout

```
athena-marketing-gtm-hub/
│
├── reference/           # Source of truth (markdown)
│   ├── positioning.md
│   ├── messaging-framework.md
│   ├── icp-and-personas.md
│   ├── traction-channels.md
│   └── ...
│
├── data/               # App data (JSON)
│   ├── projects.json
│   ├── experiments.json
│   └── decisions.json
│
├── work-in-progress/   # Active work (markdown + files)
│   ├── educator-segment/
│   │   ├── README.md
│   │   ├── icp-questions.md
│   │   └── learnings.md
│   ├── drip-campaigns/
│   └── institutional-page-revamp/
│
├── app/                # Web application
│   ├── src/
│   │   ├── app/        # Pages & API routes
│   │   ├── components/ # React components
│   │   ├── lib/        # Utilities
│   │   └── types/      # TypeScript types
│   ├── package.json
│   └── README.md
│
├── .claude/            # AI agent configuration
│   ├── rules/          # Auto-applied rules
│   └── skills/         # Conversation skills
│
├── docs/               # Official documentation
├── decisions/          # Decision log
├── templates/          # Reusable formats
│
└── [Documentation Files]
    ├── START-HERE.md
    ├── GTM-PROJECT-TRACKER.md
    ├── HOW-TO-USE-THIS-REPO.md
    └── ...
```

---

## Development vs. Production

### Development (Current)
```
Developer Machine
      │
      ├─▶ Run: npm run dev
      │
      ├─▶ Next.js Dev Server (localhost:3000)
      │
      ├─▶ Hot Reload on File Changes
      │
      └─▶ Data: Local JSON files
```

### Production (Optional Future)
```
Deployment Platform (Vercel/AWS/etc.)
      │
      ├─▶ Run: npm run build && npm start
      │
      ├─▶ Next.js Production Server
      │
      ├─▶ Optimized Build
      │
      └─▶ Data: Still JSON, or migrate to DB
```

---

## Extensibility Points

Where you can add features:

### 1. New Data Types
```
src/types/index.ts          # Define type
src/lib/storage.ts          # Add storage functions
src/app/api/[name]/route.ts # Create API endpoint
src/components/[Name].tsx   # Build UI component
src/app/page.tsx            # Add tab
```

### 2. New AI Capabilities
```
src/app/api/chat/route.ts   # Modify system prompt
                            # Load different reference files
                            # Change model parameters
```

### 3. New Reference Files
```
reference/[new-file].md     # Add markdown file
                            # Auto-loaded by chat
                            # No code changes needed
```

### 4. New Skills (Zed/Cursor)
```
.claude/skills/[skill-name]/
    ├── SKILL.md            # Skill definition
    └── [resources]/        # Supporting files
```

---

## Summary

The system is designed as:

**Modular:** Each component has a clear role  
**Simple:** JSON files, no database  
**Extensible:** Easy to add new features  
**Portable:** Runs anywhere Node.js runs  
**Collaborative:** Git-based sync  
**AI-Integrated:** Context flows to both interfaces  

All parts work together to give you a complete GTM command center.
