# SITE MAP — Trika Yoga & Wellness

## Primary Navigation

```
Home
About Sonia
Experiences ▾
  ├ Sound Healing
  ├ Gong Immersions
  ├ Kundalini Yoga
  ├ Breathwork
  ├ Private Sessions
  └ Retreat Programs
Corporate Wellness
Retreats
Contact
```

Footer includes all landing pages and social links.

---

## Homepage `/` — Unique Section Layouts

Each section has a **different visual structure**. Never repeat card grids.

| # | Section | Layout Type | Component |
|---|---------|-------------|-----------|
| 1 | Hero | Video-first, huge stacked typography, sound-wave viz | `CinematicHero` |
| 2 | Founder Story | Editorial magazine, full-screen portrait, timeline | `EditorialFounderStory` |
| 3 | Nervous System | Interactive scroll journey — stress states calm visually | `NervousSystemJourney` |
| 4 | Services | Apple-style numbered immersive panels (01, 02, 03) | `ImmersiveServicePanel` |
| 5 | Corporate | Dark immersive, large metrics | `CorporateDarkSection` |
| 6 | Retreats | Horizontal scrolling documentary | `HorizontalRetreatStory` |
| 7 | Testimonials | Polaroid wall, staggered, discovered feel | `PolaroidTestimonialWall` |
| 8 | Contact | Architectural minimalism, vast whitespace | `ArchitecturalContact` |

### Hero Copy Example

```text
TRUE HEALING
BEGINS WHEN
THE BODY FEELS SAFE.
```

### Nervous System Journey

```text
Hyper-Arousal → Burnout → Anxiety → Poor Sleep → Disconnection
                                    ↓
                              Restoration
```

Scroll interaction: visuals gradually calm as user progresses.

### Contact Copy Example

```text
Your nervous system already knows how to heal.

Let's begin.
```

---

## Dedicated Landing Pages (High-Value Conversion)

See `LANDING_PAGE_STRATEGY.md` for full content and design specs.

| URL | Audience | Primary CTA |
|-----|----------|-------------|
| `/executive-nervous-system-reset` | Founders, CXOs, Investors | Schedule Executive Consultation |
| `/corporate-wellness-programs` | HR, Leadership, Organizations | Request Corporate Proposal |
| `/sound-healing-mumbai` | Local wellness seekers | Book Session |
| `/kundalini-yoga-mumbai` | Local yoga seekers | Join Program |
| `/wellness-retreats` | Retreat participants | Reserve Spot |
| `/private-somatic-healing` | HNW individuals, deep recovery | Apply For Private Program |

Each landing page: Problem → Symptom → Transformation → Methodology → CTA

---

## Core Pages

### `/about` — About Sonia

Editorial magazine layout — NOT a standard about page.

- Full-screen portrait hero
- Timeline storytelling (luxury magazine article feel)
- Journey into sound healing
- Global retreat experiences
- Methodology
- Certifications
- Personal philosophy
- Architectural CTA

---

### `/services/{slug}` — Individual Services

Problem-first structure on every service page:

1. Cinematic or editorial hero
2. Problem + Symptom
3. Desired transformation
4. Methodology (process, session flow)
5. Ideal for
6. CTA

**Slugs:** `sound-healing` · `gong-immersions` · `kundalini-yoga` · `breathwork` · `private-sessions` · `retreat-programs`

---

### `/corporate-wellness` — Corporate Hub

Links to `/corporate-wellness-programs` and `/executive-nervous-system-reset`.

Dark immersive sections · large statistics · asymmetric program panels.

---

### `/retreats` — Retreats Hub

Links to `/wellness-retreats` landing page.

Horizontal location storytelling: Jaisalmer → Rishikesh → Gangtok → Sri Lanka

---

### `/contact` — Contact

Architectural minimalism. Single statement + form. No cluttered multi-form page.

---

## Full URL Structure

```
/                                      Home
/about                                 About Sonia
/services/{slug}                       Individual services
/corporate-wellness                    Corporate hub
/retreats                              Retreats hub
/contact                               Contact

/executive-nervous-system-reset        Landing — Executive
/corporate-wellness-programs           Landing — Corporate
/sound-healing-mumbai                  Landing — Local SEO
/kundalini-yoga-mumbai                 Landing — Local SEO
/wellness-retreats                     Landing — Retreats
/private-somatic-healing               Landing — Private programs
```

## Phase 2

- `/journal` — Thought leadership
- `/workshops` — Workshop calendar
- `/media` — Press and features
