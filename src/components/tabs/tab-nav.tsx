"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { TABS, type TabId } from "./tab-config";

export function TabNav({
  activeTab,
  onSelect,
}: {
  activeTab: TabId;
  onSelect: (id: TabId) => void;
}) {
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    tabRefs.current
      .get(activeTab)
      ?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [activeTab]);

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (index + 1) % TABS.length;
    else if (e.key === "ArrowLeft")
      next = (index - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    if (next === null) return;
    e.preventDefault();
    const id = TABS[next].id;
    onSelect(id);
    tabRefs.current.get(id)?.focus();
  }

  return (
    <div className="sticky top-3 z-20">
      <div className="tab-mask no-scrollbar overflow-x-auto rounded-2xl border border-black/5 bg-white/70 p-1.5 shadow-sm shadow-zinc-900/5 backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/60">
        <div role="tablist" aria-label="Portfolio sections" className="flex min-w-max gap-1">
          {TABS.map((tab, i) => {
            const active = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  if (el) tabRefs.current.set(tab.id, el);
                  else tabRefs.current.delete(tab.id);
                }}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={active}
                aria-controls={`panel-${tab.id}`}
                tabIndex={active ? 0 : -1}
                onClick={() => onSelect(tab.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`relative flex items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  active
                    ? "text-white dark:text-zinc-950"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <tab.icon className="relative z-10 size-4" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
