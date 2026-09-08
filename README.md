# PRASASWO.TEPE — Interactive DevOps Portfolio

> **Production-grade personal infrastructure console and DevOps engineer portfolio.**  
> Built with **Astro • TypeScript • Native CSS • SVG • Web APIs**. Static-first with zero heavy runtime dependencies.

---

## 1. Overview

This website is engineered to communicate the DevOps / DevSecOps mindset and infrastructure capabilities of **Prasaswo Tepe**:
- **Infrastructure Architecture:** Containerized microservices, high-availability database clusters, reverse proxies, and disaster recovery.
- **CI/CD & Delivery:** Automated multi-stage pipelines with dependency scanning and rollback safety.
- **Observability:** Metric scraping, Prometheus TSDB, Grafana operational dashboards, and synthetic blackbox probes.
- **Security Engineering:** Static attack surface, Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), and dependency auditing.

---

## 2. Core Technology Stack

| Layer | Technology |
|---|---|
| **Core Framework** | [Astro v5](https://astro.build) (Static output) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled) |
| **Styling** | Native CSS (Design tokens, CSS layers, no CSS frameworks) |
| **Graphics** | Native SVG (Custom architecture topologies & icons) |
| **Interactivity** | Vanilla TypeScript Client Islands (`IntersectionObserver`, DOM APIs) |
| **Deployment Target** | Cloudflare Pages / Cloudflare Workers Static Assets |
| **CI/CD** | GitLab CI/CD Pipeline |

---

## 3. Project Structure

```text
prasaswo-portfolio/
├── public/
│   ├── favicon.svg                  # Vector technical mark
│   ├── robots.txt                   # Search crawler directives
│   ├── sitemap.xml                  # XML search sitemap
│   ├── manifest.webmanifest         # PWA metadata
│   ├── _headers                     # Cloudflare security headers (CSP, HSTS)
│   ├── resume/
│   │   └── prasaswo-tepe-resume.pdf # Verified resume download
│   └── images/
│       └── og-image.svg             # 1200x630 OpenGraph preview banner
│
├── src/
│   ├── components/
│   │   ├── common/                  # Button, Icon, StatusBadge, MetricCard, SectionHeader
│   │   ├── navigation/              # Navbar, MobileNavigation drawer
│   │   ├── hero/                    # Hero headline, HeroMetrics, HeroTopology
│   │   ├── about/                   # About layout, Terminal simulation, ProfileSummary
│   │   ├── infrastructure/          # Interactive SVG Topology & Node Details panel
│   │   ├── projects/                # Case study grid, ProjectCard, ProjectModal (<dialog>)
│   │   ├── stack/                   # Categorized Technology cards & TechnologyDrawer
│   │   ├── experience/              # Timeline & career progression milestones
│   │   ├── mindset/                 # Core engineering axioms (Automate, Observe, etc.)
│   │   ├── status/                  # Simulated live health telemetry dashboard
│   │   └── contact/                 # Contact transmission CTAs & social links
│   │
│   ├── data/
│   │   ├── profile.ts               # Personal information & telemetry metrics
│   │   ├── projects.ts              # 5 comprehensive engineering case studies
│   │   ├── stack.ts                 # Categorized technology stack
│   │   └── experience.ts            # Career timeline milestones
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro         # HTML5 shell, SEO tags, JSON-LD, Skip link
│   │
│   ├── pages/
│   │   ├── index.astro              # Single-page portfolio console
│   │   └── 404.astro                # Tech-themed routing error page
│   │
│   ├── scripts/
│   │   ├── navigation.ts            # Sticky scroll, mobile drawer, scroll spy
│   │   ├── terminal.ts              # Whitelisted command simulation
│   │   ├── topology.ts              # Node hover, connection trace, details panel
│   │   ├── command-palette.ts       # Cmd+K / Ctrl+K keyboard palette
│   │   ├── scroll-reveal.ts         # IntersectionObserver & metric counters
│   │   └── modal.ts                 # Accessible <dialog> focus trap & drawer
│   │
│   └── styles/
│       ├── tokens.css               # Design system CSS custom properties
│       ├── globals.css              # Reset, typography, technical grid background
│       ├── utilities.css            # Flex, grid, and typography helpers
│       └── animations.css           # Keyframes, pulse dots, prefers-reduced-motion
│
├── astro.config.mjs                 # Static Astro configuration
├── tsconfig.json                    # Strict TypeScript rules
├── package.json                     # Project manifest & scripts
├── .gitlab-ci.yml                   # Validation, build, and deploy pipeline
└── README.md
```

---

## 4. Development & Build

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### Type Check
```bash
npm run check
```

### Production Build
```bash
npm run build
```
Build output is generated cleanly into the `/dist` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 5. Key Interactive Features

- **Interactive Topology Map:** Vector network topology featuring active hover highlight, connection path tracing, and node detail inspection.
- **Terminal Simulation:** UI command simulation (`help`, `about`, `projects`, `stack`, `experience`, `status`, `contact`, `clear`) using a safe, whitelist-only parser. Zero `eval()`.
- **Command Palette (`Cmd+K` / `Ctrl+K`):** Fast keyboard-driven navigation across sections, external links, and resume download.
- **Accessible Case Study Modals:** Built using HTML `<dialog>` with focus trapping, `Escape` key support, and focus restoration to trigger elements.
- **Reduced Motion Support:** Complies with `prefers-reduced-motion: reduce`, disabling decorative animations and counters for accessibility.

---

## 6. Security Architecture

- **Static-First:** No application runtime, database, or server sessions are exposed in production.
- **Strict Headers:** Production CSP, HSTS, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, and `Referrer-Policy: strict-origin-when-cross-origin` configured in `public/_headers`.
- **Sanitized Information:** All topology representations and case studies utilize sanitized, architectural abstractions with zero real IPs, internal domains, or private credentials.

---

## 7. License

MIT &copy; 2026 Prasaswo Tepe
