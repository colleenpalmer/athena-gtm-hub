# 🚀 GTM App Quick Start

Get your GTM management app running in 5 minutes.

## Step 1: Install (one-time setup)

```bash
cd app
npm install
```

## Step 2: Add API Key

```bash
# Copy the example file
cp .env.example .env.local

# Open .env.local and add your key:
# ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
```

Get your API key at: https://console.anthropic.com/

## Step 3: Run

```bash
npm run dev
```

Open **http://localhost:3000**

---

## What You Get

### 📋 Projects Tab
Track all your GTM work:
- Educator segment exploration
- Drip campaign planning
- Institutional page revamp
- Channel tests

**Features:**
- Add/edit/delete projects
- Set status (not-started → in-progress → complete)
- Track owner, deadline, next action
- Link to work-in-progress folders

### 🧪 Experiments Tab
Log channel tests (Bullseye framework):
- Plan hypothesis-driven tests
- Track CAC, conversion, fit
- Make Scale/Iterate/Kill decisions
- Build your channel test history

**Auto-syncs with** `reference/traction-channels.md`

### 💬 GTM Assistant Tab
Chat with AI that knows your strategy:
- Loaded with your positioning, personas, messaging
- Ask about channels, copy, experiments
- Get strategic GTM advice
- Same intelligence as Zed, different interface

---

## Quick Tour

### Add Your First Project

1. Click **Projects** tab
2. Click **Add Project**
3. Fill in:
   - Name: "Educator ICP Development"
   - Status: "In Progress"
   - Next Action: "Answer ICP questions"
   - Folder: "work-in-progress/educator-segment/"
4. Click **Add Project**

### Log Your First Experiment

1. Click **Experiments** tab
2. Click **Add Experiment**
3. Fill in:
   - Channel: "Targeting Blogs"
   - Segment: "Educator"
   - Hypothesis: "Educator newsletters will drive qualified signups"
   - Status: "Planned"
4. Click **Add Experiment**

### Chat with the Assistant

1. Click **GTM Assistant** tab
2. Try asking:
   - "Help me finish the educator ICP questions"
   - "What channels should we test for educators?"
   - "What's our positioning vs ChatGPT?"
   - "Review this copy for brand consistency: [paste copy]"

The assistant has access to all your reference files and can help with strategy.

---

## Data Storage

Everything is saved automatically to `../data/`:
- `projects.json` — Your GTM projects
- `experiments.json` — Channel test results
- `decisions.json` — Decision log (future)

These files are version-controlled (optional) so your team stays in sync.

---

## Troubleshooting

### Chat not working?
- Make sure `.env.local` exists with `ANTHROPIC_API_KEY`
- Restart: Ctrl+C, then `npm run dev`

### Changes not saving?
- Check browser console (F12) for errors
- Verify `data/` directory exists one level up

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

---

## Next Steps

1. ✅ Run the app
2. ✅ Add your first project
3. ✅ Test the chat
4. 📝 Import existing work from `work-in-progress/` folders
5. 🧪 Start logging experiments
6. 🎨 Customize the app to fit your workflow

---

## Need Help?

- **Full guide:** `app/README.md`
- **Setup issues:** `app/SETUP.md`
- **Code:** `app/src/` (it's simple and hackable!)

Enjoy! 🎉
