Gobyahan Website — Static HTML/CSS/JS
======================================

This is a starter website for Gobyahan, structured per Nimco's email and
modeled loosely on the layout of globalgirlmedia.org.

Files
-----
  index.html      Home page
  about.html      About Us (mission, vision, board)
  programs.html   Programs overview
  join.html       Volunteer / partner / careers + form
  donate.html     Donation page with amount selector
  contact.html    Contact form + organization details
  css/styles.css  All site styles
  js/main.js      Mobile nav toggle, donate amount selector, form demo

How to preview
--------------
1. Double-click index.html to open it in your browser, OR
2. From this folder, run:  python3 -m http.server 8000
   then visit http://localhost:8000

What's a placeholder (replace before launch)
--------------------------------------------
- Hero image: currently a CSS gradient. Replace with a real photo by setting
  background-image on the .hero rule in css/styles.css, or add an <img>.
- Logo: currently text. To use a logo image (the black bird symbol from the
  Canva slides), replace the text inside <a class="brand"> in each HTML file
  with <img src="images/logo.png" alt="Gobyahan">.
- Color palette: currently the starter theme. Update the --color-* variables
  in css/styles.css to match the Canva slide palette.
- Board members: names, titles, and bios are real (Nimco Yuusuf, Christine
  Dindia) but their avatars are still letter placeholders — swap in real
  photos in about.html.
- Contact info: email, phone, address are placeholders in every footer + contact.html.
- Donate page: donations are intentionally disabled until 501(c)(3) status is
  obtained (see donate.html). Once that's in place, connect a payment
  processor (Stripe, PayPal, Donorbox, Givebutter) and re-enable the form.
- Forms: the Join and Contact forms only show an alert. Connect them to a
  form service (Formspree, Netlify Forms, Basin).

Hosting suggestions
-------------------
- Netlify (drag and drop this folder onto netlify.com — done in 60 seconds)
- GitHub Pages (push to a repo, enable Pages)
- Any static host (Cloudflare Pages, Vercel, etc.)

Customization tips
------------------
- All colors live in :root at the top of css/styles.css. Change --color-accent
  to update the primary color across the whole site.
- Fonts: --font-sans and --font-serif. Swap to Google Fonts by adding a <link>
  in each HTML <head> and updating those variables.
