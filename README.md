# Gobyahan Website — Static HTML/CSS/JS

This is a starter website for Gobyahan, structured per Nimco's email and modeled loosely on the layout of [globalgirlmedia.org](https://globalgirlmedia.org).

## Project status

- **Repo:** https://github.com/AmiinMuse/gobyahan
- **Feedback #1** (Nimco's content updates — tagline, About/Programs/Donate copy, real board bios): merged into `main`.
- **Feedback #2** (branch `nimco-feedback-round-2`): artistic font (Fraunces + Inter), sage-green color theme, "Our Story" restyled as a letter shown side-by-side with a photo, updated Who We Are / Mission / Vision / bios copy, "Storytelling Workshops" renamed to "Gobyahan Filmmaking Bootcamp" with a linked 2024 recap section and photo gallery on the Programs page, real logo/headshots/bootcamp photos from Nimco's Drive folder wired in throughout, a homepage stats bar + full-site photo slideshow, and a full-profile modal for each board member.
- **Hosting:** not yet live. Plan is to deploy `main` to Netlify (free tier). No custom domain yet.
- **Outstanding assets**: contact info (email/phone/address are still placeholders), donation processor, and Join/Contact form backend. Logo, color palette, and all real photos/headshots are now in place — see `images/`.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Home page |
| `about.html` | About Us (mission, vision, board) |
| `programs.html` | Programs overview |
| `join.html` | Volunteer / partner / careers + form |
| `donate.html` | Donation page with amount selector |
| `contact.html` | Contact form + organization details |
| `css/styles.css` | All site styles |
| `js/main.js` | Mobile nav toggle, donate amount selector, form demo |

## How to preview

1. Double-click `index.html` to open it in your browser, **or**
2. From this folder, run:
   ```bash
   python3 -m http.server 8000
   ```
   then visit http://localhost:8000

## Image assets

All real photos from Nimco's Drive folder are wired in under `images/`:

- `images/gobyahan-logo.png` — nav logo, all pages
- `images/hero.jpg` — homepage hero background
- `images/our-story.jpg` — About page, next to the "Our Story" letter
- `images/nimco-headshot.jpg`, `images/christine-headshot.jpg` — About page leadership cards + full-profile modals
- `images/bootcamp-01.jpg` through `bootcamp-09.jpg` — Programs page, "Gobyahan Filmmaking Bootcamp 2024" gallery
- `images/gallery-01.jpg` through `gallery-09.jpg` — homepage photo slideshow only (pastoral/camel life + additional bootcamp behind-the-scenes shots not used elsewhere)
- `images/IMG_5979 (1).jpg` — unused; black-and-white duplicate of `our-story.jpg`, kept in the folder in case it's wanted later

## Placeholders (replace before launch)

- **Contact info:** email, phone, address are placeholders in every footer + `contact.html`.
- **Donate page:** donations are intentionally disabled until 501(c)(3) status is obtained (see `donate.html`). Once that's in place, connect a payment processor (Stripe, PayPal, Donorbox, Givebutter) and re-enable the form.
- **Forms:** the Join and Contact forms only show an alert. Connect them to a form service (Formspree, Netlify Forms, Basin).

## Hosting suggestions

- **Netlify** — drag and drop this folder onto netlify.com, or connect the GitHub repo for auto-deploys on push (done in ~60 seconds)
- **GitHub Pages** — push to a repo, enable Pages in repo settings
- Any static host (Cloudflare Pages, Vercel, etc.)

## Customization tips

- All colors live in `:root` at the top of `css/styles.css`. Change `--color-accent` to update the primary color across the whole site.
- Fonts: `--font-sans` and `--font-serif`. Swap to Google Fonts by adding a `<link>` in each HTML `<head>` and updating those variables.
