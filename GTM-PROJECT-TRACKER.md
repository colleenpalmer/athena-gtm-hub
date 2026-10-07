# GTM Project Tracker

> Central dashboard for all active GTM work. Update weekly.
> Last updated: 2026-10-05

## Active Projects

| Project | Status | Owner | Next Action | Deadline | Folder |
|---------|--------|-------|-------------|----------|--------|
| **Educator ICP & Segment Exploration** | 🟡 In Progress | — | Complete ICP definition questions | — | `work-in-progress/educator-segment/` |
| **Drip Campaign: Hinds Student Onboarding** | 🟡 In Progress | — | Decide on a small first version before Oct 19 (owner, way to send, launch date); pull baseline Hinds funnel in PostHog + take engineering asks to product/eng (see `hinds-student-onboarding.html`) | — | `work-in-progress/drip-campaigns/` |
| **Hinds October Signups** | 🟡 In Progress | — | Run two short drips first: D2 (registered, not back) Oct 12 and D1 (opened launch page, never registered) Oct 13. Pick an owner and sender, get the list from product, confirm "free," find out how to reach D1. E1–E8 backlogged (see `hinds-drip-experiments.html`, `hinds-october-signups.html`) | 2026-10-19 (online start) | `work-in-progress/hinds-oct-signups/` |
| **Institutional Page Revamp** | 🟡 In Progress | — | TBD | — | `work-in-progress/institutional-page-revamp/` |
| **Fall 2026 Pilot Recruitment (Institutional)** | 🟢 Active | — | 10–15 pilot goal | Fall 2026 | See institutional folder |

**Status Legend:**
- 🔵 Not Started
- 🟡 In Progress (exploration/draft)
- 🟢 Active (validated, executing)
- ⚫ On Hold
- ✅ Complete
- ❌ Killed

---

## Q4 2026 Priorities

1. **Institutional motion** (primary focus)
   - Finish page revamp
   - Recruit 10–15 Fall 2026 pilots
   - Build sales enablement (pitch deck, one-pager, demo script)

2. **Educator segment exploration** (experimental)
   - Define ICP
   - Test demand (channel tests)
   - Scale/iterate/kill decision by end of Q4

3. **Email lifecycle infrastructure**
   - Hinds student onboarding (connect Canvas → Study Space → activate): first
   - D2C trial nurture (7-day): reuse onboarding stages once validated
   - Institutional pilot nurture
   - Educator drip (if validated)

4. **Reference updates**
   - Add educator persona to `reference/icp-and-personas.md` (if validated)
   - Log channel tests in `reference/traction-channels.md`

---

## Backlog (Not Started)

- Parent segment exploration (low priority — high risk of low activation)
- Content marketing foundation (SEO, blog strategy)
- Community building tests (campus-level density)
- Engineering as marketing (free study tools)

---

## Decisions Pending

| Decision | Options | Need to Answer | Deadline |
|----------|---------|----------------|----------|
| Build educator landing page? | Yes / No / Variant test | Does educator messaging differ enough to warrant separate page? | After ICP validation |

| Parent segment investment | Test / Kill / Hold | Does parent-purchased = student activation? | Q1 2027 |

---

## How to Use This Tracker

1. **Start here** when you have a new GTM question or task
2. Check the **Active Projects** table to see what's in flight
3. Open the relevant **`work-in-progress/` folder** for details (each project's tracking page is an HTML file, built from `templates/project-page.html`)
4. Update **Status** and **Next Action** as work progresses
5. Move validated work to **`reference/`** when finalized
6. Log major decisions in **`decisions/`** folder
