# 🏎️ Oracle Red Bull Racing — F1 Live-Edit Demo

A Formula 1 fan page for **Oracle Red Bull Racing**, built with TanStack Start. Every section on the page is **click-to-edit**: click any section, modify the JSX in the live code panel, hit **Save & Run**, and watch it re-render instantly.

---

## ✨ Features

- **6 live-editable sections** — Navbar, Hero, Drivers, Achievements, Machinery, Footer
- **In-browser JSX editor** — powered by `react-live`, no page reload needed
- **F1-themed design system** — custom CSS with Red Bull Racing colors, typography, and animations
- **SSR-ready** — built on TanStack Start with Nitro, deployable to Cloudflare Workers
- **SEO optimized** — proper `<title>`, meta descriptions, Open Graph, and Twitter card tags

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [TanStack Start](https://tanstack.com/start) | SSR framework |
| [TanStack Router](https://tanstack.com/router) | File-based routing |
| [React 19](https://react.dev) | UI rendering |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [react-live](https://commerce.nearform.com/open-source/react-live) | Live JSX editor |
| [Vite](https://vite.dev) | Build tool |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Nitro](https://nitro.build) | Server & Cloudflare deployment |

---

## 📁 Project Structure

```
├── public/
│   └── robots.txt                  # SEO crawler rules
├── src/
│   ├── routes/
│   │   ├── __root.tsx              # App shell — HTML head, fonts, error boundary
│   │   └── index.tsx               # Home page "/"
│   ├── components/
│   │   └── EditableComponent.tsx   # Click-to-edit wrapper using react-live
│   ├── f1/
│   │   └── sections.ts             # All 6 F1 page sections as JSX strings
│   ├── lib/
│   │   ├── utils.ts                # cn() class-merging helper
│   │   ├── error-capture.ts        # Server-side error capture
│   │   ├── error-page.ts           # Custom error HTML renderer
│   │   └── lovable-error-reporting.ts  # Runtime error reporting
│   ├── styles.css                  # Design system — Tailwind + F1 custom CSS
│   ├── router.tsx                  # TanStack Router setup
│   ├── routeTree.gen.ts            # Auto-generated route tree (do not edit)
│   ├── server.ts                   # SSR server entry point
│   └── start.ts                    # Nitro server entry point
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18+
- npm v9+

### Install & Run

```sh
# Clone the repository
git clone https://github.com/Eswar565/Learning-UI.git
cd Learning-UI

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production (Cloudflare Workers) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format all files with Prettier |

---

## 🖱️ How the Live Editor Works

1. **Hover** over any section — a red `SectionName.jsx` badge appears in the corner
2. **Click** the section — a floating code panel opens
3. **Edit** the JSX in the editor
4. Click **Save & Run** — the section re-renders live on the page
5. Press **Escape** or click outside to cancel

All section source code lives in [`src/f1/sections.ts`](src/f1/sections.ts) as plain template strings.

---

## 🎨 Design System

The F1 custom design tokens are defined in [`src/styles.css`](src/styles.css):

| Token | Value | Usage |
|---|---|---|
| `--f1-black` | Dark navy-black | Page background |
| `--f1-red` | Red Bull red | Accents, buttons, badges |
| `--f1-gold` | Championship gold | Verstappen cards |
| `--font-display` | Archivo Black | Hero headings |
| `--font-cond` | Barlow Condensed | Buttons, labels |
| `--font-body` | Barlow | Body text |
| `--font-mono` | JetBrains Mono | Code editor |

---

## 🌍 Deployment

This project is pre-configured for **Cloudflare Workers** via Nitro:

```sh
npm run build
npx nitro deploy --prebuilt
```

---

## 📄 License

This project is for educational/demo purposes. Oracle Red Bull Racing branding and names belong to their respective owners.
