"use client";

import { motion } from "motion/react";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GitHubIcon } from "@/components/ui/brand-icons";

export function Projects() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.25 }}
        >
          <Card className="group h-full overflow-hidden">
            <div className="relative h-36 overflow-hidden">
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div
                  className={`size-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-105 ${project.gradient}`}
                >
                  <div className="mx-4 mt-4 h-full rounded-t-lg border border-white/25 bg-black/20 p-3 backdrop-blur-sm">
                    <div className="flex gap-1.5">
                      <span className="size-2 rounded-full bg-white/40" />
                      <span className="size-2 rounded-full bg-white/40" />
                      <span className="size-2 rounded-full bg-white/40" />
                    </div>
                    <FolderGit2 className="mt-6 size-8 text-white/70" />
                  </div>
                </div>
              )}
              {project.featured && (
                <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Featured
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-mono text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    <ExternalLink className="size-3.5" />
                    Live demo
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-accent dark:text-zinc-400"
                  >
                    <GitHubIcon className="size-3.5" />
                    Source
                  </a>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
