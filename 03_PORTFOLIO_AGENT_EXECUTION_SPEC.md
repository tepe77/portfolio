# Portfolio Agent Execution Specification

**Project:** Prasaswo Tepe — DevOps Engineer Portfolio  
**Document:** Agent Execution Specification  
**Version:** 1.0.0  
**Status:** Ready for Implementation  
**Target:** AI Coding Agent  
**Architecture:** Static-first / Serverless-ready  
**Primary Framework:** Astro + TypeScript  
**Styling:** Native CSS  
**Deployment:** Cloudflare Pages / Cloudflare Workers Static Assets

---

# 1. Objective

Build a production-grade, single-page personal portfolio website for a DevOps / DevSecOps engineer.

The website must communicate:

- Infrastructure engineering capability
- DevOps mindset
- Cloud and container expertise
- CI/CD engineering
- Database reliability
- Monitoring and observability
- Security awareness
- Production operations experience
- Engineering maturity

The website itself must demonstrate engineering principles:

> **Fast. Secure. Observable. Maintainable. Minimal.**

The portfolio must feel like a combination of:

- Modern engineering portfolio
- Production infrastructure dashboard
- Interactive system architecture
- Technical resume
- Lightweight terminal interface

The implementation must remain simple enough to maintain manually.

---

# 2. Non-Goals

The following are explicitly OUT OF SCOPE for V1:

- Laravel
- PHP backend
- Database
- Authentication
- Admin dashboard
- CMS
- Custom API backend
- Contact form backend
- User registration
- Login
- Real shell execution
- Real infrastructure credentials
- Real private infrastructure topology
- Real-time private server monitoring
- Heavy WebGL
- Three.js
- GSAP
- Framer Motion
- React unless technically justified
- Tailwind CSS
- jQuery
- Large UI component libraries

Do not introduce additional dependencies unless there is a measurable technical requirement.

---

# 3. Core Technology Stack

## 3.1 Required

```text
Astro
TypeScript
Native CSS
HTML5
SVG
Web APIs
```

## 3.2 Optional

```text
Cloudflare Pages
Cloudflare Workers Static Assets
GitLab CI/CD
Lighthouse CI
OSV Scanner
```

## 3.3 Dependency Philosophy

Prefer:

```text
Browser API > small utility > library
```

Examples:

Instead of:

```text
GSAP
```

Use:

```text
CSS transitions
CSS keyframes
IntersectionObserver
requestAnimationFrame
```

Instead of:

```text
Chart.js
```

Use:

```text
SVG
CSS
```

Instead of:

```text
React modal library
```

Use:

```text
HTML dialog
or
native DOM state management
```

---

# 4. Architecture

The application follows a static-first architecture.

```text
                 ┌─────────────────────┐
                 │      GitLab Repo     │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │      GitLab CI       │
                 ├─────────────────────┤
                 │ Type Check           │
                 │ Build                │
                 │ Security Scan        │
                 │ Lighthouse           │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │     Astro Build     │
                 │      /dist          │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │      Cloudflare     │
                 │        Edge         │
                 └──────────┬──────────┘
                            │
                            ▼
                     Portfolio Site
```

The production website must not require a database or application server.

---

# 5. Rendering Strategy

Default behavior:

```text
Astro Static HTML
        +
Native CSS
        +
Minimal TypeScript
```

Interactive components should only hydrate when required.

Preferred strategy:

```astro
<Component />
```

Only use client-side JavaScript when the component actually requires interaction.

Avoid:

```astro
<Component client:load />
```

unless necessary.

Prefer:

```astro
<Component client:visible />
```

or:

```astro
<Component client:idle />
```

where appropriate.

---

# 6. Project Structure

The final project should follow:

```text
prasaswo-portfolio/
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.webmanifest
│   │
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
│   │   │
│   │   ├── common/
│   │   │   ├── Button.astro
│   │   │   ├── StatusBadge.astro
│   │   │   ├── MetricCard.astro
│   │   │   ├── SectionHeader.astro
│   │   │   └── Icon.astro
│   │   │
│   │   ├── navigation/
│   │   │   ├── Navbar.astro
│   │   │   └── MobileNavigation.astro
│   │   │
│   │   ├── hero/
│   │   │   ├── Hero.astro
│   │   │   ├── HeroMetrics.astro
│   │   │   └── HeroTopology.astro
│   │   │
│   │   ├── about/
│   │   │   ├── About.astro
│   │   │   ├── Terminal.astro
│   │   │   └── ProfileSummary.astro
│   │   │
│   │   ├── infrastructure/
│   │   │   ├── Infrastructure.astro
│   │   │   ├── InfrastructureTopology.astro
│   │   │   └── InfrastructureNode.astro
│   │   │
│   │   ├── projects/
│   │   │   ├── Projects.astro
│   │   │   ├── ProjectCard.astro
│   │   │   └── ProjectModal.astro
│   │   │
│   │   ├── stack/
│   │   │   ├── TechStack.astro
│   │   │   ├── TechnologyCard.astro
│   │   │   └── TechnologyDrawer.astro
│   │   │
│   │   ├── experience/
│   │   │   ├── Experience.astro
│   │   │   └── ExperienceItem.astro
│   │   │
│   │   ├── mindset/
│   │   │   ├── Mindset.astro
│   │   │   └── PrincipleCard.astro
│   │   │
│   │   ├── status/
│   │   │   └── SystemStatus.astro
│   │   │
│   │   └── contact/
│   │       ├── Contact.astro
│   │       └── SocialLinks.astro
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
│   ├── scripts/
│   │   ├── navigation.ts
│   │   ├── terminal.ts
│   │   ├── topology.ts
│   │   ├── command-palette.ts
│   │   └── scroll-reveal.ts
│   │
│   └── styles/
│       ├── tokens.css
│       ├── globals.css
│       ├── utilities.css
│       └── animations.css
│
├── astro.config.ts
├── tsconfig.json
├── package.json
├── .gitignore
├── .editorconfig
├── .env.example
├── .gitlab-ci.yml
├── README.md
└── LICENSE
```

---

# 7. Page Structure

The main page must follow this order:

```text
Navbar
│
├── Hero
│
├── About
│
├── Infrastructure
│
├── Projects
│
├── Tech Stack
│
├── Experience
│
├── Engineering Mindset
│
├── System Status
│
├── Contact
│
└── Footer
```

---

# 8. Navigation

## Desktop

Navigation:

```text
[ PRASASWO ]

About
Infrastructure
Projects
Stack
Experience

[ SYSTEM: OPERATIONAL ]
```

Navbar behavior:

- sticky
- translucent dark background
- backdrop blur
- subtle bottom border
- becomes slightly more opaque after scrolling
- active section indicator
- smooth scroll

Do not use excessive animation.

---

# 9. Hero Section

Hero is the primary visual statement.

Layout:

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│  DEVOPS / DEVSECOPS ENGINEER                        │
│                                                     │
│  Building reliable systems                          │
│  from infrastructure to deployment.                 │
│                                                     │
│  Infrastructure • Automation • Security •           │
│  Observability                                      │
│                                                     │
│  [ VIEW PROJECTS ] [ DOWNLOAD RESUME ]              │
│                                                     │
│                              ┌───────────────┐      │
│                              │   TOPOLOGY    │      │
│                              │               │      │
│                              │ ● CI/CD       │      │
│                              │   │           │      │
│                              │ ● APP         │      │
│                              │   │           │      │
│                              │ ● DATABASE    │      │
│                              └───────────────┘      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Hero requirements:

- no giant photograph
- no generic stock image
- infrastructure visualization is the primary visual
- strong typography
- immediate explanation of role
- CTA visible without scrolling

---

# 10. Hero Topology

Topology should visually represent:

```text
Developer
    │
    ▼
Git
    │
    ▼
CI/CD
    │
    ▼
Container
    │
    ├────► Application
    │
    ├────► Redis
    │
    └────► PostgreSQL
                │
                ▼
           Monitoring
```

The topology is conceptual.

Never expose:

- real IP addresses
- internal hostnames
- SSH ports
- database credentials
- private network CIDRs
- production endpoints
- authentication tokens

---

# 11. Infrastructure Section

This is the technical centerpiece of the portfolio.

Show a sanitized production-style architecture:

```text
                    ┌──────────────┐
                    │    GitLab    │
                    │     CI/CD    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   Registry   │
                    └──────┬───────┘
                           │
                           ▼
             ┌─────────────────────────┐
             │      Application        │
             │       Containers        │
             └───────────┬─────────────┘
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
          PostgreSQL   Redis      Object Storage
             │
             ▼
          Patroni
             │
             ▼
         Monitoring
```

Interaction:

- hover node
- highlight connected nodes
- dim unrelated nodes
- show tooltip
- click node opens information panel
- selected node remains highlighted

---

# 12. Infrastructure Node State

Every node must support:

```text
default
hover
focus
selected
connected
dimmed
```

Visual rules:

### Default

- dark surface
- thin border
- muted icon
- low glow

### Hover

- brighter border
- subtle accent glow
- cursor pointer

### Selected

- accent border
- stronger glow
- connected lines highlighted

### Dimmed

- opacity reduced
- no glow

### Focus

Must have visible keyboard focus indicator.

---

# 13. Projects Section

Projects must be presented as engineering case studies.

Each project card:

```text
┌──────────────────────────────────┐
│ PROJECT                          │
│                                  │
│ Production CI/CD Platform        │
│                                  │
│ Docker • GitLab • Registry       │
│                                  │
│ Automated container deployment   │
│ with rollback strategy.          │
│                                  │
│ [ VIEW CASE STUDY ]              │
└──────────────────────────────────┘
```

Project cards should communicate:

- problem
- architecture
- technology
- engineering decision
- outcome

Avoid simply listing:

```text
Laravel
Docker
GitLab
PostgreSQL
```

The user should understand what was engineered.

---

# 14. Project Data Contract

`src/data/projects.ts`

Use:

```ts
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  image?: string;
  repository?: string;
  demo?: string;
  featured?: boolean;
}
```

Example:

```ts
{
  id: "production-cicd",
  title: "Production CI/CD Platform",
  category: "DevOps",
  description:
    "Containerized deployment pipeline with automated validation and rollback.",
  problem:
    "Manual deployment increased operational risk and recovery time.",
  solution:
    "Implemented GitLab CI/CD with container registry and controlled deployment.",
  architecture: [
    "GitLab",
    "GitLab Runner",
    "Container Registry",
    "Docker",
    "Production VM"
  ],
  technologies: [
    "GitLab CI/CD",
    "Docker",
    "Linux",
    "Nginx"
  ],
  highlights: [
    "Automated deployment",
    "Versioned releases",
    "Rollback strategy"
  ],
  featured: true
}
```

Do not invent metrics.

Only include measurable metrics when real data is available.

---

# 15. Project Modal

Modal must support:

```text
open
close
ESC
click backdrop
keyboard navigation
focus trap
focus restoration
```

Accessibility:

```text
role="dialog"
aria-modal="true"
aria-labelledby
```

When modal closes:

```text
focus returns to triggering element
```

Do not implement modal using arbitrary `div` event hacks if native `<dialog>` provides a cleaner solution.

---

# 16. Technology Stack

Display technology groups.

Recommended categories:

```text
Cloud
Containers
CI/CD
Operating Systems
Databases
Caching
Observability
Web Servers
Security
Automation
Development
```

Each technology card:

```text
┌─────────────────────────────┐
│ Docker                      │
│                             │
│ Containers                  │
│                             │
│ Production experience       │
│ ███████████████████░░       │
│                             │
│ [ DETAILS ]                 │
└─────────────────────────────┘
```

Do not use arbitrary percentage skill bars.

If a proficiency indicator is used, define it semantically:

```text
Primary
Advanced
Working
Familiar
```

Avoid:

```text
Docker 97%
Kubernetes 83%
```

unless objectively measurable.

---

# 17. Technology Data Contract

```ts
export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  usage: string;
  level?: "primary" | "advanced" | "working" | "familiar";
  icon?: string;
}
```

---

# 18. About Section

The About section should combine:

```text
Professional summary
+
Terminal interaction
+
Engineering philosophy
```

Example visual:

```text
┌─────────────────────────────────────────┐
│ $ whoami                                │
│                                         │
│ prasaswo                                 │
│ DevOps / DevSecOps Engineer              │
│                                         │
│ $ uptime                                │
│                                         │
│ Always improving systems.                │
│                                         │
│ $ philosophy                             │
│                                         │
│ Automate repetitive work.                │
│ Observe everything important.            │
│ Design for failure.                      │
└─────────────────────────────────────────┘
```

---

# 19. Terminal Component

The terminal is a UI simulation.

It MUST NOT execute shell commands.

Allowed commands:

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

Unknown commands:

```text
Command not found.

Type "help" to see available commands.
```

Command execution must use a whitelist:

```ts
const commands = {
  help: ...,
  about: ...,
  projects: ...,
  stack: ...,
  experience: ...,
  status: ...,
  contact: ...,
  clear: ...
};
```

Never use:

```ts
eval()
new Function()
shell execution
child_process
fetch(command)
```

Never interpret arbitrary user input as executable code.

---

# 20. Command Palette

Keyboard shortcut:

```text
Ctrl + K
```

macOS:

```text
Cmd + K
```

Commands:

```text
Go to About
Go to Infrastructure
Go to Projects
Go to Stack
Go to Experience
Go to Contact
Open Resume
Toggle System Status
```

Behavior:

```text
closed
    ↓
Ctrl/Cmd + K
    ↓
open
    ↓
type query
    ↓
filter commands
    ↓
Arrow Up / Arrow Down
    ↓
Enter
    ↓
execute
```

ESC closes the palette.

---

# 21. Experience Section

Timeline format:

```text
2026
 │
 ├── DevOps / DevSecOps
 │
 │
2025
 │
 ├── Infrastructure Engineering
 │
 │
2024
 │
 └── Software Engineering
```

Each entry:

```ts
export interface Experience {
  id: string;
  period: string;
  role: string;
  company?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}
```

Focus on:

- responsibilities
- infrastructure
- automation
- reliability
- security
- measurable impact where available

---

# 22. Engineering Mindset

Use short principles.

Example:

```text
01
AUTOMATE

If a task happens repeatedly,
it should probably be automated.

02
OBSERVE

Systems are only reliable when
their behavior can be observed.

03
DESIGN FOR FAILURE

Assume components fail.
Build recovery into the architecture.

04
SECURITY BY DEFAULT

Security should be part of the
delivery pipeline, not an afterthought.

05
KEEP IT SIMPLE

Complexity is an operational cost.
Prefer boring technology that works.
```

This section should feel like engineering philosophy, not motivational content.

---

# 23. System Status

The status component is intentionally simulated in V1.

Example:

```text
SYSTEM STATUS

● Portfolio        Operational
● CI/CD             Operational
● Monitoring        Operational
● Infrastructure    Operational
```

Do not claim real production availability unless backed by a public health endpoint.

Use:

```text
status: operational
```

instead of:

```text
99.99% uptime
```

unless a real metric source exists.

---

# 24. Optional Future Health Endpoint

V2 may expose:

```http
GET /api/health
```

Response:

```json
{
  "status": "operational"
}
```

Do not expose:

```json
{
  "database": "postgres-prod-01",
  "host": "10.x.x.x",
  "redis": true,
  "server": "production-server-01"
}
```

Public health endpoints must reveal minimal information.

---

# 25. Contact Section

V1 should NOT implement a custom contact form.

Use:

```text
Email
GitHub
LinkedIn
Resume
```

Example:

```text
Let's build reliable systems.

Interested in infrastructure,
automation, or DevOps engineering?

[ EMAIL ME ]

[ GITHUB ] [ LINKEDIN ] [ RESUME ]
```

Reason:

A static portfolio does not need a backend merely to process contact forms.

---

# 26. Footer

Footer:

```text
© 2026 Prasaswo Tepe

Built with Astro.
Deployed at the edge.

Status: Operational
```

Do not add unnecessary footer content.

---

# 27. Design Tokens

Create:

```text
src/styles/tokens.css
```

Use:

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

  --font-sans:
    "Inter",
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  --font-mono:
    "JetBrains Mono",
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    monospace;
}
```

---

# 28. Spacing System

Use:

```text
4
8
12
16
20
24
32
40
48
64
80
96
120
```

Do not introduce arbitrary spacing unless required.

---

# 29. Typography

Typography:

```text
Inter
JetBrains Mono
```

Use self-hosted fonts when possible.

Type scale:

```text
12px
14px
16px
18px
22px
32px
48px
64px
```

Hero:

Desktop:

```text
64px
line-height: 1.05
```

Mobile:

```text
40px
line-height: 1.1
```

---

# 30. Container

Desktop:

```css
width: min(calc(100% - 48px), 1280px);
margin-inline: auto;
```

Mobile:

```css
width: min(calc(100% - 32px), 1280px);
margin-inline: auto;
```

---

# 31. Breakpoints

Supported breakpoints:

```text
320px
390px
640px
768px
1024px
1280px
1440px
```

Primary responsive transition:

```text
mobile < 768px
desktop >= 768px
```

---

# 32. Responsive Requirements

Mobile must NOT simply be a compressed desktop layout.

Mobile priorities:

```text
Hero
↓
CTA
↓
Metrics
↓
Projects
↓
Infrastructure
↓
Stack
↓
Experience
↓
Contact
```

Infrastructure topology:

Desktop:

```text
horizontal / network graph
```

Mobile:

```text
vertical flow
```

Avoid horizontal scrolling.

---

# 33. Animation System

Motion tokens:

```css
--duration-fast: 150ms;
--duration-normal: 220ms;
--duration-slow: 500ms;
--duration-reveal: 650ms;

--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
```

Use animations for:

- hover
- topology connections
- modal opening
- navigation
- scroll reveal
- command palette

Do NOT animate everything.

---

# 34. Reduced Motion

Mandatory:

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

When reduced motion is enabled:

- disable animated topology lines
- disable parallax
- disable reveal animation
- disable blinking cursor animation

---

# 35. Background System

Use:

```text
dark background
+
subtle grid
+
very subtle cyan glow
+
noise only if lightweight
```

Grid must remain subtle.

Do not create:

```text
cyberpunk overload
neon everywhere
animated matrix rain
excessive particles
```

The website must remain professional.

---

# 36. Icon System

Prefer inline SVG.

Do not install a large icon package for a small portfolio.

Required icon categories:

```text
Git
Docker
Database
Cloud
Terminal
Monitoring
Security
Server
Network
Arrow
External Link
Menu
Close
Search
Check
```

SVG requirements:

```text
aria-hidden="true"
focusable="false"
```

unless the icon itself conveys accessible meaning.

---

# 37. Accessibility

Target:

```text
WCAG 2.1 AA
```

Requirements:

- semantic HTML
- one `<h1>`
- logical heading hierarchy
- keyboard navigation
- visible focus states
- sufficient contrast
- accessible buttons
- accessible dialogs
- accessible navigation
- `aria-label` where necessary
- skip-to-content link
- reduced motion
- no color-only information
- alt text for meaningful images
- decorative images use empty alt

---

# 38. Keyboard Requirements

Must support:

```text
Tab
Shift + Tab
Enter
Space
Escape
Arrow Up
Arrow Down
Ctrl + K
Cmd + K
```

Interactive elements must never require mouse-only interaction.

---

# 39. SEO

Base layout must include:

```text
<title>
<meta name="description">
<meta name="viewport">
<meta name="robots">
<link rel="canonical">
Open Graph
Twitter Card
```

Recommended title:

```text
Prasaswo Tepe — DevOps / DevSecOps Engineer
```

Description should clearly communicate:

```text
DevOps
Infrastructure
CI/CD
Containers
Security
Observability
```

Do not keyword-stuff.

---

# 40. Structured Data

Use JSON-LD where appropriate.

Recommended:

```text
Person
WebSite
```

Do not expose private personal information.

Only include publicly intended information.

---

# 41. Security Headers

Production deployment should provide:

```text
Content-Security-Policy
Strict-Transport-Security
Referrer-Policy
Permissions-Policy
X-Content-Type-Options
```

Recommended CSP baseline:

```text
default-src 'self';
script-src 'self';
style-src 'self';
img-src 'self' data: https:;
font-src 'self';
connect-src 'self';
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';
```

If external resources are introduced, update CSP explicitly.

Never use:

```text
script-src *
```

or:

```text
default-src *
```

---

# 42. Content Security Rules

Never commit:

```text
API keys
tokens
passwords
SSH keys
private keys
database credentials
Cloudflare API tokens
GitLab tokens
private IPs
private hostnames
```

`.env.example` may contain variable names only.

Example:

```env
PUBLIC_SITE_URL=
PUBLIC_GITHUB_URL=
PUBLIC_LINKEDIN_URL=
PUBLIC_EMAIL=
```

Never put secrets in `PUBLIC_*`.

---

# 43. External Links

External links:

```html
target="_blank"
rel="noopener noreferrer"
```

Only when opening a new tab is intentional.

Prefer normal navigation where appropriate.

---

# 44. JavaScript Security

Never use:

```ts
eval()
new Function()
document.write()
innerHTML = userInput
```

Prefer:

```ts
textContent
createElement
setAttribute
```

All terminal commands must be static data.

---

# 45. Data Architecture

Content must be separated from UI.

Use:

```text
src/data/profile.ts
src/data/projects.ts
src/data/stack.ts
src/data/experience.ts
```

Components should consume structured data.

Avoid hardcoding repeated project or technology markup.

---

# 46. Profile Data Contract

```ts
export interface Profile {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  resume?: string;
}
```

---

# 47. Performance Budget

Target Lighthouse:

```text
Performance: >= 95
Accessibility: >= 95
Best Practices: >= 95
SEO: >= 95
```

Core Web Vitals targets:

```text
LCP < 2.5s
INP < 200ms
CLS < 0.1
```

JavaScript:

```text
Initial JS < 50 KB compressed
```

Preferred:

```text
near-zero JS
```

---

# 48. Performance Rules

Do:

- static HTML
- lazy-load non-critical images
- use AVIF/WebP
- specify image dimensions
- preload only critical resources
- self-host fonts
- minimize JavaScript
- avoid large dependencies

Do not:

- autoplay video
- load large background videos
- load entire icon libraries
- load analytics by default
- use huge animation libraries
- use WebGL for decorative purposes

---

# 49. Images

Project images:

```text
AVIF
WebP
```

Preferred dimensions:

```text
1200x800
```

Open Graph:

```text
1200x630
```

Always specify:

```text
width
height
alt
loading
decoding
```

where appropriate.

---

# 50. Error Page

Create:

```text
src/pages/404.astro
```

Design:

```text
404

ROUTE NOT FOUND

The requested resource
does not exist.

[ RETURN HOME ]
```

Optional terminal styling:

```text
$ locate requested-resource

ERROR: resource not found
```

---

# 51. Favicon

Create:

```text
public/favicon.svg
```

Use a simple technical mark.

Avoid large bitmap favicon files.

---

# 52. Manifest

Create:

```text
public/manifest.webmanifest
```

Include:

```text
name
short_name
start_url
display
background_color
theme_color
icons
```

No unnecessary PWA complexity.

---

# 53. Robots

Create:

```text
public/robots.txt
```

Allow public indexing.

Do not expose private paths.

---

# 54. Sitemap

Create sitemap appropriate for the final deployment URL.

For V1 single page:

```text
/
```

is sufficient.

---

# 55. CI/CD Pipeline

GitLab CI should follow:

```text
validate
    ↓
build
    ↓
security
    ↓
lighthouse
    ↓
deploy
```

Recommended:

```yaml
stages:
  - validate
  - build
  - security
  - lighthouse
  - deploy
```

---

# 56. Validate Stage

Validate:

```text
TypeScript
Astro
format
lint
```

Example commands:

```bash
npm ci
npm run check
npm run lint
```

Only include commands that exist in `package.json`.

---

# 57. Build Stage

Build:

```bash
npm run build
```

Expected output:

```text
dist/
```

The build must fail on:

- TypeScript errors
- broken imports
- invalid Astro syntax
- invalid content schema
- missing required assets

---

# 58. Security Stage

Run OSV Scanner against project dependencies.

Conceptually:

```text
OSV Scanner
    ↓
package-lock.json
    ↓
vulnerability detection
```

Pipeline should fail based on the configured severity policy.

Do not blindly ignore vulnerabilities.

Document exceptions.

---

# 59. Lighthouse Stage

Run Lighthouse against the built site.

Minimum target:

```text
Performance >= 95
Accessibility >= 95
Best Practices >= 95
SEO >= 95
```

If CI infrastructure cannot run Lighthouse reliably in V1, document the limitation and keep Lighthouse as a local validation command.

---

# 60. Deploy Stage

Deployment target:

```text
Cloudflare Pages
```

or:

```text
Cloudflare Workers Static Assets
```

Deployment should only occur after:

```text
validate
build
security
lighthouse
```

succeed.

---

# 61. Git Branch Strategy

Recommended:

```text
main
develop
feature/*
fix/*
```

Production:

```text
main
```

Development:

```text
develop
```

Feature:

```text
feature/portfolio-topology
feature/project-modal
feature/terminal
```

---

# 62. Commit Convention

Use conventional commit style:

```text
feat:
fix:
refactor:
perf:
docs:
security:
chore:
```

Examples:

```text
feat: add infrastructure topology
feat: add terminal interaction
perf: optimize project images
security: harden CSP headers
fix: restore modal focus
```

---

# 63. Implementation Phases

## Phase 1 — Bootstrap

Create:

```text
Astro project
TypeScript
base layout
global styles
tokens
index page
```

Acceptance:

```text
npm run dev
```

works.

---

## Phase 2 — Design System

Implement:

```text
tokens
typography
buttons
cards
status badges
containers
sections
responsive utilities
```

Acceptance:

All reusable primitives visually match the design specification.

---

## Phase 3 — Navigation

Implement:

```text
desktop navbar
mobile navigation
sticky behavior
active section
smooth scroll
skip link
```

Acceptance:

Keyboard navigation works.

---

## Phase 4 — Hero

Implement:

```text
Hero
CTA
metrics
topology
```

Acceptance:

Hero communicates:

```text
who
what
specialization
action
```

within the first viewport.

---

## Phase 5 — Infrastructure

Implement:

```text
SVG topology
nodes
connections
hover
focus
selection
mobile transformation
```

Acceptance:

Topology remains usable on:

```text
320px
390px
768px
1024px
1440px
```

---

## Phase 6 — Projects

Implement:

```text
project data
project cards
project modal
case study content
```

Acceptance:

Projects are data-driven.

---

## Phase 7 — Stack

Implement:

```text
technology data
technology cards
drawer/details
```

Acceptance:

No repeated hardcoded card markup.

---

## Phase 8 — Terminal

Implement:

```text
terminal UI
command whitelist
output rendering
clear
```

Acceptance:

No shell execution exists anywhere in the project.

---

## Phase 9 — Experience + Mindset

Implement:

```text
timeline
engineering principles
```

Acceptance:

Responsive and accessible.

---

## Phase 10 — Contact

Implement:

```text
email
GitHub
LinkedIn
resume
```

Acceptance:

All links work.

---

## Phase 11 — SEO + Security

Implement:

```text
metadata
OpenGraph
JSON-LD
robots
sitemap
CSP
security headers
```

Acceptance:

No sensitive information exposed.

---

## Phase 12 — Optimization

Perform:

```text
image optimization
font optimization
JS reduction
CSS optimization
Lighthouse audit
accessibility audit
```

---

## Phase 13 — CI/CD

Implement:

```text
validate
build
security
lighthouse
deploy
```

Acceptance:

A clean Git push can reach production automatically.

---

# 64. Interaction State Matrix

| Component | Hover | Focus | Click | Keyboard | Mobile |
|---|---|---|---|---|---|
| Navbar | Yes | Yes | Yes | Yes | Drawer |
| Button | Yes | Yes | Yes | Yes | Full-width where needed |
| Topology Node | Yes | Yes | Yes | Enter/Space | Vertical |
| Project Card | Yes | Yes | Yes | Enter | Stack |
| Project Modal | N/A | Yes | Close | ESC | Full-screen |
| Tech Card | Yes | Yes | Yes | Enter | Stack |
| Terminal | Cursor | Yes | Yes | Yes | Full-width |
| Command Palette | Highlight | Yes | Yes | Arrow/Enter | Full-width |
| Timeline | Subtle | Yes | Optional | Yes | Vertical |

---

# 65. Failure Handling

The site must remain functional when JavaScript fails.

Critical content must exist in static HTML.

If topology JavaScript fails:

```text
static topology remains visible
```

If terminal JavaScript fails:

```text
terminal remains readable
```

If modal JavaScript fails:

```text
project summary remains available
```

Do not make important content JS-only.

---

# 66. Browser Support

Target modern:

```text
Chrome
Edge
Firefox
Safari
Safari iOS
Chrome Android
```

Do not optimize for obsolete browsers.

---

# 67. Accessibility Acceptance Tests

The implementation is accepted only if:

```text
[ ] Tab can reach every interactive control
[ ] Focus is visible
[ ] ESC closes dialogs
[ ] ESC closes command palette
[ ] Modal returns focus
[ ] Screen reader labels exist
[ ] Heading hierarchy is valid
[ ] Color is not the only status indicator
[ ] Reduced motion works
[ ] Keyboard navigation works
[ ] No keyboard trap exists
```

---

# 68. Security Acceptance Tests

```text
[ ] No secrets in repository
[ ] No private infrastructure details
[ ] No real credentials
[ ] No eval()
[ ] No new Function()
[ ] No shell execution
[ ] No arbitrary HTML injection
[ ] External links use safe rel attributes
[ ] CSP configured
[ ] HSTS configured
[ ] Referrer-Policy configured
[ ] Permissions-Policy configured
[ ] X-Content-Type-Options configured
```

---

# 69. Performance Acceptance Tests

```text
[ ] Lighthouse Performance >= 95
[ ] Lighthouse Accessibility >= 95
[ ] Lighthouse Best Practices >= 95
[ ] Lighthouse SEO >= 95
[ ] LCP < 2.5s
[ ] INP < 200ms
[ ] CLS < 0.1
[ ] No layout shift from images
[ ] No unnecessary JavaScript
[ ] Images optimized
[ ] Fonts optimized
```

---

# 70. Visual Acceptance Tests

The website must visually communicate:

```text
Professional
Technical
Minimal
Modern
Reliable
Production-oriented
```

It must NOT feel like:

```text
Generic developer template
Gaming website
Cyberpunk landing page
Crypto website
Hacker movie UI
Over-animated portfolio
```

---

# 71. Content Quality Rules

Content must be:

- technically credible
- concise
- evidence-based
- specific
- understandable by recruiters
- interesting to senior engineers

Avoid:

```text
I am passionate about technology.
I love coding.
I am a hardworking person.
```

Prefer:

```text
I design and operate containerized systems with
an emphasis on deployment safety, observability,
automation, and recovery.
```

Do not fabricate:

- company names
- years of experience
- certifications
- metrics
- production scale
- infrastructure size
- uptime
- revenue impact

---

# 72. Recruiter UX

A recruiter should understand within approximately 10 seconds:

```text
Who is this?
↓
What does he do?
↓
What technologies does he use?
↓
What has he built?
↓
How can I contact him?
```

Therefore:

Hero → Projects → Stack → Experience → Contact

must remain extremely easy to navigate.

---

# 73. Engineer UX

A technical visitor should discover:

```text
Infrastructure topology
↓
CI/CD architecture
↓
Projects
↓
Technology decisions
↓
Engineering principles
```

The topology and case studies are the primary technical differentiators.

---

# 74. Mobile UX

At mobile width:

```text
No horizontal scrolling
No tiny text
No desktop graph squeezed into screen
No overlapping nodes
No hover-only functionality
No inaccessible modal
```

Touch targets:

```text
minimum ~44px
```

for important interactive controls.

---

# 75. Terminal UX

Terminal should feel authentic but remain simple.

Visual:

```text
┌─────────────────────────────────────┐
│ ● ● ●     prasaswo@portfolio        │
├─────────────────────────────────────┤
│                                     │
│ $ help                              │
│                                     │
│ Available commands:                 │
│                                     │
│ about       About me                │
│ projects    View projects            │
│ stack       Technology stack         │
│ experience  Experience               │
│ status      System status            │
│ contact     Contact information      │
│ clear       Clear terminal           │
│                                     │
│ $ _                                 │
└─────────────────────────────────────┘
```

Do not attempt to imitate a full Linux terminal.

---

# 76. Topology Animation

Connections may have subtle animated flow.

Example:

```text
Git
 │
 └───► CI/CD
          │
          └───► Registry
                    │
                    └───► Application
```

Animation should communicate:

```text
data flow
deployment flow
dependency
```

Not simply decorative motion.

Animation must stop when:

```text
prefers-reduced-motion: reduce
```

---

# 77. Component Ownership

Each component must have one responsibility.

Bad:

```text
Portfolio.astro
```

containing:

```text
navbar
hero
projects
modal
terminal
footer
```

Good:

```text
Navbar
Hero
Projects
ProjectModal
Terminal
Footer
```

Keep components small and composable.

---

# 78. TypeScript Rules

Use strict TypeScript.

`tsconfig.json` must enable strict checking.

Avoid:

```ts
any
```

unless there is a documented reason.

Prefer:

```ts
unknown
```

with proper narrowing.

Data contracts should be strongly typed.

---

# 79. CSS Rules

Use CSS custom properties.

Prefer:

```css
var(--color-accent-primary)
```

instead of hardcoded repeated values.

Avoid:

```css
!important
```

unless required for accessibility/reduced-motion overrides.

Avoid deeply nested selectors.

Keep specificity low.

---

# 80. JavaScript Rules

JavaScript should be:

```text
small
isolated
progressively enhanced
```

Scripts should not become a global application framework.

Use modules:

```text
navigation.ts
terminal.ts
topology.ts
command-palette.ts
scroll-reveal.ts
```

Avoid a single:

```text
app.ts
```

containing all application logic.

---

# 81. Logging

Production browser console must not contain:

```text
debug logs
credentials
environment variables
internal infrastructure details
```

Development logging may be removed before production.

---

# 82. Analytics

Analytics are NOT required in V1.

If added later:

- privacy-aware
- lightweight
- async
- CSP-compatible
- documented
- no invasive tracking

Do not sacrifice performance for analytics.

---

# 83. Dependency Allowlist

Preferred dependency footprint:

```text
astro
typescript
```

Potential development dependencies:

```text
prettier
eslint
lighthouse
```

Potential security tooling:

```text
osv-scanner
```

Every additional package must answer:

```text
Why is this needed?
Why can't native browser APIs solve it?
What is the bundle impact?
What is the maintenance cost?
```

---

# 84. README Requirements

README must contain:

```text
Project overview
Technology stack
Development
Build
Preview
Deployment
Architecture
Security
Performance
Project structure
CI/CD
```

Development:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

---

# 85. Definition of Done

The project is considered complete only when:

## Architecture

```text
[ ] Astro implemented
[ ] TypeScript strict
[ ] Static-first
[ ] No unnecessary backend
[ ] No Laravel
[ ] No unnecessary React
[ ] No Tailwind
```

## UI

```text
[ ] Navbar
[ ] Hero
[ ] Infrastructure
[ ] Projects
[ ] Stack
[ ] Experience
[ ] Mindset
[ ] System Status
[ ] Contact
[ ] Footer
```

## Interactions

```text
[ ] Topology interaction
[ ] Project modal
[ ] Terminal
[ ] Command palette
[ ] Mobile navigation
[ ] Scroll reveal
```

## Accessibility

```text
[ ] Keyboard navigation
[ ] Focus management
[ ] Reduced motion
[ ] Semantic HTML
[ ] Accessible dialogs
[ ] WCAG AA target
```

## Security

```text
[ ] CSP
[ ] HSTS
[ ] Referrer Policy
[ ] Permissions Policy
[ ] X-Content-Type-Options
[ ] No secrets
[ ] No shell execution
```

## Performance

```text
[ ] Lighthouse >= 95
[ ] LCP < 2.5s
[ ] INP < 200ms
[ ] CLS < 0.1
[ ] Optimized images
[ ] Minimal JS
```

## CI/CD

```text
[ ] Validate
[ ] Build
[ ] Security scan
[ ] Lighthouse
[ ] Deploy
```

---

# 86. AI Agent Execution Rules

The coding agent MUST follow these rules.

## Rule 1

Do not change the architecture without justification.

## Rule 2

Do not introduce Laravel.

## Rule 3

Do not introduce React for convenience.

## Rule 4

Do not introduce Tailwind for convenience.

## Rule 5

Do not introduce large animation libraries.

## Rule 6

Do not introduce a backend.

## Rule 7

Do not expose real infrastructure information.

## Rule 8

Do not fabricate professional achievements.

## Rule 9

Do not use arbitrary JavaScript execution.

## Rule 10

Do not sacrifice accessibility for visual effects.

## Rule 11

Do not sacrifice performance for visual effects.

## Rule 12

Prefer native browser APIs.

## Rule 13

Every new dependency must be justified.

## Rule 14

Every interactive feature must have a keyboard-accessible path.

## Rule 15

Critical content must remain usable without JavaScript.

---

# 87. Agent Execution Order

The coding agent should execute in this exact order:

```text
01. Bootstrap Astro
        ↓
02. Configure TypeScript
        ↓
03. Create design tokens
        ↓
04. Create global CSS
        ↓
05. Create BaseLayout
        ↓
06. Create common components
        ↓
07. Create navigation
        ↓
08. Create Hero
        ↓
09. Create topology
        ↓
10. Create About + Terminal
        ↓
11. Create Projects
        ↓
12. Create Stack
        ↓
13. Create Experience
        ↓
14. Create Mindset
        ↓
15. Create System Status
        ↓
16. Create Contact
        ↓
17. Create Command Palette
        ↓
18. Implement accessibility
        ↓
19. Implement SEO
        ↓
20. Implement security headers
        ↓
21. Optimize assets
        ↓
22. Run tests
        ↓
23. Run Lighthouse
        ↓
24. Configure CI/CD
        ↓
25. Production build
```

Do not jump directly into visual polish before the architecture and component contracts are stable.

---

# 88. Final Engineering Principle

The portfolio is not merely a website.

It is itself an engineering demonstration.

The implementation should communicate:

```text
                    DESIGN
                       │
                       ▼
                 ARCHITECTURE
                       │
                       ▼
                  AUTOMATION
                       │
                       ▼
                    SECURITY
                       │
                       ▼
                OBSERVABILITY
                       │
                       ▼
                  RELIABILITY
                       │
                       ▼
                 USER EXPERIENCE
```

The final product should make a technical visitor think:

> "This person doesn't just use DevOps tools. They understand why those tools exist and how to build reliable systems around them."

---

# 89. Final Acceptance Statement

The implementation is approved for production when:

```text
The website is fast enough to feel instant,
simple enough to maintain,
secure enough to expose publicly,
accessible enough to use without a mouse,
technical enough to demonstrate engineering capability,
and polished enough to impress a recruiter
within the first few seconds.
```

**End of Specification — v1.0.0**