# Drip Campaign Planning

**Status:** 🟡 Planning (Hinds student onboarding)

---

## What We're Building

Email drip campaigns (automated lifecycle sequences), triggered by student behavior, for different
audience segments.

---

## Current Focus: Hinds Student Onboarding (Priority 1)

**Audience:** Hinds Community College students (institution-sponsored, free to the student) who have
registered but not yet activated
**Goal:** Registered → activated within 14 days
**Project page:** `hinds-student-onboarding.html` (open in a browser, or http://localhost:3000/drip-campaigns/hinds-student-onboarding.html with the app running)

**Drip path (3 stages, each exits as soon as the step is done):**
1. **Connect Canvas.** Registered but not connected (up to 3 emails)
2. **Open a Study Space.** Connected but hasn't opened one (up to 3 emails)
3. **Activate.** Send a message, chat, create a quiz/flashcards, or start a tutoring session (up to 3 emails)

**Why first:** Hinds is our first sponsored customer and our main proof point for pilot recruitment,
and we're seeing drop-off after registration. See `decisions/DECISION-LOG.md`.

---

## Backlog

### D2C Student Trial Nurture
**Audience:** Individual students on the 7-day free trial
**Goal:** Activate trial users → convert to paid
**Status:** Deferred. Reuse the Hinds onboarding stages once validated.
**Watch-outs from earlier review:**
- Many D2C students can't connect Canvas (their school must opt in since the Aug 14 release), so this
  needs a "can't connect" path.
- No approved student testimonials or efficacy stats yet for a social-proof email.
- Late-trial emails depend on trial mechanics (card up front? auto-convert? App Store vs. web).

### Institutional Pilot Nurture
**Audience:** Institutions who apply for the Fall 2026 pilot
**Goal:** Move them through pilot → paid contract
**Status:** Not started

### Educator Drip (only if validated)
**Status:** Blocked until the educator segment is validated (`work-in-progress/educator-segment/`)

### Parent Drip (low priority)
**Status:** Not planned

---

## Questions to Answer Before Building Any Drip

1. **Who is the audience?** Segment definition, entry criteria, how we identify them
2. **What's the goal?** The one metric that matters
3. **What's the journey?** Stages, and the events that move someone between them
4. **What action do we want?** One primary CTA per email
5. **What proof/content do we need?** Only approved proof points
6. **How do we measure success?** Stage conversion and goal completion; don't rely on opens

---

## Files in This Folder

- `README.md`: this overview
- `hinds-student-onboarding.html`: Hinds onboarding project page, the source of truth for status, drip path, and open questions (Priority 1). App copy lives in `app/public/drip-campaigns/`.
- `templates/email-template.md`: reusable email template

---

## Tools & Workflow

**Triggers:** PostHog (events + person properties from the athena-poc app). See the "PostHog trigger map"
section of `hinds-student-onboarding.html`.
**Sending:** TBD. The app already sends lifecycle email through Resend, which reports `engagement_email_*`
events back to PostHog. Still to decide: a PostHog workflow sending through Resend, or a job in athena-poc.

**Workflow:**
1. Define audience, goal, and drip path here (in Markdown)
2. Draft emails using approved messaging from `reference/messaging-framework.md`
3. Review copy with the `messaging-review` skill
4. Build in email platform
5. Test with a small cohort before rolling out to all

---

## Next Steps

See "Status → Next steps" in `hinds-student-onboarding.html`. Start by answering the blocking questions.
