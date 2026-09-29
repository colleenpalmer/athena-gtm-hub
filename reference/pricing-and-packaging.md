# Pricing & Packaging

> How we price and package. Note what's public vs internal-only.
> Sourced from `docs/`.

## Pricing model
Two paths to access:
- **Individual (D2C):** flat consumer subscription, billed per student.
- **Sponsored:** an institution, department, or individual educator covers access; free to
  the student. No paywall between the student and the tool. Billed per monthly active user (MAU).

## Tiers / editions
| Tier | For whom | Key inclusions | Price | Public? |
|---|---|---|---|---|
| Individual subscription | Students (D2C) | Full Athena; optional Canvas connection | $5 / month after a 7-day free trial | Yes |
| Institution-sponsored subscription | Schools/departments buying for students | Full Athena for their students; students verify through Canvas | $5 per MAU, MAU averaged over the contract; free to the student | Yes |
| Educator-sponsored subscription *(segment in exploration)* | Individual instructors sponsoring their own students | Full Athena for their students; instructor controls the rollout; students sign up and connect Canvas | Same as institutional: $5 per MAU, averaged over the contract; free to the student | Yes |
| Pilot | Institutions exploring | Smaller, more limited deployment | Contact the Athena team | Yes (program exists) |

## Payments
- Processed via **Stripe** and **Apple App Store**. We never store card data ourselves.
- Sign-up at **studywithathena.com** with an email address.

## Institution-sponsored details
- School covers access; students verify through Canvas.
- Priced at **$5 per MAU**, with MAU averaged over the length of the contract. The sponsor pays for
  students who actually use Athena, not every enrolled student. Public (on the website).
- Under a sponsored agreement, Instructure acts as a **FERPA-designated school
  official** (the framing already in the press release).
- We are **actively recruiting 10–15 institutions to pilot in Fall 2026** to help shape the
  product, including institutional support features. First customer: **Hinds Community
  College** (offering to all students this Fall).

## Educator-sponsored details (segment in exploration)
- Same price and mechanics as institutional sponsorship. The educator pays from personal,
  department, P-card, or grant funds; no institutional procurement required.
- Students redeem by signing up and connecting Canvas through Athena, so the institution's
  Canvas admin must enable the connection (institution-wide or course-level). We work
  hands-on with the educator and their admin until there's a turnkey path.
- Instructure acts as a FERPA-designated school official under an educator sponsorship, the same
  framing as institutional sponsorship.
- **Coupon-based sponsorship** (for schools without the Canvas connection) is a possibility, not an
  offer. Don't promise it externally.
- See `work-in-progress/educator-segment/icp-questions.md`.

## Discounting / terms
- No published discounting or annual/volume terms in the source material.
  *(Gap — confirm with the Athena/Instructure team before quoting any discount. Do not
  invent or quote discounting externally.)*

## Packaging rationale
The value metric is the student. Individual subscriptions capture D2C willingness to pay
at a deliberately low, low-stakes price ($5/mo, 7-day trial); institution-sponsored
subscriptions remove the paywall entirely — solving the student's cost sensitivity while
giving institutions a safer, sanctioned, bounded-cost alternative to ungoverned AI.

## Do / don't when discussing price
- **Do:** state the public price plainly — "$5 a month after a 7-day free trial, or free
  through a sponsored subscription." Sponsorship (institution or educator) is $5 per monthly
  active user, averaged over the contract. Say pilots are available and we're seeking 10–15
  institutions for Fall 2026.
- **Do:** for sponsored institutions, say the school has designated Instructure as a
  school official under FERPA. For individual sign-ups, say a student using their own
  Canvas access with a study tool doesn't change the institution's FERPA obligations.
- **Don't:** say "FERPA compliant" or "FERPA certified" (no such certification).
- **Don't:** promise dashboards, admin controls, usage reporting, or any dates.
- **Don't:** publish internal adoption numbers (see `company-overview.md`).
- **Don't:** invent discounts, annual pricing, volume terms, or any rate other than the
  public $5/MAU sponsorship price.
