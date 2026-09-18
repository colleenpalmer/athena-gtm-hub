# Athena and Canvas FAQ for CSMs

> Source: `Athena & Canvas - FAQ - CSM.docx` (Markdown mirror — keep in sync with the .docx)

**Internal FAQ.**

**Read this first.**

This is an internal talking-points guide, not a customer-facing document. Athena is launching out of stealth through a controlled rollout, not a general-availability launch. When in doubt, say less and route the lead to the Athena team. A public-facing FAQ is coming soon.

*Our position on student-authorized access*

## Why this exists

We announced Athena at InstructureCon on July 22 as the first Instructure Foundry project. Since then, Canvas admins have been asking the same question: can students really connect this to our Canvas without our approval?

Student-authorized access is deliberate design, not an oversight, and it's a design we're refining. Athena's still early and limited — it is not GA as an Instructure product. It is a part of the Foundry. We have not done a big public launch. We built and iterated on Athena with small cohorts of students to learn whether a tool focused on real learning, not quick answers, would even get used. We’re starting to see real value and success stories emerge that we’re increasingly convinced we’re onto something special. 

We shared it at InstructureCon to invite collaboration, and the feedback was clear: while many are aligned and excited about our vision and progress, institutions want the choice on whether their students can connect directly to Canvas. So we're adding institutional control in the spirit of partnership, while standing behind the student-authorized model.

**Updates:**

**As of August 14th, Institutions now have the ability to opt-in to allow students to connect their Athena account with their Canvas account.**

**In the early October Canvas LMS release, Institutions will have further permission controls at the root, subaccount, and course level.**

## Our position

- Students should be able to get study help when, where, and how they choose. Our own research released at InstructureCon found that 90% of higher ed students already use AI in class at least occasionally—Athena exists to be the responsible and safe outlet for that demand.

- Using other tools and plugins, students mostly copy and paste course content into consumer chatbots. Institutions have zero visibility into those tools and no control over them. Many of these tools do in fact train their models from this interaction.. That's where the real IP leakage and privacy risk lives.

- Athena moves the studying that's already happening into a product with real safeguards: read-only access to Canvas (if enabled) using the same access-level they have when accessing Canvas directly, no training of external models, and coaching toward mastery instead of giving answers.

- Institutions control the Canvas connection, and students choose their study tools. Institutions that want more, like usage visibility and configuration, have a path through an institution-sponsored subscription that doesn't compromise student privacy.

The safest place for a student to study with AI is a vetted tool built by the trusted company that runs their LMS. We shouldn't apologize for that. We should explain it well, answer every question, and keep tuning it with our customers.

## How a student connects

- A student signs up at [studywithathena.com](http://studywithathena.com) with an email address. It costs $5 a month after a seven-day free trial, or it's free for the student through an institution-sponsored subscription.

- Connecting Canvas uses standard, secure OAuth2. The student signs in through their school's normal Canvas login, including SSO if the school uses it, then sees the Canvas consent screen and approves. It's the same flow other integrations use.

- This isn't a student-generated API token, and settings that restrict students from creating personal access tokens don't affect the OAuth connection.

- Everything rides on the student's own permissions and scopes. Canvas serves Athena exactly what the LMS would serve that student, nothing more.

- Athena’s Canvas integration is read-only. There is no write method, so it can't post, edit, grade, or submit anything.

- We encrypt stored OAuth credentials at rest (AES-256-GCM), and disconnecting revokes access from Canvas.

- There's no LTI install and no institutional credential anywhere in the product. The OAuth connection runs on a developer key Instructure manages centrally (like we do other Instructure-managed service integrations).

## What Athena reads, and what it never does

With the student's OAuth credentials, Athena reads courses, syllabi, assignments, modules, pages, files, planner items, quizzes, and the student's own grades and submission status. It uses that to build quizzes, flashcards, advise on study plans, and deliver coaching that is grounded in the actual course content. It doesn’t access anything that contains other students’ data, e.g. discussions, even if the student has read access.

It never writes to Canvas, never sees another student's grades or submissions, never uses an admin credential, and never shares one student's personal data (grades, chats, or mastery) with another.

## Why students get to do this

At a college or other postsecondary school, FERPA rights transfer to the student. Students can review their own records, and enrollment gives them access to course materials so they can learn from them. A student using Athena is doing what they already do every day, reading their courses and studying, with a coach attached. We're not granting new access. We're respecting access that already exists, with more care than the tools students use now.

Two paths for access:

- **Institution-sponsored subscriptions.** The school covers access and students verify through Canvas. Here Instructure acts as a FERPA-designated school official under the agreement, which is the framing already in our press release.

- **Individual subscriptions.** The student signs up directly and authorizes access to their own Canvas view. For the student's own information, the school isn't handing data to us — the student is retrieving what they can already see and choosing to use a study tool with it, so the school's FERPA posture is essentially unchanged. We minimize what we read and we don't treat one student's sign-up as consent for anyone else's records.

## Why Athena is the safer path for institutions

- **Coaching, not answers.** Athena scaffolds thinking and won't produce submission-ready work. Compare that with the answer engines students use today.

- **Content stays governed and grounded.** Access is read-only and revocable, conversations don't train external models, and the operator is the company your institution already trusts to run Canvas.

- **A partner you can call.** When a student pastes a syllabus or lecture notes into a random chatbot, there's no one to call. With Athena, there's Instructure.

- **A path to more control.** Institution-sponsored subscriptions exist today. Visibility and usage reporting are in active design for institutional licenses. Exploring potential configuration options at the course level for instructional designers and instructors is also in discovery. Don't promise features or dates.

## The questions you'll get

#### **Does the institution have to approve before students can connect?**

Athena is a direct-to-student product. Starting with the August 14th release of Canvas, an institution will be able to opt-in and enable the Athena Canvas connection. The student authorizes access to their own Canvas view through the standard OAuth consent screen, within permissions they already have.

#### **What happens if we don’t opt-in?**

We're building an institutional opt-in for the Athena-Canvas integration that root account admins will be able to set. We currently expect this to be available by August 14.

When a school does not opt-in, a student who tries to connect will see a message that their institution doesn't support the connection. Athena will be blocked from accessing that institution’s Canvas instance on the students’ behalf, including any student who was previously connected to Canvas via Athena.

#### **Why wasn't there an institutional opt-in from the start?**

Because we believed, and still believe, the student-authorized model is sound: Athena reads only what a student can already see, through the same OAuth flow they use to access Canvas, and we ensure that data is never used to train external models..

We also were only working with a deliberately small group of students to validate the market and see if students would even use a tool focused on really learning vs. getting quick answers.

What changed is the feedback. After InstructureCon we heard clearly that institutions want the choice, and partnership matters more than being right. So we're building the control. We'd rather earn their trust and have them enable the connection because blocking Athena doesn't stop students from using AI, it sends them back to tools with no controls and no visibility.

#### **What do I tell my existing Canvas accounts?**

Athena doesn't change anything about their current Canvas experience, and it isn't something they need to act on. If customers have heard about Athena and are curious, treat it the same way an AE would: set honest expectations, note it's early and working with a select group of learners and institutions, and route genuine interest to the Athena team. Lead with reassurance that the core they rely on is unchanged.

#### **Will Athena affect my accounts' Canvas contract, support, or renewals?**

No. Athena is separate. If you choose to partner with our Athena team to pilot Athena, you’ll work directly with them.

#### **Can we block students from using Athena entirely, not just the Canvas connection?**

No. The opt-out covers what's yours to control: whether Athena can read from your Canvas instance. Athena itself is a consumer product a student subscribes to personally, and students can use it without any Canvas connection—about half of current users do exactly that.

#### **How many of our students are already using this?**

Almost certainly very few, if any. As of early August 2026, only a few hundred students worldwide have connected Canvas to Athena. Most institutions have zero connected students, and the highest count at any single institution is 16. If a school wants their number, ask the Athena team for a current count.

Context: While Athena allows students to sign up today, there's been virtually no marketing push—we've kept it small on purpose while we learn what actually helps students and if students would even value a tool like this. We originally didn’t build an integration with Canvas and even after we released the feature last fall, only half of current users actually connect Canvas at all.

#### **Will Athena be listed in an Institution's Apps?**

No, because there's no LTI install. Canvas records the OAuth authorization on the student's account (visible in the student's user settings under Approved Integrations), and Athena's activity shows up as API calls in Canvas logs. If they want to know how many of their students have connected, ask the Athena team for a current count.

Admin-facing anonymized usage reporting is being designed for institution-sponsored subscriptions in a way that maintains student privacy and we’re exploring adding basic information for non-subscribing institutions.

#### **Do you market Athena to our students?**

Not using anything of yours. We never use Canvas data or institution-provided student lists to target advertising. We don't advertise Athena inside Canvas. And we never present Athena as part of Canvas, endorsed by your institution, or required for coursework.

Athena is a consumer product, so we do run standard digital advertising aimed at college students as an audience: search, social, and some location-based campaigns around college towns. Your students may see those ads the way they'd see any consumer ad. Nothing from your institution, and nothing from Canvas, ever decides who sees an ad. 

Further, the marketing, thus far, has been deliberately light — we're early, and we've kept Athena small on purpose, just enough to support a steady stream of students interested in helping us validate and improve the product.

#### **Instructure has always sold to institutions. Why is Athena aimed at students?**

A couple reasons. First, in thinking about AI learning tutors, the student is the one with the problem. If the tool isn’t compelling to students and they don’t trust it and view it as a tool that really helps them, it won’t matter who we sell it to, so that’s where we started. Institutions buy systems; students do the studying. And a coach only works if the student trusts it, so Athena is built around student choice: the student signs up, connects Canvas if they want to, and can walk away at any time. That stays true even when a school sponsors the access. Students kept telling us the same thing: a coach feels different when it's theirs. 

Second, and maybe the more fundamental reason is that learning doesn't stop at the edge of a course, a semester, or an institution. Community college partners tell us that one of their success metrics is when students transfer to a four-year school. When this happens, they want a learning coach that travels with that student and understands their strengths beyond any single class or campus. That only works if the student owns the account.

None of this moves us away from institutions. Canvas remains institution-first, and we're shaping the institutional path for Athena with customers right now: sponsorships that cover student access while the student still chooses to connect, controls what’s shared, and has a learning companion that supports them throughout their learning journey.

#### **What data do you use?**

Athena reads only what the student can already access via the read-only endpoints  in the Canvas API. The primary endpoints* Athena uses are:

- Enrollments

- Course information

- Files

- Assignments

- Submissions

- Modules

- Pages

- Planner items

- Todo items

- Quizzes

- Grades

* Beyond this list, Athena can read other GET endpoints when a student asks about them — for example, a student asking what's in a course announcement. Two bounds always apply: Athena only receives what the student's own permissions allow, and we block endpoints that can contain other students' content, like discussions and peer reviews, even where the student can read them in Canvas.

#### **How do you process payments?**

We use Stripe and Apple App Store payment processing. We never store card data ourselves. It costs $5 a month after a seven-day free trial. Institution-sponsored subscriptions are free to students.

#### **Can students buy this now?**

Yes. Any individual can sign up for a subscription to Athena today after a seven-day free trial. Connecting to Canvas is an optional step—about half of current users don't connect it and instead use Athena more like a general study tool.

#### **Can institutions buy this now?**

Yes. Institutions can enable the Canvas connection to Athena for their students today, free of charge.

Institutions also have the option to sponsor their students' subscription of Athena. Our initial pilot institution, Hinds Community College, is now offering Athena to all of their students this Fall.

Smaller, more limited, paid pilots are available for institutions who would like to explore. We’re actively looking for 10-15 institutions to pilot this fall and help us continue to shape the product, including the institutional support features. Admin-facing usage reporting is being designed for institution-sponsored subscriptions, that will maintain the privacy of students.

#### **How can I tell if an institution is a real fit for Athena for their learners?**

Signals of a good-fit institution:

- Already on Canvas, with real student engagement.

- Early-adopter mindset — comfortable co-developing an evolving product, not buying a finished one.

- Willing to take part in research and outcome measurement.

- Faculty and community won't block an AI study tool (ideally will endorse it).

- Has the need, but no home-grown solution already built.

- Has an owner for learning support (tutoring center or center for teaching and learning).

- Student success is a stated priority, with budget behind it.

- Right size for a manual first deal (mid-sized school, or a unit within a larger one).

- Procurement can move fast.

- In scope: all non K-8 institutions in the U.S. (9-12, community college, four-year, or online/professional programs.

- Can name specific high-enrollment courses with high drop/fail/withdraw rates.

**Red flags:** AI resistant or without an AI policy, has an existing competing solution, wants full enterprise SLAs now, K-8, hostile faculty culture, no connectable LMS, procurement too slow/heavy for our current manual process.

#### **Who do I send interested customers that fit the profile?** **Where do I send questions?**

Send inquiries directly to the Athena team (#incubation-athena in Slack). For interested customers, specifically contact [Jason Madsen](mailto:jason.madsen@instructure.com)(@jason.madsen) and [Colleen Palmer](mailto:colleen.palmer@instructure.com) (@colleen) on the Athena team.

#### **Does this depend on access tokens? We restrict those.**

No. Athena connects through secure, standard OAuth2 authorization, not personal access tokens, so settings that restrict students from creating tokens don't affect it.

#### **What shows up in our logs? Can we see who's connected?**

Canvas records the OAuth authorization on the student's account. After that, calls to Canvas will show up as API calls in logs. 

Admin-facing usage reporting is being designed for institution-sponsored subscriptions, that will maintain the privacy of students.

#### **Is our content used to train AI models?**

No. As with all our AI features, Athena data is never used to train external models.  Instructure itself only uses de-identified, aggregated data to develop and improve Athena and other Instructure products.

#### **Will Athena know what is on the exam? Can it expose this to students?**

Athena can't see anything an instructor hasn't released to the student. Unpublished quiz questions aren't visible to a student in Canvas, so they aren't visible to Athena. And the product coaches rather than completes: it won't produce submission-ready work, and it pushes practice and recall instead of answers.

#### **What LLM is Athena built on?**

Athena uses a mix of AI models, chosen for which is best suited to the purpose and performance of each task. We don't tie the product to a single named model, because the mix changes as models improve. Every provider we use is contractually barred from training on Athena data.

#### **Where is Athena data stored, and who is it shared with?**

Athena is a U.S.-based service: data is stored and processed in the United States, encrypted in transit and at rest. That's deliberate Foundry posture: we keep the footprint simple while we validate the product, and capabilities like regional hosting are the kind of thing that comes as products mature.

We share data only with the service providers needed to run Athena, like hosting, payments, and the AI providers that process conversations, and they're required to use it solely to provide services to us. Canvas-sourced data is never shared with third parties for their own use, and never sold. The privacy policy at [studywithathena.com/privacy](http://studywithathena.com/privacy).

#### **Can faculty exclude specific content from Athena?**

No. If the content is available to a student, Athena may be able to read it. Here is more detail around what Athena reads for clarity:

As with all our AI features, Athena data is never used to train external models.  Instructure itself only uses de-identified, aggregated data to develop and improve Athena and other Instructure products.

With the student’s OAuth credentials, Athena reads courses, syllabi, assignments, modules, pages, files, planner items, quizzes, and the student’s own grades and submission status. It uses that to build quizzes, flashcards, advise on study plans, and deliver coaching that is grounded in the actual course content. It doesn’t access anything that contains other students’ data, e.g. discussions, even if the student has read access.

#### **Are student interactions reportable/auditable?**

No. Athena is a direct-to-student product. If the institution has enabled opt-in for Athena,  the student authorizes access to their own Canvas view through the standard OAuth consent screen, within permissions they already have.

Admin-facing anonymized usage reporting is being designed for institution-sponsored subscriptions in a way that maintains student privacy and we’re exploring adding basic information for non-subscribing institutions.

#### **Is Athena grounded solely in course content or does it also use general model knowledge?**

Athena leads with your course content. When course material is available — Canvas materials, or manually uploaded files — Athena biases its answers toward that material, so explanations, plans, and practice stay tied to what you’re actually studying. It draws on broader knowledge to explain foundational concepts and offer familiar analogies to make tough ideas click, but course content always takes priority.

#### **Is Athena geared toward a certain age group? Like, will it sound like a teenager, or will it sound like a professor, etc. How customizable is it?**

Athena is geared toward college/university students, and its tone is that of a supportive tutoring coach — warm, encouraging, and conversational rather than formal or academic. It won’t sound like a professor lecturing or a teenager texting; it aims for a friendly, approachable coach who meets you at your level.

Athena does personalize in a few ways: it adapts to context you provide (preferred name, topics of interest), adjusts quiz and practice difficulty based on how you’re doing, and responds to how you ask — if you want a simpler explanation, more depth, or a different style, you can just tell it in the chat and it’ll adjust.

At this time Athena’s voice and tone are not customizable.

#### **What Canvas objects are indexed? Specifically: are Word docs, spreadsheets, images, PDFs, and PowerPoints accessed? Are Canvas Studio media uploads or transcripts used as context?**

Canvas Studio media uploads are not accessed at this time.

Other files are limited access. When a student asks for help with a particular file, we access only files that the student can already see in Canvas and use them to guide the tutoring session. We never use these files to train AI models.

#### **What security and accessibility does Athena support?**

**In terms of accessibility Athena has:**

A Section 508 Accessibility Conformance Report (ACR / VPAT®) shows all 38 applicable WCAG 2.0 Level A and AA criteria as Supports (30) or Not Applicable (8) — no criterion is Partially Supports, Does Not Support, or Not Evaluated. The Functional Performance Criteria (Chapter 3) likewise resolve to Supports / Not Applicable.

**In terms of security:**

We'll be starting with and working through a HECVAT in the coming weeks.

#### **Is Athena covered under the existing Canvas/institutional contractual, privacy, security, FERPA, and data-protection terms, or is it governed by a separate consumer agreement?**

- Athena is NOT covered under institutional agreements. If you are interested in this at some point, we are open to exploring with you.

  - Athena TOCs for individuals: [https://www.studywithathena.com/terms](https://www.studywithathena.com/terms). Note, we have separate terms used for institutional-sponsored subscriptions. Athena Privacy Policy: [https://www.studywithathena.com/privacy](https://www.studywithathena.com/privacy)

- **Note on FERPA:** a student using their own Canvas access with a study tool doesn't change the institution's FERPA.

  - **For individual student subscriptions:** For the student's own information, the school isn't handing data to us — the student is retrieving what they can already see and choosing to use a study tool with it, so the school's FERPA posture is essentially unchanged.

    - We minimize what we read and we don't treat one student's sign-up as consent for anyone else's records obligations.

  - **For Institutional-sponsored subscriptions**, please reference our Terms and Conditions:

    - "Customer additionally represents, warrants, and agrees that:

      - (a) Parental and Student Notice. Customer will provide any notice to, and obtain any consent from, parents, guardians, or Student Users required by applicable law — including the Children’s Online Privacy Protection Act (“COPPA”), the Family Educational Rights and Privacy Act (“FERPA”), and any applicable state student data privacy law — before permitting a Student User to access the Service, and will make such notice available to Instructure upon request.

      - (b) School Official; Legitimate Educational Interest. Customer authorizes Instructure to act as a “school official” with a “legitimate educational interest” in Student User education records, as those terms are used under FERPA, solely to provide the Service, and represents that it has the authority to grant this authorization.

## What not to say

- Don't say 'FERPA compliant' or 'FERPA certified' — there's no such certification, and FERPA obligations sit with the institution, not with us. For sponsored institutions, say the school has designated Instructure as a school official under FERPA. For individual sign-ups, say that a student using their own Canvas access with a study tool doesn't change the institution's FERPA obligations. Use the school-official line only for sponsored institutions.

- Don't promise dashboards, admin controls, or dates. These are being explored for institutional-sponsored subscriptions, with the goal of having initial support defined by the end of the year.
