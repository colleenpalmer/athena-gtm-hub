# GTM App Overview

## What I Built For You

A **Next.js web application** that sits alongside your GTM knowledge base repo, giving you:

1. **Visual project tracker** (like GTM-PROJECT-TRACKER.md, but interactive)
2. **Experiment logger** (channel tests with the Bullseye framework)
3. **AI chat interface** (same agent as Zed, but in the browser)
4. **Persistent data storage** (everything saves automatically)

---

## Architecture

```
athena-marketing-gtm-hub/
├── reference/          # Source of truth (positioning, personas, etc.)
├── work-in-progress/   # Active GTM projects
├── data/              # 👈 App data (JSON files, auto-created)
│   ├── projects.json
│   ├── experiments.json
│   └── decisions.json
└── app/               # 👈 The web app
    ├── src/
    │   ├── app/       # Next.js pages & API routes
    │   ├── components/ # React UI components
    │   ├── lib/       # Data storage logic
    │   └── types/     # TypeScript interfaces
    └── package.json
```

### How It Works

**Frontend (React)**
- Three tabs: Projects, Experiments, Chat
- Add/edit/delete functionality for each
- Real-time updates

**Backend (Next.js API Routes)**
- `/api/projects` — CRUD for GTM projects
- `/api/experiments` — CRUD for channel tests
- `/api/chat` — Proxies to Anthropic API with context

**Storage**
- JSON files in `../data/` directory
- Reads reference files from `../reference/`
- Simple, version-controllable, no database needed

**AI Integration**
- Uses Anthropic's Claude Sonnet 4
- Automatically loads your reference materials
- Same context as Zed/Cursor, different interface

---

## Key Features

### 1. Project Tracker

Replaces the markdown tracker with a visual interface:

**What you can do:**
- ✅ Add new GTM projects
- ✅ Set status (not-started → in-progress → active → complete/killed)
- ✅ Assign owner, deadline, next action
- ✅ Link to work-in-progress folders
- ✅ Edit/delete projects
- ✅ See everything at a glance

**Mirrors** `GTM-PROJECT-TRACKER.md` but easier to update.

### 2. Experiment Tracker

Bullseye framework implementation:

**What you can do:**
- ✅ Plan experiments (hypothesis, channel, segment)
- ✅ Log results (CAC, conversion rate, fit)
- ✅ Make decisions (Scale / Iterate / Kill)
- ✅ Track status (planned → running → complete)
- ✅ Build channel test history

**Feeds into** `reference/traction-channels.md` decision-making.

### 3. GTM Assistant

Chat interface with your GTM brain:

**What it knows:**
- ✅ Your positioning & differentiation
- ✅ ICP and personas
- ✅ Messaging framework
- ✅ Traction channels
- ✅ Brand voice

**What it can do:**
- Help complete ICP development
- Recommend channels
- Review copy for brand consistency
- Design experiments
- Answer strategy questions

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **UI** | React 18 + Tailwind CSS |
| **AI** | Anthropic Claude API (Sonnet 4) |
| **Data** | JSON files (no database) |
| **Icons** | Lucide React |
| **Markdown** | React Markdown |

**Why these choices:**
- **Next.js** — Easy API routes + React in one package
- **JSON files** — Simple, git-friendly, no setup
- **TypeScript** — Type safety for data structures
- **Tailwind** — Fast styling without CSS files

---

## How To Use It

### For Daily GTM Work

**Morning routine:**
1. Open the app
2. Check Projects tab → see what's in flight
3. Update status and next actions
4. Log any experiments that finished
5. Chat with assistant to plan the day

**When starting new work:**
1. Add a project (Projects tab)
2. Create corresponding folder in `work-in-progress/`
3. Update tracker as you go
4. Ask assistant for strategic input

**After running a test:**
1. Go to Experiments tab
2. Update the experiment with results
3. Make Scale/Iterate/Kill decision
4. Log in decision log

### For Team Collaboration

**Share the repo:**
- Everyone runs the same app locally
- Data syncs via git (commit `data/*.json` files)
- Reference materials stay consistent

**Division of work:**
- Use "Owner" field to assign projects
- Status keeps everyone aligned
- Chat assistant gives consistent answers

---

## Comparison: App vs. Zed

| Feature | Zed/Cursor | GTM App |
|---------|------------|---------|
| **File editing** | ✅ Best | ❌ No |
| **Project tracking** | Manual (markdown) | ✅ Visual, interactive |
| **Experiment logging** | Manual (markdown) | ✅ Structured forms |
| **AI chat** | ✅ Advanced | ✅ Same brain, simpler |
| **Reference context** | ✅ Automatic | ✅ Automatic |
| **Data persistence** | Files | JSON |
| **Multi-user** | Via git | Via git |

**Use both:**
- **Zed** for writing, editing, deep work
- **App** for tracking, logging, quick chat

---

## What's NOT Included (Future Ideas)

These could be added later:

- ❌ Decision log UI (basic CRUD, not built yet)
- ❌ Dashboard/analytics view
- ❌ Calendar/timeline view of projects
- ❌ Gantt chart for dependencies
- ❌ Integration with GitHub issues
- ❌ Export to PDF/slides
- ❌ Multi-user auth (everyone shares the data)
- ❌ Real-time collaboration (no websockets)

The app is **intentionally simple** — just the essentials to get you organized.

---

## Extending the App

The code is designed to be hackable:

### Add a New Data Type

1. Define type in `src/types/index.ts`
2. Add storage functions in `src/lib/storage.ts`
3. Create API route in `src/app/api/[name]/route.ts`
4. Build component in `src/components/`
5. Add tab to main page

### Customize AI Behavior

Edit `src/app/api/chat/route.ts`:
- Change the system prompt
- Load different reference files
- Adjust model parameters

### Change Styling

Edit Tailwind classes in components or `tailwind.config.ts`.

### Add Features

- File upload for assets
- Export to markdown
- Slack notifications
- GitHub integration

---

## Deployment (Optional)

Currently runs locally. To deploy:

**Option 1: Vercel (easiest)**
```bash
npm install -g vercel
cd app
vercel
```

**Option 2: Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY app/ .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
```

**Option 3: Traditional hosting**
```bash
npm run build
npm start  # Production server
```

---

## Maintenance

**Keep reference files current:**
- App reads from `../reference/` on every chat
- Update markdown files, app stays fresh

**Backup data:**
```bash
# Data is in ../data/
cp -r ../data/ ../data-backup/
```

**Update dependencies:**
```bash
cd app
npm update
```

---

## Questions?

- **Setup issues?** → See `app/SETUP.md`
- **Quick start?** → See `APP-QUICK-START.md`
- **Feature docs?** → See `app/README.md`
- **Code questions?** → Components are in `src/`, fully commented

---

## Summary

You now have:
1. ✅ Visual project tracker
2. ✅ Experiment logger
3. ✅ AI chat with GTM context
4. ✅ Simple, hackable codebase
5. ✅ Data persistence (JSON)
6. ✅ Integration with existing repo

**Next:** Run `cd app && npm install && npm run dev` to start using it!
