# DESIGN SYSTEM — Trika Yoga & Wellness

## Design Philosophy

The website must feel like:

- Luxury wellness retreat
- Contemporary art gallery
- Premium editorial magazine
- Aman Resorts
- Apple product launch
- High-end architecture studio

**Not:** yoga website · wellness coach template · WordPress theme · Webflow clone.

### Anti-AI Patterns (Never Use)

- Large hero + 3 cards + testimonials + CTA
- Generic wellness stock photos
- Everything centered
- Predictable/repeated layouts
- Too much text visible at once
- Cookie-cutter animations
- Heading → Text → Button stacked repeatedly
- Service card grids
- Testimonial sliders

### Required Layout Mix

- Asymmetrical compositions
- Full-width imagery
- Editorial layouts
- Split-screen sections
- Layered typography
- Immersive video experiences
- Horizontal storytelling sections

### Design Inspiration

| Brand | Take From |
|-------|-----------|
| Aman Resorts | Serenity, spaciousness, cinematic imagery |
| Apple | Product storytelling, immersive panels, huge type |
| Linear | Minimal, precise, sophisticated UI |
| Arc Browser | Clean, intentional, modern |
| Patagonia Stories | Horizontal narrative, documentary feel |
| Kinfolk | Editorial typography, warm minimalism |
| Aesop | Restrained luxury, architectural whitespace |

Principles: **minimal but emotional** · **spacious but intentional** · **sophisticated typography** · **cinematic imagery** · **slow interactions**

---

## Color Palette

| Token | Hex | CSS Variable Suggestion |
|-------|-----|------------------------|
| Primary (Terracotta) | `#A55A42` | `--color-primary` |
| Secondary (Sand) | `#D8C5A4` | `--color-secondary` |
| Accent (Sage) | `#7A8B6F` | `--color-accent` |
| Text (Charcoal) | `#2B2B2B` | `--color-text` |
| Background (Bone) | `#F8F5F0` | `--color-background` |
| Corporate Dark | `#1A1A1A` | `--color-corporate-dark` |

### Mood

Earthy + spiritual + premium. Warm natural tones throughout.

### Avoid

- Loud gradients
- Neon or saturated accent colors
- Pure black (`#000`) — use charcoal instead

---

## Typography

### Headings — Elegant Serif

**Primary:** Cormorant Garamond  
**Alternatives:** Playfair Display, Canela-inspired serifs

```css
font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
```

### Body — Modern Sans-Serif

**Primary:** Inter  
**Alternatives:** Manrope, Plus Jakarta Sans

```css
font-family: 'Inter', 'Manrope', system-ui, sans-serif;
```

### Buttons

Inter SemiBold, letter-spacing slightly open for premium feel.

### Hierarchy Rules

- Hero headings: 48–72px desktop, scale down gracefully on mobile
- Section headings: 36–48px
- Body: 16–18px, line-height 1.6–1.8
- Use whitespace aggressively between type blocks

---

## Spacing

| Context | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Section padding (vertical) | 120px | 80px | 60px |
| Section gap | 80px | 60px | 40px |
| Card padding | 32–40px | 28px | 24px |
| Element gap (stacked) | 24px | 20px | 16px |

### Layout Widths

- **Container max:** 1400px
- **Content max (prose):** 800px
- **Side padding:** 24px mobile · 40px tablet · 60px desktop

---

## Border Radius

| Element | Radius |
|---------|--------|
| Cards | 24px |
| Images | 32px |
| Buttons | 999px (pill) |
| Input fields | 12px |
| Tags/badges | 8px |

---

## Shadows

Soft luxury shadows only. Never hard or dramatic drop shadows.

```css
/* Card elevation */
box-shadow: 0 4px 24px rgba(43, 43, 43, 0.06);

/* Hover elevation */
box-shadow: 0 8px 32px rgba(43, 43, 43, 0.10);

/* Subtle inset for inputs */
box-shadow: inset 0 1px 3px rgba(43, 43, 43, 0.04);
```

---

## Animation

### Timing

- Duration: **0.8s – 1.2s** (max 1.5s for hero reveals)
- Easing: `ease-out` or `cubic-bezier(0.25, 0.1, 0.25, 1)`

### Approved Effects

- Fade up (`opacity` + `translateY`)
- Blur reveal (`filter: blur()` → clear)
- Gentle parallax on scroll
- Soft scale (0.95 → 1.0)

### Forbidden

- Bounce
- Elastic / spring overshoot
- Spin
- Fast transitions (< 0.5s)
- Excessive simultaneous motion

Animations must feel **breath-like, slow, and elegant**.

### Scroll & Motion Libraries

- **Framer Motion** — default for reveals, transitions, scroll-triggered animations
- **GSAP** — only where necessary (NervousSystemJourney, horizontal scroll, complex timelines)
- **Lenis** — smooth scrolling sitewide

Never use slider/carousel libraries for testimonials or services.

---

## Section Visual Identity Map

Every major homepage section uses a **different structure**:

| Section | Visual Identity |
|---------|-----------------|
| Hero | Video-first, huge stacked type, sound-wave viz |
| Founder | Editorial magazine, full-screen portrait |
| Nervous System | Interactive scroll, state transitions |
| Services | Numbered immersive full-bleed panels |
| Corporate | Dark background, large metrics |
| Retreats | Horizontal documentary scroll |
| Testimonials | Polaroid wall, staggered rotations |
| Contact | Architectural minimalism |

---

## Imagery Guidelines

### Use

- Sound bowls and gongs
- Desert and mountain retreats
- Beaches and natural landscapes
- Meditation circles
- Warm natural lighting
- Candid, grounded moments

### Avoid

- Generic stock yoga poses
- Artificial smiling photos
- Over-edited wellness imagery
- Clip art or illustration clichés
