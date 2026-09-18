# Athena & Canvas FAQ for Sales, AE

> Source: `Athena & Canvas - Internal FAQ - Sales, AE - Internal.docx` (Markdown mirror — keep in sync with the .docx)

**Internal FAQ.**

**Read this first.**

This is an internal talking-points guide, not a customer-facing document. Athena is launching out of stealth through a controlled rollout, not a general-availability launch. The role of GCO team members is to route curious customers who fit the profile we’ve defined to the right place, not to close volume. When in doubt, say less and route the lead to the Athena team.

*Our position on student-authorized access*

## Why this exists

We announced Athena at InstructureCon on July 22 as the first Instructure Foundry project. Since then, Canvas admins have been asking the same question: can students really connect this to our Canvas without our approval?

Student-authorized access is deliberate design, not an oversight, and it's a design we're refining. Athena's still early and limited — it is not GA as an Instructure product. It is a part of the Foundry. We have not done a big public launch. We built and iterated on Athena with small cohorts of students to learn whether a tool focused on real learning, not quick answers, would even get used. We’re starting to see real value and success stories emerge that we’re increasingly convinced we’re onto something special. 

We shared it at InstructureCon to invite collaboration, and the feedback was clear: while many are aligned and excited about our vision and progress, institutions want the choice on whether their students can connect directly to Canvas. So we're adding institutional control in the spirit of partnership, while standing behind the student-authorized model.

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

## FAQs

#### Why does Athena sit in the Foundry instead of the core Instructure roadmap?

Athena is aimed at a more consumer-shaped market than we serve with our core business (i.e. we plan to target learners directly). It moves faster than the core roadmap, and it operates with a higher tolerance for moving fast and breaking things. Launching Athena from within the Foundry lets us be honest with customers about what's ready today without implying the full GA promise they’ve become accustomed to with our core products.

#### How is Athena sold, B2C or to institutions for their learners?

Both motions are running.

Athena is a direct-to-student product. Starting with the August 14th release of Canvas, an institution will be able to opt-in and enable the Athena Canvas connection. The student authorizes access to their own Canvas view through the standard OAuth consent screen, within permissions they already have.

The current focus is confirming product-market fit through the institutional (B2B2C, business-to-business-to-consumer) lens so we can reach a high volume of learners more quickly and launch a successful consumer motion later. The initial focus is on U.S.-based institutions, but if there is international interest, we want to know about it.

#### Can I sell Athena right now? Is it generally available?

No. Not as a standard GA product. Athena is in a controlled rollout. We're targeting a small, qualified set of pilot-ready institutions, not broad volume. Your role is to spot genuine fit and route it, not to push it into every deal. Selling it like core Canvas sets the wrong expectation and puts the brand at risk.

#### A customer asked about Athena. What should I say?

Confirm that we have a standalone operating unit dedicated to fast-moving innovation that is developing a learner-facing agent experience. Set honest expectations, and route them to the Athena team. Something like: "Yes, Athena is a learner agent that connects to Canvas. It's early and we're working with a select group of institutions right now. If it sounds like a fit for you, I can connect you with the team that runs it." Then route the lead. Don't promise timelines, pricing, or features.

#### How can I tell if an institution is a real fit for Athena for their learners?

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

#### Who do I send interested customers that fit the profile?

For interested customers, specifically contact [Jason Madsen](mailto:jason.madsen@instructure.com)(@jason.madsen) and [Colleen Palmer](mailto:colleen.palmer@instructure.com) (@colleen) on the Athena team. Slack channel: #incubation-athena

#### How do we position Athena against competitors?

- Against D2L's Lumi Tutor, our headline is simple: we have an answer for learner-facing AI, and it connects directly to Canvas where the learner already does their learning.

- Against consumer edtech tools like Quizlet and Study Fetch, Athena is unique because it ties into the institution's real course content rather than living off to the side.

- Against general purpose LLMs, Athena is both connected to the institution’s real course content, and built for education (edtech, not big tech).

Feature-level competitive comparison coming soon (Athena vs. Lumi Tutor, Quizlet, and Study Fetch, general purpose LLMs).

#### What's the price?

We anticipate Athena to be priced by average MAU, rather than by enrollment. Price point coming soon. Until this is confirmed, do not quote or estimate a price.

#### When will Athena be generally available?

There's no committed GA date to share. The product is in a controlled pilot rollout now, scaling to more learners in the fall if we're ready, with a broader launch targeted around CKO, if we hit all milestones. Treat these as internal planning markers, not customer commitments.

#### Where do I send questions?

Send inquiries directly to the Athena team (#incubation-athena in Slack). For interested customers, specifically contact [Jason Madsen](mailto:jason.madsen@instructure.com)(@jason.madsen) and [Colleen Palmer](mailto:colleen.palmer@instructure.com) (@colleen) on the Athena team.
