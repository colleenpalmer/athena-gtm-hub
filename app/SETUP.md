# GTM App Setup Guide

## Prerequisites

- Node.js 18+ installed
- Anthropic API key (get one at https://console.anthropic.com/)

## Installation Steps

### 1. Navigate to the app directory

```bash
cd app
```

### 2. Install dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Anthropic SDK
- Tailwind CSS
- TypeScript
- Other dependencies

### 3. Create environment file

```bash
cp .env.example .env.local
```

### 4. Add your API key

Open `.env.local` and add your Anthropic API key:

```
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
```

> **Important:** Never commit `.env.local` to git. It's already in `.gitignore`.

### 5. Run the development server

```bash
npm run dev
```

The app will start at http://localhost:3000

## First-Time Setup Checklist

- [ ] Navigate to `app/` directory
- [ ] Run `npm install`
- [ ] Copy `.env.example` to `.env.local`
- [ ] Add Anthropic API key to `.env.local`
- [ ] Run `npm run dev`
- [ ] Open http://localhost:3000
- [ ] Verify all three tabs work (Projects, Experiments, Chat)
- [ ] Test adding a project
- [ ] Test chat (make sure it references your positioning)

## Troubleshooting

### npm install fails

**Problem:** Module not found or permission errors

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Chat shows API error

**Problem:** "ANTHROPIC_API_KEY not set" or "Invalid API key"

**Solutions:**
1. Check `.env.local` exists in the `app/` directory
2. Verify API key starts with `sk-ant-`
3. Restart dev server: Stop with Ctrl+C, run `npm run dev` again
4. Check you're using a valid API key from https://console.anthropic.com/

### Reference files not loading in chat

**Problem:** Chat doesn't know about your positioning/personas

**Solutions:**
1. Make sure `reference/` folder exists one level up from `app/`
2. Verify `.md` files exist in `reference/`
3. Check file paths in `app/src/lib/storage.ts`

### Data not saving

**Problem:** Projects/experiments disappear on refresh

**Solutions:**
1. Check `data/` directory exists one level up from `app/`
2. Verify write permissions
3. Look for errors in browser console (F12)

### Port 3000 already in use

**Problem:** Another app is using port 3000

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or run on a different port
npm run dev -- -p 3001
```

## Development Tips

### Hot Reload

The app uses Next.js hot reload:
- Changes to React components reload instantly
- Changes to API routes require page refresh
- Changes to `.env.local` require server restart

### Viewing Data

Data is stored as JSON in `../data/`:
```bash
# View projects
cat ../data/projects.json

# View experiments
cat ../data/experiments.json
```

### Resetting Data

To start fresh:
```bash
rm ../data/*.json
```

The app will recreate empty files on next use.

## Production Build

To build for production:

```bash
npm run build
npm start
```

The production server runs on http://localhost:3000 by default.

## Next Steps

Once the app is running:

1. **Add your first project** (Projects tab)
2. **Log an experiment** (Experiments tab)
3. **Test the chat** (GTM Assistant tab)
4. **Explore the code** and customize as needed

## Questions?

- Check `app/README.md` for feature documentation
- Look at component code in `src/components/`
- Review API routes in `src/app/api/`

The codebase is intentionally simple — edit freely!
