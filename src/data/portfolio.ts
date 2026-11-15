// ─────────────────────────────────────────────────────────────────────────────
// Placeholder content — edit this file to make the site yours.
// Icons are lucide-react components imported directly below.
// ─────────────────────────────────────────────────────────────────────────────
import {
  Award,
  Bike,
  BookOpen,
  Boxes,
  Braces,
  Camera,
  Cloud,
  Code2,
  Container,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  HikingStick,
  Lock,
  Music,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";
import type {
  Certification,
  EducationItem,
  ExperienceItem,
  Interest,
  OpenSourceItem,
  Profile,
  Project,
  SiteInfo,
  SkillCategory,
  Talk,
  WritingItem,
} from "./types";

export const site: SiteInfo = {
  url: "https://example.com",
  description:
    "Vincenzo Graw — Senior Software Engineer and product builder focused on Linux, security, and resilient infrastructure.",
};

export const profile: Profile = {
  name: "Vincenzo Graw",
  title: "Senior Software Engineer / Product Builder",
  tagline:
    "I build secure, boring-in-a-good-way systems — from hardened Linux infrastructure to full-stack products people actually enjoy using.",
  location: "Berlin, Germany",
  availability: "Open to interesting problems",
  resumeUrl: "/resume.pdf",
  email: "hello@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/voidrc", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle", icon: "linkedin" },
    { label: "X", url: "https://x.com/your-handle", icon: "x" },
    { label: "Email", url: "mailto:hello@example.com", icon: "mail" },
  ],
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Northwind Labs",
    companyUrl: "https://example.com",
    start: "2022",
    end: "Present",
    current: true,
    location: "Berlin, DE",
    summary:
      "Lead engineer on a platform team building internal developer tooling and hardened runtime infrastructure.",
    responsibilities: [
      "Designed and shipped a zero-downtime deployment pipeline for 40+ internal services.",
      "Hardened the Kubernetes fleet: seccomp profiles, network policies, and workload identity.",
      "Drove adoption of signed artifacts and SBOM generation across all CI builds.",
    ],
    impact: [
      { value: "−38%", label: "p95 latency" },
      { value: "99.99%", label: "platform uptime" },
      { value: "−62%", label: "deploy failures" },
    ],
    tech: ["Go", "Kubernetes", "Terraform", "eBPF", "Nix"],
  },
  {
    role: "Software Engineer, Infrastructure",
    company: "Acme Cloud",
    companyUrl: "https://example.com",
    start: "2019",
    end: "2022",
    location: "Remote",
    summary:
      "Built multi-tenant edge services and the observability stack that kept them honest.",
    responsibilities: [
      "Implemented a rate-limiting and WAF layer protecting ~2B requests/day.",
      "Rebuilt metrics/tracing pipelines on Prometheus and OpenTelemetry.",
      "Led incident-response automation, cutting mean time to acknowledge in half.",
    ],
    impact: [
      { value: "2B+", label: "req/day served" },
      { value: "−50%", label: "MTTA" },
    ],
    tech: ["Rust", "Envoy", "Prometheus", "PostgreSQL", "Ansible"],
  },
  {
    role: "Full-Stack Developer",
    company: "Feral Systems",
    companyUrl: "https://example.com",
    start: "2016",
    end: "2019",
    location: "Hamburg, DE",
    summary:
      "Shipped customer-facing products end-to-end, from Postgres schema to pixel.",
    responsibilities: [
      "Built a real-time fleet-tracking dashboard used by 300+ logistics customers.",
      "Introduced end-to-end type safety and cut frontend defect rate substantially.",
      "Owned the migration from bare-metal VMs to containerised deployment.",
    ],
    impact: [
      { value: "300+", label: "business customers" },
      { value: "−45%", label: "frontend defects" },
    ],
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    role: "Junior Developer / Sysadmin",
    company: "Cobalt Hosting",
    companyUrl: "https://example.com",
    start: "2014",
    end: "2016",
    location: "Hamburg, DE",
    summary:
      "Kept the servers alive and learned to love 3 a.m. incident pages.",
    responsibilities: [
      "Administered a fleet of Debian web and mail servers for SMB hosting customers.",
      "Automated provisioning and backups with shell scripts and early Ansible playbooks.",
    ],
    impact: [{ value: "120+", label: "servers managed" }],
    tech: ["Linux", "Bash", "Ansible", "Nginx", "MySQL"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      { name: "React / Next.js", icon: Code2, years: 7, level: "Expert" },
      { name: "TypeScript", icon: Braces, years: 7, level: "Expert" },
      { name: "Tailwind CSS", icon: FileCode2, years: 4, level: "Advanced" },
      { name: "Accessibility", icon: BookOpen, years: 5, level: "Advanced" },
      { name: "Motion / animation", icon: Boxes, years: 3, level: "Proficient" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Go", icon: Terminal, years: 5, level: "Expert" },
      { name: "Node.js", icon: Code2, years: 7, level: "Expert" },
      { name: "Rust", icon: Wrench, years: 3, level: "Proficient" },
      { name: "PostgreSQL", icon: Database, years: 8, level: "Advanced" },
      { name: "gRPC / REST", icon: Network, years: 5, level: "Advanced" },
    ],
  },
  {
    title: "DevOps & Security",
    icon: ShieldCheck,
    skills: [
      { name: "Linux / hardening", icon: Terminal, years: 10, level: "Expert" },
      { name: "Kubernetes", icon: Container, years: 5, level: "Advanced" },
      { name: "Terraform", icon: Cloud, years: 4, level: "Advanced" },
      { name: "Threat modeling", icon: Lock, years: 4, level: "Advanced" },
      { name: "CI/CD supply chain", icon: GitBranch, years: 5, level: "Advanced" },
      { name: "eBPF observability", icon: Network, years: 2, level: "Proficient" },
    ],
  },
  {
    title: "Tools & Languages",
    icon: Wrench,
    skills: [
      { name: "Nix / NixOS", icon: Boxes, years: 4, level: "Advanced" },
      { name: "Bash / scripting", icon: Terminal, years: 10, level: "Expert" },
      { name: "Git", icon: GitBranch, years: 10, level: "Expert" },
      { name: "Vim / Neovim", icon: FileCode2, years: 8, level: "Advanced" },
      { name: "Python", icon: Code2, years: 6, level: "Proficient" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "sentinel",
    description:
      "A lightweight eBPF-based runtime monitor that watches for suspicious syscalls and exfiltration attempts on Linux hosts.",
    tech: ["Rust", "eBPF", "Linux"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/voidrc",
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    featured: true,
  },
  {
    title: "nixfleet",
    description:
      "Declarative NixOS configurations and tooling for managing a fleet of personal servers and workstations.",
    tech: ["Nix", "NixOS", "Bash"],
    sourceUrl: "https://github.com/voidrc",
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
    featured: true,
  },
  {
    title: "passgen-tui",
    description:
      "Terminal password generator and audit tool with entropy visualisation, written as a small Go TUI.",
    tech: ["Go", "Bubble Tea", "CLI"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/voidrc",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    title: "meshmon",
    description:
      "Self-hosted status page and uptime monitor for personal services, with Prometheus export and alert routing.",
    tech: ["Next.js", "Go", "Prometheus"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/voidrc",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    title: "dotfiles",
    description:
      "Opinionated dotfiles for a keyboard-driven Linux workflow: Neovim, tmux, sway, and lots of aliases.",
    tech: ["Bash", "Lua", "Linux"],
    sourceUrl: "https://github.com/voidrc",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.Sc. Computer Science",
    institution: "Technical University of Example",
    start: "2012",
    end: "2014",
    notes: "Thesis on kernel-level intrusion detection. Graduated with distinction.",
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "University of Example",
    start: "2009",
    end: "2012",
    notes: "Focus on operating systems and distributed computing.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Certified Kubernetes Security Specialist (CKS)",
    issuer: "CNCF",
    date: "2023",
    credentialUrl: "https://example.com",
    credentialId: "CKS-0000",
  },
  {
    name: "OSCP",
    issuer: "OffSec",
    date: "2022",
    credentialUrl: "https://example.com",
  },
  {
    name: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    date: "2021",
    credentialUrl: "https://example.com",
    credentialId: "AWS-ASA-0000",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    date: "2020",
    credentialUrl: "https://example.com",
  },
];

export const writing: WritingItem[] = [
  {
    title: "Hardening a personal Kubernetes cluster without losing your mind",
    date: "Mar 2024",
    readTime: "9 min",
    url: "https://example.com",
  },
  {
    title: "eBPF for the rest of us: tracing syscalls in 50 lines of Rust",
    date: "Nov 2023",
    readTime: "12 min",
    url: "https://example.com",
  },
  {
    title: "Why I manage my whole life (well, my servers) with NixOS",
    date: "Jun 2023",
    readTime: "7 min",
    url: "https://example.com",
  },
];

export const talks: Talk[] = [
  {
    title: "Signed, sealed, deployed: supply-chain security for small teams",
    event: "ExampleCon Security Track",
    year: "2024",
    url: "https://example.com",
  },
  {
    title: "Boring infrastructure is a feature",
    event: "Local DevOps Meetup",
    year: "2023",
    url: "https://example.com",
  },
];

export const openSource: OpenSourceItem[] = [
  {
    repo: "kubernetes/kubernetes",
    description: "Bug fixes and documentation around node-level security defaults.",
    contribution: "Contributor",
    url: "https://github.com/voidrc",
  },
  {
    repo: "nixpkgs",
    description: "Maintains a handful of packages and submits occasional fixes.",
    contribution: "Package maintainer",
    url: "https://github.com/voidrc",
  },
  {
    repo: "prometheus/prometheus",
    description: "Small patches to remote-write error handling.",
    contribution: "Contributor",
    url: "https://github.com/voidrc",
  },
];

export const interests: Interest[] = [
  { label: "Lock picking", icon: Lock },
  { label: "Homelab", icon: Server },
  { label: "CTF / wargames", icon: ShieldCheck },
  { label: "Photography", icon: Camera },
  { label: "Hiking", icon: HikingStick },
  { label: "Cycling", icon: Bike },
  { label: "Synths & music", icon: Music },
  { label: "Cert collecting", icon: Award },
];
