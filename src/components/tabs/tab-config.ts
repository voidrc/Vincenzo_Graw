import {
  Briefcase,
  Cpu,
  FolderGit2,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TabDef {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const TABS = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "tech", label: "Tech Stack", icon: Cpu },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "more", label: "More", icon: Sparkles },
] as const satisfies readonly TabDef[];

export type TabId = (typeof TABS)[number]["id"];

export const TAB_IDS = TABS.map((t) => t.id) as readonly TabId[];

export const DEFAULT_TAB: TabId = "experience";
