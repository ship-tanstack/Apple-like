# Astra Air · Apple-like Landing Page

[![TanStack Start](https://img.shields.io/badge/TanStack_Start-FF4154?style=flat-square&logo=react&logoColor=white)](https://tanstack.com/start)
[![TanStack Templates](https://img.shields.io/badge/TanStack_Templates-tanstackship.com-FF4154?style=flat-square)](https://tanstackship.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Cloudflare Workers](https://img.shields.io/badge/Deploy-Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)

> An Apple-inspired headphone concept landing page—restrained motion, oversized typography, layered glass, and product lighting—built with **TanStack Start** and **React 19**. Part of the [TanStack Templates](https://tanstackship.com/) ecosystem for production-ready starters and landing pages.

## Overview

| Dimension | Details |
| --- | --- |
| **Concept** | Astra Air — premium over-ear headphones |
| **Visual language** | Dark hero → light content gradient, Instrument Sans, low-amplitude scroll reveals |
| **Interaction** | `IntersectionObserver` reveals, CSS-only headphone sculpture, orbital motion panel |
| **Page flow** | Nav · Hero · Metrics · Features · Form & comfort · Finishes · CTA |

## Preview

### Hero (desktop)

![Hero section](docs/screenshots/01-hero-desktop.png)

### Sound & motion narrative

![Sound & Silicon section](docs/screenshots/02-metrics-features.png)

### Form & comfort

![Form & Comfort section](docs/screenshots/03-design-lens.png)

### Finishes & conversion

![Finishes and CTA](docs/screenshots/04-finishes-cta.png)

### Mobile

![Mobile hero](docs/screenshots/05-hero-mobile.png)

### Full page

<details>
<summary>Expand full-page screenshot</summary>

![Full page](docs/screenshots/06-full-page.png)

</details>

## Tech stack

- **Framework:** [TanStack Start](https://tanstack.com/start) — SSR, file-based routing
- **Routing:** [TanStack Router](https://tanstack.com/router) — `src/routes/`
- **UI:** React 19 + [Lucide](https://lucide.dev/) icons
- **Styling:** Tailwind CSS v4 + custom CSS variables and motion
- **Build:** Vite 8
- **Deploy:** Cloudflare Workers (`wrangler.jsonc`)

## Quick start

```bash
# Install dependencies
pnpm install

# Local dev (http://localhost:3000)
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview

# Deploy to Cloudflare
pnpm deploy
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Dev server (port 3000) |
| `pnpm build` | Production build |
| `pnpm preview` | Build + local preview |
| `pnpm test` | Vitest unit tests |
| `pnpm lint` | ESLint check and fix |
| `pnpm check` | Prettier format check |
| `pnpm deploy` | Build and deploy to Cloudflare |

## Project structure

```text
apple-like/
├── src/
│   ├── routes/
│   │   ├── __root.tsx      # Root layout, head, devtools
│   │   └── index.tsx       # Landing page content
│   ├── styles.css          # Global styles, motion, component classes
│   └── router.tsx
├── docs/screenshots/       # README screenshots
├── scripts/
│   └── capture-screenshots.mjs
├── public/
├── vite.config.ts
└── wrangler.jsonc
```

## Implementation notes

1. **Scroll reveals:** Elements with `data-reveal` get `is-visible` via `IntersectionObserver`, with staggered `transition-delay` in CSS.
2. **Product sculpture:** Hero headphones are pure CSS layers (headband, earcups, glow, floating cards)—no 3D assets.
3. **Section anchors:** `#performance`, `#design`, `#finish`, `#buy` for in-page navigation.
4. **Responsive:** Media queries in `styles.css` for nav, hero two-column layout, and card grids.

## Regenerate screenshots

With the dev server running:

```bash
pnpm dev
# In another terminal
node scripts/capture-screenshots.mjs   # requires playwright locally
```

Or capture the hero quickly with headless Chrome:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --window-size=1440,900 \
  --screenshot=docs/screenshots/01-hero-desktop.png \
  http://localhost:3000/
```

## TanStack Templates

This landing page fits the **landing page** category on [TanStack Templates](https://tanstackship.com/)—handcrafted TanStack boilerplates, starters, and kits for SaaS, dashboards, and marketing sites.

Explore more TanStack Start projects:

- **[Browse all TanStack Templates →](https://tanstackship.com/)**
- [Free TanStack templates](https://tanstackship.com/)
- [TanStack Start docs](https://tanstack.com/start)
- [TanStack Router docs](https://tanstack.com/router)
- [Cloudflare Workers deployment](https://developers.cloudflare.com/workers/)

---

Built with [TanStack Start](https://tanstack.com/start). Discover more templates at **[tanstackship.com](https://tanstackship.com/)**.
