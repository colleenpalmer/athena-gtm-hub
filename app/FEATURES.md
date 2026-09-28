# GTM App Features

## Overview

The app has **three main tabs**, each with specific functionality:

---

## 📋 Tab 1: Projects

**Purpose:** Track all GTM initiatives in one place

### What You See
- List of all active/completed projects
- Visual status indicators (🔵 🟡 🟢 ⚫ ✅ ❌)
- Project details (owner, deadline, next action, folder)

### What You Can Do

#### Add a Project
1. Click "Add Project" button
2. Fill in the form:
   - **Name** (required): e.g., "Educator Segment Exploration"
   - **Status**: Not Started | In Progress | Active | On Hold | Complete | Killed
   - **Owner**: Person responsible
   - **Next Action**: What needs to happen next
   - **Deadline**: Target completion date
   - **Folder**: Link to `work-in-progress/` location
   - **Description**: Brief overview
3. Click "Add Project"

#### Edit a Project
1. Click the edit icon (pencil) on any project
2. Update fields
3. Click "Update Project"

#### Delete a Project
1. Click the delete icon (trash) on any project
2. Confirm deletion

### Use Cases
- **Morning standup:** Review what's in progress, update next actions
- **Weekly planning:** Add new projects, mark completed ones
- **Team sync:** See who owns what, what's blocked
- **Portfolio view:** Filter by status to see active work

---

## 🧪 Tab 2: Experiments

**Purpose:** Track channel tests using the Bullseye framework

### What You See
- List of planned/running/complete experiments
- Status badges (Planned | Running | Complete)
- Results summary (CAC, conversion, fit)
- Scale/Iterate/Kill decisions

### What You Can Do

#### Plan an Experiment
1. Click "Add Experiment"
2. Fill in planning fields:
   - **Date**: When you're running it
   - **Channel**: e.g., "Targeting Blogs", "SEM", "Community Building"
   - **Segment**: D2C | Institutional | Educator | Parent
   - **Hypothesis**: What you're testing and expect to happen
   - **Status**: Planned
3. Click "Add Experiment"

#### Log Results
1. Click edit on a planned/running experiment
2. Fill in results section:
   - **CAC**: Customer acquisition cost ($)
   - **Conversion**: Conversion rate (%)
   - **Fit**: Good | Meh | Bad
   - **Notes**: Key learnings, observations
   - **Decision**: Scale | Iterate | Kill
   - **Status**: Complete
3. Click "Update Experiment"

#### Review History
- See all past experiments
- Filter by segment or channel
- Learn what worked/didn't work
- Avoid repeating failed tests

### Use Cases
- **Before a test:** Plan the experiment, set hypothesis
- **During a test:** Update status to "Running"
- **After a test:** Log results, make Scale/Iterate/Kill decision
- **Quarterly review:** Analyze what channels are working
- **Team learning:** Build institutional memory of what's been tried

---

## 💬 Tab 3: GTM Assistant

**Purpose:** Chat with an AI that knows your GTM strategy

### What You See
- Chat interface (like ChatGPT)
- Message history
- Real-time responses

### What It Knows
The assistant has access to:
- ✅ Your positioning & differentiation
- ✅ ICP and buyer personas
- ✅ Messaging framework
- ✅ Brand voice & tone
- ✅ Traction channels framework
- ✅ Competitive landscape
- ✅ Product catalog
- ✅ Pricing & packaging

### What You Can Ask

#### Strategy Questions
- "What's our positioning vs. ChatGPT?"
- "Which channels should we test for the educator segment?"
- "What's the elevator pitch for institutional buyers?"
- "How does our ICP differ from competitors' targets?"

#### ICP Development
- "Help me finish the educator ICP questions"
- "What questions should I ask to validate this persona?"
- "What are the top 3 channels to reach community college instructors?"

#### Messaging Review
- "Review this landing page copy for brand consistency"
- "Is this email on-brand for the educator segment?"
- "Rewrite this headline using our approved messaging"

#### Experiment Design
- "Design a $500 test for the targeting blogs channel"
- "What metrics should I track for a community building test?"
- "How do I validate demand for the parent segment?"

#### Content Briefs
- "Create a content brief for a blog post about study coaching"
- "What proof points should I use in the institutional pitch?"
- "Draft an FAQ for the educator landing page"

### How It Works
1. Type your question in the input box
2. Click "Send" (or press Enter)
3. Assistant responds with context-aware advice
4. Continue the conversation
5. Click "Clear Chat" to start fresh

### Tips for Better Results
- **Be specific:** "Review this copy" + paste the actual copy
- **Provide context:** "For the educator segment..." or "For institutional buyers..."
- **Ask follow-ups:** Dig deeper on interesting points
- **Reference docs:** "According to our positioning..." checks alignment

---

## Data & Sync

### Where Data Lives
- **Projects:** `../data/projects.json`
- **Experiments:** `../data/experiments.json`
- **Reference:** Reads from `../reference/*.md`

### Syncing with Your Team
1. Commit data files to git
2. Team pulls latest
3. Run the app locally
4. Everyone sees the same projects/experiments

### Backup
```bash
# Manual backup
cp -r ../data/ ../data-backup-$(date +%Y%m%d)/

# Or commit to git regularly
git add data/
git commit -m "Update GTM data"
```

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Send chat message | Enter |
| Focus chat input | / |
| Navigate tabs | Alt+1/2/3 (not implemented yet) |

---

## Mobile / Tablet

The app is responsive and works on:
- ✅ Desktop (best experience)
- ✅ Tablet (iPad, etc.)
- ⚠️ Mobile (works, but cramped)

Recommended: Use desktop for data entry, mobile for viewing.

---

## Performance

### Loading Times
- **First load:** ~1-2 seconds
- **Tab switching:** Instant
- **Chat response:** 2-5 seconds (depends on Claude API)
- **Data saves:** Instant

### Data Limits
- **Projects:** No practical limit (tested with 100+)
- **Experiments:** No practical limit
- **Chat:** 20-30 message history before it slows down (clear to reset)

---

## Security & Privacy

### API Key
- Stored in `.env.local` (never committed)
- Only used server-side (Next.js API routes)
- Not exposed to browser

### Data
- All data stored locally (no cloud database)
- Reference files never leave your machine
- Chat history not persisted (cleared on refresh)

### Network
- Chat calls go to Anthropic API (HTTPS)
- No tracking, analytics, or third-party scripts

---

## Customization Ideas

### Add Your Own Fields
Edit `src/types/index.ts` to add fields:
```typescript
export interface Project {
  // ... existing fields
  priority?: 'high' | 'medium' | 'low';  // Add this
  tags?: string[];                        // Add this
}
```

Then update forms in components.

### Change Colors/Styling
Edit status colors in components:
```typescript
const statusColors = {
  'not-started': 'bg-purple-100 text-purple-800',  // Change this
  // ...
};
```

### Add Filters
Add filter dropdowns to show:
- Only active projects
- Only experiments for a specific segment
- Projects by owner

### Export to Markdown
Add a button to generate markdown reports:
```typescript
function exportToMarkdown(projects: Project[]) {
  const md = projects.map(p => `## ${p.name}\n...`).join('\n\n');
  downloadFile('projects.md', md);
}
```

---

## Troubleshooting

### Common Issues

**"Cannot read property '...' of undefined"**
- Data file is malformed
- Fix: Delete `../data/*.json` and restart

**Chat not responding**
- API key missing or invalid
- Check `.env.local` exists
- Restart: Ctrl+C → `npm run dev`

**Changes not saving**
- Check browser console (F12) for errors
- Verify `../data/` directory exists
- Check file permissions

**Slow performance**
- Clear chat history (long conversations slow down)
- Check network tab for failed requests
- Restart the dev server

---

## Future Enhancements (Ideas)

Not implemented, but could be added:

- [ ] Search/filter for projects and experiments
- [ ] Dashboard with stats and charts
- [ ] Calendar view of deadlines
- [ ] Export to PDF/CSV
- [ ] Bulk actions (archive, delete)
- [ ] Undo/redo
- [ ] Real-time collaboration (websockets)
- [ ] Mobile app version
- [ ] Integration with Slack/email
- [ ] Automated backups
- [ ] Version history for data

---

## Getting Help

- **Setup issues:** See `SETUP.md`
- **Quick start:** See `APP-QUICK-START.md`
- **Code questions:** Components in `src/` have inline comments
- **Bugs:** Check browser console (F12) for error messages

Enjoy using the app! 🎉
