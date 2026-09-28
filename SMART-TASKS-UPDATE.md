# Smart Tasks Update

## What's New

Tasks are now **fully editable, auto-suggested, and intelligently highlighted** in project cards.

---

## New Features

### 1. ✏️ Inline Task Editing

**Click to edit any task:**
- Hover over a task → Edit icon appears
- Click edit → Inline input appears
- Type new text, press Enter to save
- Or press Escape to cancel

**Before:** Could only add/delete tasks  
**After:** Full CRUD (Create, Read, Update, Delete)

---

### 2. ✨ Auto-Suggested Tasks

**For new projects:**
- Type project name in form
- App detects project type
- Suggests relevant tasks automatically
- One click to add them all

**Pattern matching:**
- "ICP" / "Persona" → 5 ICP development tasks
- "Drip" / "Email" → 6 email campaign tasks
- "Landing" / "Page" → 6 landing page tasks
- "Launch" / "GTM" → 6 launch planning tasks
- "FAQ" / "Docs" → 5 documentation tasks
- "Pilot" / "Beta" → 6 pilot program tasks
- Default → 5 generic GTM tasks

**Example:**
```
Project name: "Educator ICP Development"
                     ↓
Auto-suggests:
✓ Review existing customer data
✓ Answer ICP definition questions
✓ Interview 5-10 target customers
✓ Draft persona document
✓ Validate with team
```

---

### 3. 🎯 Next Task Highlighting

**In project cards:**
- First incomplete task is highlighted
- Accent-colored background
- Bold text
- Arrow icon (→)
- Stands out visually

**"View all" toggle:**
- Default: Shows next task only (highlighted)
- Click "View all": Shows all tasks
- Click "Show next only": Back to highlighted view

**Before:** All tasks looked the same  
**After:** Clear visual priority

---

### 4. 📋 Pre-Populated Tasks for Existing Projects

**All 6 existing projects now have smart task lists:**

**Educator ICP:**
- Review existing customer data ✓ (completed)
- Answer ICP definition questions ← next
- Interview 5-10 target educators
- Draft educator persona document
- Validate persona with team

**Drip Campaigns:**
- Map trial user journey and trigger points ← next
- Define sequence goals and KPIs
- Write email copy (all messages)
- Review copy with stakeholders
- Build sequence in email tool
- Test with small cohort

**Institutional Page:**
- Draft messaging and institutional value prop ← next
- Create wireframes/mockups
- Write all page copy
- Design and build page
- Review with design team
- Set up analytics and tracking

**Educator Landing:**
- Draft educator-specific messaging ← next
- Create wireframes/mockups
- Write all page copy
- Design and build page
- Review with design team
- Set up analytics

**FAQ Redux:**
- Audit existing FAQs and docs ← next
- Identify common questions/gaps
- Draft new/updated content
- Review with support team
- Publish and organize

**Pilot Recruitment:**
- Define pilot goals and criteria ✓ (completed)
- Recruit 10-15 pilot institutions ← next
- Create onboarding materials
- Launch pilot program
- Collect feedback and iterate
- Analyze results

---

## Visual Design

### Highlighted Next Task

```
┌─────────────────────────────────┐
│ Tasks (4/5)      [View all]     │
├─────────────────────────────────┤
│                                 │
│ [Highlighted with accent bg]   │
│ ☐  → Answer ICP questions       │
│      ^^^ Bold, arrow, accent    │
│                                 │
└─────────────────────────────────┘
```

### Edit Mode

```
Hover:
☐  Answer ICP questions  [✏️] [✗]
                          ↑    ↑
                        Edit Delete

Click edit:
☐  [___________________] [✓] [✗]
   Type new text...      ↑    ↑
                       Save Cancel
```

### Auto-Suggest Prompt

```
┌─────────────────────────────────────┐
│ ✨ Add suggested tasks?             │
│                                     │
│ Based on "Educator ICP", we can add │
│ 5 common tasks to get you started.  │
│                                     │
│ [Yes, add suggested tasks]          │
│ [No thanks, I'll add my own]        │
└─────────────────────────────────────┘
```

---

## How It Works

### Editing Tasks

1. **Start edit:** Click edit icon on hover
2. **Type:** Input field appears with current text
3. **Save:** Press Enter or click checkmark
4. **Cancel:** Press Escape or click X
5. **Auto-save:** Updates project in background

### Using Suggested Tasks

1. **Create new project**
2. **Type project name** (e.g., "Email Nurture Campaign")
3. **Suggestion appears** automatically
4. **Click "Yes, add suggested tasks"**
5. **Tasks added** to project
6. **Customize:** Edit, delete, or add more

### Next Task Highlighting

1. **Open project card**
2. **Tasks section** shows first incomplete task highlighted
3. **Click "View all"** to see all tasks
4. **Click "Show next only"** to return to highlighted view
5. **Complete task** → Next one becomes highlighted

---

## Pattern Matching Examples

| Project Name | Detected Type | Tasks Added |
|--------------|---------------|-------------|
| "Educator Persona Research" | ICP/Persona | 5 ICP tasks |
| "Trial Email Sequence" | Email/Drip | 6 email tasks |
| "New Homepage" | Landing/Page | 6 page tasks |
| "Q3 Product Launch" | Launch/GTM | 6 launch tasks |
| "Support Documentation" | FAQ/Docs | 5 docs tasks |
| "Beta Program Setup" | Pilot/Beta | 6 pilot tasks |
| "Competitive Analysis" | Generic | 5 generic tasks |

---

## Files Changed

### New Files
- `app/src/lib/taskSuggestions.ts` — Pattern matching and task generation

### Modified Files
- `app/src/components/TaskList.tsx` — Added inline editing, highlight support
- `app/src/components/ProjectCard.tsx` — Added view all/next toggle, highlight prop
- `app/src/components/ProjectForm.tsx` — Added auto-suggest prompt
- `data/projects.json` — Added smart tasks to all 6 existing projects

---

## Try It Now

```bash
cd app
npm run dev
```

### Test Editing

1. Open "Educator ICP" project
2. Hover over "Answer ICP definition questions"
3. Click edit icon (pencil)
4. Change text to "Complete ICP questionnaire"
5. Press Enter → Saved!

### Test Auto-Suggest

1. Click "New Project"
2. Type name: "Customer Onboarding Email Series"
3. See auto-suggest appear
4. Click "Yes, add suggested tasks"
5. See 6 email campaign tasks added

### Test Highlighting

1. Open any project with multiple tasks
2. See first task highlighted (accent background, arrow)
3. Click "View all" → See all tasks, no highlight
4. Click "Show next only" → Back to highlighted
5. Check off first task → Next one gets highlighted

---

## Benefits

**For you:**
- ✅ Don't start with blank slate (auto-suggestions)
- ✅ Edit tasks without recreating them
- ✅ Clear visual priority (next task highlighted)
- ✅ Faster project setup

**For your team:**
- ✅ Consistent task structure across projects
- ✅ Common terminology and phases
- ✅ Know exactly what's next at a glance

---

*Smart task management that adapts to your GTM workflows.* ✨
