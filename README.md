# Comafro

Export website for Comafro General Trading Ltd: nine pages in English and Arabic (RTL).

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript, `src/` directory)
- [Tailwind CSS v4](https://tailwindcss.com) (theme + utilities; preflight is left out so the design renders against browser defaults)
- [shadcn/ui](https://ui.shadcn.com) (`components.json`, components in `src/components/ui`, colours mapped to the Comafro tokens)
- React Context API for app state (`src/context/app-context.tsx`: locale, theme, mobile menu)
- [Clerk](https://clerk.com) for authentication (`/sign-in`, `/sign-up`, protected `/dashboard`)

## Getting started

```bash
npm install
cp .env.example .env.local   # optional: add your Clerk keys
npm run dev
```

Open http://localhost:3000. It redirects to `/en`, or to `/ar` when the browser prefers Arabic.

## Deploying to Vercel

The site deploys with **no environment variables**. Clerk switches on only when both
`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are set (`src/lib/clerk.ts`). Until then the
18 public pages are served as usual and the auth routes show a "not configured" notice instead of erroring.

To turn on accounts, add both keys under Project → Settings → Environment Variables (for Production and
Preview) and redeploy. `NEXT_PUBLIC_*` values are baked in at build time, so a redeploy is needed after
changing them.

## Routes

| Page | English | Arabic |
|---|---|---|
| Home | `/en` | `/ar` |
| About | `/en/about` | `/ar/about` |
| What we do | `/en/services` | `/ar/services` |
| Products | `/en/products` | `/ar/products` |
| Contact | `/en/contact` | `/ar/contact` |
| Quality & compliance | `/en/quality` | `/ar/quality` |
| Seasonality | `/en/seasonality` | `/ar/seasonality` |
| Sourcing network | `/en/sourcing` | `/ar/sourcing` |
| Buyer resources | `/en/resources` | `/ar/resources` |

All 18 pages are statically generated. Clerk runs only on the auth routes, `/dashboard` and API routes (`src/proxy.ts`).

## Project structure

```
design/                     # Design handoff (source of truth for visuals); serve with `npx serve design`
src/
  app/
    [lang]/                 # Site root layout (html lang, fonts, header/footer) and one folder per page
    (auth)/                 # Clerk sign-in / sign-up / dashboard with their own root layout
    global-not-found.tsx    # 404 for unmatched URLs
    globals.css             # Tailwind + shadcn token mapping
    site.css                # Design tokens (cream + mono themes), base rules, mobile-portrait rules, hover states
    fonts.ts                # Archivo, Newsreader, JetBrains Mono, Noto Kufi Arabic via next/font
  components/
    pages/en, pages/ar      # Page content, converted 1:1 from design/index.html
    site/                   # Header, footer, theme toggle, hero typewriter, custom select, enhancer
    ui/                     # shadcn/ui
  context/app-context.tsx
  lib/i18n.ts               # Locales, page slugs, titles
  proxy.ts
```

Page components use the design's inline styles verbatim, so values can be checked against `design/index.html`.
`components/site/enhancer.tsx` carries the reference's runtime behaviour: scroll reveal, eyebrow rules and the
mobile-portrait centering tags that `site.css` keys off.

## Before launch

- The contact form shows a confirmation but does not send yet. Wire `submitForm` in `src/components/pages/*/contact.tsx` to an API route or form service.
- Replace the placeholder phone number (+256 700 000 000) and confirm the email addresses.
- Confirm the operating-record dates on Home and About.
