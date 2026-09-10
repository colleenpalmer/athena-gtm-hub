# Messaging Framework

> The approved language layer built on top of positioning. Use these words consistently.
> Refine with `positioning-messaging`; pressure-test copy with `messaging-review`.
> Sourced from `docs/`.

## Value proposition (headline)
Athena is an AI study coach that knows your courses and knows you — so it tells you
what to study next and coaches you until you actually understand it.

## Elevator pitch (30 seconds)
Athena works from your real course content — lecture notes, assignments, and upcoming
exams, not generic material — and tracks what you've mastered and where your gaps are,
so it never wastes your time on what you already know. It guides you to the answer
instead of handing it over, so you walk in ready because you understand the material,
not just got past it. It's also the only study tutor that connects directly and securely to
Canvas, so it reads your materials, deadlines, and exams automatically — nothing to
upload or set up.

## Messaging pillars

### Pillar 1: Knows your class (Canvas-native, zero setup)
- **Message:** Athena reads your real Canvas courses, materials, deadlines, and exams
  automatically — nothing to upload or configure. (Surfaced today as Study Spaces.)
- **Why it matters:** Studying starts instantly and stays grounded in what's actually due.
- **Proof points:** Only study tutor with a direct, secure Canvas connection; read-only
  OAuth2; "watch — it just knows" demo moment.
- **Best for persona(s):** Student (frictionless); Institution (secure, same access the
  student already has).

### Pillar 2: Knows you (no wasted effort)
- **Message:** Athena tracks what you've mastered and where you're shaky, so you never
  waste a minute studying what you already know.
- **Why it matters:** Efficient, targeted studying — walk in ready.
- **Proof points:** Rigorous mastery model (active recall, mastery tracking, ZPD
  scaffolding); gap-tracking ("you've nailed three, let's drill the two weak ones").
- **Best for persona(s):** Student (personal); Institution (advising-relevant signal).

### Pillar 3: Coaches, doesn't cheat (real understanding)
- **Message:** Athena guides you to the answer instead of handing it over, so you
  actually get it — not just get past it.
- **Why it matters:** You retain the material and do better in the classes that matter.
- **Proof points:** Coach-don't-tell method; won't produce submission-ready work;
  pushes practice and recall over answers.
- **Best for persona(s):** Student (retention/results); Institution (academic-integrity story).

### Pillar 4: Safe and sanctioned (institutional register)
- **Message:** The safest place to study with AI is a vetted tool built by the company
  that runs your LMS.
- **Why it matters:** Moves ungoverned studying into a product with real safeguards.
- **Proof points:** Read-only, revocable Canvas access; no training of external models;
  conversations grounded in the student's own permissions; a partner you can call.
- **Best for persona(s):** Institution (primary); reassurance layer for Students.

## Value proposition by persona
| Persona | Their pain | Our message | Primary CTA |
|---|---|---|---|
| Student (undergrad) | "I can't tell what I don't know, and I cram" | "Athena tells you the right thing to study next and coaches you until you get it" | Start 7-day free trial |
| Institution (success center / advising / Canvas admin) | Students use ungoverned AI; no visibility, IP/privacy risk, unbounded cost | "A safer, sanctioned alternative that's secure, grounded, and covers student cost" | Join the Fall 2026 pilot |

## Boilerplate (approved — needs sign-off before external use)
Athena is a personal AI study coach from Instructure, the company behind Canvas.
Athena connects securely to a student's own Canvas courses to tell them what to study
next and coach them to real understanding — guiding them to the answer instead of
handing it over. Athena is read-only, never trains external models on student data, and
is available directly to students or through institution-sponsored subscriptions.
*(Flag: confirm exact legal/boilerplate wording with Instructure comms before publishing.)*

## Proof point library
- 90% of higher-ed students already use AI in class at least occasionally (Instructure
  research, released at InstructureCon).
- Hinds Community College is offering Athena to all its students this Fall (first
  institution customer).
- Read-only Canvas OAuth2; OAuth credentials encrypted at rest (AES-256-GCM);
  disconnecting revokes access.
- No training of external models on Athena data; every AI provider is contractually
  barred from training on it.
- **Gap:** no published efficacy stats or named student testimonials yet — flag as
  "needs proof" until validated. (Do not invent metrics or customer quotes.)

## Language guardrails
- Don't lead with "AI-powered" in student-facing copy. AI is the engine, not the badge.
- Banned/off-brand words: *harness, unlock, leverage, empower, future-proof*
  (use "future-ready"). Avoid: *crush it, grind, actually, falling behind, as I mentioned,
  let's see if, that's not quite right, drill me, dominate, hustle, killing it.*
