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
   - Three albums, static grid (not lightbox):
     - Portraits — 5 photos
     - Sports — 5 photos
     - More Work — remaining 14 photos (7 portraits + 7 sports not featured above) — *assumption: one combined album; tell me if you wanted portraits/sports kept separate within it*
   - Which 5 go in each of Portraits/Sports is not yet chosen — Claude will make an initial pick from the 12 staged in `assets/portfolio/`, swappable anytime
   - Plus a video section:
     - 3 video examples (YouTube):
       - https://youtu.be/XGcTLxPtHUs
       - https://youtu.be/06cEg1J4TNo
       - https://youtu.be/ejIs2mUXO4M
     - 2 looping aerial shots (drone footage, silent/muted autoplay loop) — Joey will upload the video files
   - Below the static image grid: embedded Playbook portfolio (https://www.playbook.com/s/jolinmedia/portfolio/)

4. **About Me**
   - Name
   - Photo
   - Brief about-me paragraph

5. **Booking section**
   - Embedded **Cal.com** scheduler (real-time availability), not a plain form
   - Photography bookings (portrait & sports sessions): collect **50% deposit upfront** via Stripe at time of booking
   - Video bookings: **no payment collected at booking** — priced per finished minute, billed separately after the work is scoped/delivered
   - Payment processor: **Stripe** — Joey still needs to create the account (not blocking site build, but needed before booking goes live)

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
- Logo: Joey shared it in chat, but it can't be pulled from the conversation to disk directly — waiting on him to save it to `assets/logo/` via Finder
- Hero photo + about-me photo: ready, will be uploaded before build
- Portfolio photos: **received and staged** in `assets/portfolio/portraits/` (12 files) and `assets/portfolio/sports/` (12 files) — copied from the Sandisk drive (`Jolin Media claude website/Photos/`). Split decided: 5 portraits + 5 sports featured, remaining 14 go in a "More Work" album (see Home page section above).

## Technical — DECIDED
- Domain already owned: jolinmedia.com
- Hosting: **Vercel**
- Implied stack: a framework Vercel deploys natively (Next.js is the natural default) — to be confirmed when we scope the build

## Open questions (remaining)

**Portfolio**
1. "More Work" album — confirm it should be one combined album of all 14 leftover photos, not split by category.

**Assets still needed**
2. Logo — needs to be saved to `assets/logo/` on this Mac (can't be pulled from chat directly).
3. Hero photo, about-me photo, and the 2 aerial video files — where do these live (same Sandisk folder? phone? elsewhere)?

**Booking / payments**
4. Stripe account still needs to be created by Joey before booking payments can go live — not a blocker for building the site, just needs to happen before launch.

## Decisions (confirmed)
- Business name: Jolin Media
- Contact info: email, phone, Instagram as listed above
- Site structure: Home (single page with sections) + Services + Contact
- Portfolio layout: static grid, not lightbox, with embedded Playbook portfolio link below it
- Video examples: 3 YouTube links (confirmed above) + 2 silent/muted aerial loop clips (files to be uploaded)
- Portfolio split: 5 portraits + 5 sports featured, remaining 14 in a "More Work" album
- Event Coverage & Web Design: quote-on-request, no listed pricing
- Booking: embedded Cal.com scheduler; 50% Stripe deposit upfront for photography, no payment at booking for video
- Design: no reference site, Claude has creative freedom
- Domain: owned (jolinmedia.com)
- Hosting: Vercel
