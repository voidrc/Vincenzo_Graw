import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { PortfolioTabs } from "@/components/tabs/portfolio-tabs";

export default function Home() {
  return (
    <div className="site-bg site-grid min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-6 lg:grid-cols-[340px_1fr] lg:gap-8">
          <Hero />
          <PortfolioTabs />
        </div>
      </main>
      <Footer />
    </div>
  );
}
