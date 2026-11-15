import { Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/ui/brand-icons";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  mail: Mail,
} as const;

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Hero() {
  return (
    <div className="lg:sticky lg:top-8 lg:self-start">
      <Card className="relative flex flex-col items-center p-6 text-center lg:items-start lg:p-7 lg:text-left">
        <div className="absolute right-4 top-4">
          <ThemeToggle />
        </div>

        <div className="relative">
          {profile.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="size-20 rounded-full object-cover"
            />
          ) : (
            <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-2xl font-bold text-white">
              {initials(profile.name)}
            </div>
          )}
          <span
            className="absolute bottom-0.5 right-0.5 size-4 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-900"
            title={profile.availability}
          />
        </div>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm font-medium text-accent">{profile.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {profile.tagline}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 text-xs text-zinc-500 lg:justify-start dark:text-zinc-400">
          {profile.location && (
            <>
              <MapPin className="size-3.5 shrink-0" />
              <span>{profile.location}</span>
              <span aria-hidden>·</span>
            </>
          )}
          <span>{profile.availability}</span>
        </div>

        <div className="mt-5 flex items-center gap-2">
          {profile.socials.map((s) => {
            const Icon = socialIcons[s.icon];
            const external = !s.url.startsWith("mailto:");
            return (
              <a
                key={s.label}
                href={s.url}
                aria-label={s.label}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex size-9 items-center justify-center rounded-full border border-black/10 text-zinc-500 transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-white/15 dark:text-zinc-400"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>

        <div className="mt-6 flex w-full flex-col gap-2 sm:flex-row lg:flex-col">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-opacity dark:text-zinc-950 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Download className="size-4" />
            Download Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/10 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-white/15 dark:text-zinc-300"
          >
            <Mail className="size-4" />
            Get in Touch
          </a>
        </div>
      </Card>
    </div>
  );
}
