# Product Catalog

> What we actually sell, in plain language. Keep feature claims honest and current.
> Sourced from `docs/`. Don't promise unreleased features or dates.

## Product / offering: Athena
- **What it is:** A personal AI study coach that knows your courses and knows you — it
  tells you what to study next and coaches you until you actually understand it.
- **Who it's for:** Undergraduates who want to learn the material (D2C); institutions
  sponsoring student access (community colleges and undergraduate universities).
- **Core problem it solves:** Students can't see their own gaps, have no durable study
  system, and have material scattered across slides, notes, and Canvas — while existing
  tools either hand over answers (no retention) or are generic and manual.
- **Key capabilities:**
  - Canvas-native course context (Study Spaces) → studying grounded in your real
    courses, deadlines, and exams with zero upload/setup.
  - Mastery & gap-tracking → no wasted effort on what you already know.
  - Coach-don't-tell guidance → real understanding; walk in ready.
  - Study modes (chat, quizzes, flashcards, study plans) → interchangeable means to
    the one job: "what should I work on next?"
- **Key features (details):**
  - **Canvas connection:** Direct, secure OAuth2; read-only (no write method — can't
    post, edit, grade, or submit). Encrypted OAuth credentials at rest (AES-256-GCM);
    disconnecting revokes access. No LTI install; runs on an Instructure-managed
    developer key; unaffected by personal-access-token restrictions.
  - **Institution opt-in:** Since the Aug 14 (2026) Canvas release, students can connect only
    if their institution has enabled the Athena–Canvas connection. Root and subaccount control,
    plus course-level enablement (rolling out October 2026), are set by Canvas admins.
    Instructors can't enable their own courses yet; they work with their admin.
  - **What it reads (student's own permissions only):** enrollments, course info, syllabi,
    files, assignments, submissions/submission status, modules, pages, planner items,
    todo items, quizzes, and the student's own grades. Can read other GET endpoints
    when a student asks (e.g. an announcement).
  - **What it never does:** never writes to Canvas; never accesses endpoints with other
    students' data (e.g. discussions, peer reviews) even if the student could; never uses
    an admin credential; never shares one student's data with another; can't see
    unpublished quiz questions (not visible to the student = not visible to Athena).
  - **AI models:** Uses a mix of models chosen per task; not tied to one named model.
    Every provider is contractually barred from training on Athena data.
- **Integrations / ecosystem:** Canvas LMS (Instructure); Stripe and Apple App Store
  for payments. *by Instructure* endorsement; *powered by IgniteAI* (institutional register).
- **Limitations / not-yet (honest gaps):**
  - Canvas connection is optional — about half of current users don't connect it and use
    Athena as a general study tool. Athena is fully capable without it (tutoring, knowledge
    mapping, personalization, knowledge that builds over time). The connection is a head
    start: Study Spaces and study objectives are generated right away, and Athena picks up
    grade/assignment context, so students do less manual uploading.
  - Institutional admin controls, usage/visibility reporting, and course-level
    configuration are **in active design/discovery** — do not promise features or dates.
  - U.S.-only data hosting today; regional hosting is the kind of capability that comes as
    the product matures (don't promise it).
- **Status:** Generally available (not yet formally launched / no major marketing push).

## Study modes (means to the one job)
Chat, quizzes, flashcards, and study plans are interchangeable ways to deliver the one
job — orientation ("the right next thing to work on, for you, right now"). Lead with the
job, not the mode.

## Packaging summary
Two paths to access: an individual consumer subscription, and institution-sponsored
subscriptions (free to the student). See `reference/pricing-and-packaging.md`.

## Roadmap themes (shareable, no dates/promises)
- Institutional controls for the Canvas connection (opt-in at root, subaccount, and course level).
- Instructor visibility, co-designed with faculty while protecting student privacy.
- Privacy-preserving, admin-facing usage reporting for institution-sponsored subscriptions.
- Exploring course-level configuration options for instructional designers/instructors.
> Guidance: describe these as "in design/discovery." Never promise dashboards, admin
> controls, or specific dates.
