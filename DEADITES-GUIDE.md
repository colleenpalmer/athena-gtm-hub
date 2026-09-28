# Design Deadites Guide

## What Are the Deadites?

The **Design Deadites** are AI design directors who review your work from specialized perspectives. They're based on the design review system from the athena-poc project, with an Evil Dead-themed twist.

When summoned, they give you **rigorous, professional feedback** — but with a tongue-in-cheek horror greeting first.

---

## The Roster

### 💜 Brand Director
**Summon:** "Necronomicon, release the brand demon!"

**Reviews:**
- Brand consistency & coherence
- Visual identity & personality
- Distinctiveness vs. competitors
- Craft signals (typography, alignment, icons)

**Use for:** Logos, landing pages, visual designs, brand guidelines, anything with brand implications

---

### 💙 Copy Director
**Summon:** "Summon the copy deadite!"

**Reviews:**
- Voice & tone consistency
- Clarity & concision
- Microcopy quality
- Reader-first framing

**Use for:** Copy, messaging, emails, UI strings, landing page text, docs, any written content

---

### 💚 Product Design Director
**Summon:** "Summon the product design deadite!"

**Reviews:**
- UX flows & information architecture
- Visual hierarchy
- Interaction design
- Accessibility

**Use for:** UI designs, user flows, wireframes, prototypes, product screens

---

### 💗 Product Marketing Director
**Summon:** "Summon the PMM deadite!"

**Reviews:**
- Positioning & differentiation
- Messaging strategy
- Value propositions
- Audience fit & competitive framing

**Use for:** Positioning docs, messaging frameworks, launch announcements, pitch decks, feature messaging

---

### 🧡 GTM Director
**Summon:** "Necronomicon, release the launch demon!"

**Reviews:**
- Launch readiness
- Channel strategy
- Funnel design & continuity
- Activation & adoption paths

**Use for:** Launch plans, campaigns, go-to-market strategies, funnel designs, channel tests

---

### 🔥 THE ENTIRE HORDE
**Summon:** "Dead by dawn! Unleash the deadite horde!"

**Reviews:**
- Runs ALL five directors in parallel
- Synthesizes their feedback
- Highlights consensus issues
- Resolves conflicts between directors
- Provides prioritized action list

**Use for:** Major launches, landing pages, campaigns — anything that needs multi-perspective review

---

## How to Summon in the App

### Method 1: Click the Buttons (Easiest)

1. Open the **GTM Assistant** tab in the web app
2. Click **"Summon Deadites"** button (skull icon)
3. Click the director you want to summon
4. The summon incantation is sent automatically
5. Get your review!

### Method 2: Type the Incantation

Just type any of these in the chat:

- "Summon the brand deadite"
- "Summon the copy deadite"
- "Summon the product design deadite"
- "Summon the PMM deadite"
- "Summon the GTM deadite"
- "Unleash the deadite horde"
- "Dead by dawn!" (full team)
- "Necronomicon, release the [director] demon"

### Method 3: Natural Language

The system detects deadite summons, so you can also say:

- "I need a brand review on this landing page"
- "Can the copy director look at this email?"
- "Get the full design team to review this launch plan"

---

## What Context They Have

All deadites have access to:

### Design Context (from athena-poc)
- `design-context/brand.md` — Brand archetype, personality, emotional territory
- `design-context/voice-and-tone.md` — Voice, tone, banned words, legal no-gos
- `design-context/audience.md` — ICP, personas, jobs-to-be-done
- `design-context/positioning.md` — Positioning, differentiation, proof points

### GTM Reference (from this repo)
- `reference/positioning.md`
- `reference/messaging-framework.md`
- `reference/icp-and-personas.md`
- `reference/brand-voice-and-tone.md`
- `reference/traction-channels.md`

This means they know:
- ✅ Athena's brand (warm expert coach, not study-buddy or professor)
- ✅ Voice & tone rules (banned words, legal no-gos)
- ✅ Target audiences (students, institutions, educators)
- ✅ Positioning vs. ChatGPT and Quizlet
- ✅ GTM strategy and channels

---

## Example Workflows

### Review a Landing Page

1. Paste your landing page copy into chat
2. Say: "Unleash the deadite horde to review this landing page"
3. Get feedback from all 5 directors:
   - Brand: Is it on-brand and distinctive?
   - Copy: Is it clear and concise?
   - Design: Is the hierarchy right?
   - PMM: Does the positioning land?
   - GTM: Does the funnel connect?
4. Fix the top issues

### Review Email Copy

1. Paste your email
2. Say: "Summon the copy deadite"
3. Get:
   - Voice & tone notes
   - Line edits (before → after)
   - Clarity improvements
4. Apply the rewrites

### Review a Launch Plan

1. Describe your launch plan (or paste a doc link)
2. Say: "Summon the GTM deadite"
3. Get:
   - Funnel walk-through
   - Missing pieces checklist
   - Launch blockers
   - Measurement plan feedback
4. Fill the gaps

### Check Brand Consistency

1. Share what you're working on (logo, visual, page)
2. Say: "Necronomicon, release the brand demon!"
3. Get:
   - Coherence check (consistent with existing brand?)
   - Distinctiveness test (could a competitor use this?)
   - Personality assessment
   - Craft signal review
4. Strengthen the distinctive parts

---

## Review Output Format

Each director follows a structured format:

```markdown
## [Director Name] Review — [Your Artifact]

**Overall assessment:** 2-3 sentences

### Blockers / Launch blockers / Brand risks
Critical issues that must be fixed

### High-impact improvements / edits
Specific changes with before/after examples

### [Director-specific sections]
E.g., "Voice notes", "Funnel continuity", "Distinctiveness opportunities"

### What's working
Strong parts to preserve and amplify
```

The **full horde** adds a synthesis section:
- **Consensus** — issues multiple directors flagged (highest priority)
- **Conflicts** — where directors disagree (with recommended resolution)
- **Prioritized action list** — ordered across all reviews
- **What's working** — strengths to keep

---

## The Evil Dead Bit

If you summon deadite-style (with incantations like "Necronomicon", "summon the deadite", "unleash the horde"), you get:

**One brief Evil Dead-flavored greeting** (e.g., "Klaatu... Verata... Ni— *cough* — let's review your brand.")

**Then immediately rigorous, professional feedback.** The bit is the greeting, not the review itself.

If you just ask normally ("Can you review this copy?"), you get the same professional review without the horror flavor.

---

## Design Context vs. GTM Reference

**Design Context** (`design-context/`) — From athena-poc project
- Canonical Athena brand, voice, positioning
- Used by ALL Athena projects
- The single source of truth for "what Athena is"

**GTM Reference** (`reference/`) — This repo
- Your GTM-specific strategy
- Channels, experiments, pricing
- Updates more frequently

**Deadites use both** — they ground brand/voice reviews in design-context, and GTM/strategy reviews in your reference files.

---

## Rules the Deadites Follow

From the design-context:

1. **Do not invent metrics, customers, or features** — use documented proof or flag the gap
2. **Respect public vs. internal-only** — don't publish adoption numbers
3. **Legal/brand no-gos:**
   - Never say "FERPA compliant" or "FERPA certified"
   - Never promise dashboards, admin controls, or dates
   - Never present Athena as part of Canvas or required for coursework
4. **The gut-test:** *Would a student feel solid — not cheap, not embarrassed — recommending this to a friend?*

---

## When to Summon Which Deadite

| You Have | Summon |
|----------|--------|
| Landing page | Full horde (brand + copy + design + PMM + GTM) |
| Email copy | Copy Director |
| Visual design / mockup | Brand Director + Product Design Director |
| Launch plan / campaign | GTM Director |
| Positioning doc | Product Marketing Director |
| Value prop / messaging | Copy Director + Product Marketing Director |
| Feature announcement | GTM Director + Copy Director |
| Brand guidelines | Brand Director |
| Onboarding flow | Product Design Director + GTM Director |

**Default:** When in doubt, unleash the horde. You'll get all perspectives.

---

## Behind the Scenes

The deadites are implemented as:

1. **Detection** — API detects summon keywords in your message
2. **Context loading** — Loads design-context + reference files
3. **Skill execution** — Applies the director's review criteria
4. **Structured output** — Returns formatted review

The skills are based on the global skills in `~/.agents/skills/`:
- `brand-director`
- `copy-director`
- `product-design-director`
- `product-marketing-director`
- `gtm-director`
- `design-team-review` (the horde orchestrator)

---

## Tips for Best Results

1. **Be specific** — Paste actual copy, describe actual designs, link to real docs
2. **Provide context** — "This is for the educator landing page" or "This is a trial nurture email"
3. **Ask follow-ups** — Deadites can iterate on their feedback
4. **Use the horde for big stuff** — Don't waste 5 directors on a button label; use copy director
5. **Accept the feedback** — They're rigorous. Some critiques will sting. That's the point.

---

## Customization

Want to tweak how deadites work?

**Edit the system prompt** in `app/src/app/api/chat/route.ts`:
- Change the director instructions
- Add new review criteria
- Adjust the Evil Dead greeting style

**Edit the summon UI** in `app/src/components/DeaditeSummon.tsx`:
- Change button styles
- Add new directors
- Customize incantations

---

## Example Reviews

### Brand Director on a Landing Page

```markdown
## Brand Review — Educator Landing Page

**Overall assessment:** The page projects competence and warmth, landing squarely in the "warm expert coach" territory. However, it drifts toward generic SaaS in the benefits section and lacks distinctive Athena personality.

### Brand risks
1. **Hero illustration** uses generic "student at laptop" stock photography that Quizlet could use unchanged. Recommend custom illustration aligned with brand boards.
2. **CTA copy** ("Get Started") is category wallpaper. Athena should be more specific: "See My Study Plan" or "Connect My Classes".

### Coherence issues
- Typography shifts from Inter to system font in the FAQ section
- Button radius is 8px in hero, 4px in pricing (should be consistent)

### Distinctiveness opportunities
- Lead with the Canvas connection in the hero (only Athena has this)
- Show a Study Space in the hero screenshot (not generic chat)
- Use "coach" language throughout ("coaches you to the answer" not "helps you study")

### What's working
- Calm, confident voice in the headline ("Know exactly what to study next")
- Clean visual hierarchy
- Clear benefits before features
```

### Copy Director on an Email

```markdown
## Copy Review — Trial Day 3 Email

**Overall assessment:** Voice is warm and supportive, but the email is too long and buries the CTA. Subject line is weak.

### Blockers
**Subject:** "Your Athena Trial" → Generic, no hook. Try: "You've nailed 3 concepts—here are 2 more" (specific, earned progress)

### High-impact edits
**Before:** "We wanted to check in and see how your first few days with Athena have been going. We hope you're finding it helpful as you prepare for your upcoming exams."

**After:** "You've practiced 5 concepts this week. Here's what you've nailed and what needs one more round."

*Rationale:* Specific > generic; lead with their progress.

**Before:** "Click here to continue studying"

**After:** "Review your weak spots"

*Rationale:* Specific action, benefit-led.

### Line edits
- Line 12: "utilize" → "use"
- Line 18: "We're here to help you succeed" → Cut (filler)
- Line 22: "Don't hesitate to reach out" → "Questions? Reply to this email."

### Voice notes
Overall tone is right (supportive coach), but watch for company-speak ("we wanted to check in"). Stay in "coach checking on student" register.

### What's working
- Celebration of mastered concepts is earned and specific
- No pushy conversion language
```

---

Enjoy summoning the deadites! 💀🔥
