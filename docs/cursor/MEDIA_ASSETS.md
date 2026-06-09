# MEDIA ASSETS — Trika Yoga & Wellness

Asset organization and usage guidelines for imagery and video.

---

## Directory Structure

```
/assets
  /images
    /hero          — Full-width hero backgrounds and fallbacks
    /founder       — Sonia Razdan portraits and candid shots
    /services      — Per-modality imagery
    /retreats      — Retreat locations and experiences
    /corporate     — Workshop and corporate event photos
    /testimonials  — Client photos (with permission)
    /gallery       — General brand imagery
    /press         — Media logos and publication features
  /videos
    /hero          — Homepage hero background video
    /retreats      — Retreat highlight reels
    /corporate     — Corporate workshop footage
    /testimonials  — Video testimonials
  /icons           — UI icons and decorative elements
  /logos           — Trika Yoga & Wellness brand marks
```

---

## Hero Videos

**Requirements:**

- 16:9 or cinematic widescreen aspect
- 15–30 seconds, seamless loop
- Muted autoplay compatible
- Compressed for web (H.264/WebM, < 5MB ideal)
- Fallback poster image required

**Content:**

- Gong being played in warm natural light
- Sound bowls with slow camera movement
- Desert or mountain landscape at golden hour
- Meditation circle from behind (no faces required)

**Avoid:** Fast cuts, text overlays in video, stock footage watermarks

---

## Founder Photos

**Requirements:**

- High resolution (min 2000px wide)
- Warm natural lighting
- Grounded, authentic — not overly posed
- Mix of portrait and environmental shots

**Shots needed:**

- Headshot (for About, testimonials attribution)
- Full-body in practice setting
- Playing gong or holding bowls
- Teaching/facilitating group session
- Retreat setting candid

---

## Service Images

One hero image per service, plus 2–3 supporting images.

| Service | Image Direction |
|---------|----------------|
| Sound Healing | Singing bowls, close-up of vibration, hands on bowls |
| Gong Immersions | Large gong, participant lying in savasana, sound waves atmosphere |
| Kundalini Yoga | Practice space, subtle energy — avoid generic yoga poses |
| Breathwork | Peaceful face, hands on belly, nature backdrop |
| Private Sessions | Intimate one-on-one setting, warm lighting |
| Group Experiences | Circle formation, shared experience, community feel |
| Retreat Programs | Landscape + practice combined, nature immersion |

---

## Retreat Media

- Location landscape shots (desert, mountains, beach)
- Accommodation ambiance (if applicable)
- Group practice in nature
- Meal/gathering moments (warm, candid)
- Sunset/sunrise golden hour shots

**Video:** 30–60 second highlight reel per retreat location.

---

## Corporate Workshop Photos

- Professional but warm setting
- Diverse participants in workshop
- Sonia facilitating — confident, grounded presence
- Team circle or group breathwork
- Modern office or retreat venue (not sterile conference room)

---

## Testimonial Assets

- Client photo (optional, with written permission)
- Polaroid-style frame treatment applied in CSS (not baked into image)
- Cream/paper texture as CSS background

---

## Press & Media

- Publication logos (grayscale or muted color treatment)
- Press quote excerpts
- Award or certification badges

---

## Image Technical Specs

| Context | Dimensions | Format |
|---------|------------|--------|
| Hero background | 1920×1080 min | WebP + JPEG fallback |
| Service card | 800×600 | WebP |
| Retreat card | 1200×800 | WebP |
| Founder portrait | 800×1000 | WebP |
| Gallery thumbnail | 400×400 | WebP |
| OG image | 1200×630 | JPEG |

### Optimization Rules

- Lazy load all below-fold images
- Use `srcset` for responsive sizes
- Alt text: descriptive, includes context (not "image1.jpg")
- Compress to < 200KB for cards, < 500KB for heroes

---

## Placeholder Strategy (Development)

Until final assets are provided, use:

- Unsplash searches: "singing bowl", "gong meditation", "desert retreat", "sound healing"
- Warm color grading overlay to match brand palette
- Never use generic yoga pose stock photos

---

## Logo Assets

- Primary logo (full color)
- Logo mark / icon (for favicon)
- White/reversed version (for dark backgrounds)
- Favicon: 32×32, 180×180 (Apple touch)
