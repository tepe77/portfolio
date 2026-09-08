export interface Metric {
  id: string;
  label: string;
  value: string;
  numericTarget: number;
  unit: string;
  description: string;
  sparkline: number[];
}

export interface Profile {
  name: string;
  role: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  systemStatus: "operational" | "degraded" | "maintenance";
  availability: string;
  metrics: Metric[];
}

export const profileData: Profile = {
  name: "Prasaswo Tepe",
  role: "DevOps & Infrastructure Engineer",
  eyebrow: "HELLO, I'M",
  tagline: "Building reliable systems from infrastructure to deployment.",
  summary: "I build reliable infrastructure, automate deployments, and keep systems observable. Focused on container orchestration, high availability database clustering, CI/CD automation, and Linux server hardening.",
  location: "Indonesia",
  email: "prasaswo@gmail.com",
  github: "https://github.com/tepe77",
  linkedin: "https://www.linkedin.com/in/prasaswo-tepe-980a91b6/",
  resumeUrl: "/resume/prasaswo-tepe-resume.pdf",
  systemStatus: "operational",
  availability: "Available for Infrastructure & DevOps Engineering",
  metrics: [
    {
      id: "cpu",
      label: "CPU LOAD",
      value: "23%",
      numericTarget: 23,
      unit: "%",
      description: "Nominal compute utilization across cluster nodes",
      sparkline: [18, 22, 20, 24, 21, 25, 23]
    },
    {
      id: "memory",
      label: "MEMORY ALLOCATION",
      value: "41%",
      numericTarget: 41,
      unit: "%",
      description: "Allocated RAM with dynamic cache reclamation",
      sparkline: [38, 39, 42, 40, 43, 41, 41]
    },
    {
      id: "uptime",
      label: "UPTIME SLA",
      value: "99.98%",
      numericTarget: 99.98,
      unit: "%",
      description: "High availability across multi-AZ services",
      sparkline: [99.9, 99.95, 99.98, 99.98, 99.98, 99.98, 99.98]
    },
    {
      id: "deployments",
      label: "PIPELINE RUNS",
      value: "1,284",
      numericTarget: 1284,
      unit: "",
      description: "Automated container builds and rollback validations",
      sparkline: [1150, 1180, 1210, 1240, 1260, 1275, 1284]
    }
  ]
};
