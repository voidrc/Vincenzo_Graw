"use client";

import { motion } from "motion/react";
import { experience } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Experience() {
  return (
    <ol className="relative space-y-5 border-l border-black/10 pl-6 dark:border-white/10">
      {experience.map((job, i) => (
        <motion.li
          key={`${job.company}-${job.start}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.25 }}
          className="relative"
        >
          <span
            className={`absolute -left-[31px] top-6 size-2.5 rounded-full border-2 border-zinc-50 dark:border-zinc-950 ${
              job.current
                ? "animate-pulse bg-accent"
                : "bg-zinc-400 dark:bg-zinc-600"
            }`}
          />
          <Card className="p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {job.role}
              </h3>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
                {job.start} — {job.end}
              </span>
            </div>
            <p className="mt-0.5 text-sm">
              {job.companyUrl ? (
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  {job.company}
                </a>
              ) : (
                <span className="font-medium text-accent">{job.company}</span>
              )}
              <span className="text-zinc-500 dark:text-zinc-500">
                {" "}
                · {job.location}
              </span>
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {job.summary}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-zinc-600 marker:text-zinc-400 dark:text-zinc-400">
              {job.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.impact.map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-baseline gap-1.5 rounded-lg border border-accent/25 bg-accent-soft px-2.5 py-1"
                >
                  <span className="font-mono text-sm font-semibold text-accent">
                    {m.value}
                  </span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {m.label}
                  </span>
                </span>
              ))}
            </div>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {job.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </Card>
        </motion.li>
      ))}
    </ol>
  );
}
