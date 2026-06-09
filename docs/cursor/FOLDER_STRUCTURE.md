# FOLDER STRUCTURE — Trika Yoga & Wellness

## Target Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Animation | Framer Motion (default) |
| Advanced Motion | GSAP (only where necessary — scroll journeys, horizontal sections) |
| UI Primitives | shadcn/ui |
| Smooth Scroll | Lenis |

---

## Project Structure (Next.js 15)

```
/
├── .cursor/
│   └── rules/
│       ├── sonia-razdan-website.mdc      # Master rule (always apply)
│       ├── anti-ai-design.mdc            # Anti-template rules (always apply)
│       ├── brand-guidelines.mdc
│       ├── design-system.mdc
│       ├── component-library.mdc
│       └── copy-guidelines.mdc
│
├── docs/
│   └── cursor/
│       ├── PROJECT_CONTEXT.md
│       ├── DESIGN_SYSTEM.md
│       ├── COMPONENT_LIBRARY.md
│       ├── COPY_GUIDELINES.md
│       ├── LANDING_PAGE_STRATEGY.md
│       ├── SEO_STRATEGY.md
│       ├── SITE_MAP.md
│       ├── MEDIA_ASSETS.md
│       └── FOLDER_STRUCTURE.md
│
├── app/
│   ├── layout.tsx                        # Root layout, fonts, Lenis provider
│   ├── page.tsx                          # Home
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── corporate-wellness/page.tsx
│   ├── retreats/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   │
│   ├── executive-nervous-system-reset/  # Landing pages
│   │   └── page.tsx
│   ├── corporate-wellness-programs/
│   │   └── page.tsx
│   ├── sound-healing-mumbai/
│   │   └── page.tsx
│   ├── kundalini-yoga-mumbai/
│   │   └── page.tsx
│   ├── wellness-retreats/
│   │   └── page.tsx
│   └── private-somatic-healing/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                    # Minimal floating nav
│   │   ├── Footer.tsx
│   │   └── SmoothScroll.tsx              # Lenis wrapper
│   ├── sections/                         # Unique homepage sections
│   │   ├── CinematicHero.tsx
│   │   ├── EditorialFounderStory.tsx
│   │   ├── NervousSystemJourney.tsx
│   │   ├── ImmersiveServicePanel.tsx
│   │   ├── CorporateDarkSection.tsx
│   │   ├── HorizontalRetreatStory.tsx
│   │   ├── PolaroidTestimonialWall.tsx
│   │   └── ArchitecturalContact.tsx
│   ├── landing/                          # Landing page blocks
│   │   ├── LandingHero.tsx
│   │   ├── ProblemSymptomBlock.tsx
│   │   ├── TransformationReveal.tsx
│   │   ├── MethodologySection.tsx
│   │   └── LandingCTA.tsx
│   └── ui/                               # shadcn/ui + custom primitives
│       ├── button.tsx
│       ├── Container.tsx
│       ├── AnimatedReveal.tsx
│       └── SoundWaveVisualization.tsx
│
├── lib/
│   ├── seo.ts                            # Metadata helpers
│   ├── animations.ts                     # Framer Motion variants
│   └── constants.ts                      # Brand tokens, nav links
│
├── hooks/
│   ├── useScrollReveal.ts
│   ├── useParallax.ts
│   └── useNervousSystemScroll.ts
│
├── content/
│   ├── services.ts
│   ├── retreats.ts
│   ├── testimonials.ts
│   ├── corporate-programs.ts
│   └── landing-pages.ts                  # Problem-first copy per landing page
│
├── types/
│   ├── service.ts
│   ├── retreat.ts
│   └── testimonial.ts
│
└── public/
    ├── videos/
    ├── images/
    └── og-image.jpg
```

---

## Current State

The repo currently runs **React 19 + Vite 6 + Tailwind 4**. Migrate to Next.js 15 per target stack above.

---

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Sections | PascalCase, descriptive | `NervousSystemJourney.tsx` |
| Landing blocks | `Landing` prefix | `LandingHero.tsx` |
| Hooks | camelCase, `use` prefix | `useNervousSystemScroll.ts` |
| Content | camelCase | `landing-pages.ts` |
| Routes | kebab-case folders | `executive-nervous-system-reset/` |

---

## Component Rules

1. **Section components** define unique visual identity — never share layout between sections
2. **Landing components** are composable blocks — mix differently per landing page
3. **UI primitives** are shared (Button, Container) but never define page structure
4. **Content lives in `/content`** — problem-first copy separated from components
5. **GSAP only in** `NervousSystemJourney`, `HorizontalRetreatStory` — everything else uses Framer Motion

---

## Dependencies to Add (Next.js migration)

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir=false
npm install framer-motion gsap @studio-freight/lenis
npx shadcn@latest init
```
