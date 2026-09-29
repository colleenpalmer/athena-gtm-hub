# Educator ICP — Questions to Answer

> Fill these out before finalizing the persona. Label assumptions vs. validated facts.

> **Status (2026-09-29): Complete.** Drafted by the AI assistant and reviewed with the team. Remaining
> **[Assumption]** items get tested in educator interviews. Tags:
> - **[Agreed]**: confirmed by the team in review
> - **[Validated]**: stated in `reference/` or `docs/` (source cited)
> - **[Assumption]**: best guess; test in educator interviews
> - **[Gap]**: we don't know yet; needs an owner

---

## Read first: the hypothesis and the product context

**The hypothesis [Agreed]:**  
An educator **champions Athena and uses their own budget to sponsor it for their students**, without
going through the full institutional buy-in path. The educator is the **buyer** (economic buyer +
champion). Finding a path around the full institutional buy-in process is the reason we're exploring
this segment.

**What the educator gets [Agreed]:**
- **All the benefits of Athena for their students:** tutoring, knowledge mapping, personalization, and
  knowledge that builds over time.
- **A seat at the table as a design partner.** There's no instructor dashboard yet, and we want to
  build it *with* faculty while protecting student privacy. *Guardrail:* never promise specific
  features, dashboards, or dates. **[Validated]** (`reference/pricing-and-packaging.md`)

**Product context:**
1. **Athena is fully capable with or without a Canvas connection. [Agreed]** The connection adds a
   **head start**: Study Spaces and study objectives generated right away, plus context about the
   student (grades, assignments, etc.), so students do less manual uploading.
2. **The Canvas connection is institution opt-in. [Validated]** (`docs/Athena FAQ - Public.md`).
   Course-level enablement ships in October, but **instructors can't turn it on themselves (yet)**.
   They'd have to work with their Canvas admin. **[Agreed]**
3. **Sponsored students redeem by connecting Canvas. [Agreed]** Students sign up and log into Canvas
   through Athena, the same flow as today. That means **the institution's Canvas admin has to enable the
   connection** (institution-wide, or course-level from October) for a sponsorship to work.
   **The realistic path is "no institutional procurement," not "no institution at all":** the educator pays
   and runs the rollout, and a Canvas admin turns on the connection. See "Resolved: the Canvas admin step."

> Note: `reference/company-overview.md` and `reference/product-catalog.md` still describe the Canvas
> connection as "opt-out." They're out of date with the docs.

---

## Offer mechanics [Agreed, 2026-09-29]

| # | Question | Answer |
|---|---|---|
| 1 | **Price** | **Same as institutional sponsorship: $5 per MAU** (monthly active user), with MAU averaged over the length of the contract. The educator pays for students who actually use Athena, not for every enrolled student. |
| 2 | **Redemption** | **The instructor controls the rollout** (how and when they introduce Athena to students). Students sign up and log into Canvas through Athena, the same flow as today. |
| 3 | **Budget source** | **All of the above:** personal money, department discretionary funds, P-cards, and teaching/innovation grants. |
| 4 | **FERPA** | **Yes:** under an educator sponsorship, Instructure acts as a FERPA-designated school official, the same framing as institutional sponsorship. |

> **Public [Agreed]:** $5/MAU sponsorship pricing is public. It's on the website, on both the student side
> and the sponsorship/educators/institutional side.

## Resolved: the Canvas admin step [Agreed]

**Accepted.** The hypothesis is **"no institutional procurement or budget."** Enabling the Canvas connection is a
lightweight step the educator requests from their admin. **Until the product supports a turnkey path, we'll
work hands-on with each educator and their Canvas admin to figure out the best path.** This also doubles as
discovery: what we learn shapes the turnkey solution.

**Schools without Canvas, or where the admin won't enable it: coupons (possible, not built). [Agreed]**  
We could offer the educator a set of coupons that grant the same sponsorship without a Canvas connection.
Tracking MAU for coupon-redeemed students would take real work, so treat it as a possibility,
not an offer. Don't promise it externally until it exists.

---

## Part 1: The Ideal Customer Profile

### 1. What level of educator are we targeting?
- [ ] K–12 teachers (high school specifically)?
- [x] Community college instructors?
- [x] University professors/lecturers/adjuncts? *(undergraduate, first/second-year courses)*
- [ ] All of the above?

**Our answer [Agreed]:**  
Instructors at **U.S. community colleges and 4-year undergraduate institutions** teaching **first- and
second-year courses**. Prioritize **full-time faculty with access to budget** (department funds, grants).
Adjuncts are lower fit. High school is out of scope for now.

**Reasoning:**  
- Matches both existing motions: the consumer ICP is 18–22, first/second year, and the institutional
  segment is community colleges and undergrad universities. **[Validated]** (`reference/icp-and-personas.md`)
- Athena's tone is built for college/university students. **[Validated]** (`docs/Athena & Canvas - FAQ - CSM.md`)
- The educator is the buyer, so budget access matters. Adjuncts rarely control budget. **[Assumption]**
- High school is "later" for the brand, and K–8 is a red flag. **[Validated]** (`docs/creative-brand-brief.md`,
  `docs/Athena & Canvas - FAQ - CSM.md`)

---

### 2. What subjects/courses?
- [x] High-stakes/pre-professional courses (nursing, bio, chem, engineering)?
- [x] Gen-ed "weed-out" courses (intro psych, stats, chemistry) with high DFW rates?
- [ ] Any course on Canvas where the instructor cares about learning?
- [ ] Specific subjects only?

**Our answer [Agreed]:**  
**High-enrollment gateway and prerequisite courses where grades are mostly exam-based and DFW rates are
high:** Anatomy & Physiology, intro biology, general chemistry, intro psychology, statistics, college
algebra/precalc. Ideally the instructor posts course materials in Canvas.

**Reasoning:**  
- It's where our consumer ICP lives: pre-nursing, psych, bio, and engineering tracks where GPA gates the
  next step. **[Validated]** (`reference/icp-and-personas.md`)
- The institutional fit criteria already name "high-enrollment courses with high drop/fail/withdraw
  rates." **[Validated]** (`docs/Athena & Canvas - FAQ - CSM.md`)
- Athena's tutoring, knowledge mapping, and practice fit concept-heavy, exam-assessed courses best. **[Assumption]**
- Writing-heavy and discussion-based courses are a weaker fit. Athena won't produce submission-ready
  work and doesn't read discussions. **[Validated]**

---

### 3. What's the "without institutional buy-in" scenario?

**Scenario A:** Instructor pays out of pocket or from small departmental budget for a class set of licenses (~30 students)

**Scenario B:** Instructor recommends Athena to students; students pay individually; instructor wants visibility/integration

**Scenario C:** Freemium model — instructor gets free access + visibility if X% of their class signs up

**Our answer [Agreed]:**  
**Scenario A: educator-funded sponsorship.** The instructor pays from their own or departmental budget
so their students get Athena free. No institutional procurement or budget is needed. A Canvas admin
still has to enable the connection; we work hands-on with the educator and admin to get there. The educator also joins as a **design partner** for future
instructor visibility, which covers the useful part of Scenario C without promising features.

| Scenario | Role |
|---|---|
| **A — Educator sponsors their class** | **The hypothesis we're testing.** |
| **B — Instructor recommends, students pay $5/mo** | **Fallback** if price or budget turns out to be the blocker. It works today with no new pricing. **[Validated]** |
| **C — Freemium + instructor visibility** | Not now: there's no dashboard yet. The design-partner role covers the intent. |

**Pricing/packaging implications:**  
- **Price [Agreed]:** $5 per MAU, averaged over the contract. That's the same as institutional
  sponsorship, so no new packaging is needed. Students pay nothing. Public.
- **Rollout [Agreed]:** the instructor decides how to introduce Athena. Students sign up and connect
  Canvas through Athena as they do today.
- **Dependency:** the Canvas connection must be enabled by the institution's admin. We support the
  educator through it hands-on. Coupons are a possible future path for schools where it can't be enabled.
- **Guardrail:** Even when sponsored, frame Athena as a resource the educator *provides*, not as
  required for coursework. **[Validated]** (`docs/Athena FAQ - Public.md`)

---

### 4. What's the trigger event — why would a teacher do this NOW?

Options:
- [x] Students keep asking AI-related questions; teacher wants a "sanctioned" answer
- [x] Teacher sees students struggling/failing; wants to intervene before it's too late
- [ ] Teacher already loves Athena personally (used it themselves) and wants students to have it
- [ ] Department/admin is starting to ask about AI policy; teacher wants to get ahead
- [x] High DFW rates in a course; pressure to improve outcomes
- [x] Other: **Calendar moments. (1) First exam results (weeks 4–6), which is right now for Fall 2026. (2) Syllabus and budget planning for the next term (Dec–Jan).**

**Our answer:**  
- **Primary trigger:** *"My students just bombed the first exam and I can't give 1:1 help to all of
  them."* **[Assumption]**
- **Secondary trigger:** *"My students are using ChatGPT on my coursework anyway, and I want to give them
  something that coaches instead of answering."* **[Validated]** for institutions; **[Assumption]** for individual instructors.
- **Timing matters more for a buyer:** a sponsor may need to spend at the start of a term or use
  end-of-year funds. **[Assumption]** Test in interviews.

---

### 5. Disqualifiers — who's NOT a fit?

- [x] Teachers at non-Canvas schools
- [x] Teachers who don't have autonomy to recommend tools to students
- [x] Teachers in subjects where Athena doesn't add value (arts, PE, purely discussion-based)
- [x] Teachers who see AI as "cheating" full stop
- [ ] Teachers who don't use Canvas actively *(lower fit, not disqualified)*
- [x] Other: **K–8 teachers. Instructors with no access to any budget.**

**Our answer [Agreed]:**  
- **Hard disqualifiers:** K–8 **[Validated]**; AI-hostile instructors or departments ("hostile faculty
  culture" is an existing red flag) **[Validated]**; no access to any budget **[Assumption]**.
- **Not a fit today, possible later:** non-Canvas schools, or schools where the admin won't enable the
  connection. Today's sponsorship redemption runs through Canvas. A coupon-based sponsorship could open this
  up, but it isn't built yet. **[Agreed]**
- **Lower fit:** light Canvas use (less course content for the head start); writing- or discussion-heavy
  courses.

---

## Part 2: The Persona

### 6. What's their primary goal?

**Our answer:**  
**Help more students pass *and actually learn the material*, without adding to their own workload, and
give students a responsible AI option instead of policing the ones they already use.** **[Assumption]**

---

### 7. What are their top pains that Athena addresses?

**Our answer:**
1. **Students can't see their own gaps until the exam shows them.** By then, recovery is hard. This
   mirrors the student's top pain. **[Validated]** for students (`reference/icp-and-personas.md`); **[Assumption]** for instructors.
2. **Students are already using AI without oversight, and it hands them answers.** The instructor has
   integrity concerns and no good alternative to provide. **[Validated]** for institutions; **[Assumption]** for instructors.
3. **No capacity for 1:1 help at scale.** Across 100+ students, office hours are either empty or
   overwhelmed, and the students who need help most often don't come. **[Assumption]**
4. **Waiting on institutional procurement is slow.** Instructors who want to act this term can't wait
   for an institution-wide decision. **[Assumption]** This is the pain the whole segment hypothesis rests on.

---

### 8. What would they care about when adopting Athena?

Buying criteria:
- [x] Will students actually use it?
- [ ] Does it integrate with my Canvas course without extra work?
- [x] Can I see if it's helping? (Usage visibility, outcomes)
- [x] What does it cost — me vs. students?
- [ ] Will admin/department support this or push back?
- [x] Other: **Will it help my students cheat? (integrity alignment)**

**Our answer (top 3, ranked) [Assumption]:**  
1. **It won't help students cheat.** Athena coaches instead of answering, won't produce submission-ready work, and
   can't see unpublished quiz questions. **[Validated]** (`docs/Athena FAQ - Public.md`)
2. **Cost and value for my budget.** They're paying, so the price has to feel clearly worth it.
   $5/MAU means they only pay for students who actually use it, which also answers "will they use it?"
   **[Agreed]** price; **[Assumption]** that MAU pricing resonates.
3. **Will my students actually use it, and can I tell if it's helping?** A buyer wants evidence their
   money worked. No dashboard today; the answer is the design-partner role plus signals like student
   self-reports and exam results. **[Validated]** that there's no dashboard.

---

### 9. What objections would we hear?

Likely objections:
- "Why would students pay $5/month when ChatGPT is free?"
- "I don't have budget for this"
- "Will this be seen as outsourcing teaching?"
- "What if it gives students the wrong answers or helps them cheat?"
- "I can't mandate a paid tool — how do I get students to adopt it?"
- Other: **"Can I see if it's working?"**, **"Can I exclude some of my content?"**, **"Is this allowed without my school signing off?"**

**Our answer:**

| Objection | Type | Response / status |
|---|---|---|
| "I don't have budget for this" | 🟠 **Handled partly** | $5/MAU means they only pay for active students, and personal, department, P-card, and grant funds all work. **[Agreed]** Fallback: Scenario B, where students pay $5/mo. |
| "Can I see if it's working / who's using it?" | 🟠 **Handled partly** | No dashboard yet. Offer the design-partner role, where they help shape what instructors see while student privacy is protected. Don't promise features or dates. **[Agreed]** |
| "Is this allowed without my school signing off?" | 🟠 **Handled partly** | No procurement needed, and Instructure acts as a FERPA-designated school official under the sponsorship. **[Agreed]** Their Canvas admin enables the connection, and we help them through that. |
| "My Canvas admin hasn't turned this on" | 🟠 **Handled hands-on** | Course-level enablement (October) makes this a small, contained ask. We work directly with the educator and their admin to find the best path. **[Agreed]** A ready-made admin request would help. |
| "Will it help students cheat / give wrong answers?" | 🟢 **Handled with proof** | Coaches instead of answering; no submission-ready work; can't see unpublished quizzes. **[Validated]** |
| "Is this outsourcing teaching?" | 🟢 **Handled with messaging** | "Stands alongside the instructor, not in their place." **[Validated]** (`reference/company-overview.md`) |
| "Why use this over ChatGPT (which is free)?" | 🟢 **Handled with messaging** | Tutoring that builds understanding instead of handing over answers, plus knowledge mapping and personalization over time. **[Validated]** (`reference/competitive-landscape.md`) |
| "Can I exclude some of my content?" | 🟡 **Honest no** | Not today. With Canvas connected, Athena reads only what's published to the student. **[Validated]** |

---

### 10. Where do they hang out? (Channels)

- [ ] Canvas teacher community / InstructureCon
- [x] Subject-specific communities (r/Professors, discipline-specific Slacks)
- [ ] LinkedIn groups for educators
- [x] Department faculty meetings, teaching & learning center workshops
- [x] Email newsletters (Edutopia, Inside Higher Ed, Chronicle)
- [ ] Twitter/X (ed-tech Twitter)
- [x] Other: **Direct outreach through our own network: Hinds Community College faculty, Instructure/CSM relationships, pilot conversations.**

**Our answer:**  
- **Now (interviews) [Agreed]:** Find educators to talk to directly through our network. Start with
  **Hinds CC faculty** (their students already have Athena), then 3–5 instructors at schools with no
  institutional relationship.
- **Later (channel test), after interviews [Assumption]:**
  1. **BD / speaking: teaching & learning centers and faculty workshops.** CTLs are already a
     named "owner for learning support" signal. **[Validated]** (`docs/Athena & Canvas - FAQ - CSM.md`)
  2. **Targeting blogs: discipline-specific communities and newsletters.** For example, A&P, intro bio,
     and stats teaching groups. Start small and niche. *Caution:* r/Professors leans AI-skeptical.
  3. **Direct outreach / sales** to instructors of high-DFW gateway courses.

---

## Part 3: Jobs To Be Done

**Format:** "When [situation], I want to [motivation], so I can [outcome]."

**Our answers [Assumption]; validate in interviews:**
1. **When** my students do badly on the first exam, **I want to** give them personal tutoring that
   finds and fills their gaps, **so I can** get more of them back on track before it's too late to pass.
2. **When** I know students are using AI on my coursework anyway, **I want to** provide an AI tool that
   coaches instead of giving answers, **so I can** set a clear AI stance without having to police it.
3. **When** my institution is slow to adopt new tools, **I want to** sponsor something for my own class this term,
   **so I can** help my students now instead of waiting on procurement.

---

## Part 4: Proof & Validation

### 11. What proof would convince an educator to try this?

- [ ] Testimonial from another instructor in their field
- [ ] Student outcome data (before/after Athena)
- [x] Free pilot for one semester with no commitment *(depends on Gap 1)*
- [ ] Endorsement from their institution or Canvas/Instructure
- [x] Demo showing how it works with their actual Canvas course
- [x] Other: **A short walkthrough of tutoring, knowledge mapping, and personalization, plus the coach-don't-tell behavior. The design-partner invitation.**

**Our answer:**  
**Minimum viable proof = a short demo of Athena tutoring on real course material, the integrity and
privacy facts we can already state, and an invitation to shape the instructor experience.**
**[Validated]** facts; format **[Assumption]**.

Not available yet:
- **Instructor testimonials:** none exist. **[Gap]** Hinds faculty are the likely first source.
- **Admin-enablement kit:** a short, ready-to-send request an educator can forward to their Canvas admin
  for course-level enablement. **[Gap]** Needs to be created.
- **Student outcome data:** none published. Don't invent it. **[Gap]**
- **Internal adoption counts:** internal-only. Never external. **[Validated]**

---

### 12. What would "success" look like for this educator?

- [x] X% of students using Athena regularly
- [x] Higher exam averages / lower DFW rates
- [x] Fewer "I'm lost" office hour visits
- [x] Students self-reporting better understanding
- [ ] Other: _______

**Our answer [Assumption]:**  
As the buyer, the educator judges success by whether their money worked: **students actually using
Athena, better results on the next exam, and positive student feedback.** Without a dashboard, their
evidence is indirect: grades they track themselves, student anecdotes, and anything we share with
them as design partners (within privacy limits).  
*For our test:* we measure sponsorship conversions, student activation per sponsored class, and
retention against the thresholds in `README.md`.

---

## Assumptions to Validate

1. **Instructors will spend their own or departmental budget to sponsor Athena for their class.** This is the riskiest
   assumption.
2. **Instructors can find and use that budget without institutional sign-off.** Which sources are real in
   practice: personal, department, P-card, or grant?
3. **Canvas admins will enable course-level access when an instructor asks,** quickly and without escalating it into
   an institutional review.
4. **Sponsored students activate and keep using Athena** at least as well as D2C students.
5. **The design-partner role is enough of an answer to "can I see if it's working?"** for now.
6. **Educators are reachable cheaply** through direct outreach, CTLs, and niche discipline communities.
7. **Educator messaging differs meaningfully from student messaging.** This drives the landing-page decision in
   `decisions/DECISION-LOG.md`.

**How we'll test:**  

- **Weeks 1–3:** 5–10 educator interviews, starting with Hinds CC faculty and then instructors at schools
  with no institutional relationship. Probe #1, #2, #3, #5, and #7, and test the JTBDs above.
- **After interviews:** Offer sponsorship to a small group of instructors (design with the
  `traction-channel-test` skill). Measure conversions, activation, and retention.

---

## Next Steps

1. Draft the educator interview guide
2. Draft full educator persona using `templates/icp-persona.md`
3. Design the sponsorship test using `traction-channel-test` skill
4. Update `reference/pricing-and-packaging.md` (public $5/MAU sponsorship, educator sponsors) and fix
   "opt-out" → "opt-in" in `reference/company-overview.md` and `reference/product-catalog.md`
