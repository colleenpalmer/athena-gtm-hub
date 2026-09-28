# Decision Log

> Record major GTM decisions, experiments, and their outcomes. Keep this updated so you don't repeat failed tests or forget what worked.

## How to Use This Log

- **Add an entry** when you make a significant decision (launch a channel, kill a segment, choose a messaging direction)
- **Update with results** when you learn something from a test
- **Reference this** before starting new work to see what's been tried

---

## Template for New Decisions

```markdown
### [Decision Title]
**Date:** YYYY-MM-DD  
**Context:** [Why did this come up?]  
**Options considered:**
1. [Option A]
2. [Option B]
3. [Option C]

**Decision:** [What we chose]  
**Reasoning:** [Why we chose it]  
**Owner:** [Who's responsible]  
**Success criteria:** [How we'll know if it worked]  
**Status:** Pending / In Progress / Validated / Killed

**Update [date]:** [Results, learnings, next steps]
```

---

## Active Decisions

### Educator Segment: Build Separate Landing Page?
**Date:** 2026-09-28  
**Context:** Exploring educator market without institutional buy-in. Need to decide if educators need distinct messaging/GTM.

**Options considered:**
1. Build dedicated educator landing page
2. Use existing student page with UTM tracking
3. Create minimal headline variant (A/B test)

**Decision:** On hold until ICP is validated  
**Reasoning:** No point building infrastructure before we know if educators care. Will test demand first with existing student page + targeted outreach.

**Success criteria:** 
- If educators convert at same rate as students → no separate page needed
- If educator-specific messaging lifts conversion >20% → build dedicated page
- If educators don't sign up or activate → kill segment

**Status:** Pending ICP validation  
**Next checkpoint:** End of Q4 2026

---

### Drip Campaign Priority Order
**Date:** 2026-09-28  
**Context:** Multiple audience segments need email nurture. Limited bandwidth.

**Options considered:**
1. Build all campaigns at once
2. Prioritize by revenue impact
3. Prioritize by volume

**Decision:** Phased approach
1. **Phase 1 (Now):** D2C student trial nurture (highest volume, needs optimization)
2. **Phase 2 (Next):** Institutional pilot nurture (highest revenue per user)
3. **Phase 3 (If validated):** Educator drip
4. **Backlog:** Parent drip (low priority — activation risk)

**Reasoning:** Student trial conversion directly impacts revenue and we have volume to optimize. Institutional pilot is higher-touch but lower volume. Educator/parent are still hypotheses.

**Owner:** TBD  
**Status:** Approved, not started

---

## Past Decisions (Archive)

_[Move completed/killed decisions here for reference]_

---

## Channel Test Results (Quick Reference)

| Date | Channel | Segment | Result | Decision |
|------|---------|---------|--------|----------|
| _[YYYY-MM-DD]_ | _[Channel name]_ | D2C / Institutional / Educator | CAC: $X, Conv: Y%, Fit: Good/Meh/Bad | Scale / Iterate / Kill |

_[Detailed results should live in `reference/traction-channels.md` — this is just a quick log]_
