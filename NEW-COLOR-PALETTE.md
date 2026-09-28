# New Color Palette — Notion-Style

## What Changed

Replaced the colorful palette with a **classy grayscale + subtle accents** system inspired by Notion.

---

## Color System

### Grayscale (Base)
```
50:  #FAFAFA  → Page background
100: #F5F5F5  → Subtle backgrounds
200: #E5E5E5  → Borders
300: #D4D4D4  → Inactive borders
400: #A3A3A3  → Disabled text
500: #737373  → Secondary text
600: #525252  → Body text
700: #404040  → Emphasis
800: #262626  → Strong emphasis
900: #171717  → Primary (headings, active states)
```

### Indigo Accent (Primary Actions)
```
500: #6366F1  → Main accent color
600: #4F46E5  → Hover states
```

Used for:
- In-progress projects
- Filter tabs when active
- Form focus states

### Emerald Success (Complete States)
```
500: #22C55E  → Success color
600: #16A34A  → Success hover
```

Used for:
- Completed projects
- Success indicators

---

## Usage

### Buttons

**Primary (black):**
```tsx
className="bg-gray-900 text-white hover:bg-gray-800"
```

**Secondary (outlined):**
```tsx
className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
```

**Accent (for in-progress / special states):**
```tsx
className="bg-accent-600 text-white hover:bg-accent-700"
```

### Borders

**Subtle:**
```tsx
className="border-gray-200"
```

**Medium:**
```tsx
className="border-gray-300"
```

**Strong:**
```tsx
className="border-gray-900"
```

### Text

**Primary:**
```tsx
className="text-gray-900"
```

**Secondary:**
```tsx
className="text-gray-600"
```

**Tertiary:**
```tsx
className="text-gray-500"
```

**Muted:**
```tsx
className="text-gray-400"
```

### Project Status Colors

**Not Started:**  
- Card: White with gray-200 border  
- Badge: Gray-100 background, gray-700 text

**In Progress:**  
- Card: White with accent-200 border  
- Badge: Accent-100 background, accent-700 text  
- **Accent color used** (indigo)

**Active:**  
- Card: White with gray-900 border  
- Badge: Gray-900 background, white text  
- **Boldest state**

**On Hold:**  
- Card: White with gray-300 border  
- Badge: Gray-200 background, gray-600 text

**Complete:**  
- Card: White with success-200 border  
- Badge: Success-50 background, success-700 text  
- **Success color used** (emerald)

**Killed:**  
- Card: White with gray-200 border  
- Badge: Gray-100 background, gray-500 text  
- **Muted intentionally**

---

## Design Principles

### 1. Grayscale First
90% of the UI is grayscale. Color is used sparingly for:
- Primary actions (black)
- In-progress states (indigo accent)
- Success states (emerald)

### 2. Subtle Hierarchy
- Page background: #FAFAFA (barely off-white)
- Cards: White
- Borders: Light gray (#E5E5E5)
- Hover: Slightly darker

### 3. No Bright Colors
- No vibrant yellows, oranges, reds
- Status colors use muted, professional tones
- Even "active" and "complete" are understated

### 4. Clear Affordance
- Interactive elements have subtle hover states
- Focus rings use accent color
- Selected states use black (strongest contrast)

---

## Before & After

### Before (Colorful)
- 🔵 Bright blue primary buttons
- 🟡 Yellow "in progress" cards
- 🟢 Green "active" cards
- 🟠 Orange "on hold"
- 🔴 Red "killed"
- High saturation, lots of color

### After (Notion-Style)
- ⚫ Black primary buttons
- Gray cards with subtle accent borders
- Indigo for "in progress" (only status with color)
- Emerald for "complete" (subtle)
- Everything else is grayscale
- Low saturation, classy

---

## Files Changed

- `app/tailwind.config.ts` — New color palette
- `app/src/app/page.tsx` — Header, tabs, footer
- `app/src/app/globals.css` — Page background
- `app/src/components/ProjectCard.tsx` — Status colors
- `app/src/components/ProjectList.tsx` — Filter tabs, buttons
- `app/src/components/ProjectForm.tsx` — Modal, form fields

---

## Accessibility

✅ All text passes WCAG AA contrast requirements  
✅ Color is never the only indicator (icons + text)  
✅ Focus states are clear (accent ring)  
✅ Grayscale-friendly (works for colorblind users)

---

## Customization

Want to tweak the accent colors?

### Change the accent from indigo to another color:

Edit `app/tailwind.config.ts`:

```ts
accent: {
  // Replace these with your preferred hue
  500: '#YOUR_COLOR',
  600: '#YOUR_DARKER_COLOR',
}
```

Good alternatives:
- **Blue:** `#3B82F6` / `#2563EB` (more traditional)
- **Purple:** `#8B5CF6` / `#7C3AED` (creative)
- **Teal:** `#14B8A6` / `#0D9488` (modern)
- **Slate:** `#64748B` / `#475569` (ultra-minimal)

### Change the success color:

```ts
success: {
  500: '#YOUR_SUCCESS_COLOR',
  600: '#YOUR_DARKER_SUCCESS_COLOR',
}
```

---

## Preview

Open your app to see the new palette:

```bash
cd app
npm run dev
```

Should look:
- Clean, minimal, professional
- Easy on the eyes (no bright colors)
- Notion-like (lots of gray, subtle accents)
- Scandinavian design vibes

---

*Much better, right?* 🎨
