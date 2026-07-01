## Add a "Moments" photo gallery section

Bring the uploaded photos into the home page as a swipeable, deck-of-cards style gallery that blends with the editorial design.

### Photos to include (8)
1. Before/After whitening result
2. Founder in clinic, thumbs up ("Professional Dental Care")
3. Parktown clinic chair setup (blue room)
4. Full mobile setup with ACD banner
5. Patient portrait / smile
6. School activation (learners in red uniforms)
7. Outdoor pop-up dental unit (green chair)
8. Two-photo pair from a patient treatment session (pick the stronger of the two)

### Upload flow
- Copy each image from `/mnt/user-uploads/` and push through `lovable-assets create` to get CDN pointer JSON files under `src/assets/moments/`.
- Reference them via imported `.asset.json` URLs, not repo binaries.

### Section design ("Moments / On the ground")
Placed on `src/routes/index.tsx` between the testimonials and the FAQ (lower section, natural break).

- Eyebrow: `ON THE GROUND` in the existing tracked small-caps style.
- Headline in Cormorant Garamond: "Moments from the chair, the van, and the school hall."
- Short 1-line intro copy, e.g. "Real setups. Real patients. Real Johannesburg."
- Deck-of-cards carousel:
  - Horizontal snap-scroll strip using CSS `scroll-snap-type: x mandatory`, hides scrollbar.
  - Each card ~72vw on mobile / ~380px on desktop, aspect 3:4, rounded corners, subtle ring + shadow to look like a stacked polaroid.
  - Slight rotation on non-focused cards (`-rotate-1`, `rotate-1`) to feel like a hand-held deck.
  - Bottom-left caption chip per card (Cleaning, Founder, Parktown clinic, Mobile unit, Patient smile, School outreach, Community pop-up, Chairside).
  - Prev / next arrow buttons on desktop that scroll the strip by one card width.
  - Dots or "01 / 08" counter indicator underneath.
- Fully responsive: strip scrolls with touch on mobile, arrows appear on `md:` and up.
- Uses existing design tokens (bone bg, ink text, teal accent) so it blends with the rest of the page.

### SEO
- Alt text on every image is descriptive + keyword-aware ("Access Care Dental mobile setup in Johannesburg", "School dental outreach in Soweto", etc.).
- No new routes, no schema changes.

### Files touched
- New: `src/assets/moments/*.asset.json` (8 pointers)
- Edit: `src/routes/index.tsx` (add section + carousel)
- Edit: `src/styles.css` (tiny utility for hidden scrollbar if not present)

No changes to services, blog, routing, or metadata.