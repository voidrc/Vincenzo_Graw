"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useHashTab } from "@/hooks/use-hash-tab";
import { TAB_IDS, DEFAULT_TAB } from "./tab-config";
import { TabNav } from "./tab-nav";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { More } from "@/components/sections/more";

const panels: Record<string, React.ComponentType> = {
  experience: Experience,
  tech: Skills,
  projects: Projects,
  education: Education,
  more: More,
};

export function PortfolioTabs() {
  const [activeTab, setTab] = useHashTab(TAB_IDS, DEFAULT_TAB);
  const Panel = panels[activeTab];

  return (
    <MotionConfig reducedMotion="user">
      <section className="min-w-0">
        <TabNav activeTab={activeTab} onSelect={setTab} />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className="mt-6"
          >
            <Panel />
          </motion.div>
        </AnimatePresence>
      </section>
    </MotionConfig>
  );
}
