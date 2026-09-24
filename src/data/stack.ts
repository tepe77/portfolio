export interface TechSpec {
  label: string;
  value: string;
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  domain: string;
  description: string;
  usage: string;
  level: "primary" | "advanced" | "working";
  icon: string;
  specs: TechSpec[];
  relatedProjects: string[];
}

export interface TechDomain {
  id: string;
  name: string;
  icon: string;
  technologies: string[]; // tech IDs
}

export const domainList: TechDomain[] = [
  {
    id: "infrastructure",
    name: "Infrastructure",
    icon: "server",
    technologies: ["linux", "proxmox", "openstack", "vmware", "nginx"]
  },
  {
    id: "containerization",
    name: "Containerization",
    icon: "layers",
    technologies: ["docker", "docker-compose", "container-registry", "kubernetes"]
  },
  {
    id: "ci-cd",
    name: "CI / CD",
    icon: "refresh",
    technologies: ["git", "gitlab-ci", "jenkins"]
  },
  {
    id: "observability",
    name: "Observability",
    icon: "chart",
    technologies: ["prometheus", "grafana", "uptime-kuma"]
  },
  {
    id: "data-storage",
    name: "Data & Storage",
    icon: "database",
    technologies: ["postgresql", "redis", "rustfs"]
  },
  {
    id: "security-tools",
    name: "Security & Tools",
    icon: "shield",
    technologies: ["vault", "terraform", "ansible"]
  }
];

export const stackData: Technology[] = [
  // 1. Infrastructure
  {
    id: "linux",
    name: "Linux",
    category: "Infrastructure",
    domain: "Infrastructure",
    description: "Enterprise operating system platform for servers, bare-metal nodes, and container runtimes.",
    usage: "Systemd service orchestration, kernel tuning, security hardening, storage partitioning, and firewalling.",
    level: "primary",
    icon: "server",
    specs: [
      { label: "Distro", value: "Debian / Ubuntu LTS" },
      { label: "Kernel", value: "Linux 6.x LTS" },
      { label: "Init", value: "systemd" },
      { label: "Hardening", value: "UFW / AppArmor / CIS" },
      { label: "Environment", value: "Bare Metal / Cloud" }
    ],
    relatedProjects: ["Self Audit Platform", "PostgreSQL HA Cluster"]
  },
  {
    id: "proxmox",
    name: "Proxmox",
    category: "Infrastructure",
    domain: "Infrastructure",
    description: "Type-1 hypervisor management platform unifying KVM virtualization and lightweight LXC containers.",
    usage: "Corosync high-availability clustering, software-defined storage, snapshotting, and VM lifecycle automation.",
    level: "primary",
    icon: "server",
    specs: [
      { label: "Hypervisor", value: "Proxmox VE 8.x" },
      { label: "Clustering", value: "Corosync Quorum" },
      { label: "Storage", value: "ZFS / Ceph Pools" },
      { label: "Containers", value: "LXC Unprivileged" },
      { label: "Environment", value: "Dedicated Compute Nodes" }
    ],
    relatedProjects: ["Living Platform", "Homelab Production Ops"]
  },
  {
    id: "openstack",
    name: "OpenStack",
    category: "Infrastructure",
    domain: "Infrastructure",
    description: "Open-source cloud operating system controlling large pools of compute, storage, and networking resources.",
    usage: "Private cloud multi-tenancy, software-defined networking with Neutron, and automated instance provisioning.",
    level: "advanced",
    icon: "cloud",
    specs: [
      { label: "Architecture", value: "Private Cloud IaaS" },
      { label: "Compute", value: "Nova KVM Hypervisors" },
      { label: "Network", value: "Neutron Open vSwitch" },
      { label: "Storage", value: "Cinder Block Storage" },
      { label: "Identity", value: "Keystone RBAC" }
    ],
    relatedProjects: ["Private Cloud Datacenter"]
  },
  {
    id: "vmware",
    name: "VMware",
    category: "Infrastructure",
    domain: "Infrastructure",
    description: "Enterprise virtualization platform for mission-critical workload isolation and datacenter compute pools.",
    usage: "vSphere ESXi clustering, vCenter centralized management, distributed switches, and vMotion migration.",
    level: "advanced",
    icon: "server",
    specs: [
      { label: "Hypervisor", value: "ESXi 7.0 / 8.0" },
      { label: "Control", value: "vCenter Server Appliance" },
      { label: "Networking", value: "vSphere Distributed Switch" },
      { label: "Availability", value: "vSphere HA & DRS" },
      { label: "Storage", value: "iSCSI / NFS Datastores" }
    ],
    relatedProjects: ["Enterprise Virtualization Cluster"]
  },
  {
    id: "nginx",
    name: "Nginx",
    category: "Infrastructure",
    domain: "Infrastructure",
    description: "High-performance edge reverse proxy, HTTP load balancer, and TLS termination gateway.",
    usage: "Handling edge SSL handshakes, websocket multiplexing, gzip compression, rate limiting, and upstream health.",
    level: "primary",
    icon: "globe",
    specs: [
      { label: "Role", value: "Reverse Proxy & TLS Gateway" },
      { label: "Protocols", value: "HTTP/2, WebSocket, gRPC" },
      { label: "Security", value: "Rate Limiting & Security Headers" },
      { label: "Balancing", value: "Least-Conn & Keepalive" },
      { label: "Deployment", value: "Automated Certbot Renewal" }
    ],
    relatedProjects: ["Self Audit Platform", "Living Platform"]
  },

  // 2. Containerization
  {
    id: "docker",
    name: "Docker",
    category: "Containerization",
    domain: "Containerization",
    description: "Used for building, shipping and running applications in isolated environments.",
    usage: "Multi-stage minimal image compilation, rootless container security, bind mounts, and container healthchecks.",
    level: "primary",
    icon: "docker",
    specs: [
      { label: "Runtime", value: "Docker Engine" },
      { label: "Compose", value: "Docker Compose" },
      { label: "Registry", value: "GitLab Container Registry" },
      { label: "Deployment", value: "Watchtower" },
      { label: "Environment", value: "Linux / VM" }
    ],
    relatedProjects: ["Self Audit Platform", "Living Platform"]
  },
  {
    id: "docker-compose",
    name: "Docker Compose",
    category: "Containerization",
    domain: "Containerization",
    description: "Declarative multi-container orchestration tool defining inter-service networks, volumes, and secrets.",
    usage: "Orchestrating microservice topologies, volume mount persistence, healthcheck loops, and restart policies.",
    level: "primary",
    icon: "layers",
    specs: [
      { label: "Format", value: "Compose Specification v3.8+" },
      { label: "Networking", value: "Isolated Bridge Subnets" },
      { label: "Volumes", value: "Named Persistent Volumes" },
      { label: "Healthcheck", value: "Active Health Probing" },
      { label: "Strategy", value: "Declarative Stack Deployments" }
    ],
    relatedProjects: ["Self Audit Platform", "Observability Stack"]
  },
  {
    id: "container-registry",
    name: "Container Registry",
    category: "Containerization",
    domain: "Containerization",
    description: "Private image repository storing OCI-compliant artifacts with automated vulnerability scanning.",
    usage: "Holding production container tags, pull-through caching, deploy token authentication, and image lifecycle pruning.",
    level: "primary",
    icon: "layers",
    specs: [
      { label: "Platform", value: "GitLab Registry & Harbor" },
      { label: "Scanning", value: "Automated CVE Vulnerability Gate" },
      { label: "Auth", value: "Deploy Tokens & CI Credentials" },
      { label: "Caching", value: "Local Proxy Cache Layer" },
      { label: "Pruning", value: "Automated Cleanup Policies" }
    ],
    relatedProjects: ["CI/CD Pipeline Automation"]
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "Containerization",
    domain: "Containerization",
    description: "Production-grade container orchestration system automating deployment, scaling, and operational resilience.",
    usage: "Declarative manifest deployment, Ingress controllers, ConfigMaps, persistent volume claims, and rolling updates.",
    level: "advanced",
    icon: "layers",
    specs: [
      { label: "Control Plane", value: "Kube-API, etcd, Kube-Controller" },
      { label: "Workloads", value: "Deployments, StatefulSets, DaemonSets" },
      { label: "Networking", value: "Flannel / Calico CNI" },
      { label: "Ingress", value: "Nginx Ingress Controller" },
      { label: "Storage", value: "CSI Volume Provisioner" }
    ],
    relatedProjects: ["Cloud Cluster Migration"]
  },

  // 3. CI / CD
  {
    id: "git",
    name: "Git",
    category: "CI / CD",
    domain: "CI / CD",
    description: "Distributed version control system maintaining the single source of truth for all infrastructure code.",
    usage: "Trunk-based development, atomic commits, GitFlow branching, signed tags, and pre-commit hook linting.",
    level: "primary",
    icon: "git",
    specs: [
      { label: "Paradigm", value: "Distributed Version Control" },
      { label: "Workflows", value: "GitFlow & Trunk-Based" },
      { label: "Signing", value: "GPG Verified Commits" },
      { label: "Hooks", value: "Pre-commit Lint & Syntax Checks" },
      { label: "Lineage", value: "Complete Audit Trail" }
    ],
    relatedProjects: ["Self Audit Platform", "Infrastructure as Code"]
  },
  {
    id: "gitlab-ci",
    name: "GitLab CI/CD",
    category: "CI / CD",
    domain: "CI / CD",
    description: "Automated continuous integration and continuous deployment engine running containerized jobs.",
    usage: "Multi-stage pipeline definition, Docker-in-Docker runners, build caching, secret masking, and release tags.",
    level: "primary",
    icon: "refresh",
    specs: [
      { label: "Runners", value: "Dedicated Docker & Shell Runners" },
      { label: "Pipelines", value: "Multi-Stage YAML Spec" },
      { label: "Artifacts", value: "Short-lived Build Artifacts & Cache" },
      { label: "Secrets", value: "Masked & Protected CI Variables" },
      { label: "Trigger", value: "Tag Push & Webhook Automation" }
    ],
    relatedProjects: ["CI/CD Pipeline Automation", "Self Audit Platform"]
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: "CI / CD",
    domain: "CI / CD",
    description: "Extensible automation server driving scheduled tasks, legacy deployment builds, and pipeline integrations.",
    usage: "Declarative Jenkinsfiles, dynamic agent spin-up, parameter-driven deployment runs, and webhook notifications.",
    level: "advanced",
    icon: "refresh",
    specs: [
      { label: "Engine", value: "Declarative Jenkinsfile Pipeline" },
      { label: "Agents", value: "Dynamic Container Nodes" },
      { label: "Security", value: "Credential Store & RBAC" },
      { label: "Integration", value: "Git SCM & Webhook Triggers" },
      { label: "Notification", value: "Slack / Email Post-Build Alerts" }
    ],
    relatedProjects: ["Legacy Enterprise Automation"]
  },

  // 4. Observability
  {
    id: "prometheus",
    name: "Prometheus",
    category: "Observability",
    domain: "Observability",
    description: "Time-series monitoring and alerting toolkit with dimensional metrics scraping and powerful PromQL queries.",
    usage: "Scraping node exporters, database exporters, cadvisor metrics, alert evaluation, and rule threshold firing.",
    level: "primary",
    icon: "activity",
    specs: [
      { label: "Collector", value: "Pull-based Metric Scraping" },
      { label: "Queries", value: "PromQL Dimensional Queries" },
      { label: "Alerting", value: "Alertmanager Threshold Routing" },
      { label: "Storage", value: "TSDB Local Chunks & Compaction" },
      { label: "Exporters", value: "Node, Postgres, Blackbox Exporters" }
    ],
    relatedProjects: ["Observability & Monitoring Stack"]
  },
  {
    id: "grafana",
    name: "Grafana",
    category: "Observability",
    domain: "Observability",
    description: "Interactive observability dashboard and visualization platform aggregating multi-cluster metrics.",
    usage: "Real-time compute saturation dashboards, query latency graphs, network throughput charts, and alert panels.",
    level: "primary",
    icon: "chart",
    specs: [
      { label: "Role", value: "Centralized Metric Visualizer" },
      { label: "Data Sources", value: "Prometheus, Loki, PostgreSQL" },
      { label: "Alerting", value: "Unified Alerting & Webhooks" },
      { label: "Access", value: "Organization RBAC & Read-only Views" },
      { label: "Dashboards", value: "Version-Controlled JSON Models" }
    ],
    relatedProjects: ["Observability & Monitoring Stack"]
  },
  {
    id: "uptime-kuma",
    name: "Uptime Kuma",
    category: "Observability",
    domain: "Observability",
    description: "Self-hosted synthetic monitoring tool for blackbox availability probing and public status distribution.",
    usage: "Probing HTTP endpoint response codes, SSL certificate expiration countdowns, and ping latency thresholds.",
    level: "primary",
    icon: "check-circle",
    specs: [
      { label: "Type", value: "Synthetic Blackbox Prober" },
      { label: "Protocols", value: "HTTP(s), TCP Ping, DNS, SSL" },
      { label: "Interval", value: "30-Second Polling Frequency" },
      { label: "SSL Monitor", value: "Certificate Expiration Alerting" },
      { label: "Status Page", value: "Public Status Page Generation" }
    ],
    relatedProjects: ["Observability & Monitoring Stack"]
  },

  // 5. Data & Storage
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Data & Storage",
    domain: "Data & Storage",
    description: "Advanced open-source relational database built for strict ACID compliance and high-throughput durability.",
    usage: "Primary-replica streaming replication, WAL archiving, schema optimization, connection pooling, and PITR backup.",
    level: "primary",
    icon: "database",
    specs: [
      { label: "Version", value: "PostgreSQL 15 / 16" },
      { label: "Replication", value: "Streaming WAL Physical Replication" },
      { label: "Clustering", value: "Patroni Automated Leader Election" },
      { label: "Pooling", value: "PgBouncer Transaction Pooling" },
      { label: "Recovery", value: "Continuous WAL Archiving & PITR" }
    ],
    relatedProjects: ["PostgreSQL HA Cluster", "Self Audit Platform"]
  },
  {
    id: "redis",
    name: "Redis",
    category: "Data & Storage",
    domain: "Data & Storage",
    description: "In-memory key-value data store used as a high-speed caching tier, session broker, and ephemeral queue.",
    usage: "Database query caching, session persistence, API rate limit counters, and pub/sub message brokering.",
    level: "advanced",
    icon: "database",
    specs: [
      { label: "Engine", value: "In-Memory Key-Value Store" },
      { label: "Eviction", value: "volatile-lru Memory Policy" },
      { label: "Persistence", value: "RDB Snapshots & Append-Only File" },
      { label: "Latency", value: "Sub-Millisecond Query Response" },
      { label: "Use Case", value: "Cache, Session Broker & Queue" }
    ],
    relatedProjects: ["Self Audit Platform", "Living Platform"]
  },
  {
    id: "rustfs",
    name: "RustFS",
    category: "Data & Storage",
    domain: "Data & Storage",
    description: "High-performance object storage daemon written in memory-safe Rust with S3 API compatibility.",
    usage: "Storing backup archives, container assets, database snapshots, and persistent object blobs.",
    level: "working",
    icon: "cloud",
    specs: [
      { label: "Core", value: "Rust Memory-Safe Backend" },
      { label: "Compatibility", value: "Amazon S3 REST API Protocol" },
      { label: "Redundancy", value: "Erasure Coding Storage Pools" },
      { label: "Access", value: "Signed HMAC-SHA256 URL Tokens" },
      { label: "Target", value: "Disaster Recovery & Image Blobs" }
    ],
    relatedProjects: ["Object Storage & Backup Vault"]
  },

  // 6. Security & Tools
  {
    id: "vault",
    name: "Vault",
    category: "Security & Tools",
    domain: "Security & Tools",
    description: "Identity-based secrets management platform for securely storing tokens, passwords, and TLS certificates.",
    usage: "Dynamic database credentials, encrypted key-value storage, automated token renewal, and TLS PKI generation.",
    level: "advanced",
    icon: "lock",
    specs: [
      { label: "Engine", value: "HashiCorp Vault KV v2 & PKI" },
      { label: "Storage", value: "Encrypted Raft Consensus Storage" },
      { label: "Auth", value: "AppRole & CI Pipeline Tokens" },
      { label: "Auditing", value: "Encrypted Real-Time Audit Trails" },
      { label: "Encryption", value: "Transit Secrets Encryption Engine" }
    ],
    relatedProjects: ["CI/CD Pipeline Automation"]
  },
  {
    id: "terraform",
    name: "Terraform",
    category: "Security & Tools",
    domain: "Security & Tools",
    description: "Declarative Infrastructure as Code (IaC) tool for provisioning servers, networks, and cloud resources.",
    usage: "Managing Proxmox VM lifecycle, cloud firewall rules, reproducible staging clusters, and state file locking.",
    level: "advanced",
    icon: "layers",
    specs: [
      { label: "Paradigm", value: "Declarative Infrastructure as Code" },
      { label: "State", value: "Remote S3 State with DynamoDB Locking" },
      { label: "Providers", value: "Proxmox, Cloudflare, AWS" },
      { label: "Modules", value: "Reusable Modular Cluster Blocks" },
      { label: "Workflow", value: "Plan-to-Apply Automation Gates" }
    ],
    relatedProjects: ["Infrastructure as Code"]
  },
  {
    id: "ansible",
    name: "Ansible",
    category: "Security & Tools",
    domain: "Security & Tools",
    description: "Agentless IT configuration management and system automation engine orchestrating over OpenSSH.",
    usage: "Linux OS baseline hardening, package installation, user account provisioning, and config file templating.",
    level: "primary",
    icon: "terminal",
    specs: [
      { label: "Protocol", value: "Agentless OpenSSH Transport" },
      { label: "Language", value: "YAML Playbooks & Jinja2 Templates" },
      { label: "Execution", value: "Idempotent State Enforcement" },
      { label: "Inventory", value: "Dynamic Production & Staging Hosts" },
      { label: "Roles", value: "CIS Benchmark Security Hardening" }
    ],
    relatedProjects: ["Automated Server Hardening"]
  }
];
