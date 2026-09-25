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
    site.css                # Design tokens (cream + dark grey themes), base rules, mobile-portrait rules, hover states
    fonts.ts                # Archivo, Newsreader, JetBrains Mono, Noto Kufi Arabic via next/font
  components/
    pages/en, pages/ar      # Page content, converted 1:1 from design/index.html
    site/                   # Header, footer, contact side panel, theme toggle, hero typewriter, custom select, enhancer
    ui/                     # shadcn/ui
  context/app-context.tsx
  lib/i18n.ts               # Locales, page slugs, titles
  lib/contact.ts            # Phone, WhatsApp, emails, Lami Meat link, mobile-menu breakpoint
  proxy.ts
```

Page components use the design's inline styles verbatim, so values can be checked against `design/index.html`.
`components/site/enhancer.tsx` carries the reference's runtime behaviour: scroll reveal, eyebrow rules and the
mobile-portrait centering tags that `site.css` keys off. It also makes the shorter of two side-by-side columns
sticky (below the header) while the taller one scrolls; hero rows and columns inside scrollable tables are left alone.

## Search

The header search (also `/` or Ctrl/Cmd+K) fetches the nine pages for the current language on first open and
searches every section (`src/lib/search.ts`). Matching ignores case and accents; normalizes Arabic letter variants,
diacritics, prefixes (و ف ب ل ال) and Arabic-Indic digits; matches partial words, simple plurals, quoted phrases,
synonyms (e.g. banana → matoke, meat → halal beef) and corrects one-letter typos. Results link to the section
(`/en/products#s3`).

## Accounts (placeholder)

The account icon opens a Clerk-style sign-in card backed by a mock session in `localStorage`
(`src/components/site/mock-auth.tsx`). It needs no keys and sends nothing. Real Clerk stays optional: see
"Deploying to Vercel".

## Header menu

Buttons keep their normal size; when room runs out they switch to short labels ("Quote", "ع") instead of shrinking.

| Width | Header |
|---|---|
| ≥ 1100px | Full navigation, "Request a quote", "العربية" |
| 901–1099px | Full navigation, short labels "Quote" and "ع" |
| ≤ 900px, phones in landscape | Logo · search · account · ع · Quote · stripes; navigation in the full-screen menu |
| Phones in portrait | Logo · account · ع · stripes; search and Quote in the menu |

The stripes open the **contact side panel** above 900px and the **full-screen menu** below. The breakpoint is
`MOBILE_MENU_QUERY` in `src/lib/contact.ts`, kept in sync with the header rules in `src/app/site.css`.

## Before launch

- The contact form shows a confirmation but does not send yet. Wire `submitForm` in `src/components/pages/*/contact.tsx` to an API route or form service.
- Confirm the trade-desk email addresses (the phone and WhatsApp number, +256 773 828 552, live in `src/lib/contact.ts`).
- Confirm the operating-record dates on Home and About.
