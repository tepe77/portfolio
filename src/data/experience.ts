export interface Experience {
  id: string;
  period: string;
  role: string;
  category: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: "devops-infra",
    period: "2025 — PRESENT",
    role: "DevOps & Infrastructure Engineer",
    category: "High Availability & Platform Reliability",
    description: "Architecting and maintaining production infrastructure, automated CI/CD pipelines, and high-availability database clusters.",
    responsibilities: [
      "Engineered automated Patroni + etcd 3-node PostgreSQL cluster with sub-15s failover capability.",
      "Consolidated multi-environment container deployments with Docker Compose and Nginx reverse proxies.",
      "Configured automated GitLab CI/CD runner pipelines with vulnerability gate scans and automated rollback triggers.",
      "Implemented Prometheus and Grafana observability stack with multi-channel alerting for resource saturation."
    ],
    technologies: ["Docker", "PostgreSQL", "Patroni", "etcd", "GitLab CI/CD", "Nginx", "Prometheus", "Linux"]
  },
  {
    id: "infra-sysadmin",
    period: "2024 — 2025",
    role: "Infrastructure & Automation Specialist",
    category: "Containerization & Server Hardening",
    description: "Migrated legacy bare-metal and monolithic deployments into standardized containerized infrastructure.",
    responsibilities: [
      "Containerized multiple application runtimes with isolated networking and persistent block storage.",
      "Automated SSL/TLS certificate lifecycle management using Let's Encrypt and certbot automation scripts.",
      "Authored shell automation scripts for daily offsite encrypted database backups and health validations.",
      "Hardened Linux host security policies, firewall configurations (UFW/iptables), and SSH access controls."
    ],
    technologies: ["Linux (Debian/Ubuntu)", "Docker", "Bash", "Nginx", "Redis", "Uptime Kuma"]
  },
  {
    id: "software-backend",
    period: "2023 — 2024",
    role: "Backend & Systems Developer",
    category: "API & Database Architecture",
    description: "Developed core backend microservices and database query optimization for scalable web services.",
    responsibilities: [
      "Designed and maintained relational database schemas, indexes, and connection pooling optimizations.",
      "Built resilient RESTful API endpoints and background queue workers with Redis message broker.",
      "Collaborated on development environment parity using standardized Docker Compose configurations."
    ],
    technologies: ["PHP", "PostgreSQL", "Redis", "Git", "REST APIs", "Docker"]
  }
];
