# BYMA Course — Official Website

Marketing landing page for **BYMA Course**, an online English course built on the
**HABEL (Habit-Based English Learning)** approach.

> Make English a Habit

- **Language:** Bahasa Indonesia (primary)
- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS
- **Deploy target:** GitHub Pages (static export) → `https://bymacourse.com`
- **PRD:** [`docs/PRD-BYMA-COURSE-WEBSITE.md`](docs/PRD-BYMA-COURSE-WEBSITE.md)

## Requirements

- Node.js >= 20 (CI uses Node 26)

## Scripts

```bash
npm run dev        # local dev server
npm run build      # static export to ./out (output: "export")
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm run serve:out  # preview the exported ./out directory
```

## Deployment — GitHub Pages

The site is a fully static export (`output: "export"`), published to GitHub Pages
by [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) on
every push to `main`.

**Custom domain:** `bymacourse.com` (apex) and `www.bymacourse.com`.
The apex is declared in [`public/CNAME`](public/CNAME), which is copied into the
build output.

### One-time setup

1. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Custom domain is set to `bymacourse.com` (also stored in `public/CNAME`).
3. Point DNS at GitHub Pages:

   | Type | Name | Value |
   |------|------|-------|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `bymacourse.github.io` |

4. Wait for the certificate to provision, then enable **Enforce HTTPS**.

`NEXT_PUBLIC_SITE_URL` is set to `https://bymacourse.com` in the workflow so
canonical, Open Graph, and JSON-LD URLs resolve correctly.

## Content & configuration

All editable content lives in `src/content/` — components contain no hardcoded
copy. Update these files to change the site:

| File | Purpose |
|------|---------|
| `site.config.ts` | Site name, tagline, description, locale |
| `navigation.ts` | Navbar/footer anchor links |
| `hero.ts` | Hero copy and CTAs |
| `about.ts` | About section copy |
| `habel.ts` | HABEL definition + 4 steps |
| `activities.ts` | Learning activity cards |
| `benefits.ts` | Why BYMA value cards |
| `vision.ts` / `missions.ts` | Vision and mission statements |
| `cta.ts` | Final CTA + Why BYMA section meta |
| `contact.ts` | WhatsApp, TikTok, Instagram, registration URL |
| `social-links.ts` | Footer contact/social list |

## Placeholders (TBD) — do not fabricate

The following are intentionally unset and rendered as `TBD` placeholders or
graceful fallbacks:

- Registration URL → primary CTA falls back to scrolling to the footer contact block
- Brand photography
- Official HEX colors (current tokens are approximations)

**Provided:** WhatsApp `6281226109432` → `https://wa.me/6281226109432` ·
TikTok `@bymacourse` · Instagram `@bymacourse`

## Brand assets

The official logo is integrated from the provided `logo.png` and exported with a
transparent background into `public/brand/`:

| File | Use |
|------|-----|
| `logo.webp` | Full lockup (mark + wordmark) — navbar, footer |
| `logo-mark.webp` | Geometric mark only — mobile menu |
| `og-image.png` | 1200×630 Open Graph / Twitter share image |
| `src/app/icon.png`, `src/app/apple-icon.png` | Favicon / app icons |

The logo keeps its original aspect ratio and colors — it is never stretched,
rotated, or recolored. On dark surfaces it sits on a light chip for contrast.

## Design tokens

Colors in `tailwind.config.ts` and `src/app/globals.css` are **implementation
approximations** of the brand's visual DNA, not official brand colors. They must
be validated against the official brand assets.

## Accessibility

Targets WCAG 2.1 AA: semantic landmarks, one `h1`, skip link, keyboard-navigable
mobile menu with focus trap, visible focus states, 44px touch targets, and
`prefers-reduced-motion` support.
