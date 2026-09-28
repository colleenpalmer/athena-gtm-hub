# Project Ranking

## What's New

Projects now have **priority ranking** — reorder them to put important work at the top.

---

## How It Works

### Rank Number

Each project has a `rank` field:
- **Lower number = higher priority**
- Rank 1 = top of list
- Rank 2 = second
- etc.

Projects are automatically sorted by rank when displayed.

---

## Reordering Projects

### Visual Controls

Each project card has **up/down arrows** on the right side:

```
┌─────────────────────────────────┐
│                            ↑    │
│ Project Name               ↓  [✏️][🗑️]
│                                 │
└─────────────────────────────────┘
```

**Click arrows to reorder:**
- ↑ = Move project up (higher priority)
- ↓ = Move project down (lower priority)
- Top project: up arrow disabled
- Bottom project: down arrow disabled

### Instant Updates

- Click arrow
- Ranks swap immediately
- Project moves to new position
- Saves automatically to `data/projects.json`

---

## Current Rankings

Your projects are now ranked in this priority order:

1. **Fall 2026 Institutional Pilot Recruitment** (rank: 1)
   - Status: Active
   - Most urgent - Aug 2026 deadline

2. **Educator Segment ICP & Exploration** (rank: 2)
   - Status: In Progress
   - Foundation for educator motion

3. **Drip Campaign Planning & Build** (rank: 3)
   - Status: Not Started
   - High-impact infrastructure

4. **Institutional Page Revamp** (rank: 4)
   - Status: In Progress
   - Supports pilot recruitment

5. **FAQ Redux for Better Communication Routes** (rank: 5)
   - Status: Not Started
   - Important but not urgent

6. **Launch Updated Educator Landing Site** (rank: 6)
   - Status: Not Started
   - Depends on ICP validation first

---

## Why These Rankings?

**1. Pilot Recruitment (rank 1):**
- Active status
- Concrete deadline (Aug 2026)
- Revenue-generating motion
- Top priority

**2. Educator ICP (rank 2):**
- Already in progress
- Blocks educator landing page (#6)
- Strategic foundation work

**3. Drip Campaigns (rank 3):**
- High ROI potential
- Lifecycle infrastructure
- Benefits all segments

**4. Institutional Page (rank 4):**
- Supports #1 (pilot recruitment)
- Already in progress
- Lower priority than ICP validation

**5. FAQ Redux (rank 5):**
- Important for communication
- Not blocking other work
- Can be done later

**6. Educator Landing (rank 6):**
- Explicitly depends on #2 (ICP validation)
- Can't proceed until persona is validated
- Lowest priority until then

---

## Use Cases

### Weekly Planning

**Reorder based on what you're focusing on:**
1. Open "All" projects view
2. Drag priorities to top (using arrows)
3. Work down the list
4. Reorder next week based on progress

### Strategic Pivots

**Priorities change? Reorder quickly:**
- Pilot recruitment becomes urgent → Move to #1
- Educator validation fails → Move educator landing to bottom
- Drip campaigns delayed → Move down

### Team Alignment

**Everyone sees the same priority order:**
- Shared `data/projects.json` in git
- Team pulls latest
- Same ranking for everyone
- Clear what's most important

---

## Features

### ✅ Always Visible

Rank arrows are **always visible** (not just on hover):
- Edit/Delete hide until hover (keep UI clean)
- Rank arrows always show (frequently used)
- Small, subtle arrows (not distracting)

### ✅ Only in "All" View

Rank arrows **only appear in "All" filter:**
- In Progress / Active / etc. → no ranking (filtered list)
- To Do → no ranking (just shows next tasks)
- All → full ranking controls

**Why?** Only makes sense to rank the full list.

### ✅ Auto-Save

- Click arrow
- Ranks swap
- Saves to JSON automatically
- No manual save needed

### ✅ New Projects

When you create a project:
- Gets rank = 999 (bottom of list)
- Won't interrupt your current priorities
- Move it up manually if urgent

---

## Visual Design

### Arrows

**Placement:** Right side of card, before edit/delete  
**Size:** 14px (small, subtle)  
**Color:** Gray-400 default, gray-700 on hover  
**Disabled state:** 30% opacity

### Layout

```
┌────────────────────────────────────────┐
│ 🟢 Project Name                    ↑ ✏️🗑️│
│ Description here...                ↓    │
│                                         │
│ Next: Do the thing                      │
└────────────────────────────────────────┘
    ↑                                ↑
   Status                       Rank controls
```

---

## Data Structure

```json
{
  "id": "123",
  "name": "Pilot Recruitment",
  "rank": 1,  // ← Added field
  "status": "active",
  ...
}
```

**Sorting logic:**
```typescript
projects.sort((a, b) => {
  const rankA = a.rank ?? 999; // No rank? Goes to bottom
  const rankB = b.rank ?? 999;
  return rankA - rankB; // Lower number first
});
```

---

## Files Changed

### Modified Files
- `app/src/types/index.ts` — Added `rank?: number` to Project
- `app/src/components/ProjectCard.tsx` — Added up/down arrows
- `app/src/components/ProjectList.tsx` — Added rank swap handler, sorting
- `app/src/components/ProjectForm.tsx` — New projects get rank 999
- `data/projects.json` — Added ranks to all 6 projects

---

## Try It Now

```bash
cd app
npm run dev
```

**Quick test:**

1. Open app → Projects tab (should be on "All")
2. See projects in priority order (Pilot Recruitment at top)
3. Click ↓ arrow on "Pilot Recruitment"
4. Watch it swap with "Educator ICP"
5. Click ↑ to move it back up
6. Rankings save automatically

**Confirm in data:**
```bash
cat ../data/projects.json | grep rank
```

Should show ranks 1-6.

---

## Future Enhancements

Could add later:
- Drag & drop reordering (fancier UX)
- Bulk reorder (set all ranks at once)
- Auto-rank by deadline (soonest = highest)
- Auto-rank by status (active > in-progress > not-started)
- "Pin to top" shortcut

For now: **Simple up/down arrows that work.**

---

*Prioritize your GTM work with one click.* ↑↓
