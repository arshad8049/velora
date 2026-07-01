# Velora

Premium self-marketing website for a freelance business building websites and AI agents for small businesses. Apple-inspired feel: clean spacing, bold typography, smooth scroll animations, floating glass cards, and mouse-driven parallax.

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| Build | Vite 5 | Instant HMR, tiny bundles |
| UI | React 18 + TypeScript | Component model, type safety |
| Animation | Framer Motion 11 | Spring physics, scroll triggers |
| Styles | CSS Custom Properties | Full design control, zero runtime cost |
| Backend | None yet | Marketing site — contact form is a frontend stub |

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

---

## Folder Structure

```
velora/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── src/
    ├── main.tsx               # React root, global CSS imports
    ├── App.tsx                # App shell, section assembly
    ├── components/
    │   ├── Navbar.tsx / .module.css
    │   ├── Hero.tsx / .module.css
    │   ├── Services.tsx / .module.css
    │   ├── ServiceCard.tsx
    │   ├── FeatureShowcase.tsx / .module.css
    │   ├── Process.tsx / .module.css
    │   ├── AIAgents.tsx / .module.css
    │   ├── Portfolio.tsx / .module.css
    │   ├── About.tsx / .module.css
    │   ├── Contact.tsx / .module.css
    │   └── Footer.tsx / .module.css
    ├── data/
    │   ├── services.ts        # Service card content
    │   ├── features.ts        # Feature showcase tabs
    │   └── projects.ts        # Portfolio case studies
    ├── hooks/
    │   ├── useMouseParallax.ts
    │   └── useReducedMotion.ts
    ├── utils/
    │   └── validation.ts      # Frontend form validation
    └── styles/
        ├── variables.css      # Design tokens (single source of truth)
        ├── globals.css        # Reset, base styles, utility classes
        └── animations.css     # Keyframes + animation utility classes
```

---

## Build Phases

### Phase 1 — Foundation ✅
- `package.json` — React 18, Framer Motion, Vite 5, TypeScript
- `index.html` — HTML shell, SEO meta tags, Open Graph, Google Fonts (Inter)

### Phase 2 — React Entry ✅
- `vite.config.ts` — Vite + React plugin
- `tsconfig.json` + `tsconfig.node.json` — strict TypeScript config
- `src/main.tsx` — React root, CSS import order
- `src/App.tsx` — App shell (grows as sections are added)

### Phase 3 — Design System ✅
- `src/styles/variables.css` — all CSS custom properties: colors, gradients, glass, type scale, spacing, radius, shadows, animation timing, z-index
- `src/styles/globals.css` — reset, html/body base, scrollbar, selection, focus states, typography, `.container`, `.section`, `.btn`, `.btn-primary`, `.btn-secondary`, `.glass-card`, `.gradient-text`, `.section-label`, `.section-heading`

### Phase 4 — Animations + Navbar ✅
- `src/styles/animations.css` — all `@keyframes` (float, pulse-glow, orb-drift, fade-in-up, scale-in, shimmer…) + animation utility classes + stagger delays
- `src/components/Navbar.tsx` + `Navbar.module.css` — fixed header, transparent → glass on scroll, desktop nav links, desktop CTA button, mobile full-screen overlay menu with hamburger → X animation, keyboard accessible

### Phase 5 — Hero ✅
- `src/hooks/useMouseParallax.ts` — spring-smoothed mouse offset (Framer Motion), respects `prefers-reduced-motion`
- `src/components/Hero.tsx` + `Hero.module.css` — full-viewport hero, dot-grid background, ambient orbs, four floating glass UI cards (website mockup, AI chat, analytics, automation flow), mouse parallax at different depth multipliers per card, staggered entrance animations, trust line, scroll cue

### Phase 6 — Services ✅
- `src/data/services.ts` — typed service data (icon ID, title, description, features, highlight flag)
- `src/components/Services.tsx` + `Services.module.css` — 3-col responsive glass card grid, SVG icon map, scroll-reveal with stagger, hover lift + glow

### Phase 7 — ServiceCard + Feature Showcase 🔲
- `src/components/ServiceCard.tsx` — extracted reusable service card component
- `src/components/FeatureShowcase.tsx` + `FeatureShowcase.module.css` — Apple-style tabbed section: click a business type, see a visual mockup + description

### Phase 8 — Features Data + Process 🔲
- `src/data/features.ts` — feature showcase tab content
- `src/components/Process.tsx` + `Process.module.css` — 6-step workflow (Discover → Plan → Design → Build → Launch → Improve), vertical timeline or horizontal cards

### Phase 9 — AI Agents + Projects Data 🔲
- `src/components/AIAgents.tsx` + `AIAgents.module.css` — AI agents explainer in plain business language, floating "task bubble" animation, example tasks
- `src/data/projects.ts` — portfolio case study data (problem / solution / result)

### Phase 10 — Portfolio + About 🔲
- `src/components/Portfolio.tsx` + `Portfolio.module.css` — placeholder case study cards with hover reveal
- `src/components/About.tsx` + `About.module.css` — professional about-me section with placeholder copy

### Phase 11 — Contact Form 🔲
- `src/utils/validation.ts` — frontend form validation (name, email, message, business type, project type)
- `src/components/Contact.tsx` + `Contact.module.css` — contact form (frontend-only stub; real submission requires a secure backend/serverless endpoint — clearly marked with TODO comments)

### Phase 12 — Footer + Final Polish 🔲
- `src/components/Footer.tsx` + `Footer.module.css` — footer with nav links, tagline, social placeholders, copyright
- Final README, accessibility audit notes, deployment instructions

---

## Design System Quick Reference

```css
/* Brand colors */
--color-violet:       #7c3aed
--color-cyan:         #06b6d4
--color-bg:           #08080f

/* Key gradients */
--gradient-brand:     linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)
--glass-bg:           rgba(255, 255, 255, 0.04)
--glass-border:       1px solid rgba(255, 255, 255, 0.08)

/* Utility classes (from globals.css) */
.container          → max-width 1200px, responsive padding
.section            → section padding-block
.gradient-text      → brand gradient applied to text
.glass-card         → glass morphism card base
.btn-primary        → gradient CTA button
.btn-secondary      → ghost/glass button
.section-label      → violet eyebrow text (uppercase, spaced)
.section-heading    → large section title
.section-subtext    → muted paragraph below heading
```

---

## Security Notes

- No API keys, secrets, or credentials anywhere in frontend code
- Contact form is a **frontend-only stub** — real email delivery requires a backend (Node.js, serverless function, or third-party service like Resend/Formspree) added later
- All user inputs validated on the frontend in `utils/validation.ts`; **backend validation is still required for production**
- No `dangerouslySetInnerHTML` used anywhere
- Frontend source code is always visible via browser DevTools — this is by design and expected

---

## Deployment (future)

```bash
npm run build        # outputs to dist/
# deploy dist/ to Vercel, Netlify, or any static host
```
