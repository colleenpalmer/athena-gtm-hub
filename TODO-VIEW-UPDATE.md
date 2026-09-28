# To Do View — Updated

## What Changed

The "To Do" tab now shows **the next task from each project** in a clean, focused list — not all tasks, just what's next.

---

## How It Works

### What You See

A single list showing:
- ✅ **One task per project** (the first incomplete task)
- 📋 **Project context** (name, status emoji, progress)
- 🎯 **Metadata** (owner, deadline if set)
- ✓ **Checkbox** to mark complete

### What Happens When You Complete a Task

1. Check off the task
2. Task is marked complete
3. View updates automatically
4. **Next task from that project appears** (if any)
5. If no more tasks → project disappears from To Do

---

## Visual Design

```
┌─────────────────────────────────────────────┐
│ To Do                                       │
│ Next action for each project (3 items)     │
├─────────────────────────────────────────────┤
│                                             │
│ ☐  🟡 Educator Segment ICP & Exploration   │
│    Answer ICP questions                     │
│    Owner: You  •  2/5 done                  │
│                                             │
│ ☐  ⚫ Drip Campaign Planning                │
│    Map trial user journey                   │
│    5/5 done                                 │
│                                             │
│ ☐  🔵 FAQ Redux                             │
│    Audit existing FAQs                      │
│    Owner: Marketing  •  0/3 done            │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Features

### Clean, Focused List

- **No clutter** — just what needs doing now
- **Project context** — click project name to see full details
- **Progress indicator** — "2/5 done" shows how many tasks left
- **Status emoji** — 🟡 in-progress, ⚫ active, 🔵 not started, etc.

### Quick Actions

**Check off task:**
- Click checkbox
- Task marked complete
- Next task appears automatically

**Jump to project:**
- Click project name
- Switches to "All" view
- (Could scroll to that project in future)

### Empty State

When all tasks are done:
```
🎉
All caught up!
No pending tasks across your projects.
```

---

## Comparison: Before vs. After

### Before (Original Design)

**Showed:** All projects that have any incomplete tasks  
**Problem:** Too much info, hard to focus  
**Count:** Total incomplete tasks across everything

**Example:**
```
To Do (8 tasks)

[Educator ICP card with 3 tasks showing]
[Drip Campaign card with 5 tasks showing]
```

### After (New Design)

**Shows:** One next task per project  
**Benefit:** Clear focus on immediate next actions  
**Count:** Number of projects with next tasks

**Example:**
```
To Do (2 items)

☐ Answer ICP questions (Educator ICP)
☐ Map trial user journey (Drip Campaign)
```

---

## Use Cases

### Daily Standup

**Before standup:**
1. Click "To Do" tab
2. See your next action for each project
3. Check off what you finished yesterday
4. See what's on deck today

**During standup:**
- "Yesterday I finished the ICP questions"
- "Today I'm mapping the trial journey"
- "Blocked on nothing"

### Weekly Planning

1. Click "To Do"
2. See what's next across all projects
3. Prioritize which projects to focus on
4. Tackle top 3 next tasks

### GTM Check-in

**Question:** "What's our next action on the educator segment?"  
**Answer:** Open To Do → See "Answer ICP questions" under Educator project

---

## Tab Count Logic

**"To Do (3)"** means:
- 3 projects have a next task
- Not 3 total tasks
- Represents projects needing attention

**Why count projects, not tasks?**
- Helps you see **how many initiatives** need work
- More meaningful than raw task count
- Encourages finishing one thing vs. starting many

---

## Interaction Details

### Hover States

**On card:**
- Subtle shadow appears
- Shows it's clickable

**On project name:**
- Text darkens
- Chevron arrow appears (→)
- Indicates you can click to navigate

**On checkbox:**
- Border darkens
- Scales up slightly (110%)
- Clear affordance

### Click Actions

**Checkbox:**
- Marks task complete
- Updates project in background
- Refreshes view
- Next task appears (if any)

**Project name:**
- Switches to "All" filter
- Could auto-scroll to project (future)
- Gives context of full project

### Empty State

**When shown:**
- No projects have tasks, OR
- All tasks are complete

**What it says:**
```
🎉 All caught up!
No pending tasks across your projects.
```

**Encourages:**
- Adding tasks to projects
- Feeling of completion

---

## Data Flow

1. **User checks task**
2. ToDoView → calls `onTaskComplete(projectId, taskId)`
3. ProjectList → updates task in project
4. API → saves to `data/projects.json`
5. State refreshes
6. ToDoView re-renders with next task

**Optimistic update:**
- Could mark complete immediately
- Then save in background
- Would feel faster (not implemented yet)

---

## Files Changed

### New Files
- `app/src/components/ToDoView.tsx` — New dedicated To Do view

### Modified Files
- `app/src/components/ProjectList.tsx` — Switches between grid and To Do view, added task completion handler

---

## Try It Now

```bash
cd app
npm run dev
```

**Test workflow:**

1. Open "Educator Segment ICP" project
2. Add 3 tasks:
   - "Read existing personas"
   - "Answer ICP questions"  
   - "Draft persona doc"
3. Click "To Do" tab
4. See: "Read existing personas" under Educator project
5. Check it off
6. See: "Answer ICP questions" appears (next task)
7. Check that off
8. See: "Draft persona doc" appears
9. Check that off
10. See: Educator project disappears from To Do (all done!)

---

## Future Enhancements

**Could add:**
- Click project name → auto-scroll to that project in All view
- Drag to reorder priority
- Star/pin important next tasks
- Snooze/defer to tomorrow
- Add task directly from To Do view

**For now:** Simple, focused, works.

---

*One next action per project. Clean, clear, actionable.* ✅
