export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  highlights: string[];
  metrics?: ProjectMetric[];
  status: "live" | "operational" | "completed";
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "ion-core",
    slug: "ion-core-infrastructure",
    title: "ION Core Infrastructure",
    category: "Production Infrastructure",
    description: "Production containerized platform with Nginx reverse proxying, zero-downtime rolling deployments, and automated SSL lifecycle.",
    problem: "Manual deployment procedures caused configuration drift, intermittent downtime during service updates, and elevated operational overhead during maintenance.",
    solution: "Engineered a containerized multi-tier infrastructure using Docker and Nginx with health-checked rolling updates, standardized volume mounts, and automated Let's Encrypt TLS renewal.",
    architecture: [
      "Internet Traffic Ingress",
      "Nginx Reverse Proxy & TLS Termination",
      "Application Container Cluster",
      "Redis Caching Layer",
      "PostgreSQL Database & Persistent Volumes",
      "Node Exporter Telemetry Agent"
    ],
    technologies: ["Docker", "Nginx", "Linux", "PostgreSQL", "Prometheus", "Bash"],
    highlights: [
      "Zero-downtime rolling container deployments",
      "Automated SSL certificate lifecycle via ACME protocol",
      "Isolated container networks for security defense-in-depth"
    ],
    metrics: [
      { label: "Deployment Downtime", value: "0 sec" },
      { label: "System Availability", value: "99.98%" }
    ],
    status: "live",
    featured: true
  },
  {
    id: "postgres-ha",
    slug: "postgresql-ha-cluster",
    title: "PostgreSQL High Availability Cluster",
    category: "Database & HA",
    description: "3-node PostgreSQL high availability cluster featuring Patroni orchestration, etcd distributed consensus, and PgBouncer connection pooling.",
    problem: "Single point of failure on monolithic database instances introduced severe business risk of data corruption or extended downtime during hardware/network failures.",
    solution: "Built a production HA topology utilizing Patroni for leader election, etcd for Raft distributed consensus, streaming replication for data consistency, and PgBouncer for transaction-level pooling.",
    architecture: [
      "Application Connection Pool (PgBouncer)",
      "Patroni Leader Node (Read/Write)",
      "Synchronous & Asynchronous Standby Nodes (Read-Only)",
      "etcd 3-Node Distributed Consensus Cluster",
      "Automated WAL Archiving & Backup Engine"
    ],
    technologies: ["PostgreSQL", "Patroni", "etcd", "PgBouncer", "Linux", "WAL-G"],
    highlights: [
      "Automated sub-15 second failover with zero manual intervention",
      "Split-brain prevention guaranteed via quorum consensus",
      "Transaction connection pooling preventing connection exhaustion"
    ],
    metrics: [
      { label: "Failover RTO", value: "< 15s" },
      { label: "Data Loss RPO", value: "0 sec" }
    ],
    status: "operational",
    featured: true
  },
  {
    id: "cicd-platform",
    slug: "production-cicd-platform",
    title: "Automated CI/CD Delivery Pipeline",
    category: "CI/CD & DevOps",
    description: "Containerized deployment pipeline with automated static analysis, vulnerability scanning, image registry publishing, and gated rollbacks.",
    problem: "Developers relied on direct SSH access for deployments, resulting in untracked releases, unvalidated dependencies, and slow disaster recovery.",
    solution: "Implemented GitLab CI/CD runner pipelines executing automated linting, OSV dependency security scans, multi-stage Docker builds, and automated deployment scripts with instant rollback capability.",
    architecture: [
      "GitLab Version Control & Webhooks",
      "Isolated GitLab Runner Containers",
      "Container Registry Image Artifacts",
      "Vulnerability & Secret Scanning Gate",
      "SSH Deploy Key Orchestration to Production Hosts"
    ],
    technologies: ["GitLab CI/CD", "Docker", "OSV Scanner", "Bash", "Linux", "Nginx"],
    highlights: [
      "Immutable versioned container artifacts for every git tag",
      "Automated rollback triggered on post-deploy health check failure",
      "Removed developer SSH access requirement entirely"
    ],
    metrics: [
      { label: "Pipeline Duration", value: "< 4 min" },
      { label: "Vulnerability Gate", value: "100% Pass" }
    ],
    status: "operational",
    featured: true
  },
  {
    id: "observability",
    slug: "observability-monitoring-stack",
    title: "Observability & Monitoring Stack",
    category: "Monitoring & Observability",
    description: "Cluster-wide metrics collection and visualization platform with automated threshold alerts and synthetic uptime monitoring.",
    problem: "Operational visibility was reactive, resulting in slow incident detection and difficulty troubleshooting memory leaks or performance bottlenecks.",
    solution: "Deployed Prometheus for time-series metrics scraping from node_exporter and container engines, Grafana for dashboard visualizations, and Uptime Kuma for blackbox heartbeat telemetry.",
    architecture: [
      "Host Node Exporters & cAdvisor Metrics",
      "Prometheus Time-Series Database",
      "Alertmanager Notification Engine",
      "Grafana Operational Dashboards",
      "Uptime Kuma Synthetic Probes"
    ],
    technologies: ["Prometheus", "Grafana", "Alertmanager", "Uptime Kuma", "cAdvisor", "Linux"],
    highlights: [
      "Multi-channel instant alert notifications for anomalous resource usage",
      "Pre-configured dashboards tracking CPU, RAM, disk I/O, and network",
      "Automated blackbox probing with public status page integration"
    ],
    metrics: [
      { label: "Mean Time to Detect (MTTD)", value: "< 1 min" },
      { label: "Telemetry Retention", value: "30 Days" }
    ],
    status: "live",
    featured: false
  },
  {
    id: "object-storage",
    slug: "s3-storage-disaster-recovery",
    title: "Object Storage & Disaster Recovery",
    category: "Storage & Security",
    description: "S3-compatible distributed object storage and automated snapshot backup pipeline with encrypted remote synchronization.",
    problem: "Critical database dumps and media assets required predictable on-prem storage with cloud-standard S3 APIs and verifiable disaster recovery procedures.",
    solution: "Configured high-performance S3-compatible storage cluster with automated daily backup snapshot rotations, GPG encryption at rest, and periodic checksum verification.",
    architecture: [
      "Application S3 API Requests",
      "S3-Compatible Storage Gateway (RustFS/MinIO)",
      "Encrypted Local Block Storage",
      "Daily Automated Backup Snapshot Workers",
      "Remote Offsite Backup Mirror"
    ],
    technologies: ["RustFS / S3", "GPG", "Linux", "Cron", "Bash"],
    highlights: [
      "Standard S3 API compatibility for transparent application integration",
      "Automated lifecycle management purging expired ephemeral snapshots",
      "Cryptographically verified backup integrity drills"
    ],
    metrics: [
      { label: "Backup Integrity Check", value: "100%" },
      { label: "Disaster Recovery Drill", value: "Passed" }
    ],
    status: "operational",
    featured: false
  }
];
