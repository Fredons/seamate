// ═══════════════════════════════════════════
// AfricanDevelopment — homepage section, the deep-teal anchor of the page.
// A dark band breaks the light rhythm and gives the six development themes
// editorial weight. Brass numerals, cream text, green-light accents.
// ═══════════════════════════════════════════

import Link from "next/link";
import { ArrowUpRight } from "../icons";
import { ABOUT } from "@/content/about";

export function AfricanDevelopment() {
  return (
    <section className="relative bg-navy py-24 md:py-36 overflow-hidden" aria-labelledby="african-development-heading">
      {/* Subtle brass top hairline + soft green glow for depth */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent" />
      <div className="pointer-events-none absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-green/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <div className="reveal md:sticky md:top-32">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-brass" />
                <span className="font-mono text-brass-light text-[11px] uppercase tracking-[0.28em]">
                  02 &middot; African Development
                </span>
              </div>
              <h2 id="african-development-heading" className="font-display text-cream text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.04] tracking-tight">
                Six integrated systems.{" "}
                <em className="italic text-green-light">One long-horizon mandate.</em>
              </h2>
              <p className="text-cream/65 text-base leading-relaxed mt-6 max-w-[42ch]">
                Africa&rsquo;s economic transformation requires more than individual
                companies &mdash; it requires integrated systems. Seamate Group
                works at the intersections.
              </p>
              <Link
                href="/about#sustainability"
                className="group inline-flex items-center gap-2 mt-8 text-cream font-semibold text-[15px] border-b border-cream/25 pb-1 hover:border-green-light hover:text-green-light transition-all duration-500"
              >
                Read the thesis
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-all duration-500" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
              {ABOUT.africanDevelopment.themes.map((theme, i) => (
                <div
                  key={theme.title}
                  className="reveal border-t border-cream/15 pt-5"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="font-mono text-brass-light/80 text-sm">0{i + 1}</span>
                  <h3 className="text-cream font-semibold text-lg tracking-tight mt-3">{theme.title}</h3>
                  <p className="text-cream/55 text-[14px] leading-relaxed mt-2">{theme.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
