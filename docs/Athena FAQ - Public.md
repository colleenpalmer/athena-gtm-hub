# Athena FAQ - Public

> Source: `Athena FAQ - Public.docx` (Markdown mirror — keep in sync with the .docx)

**Read this first.**

This is an external customer-facing document. It can be found on the Athena website. Athena is launching out of stealth through a controlled rollout, not a general-availability launch.

A public-facing FAQ can also be found on: [https://www.studywithathena.com/educators/faq](https://www.studywithathena.com/educators/faq)

## Questions

#### **Does the institution have to approve before students can connect?**

Athena is a direct-to-student product. An institution will be able to opt-in and enable the Athena Canvas connection. The student authorizes access to their own Canvas view through the standard OAuth consent screen, within permissions they already have. The same way they are doing with outside chatbots, except this way you have more visibility and confidence it’s being done right.

#### **What happens if we don’t opt-in?**

We're building an institutional opt-in for the Athena-Canvas integration that root account admins will be able to set. We currently expect this to be available by August 14.

When a school does not opt-in, a student who tries to connect will see a message that their institution doesn't support the connection. Athena will be blocked from accessing that institution’s Canvas instance on the students’ behalf, including any student who was previously connected to Canvas via Athena.

#### **Can we block students from using Athena entirely, not just the Canvas connection?**

No. The opt-in covers what's yours to control: whether Athena can read from your Canvas instance. Athena itself is a consumer product a student subscribes to personally, and students can use it without any Canvas connection—about half of current users do exactly that.

#### **Do you market Athena to our students?**

Not using anything of yours. We never use Canvas data or institution-provided student lists to target advertising. We don't advertise Athena inside Canvas. And we never present Athena as part of Canvas, endorsed by your institution, or required for coursework.

Athena is a consumer product, so we do run standard digital advertising aimed at college students as an audience: search and social.. Your students may see those ads the way they'd see any consumer ad. Nothing from your institution, and nothing from Canvas, ever decides who sees an ad. 

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

#### **Does this depend on access tokens? We restrict those.**

No. Athena connects through secure, standard OAuth2 authorization, not personal access tokens, so settings that restrict students from creating tokens don't affect it.

#### **Is our content used to train AI models?**

No. As with all our AI features, Athena data is never used to train external models.  Instructure itself only uses de-identified, aggregated data to develop and improve Athena and other Instructure products.

#### **Will Athena know what is on the exam? Can it expose this to students?**

Athena can't see anything an instructor hasn't released to the student. Unpublished quiz questions aren't visible to a student in Canvas, so they aren't visible to Athena. And the product coaches rather than completes: it won't produce submission-ready work, and it pushes practice and recall instead of answers.

#### **What LLM is Athena built on?**

Athena uses a mix of AI models, chosen for which is best suited to the purpose and performance of each task. We don't tie the product to a single named model, because the mix changes as models improve. Every provider we use is contractually barred from training on Athena data.

#### **Can faculty exclude specific content from Athena?**

No. If the content is available to a student, Athena may be able to read it. Here is more detail around what Athena reads for clarity:

As with all our AI features, Athena data is never used to train external models.  Instructure itself only uses de-identified, aggregated data to develop and improve Athena and other Instructure products.

With the student’s OAuth credentials, Athena reads courses, syllabi, assignments, modules, pages, files, planner items, quizzes, and the student’s own grades and submission status. It uses that to build quizzes, flashcards, advise on study plans, and deliver coaching that is grounded in the actual course content. It doesn’t access anything that contains other students’ data, e.g. discussions, even if the student has read access.

#### **Are student interactions reportable/auditable?**

No. Athena is a direct-to-student product. If the institution has enabled opt-in for Athena,  the student authorizes access to their own Canvas view through the standard OAuth consent screen, within permissions they already have.

Admin-facing anonymized usage reporting is being designed for institution-sponsored subscriptions in a way that maintains student privacy and we’re exploring adding basic information for non-subscribing institutions.

#### **Is Athena grounded solely in course content or does it also use general model knowledge?**

Athena leads with your course content. When course material is available — Canvas materials, or manually uploaded files — Athena biases its answers toward that material, so explanations, plans, and practice stay tied to what you’re actually studying. It draws on broader knowledge to explain foundational concepts and offer familiar analogies to make tough ideas click, but course content always takes priority.
