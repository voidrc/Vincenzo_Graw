"use client";

import { motion } from "motion/react";
import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <div className="space-y-8">
      <section>
        <SectionHeading icon={GraduationCap}>Education</SectionHeading>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
            >
              <Card className="flex h-full gap-4 p-5">
                <GraduationCap className="mt-0.5 size-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {edu.degree}
                  </h3>
                  <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.institution}
                  </p>
                  <p className="mt-1 font-mono text-xs text-zinc-500">
                    {edu.start} — {edu.end}
                  </p>
                  {edu.notes && (
                    <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
                      {edu.notes}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading icon={Award}>Certifications</SectionHeading>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
            >
              <Card className="flex h-full gap-4 p-5">
                <Award className="mt-0.5 size-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {cert.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                    {cert.issuer} ·{" "}
                    <span className="font-mono text-xs">{cert.date}</span>
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    {cert.credentialId && (
                      <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                        ID {cert.credentialId}
                      </span>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                      >
                        <ExternalLink className="size-3" />
                        Verify credential
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
