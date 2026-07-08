# Sattva AI is a small senior team that designs and ships AI-n

A standalone Next.js site generated with Sattva Builder. **You own this code** — host it
anywhere, edit anything.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & deploy

```bash
npm run build
```

The easiest deploy is [Vercel](https://vercel.com/new): import this folder (or push it to a
Git repo and import that) — zero configuration needed. Any Node host that runs
`next start` works too.

## Where things live

- **Content** — `src/data/site.ts` (every page's sections and copy, plain typed data)
- **Sections** — `src/components/blocks/` (plain React components; edit freely)
- **UI primitives** — `src/components/ui/` (buttons, cards, … used by sections)
- **Design tokens** — `src/app/globals.css` (colors, fonts, radii — change once, applies everywhere)
- **Pages & routing** — `src/app/` (standard Next.js App Router)
