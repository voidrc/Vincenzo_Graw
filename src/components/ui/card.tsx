import type { HTMLAttributes } from "react";

export function Card({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-black/5 bg-white/60 shadow-sm shadow-zinc-900/5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20 ${className}`}
      {...props}
    />
  );
}
