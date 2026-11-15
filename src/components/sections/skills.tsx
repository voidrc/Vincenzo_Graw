"use client";

import { motion } from "motion/react";
import { skillCategories } from "@/data/portfolio";
import { Card } from "@/components/ui/card";

const levelStyles: Record<string, { tag: string; width: string }> = {
  Expert: {
    tag: "border-accent/40 bg-accent-soft text-accent",
    width: "w-full",
  },
  Advanced: {
    tag: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    width: "w-[72%]",
  },
  Proficient: {
    tag: "border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400",
    width: "w-[52%]",
  },
  Familiar: {
    tag: "border-zinc-400/30 bg-zinc-500/10 text-zinc-500 dark:text-zinc-400",
    width: "w-[32%]",
  },
};

export function Skills() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {skillCategories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.25 }}
        >
          <Card className="h-full p-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              <cat.icon className="size-4 text-accent" />
              {cat.title}
            </h3>
            <ul className="mt-4 space-y-3.5">
              {cat.skills.map((skill) => {
                const style = levelStyles[skill.level];
                return (
                  <li key={skill.name}>
                    <div className="flex items-center gap-2.5">
                      <skill.icon className="size-4 shrink-0 text-zinc-400 dark:text-zinc-500" />
                      <span className="min-w-0 flex-1 truncate text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                        {skill.years} yrs
                      </span>
                      <span
                        className={`rounded-full border px-1.5 py-px text-[10px] font-medium ${style.tag}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div className="ml-[26px] mt-1.5 h-1 overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
                      <div
                        className={`h-full rounded-full bg-accent/70 ${style.width}`}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
