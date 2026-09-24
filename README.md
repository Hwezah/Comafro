# Comafro

## Tech stack

- [Next.js](https://nextjs.org) (App Router, TypeScript, `src/` directory)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (`components.json`, components in `src/components/ui`)
- React Context API for app state (`src/context`)
- [Clerk](https://clerk.com) for authentication

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a Clerk application at https://dashboard.clerk.com, then copy the env template and fill in your keys:

   ```bash
   cp .env.example .env.local
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

   Open http://localhost:3000.

## Project structure

```
src/
  app/
    layout.tsx               # ClerkProvider + AppProvider + header
    page.tsx                 # Landing page
    dashboard/page.tsx       # Protected route
    sign-in/[[...sign-in]]/  # Clerk sign-in
    sign-up/[[...sign-up]]/  # Clerk sign-up
  components/
    ui/                      # shadcn/ui components
    site-header.tsx
    theme-toggle.tsx
  context/
    app-context.tsx          # Global app state (theme) via Context API
  lib/utils.ts               # cn() helper
  proxy.ts                   # Clerk middleware (Next.js 16 "proxy" convention)
```

Protected routes are listed in `src/proxy.ts` (`createRouteMatcher`).

## Adding shadcn components

```bash
npx shadcn@latest add dialog
```
