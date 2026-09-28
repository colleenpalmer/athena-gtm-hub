# Athena GTM App

A web application for managing your go-to-market strategy, tracking projects, experiments, and chatting with an AI assistant that knows your GTM context.

## Features

✅ **Project Tracker** — Manage all your GTM projects in one place  
✅ **Experiment Log** — Track channel tests and their results  
✅ **AI Chat Assistant** — Chat interface with access to your reference materials  
✅ **Integrated Context** — Automatically loads your positioning, personas, and messaging

## Quick Start

### 1. Install Dependencies

```bash
cd app
npm install
```

### 2. Set Up Environment

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Add your Anthropic API key to `.env.local`:

```
ANTHROPIC_API_KEY=sk-ant-...
```

> Get an API key at https://console.anthropic.com/

### 3. Run the App

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## How It Works

### Data Storage

All data is stored as JSON files in the `../data/` directory (one level up from the app folder):

- `projects.json` — Your GTM projects
- `experiments.json` — Channel test results
- `decisions.json` — Decision log

These files are created automatically when you add your first item.

### Reference Integration

The AI chat assistant automatically loads reference files from `../reference/`:

- `positioning.md`
- `messaging-framework.md`
- `icp-and-personas.md`
- `traction-channels.md`
- And more...

This means the assistant knows your strategy and can give grounded advice.

### Three Main Views

#### 1. Projects Tab

Track all active GTM work:
- Add new projects with status, owner, deadlines
- Update next actions as work progresses
- Link to `work-in-progress/` folders

#### 2. Experiments Tab

Log channel tests following the Bullseye framework:
- Plan experiments (hypothesis, channel, segment)
- Track results (CAC, conversion, fit)
- Make decisions (Scale / Iterate / Kill)

#### 3. GTM Assistant Tab

Chat with an AI agent that has context on your GTM strategy:
- Ask about positioning, messaging, personas
- Get channel recommendations
- Review copy for brand consistency
- Design experiments
- Get strategic advice

**🔥 NEW: Summon the Design Deadites**
- Click "Summon Deadites" to call upon the AI design directors
- Brand Director, Copy Director, Product Design Director, PMM Director, GTM Director
- Or summon "THE ENTIRE HORDE" for a full team review
- Get rigorous, professional feedback with Evil Dead-style flair
- Based on the design-context from the athena-poc project

## Development

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** Anthropic Claude API
- **Icons:** Lucide React
- **Markdown:** React Markdown

## File Structure

```
app/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── api/          # API routes (projects, experiments, chat)
│   │   ├── page.tsx      # Main page
│   │   └── layout.tsx    # Root layout
│   ├── components/       # React components
│   │   ├── ProjectList.tsx
│   │   ├── ExperimentTracker.tsx
│   │   └── ChatInterface.tsx
│   ├── lib/              # Utilities
│   │   └── storage.ts    # Data persistence
│   └── types/            # TypeScript types
│       └── index.ts
├── package.json
└── README.md
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key for chat | Yes |

## Troubleshooting

### Chat not working?

1. Make sure `.env.local` exists with your API key
2. Restart the dev server after adding the key
3. Check console for error messages

### Data not persisting?

Data is stored in `../data/` (one level up from the app folder). Make sure:
1. The app has write permissions
2. You're running the app from the `app/` directory

### Reference files not loading?

The app looks for reference files in `../reference/`. Make sure:
1. The `reference/` folder exists one level up
2. Files are named correctly (`.md` extension)

## Next Steps

1. **Add your first project** — Click "Add Project" in the Projects tab
2. **Log an experiment** — Track a channel test in the Experiments tab
3. **Chat with the assistant** — Ask it to help with GTM strategy
4. **Customize the app** — Edit components to fit your workflow

## Contributing

This is a custom tool for your team. Feel free to:
- Add new features
- Customize the UI
- Extend the AI prompts
- Add more data types

The code is intentionally simple and hackable.
