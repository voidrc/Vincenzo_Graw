import type { HTMLAttributes } from "react";

const tones = {
  neutral:
    "border-black/10 bg-black/[0.04] text-zinc-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-300",
  accent:
    "border-accent/30 bg-accent-soft text-accent",
} as const;

export function Badge({
  tone = "neutral",
  className = "",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: keyof typeof tones }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[11px] leading-4 ${tones[tone]} ${className}`}
      {...props}
    />
  );
}
