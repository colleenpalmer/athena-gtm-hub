# 🚀 Start Here

Welcome to your Athena GTM Hub! This repo has everything you need to manage go-to-market strategy.

---

## 🎯 What You Have

### 1. **Reference Library** (`reference/`)
Single source of truth for:
- Positioning & messaging
- ICP & personas  
- Brand voice
- Competitive landscape
- Traction channels

### 2. **Work in Progress** (`work-in-progress/`)
Active GTM projects:
- Educator segment exploration
- Drip campaign planning
- Institutional page revamp

### 3. **Web App** (`app/`)
Interactive dashboard for:
- 📋 Project tracking
- 🧪 Experiment logging
- 💬 AI chat assistant
- 💀 Design deadite summoning

### 4. **Skills** (`.claude/skills/`)
Structured conversations for:
- ICP development
- Launch planning
- Competitive battlecards
- Messaging review

### 5. **Design Context** (`design-context/`)
Canonical Athena brand & voice:
- Brand archetype & personality
- Voice & tone rules
- Audience & positioning
- Powers the design deadites

---

## 🏃 Quick Start (Choose Your Path)

### Path A: Use the Web App (Recommended)

**Best for:** Daily GTM work, tracking projects, logging experiments

```bash
# 1. Navigate to app directory
cd app

# 2. Install dependencies (one-time)
npm install

# 3. Set up your API key
cp .env.example .env.local
# Edit .env.local and add: ANTHROPIC_API_KEY=sk-ant-...

# 4. Run the app
npm run dev

# 5. Open in browser
# http://localhost:3000
```

**See:** `APP-QUICK-START.md` for details

---

### Path B: Use in Zed/Cursor (For AI Chat)

**Best for:** Deep work, editing files, running skills

1. Open this folder in Zed or Cursor
2. Start chatting — the AI automatically loads your reference files
3. Use skills: "Run the icp-persona-development skill"
4. Edit markdown files directly

**See:** `HOW-TO-USE-THIS-REPO.md` for details

---

### Path C: Use Both (Best of Both Worlds)

- **Zed/Cursor** for writing, editing, deep strategic work
- **Web App** for tracking, logging, quick updates

They share the same data — changes sync via git.

---

## 📚 Documentation Guide

| Document | When to Read It |
|----------|----------------|
| `START-HERE.md` | 👈 You are here (overview) |
| `APP-QUICK-START.md` | Getting the web app running |
| `GTM-APP-OVERVIEW.md` | Understanding the app architecture |
| `DEADITES-GUIDE.md` | 💀 How to summon design directors for reviews |
| `HOW-TO-USE-THIS-REPO.md` | Using the repo structure |
| `GTM-PROJECT-TRACKER.md` | See what GTM work is active |
| `QUICK-START.md` | What to work on next |
| `app/README.md` | App features & documentation |
| `app/SETUP.md` | Detailed app installation |
| `app/FEATURES.md` | Complete feature guide |

---

## 🎓 Learning Path

### Day 1: Get Set Up
1. ✅ Read this file
2. ✅ Run the web app (`APP-QUICK-START.md`)
3. ✅ Add your first project
4. ✅ Test the chat assistant
5. ✅ Summon a design deadite (try the brand director!)

### Week 1: Explore
1. ✅ Review `reference/` files (positioning, personas)
2. ✅ Check `work-in-progress/` for active projects
3. ✅ Log an experiment in the app
4. ✅ Try a skill in Zed (e.g., `messaging-review`)

### Ongoing: Use Daily
- **Morning:** Open app, review projects, update status
- **During work:** Use Zed for editing, app for tracking
- **After tests:** Log experiment results
- **Weekly:** Update GTM-PROJECT-TRACKER.md

---

## 🗺️ Repo Map

```
athena-marketing-gtm-hub/
│
├── 📖 START-HERE.md           👈 You are here
├── 📊 GTM-PROJECT-TRACKER.md  Central project dashboard
├── 📘 HOW-TO-USE-THIS-REPO.md Navigation guide
│
├── reference/                  Single source of truth
│   ├── positioning.md
│   ├── messaging-framework.md
│   ├── icp-and-personas.md
│   └── ...
│
├── work-in-progress/           Active GTM work
│   ├── educator-segment/       🟡 In progress
│   ├── drip-campaigns/         🔵 Not started
│   └── institutional-page-revamp/
│
├── data/                       App data (JSON)
│   ├── projects.json
│   └── experiments.json
│
├── app/                        🚀 Web application
│   ├── README.md               App documentation
│   ├── SETUP.md                Installation guide
│   ├── FEATURES.md             Feature details
│   └── src/                    Source code
│
├── decisions/                  Decision log
├── docs/                       Official documentation
├── templates/                  Reusable formats
└── .claude/skills/             AI conversation skills
```

---

## ✅ First-Time Checklist

### Setup
- [ ] Clone/download this repo
- [ ] Install Node.js (for the app)
- [ ] Get Anthropic API key
- [ ] Run the web app
- [ ] Verify chat works

### Content
- [ ] Review `reference/` files
- [ ] Check what's in `work-in-progress/`
- [ ] Read `GTM-PROJECT-TRACKER.md`
- [ ] Understand the educator segment project

### Workflow
- [ ] Add a project in the app
- [ ] Try chatting with the assistant
- [ ] Edit a markdown file in Zed
- [ ] Commit your changes to git

---

## 🆘 Getting Help

### Setup Issues
- **Can't run the app?** → See `app/SETUP.md`
- **API key errors?** → Check `.env.local` exists
- **Dependencies failing?** → Try `rm -rf node_modules && npm install`

### Usage Questions
- **How do I...?** → See `HOW-TO-USE-THIS-REPO.md`
- **What features?** → See `app/FEATURES.md`
- **App architecture?** → See `GTM-APP-OVERVIEW.md`

### Strategy Questions
- **Ask the AI assistant** in the app (GTM Assistant tab)
- **Or use Zed/Cursor** and ask there

---

## 🎯 Your Current Priorities

Based on our conversation, you should focus on:

### 1. Finish Educator ICP (This Week)
- Open `work-in-progress/educator-segment/icp-questions.md`
- Answer the questions
- Use the chat assistant for help
- Draft the persona

### 2. Plan Drip Campaigns (Next Week)
- Open `work-in-progress/drip-campaigns/README.md`
- Start with student trial nurture
- Outline the email sequence

### 3. Track Everything in the App
- Add "Educator ICP" as a project
- Add "Drip Campaigns" as a project
- Update status as you go

---

## 🚀 Ready to Start?

**Fastest path to value:**

```bash
cd app
npm install
cp .env.example .env.local
# Add your API key to .env.local
npm run dev
# Open http://localhost:3000
```

Then:
1. Add your first project
2. Chat with the assistant
3. Start organizing your GTM work

**Questions?** The assistant is there to help. Just ask! 💬

---

## 📝 Quick Commands

```bash
# Run the web app
cd app && npm run dev

# Update dependencies
cd app && npm update

# Backup data
cp -r data/ data-backup/

# View current projects (CLI)
cat data/projects.json

# View experiments (CLI)
cat data/experiments.json
```

---

## 🎉 You're All Set!

You now have:
- ✅ Organized GTM knowledge base
- ✅ Visual project tracker
- ✅ Experiment logging system
- ✅ AI assistant with full context
- ✅ Documentation for everything

**Next step:** Run the app and start tracking your work!

**Need help?** The assistant is always available in the GTM Assistant tab.

Enjoy! 🚀
