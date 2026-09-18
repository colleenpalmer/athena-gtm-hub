# Project: Athena — Enablement Guide

> Source: `Project Athena - Enablement Guide.docx` (Markdown mirror — keep in sync with the .docx)

**Who this is for:** Anyone representing us — conference booth staff, partners, field team, AEs — who may get questions about Athena.

**How to use it:** Skim the "3 things" and the pitch before the event. Use the FAQ answers as spoken talking points, not a script to recite. When in doubt, use the escalation path at the bottom — a warm handoff always beats a wrong answer.

**Athena Team to contact (feel free to contact all)**

[**Trey Bean**](mailto:trey@instructure.com) [**Jason Madsen**](mailto:jason.madsen@instructure.com)[**Colleen Palmer**](mailto:colleen.palmer@instructure.com)

**Slack Channel: #incubation-athena**

### If you only remember 3 things

- **Athena is an AI personalized study tutor**  — it tells you what to study next and coaches you until you actually understand it. It guides; it never hands over answers or produces submission-ready work.

- **It's the safe, sanctioned alternative to what students already do.** 90% of higher-ed students already use AI in class at least occasionally — mostly by pasting course content into ungoverned consumer chatbots learning from those materials. Athena moves that studying into a product with real safeguards, built by the company that runs their LMS, and never trains LLMs off of its student’s materials or Canvas connections.

- **Institutions have control and a path to more.** Canvas access is read-only, student-authorized, and revocable; institutions control the Canvas connection via an opt-in; and institution-sponsored subscriptions (free to students) are available now, with a pilot program actively recruiting.

### The approved pitch

**One-liner (10 seconds):** "Athena is a personal AI study coach from Instructure Foundry. It tells students the right thing to study next and coaches them until they truly understand it — guiding them to the answer instead of handing it over. And when their school turns on the Canvas connection, Athena works securely from their real courses, deadlines, and exams."

**Elevator pitch (30 seconds):** "Athena works from a student's real course content — lecture notes, assignments, upcoming exams — and tracks what they've mastered and where their gaps are, so it never wastes time on what they already know. It guides them to the answer instead of handing it over, so they walk in ready because they understand the material, not just got past it. When a school enables the Canvas connection, all of that context comes in automatically and securely — nothing to upload or set up. It's read-only, and student data never trains external models."

### Read the room: two audiences, two registers

Same truth, different emphasis. Never pitch both with equal weight to the same listener.

| **If you're talking to…** | **Lead with…** | **Their likely concern** |
|---|---|---|
| **Students** | Results and "no wasted effort": it knows your classes, tells you what to study next, you walk in ready. Don't lead with "AI-powered." | "Will this actually help me do better?" |
| **Institutions** (Canvas admins, advising, success centers, faculty) | Safety and partnership: read-only, student-authorized, revocable, no model training, opt-out control, a partner you can call. | "Can students really connect this without our approval?" |

**The one storyline that works for both:** students are already studying with AI — ungoverned, invisible, and risky. Athena moves that same behavior into a vetted tool with real safeguards.

### Key messages (the four pillars)

- **Knows your class.** Reads* real Canvas courses, materials, deadlines, and exams automatically — nothing to upload or configure. (Surfaced in product as Study Spaces.)

- **Knows you.** Tracks what you've mastered and where you're shaky — no wasted effort studying what you already know.

- **Guides, doesn't cheat.** Guides you to the answer instead of handing it over. Won't produce submission-ready work; pushes practice and recall over answers.

- **Safe and sanctioned.** Read-only, revocable Canvas access via standard OAuth2; no training of external models; built and operated by the company behind Canvas.

### Quick facts

| **Question** | **Answer** |
|---|---|
| What is it? | Personal AI student study coach.First Instructure Foundry project. |
| Who's it for? | Undergrads who genuinely want to learn the material. Continuing ed students coming back into school after a long break. |
| Price | $5/month after a 7-day free trial, or free to students through an institution-sponsored subscription. |
| Where to sign up | studywithathena.com |
| Canvas connection | Optional; student-authorized via standard OAuth2 (read-only). |
| Available now? | Yes — live for individuals and institutions. First institutional customer: Hinds Community College (short pilot in early spring, currently moved to offer to all students now). |
| Pilots | Actively recruiting institutions for 2026/2027 pilots. |
| Data posture | U.S.-based; encrypted in transit and at rest; never used to train external models; never sold. |

### FAQ — spoken answers for the floor

Keep answers short and confident. These are the questions you're most likely to get.

#### From institutions

**"Can students really connect this to our Canvas without our approval?"** "Students authorize access to their own Canvas view — the same standard OAuth flow other integrations use, within permissions they already have. Athena only ever sees what Canvas would show that student directly, and it's read-only. Institutions have the choice to allow Athena to connect: root account admins can opt in of the Athena–Canvas connection. Starting in early October, access can be root, subaccount, and course level, for more permission control."

**"How do we opt out?"** "Institutions are automatically opt-out. There's an institutional opt-in that root account admins can set. When a school does not opt for the connection, students see a message that their institution doesn't support the connection, and Athena is blocked from that Canvas instance. I can connect you with the Athena team for specifics."

**"What data does Athena read?"** "Only what the student can already see, through read-only Canvas API endpoints — courses, syllabi, assignments, modules, pages, files, planner items, quizzes, and the student's own grades and submission status. It never writes to Canvas, never sees another student's grades or submissions, and blocks anything containing other students' content — like discussions — even when the student can read it in Canvas."

**"Is our content used to train AI models?"** "No. Athena data is never used to train external models — every AI provider we use is contractually barred from it."

**"Will Athena tell students what's on the exam?"** "Athena can't see anything an instructor hasn't released to the student. Unpublished quiz questions aren't visible to the student in Canvas, so they aren't visible to Athena."

**"What about FERPA?"** For **sponsored institutions**: "The school designates Instructure as a school official under FERPA as part of the agreement." For **individual sign-ups**: "The student is retrieving what they can already see and choosing to use a study tool with it — the institution's FERPA posture is essentially unchanged." *(Never say "FERPA compliant" or "FERPA certified" — see guardrails.)*

**"How many of our students are using it?"** "Adoption is very early and deliberately small — we haven't done a real launch yet. Actively looking for institutional pilot partners. Direct to Athena team for more information on pilots.

**“Can institutions allow students to connect Athena without an institutional subscription?”** Yes! An institutional subscription isn't required. Institutions can enable the Canvas connection for students who subscribe to Athena on their own — the student pays for their own Athena account, and the connection grounds their studying in their actual courses, materials, and deadlines.

**"Doesn't this depend on access tokens? We restrict those."** "No — Athena connects through standard OAuth2 authorization, not personal access tokens, so token restrictions don't affect it. There's also no LTI install and no institutional credential anywhere in the product."

**"Why wasn't there an opt-out from the start?"** "We believe the student-authorized model is sound — Athena reads only what a student can already see. We built with a deliberately small student cohort to validate the product. After InstructureCon, institutions told us clearly they want the choice, and partnership matters more than being right — so we built the control. That said, blocking Athena doesn't stop students from using AI; it just sends them back to tools with no safeguards and no visibility."

#### From students

**"What does it actually do?"** "Athena coaches you on whatever you're studying — it tracks what you know, finds your gaps, and works with you until you get it. Connect Canvas and it goes further: your real materials, deadlines, and exams, automatically. No uploads, no setup."

**"Is this going to just give me answers?"** "No — and that's the point. It guides you to the answer instead of handing it over, so you walk into the exam ready because you understand it. If you want an answer machine, this isn't it."

**"How much is it?"** "$5 a month after a 7-day free trial — or free if your school sponsors it. Sign up at studywithathena.com."

**"Do I have to connect Canvas?"** “No, it's optional — and always in your control. You own your Athena account and carry it with you regardless of your school. But if your institution allows the connection, there's more magic: Athena reads your real courses and deadlines automatically, and access is read-only and revocable anytime from your settings.”

**"Is my data safe?"** "Yes. The Canvas connection is read-only, you can disconnect anytime, and your conversations are never used to train external AI models. Your grades, chats, and progress are never shared with other students."

### Objection handling

| **They say** | **You say** |
|---|---|
| "This feels like it helps students cheat." | "It's built to do the opposite. Athena guides students *to* the answer instead of handing it over — it preserves the productive struggle that's missing from the apps students use today, because that struggle is where learning happens. We worked with learning scientists from the beginning to build a real tutoring experience: practice, recall, and coaching until the student genuinely understands it." |
| "Students shouldn't connect tools to Canvas without us." | "Institutions control the Canvas connection — there's a root-admin opt-in. But consider the alternative: today students paste your course content into consumer chatbots you can't see or call anyone about. Athena is governed, read-only, doesn’t train AI models, and revocable." |
| "We'll just block it." | "That's your call, and the control exists. But blocking Athena doesn't stop students from using AI — it just sends your course content into chatbots you can't see or control. Athena keeps that content governed: read-only, revocable, and never used to train external models.” |
| "Another AI tool — what makes this different?" | "Two things no one else combines: it's the only study tutor with a direct, secure Canvas connection — so it knows your actual class with zero setup — and it has a rigorous mastery model, so it knows *you*. And it coaches instead of answering." |
| "Can we get dashboards / admin controls?" | "Usage visibility and reporting are in active design for institution partners. I can't promise features or dates, but the pilot program is exactly where institutions shape this — want an intro to the team?" |

### Guardrails — what NOT to say

These are firm. When unsure, hand off rather than improvise.

- ❌ **Never say "FERPA compliant" or "FERPA certified."** No such certification exists, and FERPA obligations sit with the institution. Use the two approved framings in the FAQ above.

- ❌ **Never promise features or dates** — no dashboards, admin controls, usage reporting, or configuration commitments. Say "in active design / in discovery" and offer an intro to the Athena team.

- ❌ **Never share internal adoption numbers.** Say adoption is early and deliberately small; offer to have the Athena team pull an institution's own count.

- ❌ **Never present Athena as part of Canvas**, endorsed by an institution, or required for coursework. Athena is an *Instructure Foundry* project.

- ❌ **Never invent metrics, customers, or discounts.** We have no published efficacy stats or named student testimonials yet — don't fill the gap. No discounting or annual/volume terms exist to quote.

- ❌ **Don't lead with "AI-powered"** with students — AI is the engine, not the badge. ("Powered by IgniteAI" belongs in the institutional register only.)

- ❌ **Avoid house-banned words:** harness, unlock, leverage, empower, future-proof (use "future-ready"), crush it, grind, hustle, dominate, killing it.

- ❌ **Don't apologize for the student-authorized model.** Explain it well, answer every question, stay confident and principled.

### Proof points you may cite

- **90% of higher-ed students already use AI in class at least occasionally** (Instructure research, released at InstructureCon).

- **Hinds Community College** — first institutional customer, offering Athena to all its students this Fall.

- **Security posture:** read-only Canvas access via standard OAuth2; OAuth credentials encrypted at rest (AES-256-GCM); disconnecting revokes access; no LTI install; no institutional credential anywhere in the product.

- **No training of external models** on Athena data — every AI provider is contractually barred from it.

- **U.S.-based service** — data stored and processed in the U.S., encrypted in transit and at rest; Canvas-sourced data never shared with third parties for their own use, never sold.

### Calls to action

| **Audience** | **CTA** |
|---|---|
| Student | "Start a 7-day free trial at studywithathena.com." |
| Institution — exploring | "We're recruiting institutions for pilots — smaller, limited deployments where you help shape the product, including institutional features. Can I connect you with the team?" |
| Institution — ready | "Institution-sponsored subscriptions are available today — free to your students. Let me get you to the Athena team." |

### Escalation — when to hand off

Hand off (don't improvise) for:

- **Security/legal specifics** beyond this doc (contracts, DPAs, detailed FERPA questions) → Athena Team

- **An institution's connection count** or account-specific data → Athena team

- **Press/analyst questions** → Instructure Foundry team #foundry-questions

- **Pilot or sponsored-subscription pricing** → Athena team and can share with lead the [Athena pilot one-pager](https://drive.google.com/file/d/1v5jaoIML6Xcx8TNzJSu1q6xjHhbUyiLn/view?usp=drive_link)

- **An upset admin** → capture name, institution, and concern; loop in Athena team. Stay calm and credible — "answer every question, don't apologize or overclaim."
