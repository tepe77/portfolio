# PRASASWO.TEPE
## Interactive DevOps Portfolio — UI/UX Design Specification

**Document Version:** 1.0  
**Design Direction:** Interactive Infrastructure / DevOps Console  
**Platform:** Responsive Web  
**Primary Target:** Desktop + Mobile  
**Design Character:** Professional · Technical · Minimal · Futuristic · Interactive

---

# 01. DESIGN VISION

Website bukan diposisikan sebagai CV online biasa.

Website harus terasa seperti:

> **A personal infrastructure control center that happens to be a portfolio.**

Pengunjung harus mendapatkan tiga kesan:

### Dalam 5 detik

> “Ini portfolio seorang DevOps Engineer.”

### Dalam 30 detik

> “Orang ini benar-benar mengerjakan infrastructure, CI/CD, monitoring, database HA, dan production systems.”

### Setelah eksplorasi

> “Wah, portfolio-nya sendiri dibuat seperti production system.”

---

# 02. DESIGN PRINCIPLES

## 2.1 Professional First

Interface harus tetap mudah dibaca oleh:

- recruiter
- HR
- engineering manager
- senior engineer
- technical interviewer

Jangan mengorbankan readability demi efek visual.

---

## 2.2 Technical Personality

Elemen visual harus mencerminkan dunia:

- Linux
- Docker
- CI/CD
- PostgreSQL
- Infrastructure
- Monitoring
- Networking
- Automation

Terminal, topology, status indicator, metrics, dan system dashboard digunakan sebagai visual language.

---

## 2.3 Subtle Futuristic

Hindari:

- cyberpunk berlebihan
- terlalu banyak neon
- excessive glow
- background bergerak terlalu cepat
- particle effect berlebihan

Target visual:

> Premium SaaS + Infrastructure Dashboard + Developer Portfolio.

---

# 03. COLOR SYSTEM

## 3.1 Base Colors

| Token | Value | Usage |
|---|---|---|
| Background | `#060B12` | Main background |
| Background Secondary | `#0A111A` | Section background |
| Surface | `#0D1622` | Cards |
| Surface Elevated | `#111D2A` | Modal / elevated cards |
| Border | `#1B3042` | Borders |
| Border Active | `#126B83` | Hover borders |
| Text Primary | `#E6EDF3` | Main text |
| Text Secondary | `#9AA9B8` | Supporting text |
| Text Muted | `#647585` | Metadata |

---

## 3.2 Accent Colors

### Primary Cyan

`#19D3E6`

Digunakan untuk:

- CTA
- active navigation
- infrastructure connection
- highlighted text
- interactive elements

### Success Green

`#20D39B`

Digunakan untuk:

- system healthy
- online
- operational
- deployment success

### Warning

`#F5B942`

Digunakan untuk:

- warning state
- degraded system
- attention

### Error

`#F05D6C`

Digunakan untuk:

- offline
- failure
- error state

### Secondary Blue

`#5C8DFF`

Digunakan untuk:

- metrics
- database
- informational states

---

# 04. TYPOGRAPHY

## Primary Font

**Inter**

Digunakan untuk:

- heading
- paragraph
- navigation
- cards
- metadata

---

## Technical Font

**JetBrains Mono**

Digunakan untuk:

- terminal
- command
- metrics
- infrastructure labels
- code
- system status

---

## Typography Scale

### Desktop

```text
Display      64px / 72px
H1           48px / 56px
H2           32px / 40px
H3           22px / 30px
Body         16px / 26px
Small        14px / 20px
Caption      12px / 18px
Mono         13–14px
```

### Mobile

```text
Display      40px / 46px
H1           34px / 40px
H2           26px / 34px
H3           19px / 26px
Body         15px / 24px
Small        13px / 18px
```

---

# 05. SPACING SYSTEM

Menggunakan basis 4px.

```text
4px
8px
12px
16px
24px
32px
48px
64px
80px
96px
120px
```

Desktop section spacing:

```text
Section top/bottom: 96–120px
Container max-width: 1440px
Content max-width: 1280px
```

Mobile:

```text
Section top/bottom: 64px
Horizontal padding: 20px
```

---

# 06. GLOBAL LAYOUT

Desktop:

```text
┌────────────────────────────────────────────────────┐
│ NAVBAR                                             │
├────────────────────────────────────────────────────┤
│                                                    │
│ HERO                                               │
│                                                    │
├────────────────────────────────────────────────────┤
│ ABOUT                                              │
├────────────────────────────────────────────────────┤
│ INFRASTRUCTURE                                    │
├────────────────────────────────────────────────────┤
│ PROJECTS                                           │
├────────────────────────────────────────────────────┤
│ TECH STACK                                         │
├────────────────────────────────────────────────────┤
│ EXPERIENCE                                         │
├────────────────────────────────────────────────────┤
│ PRODUCTION MINDSET                                 │
├────────────────────────────────────────────────────┤
│ LIVE STATUS                                        │
├────────────────────────────────────────────────────┤
│ CONTACT                                            │
├────────────────────────────────────────────────────┤
│ FOOTER                                             │
└────────────────────────────────────────────────────┘
```

---

# 07. GLOBAL NAVIGATION

## Desktop

Navbar fixed/sticky.

```text
┌───────────────────────────────────────────────────────┐
│ <> PRASASWO.TEPE     WORK ABOUT STACK CONTACT    ● OK │
└───────────────────────────────────────────────────────┘
```

Height:

`64px`

Background:

`rgba(6,11,18,0.82)`

Backdrop blur:

`12px`

Border bottom:

`1px solid #1B3042`

---

## Navigation

Items:

```text
WORK
ABOUT
STACK
CONTACT
```

Right side:

```text
● ALL SYSTEMS OPERATIONAL
```

---

## Hover

Navigation text:

- text → primary
- small cyan underline
- transition 200ms

---

## Mobile

Navbar:

```text
<> PRASASWO.TEPE                         ☰
```

Menu opens fullscreen or right-side drawer.

Menu:

```text
WORK
ABOUT
STACK
EXPERIENCE
CONTACT

────────────────

● ALL SYSTEMS OPERATIONAL
```

---

# 08. HERO SECTION

## Objective

Dalam 5 detik menjelaskan:

- siapa
- profesi
- fokus
- value
- technical personality

---

## Desktop Layout

50/50 split.

```text
┌──────────────────────┬──────────────────────────────┐
│                      │                              │
│ HELLO, I'M           │       INFRASTRUCTURE         │
│                      │          TOPOLOGY             │
│ DEVOPS ENGINEER      │                              │
│ &                    │        INTERNET              │
│ INFRASTRUCTURE       │           │                  │
│ ENGINEER             │          NGINX                │
│                      │        /       \              │
│ Description          │      APP      APP             │
│                      │       \       /               │
│ [Explore] [Resume]   │       PostgreSQL              │
│                      │          Redis                │
│ Metrics              │                              │
└──────────────────────┴──────────────────────────────┘
```

---

# 09. HERO CONTENT

Eyebrow:

```text
HELLO, I'M
```

Headline:

```text
DEVOPS ENGINEER
&
INFRASTRUCTURE ENGINEER
```

Highlighted words:

`DEVOPS ENGINEER`

`INFRASTRUCTURE ENGINEER`

Primary accent menggunakan cyan gradient sangat subtle.

---

## Description

```text
I build reliable infrastructure,
automate deployments,
and keep systems running.
```

---

## CTA

Primary:

```text
EXPLORE MY WORK →
```

Secondary:

```text
↓ DOWNLOAD RESUME
```

Primary button:

- filled cyan
- dark text
- 8px radius

Hover:

- brightness increase
- translateY(-2px)
- subtle glow

---

# 10. HERO INFRASTRUCTURE TOPOLOGY

Visual:

```text
                  INTERNET
                     │
                     ▼
                   NGINX
                  /     \
                 /       \
             APP 01     APP 02
                 \       /
                  \     /
                 DATABASE
                     │
                   REDIS
```

Node memiliki:

- icon
- service name
- technology
- status

Example:

```text
POSTGRESQL
Patroni Cluster

● Healthy
```

---

## Interaction

### Hover Node

Node:

- border berubah cyan
- glow meningkat
- connection menjadi lebih terang

Tooltip/panel:

```text
POSTGRESQL CLUSTER

Nodes
03

Architecture
Patroni + etcd

Connection
PgBouncer

Status
● HEALTHY
```

---

## Click Node

Desktop:

Open detail side panel.

Mobile:

Open bottom sheet.

Panel harus menjelaskan teknologi tanpa meninggalkan halaman.

---

# 11. HERO LIVE METRICS

Empat cards:

```text
CPU
23%

MEMORY
41%

UPTIME
99.98%

DEPLOYMENTS
1,284
```

Setiap card:

- icon
- label
- value
- tiny chart

---

## Animation

Saat page load:

Value counter:

```text
0 → 23
0 → 41
0 → 99.98
0 → 1284
```

Duration:

`800–1200ms`

Chart line muncul menggunakan draw animation.

---

## Important

Metric pada portfolio **tidak boleh mengklaim data production real-time jika sebenarnya statis**.

Jika data live belum tersedia, label:

```text
DEMO METRIC
```

atau gunakan metric portfolio yang memang valid.

---

# 12. ABOUT SECTION

Heading:

```text
ABOUT ME
```

Subtitle:

```text
A little context behind the systems.
```

Layout desktop:

```text
┌──────────────────────────┬─────────────────────────┐
│ TERMINAL                 │ WHOAMI                  │
│                          │                         │
│ $ cat profile.yaml       │ Name                    │
│                          │ Prasaswo Tepe            │
│ name: Prasaswo Tepe      │                         │
│ role: DevOps Engineer    │ Role                    │
│ focus:                   │ DevOps Engineer          │
│  - Infrastructure        │                         │
│  - CI/CD                 │ Focus                   │
│  - Monitoring            │ Infrastructure           │
│                          │ CI/CD                    │
└──────────────────────────┴─────────────────────────┘
```

---

# 13. TERMINAL INTERACTION

Saat section terlihat:

Typing animation.

```text
prasaswo@devops:~$ cat profile.yaml
```

Kemudian content muncul.

Cursor berkedip.

---

## Easter Egg

Terminal memiliki command input.

Command:

```text
help
```

Output:

```text
Available commands:

about
projects
stack
experience
status
contact
clear
```

Command:

```text
status
```

Output:

```text
API          ● ONLINE
DATABASE     ● HEALTHY
CI/CD        ● ACTIVE
MONITORING   ● ACTIVE
```

---

# 14. INFRASTRUCTURE SECTION

Heading:

```text
INFRASTRUCTURE
```

Subtitle:

```text
Systems I've designed, deployed, automated and maintained.
```

Section ini menjadi salah satu focal point website.

---

## Architecture Canvas

Desktop:

Interactive topology full width.

Contoh:

```text
                   INTERNET
                       │
                 ┌─────▼─────┐
                 │   NGINX   │
                 └─────┬─────┘
                       │
              ┌────────┴────────┐
              │                 │
          APP SERVER        APP SERVER
              │                 │
              └────────┬────────┘
                       │
                ┌──────▼──────┐
                │  PGBOUNCER  │
                └──────┬──────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
     PATRONI-01    PATRONI-02    PATRONI-03
       LEADER        REPLICA        REPLICA
```

---

# 15. INFRASTRUCTURE INTERACTION

## Hover

Node scale:

`1 → 1.04`

Border:

`default → accent`

Connection:

`dim → bright`

---

## Click

Open:

```text
SERVICE DETAILS
```

Content:

```text
PostgreSQL HA

Architecture
Patroni

Consensus
etcd

Connection Pool
PgBouncer

Replication
Streaming Replication

Role
High Availability Database
```

CTA:

```text
VIEW PROJECT →
```

---

# 16. PROJECT SECTION

Heading:

```text
FEATURED PROJECTS
```

Subtitle:

```text
Selected infrastructure and engineering work.
```

---

## Project Card

Desktop 3-column grid.

Card:

```text
┌────────────────────────────────────┐
│ ICON                         ● LIVE │
│                                    │
│ ION Core Infrastructure             │
│                                    │
│ Production infrastructure with     │
│ high availability and monitoring.  │
│                                    │
│ Docker  Nginx  PostgreSQL          │
│                                    │
│ VIEW DETAILS →                     │
└────────────────────────────────────┘
```

---

# 17. PROJECTS

Initial projects:

### 01 — ION Core Infrastructure

Focus:

- Production infrastructure
- Docker
- Nginx
- Monitoring
- Deployment

---

### 02 — PostgreSQL HA Cluster

Focus:

- PostgreSQL
- Patroni
- etcd
- PgBouncer
- replication
- failover

---

### 03 — CI/CD Platform

Focus:

- GitLab
- GitLab Runner
- Docker
- Registry
- Security scanning
- Automated deployment

---

### 04 — Monitoring & Observability

Focus:

- Prometheus
- Grafana
- Uptime Kuma
- Alerting

---

### 05 — Object Storage

Focus:

- RustFS
- S3
- backup
- lifecycle

---

# 18. PROJECT CARD HOVER

Default:

Subtle border.

Hover:

```text
translateY(-6px)
```

Border becomes accent.

Background becomes slightly brighter.

Decorative infrastructure icon becomes visible.

Arrow rotates:

```text
→
↗
```

---

# 19. PROJECT DETAIL MODAL

When clicked:

Desktop:

Large centered modal.

Mobile:

Fullscreen sheet.

Structure:

```text
PROJECT
ION CORE INFRASTRUCTURE

Overview

Architecture

Technologies

Challenges

Implementation

Monitoring

Result
```

---

## Architecture

Visual diagram.

---

## Challenge

Example:

```text
Challenge

Maintain reliable application
deployment while minimizing
manual intervention.
```

---

## Solution

```text
Solution

Containerized services combined
with automated CI/CD deployment,
health checks and monitoring.
```

---

## Result

Use measurable outcomes where available.

Never invent metrics.

---

# 20. TECH STACK

Heading:

```text
TECH STACK
```

Subtitle:

```text
Tools and technologies I work with.
```

Categories:

```text
CONTAINERIZATION
CI/CD & DEVOPS
DATABASE & HA
MONITORING
INFRASTRUCTURE
STORAGE
```

---

# 21. TECHNOLOGY CARD

Example:

```text
┌──────────────────────┐
│ 🐳                   │
│ Docker               │
│ Containerization     │
└──────────────────────┘
```

Hover:

```text
Docker

Containerization

Used for:
Application packaging
Deployment
Environment consistency
```

---

# 22. STACK INTERACTION

Click technology:

Open small information drawer.

Example:

```text
PATRONI

Category
Database / HA

Used for
PostgreSQL high availability

Related projects
PostgreSQL HA Cluster
ION Core
```

Related project cards become highlighted.

---

# 23. EXPERIENCE SECTION

Heading:

```text
EXPERIENCE
```

Visual metaphor:

**Deployment Pipeline / Engineering Timeline**

```text
START
  │
  ▼
Development
  │
  ▼
Backend Engineering
  │
  ▼
Docker
  │
  ▼
CI/CD
  │
  ▼
Infrastructure
  │
  ▼
Production Operations
  │
  ▼
CURRENT
```

---

## Timeline Interaction

Desktop:

Horizontal timeline.

Mobile:

Vertical timeline.

Hover/click each milestone.

Panel displays:

```text
ENGINEERING PHASE

Focus:
Backend
Infrastructure
Automation

Technologies:
Laravel
PHP
Docker
Linux
GitLab
```

---

# 24. PRODUCTION MINDSET

This section intentionally minimal.

Large typography.

Four principles:

```text
RELIABILITY

Systems should survive failure.
```

```text
AUTOMATION

If I do it twice,
I automate it.
```

```text
OBSERVABILITY

You can't fix
what you can't see.
```

```text
SECURITY

Security belongs
in the pipeline.
```

---

## Animation

As user scrolls:

Each principle enters sequentially.

Animation:

```text
opacity: 0 → 1
translateY: 30px → 0
```

Duration:

`600ms`

Stagger:

`100ms`

---

# 25. LIVE SYSTEM STATUS

Heading:

```text
SYSTEM STATUS
```

This is the final technical showcase.

---

## Dashboard

```text
┌────────────────────────────────────────────────────┐
│ PRODUCTION STATUS                                  │
│                                                    │
│ API                  ● OPERATIONAL                │
│ DATABASE             ● HEALTHY                    │
│ REDIS                ● HEALTHY                    │
│ CI/CD                ● OPERATIONAL                │
│ MONITORING           ● ACTIVE                     │
│                                                    │
│ Last deployment      12 minutes ago               │
│ Availability         99.98%                       │
└────────────────────────────────────────────────────┘
```

---

# 26. LIVE STATUS DATA ARCHITECTURE

Jika ingin benar-benar live:

```text
Portfolio Frontend
       │
       ▼
Portfolio API
       │
       ├──── Health Endpoint
       │
       ├──── Monitoring
       │
       └──── Deployment Metadata
```

API:

```text
GET /api/status
```

Response:

```json
{
  "api": "operational",
  "database": "healthy",
  "redis": "healthy",
  "monitoring": "active"
}
```

---

## Important Security Rule

Jangan expose:

- internal IP
- hostname production
- credentials
- infrastructure secrets
- internal URLs
- database information
- sensitive metrics
- private topology details

Portfolio hanya menampilkan **sanitized architecture**.

---

# 27. CONTACT SECTION

Heading:

```text
LET'S BUILD SOMETHING GREAT.
```

Subheading:

```text
Have an infrastructure challenge,
project or opportunity?
Let's talk.
```

CTA:

```text
GET IN TOUCH →
```

Secondary:

```text
DOWNLOAD RESUME
```

---

# 28. TERMINAL CONTACT EASTER EGG

Optional.

Terminal:

```text
prasaswo@portfolio:~$ ssh connect@prasaswo.dev

Connection established.

Interested in working together?

[ LinkedIn ]
[ GitHub ]
[ Email ]
```

Terminal tidak benar-benar melakukan SSH.

Hanya interaction simulation.

---

# 29. FOOTER

```text
PRASASWO.TEPE

DevOps Engineer
Infrastructure Engineer

────────────────────────────────

GitHub
LinkedIn
Email
Resume

────────────────────────────────

BUILD · AUTOMATE · OBSERVE · SCALE

© 2026 Prasaswo Tepe
```

---

# 30. RESPONSIVE DESIGN

## Desktop ≥ 1200px

Characteristics:

- full topology
- multi-column layout
- interactive architecture
- large hero
- project grid
- horizontal experience timeline

---

## Tablet 768–1199px

Changes:

- Hero menjadi 55/45
- topology diperkecil
- project grid menjadi 2 columns
- tech stack menjadi horizontal scroll/grid
- timeline tetap horizontal tetapi compact

---

## Mobile < 768px

Priority:

1. Identity
2. CTA
3. Status
4. Projects
5. Infrastructure
6. Stack
7. Experience
8. Contact

---

# 31. MOBILE HERO

Desktop topology tidak boleh dipaksakan.

Mobile:

```text
HELLO, I'M

DEVOPS ENGINEER
&
INFRASTRUCTURE
ENGINEER

I build reliable infrastructure,
automate deployments,
and keep systems running.

[ EXPLORE MY WORK ]

[ DOWNLOAD RESUME ]

● ALL SYSTEMS OPERATIONAL
```

Topology:

Simplified.

```text
Internet
   ↓
Nginx
   ↓
Application
   ↓
PostgreSQL
```

User dapat tap node.

---

# 32. MOBILE PROJECTS

Single-column.

Card width:

`100%`

Tidak menggunakan hover-only interaction.

Semua hover interaction harus memiliki equivalent:

**tap → detail**

---

# 33. MOBILE INFRASTRUCTURE

Topology dapat di-scroll horizontal.

Alternative:

Vertical architecture.

```text
Internet
   ↓
Nginx
   ↓
Application
   ↓
PgBouncer
   ↓
PostgreSQL Cluster
```

Tap node:

Bottom sheet.

---

# 34. ANIMATION SYSTEM

Animation harus terasa seperti system UI, bukan website marketing biasa.

---

## Page Load

Sequence:

```text
0ms
Background

200ms
Navbar

400ms
Hero heading

600ms
Description

800ms
CTA

1000ms
Infrastructure topology

1200ms
Metrics
```

---

## Scroll Animation

Default:

```text
opacity: 0 → 1
translateY: 24px → 0
```

Duration:

`500–700ms`

Easing:

`cubic-bezier(0.22, 1, 0.36, 1)`

---

# 35. MICRO INTERACTIONS

## Buttons

Hover:

```text
translateY(-2px)
```

Active:

```text
translateY(0)
```

---

## Cards

Hover:

```text
translateY(-4px)
border-color → accent
```

---

## Status Indicator

Healthy:

Subtle pulse.

```text
●
  ↗
  ↘
```

Pulse interval:

`2.5–3s`

---

## Cursor

Optional custom cursor hanya desktop.

Tidak digunakan pada mobile.

Cursor:

Small cyan ring.

Ketika hover interactive:

Ring membesar.

---

# 36. REDUCED MOTION

Website harus mendukung:

```text
prefers-reduced-motion
```

Jika aktif:

- disable topology animation
- disable counter animation
- disable excessive transitions
- disable particle effects

Website tetap fully functional.

---

# 37. BACKGROUND

Base:

Dark navy-black.

Tambahkan:

### Grid

Subtle:

```text
┼────┼────┼────┼
│    │    │    │
┼────┼────┼────┼
│    │    │    │
┼────┼────┼────┼
```

Opacity:

`3–6%`

---

## Glow

Hanya digunakan pada:

- hero topology
- active node
- CTA
- system status
- important interactions

Jangan seluruh halaman glowing.

---

# 38. COMPONENT SYSTEM

Komponen utama:

```text
Navbar
StatusBadge
Button
MetricCard
Terminal
InfrastructureNode
InfrastructureConnection
ProjectCard
ProjectModal
TechnologyCard
TimelineNode
StatusRow
SectionHeader
Tag
Tooltip
Drawer
BottomSheet
CommandPalette
Footer
```

---

# 39. COMPONENT STATES

Setiap interactive component minimal memiliki:

```text
Default
Hover
Focus
Active
Disabled
Loading
Success
Error
```

Status component:

```text
Operational
Healthy
Warning
Degraded
Offline
```

---

# 40. ACCESSIBILITY

Target:

**WCAG 2.1 AA**

Requirements:

- keyboard navigation
- visible focus state
- semantic HTML
- proper heading hierarchy
- aria-label untuk icon-only button
- sufficient contrast
- reduced motion
- no interaction yang hanya bergantung pada hover

---

# 41. PERFORMANCE

Karena website memiliki banyak animation, performance harus menjadi prioritas.

Target:

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

Guidelines:

- SVG untuk topology
- WebP/AVIF untuk images
- lazy load non-critical assets
- avoid huge JS libraries
- animation menggunakan transform/opacity
- jangan animate width/height secara terus menerus
- avoid unnecessary DOM updates

---

# 42. SEO

Metadata:

```text
Title:
Prasaswo Tepe — DevOps Engineer & Infrastructure Engineer

Description:
DevOps Engineer focused on infrastructure,
CI/CD, automation, PostgreSQL high availability,
monitoring and production systems.
```

Open Graph:

```text
og:title
og:description
og:image
og:url
```

Structured data:

`Person`

dan bila relevan:

`WebSite`

---

# 43. UX FLOW

Primary flow:

```text
LANDING
   │
   ▼
HERO
   │
   ├── Explore Work ───────► PROJECTS
   │
   ├── Resume ─────────────► PDF
   │
   └── Topology ───────────► Infrastructure Detail
                                  │
                                  ▼
                              Projects
                                  │
                                  ▼
                              Contact
```

Secondary flow:

```text
LANDING
   ↓
ABOUT
   ↓
STACK
   ↓
EXPERIENCE
   ↓
CONTACT
```

Technical visitor flow:

```text
LANDING
   ↓
TOPOLOGY
   ↓
POSTGRESQL
   ↓
PROJECT
   ↓
ARCHITECTURE
   ↓
TECH STACK
   ↓
GITHUB / CONTACT
```

---

# 44. “WOW MOMENT” DESIGN

Website harus memiliki minimal tiga wow moments.

## WOW #1

Hero topology.

Visitor melihat infrastructure diagram hidup.

---

## WOW #2

Project click.

Topology/detail muncul tanpa pindah halaman.

---

## WOW #3

Terminal Easter Egg.

Visitor menemukan command:

```text
help
```

dan bisa mengeksplorasi portfolio menggunakan terminal.

---

# 45. CONTENT STRATEGY

Jangan menulis:

> Experienced DevOps Engineer with extensive knowledge...

Lebih baik gunakan:

> I build reliable infrastructure, automate deployments, and keep systems observable.

Setiap project harus menggunakan format:

```text
Problem
↓
Architecture
↓
Implementation
↓
Monitoring
↓
Result
```

Dengan demikian portfolio menjadi **proof of engineering**, bukan daftar skill.

---

# 46. INFORMATION HIERARCHY

Prioritas informasi:

```text
1. Identity
2. Role
3. Engineering focus
4. Proof of work
5. Infrastructure
6. Technical stack
7. Experience
8. Contact
```

Jangan membuat visitor harus membaca seluruh halaman untuk memahami siapa pemilik website.

---

# 47. DESKTOP SCREEN BREAKPOINTS

```text
1440px+
Full experience

1280px
Full experience

1024px
Compact desktop

768px
Tablet

640px
Large mobile

390px
Standard mobile

320px
Minimum supported
```

---

# 48. MOBILE NAVIGATION BEHAVIOR

Tap hamburger:

```text
┌────────────────────────────┐
│ PRASASWO.TEPE          ✕   │
│                            │
│ WORK                       │
│ ABOUT                      │
│ INFRASTRUCTURE             │
│ PROJECTS                   │
│ STACK                      │
│ EXPERIENCE                 │
│ CONTACT                    │
│                            │
│ ─────────────────────────  │
│ ● ALL SYSTEMS OPERATIONAL  │
└────────────────────────────┘
```

Menu close:

- click item
- click X
- ESC
- click outside

---

# 49. COMMAND PALETTE

Optional advanced feature.

Keyboard:

```text
Ctrl + K
```

Opens:

```text
┌─────────────────────────────────┐
│ > Search portfolio...           │
├─────────────────────────────────┤
│ Projects                        │
│ Infrastructure                  │
│ Tech Stack                      │
│ Experience                     │
│ Contact                         │
│ Download Resume                 │
└─────────────────────────────────┘
```

Commands:

```text
projects
infrastructure
stack
experience
contact
resume
github
linkedin
```

---

# 50. FINAL DESIGN PERSONALITY

The final interface should feel like:

```text
          ENGINEER
             +
        INFRASTRUCTURE
             +
          PRODUCT
             +
         PORTFOLIO
```

Not:

```text
Generic CV Website
```

Not:

```text
Cyberpunk Hacker Website
```

Not:

```text
Overloaded Dashboard
```

But:

```text
A premium engineering portfolio
with the visual language of
modern infrastructure systems.
```

---

# 51. DESIGN NORTH STAR

Every design decision should pass this test:

### Question 1

Does this help the visitor understand the engineer?

### Question 2

Does this demonstrate technical capability?

### Question 3

Does this improve usability?

### Question 4

Does this contribute to the DevOps identity?

Jika jawabannya tidak, elemen tersebut tidak perlu dimasukkan.

---

# 52. FINAL EXPERIENCE

Target experience:

```text
Visitor opens website
        ↓
"Whoa, this looks different."
        ↓
Reads Hero
        ↓
Sees live infrastructure
        ↓
"Interesting..."
        ↓
Clicks PostgreSQL
        ↓
Sees Patroni / PgBouncer / etcd
        ↓
"Okay, this is real engineering."
        ↓
Opens Project
        ↓
Sees architecture + implementation
        ↓
Explores Tech Stack
        ↓
Finds terminal Easter Egg
        ↓
"That's pretty cool."
        ↓
Downloads Resume / Opens LinkedIn
```

---

# 53. IMPLEMENTATION PRIORITY

## Phase 1 — Core Experience

Must have:

- Navbar
- Hero
- CTA
- Infrastructure topology
- About
- Projects
- Tech Stack
- Experience
- Contact
- Responsive layout

---

## Phase 2 — Interaction

Add:

- topology hover
- topology click
- project modal
- technology drawer
- terminal animation
- scroll animations
- metric animations
- mobile bottom sheets

---

## Phase 3 — Advanced

Add:

- command palette
- terminal commands
- live system status
- real API health endpoint
- deployment metadata
- GitHub integration
- dynamic project data

---

## Phase 4 — Polish

Final:

- accessibility
- performance optimization
- SEO
- OG image
- favicon
- analytics
- error handling
- reduced motion
- mobile QA
- browser compatibility

---

# 54. SUCCESS CRITERIA

Website dianggap berhasil apabila:

### Visual

- terlihat profesional
- konsisten
- tidak terasa seperti template
- memiliki DevOps identity yang kuat

### UX

- visitor memahami role dalam <5 detik
- navigation intuitif
- mobile nyaman digunakan
- animation tidak mengganggu readability

### Technical

- responsive
- accessible
- performant
- SEO-ready

### Portfolio

Visitor dapat dengan mudah menemukan:

- siapa pemilik website
- pengalaman
- project
- infrastructure expertise
- technology stack
- resume
- contact

### Wow Factor

Minimal terdapat:

- interactive infrastructure
- project exploration
- terminal Easter Egg

---

# 55. DESIGN TAGLINE

Primary:

> **BUILD. AUTOMATE. OBSERVE. SCALE.**

Alternative:

> **Engineering reliable systems, one deployment at a time.**

Alternative:

> **Infrastructure that works. Systems you can trust.**

Recommended:

> **BUILD. AUTOMATE. OBSERVE. SCALE.**