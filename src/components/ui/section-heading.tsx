import type { LucideIcon } from "lucide-react";

export function SectionHeading({
  icon: Icon,
  children,
}: {
  icon?: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
      {Icon ? <Icon className="size-4 text-accent" /> : null}
      {children}
    </h3>
  );
}
