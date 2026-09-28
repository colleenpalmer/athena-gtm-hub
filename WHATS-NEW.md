# What's New — Design Deadites! 💀

## TL;DR

Your GTM app can now **summon AI design directors** who give you rigorous feedback on brand, copy, design, positioning, and GTM strategy — with Evil Dead-style flair.

---

## What Was Added

### 1. Design Context from athena-poc

Copied the canonical design context:
- `design-context/brand.md` — Athena's brand archetype & personality
- `design-context/voice-and-tone.md` — Voice, tone, banned words
- `design-context/audience.md` — ICP, personas, jobs-to-be-done
- `design-context/positioning.md` — Positioning & differentiation
- `design-context/gtm-notes.md` — GTM strategy

**This is the single source of truth for "what Athena is" as a brand.**

### 2. Deadite Summon UI

New component in the chat interface (`app/src/components/DeaditeSummon.tsx`):
- Click buttons to summon specific directors
- Or type incantations like "summon the brand deadite"
- Visual grid with color-coded directors
- "Unleash the horde" for full team review

### 3. Five AI Design Directors

Each specialized in a different discipline:

| Director | Focus | Summon |
|----------|-------|--------|
| 💜 **Brand Director** | Brand consistency, identity, distinctiveness | "Necronomicon, release the brand demon!" |
| 💙 **Copy Director** | Voice, tone, clarity, microcopy | "Summon the copy deadite!" |
| 💚 **Product Design Director** | UX, IA, visual hierarchy, accessibility | "Summon the product design deadite!" |
| 💗 **Product Marketing Director** | Positioning, messaging, value props | "Summon the PMM deadite!" |
| 🧡 **GTM Director** | Launch readiness, channels, funnel | "Summon the GTM deadite!" |
| 🔥 **THE ENTIRE HORDE** | All 5 directors + synthesis | "Dead by dawn! Unleash the horde!" |

### 4. Context-Aware Reviews

Deadites have access to:
- ✅ Athena's brand & voice (from `design-context/`)
- ✅ Your GTM strategy (from `reference/`)
- ✅ Positioning, personas, channels
- ✅ Legal no-gos and banned words

They give feedback grounded in **your actual brand and strategy**, not generic advice.

### 5. Evil Dead Flair

If you use summon incantations, you get:
- One brief Evil Dead-flavored greeting
- Then rigorous, professional feedback

**Example:**
> "Klaatu... Verata... Ni— *cough* — let's review your brand.
>
> ## Brand Review — Educator Landing Page
>
> **Overall assessment:** The page projects competence and warmth..."

---

## How to Use It

### Quick Start

1. **Run the app** (if not already running):
   ```bash
   cd app && npm run dev
   ```

2. **Open GTM Assistant tab** in your browser

3. **Click "Summon Deadites"** button (skull icon)

4. **Click a director** or click "THE ENTIRE HORDE"

5. **Get your review!**

### Example Uses

**Review a landing page:**
```
[Paste your landing page copy]

Unleash the deadite horde to review this
```

**Review email copy:**
```
[Paste your email]

Summon the copy deadite
```

**Review a launch plan:**
```
[Describe your launch]

Summon the GTM deadite
```

**Check brand consistency:**
```
[Share what you're working on]

Necronomicon, release the brand demon!
```

---

## What Changed in the Code

### New Files
- `app/src/components/DeaditeSummon.tsx` — Summon UI component
- `design-context/*.md` — Canonical Athena brand files (copied from athena-poc)
- `DEADITES-GUIDE.md` — Complete documentation

### Modified Files
- `app/src/components/ChatInterface.tsx` — Added deadite summon panel
- `app/src/app/api/chat/route.ts` — Deadite detection & skill loading
- `app/src/lib/storage.ts` — Added design-context file readers
- `README.md`, `START-HERE.md`, `app/README.md` — Updated docs

### No Breaking Changes
- Existing chat functionality unchanged
- Existing projects/experiments unchanged
- Just added new capabilities

---

## Documentation

**Full guide:** `DEADITES-GUIDE.md`

Covers:
- What each director reviews
- How to summon them
- Example workflows
- Output format
- Tips for best results

---

## Why This Matters

### Before:
- Generic AI feedback not grounded in Athena's brand
- Had to manually check brand guidelines
- No structured design review process

### After:
- Feedback grounded in Athena's actual brand & voice
- Directors know the banned words, legal no-gos, emotional territory
- Structured, actionable reviews
- Fun Evil Dead theming makes it memorable

---

## Next Steps

1. **Try it:** Summon a deadite and test it with real work
2. **Read the guide:** `DEADITES-GUIDE.md` has examples
3. **Customize:** Edit prompts in `app/src/app/api/chat/route.ts` if needed
4. **Share:** The deadites are now part of your GTM workflow

---

## Credits

- **Design context** from the athena-poc project
- **Deadite skills** based on `~/.agents/skills/` (brand-director, copy-director, etc.)
- **Evil Dead theming** because why not make design reviews fun? 💀

---

Enjoy unleashing the horde! 🔥
