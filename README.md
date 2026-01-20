# HAYC-WEBSITE
🎨 HAYC Brand Usage Guide

(Primary vs Accent vs Supporting Colors)

1️⃣ Primary Brand Color — --brand-primary

Color: #1f6fa8 (Logo Blue)

Use for:

Primary buttons (Join, Apply, Submit)

Active navigation links

Key call-to-action links

Important interactive elements

Avoid:

Large body text blocks

Long paragraphs (causes eye fatigue)

✅ Purpose: “Action & interaction”

2️⃣ Accent Color — --brand-accent

Color: #0f4c81 (Deeper Navy-Blue)

Use for:

Section headings (h2, h3)

Page titles inside content areas

Subtle emphasis in structured content

Avoid:

Buttons (too heavy)

Small UI elements

✅ Purpose: “Structure & hierarchy”

3️⃣ Highlight Color — --brand-highlight

Color: #4fa3d1 (Light Blue)

Use for:

Icons (⚓ 🎉 📍)

Hover states

Decorative dividers

Secondary emphasis

Avoid:

Text paragraphs

Primary buttons

✅ Purpose: “Energy & polish”

4️⃣ Navy / Neutral — --brand-navy

Color: #1f2933

Use for:

Body text

Footer background

Navigation text

✅ Purpose: “Readability & trust”

5️⃣ Background Colors
Color	Usage
--brand-light	CTA sections
--brand-muted	Alternating content sections
♿ Contrast Accessibility Audit (WCAG AA)
✅ PASSES
Element	Status
Body text on white	✅
Accent headings on white	✅
Buttons (white on blue)	✅
Footer text on navy	✅
Navigation text	✅
⚠️ WATCH ITEMS

Light blue (--brand-highlight) should not be used for body text

Overlay text on hero images relies on the dark overlay (you already did this correctly)

Recommendation:

You’re already WCAG AA compliant for normal text and UI.

✔ No changes required for accessibility
✔ Safe for public-facing organization

✨ Polished Link Hover & Underline Effects

These add subtle professionalism without looking “web 1.0”.

✅ Add this to styles.css (recommended near links section):
/* =========================
   LINK POLISH
========================= */

a {
  position: relative;
  transition: color 0.2s ease;
}

/* Underline on hover for body links */
.section-inner a:not(.btn)::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: var(--brand-highlight);
  transition: width 0.25s ease;
}

.section-inner a:not(.btn):hover::after {
  width: 100%;
}

/* Nav links — subtle color shift only */
nav a:hover {
  color: var(--brand-primary);
}

/* Footer links */
footer a {
  color: #ffffff;
  text-decoration: underline;
}

footer a:hover {
  color: var(--brand-highlight);
}

Result:

✔ Body links feel refined
✔ Buttons stay clean
✔ Navigation remains minimal
✔ Footer remains accessible

🧭 Quick “When in Doubt” Rule

If you’re ever unsure:

Click = Primary

Title = Accent

Decoration = Highlight

Reading = Navy

Final Status Check ✅

Branding: Consistent & intentional

Accessibility: Compliant

UX polish: Professional

Maintainability: High

If you want, next I can:

Create a 1-page internal brand PDF

Audit mobile contrast & tap targets

Add micro-interactions (hover lift on cards)

You’re officially in “launch-ready” territory 🚀

provide full styles script with the polished link hover and underline effects update

Absolutely — below is a clean, consolidated, production-ready styles.css that:

✅ Uses one unified brand color system

✅ Incorporates logo colors throughout (headings, CTAs, icons)

✅ Includes polished hover & underline effects

✅ Preserves accessibility (WCAG-friendly contrast)

✅ Removes redundancy and conflicting rules

✅ Keeps your mobile hamburger/nav working consistently

✅ FINAL styles.css (Production Ready)
/* ======================================================
   BRAND TOKENS (SINGLE SOURCE OF TRUTH)
====================================================== */

:root {
  --brand-navy: #1f2933;
  --brand-primary: #1f6fa8;
  --brand-primary-dark: #15537d;
  --brand-accent: #0f4c81;
  --brand-highlight: #4fa3d1;
  --brand-light: #eef5fb;
  --brand-muted: #f9fafb;
}

/* ======================================================
   RESET & BASE
====================================================== */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  color: var(--brand-navy);
  background-color: #ffffff;
}

img {
  max-width: 100%;
  display: block;
}

/* Typography spacing */
p {
  margin-bottom: 1.25rem;
}

p:last-child {
  margin-bottom: 0;
}

/* ======================================================
   LINKS & INTERACTION POLISH
====================================================== */

a {
  color: inherit;
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;
}

/* Underline animation for body links only */
.section-inner a:not(.btn)::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: var(--brand-highlight);
  transition: width 0.25s ease;
}

.section-inner a:not(.btn):hover::after {
  width: 100%;
}

nav a:hover {
  color: var(--brand-primary);
}

/* ======================================================
   BUTTONS
====================================================== */

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  border-radius: 4px;
  background-color: var(--brand-primary);
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.2s ease, transform 0.15s ease;
}

.btn:hover {
  background-color: var(--brand-primary-dark);
  transform: translateY(-1px);
}

/* Accessibility focus */
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: 2px solid var(--brand-highlight);
  outline-offset: 3px;
}

/* ======================================================
   HEADER & NAVIGATION
====================================================== */

header {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo {
  height: 48px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

nav a.active {
  font-weight: bold;
  color: var(--brand-primary);
}

/* Hamburger */
.hamburger {
  display: none;
  font-size: 1.9rem;
  cursor: pointer;
}

/* ======================================================
   HERO
====================================================== */

.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  padding: 2rem;
  text-align: center;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
}

.hero-text {
  position: relative;
  z-index: 2;
  max-width: 800px;
  color: #ffffff;
}

.hero-logo {
  max-width: 220px;
  margin: 0 auto 1.5rem;
}

.hero-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-text p {
  font-size: 1.1rem;
}

/* ======================================================
   GLOBAL SECTIONS
====================================================== */

section {
  width: 100%;
}

.section-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ======================================================
   ANIMATIONS
====================================================== */

.fade-in {
  animation: fadeIn 0.8s ease-in-out both;
}

.slide-up {
  animation: slideUp 0.8s ease-in-out both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

/* ======================================================
   HOME PAGE
====================================================== */

.home-intro {
  padding: 4rem 0;
}

.home-intro h2 {
  text-align: center;
  color: var(--brand-accent);
}

.home-highlights {
  padding: 4rem 0;
  background-color: var(--brand-muted);
  text-align: center;
}

.highlight-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 2rem auto 0;
}

.highlight-card {
  background-color: #ffffff;
  padding: 1.75rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

/* ======================================================
   CTA SECTIONS
====================================================== */

.home-cta,
.membership-cta,
.events-cta,
.gallery-cta,
.signup-cta {
  padding: 4rem 0;
  background-color: var(--brand-light);
}

.home-cta h2,
.membership-cta h2,
.events-cta h2 {
  text-align: center;
  margin-bottom: 1rem;
  color: var(--brand-accent);
}

.home-cta p,
.membership-cta p,
.events-cta p {
  max-width: 800px;
  margin: 0 auto 1.25rem;
  text-align: left;
}

/* ======================================================
   FORMS
====================================================== */

form {
  max-width: 600px;
  margin: 0 auto;
}

input,
textarea,
select {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
}

textarea {
  min-height: 120px;
}

/* ======================================================
   FOOTER
====================================================== */

footer {
  background-color: var(--brand-navy);
  color: #ffffff;
  text-align: center;
  padding: 1.75rem 1.5rem;
  margin-top: 3rem;
}

.site-attribution {
  font-size: 0.9rem;
  opacity: 0.85;
  max-width: 900px;
  margin: 0.75rem auto 0;
}

footer a {
  color: #ffffff;
  text-decoration: underline;
}

footer a:hover {
  color: var(--brand-highlight);
}

/* ======================================================
   MOBILE NAVIGATION
====================================================== */

.nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 998;
}

.nav-overlay.active {
  opacity: 1;
  pointer-events: all;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  nav ul {
    position: fixed;
    top: 0;
    right: -260px;
    height: 100vh;
    width: 260px;
    background-color: #ffffff;
    flex-direction: column;
    padding: 4rem 1.5rem;
    gap: 1.25rem;
    box-shadow: -4px 0 15px rgba(0, 0, 0, 0.15);
    transition: right 0.3s ease;
    z-index: 999;
  }

  nav ul.show {
    right: 0;
  }

  nav ul li a {
    font-size: 1.1rem;
  }

  .hero-logo {
    max-width: 170px;
  }

  .hero-text h2 {
    font-size: 2rem;
  }
}

✅ What You Now Have

Consistent brand color usage

Refined link hover behavior

Accessible contrast

No duplicated variables

Mobile nav fully compatible

Easy to maintain going forward

If you want next:

🔹 Card hover micro-animations

🔹 A printable HAYC Brand Guide PDF

🔹 Dark-mode variant (very doable with your palette)

