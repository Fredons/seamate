// ═══════════════════════════════════════════
// 404 — editorial not-found page.
// Uses the same shell so users can still navigate. No partner wall on errors.
// ═══════════════════════════════════════════

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "@/components/icons";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="grain min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center pt-32 pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 w-full">
          <div className="max-w-[820px]">
            <span className="font-mono text-green text-[11px] uppercase tracking-[0.25em] block mb-6">
              404 &mdash; Off course
            </span>
            <h1 className="font-display text-ink text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] tracking-tight">
              That page is{" "}
              <em className="text-green-muted">not on the chart.</em>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[55ch] mt-8">
              The address you followed doesn&rsquo;t lead anywhere on this site.
              Try the main routes below, or head back to the homepage.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Energy & Trade", href: "/energy-trade" },
                { label: "Sustainability", href: "/sustainability" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-white border border-ink/[0.08] px-4 py-2 text-ink text-[13px] font-medium hover:border-green/40 hover:text-green transition-all duration-500"
                >
                  <span>{l.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
