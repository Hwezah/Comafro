# Handoff: Comafro General Trading Ltd — export website

## Overview
Marketing and enquiry site for Comafro General Trading Ltd (Kireka, Wakiso, Uganda): fresh produce (matoke, avocado, pineapple) and halal beef exported to Gulf, Middle East and EU buyers. Nine pages in English and nine in Arabic (RTL), with full parity.

## About the design files
`site/` is a **working HTML design reference**, not production code. `site/index.html` is a single-file prototype rendered by `support.js`, with every page client-side routed from one component state. Recreate it in the target stack (e.g. Next.js/Astro plus a real i18n router, with one route per page per locale: `/en/…`, `/ar/…`). To run the reference, serve `site/` statically (`npx serve site`). Hash-free state routing means the URL does not change between pages.

## Fidelity
**High-fidelity.** Colors, type, spacing, copy, animations and responsive behavior are final. Match them pixel for pixel.

## Screenshots
`screenshots/` holds full-page captures. Animations are frozen at their end state and the theme toggle is hidden.
- `mobile-390/`: 390px, mobile portrait (the only width with its own media rules). EN and AR.
- `tablet-820/`: 820px, tablet / phone landscape. EN.
- `desktop-1440/`: 1440px, desktop (content max-width). EN and AR.

Files are numbered in page order: 01 home, 02 about, 03 services ("What we do"), 04 products, 05 quality (Quality & compliance), 06 sourcing (Sourcing network), 07 calendar (Seasonality), 08 resources (Buyer resources), 09 contact.
The captures are DOM re-renders, so small text-overlap artifacts can appear (e.g. the documentation checklist, the footer "Markets" column). **The live `site/index.html` is the source of truth.**

## Breakpoints
- **Fluid ≥ 641px**: one layout that scales. Grids use `repeat(auto-fit, minmax(min(Npx,100%),1fr))` and wrap naturally. Content max-width is 1440px, centered, with side padding `clamp(22px, 5vw, 80px)`.
- **Mobile portrait `(max-width: 640px) and (orientation: portrait)`**:
  - Side padding is 13px.
  - Header shows the logo, language toggle and burger. The desktop nav, the "For buyers" bar and the header "Request a quote" button are hidden, and all of them live in the burger drawer.
  - Button pairs sit in a 90%-width row of equal flex children with shortened labels ("See exports", "Talk to trade desk").
  - Centering rules:
    - Headings, subheadings and plain paragraphs are **centered**.
    - Anything with a bullet or number marker stays **left-aligned**. That covers lists, the 01–06 / Step 1–4 rows, the timeline (2026 · Q3), chain-of-custody stages and label/value rows.
    - Anything inside a box stays left-aligned: cards with a border on three or more sides, or inset background panels.
    - Single-line leading/closing captions inside boxes, and rows made only of links, are centered.
    - Right-aligned value cells become left-aligned.
    - The logo and footer lockup are centered.
  - In the footer, the Pages and For buyers columns sit side by side.

## Pages (EN / AR parity)
Home · About · What we do · Products · Contact (main nav). Quality & compliance · Seasonality · Sourcing network · Buyer resources (the "For buyers" bar).
- **Home**:
  - Hero with a typewriter destination line (see Interactions).
  - Chain-of-custody card with four stages.
  - Four-cell facts strip.
  - Dark route band: Kampala → Mombasa → Jebel Ali → Doha/Riyadh.
  - Four-link chain grid.
  - Operating-record timeline and four stats.
  - "First order" steps plus a documentation checklist panel.
  - 40′ HC reefer loading-plan diagram and a CTA.
- **Contact**:
  - Enquiry form: name, company, email, country, product (custom dropdown), Incoterms (custom dropdown), volume and message.
  - On submit, the form shows a confirmation state. **It does not send yet.** Wire it to an API route or form service.
- The other pages are editorial: section eyebrow, heading, prose, marker rows and tables. See the screenshots.

## Header
One row: lockup on the left, then nav links (right-aligned), the language toggle, and "Request a quote" last. A secondary "For buyers" bar sits below it with a mono label and four links. The active nav item uses the `--accent` color plus an underline.

## Interactions & behavior
- **Language toggle**:
  - Switches the entire site between EN and AR and keeps the current page.
  - AR uses `dir="rtl"`, Noto Kufi Arabic, and a mirrored lockup (mark on the right in the footer).
  - Switching resets the typewriter.
- **Hero typewriter**:
  - Types destinations one character at a time with irregular human pacing.
  - Holds for 2s, backspaces, then types the next destination (Jebel Ali, Mombasa, Doha…).
  - Caret blink uses `comafro-caret` keyframes: opacity 1 for 0–45%, 0 for 55–100%.
  - Respects `prefers-reduced-motion` by showing static text.
- **Scroll reveal** (IntersectionObserver; replays in both scroll directions):
  - Applies to h1–h4 and `[data-reveal]`.
  - Start state: opacity 0, translateY 30px for h1/h2 and 18px for h3/h4.
  - Transition: opacity 620ms `cubic-bezier(.22,.7,.2,1)`, transform 820ms `cubic-bezier(.16,.84,.24,1)`.
  - Stagger delay per sibling is `90ms + min(n,4) × 120ms`.
  - Disabled under reduced motion.
- **Eyebrow rules**:
  - The small ochre mono labels above section titles have a hairline rule that draws left-to-right when the label enters view.
  - The rule overshoots the text by 5.5em, holds while in view, and retracts on exit.
  - On mobile portrait, the eyebrow is centered and draws from the center.
- **Theme toggle**:
  - A fixed pill at bottom-right (20px inset) with a 42×20 track and a 16px knob that slides left 2px ↔ 24px over 260ms.
  - Labels read CREAM / TAN. The choice is persisted in `localStorage['comafro-theme']` and set as `<html data-theme="light|mono">`.
- **Custom selects**:
  - The native `<select>` stays hidden underneath for form value.
  - The button face has a 1px border and a chevron that rotates 180°.
  - The panel fades in and slides from translateY(-6px) to 0 over 160–180ms.
  - Rows get a `--bg2` background on hover/selected; the selected row is weight 600.
  - Closes on outside click or Escape. RTL aware.
- **Links/buttons**:
  - Primary button: `--ink` background, `--bg` text, padding 9px 16px, square corners. Hover background is `--ink-hover`.
  - Secondary button: 1px ink outline.
  - Mono text links (e.g. the 01–04 step links): hover shows a 1px underline and the `--accent` color.

## State
`page` (home|about|services|products|quality|sourcing|calendar|resources|contact), `lang` (en|ar), `menu` (drawer open), `sent` (form submitted), `theme` (light|mono, persisted).

## Design tokens
Every color is a CSS variable on `:root`, and `:root[data-theme="mono"]` overrides them for the second theme.

| token | light (cream, default) | mono (black/white/tan) |
|---|---|---|
| --bg | #F4EFE4 | #FFFFFF |
| --bg2 | #EDE6D8 | #F4F2ED |
| --paper | #FBF8F1 | #FCFBF8 |
| --paper2 | #F7F2E6 | #F8F6F1 |
| --line-warm | #E7DFCB | #E5E2DA |
| --ink | #12271C | #0B0B0A |
| --ink-soft | #2A3B2F | #242320 |
| --ink-hover | #1E4030 | #38352C |
| --ink-deep | #0E2018 | #000000 |
| --muted | #4A5A4D | #6B675E |
| --accent | #8E3F1C | #9A6A2A |
| --ochre | #8A5A12 | #8F6B14 |
| --ochre-deep | #6B5324 | #6E5210 |
| --ochre-deepest | #5F5210 | #57410C |
| --ochre-light | #D9A441 | #D8AE3C |
| --sage | #A9BAA9 | #C9C4B7 |
| --sage-light | #C6D3C6 | #D6D2C7 |
| --sage-pale | #E3EAE3 | #EFEDE6 |
| --sage-mid | #B6C4B6 | #CFCABD |
| --sage-soft | #D6DDD3 | #DFDBD1 |

Translucent lines and shadows use `rgba(var(--ink-rgb), α)`. `--ink-rgb` is 18,39,28 in light and 12,12,11 in mono. The usual line alphas are 0.16 (hairline), 0.28–0.35 (rules and field borders) and 0.1 (shadow).

**Type (Google Fonts):**
- Archivo 400–700: headings and UI.
- Newsreader: serif lead paragraphs.
- JetBrains Mono: eyebrows, labels, captions and data, at 9.5–12.5px with letter-spacing 0.1–0.12em.
- Noto Kufi Arabic: all Arabic text.

Headings use fluid `clamp()` sizes (see the source per section). Section vertical padding is roughly `clamp(40px,6vw,84px)`. Corners are square everywhere except the theme pill (999px). Shadows are used only on the theme pill (`0 2px 10px rgba(ink,.1)`) and the dropdown panel (`0 14px 34px rgba(ink,.16)`).

**Lockup:** the mark sits to the left of a two-line wordmark. "COMAFRO" is Archivo 600. "GENERAL TRADING LTD" is thin spaced caps set in mono. In the Arabic footer the lockup is mirrored.

## Assets
- `site/assets/comafro-mark.png`: the gold logo mark (client supplied).
- No photography yet. The route map and reefer diagram are built from HTML/CSS/SVG.

## Content still to fill before launch
- Operating-record dates.
- Phone number (+256 700 000 000 is a placeholder) and trade@comafro.com.
- Enquiry form delivery.

## Files
- `site/index.html`: the full design, all pages and both languages. Inline styles, so the values can be read directly.
- `site/support.js`: the runtime for the reference only. Not needed in the rebuild.
- `site/vercel.json`: static hosting config for the reference.
- `screenshots/…`: 45 full-page PNGs.
