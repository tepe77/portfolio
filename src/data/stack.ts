export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  usage: string;
  level: "primary" | "advanced" | "working";
  icon: string;
  relatedProjects: string[];
}

export const stackData: Technology[] = [
  // Containerization
  {
    id: "docker",
    name: "Docker",
    category: "Containerization",
    description: "Industry-standard container runtime for isolated microservices and application packaging.",
    usage: "Multi-stage builds, rootless containers, volume persistence, and Swarm orchestration.",
    level: "primary",
    icon: "docker",
    relatedProjects: ["ion-core", "cicd-platform"]
  },
  {
    id: "docker-compose",
    name: "Docker Compose",
    category: "Containerization",
    description: "Multi-container application orchestration tool for declarative service stacks.",
    usage: "Managing dependencies, private networks, restart policies, and healthcheck configurations.",
    level: "primary",
    icon: "layers",
    relatedProjects: ["ion-core", "observability"]
  },

  // CI/CD & Automation
  {
    id: "gitlab-ci",
    name: "GitLab CI/CD",
    category: "CI/CD & Automation",
    description: "Automated continuous integration and deployment pipeline engine.",
    usage: "Custom runner management, container registry pushes, artifact caching, and multi-stage pipelines.",
    level: "primary",
    icon: "git",
    relatedProjects: ["cicd-platform"]
  },
  {
    id: "bash-scripting",
    name: "Bash & Shell Scripting",
    category: "CI/CD & Automation",
    description: "Unix system automation, backup automation, and pipeline task scripting.",
    usage: "Automating server provisioning, healthcheck diagnostics, and log rotation tasks.",
    level: "primary",
    icon: "terminal",
    relatedProjects: ["ion-core", "object-storage", "cicd-platform"]
  },

  // Database & High Availability
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database & HA",
    description: "Advanced open-source relational database system.",
    usage: "Schema optimization, indexing, WAL replication, connection tuning, and point-in-time recovery.",
    level: "primary",
    icon: "database",
    relatedProjects: ["postgres-ha", "ion-core"]
  },
  {
    id: "patroni",
    name: "Patroni",
    category: "Database & HA",
    description: "High-availability template for PostgreSQL orchestrating automated failover and topology management.",
    usage: "Leader election, split-brain avoidance via DCS, and zero-downtime cluster maintenance.",
    level: "advanced",
    icon: "shield",
    relatedProjects: ["postgres-ha"]
  },
  {
    id: "etcd",
    name: "etcd",
    category: "Database & HA",
    description: "Distributed reliable key-value store utilizing the Raft consensus algorithm.",
    usage: "Providing quorum-backed distributed state and leader election locks for database clusters.",
    level: "advanced",
    icon: "network",
    relatedProjects: ["postgres-ha"]
  },
  {
    id: "pgbouncer",
    name: "PgBouncer",
    category: "Database & HA",
    description: "Lightweight connection pooler for PostgreSQL.",
    usage: "Transaction pooling, resource preservation, and graceful failover rerouting.",
    level: "advanced",
    icon: "refresh",
    relatedProjects: ["postgres-ha"]
  },
  {
    id: "redis",
    name: "Redis",
    category: "Database & HA",
    description: "In-memory data structure store used as a cache, session broker, and message queue.",
    usage: "Session management, cache buffering, rate limiting, and ephemeral key storage.",
    level: "advanced",
    icon: "database",
    relatedProjects: ["ion-core"]
  },

  // Observability & Monitoring
  {
    id: "prometheus",
    name: "Prometheus",
    category: "Observability",
    description: "Time-series monitoring and alerting toolkit with pull-based metrics collection.",
    usage: "Metric scraping, PromQL alert queries, and infrastructure saturation detection.",
    level: "advanced",
    icon: "activity",
    relatedProjects: ["observability", "ion-core"]
  },
  {
    id: "grafana",
    name: "Grafana",
    category: "Observability",
    description: "Interactive operational visualization and dashboard platform.",
    usage: "Crafting real-time dashboards for CPU, memory, database query duration, and network bandwidth.",
    level: "advanced",
    icon: "chart",
    relatedProjects: ["observability"]
  },
  {
    id: "uptime-kuma",
    name: "Uptime Kuma",
    category: "Observability",
    description: "Self-hosted synthetic monitoring tool for blackbox endpoint availability testing.",
    usage: "Probing HTTP/TCP latency, SSL certificate expiry checks, and alerting upon degradation.",
    level: "primary",
    icon: "check-circle",
    relatedProjects: ["observability"]
  },

  // Infrastructure & Web Servers
  {
    id: "linux",
    name: "Linux (Debian / Ubuntu)",
    category: "Infrastructure",
    description: "Enterprise operating system platform for servers and container hosts.",
    usage: "Systemd service management, kernel tuning, security hardening, and storage administration.",
    level: "primary",
    icon: "server",
    relatedProjects: ["ion-core", "postgres-ha", "cicd-platform"]
  },
  {
    id: "nginx",
    name: "Nginx",
    category: "Infrastructure",
    description: "High-performance web server, reverse proxy, and TLS termination engine.",
    usage: "Load balancing, HTTP/2 configuration, rate limiting, and gzip compression.",
    level: "primary",
    icon: "globe",
    relatedProjects: ["ion-core", "cicd-platform"]
  },

  // Storage & Security
  {
    id: "s3-storage",
    name: "S3 / Object Storage",
    category: "Storage & Security",
    description: "Scalable S3-compatible storage solutions for backups, artifacts, and media assets.",
    usage: "Disaster recovery dumps, automated snapshot rotation, and multi-region mirroring.",
    level: "working",
    icon: "cloud",
    relatedProjects: ["object-storage"]
  },
  {
    id: "osv-scanner",
    name: "OSV Scanner & Security",
    category: "Storage & Security",
    description: "Dependency vulnerability scanner leveraging the Open Source Vulnerabilities database.",
    usage: "CI/CD automated vulnerability gating, SBOM auditing, and patch enforcement.",
    level: "working",
    icon: "lock",
    relatedProjects: ["cicd-platform"]
  }
];
