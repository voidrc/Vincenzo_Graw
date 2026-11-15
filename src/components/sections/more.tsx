"use client";

import { motion } from "motion/react";
import {
  ExternalLink,
  FileText,
  GitPullRequest,
  Heart,
  Mic,
} from "lucide-react";
import { interests, openSource, talks, writing } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function More() {
  return (
    <div className="space-y-8">
      <section>
        <SectionHeading icon={FileText}>Writing</SectionHeading>
        <div className="mt-4 space-y-3">
          {writing.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
              className="block"
            >
              <Card className="flex items-center justify-between gap-4 p-4">
                <span className="min-w-0 truncate text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {post.title}
                </span>
                <span className="flex shrink-0 items-center gap-3 font-mono text-xs text-zinc-500">
                  <span>{post.date}</span>
                  <span aria-hidden>·</span>
                  <span>{post.readTime}</span>
                  <ExternalLink className="size-3.5" />
                </span>
              </Card>
            </motion.a>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading icon={Mic}>Talks</SectionHeading>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {talks.map((talk, i) => (
            <motion.div
              key={talk.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
            >
              <Card className="h-full p-4">
                <h3 className="text-sm font-medium leading-snug text-zinc-800 dark:text-zinc-200">
                  {talk.title}
                </h3>
                <p className="mt-1.5 text-xs text-zinc-500">
                  {talk.event} · <span className="font-mono">{talk.year}</span>
                </p>
                {talk.url && (
                  <a
                    href={talk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    <ExternalLink className="size-3" />
                    Watch / slides
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading icon={GitPullRequest}>Open Source</SectionHeading>
        <div className="mt-4 space-y-3">
          {openSource.map((oss, i) => (
            <motion.div
              key={oss.repo}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
            >
              <Card className="p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  {oss.url ? (
                    <a
                      href={oss.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-semibold text-accent hover:underline"
                    >
                      {oss.repo}
                    </a>
                  ) : (
                    <span className="font-mono text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {oss.repo}
                    </span>
                  )}
                  <span className="rounded-full border border-black/10 bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-400">
                    {oss.contribution}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                  {oss.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading icon={Heart}>Interests</SectionHeading>
        <div className="mt-4 flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span
              key={interest.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-sm text-zinc-700 backdrop-blur-sm transition-colors hover:border-accent/40 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-300"
            >
              <interest.icon className="size-3.5 text-accent" />
              {interest.label}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
