// Comprehensive Interactive Infrastructure Topology Controller
export interface TopologyNodeData {
  id: string;
  name: string;
  category: string;
  port: string;
  subnet: string;
  status: 'healthy' | 'operational' | 'active' | 'standby';
  description: string;
  architecture: string;
  telemetry: {
    latency: string;
    connections: string;
    throughput: string;
    lag?: string;
  };
  techDetails: string[];
  connections: string[];
  group: 'ingress' | 'compute' | 'database' | 'observability' | 'storage';
}

export const topologyData: Record<string, TopologyNodeData> = {
  internet: {
    id: "internet",
    name: "Edge CDN & DNS Anycast",
    category: "Ingress Layer",
    port: ":443 / :80 HTTPS",
    subnet: "172.64.0.0/13 (Edge)",
    status: "operational",
    description: "Global HTTP/3 traffic ingress passing through Cloudflare edge proxy, DDoS mitigation, anycast routing, and SSL termination.",
    architecture: "Cloudflare Edge • TLS 1.3 • Web Application Firewall",
    telemetry: {
      latency: "12ms",
      connections: "4,820 active",
      throughput: "14.2 MB/s"
    },
    techDetails: ["Cloudflare Edge", "Anycast DNS", "WAF Filtering", "HSTS Preload", "HTTP/3 QUIC"],
    connections: ["nginx"],
    group: "ingress"
  },
  nginx: {
    id: "nginx",
    name: "Nginx Ingress Reverse Proxy",
    category: "Gateway Layer",
    port: ":443 TLS / :80 HTTP",
    subnet: "10.244.0.10/24 (DMZ)",
    status: "operational",
    description: "Reverse proxy terminating TLS certificates via Let's Encrypt, enforcing rate limits, gzip compression, and round-robin load balancing.",
    architecture: "Nginx Ingress • Let's Encrypt ACME Auto-Renewal • Upstream Keepalive",
    telemetry: {
      latency: "0.8ms",
      connections: "1,240 pool",
      throughput: "8.6 MB/s"
    },
    techDetails: ["HTTP/2 Support", "Upstream Health Checks", "SSL Ciphers A+", "Real-IP Forwarding", "Gzip / Brotli"],
    connections: ["app-01", "app-02"],
    group: "ingress"
  },
  "app-01": {
    id: "app-01",
    name: "App Node 01 (Docker Swarm)",
    category: "Compute & Services",
    port: ":8080 TCP",
    subnet: "10.244.1.21/24 (App)",
    status: "healthy",
    description: "Primary application container instance handling active web requests, business logic, and database query transactions.",
    architecture: "Docker Swarm Worker • Overlay Mesh • Healthcheck Probes",
    telemetry: {
      latency: "2.4ms",
      connections: "215 conn",
      throughput: "450 req/s"
    },
    techDetails: ["Zero-Downtime Rollouts", "Resource Quotas (1 CPU, 2GB)", "Read-only Root FS", "Internal Overlay DNS"],
    connections: ["pgbouncer", "redis", "prometheus"],
    group: "compute"
  },
  "app-02": {
    id: "app-02",
    name: "App Node 02 (Docker Swarm)",
    category: "Compute & Services",
    port: ":8080 TCP",
    subnet: "10.244.1.22/24 (App)",
    status: "healthy",
    description: "Secondary application container replica providing horizontal scalability and seamless rolling restart capability.",
    architecture: "Docker Swarm Worker • Overlay Mesh • Healthcheck Probes",
    telemetry: {
      latency: "2.6ms",
      connections: "198 conn",
      throughput: "420 req/s"
    },
    techDetails: ["High Availability Redundancy", "Auto-Heal on SIGKILL", "Shared Overlay Network", "Ephemeral State"],
    connections: ["pgbouncer", "redis", "prometheus"],
    group: "compute"
  },
  redis: {
    id: "redis",
    name: "Redis In-Memory Broker & Cache",
    category: "Caching Layer",
    port: ":6379 TCP",
    subnet: "10.244.2.15/24 (Data)",
    status: "healthy",
    description: "Low-latency in-memory data store managing distributed user sessions, API response caching, and worker queue messages.",
    architecture: "Redis 7 • AOF Persistence • Volatile-LRU Eviction",
    telemetry: {
      latency: "0.2ms",
      connections: "85 active",
      throughput: "2.1k ops/s"
    },
    techDetails: ["Sub-millisecond Latency", "AOF Disk Sync", "Maxmemory 1.5GB", "Redis Sentinel Ready"],
    connections: ["app-01", "app-02"],
    group: "compute"
  },
  pgbouncer: {
    id: "pgbouncer",
    name: "PgBouncer Connection Pooler",
    category: "Database Gateway",
    port: ":6432 TCP",
    subnet: "10.244.2.10/24 (Data)",
    status: "healthy",
    description: "Transaction-level connection pooler fronting the PostgreSQL cluster, preventing backend connection exhaustion under surge load.",
    architecture: "Transaction-Level Pooling • Low Overhead Daemon",
    telemetry: {
      latency: "0.4ms",
      connections: "480 client / 25 server",
      throughput: "890 qps"
    },
    techDetails: ["Max 1000 Client Conns", "Auto-Retry on Failover", "TLS Connection to DB", "Zero Memory Overhead"],
    connections: ["patroni-01"],
    group: "database"
  },
  "patroni-01": {
    id: "patroni-01",
    name: "Patroni Leader Node (RW Master)",
    category: "Database HA Cluster",
    port: ":5432 PG / :8008 Patroni",
    subnet: "10.244.3.11/24 (DB-HA)",
    status: "healthy",
    description: "Primary PostgreSQL leader node accepting all read/write transactions and maintaining continuous synchronous WAL streaming.",
    architecture: "PostgreSQL 16 • Patroni DCS Leader • Synchronous WAL Streaming",
    telemetry: {
      latency: "0.7ms",
      connections: "25 backend",
      throughput: "750 tx/s",
      lag: "0 bytes (Leader)"
    },
    techDetails: ["Leader Lock via etcd", "Synchronous Replication Mode", "Continuous WAL Archiving", "Automatic Failover Support"],
    connections: ["patroni-02", "patroni-03", "etcd-dcs", "object-storage", "prometheus"],
    group: "database"
  },
  "patroni-02": {
    id: "patroni-02",
    name: "Patroni Standby Node 01 (Sync RO)",
    category: "Database HA Cluster",
    port: ":5432 PG / :8008 Patroni",
    subnet: "10.244.3.12/24 (DB-HA)",
    status: "standby",
    description: "Synchronous standby replica maintaining zero-lag streaming replication, eligible for instant sub-15s promotion upon primary failure.",
    architecture: "PostgreSQL 16 • Patroni Standby • Synchronous Replication",
    telemetry: {
      latency: "0.9ms",
      connections: "10 read-only",
      throughput: "240 tx/s",
      lag: "0 bytes (Sync)"
    },
    techDetails: ["Hot Standby Active", "Zero RPO Guarantee", "Health Checked via DCS", "Automatic Promotion Candidate"],
    connections: ["patroni-01", "etcd-dcs"],
    group: "database"
  },
  "patroni-03": {
    id: "patroni-03",
    name: "Patroni Standby Node 02 (Async RO)",
    category: "Database HA Cluster",
    port: ":5432 PG / :8008 Patroni",
    subnet: "10.244.3.13/24 (DB-HA)",
    status: "standby",
    description: "Secondary asynchronous standby replica offloading heavy analytical read queries and providing 3rd node quorum redundancy.",
    architecture: "PostgreSQL 16 • Patroni Standby • Asynchronous Replication",
    telemetry: {
      latency: "1.1ms",
      connections: "14 read-only",
      throughput: "180 tx/s",
      lag: "< 24 ms"
    },
    techDetails: ["Read Scalability", "Quorum Protection", "Secondary Failover Target", "Non-blocking Sync"],
    connections: ["patroni-01", "etcd-dcs"],
    group: "database"
  },
  "etcd-dcs": {
    id: "etcd-dcs",
    name: "etcd 3-Node Raft Consensus Ring",
    category: "Consensus & State",
    port: ":2379 Client / :2380 Peer",
    subnet: "10.244.3.50/24 (DCS)",
    status: "active",
    description: "Distributed reliable key-value DCS implementing Raft consensus for Patroni leader election, cluster topology locks, and health leases.",
    architecture: "etcd v3 Cluster • Raft Quorum (3 Nodes) • Distributed Locking",
    telemetry: {
      latency: "0.3ms",
      connections: "6 DCS clients",
      throughput: "3/3 Quorum OK"
    },
    techDetails: ["Split-Brain Prevention", "10s Leader Lease TTL", "TLS Mutual Auth", "Snapshot Compact Automation"],
    connections: ["patroni-01", "patroni-02", "patroni-03"],
    group: "database"
  },
  "object-storage": {
    id: "object-storage",
    name: "S3 Disaster Recovery & Backups",
    category: "Storage & Backups",
    port: ":9000 S3 API",
    subnet: "10.244.4.10/24 (Storage)",
    status: "healthy",
    description: "High-throughput S3-compatible storage cluster holding automated hourly WAL archive segments, daily base backups, and media artifacts.",
    architecture: "S3 API Gateway • AES-256 GPG Encryption at Rest",
    telemetry: {
      latency: "4.2ms",
      connections: "WAL-G Active",
      throughput: "Daily Sync OK"
    },
    techDetails: ["WAL-G Continuous Backup", "Lifecycle Snapshot Purging", "Cryptographic Checksums", "Offsite Mirroring"],
    connections: ["patroni-01"],
    group: "storage"
  },
  prometheus: {
    id: "prometheus",
    name: "Prometheus Telemetry TSDB",
    category: "Observability",
    port: ":9090 TCP",
    subnet: "10.244.5.10/24 (Telemetry)",
    status: "active",
    description: "Time-series monitoring server scraping container telemetry from cAdvisor, OS metrics from node_exporter, and query metrics from postgres_exporter.",
    architecture: "Prometheus TSDB • Alertmanager Engine • Pull Model",
    telemetry: {
      latency: "1.5ms",
      connections: "18 targets scraped",
      throughput: "2.4k metrics/s"
    },
    techDetails: ["15s Scrape Interval", "PromQL Rule Alerts", "30-Day Retention", "Remote Write Ready"],
    connections: ["grafana", "app-01", "app-02", "patroni-01"],
    group: "observability"
  },
  grafana: {
    id: "grafana",
    name: "Grafana Operational Dashboards",
    category: "Observability UI",
    port: ":3000 HTTP",
    subnet: "10.244.5.20/24 (Telemetry)",
    status: "active",
    description: "Interactive observability dashboard visualizing cluster-wide telemetry, query latencies, memory saturation, and failover logs.",
    architecture: "Grafana 10 • Provisioned Dashboards as Code",
    telemetry: {
      latency: "1.2ms",
      connections: "4 Dashboards Live",
      throughput: "Real-time stream"
    },
    techDetails: ["Infrastructure SLA Dashboard", "PostgreSQL HA Monitor", "Container Saturation Alerts", "Zero-auth Readonly Role"],
    connections: ["prometheus"],
    group: "observability"
  }
};

export function initTopology() {
  const container = document.getElementById('infrastructure-topology');
  if (!container) return;

  const nodeElements = container.querySelectorAll<HTMLElement>('[data-node-id]');
  const lineElements = container.querySelectorAll<SVGLineElement | SVGPathElement>('[data-from][data-to]');
  const detailPanel = document.getElementById('topology-details-panel');
  const detailTitle = document.getElementById('topology-detail-title');
  const detailCategory = document.getElementById('topology-detail-category');
  const detailPort = document.getElementById('topology-detail-port');
  const detailSubnet = document.getElementById('topology-detail-subnet');
  const detailDesc = document.getElementById('topology-detail-desc');
  const detailArch = document.getElementById('topology-detail-arch');
  const detailLatency = document.getElementById('topology-detail-latency');
  const detailConns = document.getElementById('topology-detail-conns');
  const detailThroughput = document.getElementById('topology-detail-throughput');
  const detailLag = document.getElementById('topology-detail-lag');
  const detailLagRow = document.getElementById('topology-detail-lag-row');
  const detailTechList = document.getElementById('topology-detail-tech');
  const detailClose = document.getElementById('topology-detail-close');

  const filterButtons = container.querySelectorAll<HTMLButtonElement>('[data-topo-filter]');
  const failoverBtn = document.getElementById('btn-simulate-failover') as HTMLButtonElement | null;
  const pingBtn = document.getElementById('btn-health-ping');
  const drillBanner = document.getElementById('topology-drill-banner');
  const drillBannerText = document.getElementById('topology-drill-text');

  let activeNodeId: string | null = null;
  let activeFilter: string = 'all';

  const highlightNodeAndConnections = (nodeId: string | null) => {
    if (!nodeId) {
      if (activeFilter === 'all') {
        nodeElements.forEach((node) => node.classList.remove('node-dimmed', 'node-active'));
        lineElements.forEach((line) => line.classList.remove('line-dimmed', 'line-active'));
      } else {
        applyFilter(activeFilter);
      }
      return;
    }

    const nodeData = topologyData[nodeId];
    if (!nodeData) return;

    const connectedIds = new Set<string>([nodeId, ...nodeData.connections]);

    // Also include nodes that connect TO this node
    Object.values(topologyData).forEach((item) => {
      if (item.connections.includes(nodeId)) {
        connectedIds.add(item.id);
      }
    });

    nodeElements.forEach((node) => {
      const id = node.dataset.nodeId;
      if (id === nodeId) {
        node.classList.add('node-active');
        node.classList.remove('node-dimmed');
      } else if (id && connectedIds.has(id)) {
        node.classList.remove('node-dimmed', 'node-active');
      } else {
        node.classList.add('node-dimmed');
        node.classList.remove('node-active');
      }
    });

    lineElements.forEach((line) => {
      const from = line.dataset.from;
      const to = line.dataset.to;
      if ((from === nodeId && connectedIds.has(to || '')) || (to === nodeId && connectedIds.has(from || ''))) {
        line.classList.add('line-active');
        line.classList.remove('line-dimmed');
      } else {
        line.classList.add('line-dimmed');
        line.classList.remove('line-active');
      }
    });
  };

  const showNodeDetails = (nodeId: string) => {
    const data = topologyData[nodeId];
    if (!data || !detailPanel) return;

    activeNodeId = nodeId;
    highlightNodeAndConnections(nodeId);

    if (detailTitle) detailTitle.textContent = data.name;
    if (detailCategory) detailCategory.textContent = data.category.toUpperCase();
    if (detailPort) detailPort.textContent = data.port;
    if (detailSubnet) detailSubnet.textContent = data.subnet;
    if (detailDesc) detailDesc.textContent = data.description;
    if (detailArch) detailArch.textContent = data.architecture;

    if (detailLatency) detailLatency.textContent = data.telemetry.latency;
    if (detailConns) detailConns.textContent = data.telemetry.connections;
    if (detailThroughput) detailThroughput.textContent = data.telemetry.throughput;

    if (detailLagRow && detailLag) {
      if (data.telemetry.lag) {
        detailLagRow.style.display = 'flex';
        detailLag.textContent = data.telemetry.lag;
      } else {
        detailLagRow.style.display = 'none';
      }
    }

    if (detailTechList) {
      detailTechList.innerHTML = '';
      data.techDetails.forEach((item) => {
        const tag = document.createElement('span');
        tag.className = 'tech-pill';
        tag.textContent = item;
        detailTechList.appendChild(tag);
      });
    }

    detailPanel.classList.add('visible');
    detailPanel.setAttribute('aria-hidden', 'false');
  };

  const hideNodeDetails = () => {
    if (!detailPanel) return;
    activeNodeId = null;
    highlightNodeAndConnections(null);
    detailPanel.classList.remove('visible');
    detailPanel.setAttribute('aria-hidden', 'true');
  };

  const applyFilter = (filter: string) => {
    activeFilter = filter;
    filterButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.topoFilter === filter);
    });

    if (filter === 'all') {
      nodeElements.forEach((node) => node.classList.remove('node-dimmed', 'node-active'));
      lineElements.forEach((line) => line.classList.remove('line-dimmed', 'line-active'));
      return;
    }

    nodeElements.forEach((node) => {
      const id = node.dataset.nodeId;
      const data = id ? topologyData[id] : null;
      if (!data) return;

      const isMatch =
        (filter === 'ingress' && (data.group === 'ingress' || data.group === 'compute')) ||
        (filter === 'database' && (data.group === 'database' || data.group === 'storage')) ||
        (filter === 'observability' && data.group === 'observability');

      if (isMatch) {
        node.classList.remove('node-dimmed');
        node.classList.add('node-active');
      } else {
        node.classList.add('node-dimmed');
        node.classList.remove('node-active');
      }
    });

    lineElements.forEach((line) => {
      const from = line.dataset.from;
      const to = line.dataset.to;
      const fromData = from ? topologyData[from] : null;
      const toData = to ? topologyData[to] : null;

      const isLineMatch =
        (filter === 'ingress' && (fromData?.group === 'ingress' || toData?.group === 'ingress')) ||
        (filter === 'database' && (fromData?.group === 'database' || toData?.group === 'database')) ||
        (filter === 'observability' && (fromData?.group === 'observability' || toData?.group === 'observability'));

      if (isLineMatch) {
        line.classList.add('line-active');
        line.classList.remove('line-dimmed');
      } else {
        line.classList.add('line-dimmed');
        line.classList.remove('line-active');
      }
    });
  };

  // Attach Filter Listeners
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.topoFilter || 'all';
      applyFilter(filter);
    });
  });

  // Attach Node Listeners
  nodeElements.forEach((node) => {
    const nodeId = node.dataset.nodeId;
    if (!nodeId) return;

    node.addEventListener('mouseenter', () => {
      if (!activeNodeId) highlightNodeAndConnections(nodeId);
    });

    node.addEventListener('mouseleave', () => {
      if (!activeNodeId) highlightNodeAndConnections(null);
    });

    node.addEventListener('focus', () => {
      highlightNodeAndConnections(nodeId);
    });

    node.addEventListener('blur', () => {
      if (!activeNodeId) highlightNodeAndConnections(null);
    });

    node.addEventListener('click', () => {
      showNodeDetails(nodeId);
    });

    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showNodeDetails(nodeId);
      }
    });
  });

  detailClose?.addEventListener('click', hideNodeDetails);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailPanel?.classList.contains('visible')) {
      hideNodeDetails();
    }
  });

  // Failover Drill Simulation
  if (failoverBtn && drillBanner && drillBannerText) {
    let drillInProgress = false;

    failoverBtn.addEventListener('click', () => {
      if (drillInProgress) return;
      drillInProgress = true;
      failoverBtn.disabled = true;

      drillBanner.classList.add('active');
      drillBannerText.textContent = "[T+0.0s] Simulating primary node disruption on patroni-01...";

      const patroni01 = container.querySelector('[data-node-id="patroni-01"]');
      const patroni02 = container.querySelector('[data-node-id="patroni-02"]');

      patroni01?.classList.add('node-error-flash');

      setTimeout(() => {
        drillBannerText.textContent = "[T+3.8s] etcd detected heartbeat expiration. Raft consensus election triggered.";
      }, 1500);

      setTimeout(() => {
        drillBannerText.textContent = "[T+7.4s] Patroni-02 acquired DCS leader lock! Promoted to Primary Master (RW).";
        patroni02?.classList.add('node-promoted-flash');
      }, 3200);

      setTimeout(() => {
        drillBannerText.textContent = "[T+11.2s] PgBouncer rerouted pool connections. Zero data loss (RPO=0s, RTO=11.2s). Status: RESTORED.";
      }, 5000);

      setTimeout(() => {
        patroni01?.classList.remove('node-error-flash');
        patroni02?.classList.remove('node-promoted-flash');
        drillBanner.classList.remove('active');
        drillInProgress = false;
        failoverBtn.disabled = false;
      }, 9000);
    });
  }

  // Health Ping Animation
  if (pingBtn) {
    pingBtn.addEventListener('click', () => {
      nodeElements.forEach((node) => {
        node.classList.add('sonar-pulse');
        setTimeout(() => node.classList.remove('sonar-pulse'), 1000);
      });
    });
  }
}
