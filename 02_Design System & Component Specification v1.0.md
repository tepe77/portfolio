# PRASASWO.TEPE
## Design System & Component Specification

**Version:** 1.0  
**Project Type:** Personal DevOps Portfolio  
**Architecture:** Static-first  
**Framework:** Astro  
**Language:** TypeScript  
**Styling:** Native CSS / CSS Modules  
**Graphics:** SVG  
**Animation:** CSS + Web Animations API / minimal TypeScript  
**Backend:** None  
**Rendering:** Static / prerendered  
**Deployment Target:** Cloudflare Pages / Cloudflare Workers Static Assets / equivalent static hosting

---

# 01. TECHNOLOGY DECISION

## 1.1 Recommended Stack

```text
┌────────────────────────────────────────────┐
│                 PRASASWO.TEPE             │
├────────────────────────────────────────────┤
│ Astro                                      │
│                                            │
│ TypeScript                                 │
│                                            │
│ Native CSS                                 │
│                                            │
│ SVG                                        │
│                                            │
│ Minimal Client-side TypeScript             │
│                                            │
│ Static Build                               │
└────────────────────────────────────────────┘
```

---

## 1.2 Why Astro

Astro dipilih karena portfolio ini mayoritas adalah:

- text
- SVG
- cards
- architecture diagrams
- static content
- resume
- project information

Tetapi beberapa bagian membutuhkan interactivity:

- infrastructure topology
- project modal
- terminal
- command palette
- animated metrics
- navigation
- mobile drawer

Astro memungkinkan mayoritas website tetap berupa static HTML, sementara bagian interaktif dibuat sebagai client islands. JavaScript tidak dikirim ke browser kecuali memang diperlukan.

Target arsitektur:

```text
STATIC HTML
    +
CSS
    +
SVG
    +
SMALL INTERACTIVE ISLANDS
```

Bukan:

```text
SPA
  ↓
Huge JavaScript Bundle
  ↓
Everything Hydrated
```

---

# 02. WHAT WE WILL NOT USE

Untuk versi pertama:

```text
Laravel             ❌
PHP Backend         ❌
MySQL/PostgreSQL    ❌
Redis               ❌
Docker runtime      ❌
React               ❌
Next.js             ❌
jQuery              ❌
Bootstrap           ❌
Heavy UI library    ❌
Animation library   ❌
External icon pack  ❌
External font CDN   ❌
Third-party analytics ❌
```

Bukan karena teknologi tersebut buruk.

Tetapi karena portfolio ini **tidak membutuhkan complexity tersebut**.

---

# 03. CORE ARCHITECTURE

```text
                    Git Repository
                          │
                          ▼
                   Astro Build
                          │
                          ▼
                       /dist
                          │
                          ▼
                Static Web Hosting
                          │
              ┌───────────┴───────────┐
              │                       │
           HTML/CSS                  Assets
              │                       │
              ├── SVG                │
              ├── JS islands         │
              └── Resume PDF         │
```

Tidak ada application server.

---

# 04. RENDERING STRATEGY

Default:

```text
Static / prerendered
```

Astro secara default cocok untuk menghasilkan static output, sehingga halaman portfolio tidak memerlukan SSR. Cloudflare juga mendokumentasikan deployment Astro sebagai static site dengan build output `dist`.

---

# 05. PROJECT STRUCTURE

Recommended:

```text
prasaswo-portfolio/
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── resume/
│   │   └── prasaswo-tepe-resume.pdf
│   │
│   ├── images/
│   │   ├── og-image.webp
│   │   └── projects/
│   │
│   └── icons/
│
├── src/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── navigation/
│   │   ├── hero/
│   │   ├── infrastructure/
│   │   ├── projects/
│   │   ├── stack/
│   │   ├── experience/
│   │   ├── terminal/
│   │   ├── status/
│   │   └── contact/
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   └── 404.astro
│   │
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── stack.ts
│   │   └── experience.ts
│   │
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── globals.css
│   │   ├── utilities.css
│   │   └── animations.css
│   │
│   └── scripts/
│       ├── navigation.ts
│       ├── terminal.ts
│       ├── topology.ts
│       ├── command-palette.ts
│       └── reduced-motion.ts
│
├── astro.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

# 06. DATA ARCHITECTURE

Content jangan ditulis hardcoded di setiap component.

Gunakan typed data.

Contoh conceptual structure:

```text
profile.ts

Profile
├── name
├── role
├── tagline
├── description
├── social
├── resume
└── availability
```

Project:

```text
Project
├── id
├── title
├── slug
├── category
├── description
├── technologies[]
├── architecture[]
├── challenge
├── solution
├── result
├── featured
└── status
```

Technology:

```text
Technology
├── id
├── name
├── category
├── description
├── usage
├── projects[]
└── icon
```

Dengan pendekatan ini, perubahan portfolio cukup dilakukan di:

```text
src/data/
```

bukan membongkar UI.

---

# 07. DESIGN TOKEN SYSTEM

Semua visual harus menggunakan CSS variables.

Tidak boleh:

```css
color: #19D3E6;
```

berulang di berbagai component.

Gunakan:

```css
color: var(--color-accent-primary);
```

---

# 08. COLOR TOKENS

```css
:root {
  --color-bg-0: #060B12;
  --color-bg-1: #0A111A;
  --color-bg-2: #0D1622;

  --color-surface-1: #101A26;
  --color-surface-2: #142130;

  --color-border: #1B3042;
  --color-border-hover: #126B83;

  --color-text-primary: #E6EDF3;
  --color-text-secondary: #9AA9B8;
  --color-text-muted: #647585;

  --color-accent-primary: #19D3E6;
  --color-accent-secondary: #5C8DFF;

  --color-success: #20D39B;
  --color-warning: #F5B942;
  --color-danger: #F05D6C;
}
```

---

# 09. COLOR USAGE RULE

### Primary Accent

Digunakan untuk:

- CTA
- links
- active states
- topology connections
- focus state

### Success

Hanya untuk:

- healthy
- operational
- online
- successful deployment

### Warning

Untuk:

- degraded
- warning
- attention

### Danger

Untuk:

- offline
- error
- failure

Jangan menggunakan warna status hanya untuk dekorasi.

---

# 10. TYPOGRAPHY TOKENS

Primary:

```text
Inter
```

Technical:

```text
JetBrains Mono
```

Tetapi font idealnya **self-hosted**.

Tidak menggunakan:

```text
fonts.googleapis.com
```

untuk mengurangi dependency external dan network request.

---

## Font Tokens

```css
:root {
  --font-sans:
    "Inter",
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  --font-mono:
    "JetBrains Mono",
    "SFMono-Regular",
    Consolas,
    monospace;
}
```

---

# 11. TYPE SCALE

```css
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-md: 1rem;
  --text-lg: 1.125rem;

  --text-xl: 1.375rem;
  --text-2xl: 2rem;
  --text-3xl: 3rem;
  --text-4xl: 4rem;
}
```

Desktop hero:

```text
64px
```

Mobile:

```text
40px
```

---

# 12. SPACING SCALE

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;
}
```

---

# 13. RADIUS TOKENS

```css
:root {
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 20px;
  --radius-pill: 999px;
}
```

Default card:

```text
10px
```

Button:

```text
8px
```

Badge:

```text
999px
```

---

# 14. SHADOW SYSTEM

Karena dark UI, shadow tidak boleh terlalu berat.

```css
:root {
  --shadow-sm:
    0 4px 16px rgba(0, 0, 0, 0.18);

  --shadow-md:
    0 12px 32px rgba(0, 0, 0, 0.28);

  --shadow-glow:
    0 0 24px rgba(25, 211, 230, 0.12);
}
```

---

# 15. Z-INDEX SYSTEM

```text
base             0
content          10
sticky-nav       100
dropdown         200
modal-backdrop   300
modal            400
command-palette  500
toast            600
```

Tidak boleh menggunakan:

```text
z-index: 999999
```

secara sembarangan.

---

# 16. CONTAINER SYSTEM

Desktop:

```css
.container {
  width: min(
    calc(100% - 48px),
    1280px
  );

  margin-inline: auto;
}
```

Large display:

```text
max-width: 1440px
```

Content:

```text
max-width: 1280px
```

Text:

```text
max-width: 720px
```

---

# 17. BREAKPOINTS

```text
320px   minimum
390px   mobile
640px   large mobile
768px   tablet
1024px  laptop
1280px  desktop
1440px  large desktop
```

CSS:

```css
@media (min-width: 768px) {}

@media (min-width: 1024px) {}

@media (min-width: 1280px) {}
```

---

# 18. SECTION COMPONENT

Every section menggunakan struktur:

```text
Section
├── Eyebrow
├── Heading
├── Description
└── Content
```

Visual:

```text
01 — FEATURED PROJECTS
Selected infrastructure and engineering work.
```

---

# 19. SECTION HEADER COMPONENT

Properties:

```text
eyebrow
title
description
alignment
```

Variants:

```text
left
center
```

Default:

```text
left
```

---

# 20. BUTTON SYSTEM

Variants:

```text
Primary
Secondary
Ghost
Icon
```

---

## Primary

```text
height: 44px
padding: 0 20px
radius: 8px
```

States:

```text
Default
Hover
Focus
Active
Disabled
```

Hover:

```text
translateY(-2px)
brightness(1.05)
```

---

## Secondary

Transparent.

Border:

```text
1px solid accent
```

---

## Ghost

No border.

Text accent.

---

# 21. STATUS BADGE

Example:

```text
● ALL SYSTEMS OPERATIONAL
```

Component:

```text
StatusBadge
```

Variants:

```text
success
warning
danger
info
```

Success:

```text
dot: green
background: rgba(success, 0.08)
border: rgba(success, 0.25)
```

---

# 22. METRIC CARD

Structure:

```text
MetricCard
├── icon
├── label
├── value
├── unit
└── sparkline
```

Example:

```text
CPU
23%
```

Rules:

- no fake live data
- no misleading metrics
- if static, explicitly classify as portfolio metric
- if dynamic, source must be documented

---

# 23. SPARKLINE

Use SVG.

Requirements:

```text
SVG
viewBox
preserveAspectRatio
```

Animation:

```text
stroke-dasharray
stroke-dashoffset
```

Do not use a charting library.

For this portfolio, a chart library would be unnecessary overhead.

---

# 24. TOPOLOGY SYSTEM

This is the signature component.

Component:

```text
InfrastructureTopology
```

Subcomponents:

```text
TopologyCanvas
TopologyNode
TopologyConnection
TopologyLabel
TopologyTooltip
TopologyDetails
```

---

# 25. TOPOLOGY NODE

Structure:

```text
┌───────────────────────┐
│ icon                  │
│ POSTGRESQL            │
│ Patroni Cluster       │
│ ● HEALTHY             │
└───────────────────────┘
```

Properties:

```text
id
label
type
status
description
position
connections[]
```

---

# 26. TOPOLOGY NODE STATES

### Default

```text
border: var(--color-border)
```

### Hover

```text
border: accent
box-shadow: glow
transform: scale(1.03)
```

### Selected

```text
border: accent
background: surface-2
```

### Disabled

```text
opacity: 0.4
```

---

# 27. TOPOLOGY CONNECTION

Default:

```text
opacity: 0.35
```

Selected path:

```text
opacity: 1
```

Animation:

Small moving SVG dot.

```text
Internet
   ·───────·───────·───────>
```

Animation must stop under:

```text
prefers-reduced-motion
```

---

# 28. TOPOLOGY MOBILE

Desktop:

```text
horizontal architecture
```

Mobile:

```text
vertical architecture
```

Do not simply scale the desktop SVG down.

The mobile topology receives its own layout.

---

# 29. PROJECT CARD

Component:

```text
ProjectCard
```

Props:

```text
title
description
category
technologies
status
featured
```

Structure:

```text
ProjectCard
├── ProjectIcon
├── StatusBadge
├── Title
├── Description
├── TechnologyTags
└── Action
```

---

# 30. PROJECT CARD INTERACTION

Desktop hover:

```text
translateY(-4px)
border → accent
```

Icon:

```text
opacity 0.7 → 1
```

Arrow:

```text
translateX(0 → 4px)
```

Mobile:

No hover dependency.

Tap:

```text
open ProjectModal
```

---

# 31. PROJECT MODAL

Component:

```text
ProjectModal
```

Desktop:

```text
width: min(920px, 90vw)
max-height: 90vh
```

Mobile:

```text
width: 100%
height: 100%
```

Sections:

```text
Overview
Architecture
Challenge
Solution
Technology
Result
```

Close:

- X
- Escape
- backdrop click

---

# 32. MODAL ACCESSIBILITY

When open:

```text
body scroll locked
```

Focus:

```text
first interactive element
```

On close:

Focus returned to:

```text
trigger button
```

ARIA:

```text
role="dialog"
aria-modal="true"
```

---

# 33. TECHNOLOGY CARD

Component:

```text
TechnologyCard
```

Properties:

```text
name
category
description
projects
icon
```

Example:

```text
Docker
Containerization
```

Hover:

```text
border accent
icon brighten
```

Click:

Open:

```text
TechnologyDrawer
```

---

# 34. TECHNOLOGY DRAWER

Desktop:

Right side drawer.

Mobile:

Bottom sheet.

Content:

```text
DOCKER

Category
Containerization

Used for

Application packaging
Deployment
Environment consistency

Projects

ION Core
CI/CD Platform
```

---

# 35. TERMINAL COMPONENT

Component:

```text
Terminal
```

Structure:

```text
Terminal
├── TerminalHeader
├── TerminalOutput
└── TerminalInput
```

Header:

```text
● ● ●
```

Terminal font:

```text
JetBrains Mono
```

---

# 36. TERMINAL COMMAND SYSTEM

Supported commands:

```text
help
about
projects
stack
experience
status
contact
clear
```

Unknown:

```text
command not found

Type "help" to see available commands.
```

Commands are whitelist-based.

Never execute actual shell commands.

Critical rule:

```text
Terminal UI ≠ real shell.
```

---

# 37. COMMAND PALETTE

Keyboard:

```text
Ctrl + K
```

Mac:

```text
Cmd + K
```

Component:

```text
CommandPalette
```

Search:

```text
projects
infrastructure
stack
experience
contact
resume
```

No fuzzy-search library required.

Simple normalized string matching is sufficient.

---

# 38. NAVIGATION SYSTEM

Desktop:

```text
sticky
top: 0
height: 64px
```

Scroll behavior:

At top:

```text
transparent
```

After scroll:

```text
background blur
border-bottom
```

---

# 39. MOBILE NAVIGATION

Component:

```text
MobileNavigation
```

Behavior:

```text
closed
    ↓
open
    ↓
body scroll lock
```

Close:

```text
X
ESC
navigation click
outside click
```

---

# 40. EXPERIENCE TIMELINE

Component:

```text
ExperienceTimeline
```

Desktop:

Horizontal.

Mobile:

Vertical.

Each node:

```text
TimelineNode
├── year
├── title
├── description
└── technologies
```

Animation triggered using:

```text
IntersectionObserver
```

Tidak menggunakan scroll event untuk animation.

---

# 41. SCROLL REVEAL

Class:

```text
[data-reveal]
```

Initial:

```text
opacity: 0;
transform: translateY(24px);
```

Visible:

```text
opacity: 1;
transform: translateY(0);
```

JavaScript hanya meng-observe element yang memiliki attribute tersebut.

---

# 42. REDUCED MOTION

Mandatory.

CSS:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

JS animation juga harus membaca:

```text
prefers-reduced-motion
```

---

# 43. ICON SYSTEM

Tidak menggunakan:

```text
Font Awesome
Lucide package
Huge icon library
```

Default:

```text
Inline SVG
```

Setiap icon harus:

```text
width
height
viewBox
stroke
aria-hidden
```

Icon decorative:

```text
aria-hidden="true"
```

Icon button:

```text
aria-label="Open menu"
```

---

# 44. SVG ARCHITECTURE

Infrastructure diagram menggunakan SVG.

Jangan menggunakan:

```text
Canvas
```

untuk topology utama.

Alasan:

SVG lebih mudah:

- accessible
- responsive
- inspectable
- styleable
- animatable
- scalable

---

# 45. BACKGROUND SYSTEM

Background:

```text
solid dark
+
subtle grid
+
very subtle radial glow
```

Grid opacity:

```text
3–6%
```

Tidak menggunakan:

- full-screen particles
- WebGL
- animated starfield
- Three.js

Untuk portfolio ini tidak diperlukan.

---

# 46. GLOW RULE

Glow hanya boleh muncul pada:

```text
CTA
active node
status
selected card
topology
```

Tidak boleh semua component memiliki glow.

---

# 47. MOTION TOKENS

```text
--duration-fast: 150ms
--duration-normal: 220ms
--duration-slow: 500ms
--duration-reveal: 650ms
```

Easing:

```text
--ease-standard:
cubic-bezier(0.22, 1, 0.36, 1)
```

---

# 48. PAGE LOAD ANIMATION

Urutan:

```text
0ms      background
100ms    navbar
250ms    hero eyebrow
400ms    headline
550ms    description
700ms    CTA
850ms    topology
1000ms   metrics
```

Maximum initial animation:

```text
~1.2 seconds
```

Jangan membuat visitor menunggu intro animation.

---

# 49. PERFORMANCE BUDGET

Target:

```text
Initial JS:
< 50 KB compressed

Critical CSS:
< 30 KB

Images:
optimized AVIF/WebP

Hero:
no large raster background

Fonts:
self-hosted + preload only critical font
```

Ideal:

```text
HTML-first
CSS-second
JS-last
```

---

# 50. JAVASCRIPT BUDGET

Target:

```text
Global JS
    ≈ 0 KB
```

Kemudian hanya load:

```text
Navigation island
Terminal island
Topology island
Project modal island
Command palette island
```

Astro memang dirancang agar JavaScript hanya dikirim untuk component yang memerlukannya.

---

# 51. CLIENT ISLAND STRATEGY

Priority:

### Immediate

Navigation.

```text
client:load
```

### When visible

Topology.

```text
client:visible
```

### When visible

Project interaction.

```text
client:visible
```

### Idle

Command palette.

```text
client:idle
```

### Static

Everything else.

No hydration.

---

# 52. SECURITY MODEL

Karena static site, attack surface jauh lebih kecil dibanding application server.

Tidak ada:

```text
database credentials
API secrets
server-side sessions
admin panel
authentication
database endpoint
```

di production website.

---

# 53. CONTENT SECURITY POLICY

Target CSP:

```text
default-src 'self';

script-src 'self';

style-src 'self';

img-src
  'self'
  data:
  https:;

font-src
  'self';

connect-src
  'self';

object-src
  'none';

base-uri
  'self';

form-action
  'self';

frame-ancestors
  'none';
```

CSP harus disesuaikan dengan deployment final.

Jika tidak menggunakan external resources sama sekali, policy bisa dibuat sangat ketat.

---

# 54. SECURITY HEADERS

Target:

```text
Content-Security-Policy
Referrer-Policy
X-Content-Type-Options
Permissions-Policy
Strict-Transport-Security
```

Jika deployment menggunakan Cloudflare, headers dapat dikelola di layer hosting/CDN.

---

# 55. NO SECRET POLICY

Repository boleh public.

Tidak boleh ada:

```text
.env
API keys
private keys
SSH keys
tokens
production IP
database password
Grafana credentials
GitLab tokens
Cloudflare API token
```

---

# 56. INFRASTRUCTURE INFORMATION POLICY

Website hanya boleh menampilkan:

```text
Technology
Architecture
Concept
Sanitized topology
Public project description
```

Tidak boleh menampilkan:

```text
Private IP
Internal hostname
VPN address
SSH port
Database port
Credentials
Internal domain
Production topology detail
```

---

# 57. LIVE STATUS POLICY

Versi pertama:

```text
STATIC STATUS
```

Contoh:

```text
● SYSTEM OPERATIONAL
```

Jangan pura-pura real-time.

Jika nanti ingin live:

```text
Public health endpoint
        ↓
Sanitized JSON
        ↓
Portfolio status island
```

Endpoint hanya boleh mengembalikan:

```json
{
  "status": "operational"
}
```

Bukan:

```json
{
  "postgres_host": "...",
  "private_ip": "...",
  "replica_ip": "..."
}
```

---

# 58. CONTACT STRATEGY

Untuk versi awal:

```text
Email
LinkedIn
GitHub
Resume
```

Tidak membuat custom contact form.

Alasan:

```text
No backend
No spam endpoint
No database
No email infrastructure
No form attack surface
```

Klik email:

```text
mailto:
```

---

# 59. RESUME

Resume:

```text
/public/resume/prasaswo-tepe-resume.pdf
```

Button:

```text
DOWNLOAD RESUME
```

Browser:

```text
download
```

atau:

```text
open PDF
```

depending on UX decision.

---

# 60. SEO COMPONENT

Component:

```text
SEOHead
```

Properties:

```text
title
description
canonical
ogImage
```

Default:

```text
Prasaswo Tepe —
DevOps Engineer & Infrastructure Engineer
```

---

# 61. ACCESSIBILITY

Minimum:

```text
WCAG 2.1 AA
```

Requirements:

- semantic HTML
- proper heading hierarchy
- keyboard navigation
- visible focus
- accessible modal
- accessible drawer
- accessible menu
- accessible buttons
- reduced motion
- sufficient contrast
- alt text
- no hover-only functionality

---

# 62. FOCUS SYSTEM

Focus:

```text
outline: 2px solid var(--color-accent-primary)
outline-offset: 3px
```

Never:

```css
outline: none;
```

without replacement.

---

# 63. IMAGE RULES

Every meaningful image:

```text
alt
```

Decorative:

```text
alt=""
```

Use:

```text
AVIF
WebP
```

where appropriate.

Do not load giant PNG screenshots unnecessarily.

---

# 64. ERROR HANDLING

404 page:

```text
404

Route not found.

The system could not locate
the requested resource.

[ RETURN TO SYSTEM ]
```

Visual:

Terminal-inspired.

---

# 65. OFFLINE / JS FAILURE

Critical content must still be visible when JavaScript fails.

Visitor should still see:

```text
Name
Role
About
Projects
Stack
Experience
Contact
```

Only enhancement features disappear:

```text
Topology interaction
Terminal
Modal animation
Command palette
```

This is a key architectural requirement.

---

# 66. COMPONENT CONTRACT

Every component must answer:

```text
What does it render?
What data does it receive?
Is it interactive?
Does it require JavaScript?
Is it accessible?
What happens when JS fails?
```

Example:

```text
ProjectCard

Render:
Static HTML

Interactive:
Click

JS:
Only required for modal

Fallback:
Project link still accessible
```

---

# 67. COMPONENT NAMING

Use PascalCase:

```text
Navbar
Hero
SectionHeader
MetricCard
ProjectCard
ProjectModal
TechnologyCard
TechnologyDrawer
Terminal
TopologyNode
TopologyConnection
StatusBadge
CommandPalette
```

Do not use:

```text
box1
cardThing
awesomeComponent
```

---

# 68. CSS ARCHITECTURE

Global:

```text
tokens.css
globals.css
utilities.css
animations.css
```

Component-specific:

```text
Component.astro
Component.module.css
```

No giant:

```text
styles.css
```

containing everything.

---

# 69. CSS LAYERS

Recommended:

```css
@layer reset;
@layer tokens;
@layer base;
@layer components;
@layer utilities;
```

Priority remains predictable.

---

# 70. NO INLINE STYLE

Avoid:

```html
style="color:red"
```

Use:

```text
CSS class
```

or CSS variable.

Exception:

Dynamic SVG positioning may use CSS variables.

---

# 71. DATA ATTRIBUTES

For interactive states:

```html
data-state="open"
data-status="healthy"
data-selected="true"
```

Example:

```text
[data-state="open"]
```

lebih baik daripada menambah banyak class state.

---

# 72. TOPOLOGY DATA

Topology sebaiknya didefinisikan sebagai data.

Concept:

```text
nodes:
  internet
  nginx
  app-01
  app-02
  postgres
  redis

connections:
  internet → nginx
  nginx → app-01
  nginx → app-02
  app-01 → postgres
  app-02 → postgres
  app-01 → redis
  app-02 → redis
```

Rendering SVG membaca data tersebut.

Dengan begitu topology mudah diubah.

---

# 73. PROJECT DATA

Semua project disimpan dalam:

```text
src/data/projects.ts
```

Project baru:

```text
add object
```

Tidak perlu membuat ulang layout.

---

# 74. STACK DATA

```text
src/data/stack.ts
```

Categories:

```text
Containerization
CI/CD
Database
Monitoring
Infrastructure
Storage
Security
```

---

# 75. TERMINAL SECURITY

Terminal command parser:

```text
input
 ↓
trim
 ↓
lowercase
 ↓
whitelist lookup
 ↓
render predefined response
```

Tidak pernah:

```text
eval()
exec()
Function()
shell command
```

Ini mandatory.

---

# 76. COMMAND PALETTE SECURITY

Command palette juga whitelist.

User input hanya digunakan untuk:

```text
filter commands
```

Tidak digunakan untuk:

```text
HTML injection
```

Render menggunakan DOM text APIs atau Astro escaped output.

---

# 77. XSS POLICY

Semua dynamic text:

```text
escaped
```

Jangan menggunakan:

```text
innerHTML
```

kecuali benar-benar diperlukan dan input sudah trusted.

Untuk terminal:

```text
textContent
```

lebih disukai.

---

# 78. EXTERNAL LINKS

External link:

```text
target="_blank"
rel="noopener noreferrer"
```

Untuk:

- GitHub
- LinkedIn
- external documentation

---

# 79. ANALYTICS

Versi pertama:

```text
NO ANALYTICS
```

Setelah website stabil, jika dibutuhkan:

gunakan privacy-friendly analytics.

Analytics script tidak boleh mengganggu performance atau menjadi dependency utama website.

---

# 80. DEPLOYMENT

Recommended:

```text
GitLab/GitHub
      ↓
CI
      ↓
npm ci
      ↓
npm run check
      ↓
npm run build
      ↓
security checks
      ↓
deploy
```

Static output:

```text
dist/
```

Cloudflare Pages mendukung Astro dengan build command `npm run build` dan output `dist`, serta menyediakan preview deployments dari repository.

---

# 81. CI PIPELINE

Minimal:

```text
validate
   ↓
build
   ↓
security
   ↓
deploy
```

Validation:

```text
TypeScript
Astro check
HTML
```

Security:

```text
dependency audit
secret detection
```

Build:

```text
npm run build
```

Deploy:

```text
static dist/
```

---

# 82. DEPENDENCY POLICY

Rule:

> Every dependency must justify its existence.

Before adding package:

```text
Can native browser API solve it?
```

Jika:

```text
YES
```

jangan install package.

Contoh:

IntersectionObserver:

```text
Native API
```

Tidak perlu library.

Modal:

```text
Native DOM
```

Tidak perlu UI library.

SVG:

```text
Native
```

Tidak perlu chart library.

---

# 83. INITIAL DEPENDENCY TARGET

Ideal:

```text
astro
typescript
```

plus development tooling dari Astro.

Optional:

```text
eslint
prettier
```

Tidak ada requirement untuk:

```text
React
Vue
Svelte
Tailwind
Chart.js
Framer Motion
GSAP
Three.js
```

---

# 84. WHY NOT TAILWIND?

Tailwind sebenarnya bagus.

Namun untuk portfolio satu halaman ini:

```text
Native CSS
```

lebih sesuai karena kita memiliki design system yang sangat custom.

Keuntungannya:

- lebih sedikit abstraction
- token lebih eksplisit
- tidak perlu utility class panjang
- komponen lebih mudah dibaca
- CSS architecture lebih terkontrol

Jika nantinya component complexity meningkat drastis, Tailwind dapat dipertimbangkan.

Untuk V1:

> **Native CSS wins.**

---

# 85. WHY NOT NEXT.JS?

Next.js sangat capable.

Namun portfolio ini tidak membutuhkan:

```text
SSR
database
server actions
API routes
authentication
```

Astro lebih sesuai untuk content-focused static website dan secara default meminimalkan client-side JavaScript.

---

# 86. WHY NOT LARAVEL?

Laravel akan memberikan:

```text
PHP runtime
web server
application process
backend dependencies
security patching
server configuration
```

yang tidak dibutuhkan.

Portfolio ini cukup:

```text
Static HTML
CSS
JS
SVG
PDF
```

Jadi:

> Jangan membangun tank untuk mengantar satu orang ke minimarket.

---

# 87. PERFORMANCE TARGET

Target production:

```text
Lighthouse Performance    ≥ 95
Accessibility             ≥ 95
Best Practices            ≥ 95
SEO                       ≥ 95
```

Core Web Vitals:

```text
LCP < 2.5s
INP < 200ms
CLS < 0.1
```

---

# 88. QUALITY GATE

Sebelum production:

```text
[ ] npm ci
[ ] typecheck
[ ] build
[ ] Lighthouse
[ ] keyboard navigation
[ ] mobile 320px
[ ] mobile 390px
[ ] tablet
[ ] desktop
[ ] reduced motion
[ ] JS disabled
[ ] 404
[ ] HTTPS
[ ] security headers
[ ] CSP
[ ] no secrets
[ ] no console errors
[ ] no broken links
```

---

# 89. BROWSER TARGET

Support:

```text
Chrome
Edge
Safari
Firefox
```

Desktop + mobile.

Do not optimize exclusively for Chromium.

---

# 90. MOBILE QA

Minimum:

```text
320 × 568
375 × 667
390 × 844
430 × 932
```

Check:

```text
No horizontal overflow
No clipped text
No inaccessible modal
No tiny buttons
No hover dependency
No excessive animation
```

---

# 91. INTERACTION PRIORITY

Not every element needs interaction.

### High priority

```text
Topology
Project cards
Terminal
Navigation
Command palette
```

### Medium

```text
Technology cards
Timeline
Metrics
```

### Low

```text
Decorative background
Glow
Micro animations
```

---

# 92. MOBILE INTERACTION RULE

Desktop:

```text
hover → preview
click → detail
```

Mobile:

```text
tap → detail
```

Never make critical information dependent on hover.

---

# 93. ACCESSIBILITY INTERACTION RULE

Every interaction must have:

```text
Mouse
Keyboard
Touch
```

equivalent behavior where applicable.

Example:

```text
Topology node

Mouse:
hover

Keyboard:
focus

Touch:
tap
```

---

# 94. DESIGN SYSTEM FILE

Create:

```text
DESIGN_SYSTEM.md
```

Containing:

```text
Colors
Typography
Spacing
Components
States
Breakpoints
Motion
Accessibility
Security
```

This becomes the source of truth.

---

# 95. COMPONENT SPEC FILE

Create:

```text
COMPONENT_SPEC.md
```

Each component:

```text
Component
Purpose
Props
Structure
States
Interaction
Responsive behavior
Accessibility
Dependencies
```

---

# 96. AGENT IMPLEMENTATION RULES

AI coding agent harus mengikuti:

```text
RULE 01
Do not introduce Laravel.

RULE 02
Do not introduce React unless explicitly requested.

RULE 03
Prefer Astro components.

RULE 04
Prefer native browser APIs.

RULE 05
Prefer SVG over image-based diagrams.

RULE 06
Do not add dependency without justification.

RULE 07
No secrets in repository.

RULE 08
No fake production metrics.

RULE 09
No sensitive infrastructure information.

RULE 10
All interactive UI must be keyboard accessible.

RULE 11
Respect prefers-reduced-motion.

RULE 12
Do not sacrifice readability for animation.

RULE 13
Mobile is first-class.

RULE 14
Static content must work without JavaScript.

RULE 15
Every visual effect must have a performance reason.
```

---

# 97. FINAL COMPONENT TREE

```text
BaseLayout
│
├── SEOHead
├── Navbar
│   ├── Logo
│   ├── DesktopNavigation
│   ├── StatusBadge
│   └── MobileNavigation
│
├── Main
│
│   ├── Hero
│   │   ├── SectionEyebrow
│   │   ├── HeroTitle
│   │   ├── HeroDescription
│   │   ├── CTAGroup
│   │   ├── InfrastructureTopology
│   │   └── MetricGrid
│   │
│   ├── About
│   │   ├── SectionHeader
│   │   ├── Terminal
│   │   └── ProfileSummary
│   │
│   ├── Infrastructure
│   │   ├── SectionHeader
│   │   └── InfrastructureTopology
│   │
│   ├── Projects
│   │   ├── SectionHeader
│   │   ├── ProjectGrid
│   │   │   └── ProjectCard
│   │   └── ProjectModal
│   │
│   ├── TechStack
│   │   ├── SectionHeader
│   │   ├── TechnologyGrid
│   │   │   └── TechnologyCard
│   │   └── TechnologyDrawer
│   │
│   ├── Experience
│   │   ├── SectionHeader
│   │   └── ExperienceTimeline
│   │
│   ├── Mindset
│   │   └── PrincipleGrid
│   │
│   ├── SystemStatus
│   │   └── StatusDashboard
│   │
│   └── Contact
│       ├── ContactCTA
│       └── SocialLinks
│
├── CommandPalette
│
└── Footer
```

---

# 98. FINAL ARCHITECTURE

```text
                    PRASASWO.TEPE
                          │
                   ┌──────▼──────┐
                   │    ASTRO    │
                   └──────┬──────┘
                          │
              ┌───────────┼───────────┐
              │           │           │
             HTML         CSS        SVG
              │           │           │
              └───────────┼───────────┘
                          │
                  Static Website
                          │
              ┌───────────▼───────────┐
              │   Interactive Islands │
              ├───────────────────────┤
              │ Navigation            │
              │ Topology              │
              │ Terminal              │
              │ Project Modal         │
              │ Command Palette       │
              └───────────────────────┘
                          │
                          ▼
                    Static Hosting
                          │
                   Cloudflare Edge
```

---

# 99. THE CORE PHILOSOPHY

Website ini harus membuktikan kemampuan DevOps melalui cara website tersebut dibangun.

```text
FAST
│
├── Static-first
├── Minimal JavaScript
└── Optimized assets

SECURE
│
├── No backend
├── No secrets
├── CSP
└── Security headers

RELIABLE
│
├── Static deployment
├── No database dependency
└── No runtime dependency

OBSERVABLE
│
└── Sanitized system status

AUTOMATED
│
└── Git → CI → Build → Deploy

INTERACTIVE
│
├── Infrastructure topology
├── Terminal
├── Projects
└── Command palette
```

---

# 100. FINAL TECHNOLOGY STACK

## Core

```text
Astro
TypeScript
Native CSS
SVG
Web APIs
```

## Development

```text
Git
GitLab/GitHub
npm
Node.js LTS
```

## CI/CD

```text
GitLab CI/CD
```

## Hosting

Recommended:

```text
Cloudflare Pages
```

or static deployment melalui Cloudflare Workers/Static Assets.

Cloudflare menyediakan deployment Astro dan preview deployment yang terhubung dengan repository; static Astro dapat langsung dibangun menjadi `dist`.

## Security

```text
CSP
HSTS
Referrer-Policy
Permissions-Policy
X-Content-Type-Options
Secret scanning
Dependency audit
```

## No Application Backend

```text
NONE
```

---

# 101. DEFINITION OF DONE

Portfolio V1 baru dianggap selesai apabila:

```text
✓ Design sesuai UI/UX specification
✓ Desktop responsive
✓ Mobile responsive
✓ Static-first
✓ No Laravel
✓ No React
✓ Minimal JavaScript
✓ Interactive topology
✓ Interactive projects
✓ Terminal
✓ Command palette
✓ Resume download
✓ SEO
✓ Accessibility
✓ Reduced motion
✓ CSP
✓ Security headers
✓ No secrets
✓ No fake production claims
✓ Lighthouse ≥ 95 target
✓ No console errors
✓ CI/CD automated
✓ Production deployment automated
```

---

# 102. FINAL PRODUCT POSITIONING

Website bukan sekadar:

```text
"My Resume"
```

Tetapi:

```text
┌─────────────────────────────────────────┐
│                                         │
│       PRASASWO.TEPE                     │
│                                         │
│       DEVOPS ENGINEER                   │
│       INFRASTRUCTURE ENGINEER           │
│                                         │
│       BUILD                             │
│       AUTOMATE                          │
│       OBSERVE                           │
│       SCALE                             │
│                                         │
│       ───────────────────────────        │
│                                         │
│       A living demonstration             │
│       of engineering mindset.            │
│                                         │
└─────────────────────────────────────────┘
```

**North Star:**

> **The portfolio itself should be the first proof of engineering quality.**