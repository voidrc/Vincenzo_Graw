import type { LucideIcon } from "lucide-react";

export interface Social {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "x" | "mail";
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  availability: string;
  avatarUrl?: string;
  resumeUrl: string;
  email: string;
  socials: Social[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  start: string;
  end: string;
  current?: boolean;
  location: string;
  summary: string;
  responsibilities: string[];
  impact: { value: string; label: string }[];
  tech: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  years: number;
  level: "Expert" | "Advanced" | "Proficient" | "Familiar";
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  image?: string;
  gradient: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  start: string;
  end: string;
  notes?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
}

export interface WritingItem {
  title: string;
  date: string;
  readTime: string;
  url: string;
}

export interface Talk {
  title: string;
  event: string;
  year: string;
  url?: string;
}

export interface OpenSourceItem {
  repo: string;
  description: string;
  contribution: string;
  url?: string;
}

export interface Interest {
  label: string;
  icon: LucideIcon;
}

export interface SiteInfo {
  url: string;
  description: string;
}
