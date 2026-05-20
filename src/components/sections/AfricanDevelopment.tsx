// ═══════════════════════════════════════════
// AfricanDevelopment — homepage section replacing the previous SustainabilitySnapshot.
// Six development themes from the Seamate Group thesis, presented as an
// editorial pair (sticky title + thematic list) and a CTA to /about.
// Sustainability themes (decarbonisation, blue economy) survive here as
// part of the broader African development story rather than a standalone page.
// ═══════════════════════════════════════════

import Link from "next/link";
import { ArrowUpRight } from "../icons";
import { ABOUT } from "@/content/about";

export function AfricanDevelopment() {
  return (
    <section className="bg-green-pale py-24 md:py-32" aria-labelledby="african-development-heading">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <div className="reveal md:sticky md:top-32">
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-4">
                02 &mdash; African Development
              </span>
              <h2 id="african-development-heading" className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight">
                Six integrated systems.{" "}
                <em className="text-green-muted">One long-horizon mandate.</em>
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mt-6 max-w-[42ch]">
                Africa&rsquo;s economic transformation requires more than individual
                companies &mdash; it requires integrated systems. Seamate Group
                works at the intersections.
              </p>
              <Link
                href="/about#sustainability"
                className="group inline-flex items-center gap-2 mt-8 text-ink font-semibold text-[15px] border-b border-ink/20 pb-1 hover:border-green hover:text-green transition-all duration-500"
              >
                Read the thesis
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-all duration-500" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            {ABOUT.africanDevelopment.themes.map((theme, i) => (
              <div
                key={theme.title}
                className="reveal border-t border-ink/[0.08] pt-6"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-green/50 text-sm mt-1">0{i + 1}</span>
                  <div>
                    <h3 className="text-ink font-semibold text-lg tracking-tight">{theme.title}</h3>
                    <p className="text-text-secondary text-[15px] leading-relaxed mt-2 max-w-[52ch]">
                      {theme.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
