import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
      <p className="text-center text-xs text-zinc-500 dark:text-zinc-500">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js
      </p>
    </footer>
  );
}
