<h1 align="center">馃崕 Apple-like Landing Page</h1>

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
  <a href="https://apple.tanstackship.com/">馃敶 Live Demo</a> 鈥?  <a href="https://tanstackship.com/">馃摝 More Templates</a> 鈥?  <a href="https://tanstackship.com/">馃寪 TanStack Ship</a>
</p>

---

> 馃専 **If you find this template useful, please consider giving it a star!** It helps others discover it.

---

> An Apple-inspired headphone concept landing page 鈥?restrained motion, oversized typography, layered glass, and cinematic product lighting 鈥?built with **TanStack Start** and **React 19**.
>
> Part of the [TanStack Ship](https://tanstackship.com/) ecosystem: production-ready starters and landing pages for modern web developers.

## 鉁?Why This Template?

- 馃崕 **Apple-level design quality** 鈥?Dark-to-light gradient hero, scroll reveals, CSS-only product sculpture
- 鈿?**TanStack Start** 鈥?Full SSR, file-based routing, type-safe navigation out of the box
- 馃殌 **Deploy in seconds** 鈥?Cloudflare Workers config included, zero-config deployment
- 馃摫 **Fully responsive** 鈥?Desktop, tablet, and mobile optimized
- 馃帹 **No 3D assets needed** 鈥?Pure CSS layered product visualization

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
| **Framework** | [TanStack Start](https://tanstack.com/start) 鈥?SSR, file-based routing |
| **Routing** | [TanStack Router](https://tanstack.com/router) 鈥?`src/routes/` |
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
鈹溾攢鈹€ src/
鈹?  鈹溾攢鈹€ routes/
鈹?  鈹?  鈹溾攢鈹€ __root.tsx      # Root layout, head, devtools
鈹?  鈹?  鈹斺攢鈹€ index.tsx       # Landing page content
鈹?  鈹溾攢鈹€ styles.css          # Global styles, motion, component classes
鈹?  鈹斺攢鈹€ router.tsx
鈹溾攢鈹€ docs/screenshots/       # README screenshots
鈹溾攢鈹€ scripts/
鈹?  鈹斺攢鈹€ capture-screenshots.mjs
鈹溾攢鈹€ public/
鈹溾攢鈹€ vite.config.ts
鈹斺攢鈹€ wrangler.jsonc
```

## Implementation Highlights

1. **Scroll reveals:** Elements with `data-reveal` get `is-visible` via `IntersectionObserver`, with staggered `transition-delay`.
2. **Product sculpture:** Hero headphones are pure CSS layers (headband, earcups, glow, floating cards) 鈥?no 3D assets needed.
3. **Section anchors:** `#performance`, `#design`, `#finish`, `#buy` for in-page navigation.
4. **Responsive:** Media queries for nav, hero two-column layout, and card grids.

## 馃敆 More from TanStack Ship

This template is part of the **[TanStack Ship](https://tanstackship.com/)** catalog 鈥?handcrafted, production-ready TanStack starters:

| Template | Description |
| --- | --- |
| [Aurelia No.7 Landing Page](https://github.com/ship-tanstack/Aurelia-No.7-Landing-Page) | Premium editorial landing page with scroll narrative |
| [Dashboard 01](https://github.com/ship-tanstack/dashboard-01) | Admin dashboard with Ant Design + Recharts |

- **[Browse all TanStack Templates 鈫抅(https://tanstackship.com/)**
- [TanStack Start docs](https://tanstack.com/start)
- [TanStack Router docs](https://tanstack.com/router)

---

<p align="center">
  Built with 鉂わ笍 using <a href="https://tanstack.com/start">TanStack Start</a>.<br/>
  Discover more templates at <a href="https://tanstackship.com/"><strong>tanstackship.com</strong></a>
</p>
