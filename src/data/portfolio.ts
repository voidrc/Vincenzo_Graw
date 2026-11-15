// ─────────────────────────────────────────────────────────────────────────────
// Placeholder content — edit this file to make the site yours.
// Icons are lucide-react components imported directly below.
// ─────────────────────────────────────────────────────────────────────────────
import {
  Award,
  Bike,
  Boxes,
  Camera,
  Code2,
  Container,
  Database,
  FileCode2,
  GitBranch,
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
    "Vincenzo Graw (voidrc) — security researcher and DevOps engineer, founder of Shadow.Lab.",
};

export const profile: Profile = {
  name: "Vincenzo Graw",
  title: "Security Researcher / DevOps Engineer",
  tagline:
    "I work where offensive security meets infrastructure: understanding how systems break, then building and hardening them so they don't.",
  availability: "Founder of Shadow.Lab",
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
    role: "Founder & Lead Researcher",
    company: "Shadow.Lab",
    companyUrl: "https://github.com/voidrc/Shadow.Lab",
    end: "Present",
    current: true,
    summary:
      "A small security research group working in the grey-hat space: study both attack and defence, disclose responsibly, and document everything.",
    responsibilities: [
      "Built a Tailscale-only Compose stack with a scope-enforced reconnaissance and vulnerability-assessment platform for authorised testing.",
      "Maintain Shadow.Wiki, a knowledge base covering red team, blue team, and the Linux fundamentals underneath both.",
      "Run a containerised security lab with practice targets, tooling, and monitoring.",
    ],
    impact: [],
    tech: ["Linux", "Docker", "Tailscale", "Python", "Bash"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Java", icon: Code2 },
      { name: "Python", icon: Code2 },
      { name: "Bash", icon: Terminal },
      { name: "C / C++", icon: FileCode2 },
      { name: "Rust", icon: Wrench },
      { name: "Go", icon: Terminal },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Systems & Networking",
    icon: Server,
    skills: [
      { name: "Arch Linux / Fedora / Debian", icon: Terminal },
      { name: "systemd", icon: Server },
      { name: "KVM / QEMU", icon: Boxes },
      { name: "Tailscale / WireGuard", icon: Network },
      { name: "nftables", icon: Lock },
      { name: "Nginx", icon: Server },
    ],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    skills: [
      { name: "Penetration testing", icon: ShieldCheck },
      { name: "Threat modeling", icon: Lock },
      { name: "Server hardening", icon: Lock },
      { name: "Metasploit", icon: Terminal },
      { name: "Nmap", icon: Network },
      { name: "ZAP", icon: ShieldCheck },
    ],
  },
  {
    title: "Containers & Operations",
    icon: Container,
    skills: [
      { name: "Docker / Compose", icon: Container },
      { name: "Podman", icon: Container },
      { name: "Git", icon: GitBranch },
      { name: "GitHub Actions", icon: GitBranch },
      { name: "Ansible", icon: Wrench },
      { name: "Elastic Stack", icon: Database },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Shadow.Lab",
    description:
      "Tailscale-only Compose stack with a scope-enforced reconnaissance and vulnerability-assessment platform for authorised testing.",
    tech: ["Python", "Docker Compose", "Tailscale"],
    sourceUrl: "https://github.com/voidrc/Shadow.Lab",
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
    featured: true,
  },
  {
    title: "Shadow.Wiki",
    description:
      "Knowledge base covering red team, blue team, and the Linux fundamentals underneath both.",
    tech: ["Markdown", "Security", "Linux"],
    sourceUrl: "https://github.com/voidrc/Shadow.Wiki",
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
    featured: true,
  },
  {
    title: "Cbs_Guides",
    description:
      "Step-by-step guides and lesson notes for the School 21 cybersecurity curriculum.",
    tech: ["Markdown", "Networking", "Security"],
    sourceUrl: "https://github.com/voidrc/Cbs_Guides",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    title: "Youkai",
    description:
      "Hermes Agent and SearXNG as a Docker Compose stack, reachable only over a tailnet.",
    tech: ["Docker Compose", "Tailscale", "Shell"],
    sourceUrl: "https://github.com/voidrc/Youkai",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    title: "Docker",
    description:
      "Compose files for a security lab: practice targets, tooling, monitoring.",
    tech: ["Docker Compose", "Elastic Stack", "Portainer"],
    sourceUrl: "https://github.com/voidrc/Docker",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
  },
  {
    title: "Misc",
    description:
      "Small utilities, including a KVM helper script and log tooling.",
    tech: ["Bash", "C", "KVM"],
    sourceUrl: "https://github.com/voidrc/Misc",
    gradient: "from-slate-500 via-zinc-500 to-neutral-600",
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
