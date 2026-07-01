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
| Forms | Formspree | Serverless email delivery, no backend needed |

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

Copy `.env.example` to `.env.local` and fill in your Formspree ID before testing the contact form.

---

## Folder Structure

```
velora/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── .env.example           # environment variable template (safe to commit)
└── src/
    ├── vite-env.d.ts      # Vite + CSS module type declarations
    ├── main.tsx           # React root, global CSS imports
    ├── App.tsx            # App shell, section assembly
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
    │   ├── Testimonials.tsx / .module.css
    │   ├── Pricing.tsx / .module.css
    │   ├── FAQ.tsx / .module.css
    │   ├── Contact.tsx / .module.css
    │   └── Footer.tsx / .module.css
    ├── data/
    │   ├── services.ts        # Service card content
    │   ├── features.ts        # Feature showcase tabs
    │   └── projects.ts        # Portfolio case studies
    ├── hooks/
    │   └── useMouseParallax.ts
    ├── utils/
    │   └── validation.ts      # Frontend form validation
    └── styles/
        ├── variables.css      # Design tokens (single source of truth)
        ├── globals.css        # Reset, base styles, utility classes
        └── animations.css     # Keyframes + animation utility classes
```

---

## Page Order

Hero → Services → Feature Showcase → Process → AI Agents → Portfolio → About → Testimonials → Pricing → FAQ → Contact → Footer

---

## Build Phases

### Phase 1 — Foundation ✅
- `package.json` — React 18, Framer Motion, Vite 5, TypeScript
- `index.html` — HTML shell, SEO meta tags, Open Graph, Google Fonts (Inter + Space Grotesk)

### Phase 2 — React Entry ✅
- `vite.config.ts` — Vite + React plugin
- `tsconfig.json` + `tsconfig.node.json` — strict TypeScript config
- `src/main.tsx` — React root, CSS import order
- `src/App.tsx` — App shell (grows as sections are added)

### Phase 3 — Design System ✅
- `src/styles/variables.css` — all CSS custom properties: colors, gradients, glass, type scale, spacing, radius, shadows, animation timing, z-index
- `src/styles/globals.css` — reset, html/body base, scrollbar, selection, focus states, typography, utility classes

### Phase 4 — Animations + Navbar ✅
- `src/styles/animations.css` — all `@keyframes` (float, pulse-glow, orb-drift, fade-in-up, scale-in, shimmer) + stagger delays
- `src/components/Navbar.tsx` + `Navbar.module.css` — fixed header, transparent to glass on scroll, mobile full-screen overlay, Space Grotesk gradient logo

### Phase 5 — Hero ✅
- `src/hooks/useMouseParallax.ts` — spring-smoothed mouse parallax, respects `prefers-reduced-motion`
- `src/components/Hero.tsx` + `Hero.module.css` — full-viewport hero, 6 floating interactive glass cards (website mockup, live leads feed, AI chat, performance score, analytics, automation), mouse parallax at distinct depths per card, staggered entrance animations

### Phase 6 — Services ✅
- `src/data/services.ts` — typed service data
- `src/components/Services.tsx` + `Services.module.css` — 3-col responsive glass card grid, SVG icon map, scroll-reveal with stagger

### Phase 7 — ServiceCard + Feature Showcase ✅
- `src/components/ServiceCard.tsx` — reusable service card component
- `src/components/FeatureShowcase.tsx` + `FeatureShowcase.module.css` — tabbed section with layoutId sliding indicator, 6 business-type visual mockups

### Phase 8 — Features Data + Process ✅
- `src/data/features.ts` — feature showcase tab content
- `src/components/Process.tsx` + `Process.module.css` — 6-step workflow, staggered grid with ghost numbers and stroke SVG icons

### Phase 9 — AI Agents + Projects Data ✅
- `src/components/AIAgents.tsx` + `AIAgents.module.css` — AI agents explainer with live cycling task feed, floating capability chips
- `src/data/projects.ts` — portfolio case study data

### Phase 10 — Portfolio + About ✅
- `src/components/Portfolio.tsx` + `Portfolio.module.css` — 2-col case study cards, accent stripe, dl/dt/dd PSR rows
- `src/components/About.tsx` + `About.module.css` — two-col layout, gradient avatar, stats, skill tags, dual CTAs

### Phase 11 — Contact Form ✅
- `src/utils/validation.ts` — frontend form validation
- `src/components/Contact.tsx` + `Contact.module.css` — contact form, AnimatePresence form/success transition, char counter, Formspree integration

### Phase 12 — Footer ✅
- `src/components/Footer.tsx` + `Footer.module.css` — 4-col responsive footer, social icons, response badge, copyright bar

### Phase 13 — Form Backend ✅
- `src/components/Contact.tsx` — updated `submitForm` to POST to Formspree (`VITE_FORMSPREE_ID`)
- `.env.example` — environment variable template

### Phase 14 — Pricing ✅
- `src/components/Pricing.tsx` + `Pricing.module.css` — launch special banner, two-tier pricing ($150 website / $200 website + chatbot), metric stat block, inline badge fix

### Phase 15 — FAQ ✅
- `src/components/FAQ.tsx` + `FAQ.module.css` — accordion (one open at a time), AnimatePresence height animation, 7 pre-answered objections

### Phase 16 — Testimonials ✅
- `src/components/Testimonials.tsx` + `Testimonials.module.css` — 3-col glass cards, gradient open-quote mark, star ratings, stagger reveal. Replace placeholder quotes with real client feedback before going live.

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

- No API keys, secrets, or credentials in frontend code
- `VITE_FORMSPREE_ID` is not sensitive (it is a public form endpoint) but is kept in `.env.local` for easy swapping between environments
- All user inputs validated on the frontend in `utils/validation.ts`; Formspree runs its own backend validation
- No `dangerouslySetInnerHTML` used anywhere
- Frontend source is always visible via DevTools — this is by design

---

## Deployment

```bash
npm run build        # outputs to dist/
npm run preview      # preview the production build locally
```

Deploy `dist/` to Vercel (zero config for Vite):

1. Push the repo to GitHub
2. Import the repo at vercel.com
3. Add environment variable: `VITE_FORMSPREE_ID` = your form ID
4. Set a custom domain in the Vercel dashboard

---

## Before Going Live

- [ ] Replace placeholder testimonials in `Testimonials.tsx` with real client quotes
- [ ] Replace placeholder case studies in `src/data/projects.ts` with real work
- [ ] Swap the About section bio with real personal copy
- [ ] Update social `href` values in `Footer.tsx` with real LinkedIn, GitHub, X URLs
- [ ] Add `VITE_FORMSPREE_ID` as an environment variable in the Vercel dashboard
