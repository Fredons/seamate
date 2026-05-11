# Seamate Maritime Integrated Services — Website

The official website for [Seamate Maritime Integrated Services Limited](https://seamategroup.com), a Lagos-based, ISO 9001:2015 certified maritime services company. Ship management, marine inspection, HSSE, shipping & logistics, and energy trade across West Africa and the EMEA corridor.

## Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, fully static prerender)
- **Runtime:** React 19
- **Styling:** Tailwind CSS v4 with `@theme inline` design tokens
- **Typography:** DM Sans (body), Instrument Serif (display), JetBrains Mono (mono) via `next/font/google`
- **Type system:** TypeScript 5, strict mode

## Information architecture

Six routes; everything prerenders to static HTML at build.

| Route | Purpose |
|---|---|
| `/` | Editorial homepage — Hero, Trust strip, Services, Energy & Trade, Sustainability, Awards, Partner Wall |
| `/about` | Story, values, why-local, credentials, awards, partner-with-us |
| `/services` | Four service lines on one scannable page (Ship Management, Marine Inspection, HSSE, Shipping & Logistics) |
| `/energy-trade` | Flagship commercial pillar — Dangote Refinery distribution, SPM, FOB, Coastal Shipping |
| `/sustainability` | Four pillars (Decarbonisation, Blue Economy, SASI Cadetship, STEM Hub) + UN SDG alignment |
| `/contact` | Emails, phones, Lagos office, response SLA. No forms — `mailto:` and `tel:` only |

## Project layout

```
src/
  app/
    layout.tsx              Root metadata, fonts, JSON-LD organization graph
    page.tsx                Homepage
    sitemap.ts              SEO sitemap
    robots.ts               SEO robots
    not-found.tsx           Editorial 404
    error.tsx               Runtime error boundary
    loading.tsx             Loading skeleton
    globals.css             Design tokens + animations + reduced-motion guard
    about/page.tsx
    services/page.tsx
    energy-trade/page.tsx
    sustainability/page.tsx
    contact/page.tsx
  components/
    Navbar.tsx              Pill nav + mobile sheet
    Footer.tsx              Editorial three-band footer
    SiteShell.tsx           Wraps inner pages (Nav + main + PartnerWall + Footer)
    PageHero.tsx            Shared inner-page hero
    PartnerWall.tsx         Rich (4-track) and compressed marquees
    ScrollReveal.tsx        IntersectionObserver leaf
    MailButton.tsx          Contextual mailto buttons
    CopyButton.tsx          Clipboard copy on /contact
    icons.tsx               SVG icon set
    sections/               Homepage sections (Hero, TrustStrip, etc.)
  content/                  Typed data layer — single source of truth
    site.ts                 Brand basics, contact info, mailto builder
    services.ts             Four service lines with capabilities + mailto subjects
    about.ts                Story, values, advantages, partnership
    credentials.ts          Awards + certifications
    sustainability.ts       Four pillars (decarbonisation, blue economy, cadetship, STEM)
    energy-trade.ts         Hero copy, divisions, key facts
    partners.ts             Partner Wall logos (Operators, Regulators, Standards, Project Clients)
public/
  images/
    logos/partners/         Partner Wall logos (cleaned filenames)
    sdg/                    UN SDG icons
    [hero photography]
```

## Design system

- **Palette:** Navy `#0A1929` · Cream `#F6F4EF` · Paper `#FDFCF9` · Maritime Green `#1D7A4B` (primary accent) · Signal Red `#B5302A` (secondary)
- **Type scale:** Display serif with italic accent on the closing phrase of headings (`Built in Lagos. *Trusted across EMEA.*`)
- **Motion:** All easings on `cubic-bezier(0.32, 0.72, 0, 1)`. Marquees, float, shimmer, scroll-reveal — all gated by `prefers-reduced-motion`.
- **Imagery:** Container aspect ratios match image native within ±10%; documents use `object-contain`.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # static prerender + type check
npm run lint
```

## SEO

- `sitemap.ts` and `robots.ts` generate `/sitemap.xml` and `/robots.txt` at build.
- Per-page metadata with `alternates.canonical`.
- OpenGraph + Twitter card configured on root metadata (`/og-image.png` needed).
- JSON-LD `Organization` + `LocalBusiness` graph in `layout.tsx` (RC713064, D-U-N-S 561378707, contact points, knowsAbout).

## Contact

- General: [info@seamategroup.com](mailto:info@seamategroup.com)
- Vessel operations: [vessel@seamategroup.com](mailto:vessel@seamategroup.com)
- Phone: +234 815 238 9425 / +234 815 268 5854

---

© 2007–present Seamate Maritime Integrated Services Limited (RC713064 · D&B 561378707)
