# Sukhmandeep Singh — Personal Portfolio

A clean, responsive, single-page portfolio website introducing me as a B.Tech Computer Science & Engineering student at Guru Nanak Dev Engineering College (GNDEC), Ludhiana. It presents my background, technical skills, featured projects, and contact details in a modern, distraction-free layout.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customisation](#customisation)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contact](#contact)
- [License](#license)

---

## Overview

This portfolio is built as a lightweight static website with no frameworks, build tools, or dependencies — just semantic HTML5 and modern CSS3. The result is a fast-loading, easily maintainable site that can be hosted for free on GitHub Pages, Netlify, or Vercel.

### Sections

| Section | Description |
| --- | --- |
| **Hero** | Profile image, name, short introduction, and a call-to-action to view projects |
| **About** | Personal journey and a grid of technical skills |
| **Projects** | Featured project cards with descriptions, technology tags, and links to source code |
| **Contact** | Email, location, and quick links to LinkedIn and GitHub |
| **Footer** | Site attribution |

---

## Features

- 🎨 **Modern design** — Slate-and-sky-blue colour palette with a fixed navigation bar and consistent section styling
- 📱 **Responsive layout** — CSS Grid and Flexbox with media queries for seamless viewing on desktop, tablet, and mobile
- 🧭 **Smooth navigation** — Anchor-based links with smooth scrolling between sections
- ⚡ **Zero dependencies** — No JavaScript frameworks, package managers, or build steps required
- 🎯 **Accessible markup** — Semantic HTML structure with meaningful headings, alt text, and sufficient colour contrast
- 🔋 **Lightweight** — Minimal CSS footprint for fast load times

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, Grid, Media Queries, Transitions) |
| Assets | Local profile image (`profile.jpg`), remote background image (Unsplash) |
| Hosting | Any static host (GitHub Pages, Vercel) |

---

## Project Structure

```
portfolio/
├── index.html      # Main page markup — all portfolio sections
├── style.css       # Complete stylesheet, including responsive rules
├── profile.jpg     # Hero profile image
├── README.md       # Project documentation
└── .gitattributes  # Git attribute configuration
```

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A code editor (recommended: VS Code)
- Git (optional, for version control)

### Local Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/techwithsukhman/portfolio.git
   cd portfolio
   ```

2. **Open the site**

   Simply open `index.html` in your browser — no server is required:

   ```bash
   # Option A: open directly
   xdg-open index.html   # Linux
   open index.html        # macOS

   # Option B: serve locally (optional)
   python3 -m http.server 8000
   ```

   Then visit `http://localhost:8000` if you chose the local server option.

---

## Customisation

To adapt this portfolio to your own profile, edit the following:

| What | Where |
| --- | --- |
| Name and introduction | Hero `<section id="hero">` in `index.html` |
| Biography | About `<section id="about">` in `index.html` |
| Skills | `.skill-card` elements in `index.html` |
| Projects | `.project-card` blocks in `index.html` |
| Contact details and social links | `<section id="contact">` in `index.html` |
| Profile image | Replace `profile.jpg` |
| Colours and typography | CSS custom values in `style.css` (accent: `#38bdf8`, dark: `#1e293b`) |
| Hero background | `background` property of `#hero` in `style.css` |

---

## Deployment

Publish the site with GitHub Pages:

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder.
4. Save — the site will be available at `https://<username>.github.io/portfolio/`.

Alternatively, drag and drop the project folder into [Netlify Drop](https://app.netlify.com/drop) for an instant deployment.

---

## Roadmap

- [ ] Add a dark/light theme toggle
- [ ] Implement a contact form with backend integration
- [ ] Animate section reveals on scroll with vanilla JavaScript
- [ ] Add project screenshots and detailed case-study pages
- [ ] Improve mobile navigation with a collapsible hamburger menu
- [ ] Add SEO meta tags, Open Graph images, and a favicon

---

## Contact

I'm open to internships, collaborations, and interesting conversations about software development.

- **Email:** [singhsukhmandeep788@gmail.com](mailto:singhsukhmandeep788@gmail.com)
- **LinkedIn:** [sukhmandeep-singh-2a57ba411](https://www.linkedin.com/in/sukhmandeep-singh-2a57ba411/)
- **GitHub:** [@techwithsukhman](https://github.com/techwithsukhman)
- **Location:** Ludhiana, Punjab, India

---

## License

This project is open source. Feel free to use it as inspiration for your own portfolio — attribution is appreciated but not required.
