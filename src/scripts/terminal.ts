// Terminal UI simulation - Strictly Whitelisted, Zero Eval
export function initTerminal() {
  const terminal = document.getElementById('terminal-container');
  const input = document.getElementById('terminal-input') as HTMLInputElement | null;
  const output = document.getElementById('terminal-output');

  if (!terminal || !input || !output) return;

  const commandMap: Record<string, string[]> = {
    help: [
      "Available commands:",
      "  about        Overview of engineering background",
      "  projects     List featured engineering case studies",
      "  pipeline     CI/CD pipeline and IaC configurations",
      "  stack        Primary tools and technology stack",
      "  experience   Career timeline and milestones",
      "  status       Current simulated production status",
      "  contact      Get in touch (Email, LinkedIn, GitHub)",
      "  whoami       Identity verification",
      "  uptime       Host availability status",
      "  clear        Clear the terminal screen"
    ],
    about: [
      "Prasaswo Tepe — DevOps & Infrastructure Engineer",
      "Specializing in container orchestration, high availability database clustering,",
      "GitLab CI/CD delivery pipelines, and Linux server reliability engineering.",
      "Mindset: Automate repetitive work. Observe everything. Design for failure."
    ],
    whoami: [
      "user: prasaswo",
      "role: DevOps & Infrastructure Engineer",
      "shell: simulated-sh v1.0",
      "status: ready for deployment"
    ],
    uptime: [
      "up 342 days, 14:22, load average: 0.23, 0.41, 0.38",
      "All services operating within normal SLA thresholds."
    ],
    projects: [
      "01. ION Core Infrastructure (Docker • Nginx • PostgreSQL • Monitoring)",
      "02. PostgreSQL HA Cluster (Patroni • etcd • PgBouncer • 3-Node)",
      "03. Automated CI/CD Platform (GitLab CI • Docker Registry • Security)",
      "04. Observability Stack (Prometheus • Grafana • Uptime Kuma)",
      "05. S3 Object Storage & DR (RustFS • Encrypted Backups • GPG)",
      "",
      "Use the Projects section above for full interactive case study diagrams."
    ],
    pipeline: [
      "Automated CI/CD Delivery & DevSecOps Platform:",
      "  Stages:    Lint -> Unit Test -> Docker Build -> Trivy CVE Scan -> Cluster Deploy",
      "  Features:  BuildKit caching, zero unmasked secrets, Cosign signing, rolling update",
      "  IaC Files: .gitlab-ci.yml, patroni.yml, compose.prod.yml, nginx.conf",
      "",
      "Trigger the visual pipeline DAG runner in Section 04."
    ],
    stack: [
      "Containerization:  Docker, Docker Swarm, Container Registries",
      "CI/CD:             GitLab CI/CD, GitHub Actions, Bash Automation",
      "Databases & HA:    PostgreSQL, Patroni, etcd, PgBouncer, Redis",
      "Observability:     Prometheus, Grafana, Uptime Kuma, cAdvisor",
      "Infrastructure:    Linux (Debian/Ubuntu), Nginx, Cloudflare, S3"
    ],
    experience: [
      "[2025 - Present] DevOps & Infrastructure Engineer (HA & Platform Reliability)",
      "[2024 - 2025]    Infrastructure & Automation Specialist (Docker & Hardening)",
      "[2023 - 2024]    Backend & Systems Developer (API & Database Architecture)"
    ],
    status: [
      "[OK] PORTFOLIO HOSTING     ● OPERATIONAL (Cloudflare Edge)",
      "[OK] DATABASE CLUSTER      ● HEALTHY (Patroni 3-node HA)",
      "[OK] CI/CD PIPELINE        ● ACTIVE (GitLab Runners Online)",
      "[OK] OBSERVABILITY ENGINE  ● ACTIVE (Prometheus Scraping)",
      "[OK] OBJECT STORAGE        ● HEALTHY (S3 Replicas Synced)"
    ],
    contact: [
      "Email:    prasaswo@gmail.com",
      "GitHub:   https://github.com/tepe77",
      "LinkedIn: https://www.linkedin.com/in/prasaswo-tepe-980a91b6/",
      "Resume:   Download link available in header"
    ],
    "cat profile.yaml": [
      "name: Prasaswo Tepe",
      "title: DevOps & Infrastructure Engineer",
      "principles:",
      "  - automate_repetitive_tasks",
      "  - verify_with_observability",
      "  - zero_downtime_failover",
      "availability: open_for_opportunities"
    ]
  };

  const appendLine = (text: string, type: 'command' | 'response' | 'error' = 'response') => {
    const lineEl = document.createElement('div');
    lineEl.className = `terminal-line terminal-${type}`;
    lineEl.textContent = text;
    output.appendChild(lineEl);
    output.scrollTop = output.scrollHeight;
  };

  const runCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    appendLine(`prasaswo@portfolio:~$ ${trimmed}`, 'command');
    const normalized = trimmed.toLowerCase();

    if (normalized === 'clear') {
      output.innerHTML = '';
    } else if (normalized === 'skills') {
      commandMap['stack'].forEach((line) => appendLine(line, 'response'));
    } else if (normalized === 'cluster') {
      commandMap['status'].forEach((line) => appendLine(line, 'response'));
    } else if (commandMap[normalized]) {
      commandMap[normalized].forEach((line) => appendLine(line, 'response'));
    } else {
      appendLine(`bash: command not found: ${trimmed}`, 'error');
      appendLine('Type "help" to view allowed simulation commands.', 'response');
    }
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      runCommand(input.value);
      input.value = '';
    }
  });

  // Quick Command Chips click handling (optimized for mobile 1-tap)
  const chips = terminal.querySelectorAll<HTMLButtonElement>('.terminal-chip');
  chips.forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const cmd = chip.dataset.cmd;
      if (cmd) {
        runCommand(cmd);
        input.value = '';
      }
    });
  });

  // Clicking anywhere inside terminal focuses input
  terminal.addEventListener('click', () => {
    input.focus();
  });
}
