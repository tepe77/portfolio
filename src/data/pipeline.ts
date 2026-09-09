// Data models & realistic production scenarios for CI/CD Pipeline & Config Inspector

export interface PipelineStage {
  id: string;
  name: string;
  category: string;
  runner: string;
  duration: string;
  command: string;
  description: string;
  logs: {
    green: string[];
    cveBlocked?: string[];
    canary?: string[];
  };
}

export interface PipelineScenario {
  id: 'green' | 'cve-blocked' | 'canary';
  name: string;
  tagline: string;
  badge: string;
  badgeType: 'success' | 'danger' | 'warning';
  summary: string;
  stagesResult: Record<string, 'passed' | 'failed' | 'running' | 'skipped'>;
}

export const pipelineStages: PipelineStage[] = [
  {
    id: "lint",
    name: "01 // LINT & AUDIT",
    category: "STATIC ANALYSIS",
    runner: "gitlab-runner-saas-linux-medium-amd64",
    duration: "4.2s",
    command: "shellcheck scripts/*.sh && yamllint .gitlab-ci.yml",
    description: "Static syntax analysis, POSIX shell standards audit, and YAML linting.",
    logs: {
      green: [
        "$ shellcheck scripts/*.sh --severity=style",
        "Checked 14 shell automation scripts. Zero style violations.",
        "$ yamllint -c .yamllint.yml .gitlab-ci.yml infra/",
        "Validating 8 configuration manifests...",
        "0 errors, 0 warnings. Linter checks passed successfully."
      ],
      cveBlocked: [
        "$ shellcheck scripts/*.sh --severity=style",
        "Checked 14 shell automation scripts. Clean.",
        "$ yamllint -c .yamllint.yml .gitlab-ci.yml infra/",
        "Validating configuration manifests...",
        "0 errors, 0 warnings. Lint check passed."
      ],
      canary: [
        "$ shellcheck scripts/*.sh --severity=style",
        "Validating release automation scripts... PASSED.",
        "$ yamllint -c .yamllint.yml .gitlab-ci.yml infra/",
        "0 errors, 0 warnings. Manifests clean."
      ]
    }
  },
  {
    id: "test",
    name: "02 // UNIT & TEST",
    category: "AUTOMATED SUITE",
    runner: "gitlab-runner-docker-shared",
    duration: "8.5s",
    command: "go test -v -race -covermode=atomic ./...",
    description: "Concurrent unit test execution with race condition detection and coverage calculation.",
    logs: {
      green: [
        "$ go test -v -race -coverprofile=coverage.txt ./...",
        "=== RUN   TestClusterLeaderElection",
        "--- PASS: TestClusterLeaderElection (0.18s)",
        "=== RUN   TestPostgreSqlFailoverRecovery",
        "--- PASS: TestPostgreSqlFailoverRecovery (0.34s)",
        "=== RUN   TestPgBouncerConnectionPoolExhaustion",
        "--- PASS: TestPgBouncerConnectionPoolExhaustion (0.12s)",
        "PASS",
        "coverage: 94.2% of statements",
        "Artifact uploaded: coverage.txt (stored for 30 days)"
      ],
      cveBlocked: [
        "$ go test -v -race ./...",
        "=== RUN   TestClusterLeaderElection",
        "--- PASS: TestClusterLeaderElection (0.15s)",
        "PASS",
        "coverage: 93.8% of statements. Tests passed."
      ],
      canary: [
        "$ go test -v -race -cover ./...",
        "Executing canary baseline verification suite...",
        "142/142 tests passed. 0 regressions detected."
      ]
    }
  },
  {
    id: "build",
    name: "03 // DOCKER BUILD",
    category: "CONTAINERIZATION",
    runner: "docker-in-docker-dind-dedicated",
    duration: "14.1s",
    command: "docker buildx build --cache-from=type=registry --push ...",
    description: "Multi-stage Dockerfile build utilizing remote registry layer caching for minimal image size.",
    logs: {
      green: [
        "$ docker buildx build --platform linux/amd64 -t registry.prasaswo.dev/app:v2.4.1 --push .",
        "[+] Building 14.1s (12/12) FINISHED",
        " => [internal] load build definition from Dockerfile",
        " => => transferring dockerfile: 1.2kB",
        " => [stage-0 2/5] RUN apk add --no-cache ca-certificates tzdata",
        " => => CACHED [layer sha256:4a81...]",
        " => [stage-1 3/3] COPY --from=builder /app/server /usr/local/bin/",
        " => exporting to image: registry.prasaswo.dev/app:v2.4.1",
        " => pushing layers sha256:7b29... 100%",
        "Image digest: sha256:f8e91a0c4921b0dc38a8e994",
        "Image size: 18.4 MB (Alpine scratch base)"
      ],
      cveBlocked: [
        "$ docker buildx build -t registry.prasaswo.dev/app:v2.4.2-staging --push .",
        "[+] Building 12.8s (12/12) FINISHED",
        " => exporting to image: registry.prasaswo.dev/app:v2.4.2-staging",
        "Image digest: sha256:e1a90c4921a998b31",
        "Image size: 21.2 MB"
      ],
      canary: [
        "$ docker buildx build --cache-from=type=registry -t registry.prasaswo.dev/app:v2.4.1-canary .",
        "Using remote buildkit cache. Build completed in 6.4s.",
        "Pushed image digest: sha256:a1239c8e4f5..."
      ]
    }
  },
  {
    id: "security",
    name: "04 // DEVSECOPS",
    category: "VULNERABILITY SCAN",
    runner: "trivy-scanner-node-01",
    duration: "6.2s",
    command: "trivy image --severity HIGH,CRITICAL --exit-code 1 ...",
    description: "Container CVE scan, embedded secret check, and SBOM generation using Trivy.",
    logs: {
      green: [
        "$ trivy image --severity HIGH,CRITICAL --exit-code 1 registry.prasaswo.dev/app:v2.4.1",
        "2026-09-09T08:14:02Z INFO Need to update DB",
        "2026-09-09T08:14:04Z INFO Vulnerability DB up-to-date",
        "registry.prasaswo.dev/app:v2.4.1 (alpine 3.20.1)",
        "================================================",
        "Total: 0 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0)",
        "✔ Secret Detection: Zero unmasked credentials found.",
        "✔ Trivy scan passed. Container image verified for production deployment."
      ],
      cveBlocked: [
        "$ trivy image --severity HIGH,CRITICAL --exit-code 1 registry.prasaswo.dev/app:v2.4.2-staging",
        "2026-09-09T08:14:04Z INFO Scanning image layers...",
        "registry.prasaswo.dev/app:v2.4.2-staging (alpine 3.19.0)",
        "=======================================================",
        "CRITICAL: CVE-2024-28182 (libxml2 buffer overflow)",
        "  Installed Version: 2.11.4-r0",
        "  Fixed Version:     2.11.5-r0",
        "  Severity:          CRITICAL [CVSS 9.8]",
        "",
        "✖ [ERROR] Automated DevSecOps policy violation detected!",
        "✖ Pipeline execution HALTED. Deployment to production blocked.",
        "✖ Remediation: Upgrade base Alpine image to >= 3.20 or patch libxml2."
      ],
      canary: [
        "$ trivy image --severity HIGH,CRITICAL --exit-code 1 registry.prasaswo.dev/app:v2.4.1-canary",
        "Total: 0 vulnerabilities found. Image signature verified with Cosign.",
        "DevSecOps gate approved."
      ]
    }
  },
  {
    id: "deploy",
    name: "05 // CLUSTER DEPLOY",
    category: "ORCHESTRATION",
    runner: "bastion-deployer-runner-private",
    duration: "9.8s",
    command: "docker stack deploy --with-registry-auth -c compose.prod.yml",
    description: "Zero-downtime rolling update with live container healthcheck verification.",
    logs: {
      green: [
        "$ ssh deployer@10.244.0.10 'docker stack deploy -c /infra/compose.prod.yml ion_core'",
        "Updating service ion_core_app (image: registry.prasaswo.dev/app:v2.4.1)",
        "Rolling update in progress: 1/2 replicas updated...",
        "Healthcheck probe on container [ion_core_app.1]: HTTP 200 OK (latency: 1.4ms)",
        "Rolling update in progress: 2/2 replicas updated...",
        "Healthcheck probe on container [ion_core_app.2]: HTTP 200 OK (latency: 1.2ms)",
        "Synchronized with Nginx ingress upstream pool.",
        "● Status: PRODUCTION ROLLOUT COMPLETED (Zero downtime, 0 dropped conns)."
      ],
      cveBlocked: [
        "[JOB SKIPPED] Triggered automatically by upstream failure in '04 // DEVSECOPS'.",
        "Safety lock engaged. Production servers left running untouched on safe v2.4.1."
      ],
      canary: [
        "$ ./scripts/canary-shift.sh --traffic=10% -> 50% -> 100%",
        "Routing 10% production ingress to canary container...",
        "Error rate: 0.00% | Latency P99: 14.2ms. Metrics healthy.",
        "Routing 50% traffic... Metrics healthy.",
        "Promoting canary to 100% full production traffic.",
        "Deployment completed."
      ]
    }
  }
];

export const pipelineScenarios: Record<'green' | 'cve-blocked' | 'canary', PipelineScenario> = {
  green: {
    id: 'green',
    name: 'STANDARD GREEN RELEASE',
    tagline: 'Flawless CI/CD flow from code push to 100% production rollout.',
    badge: '100% PASS',
    badgeType: 'success',
    summary: 'All 5 stages pass automated tests, linting, caching, and vulnerability scans with zero errors.',
    stagesResult: {
      lint: 'passed',
      test: 'passed',
      build: 'passed',
      security: 'passed',
      deploy: 'passed'
    }
  },
  'cve-blocked': {
    id: 'cve-blocked',
    name: 'DEVSECOPS CVE GATE BLOCKED',
    tagline: 'Automated vulnerability gate halts pipeline upon detecting critical CVE.',
    badge: 'GATE BLOCKED',
    badgeType: 'danger',
    summary: 'Trivy catches CVSS 9.8 critical vulnerability in staging image. Halts rollout, protects production.',
    stagesResult: {
      lint: 'passed',
      test: 'passed',
      build: 'passed',
      security: 'failed',
      deploy: 'skipped'
    }
  },
  canary: {
    id: 'canary',
    name: 'PROGRESSIVE CANARY ROLLOUT',
    tagline: 'Zero-downtime rolling update with 10% -> 50% -> 100% telemetry verification.',
    badge: 'CANARY VERIFIED',
    badgeType: 'warning',
    summary: 'Deploys incremental canary instances, monitors Prometheus error rates, and shifts live traffic smoothly.',
    stagesResult: {
      lint: 'passed',
      test: 'passed',
      build: 'passed',
      security: 'passed',
      deploy: 'passed'
    }
  }
};

export interface ProductionConfigSnippet {
  id: string;
  filename: string;
  language: string;
  title: string;
  badge: string;
  description: string;
  code: string;
  annotations: {
    line: number;
    title: string;
    explanation: string;
  }[];
}

export const productionConfigs: ProductionConfigSnippet[] = [
  {
    id: 'gitlab-ci',
    filename: '.gitlab-ci.yml',
    language: 'yaml',
    title: 'GitLab CI/CD Multi-Stage Pipeline',
    badge: 'PIPELINE AS CODE',
    description: 'Enterprise multi-stage delivery pipeline featuring remote Docker layer caching, automated Trivy container security gates, and zero-downtime rolling deployment.',
    code: `stages:
  - lint
  - test
  - build
  - security
  - deploy

variables:
  DOCKER_DRIVER: overlay2
  DOCKER_BUILDKIT: "1"
  IMAGE_TAG: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA

.docker_login: &docker_login
  before_script:
    - echo "$CI_REGISTRY_PASSWORD" | docker login $CI_REGISTRY -u $CI_REGISTRY_USER --password-stdin

lint:yaml:
  stage: lint
  image: cytopia/yamllint:latest
  script:
    - yamllint -c .yamllint.yml .gitlab-ci.yml infra/

build:docker:
  stage: build
  image: docker:26-dind
  services:
    - docker:26-dind
  <<: *docker_login
  script:
    - docker buildx create --use
    - docker buildx build
        --cache-from=type=registry,ref=$CI_REGISTRY_IMAGE:cache
        --cache-to=type=registry,ref=$CI_REGISTRY_IMAGE:cache,mode=max
        -t $IMAGE_TAG --push .

trivy:scan:
  stage: security
  image: aquasec/trivy:latest
  script:
    - trivy image --severity HIGH,CRITICAL --exit-code 1 $IMAGE_TAG
  allow_failure: false

deploy:production:
  stage: deploy
  environment: production
  script:
    - ssh deployer@$BASTION_HOST "docker stack deploy --with-registry-auth -c compose.prod.yml ion_core"
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'`,
    annotations: [
      {
        line: 10,
        title: "Docker BuildKit Enabled",
        explanation: "Enables parallel multi-stage building and secret mount injection without baking credentials into container layers."
      },
      {
        line: 28,
        title: "Remote Layer Caching",
        explanation: "Pushes and pulls cached layers from the remote container registry, reducing average build times from 4 minutes down to 14 seconds."
      },
      {
        line: 36,
        title: "Automated Exit Code 1 on CVE",
        explanation: "Strict DevSecOps gate. Halts the pipeline immediately if any HIGH or CRITICAL severity vulnerability is identified."
      }
    ]
  },
  {
    id: 'patroni',
    filename: 'patroni.yml',
    language: 'yaml',
    title: 'Patroni 3-Node PostgreSQL HA Cluster DCS Config',
    badge: 'HIGH AVAILABILITY',
    description: 'Raft-backed PostgreSQL cluster configuration utilizing etcd for distributed locking, synchronous replication enforcement, and sub-15s failover.',
    code: `scope: postgres-ha-cluster
namespace: /service
name: patroni-node-01

etcd3:
  hosts:
    - 10.244.3.50:2379
    - 10.244.3.51:2379
    - 10.244.3.52:2379

restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.244.3.11:8008

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    synchronous_mode: true
    synchronous_mode_strict: false
    postgresql:
      use_pg_rewind: true
      parameters:
        max_connections: 500
        shared_buffers: 2GB
        wal_level: replica
        max_wal_senders: 10
        wal_keep_size: 1024MB
        archive_mode: "on"
        archive_command: "wal-g wal-push %p"

postgresql:
  listen: 0.0.0.0:5432
  connect_address: 10.244.3.11:5432
  data_dir: /var/lib/postgresql/data/pgdata
  bin_dir: /usr/lib/postgresql/16/bin
  pgpass: /var/lib/postgresql/.pgpass`,
    annotations: [
      {
        line: 16,
        title: "DCS Heartbeat TTL (30s)",
        explanation: "Configures lease expiration timing. If primary node misses heartbeats for 30s, etcd triggers automatic Raft failover."
      },
      {
        line: 20,
        title: "Synchronous Replication Mode",
        explanation: "Guarantees RPO = 0. Commits are not acknowledged until flushed to disk on at least one standby replica."
      },
      {
        line: 23,
        title: "pg_rewind Enabled",
        explanation: "Enables automatic reintegration of old master nodes into the cluster as standbys without manual base backup restoration."
      }
    ]
  },
  {
    id: 'compose',
    filename: 'compose.prod.yml',
    language: 'yaml',
    title: 'Docker Swarm Production Stack Manifest',
    badge: 'CONTAINER SPEC',
    description: 'Production container stack definition with isolated overlay networking, resource constraints, health probes, and rolling update policies.',
    code: `version: "3.8"

services:
  app:
    image: registry.prasaswo.dev/app:v2.4.1
    deploy:
      replicas: 2
      update_config:
        parallelism: 1
        delay: 10s
        order: start-first
        failure_action: rollback
      restart_policy:
        condition: on-failure
        max_attempts: 3
      resources:
        limits:
          cpus: "1.5"
          memory: 2048M
        reservations:
          cpus: "0.5"
          memory: 512M
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/healthz"]
      interval: 10s
      timeout: 3s
      retries: 3
      start_period: 15s
    networks:
      - backend_mesh
    logging:
      driver: "json-file"
      options:
        max-size: "50m"
        max-file: "5"

networks:
  backend_mesh:
    external: true`,
    annotations: [
      {
        line: 10,
        title: "start-first Rolling Update",
        explanation: "Spins up new healthy container instances before draining old instances, ensuring zero dropped HTTP requests during deployments."
      },
      {
        line: 17,
        title: "Hard Memory & CPU Quotas",
        explanation: "Prevents noisy-neighbor memory exhaustion and Out-Of-Memory (OOM) kernel panics from taking down adjacent worker nodes."
      },
      {
        line: 23,
        title: "Active Healthcheck Probes",
        explanation: "Swarm load balancer automatically reroutes traffic away from any container instance failing its /healthz endpoint."
      }
    ]
  },
  {
    id: 'nginx',
    filename: 'nginx.conf',
    language: 'nginx',
    title: 'Hardened Reverse Proxy & TLS 1.3 Ingress',
    badge: 'SECURITY & GATEWAY',
    description: 'High-performance Nginx ingress gateway featuring HTTP/2, TLS 1.3 cryptographic hardening, upstream keepalives, and aggressive rate limiting.',
    code: `upstream app_cluster {
    zone app_cluster 64k;
    server 10.244.1.21:8080 max_fails=3 fail_timeout=10s;
    server 10.244.1.22:8080 max_fails=3 fail_timeout=10s;
    keepalive 32;
}

limit_req_zone $binary_remote_addr zone=api_limit:10m rate=50r/s;

server {
    listen 443 ssl http2;
    server_name prasaswo.dev *.prasaswo.dev;

    ssl_certificate /etc/letsencrypt/live/prasaswo.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/prasaswo.dev/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 1d;

    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    location / {
        limit_req zone=api_limit burst=20 nodelay;

        proxy_pass http://app_cluster;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_connect_timeout 5s;
        proxy_read_timeout 60s;
    }
}`,
    annotations: [
      {
        line: 5,
        title: "Upstream Keepalive (32 conns)",
        explanation: "Maintains open TCP sockets to container backends, eliminating repeated TCP three-way handshakes and TLS overhead."
      },
      {
        line: 8,
        title: "10MB Binary Remote IP Rate-Limit",
        explanation: "Protects application endpoints from burst DDoS and brute-force spikes, limited to 50 requests/second per IP."
      },
      {
        line: 24,
        title: "HSTS Header (max-age 1 Year)",
        explanation: "Enforces HTTPS encryption on all connecting browsers, preventing SSL-stripping and man-in-the-middle attacks."
      }
    ]
  }
];
