# COMPONENT LIBRARY — Trika Yoga & Wellness

Reusable components with **unique visual identities**. Never duplicate layout patterns on the same page.

**Anti-template rule:** If two sections look structurally similar, redesign one.

---

## CinematicHero

**Purpose:** First impression. Not a normal hero.

**Layout:**

- Full-screen video (gong, bowls, cinematic nature)
- Minimal floating navigation
- Optional floating sound-wave visualization
- Huge stacked serif typography — not a single line

**Example copy:**

```text
TRUE HEALING
BEGINS WHEN
THE BODY FEELS SAFE.
```

**Requirements:**

- No subheading paragraph above fold — let typography breathe
- CTA appears after scroll or as subtle bottom element
- Video muted, looped, with poster fallback
- Overlay: warm gradient, not flat black

```typescript
interface CinematicHeroProps {
  videoSrc: string;
  posterImage: string;
  lines: string[];           // Stacked headline lines
  showSoundWave?: boolean;
  cta?: { label: string; href: string };
}
```

---

## EditorialFounderStory

**Purpose:** Founder introduction. Luxury magazine article — NOT split image + text card.

**Layout:**

- Full-screen portrait of Sonia
- Editorial typography overlapping or adjacent (asymmetric)
- Timeline storytelling scroll
- Pull quotes in terracotta
- Generous whitespace between narrative blocks

**Animation:** Parallax on portrait. Text blur-reveals on scroll.

**Avoid:** Side-by-side 50/50 layout with bullet points.

---

## NervousSystemJourney

**Purpose:** Signature interactive section. Most unique part of the homepage.

**Layout:**

- Vertical scroll journey with visual state changes
- Stress cascade: Hyper-Arousal → Burnout → Anxiety → Poor Sleep → Disconnection
- Transition point: visual shift from tension to calm
- Resolution: Restoration

**Interaction:**

As user scrolls, color temperature cools, motion slows, typography softens — the nervous system calms visually.

```typescript
interface NervousSystemStage {
  label: string;
  description: string;
  visualState: 'tense' | 'transitional' | 'calm';
}
```

**Avoid:** Static list of symptoms. Must be experiential.

---

## ImmersiveServicePanel

**Purpose:** Services showcase. Apple product storytelling — NOT service cards.

**Layout:**

- Numbered full-bleed panels (01, 02, 03...)
- Each panel: full image/video background + minimal overlay text
- Vertical stack or scroll-triggered transitions between panels
- One service per panel — large, immersive

**Example:**

```text
01  Sound Healing
    [full image background]

02  Kundalini Yoga
    [full image background]

03  Breathwork
    [full image background]
```

**Copy per panel:** Problem-first (1–2 lines max on overlay). Full copy on click-through to service page.

**Avoid:** Card grids, icon + title + description boxes, equal-height columns.

```typescript
interface ImmersiveServicePanelProps {
  number: string;
  title: string;
  tagline: string;          // Problem-first, not "We offer..."
  image: string;
  href: string;
}
```

---

## CorporateDarkSection

**Purpose:** Corporate wellness on homepage. Completely different visual register.

**Layout:**

- Black/dark charcoal background (`#1A1A1A`)
- Large metric typography

```text
70%

of professionals report burnout symptoms
```

- Executive program headline below metric
- Asymmetric image + text composition
- Links to `/corporate-wellness-programs` and `/executive-nervous-system-reset`

**Tone:** Professional, minimal, trust-building. No decorative wellness clichés.

---

## HorizontalRetreatStory

**Purpose:** Retreat experiences. Travel documentary — NOT retreat cards.

**Layout:**

- Horizontal scrolling section (Lenis + GSAP or CSS scroll-snap)
- Location sequence: Jaisalmer → Rishikesh → Gangtok → Sri Lanka
- Each stop: full-bleed imagery + location name + brief story
- Progress indicator or subtle scroll cue

```typescript
interface RetreatLocation {
  name: string;
  image: string;
  story: string;
  href: string;
}
```

**Avoid:** Vertical card grid, carousel sliders.

---

## PolaroidTestimonialWall

**Purpose:** Social proof. Discovered, not presented.

**Layout:**

- Floating paper/polaroid cards at slight rotations (-3° to 3°)
- Cream/paper texture backgrounds
- Staggered positioning — not aligned grid
- Handwritten-style attribution (optional)
- Staggered reveal animation on scroll

**Avoid:** Testimonial sliders, carousels, dot navigation, equal-width quote cards.

```typescript
interface PolaroidTestimonialProps {
  quote: string;
  name: string;
  context: string;
  rotation: number;
  offset: { x: number; y: number };
}
```

---

## ArchitecturalContact

**Purpose:** Final conversion. Contact section on homepage and contact page.

**Layout:**

- Vast whitespace
- Single powerful statement:

```text
Your nervous system already knows how to heal.

Let's begin.
```

- Minimal form below — name, email, message (not 15 fields)
- No sidebar, no map embed, no social icon row competing for attention

---

## Landing Page Components

Used across dedicated landing pages (`LANDING_PAGE_STRATEGY.md`).

### LandingHero

Variant of CinematicHero with audience-specific copy. Problem statement in first viewport.

### ProblemSymptomBlock

Asymmetric layout presenting problem and symptoms. No centered text wall.

### TransformationReveal

Visual + copy transition from dysregulation to restoration. Blur/scale animation.

### MethodologySection

How Sonia works — step flow or editorial layout. Unique per landing page.

### LandingCTA

Single-focus conversion block. One button, one action. Matches landing page CTA from strategy doc.

---

## Shared UI Primitives

These are reused everywhere but never define section identity:

- `Button` — pill, terracotta primary
- `Container` — max 1400px
- `AnimatedReveal` — fade-up, blur reveal wrapper
- `SoundWaveVisualization` — floating ambient animation for hero

---

## Forbidden on Homepage

| Pattern | Why |
|---------|-----|
| ServiceCard grid | Generic template — use ImmersiveServicePanel |
| Testimonial slider | Everyone uses sliders — use PolaroidTestimonialWall |
| 3-column feature cards | Predictable AI layout |
| Centered everything | Lacks editorial sophistication |
| Heading + Text + Button × N | Repetitive stack — vary compositions |
| Equal-height card rows | Template signal |

---

## Awwwards Test

Before merging any component, verify:

1. Would this look out of place on a premium Awwwards website?
2. Does it resemble a yoga website template?
3. Does it feel AI-generated?

If any answer is yes — redesign before shipping.
