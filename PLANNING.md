# Jolin Media — Website Planning

## Status
Planning phase. No code has been written yet — this doc is the single source of truth for decisions until we start building.

## Business
- Name: **Jolin Media** (confirmed)
- Owner: Joey Jolin, based in Burlington, Iowa
- Services: Videography, Photography, Drone, Event Coverage, Web Design
- Email: joey@jolinmedia.com
- Phone: (319) 750-3747
- Instagram: @jolin_media
- Domain: jolinmedia.com (already owned)

## Site structure — DECIDED
Single main page: **Home**, plus **Services** (pricing) and **Contact**. No standalone Portfolio/About pages — those live as sections on Home.

## Home page — section by section

1. **Hero**
   - Photo of Joey on the right
   - Quick description
   - Location: Burlington, Iowa
   - Brief statement of what he does

2. **What I Do** (services overview strip)
   - Videography
   - Photography
   - Drone
   - Event Coverage
   - Websites
   - One tile/tab for **Bookings** with a "Check Dates" button

3. **Portfolio preview**
   - Two albums, static grid (not lightbox):
     - Portraits — 6 photos
     - Sports — 6 photos
   - Plus a video section:
     - 3 video examples (YouTube links)
     - 2 looping aerial shots (drone footage, autoplay/loop)
   - Reference: Joey has an existing portfolio at https://www.playbook.com/s/jolinmedia/portfolio/ — need to confirm whether this is just a source to pull images/videos from, or should be linked/embedded on the site (see open questions)

4. **About Me**
   - Name
   - Photo
   - Brief about-me paragraph

5. **Booking section**
   - Embedded scheduler (real-time availability), not a plain form
   - Collects payment/deposit online
   - Provider TBD (Calendly vs Cal.com — see open questions)

## Services page — pricing

### Videography
- **Short Form Content** — $200–250 per finished minute
  - Usually 15–60 seconds
  - 3 verticals per visit
  - Captions and sound design
  - Quick turnaround
- **Commercial** — $600 per finished minute
  - Brand films, ads, explainers
  - Gear and edit included
  - Full production start to delivery
  - Two rounds of revisions
  - Retouched stills from the shoot
  - Full commercial license
- **Drone Add-On** — $300
  - Licensed aerial pass on any project
  - 4K60 aerial footage
  - 10 aerial stills

### Portrait Photography
- **Premium** — $500
  - 90-minute session
  - Unlimited outfits
  - Unlimited locations
  - 30 edited photos
- **Standard** — $300
  - 45-minute session
  - 1 location, 1 outfit
  - 20 edited photos
- **Basic** — $175
  - 30-minute session
  - 10 edited photos

### Sports Photography
- **Basic** — $75
  - 10 edited images, watermarked
- **Standard** — $125
  - 15 edited images, no watermark
- **Premium** — $200
  - Full gallery, 30–60 edited images, no watermark

Each pricing tier has a button linking to the Contact page.

**Not priced yet (quote-on-request for now):** Event Coverage, Web Design. Contact-only, no listed pricing tiers.

## Contact page
- Same embedded booking/scheduler as Home
- Email: joey@jolinmedia.com
- Phone: (319) 750-3747
- Instagram: @jolin_media
- Location: Burlington, Iowa

## Design & content — DECIDED
- No reference sites — Claude has creative freedom on visual design
- Logo: exists, will be uploaded before build
- Hero photo + about-me photo: ready, will be uploaded before build
- 12 portfolio photos (6 portraits + 6 sports): Joey has them, needs to send

## Technical — DECIDED
- Domain already owned: jolinmedia.com
- Hosting: **Vercel**
- Implied stack: a framework Vercel deploys natively (Next.js is the natural default) — to be confirmed when we scope the build

## Open questions (remaining)

**Portfolio / video**
1. The Playbook link (https://www.playbook.com/s/jolinmedia/portfolio/) — should the site just pull photos/videos from there as source material (images end up hosted on our own site), or should it also be linked/embedded somewhere as "view full portfolio"?
2. What are the 3 YouTube links for the video examples?
3. Where do the 2 looping aerial video clips come from (file format/source), and do they need sound or should they be silent/muted loops (typical for autoplay background-style clips)?

**Booking system**
4. Scheduler provider — Calendly or Cal.com (or another)? Do you already have an account with either?
5. Payment collection needs a processor — Stripe is the standard pairing with both Calendly and Cal.com. Do you have a Stripe account, or need to set one up?
6. What should a booking actually charge — a flat deposit, the full session price, or does it vary by service (since pricing varies from $75 to $600/min)?

**Assets**
7. Ready to receive when you are: logo file, hero photo, about-me photo, and the 12 portfolio photos. What's the easiest way for you to get these to Joey's computer — are they already on this Mac (which folder), on the external Sandisk drive, on your phone, or somewhere else? Once I know where they are I can bring them into the project folder.

## Decisions (confirmed)
- Business name: Jolin Media
- Contact info: email, phone, Instagram as listed above
- Site structure: Home (single page with sections) + Services + Contact
- Portfolio layout: static grid, not lightbox
- Event Coverage & Web Design: quote-on-request, no listed pricing
- Booking: embedded real-time scheduler with online payment collection
- Design: no reference site, Claude has creative freedom
- Domain: owned (jolinmedia.com)
- Hosting: Vercel
