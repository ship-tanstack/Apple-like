<h1 align="center">🍎 Apple-like Landing Page</h1>

<p align="center">
  <strong>Production-ready Apple-inspired landing page template built with TanStack Start & React 19</strong>
</p>

<p align="center">
  <a href="https://tanstackship.com/" title="TanStack Ship">
    <img src="https://img.shields.io/badge/TanStack_Ship-FF4154?style=for-the-badge&logo=react&logoColor=white" alt="TanStack Ship" />
  </a>
  <a href="https://tanstack.com/start" title="TanStack Start">
    <img src="https://img.shields.io/badge/TanStack_Start-FF4154?style=flat-square&logo=react&logoColor=white" alt="TanStack Start" />
  </a>
  <a href="https://react.dev" title="React 19">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
  </a>
  <a href="https://www.typescriptlang.org/" title="TypeScript">
    <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com/" title="Tailwind CSS">
    <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  </a>
  <a href="https://vite.dev/" title="Vite">
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
  </a>
  <a href="https://workers.cloudflare.com/" title="Cloudflare Workers">
    <img src="https://img.shields.io/badge/Deploy-Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare Workers" />
  </a>
</p>

<p align="center">
  <a href="https://apple.tanstackship.com/">🔴 Live Demo</a> •
  <a href="https://tanstackship.com/">📦 More Templates</a> •
  <a href="https://tanstackship.com/">🌐 TanStack Ship</a>
</p>

---

> 🌟 **If you find this template useful, please consider giving it a star!** It helps others discover it.

---

> An Apple-inspired headphone concept landing page — restrained motion, oversized typography, layered glass, and cinematic product lighting — built with **TanStack Start** and **React 19**.
>
> Part of the [TanStack Ship](https://tanstackship.com/) ecosystem: production-ready starters and landing pages for modern web developers.

## ✨ Why This Template?

- 🍎 **Apple-level design quality** — Dark-to-light gradient hero, scroll reveals, CSS-only product sculpture
- ⚡ **TanStack Start** — Full SSR, file-based routing, type-safe navigation out of the box
- 🚀 **Deploy in seconds** — Cloudflare Workers config included, zero-config deployment
- 📱 **Fully responsive** — Desktop, tablet, and mobile optimized
- 🎨 **No 3D assets needed** — Pure CSS layered product visualization

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

## Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | [TanStack Start](https://tanstack.com/start) — SSR, file-based routing |
| **Routing** | [TanStack Router](https://tanstack.com/router) — `src/routes/` |
| **UI** | React 19 + [Lucide](https://lucide.dev/) icons |
| **Styling** | Tailwind CSS v4 + custom CSS variables and motion |
| **Build** | Vite 8 |
| **Deploy** | Cloudflare Workers (`wrangler.jsonc`) |

## Quick Start

```bash
# Clone the repository
git clone https://github.com/ship-tanstack/Apple-like.git
cd Apple-like

# Install dependencies
pnpm install

# Start dev server (http://localhost:3000)
pnpm dev

# Production build
pnpm build

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

## Project Structure

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

## Implementation Highlights

1. **Scroll reveals:** Elements with `data-reveal` get `is-visible` via `IntersectionObserver`, with staggered `transition-delay`.
2. **Product sculpture:** Hero headphones are pure CSS layers (headband, earcups, glow, floating cards) — no 3D assets needed.
3. **Section anchors:** `#performance`, `#design`, `#finish`, `#buy` for in-page navigation.
4. **Responsive:** Media queries for nav, hero two-column layout, and card grids.

## 🔗 More from TanStack Ship

This template is part of the **[TanStack Ship](https://tanstackship.com/)** catalog — handcrafted, production-ready TanStack starters:

| Template | Description |
| --- | --- |
| [Aurelia No.7 Landing Page](https://github.com/ship-tanstack/Aurelia-No.7-Landing-Page) | Premium editorial landing page with scroll narrative |
| [Dashboard 01](https://github.com/ship-tanstack/dashboard-01) | Admin dashboard with Ant Design + Recharts |

- **[Browse all TanStack Templates →](https://tanstackship.com/)**
- [TanStack Start docs](https://tanstack.com/start)
- [TanStack Router docs](https://tanstack.com/router)

---

<p align="center">
  Built with ❤️ using <a href="https://tanstack.com/start">TanStack Start</a>.<br/>
  Discover more templates at <a href="https://tanstackship.com/"><strong>tanstackship.com</strong></a>
</p>
