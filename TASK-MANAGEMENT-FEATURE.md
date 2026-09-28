# Task Management Feature

## What's New

Added **task lists** to projects and a **"To Do" view** that shows all incomplete tasks across all projects.

---

## Features

### 1. Tasks Within Projects

Each project can now have its own task list:
- ✅ Add tasks to any project
- ✅ Check off completed tasks
- ✅ Delete tasks
- ✅ Completed tasks collapse into a "X completed" section
- ✅ Task count shows in project card header

**How to use:**
1. Open any project card
2. Expand "Tasks" section (if collapsed)
3. Click "+ Add task"
4. Type task name, press Enter
5. Click checkbox to mark complete

### 2. "To Do" View

New filter tab that shows all projects with incomplete tasks:
- Shows only projects that have open tasks
- Task count in tab badge
- Quick way to see what needs doing across all projects

**How to use:**
1. Click "To Do" tab (between "All" and "In Progress")
2. See all projects with incomplete tasks
3. Check off tasks as you complete them

### 3. Grid Layout (Large Screens)

Projects now display in a 2-column grid on large screens:
- 1 column on mobile/tablet
- 2 columns on desktop (>1024px)
- Better use of screen space
- See more projects at once

---

## UI Details

### Task List Component

**Incomplete tasks:**
- Empty checkbox
- Gray text
- Hover reveals delete (X) button

**Completed tasks:**
- Filled black checkbox with white checkmark
- Strikethrough text
- 50% opacity
- Collapsed under "X completed" disclosure

**Add task:**
- "+ Add task" button
- Inline input appears
- Press Enter to add
- Press Escape to cancel

### Task Counts

**In project card header:**
```
Tasks (2/5)
  └── 2 incomplete out of 5 total
```

**In "To Do" tab:**
```
To Do (8)
  └── 8 total incomplete tasks across all projects
```

---

## Data Structure

Tasks are stored inside each project:

```json
{
  "id": "123",
  "name": "Educator ICP Development",
  "status": "in-progress",
  "tasks": [
    {
      "id": "task-1",
      "projectId": "123",
      "title": "Answer ICP questions",
      "completed": false,
      "createdAt": "2026-09-28T..."
    },
    {
      "id": "task-2",
      "projectId": "123",
      "title": "Draft persona",
      "completed": true,
      "createdAt": "2026-09-28T...",
      "completedAt": "2026-09-28T..."
    }
  ]
}
```

Saved to `data/projects.json` alongside project data.

---

## Keyboard Shortcuts

**In task input:**
- `Enter` — Add task
- `Escape` — Cancel

**General:**
- `⌘ K` — New project (which can have tasks)

---

## Use Cases

### Daily Standup
1. Click "To Do" tab
2. See all open tasks across projects
3. Check off what you finished yesterday
4. See what's left for today

### Project Planning
1. Open a project card
2. Add all the tasks needed for that project
3. Check them off as you go
4. Track progress at a glance

### Weekly Review
1. Click "Complete" filter
2. Expand completed task lists
3. See what shipped this week

---

## Examples

### Educator ICP Project

**Tasks:**
- [x] Read existing personas
- [ ] Answer ICP questions
- [ ] Interview 5 educators
- [ ] Draft persona document
- [ ] Validate with team

**Count:** 1 completed, 4 remaining

### Drip Campaign Project

**Tasks:**
- [ ] Map trial user journey
- [ ] Write email 1 (welcome)
- [ ] Write email 2 (activation)
- [ ] Write email 3 (convert)
- [ ] Set up in email tool

**Count:** 0 completed, 5 remaining

---

## Grid Layout

### Mobile (< 1024px)
```
┌─────────────────┐
│   Project 1     │
└─────────────────┘
┌─────────────────┐
│   Project 2     │
└─────────────────┘
┌─────────────────┐
│   Project 3     │
└─────────────────┘
```

### Desktop (≥ 1024px)
```
┌─────────────┐  ┌─────────────┐
│  Project 1  │  │  Project 2  │
└─────────────┘  └─────────────┘
┌─────────────┐  ┌─────────────┐
│  Project 3  │  │  Project 4  │
└─────────────┘  └─────────────┘
```

Better use of horizontal space on large monitors.

---

## Files Changed

### New Files
- `app/src/components/TaskList.tsx` — Task list component

### Modified Files
- `app/src/types/index.ts` — Added `tasks` to Project type
- `app/src/components/ProjectCard.tsx` — Added task list section
- `app/src/components/ProjectList.tsx` — Added "To Do" filter, grid layout, task handler

---

## Future Enhancements (Not Implemented)

Could add later:
- Task due dates
- Task priority (high/medium/low)
- Task assignment (who's doing it)
- Reorder tasks (drag & drop)
- Task descriptions/notes
- Recurring tasks
- Task dependencies
- Time tracking

For now: **simple checkbox tasks**. Ship first, enhance later.

---

## Try It Now

Run your app:

```bash
cd app
npm run dev
```

1. Open a project card
2. Click "+ Add task"
3. Add a few tasks
4. Check one off
5. Click "To Do" tab to see tasks across projects
6. Resize browser to see grid layout kick in

---

*Now you can track what needs doing, not just what projects exist.* ✅
