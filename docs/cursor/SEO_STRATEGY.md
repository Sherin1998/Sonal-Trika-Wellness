# SEO STRATEGY — Trika Yoga & Wellness

## Primary Keywords

| Keyword | Target Page |
|---------|-------------|
| Sound Healing Mumbai | `/sound-healing-mumbai` |
| Gong Bath Mumbai | `/sound-healing-mumbai` |
| Sound Therapy Mumbai | `/sound-healing-mumbai` |
| Kundalini Yoga Mumbai | `/kundalini-yoga-mumbai` |
| Breathwork Classes Mumbai | `/kundalini-yoga-mumbai` |
| Corporate Wellness Programs | `/corporate-wellness-programs` |
| Corporate Wellness India | `/corporate-wellness-programs` |
| Executive Wellness India | `/executive-nervous-system-reset` |
| Wellness Retreat India | `/wellness-retreats` |
| Luxury Wellness Retreat | `/wellness-retreats` |
| Sound Healing Retreat | `/wellness-retreats` |
| Private Sound Healing Sessions | `/private-somatic-healing` |
| Nervous System Healing | Home, About |
| Sound Healing India | `/services/sound-healing` |
| Gong Bath Sessions | `/services/gong-immersions` |

## Secondary Keywords

- Executive wellness programs India
- Burnout prevention workshops
- Women leadership wellness
- Team building wellness activities
- Sound therapy for anxiety
- Gong master India
- Kundalini yoga teacher Mumbai
- Corporate stress relief programs
- Luxury wellness retreats India

---

## Page Meta Templates

### Home

```
Title: Sonia Razdan | Sound Healing & Corporate Wellness | Trika Yoga
Description: Certified sound therapist and gong master offering nervous system healing, corporate wellness programs, and luxury retreats across India. Begin your restoration.
```

### About

```
Title: About Sonia Razdan | Sound Therapist & Gong Master | Trika Yoga
Description: Discover Sonia Razdan's journey from personal healing to global retreats. Certified sound therapist bridging ancient vibrational science with modern stress relief.
```

### Services (template)

```
Title: {Service Name} | Sonia Razdan | Trika Yoga & Wellness
Description: {1-2 sentence service description with primary keyword and benefit. Max 160 chars.}
```

### Corporate Wellness

```
Title: Corporate Wellness Programs India | Executive Stress Relief | Trika Yoga
Description: Nervous system-based corporate wellness for leaders and teams. Burnout prevention, executive wellness, and team alignment programs by Sonia Razdan.
```

### Retreats

```
Title: Wellness Retreats India | Sound Healing Retreats | Trika Yoga
Description: Immersive healing retreats in nature. Gong immersions, sound baths, and deep restoration experiences with Sonia Razdan.
```

### Contact

```
Title: Book a Session | Contact Sonia Razdan | Trika Yoga & Wellness
Description: Book a private healing session, schedule a discovery call, or inquire about corporate wellness and retreat programs.
```

### Landing Pages

**Executive Wellness** `/executive-nervous-system-reset`
```
Title: Executive Nervous System Reset | Leadership Wellness | Sonia Razdan
Description: When leadership demands constant output, the nervous system pays the price. Executive recovery programs for founders, CXOs, and investors. Schedule a consultation.
```

**Corporate Wellness** `/corporate-wellness-programs`
```
Title: Corporate Wellness Programs India | Team Stress Relief | Trika Yoga
Description: 70% of professionals report burnout symptoms. Nervous system-based corporate wellness for HR teams and organizations. Request a proposal.
```

**Sound Healing Mumbai** `/sound-healing-mumbai`
```
Title: Sound Healing Mumbai | Gong Bath Sessions | Sonia Razdan
Description: When chronic stress traps the nervous system, sleep and clarity suffer. Immersive sound healing and gong bath sessions in Mumbai. Book a session.
```

**Kundalini Yoga Mumbai** `/kundalini-yoga-mumbai`
```
Title: Kundalini Yoga Mumbai | Breathwork Classes | Trika Yoga
Description: Reconnect with vitality through kundalini yoga and breathwork in Mumbai. Guided practice for nervous system regulation. Join a program.
```

**Wellness Retreats** `/wellness-retreats`
```
Title: Wellness Retreats India | Luxury Sound Healing Retreats | Trika Yoga
Description: Multi-day immersive healing retreats across India and beyond. Sound healing, nature immersion, deep restoration. Reserve your spot.
```

**Private Somatic** `/private-somatic-healing`
```
Title: Private Somatic Healing Programs | Sonia Razdan | Trika Yoga
Description: Bespoke nervous system recovery for individuals who need more than group sessions. Private somatic healing programs. Apply today.
```

Landing page meta descriptions must follow problem-first copy — lead with the condition, not the service name.

---

## Required Per Page

- Unique `<title>` (50–60 characters)
- Meta description (150–160 characters)
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Twitter Card tags
- Canonical URL
- Structured data (JSON-LD)

---

## Structured Data

### Organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Trika Yoga & Wellness",
  "founder": {
    "@type": "Person",
    "name": "Sonia Razdan"
  },
  "description": "Sound healing, corporate wellness, and retreat programs bridging ancient vibrational science with modern stress relief.",
  "url": "https://trikayoga.com"
}
```

### Person (Sonia)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sonia Razdan",
  "jobTitle": "Certified Sound Therapist & Gong Master",
  "worksFor": {
    "@type": "Organization",
    "name": "Trika Yoga & Wellness"
  }
}
```

### Service (per service page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{Service Name}",
  "provider": {
    "@type": "Person",
    "name": "Sonia Razdan"
  },
  "areaServed": "India",
  "description": "{Service description}"
}
```

### Event (retreat pages)

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "{Retreat Name}",
  "startDate": "{ISO date}",
  "location": {
    "@type": "Place",
    "name": "{Location}"
  },
  "organizer": {
    "@type": "Person",
    "name": "Sonia Razdan"
  }
}
```

---

## Technical SEO

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- One `<h1>` per page
- Descriptive alt text on all images
- Internal linking between related services and pages
- Sitemap.xml generation
- robots.txt
- Target Lighthouse SEO score: 90+

---

## Performance (impacts SEO)

- Lazy load images and videos below fold
- Optimized image formats (WebP/AVIF)
- Next.js Image component (when migrated) or equivalent optimization
- Minimize layout shift (CLS)
- Mobile-first responsive design
