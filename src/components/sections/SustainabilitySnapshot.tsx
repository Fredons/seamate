// ═══════════════════════════════════════════
// SustainabilitySnapshot — compressed homepage version.
// Single editorial pair, no card grid. Links to /sustainability for depth.
// ═══════════════════════════════════════════

import Link from "next/link";
import { ArrowUpRight } from "../icons";

export function SustainabilitySnapshot() {
  return (
    <section className="bg-green-pale py-24 md:py-32" aria-labelledby="sustainability-heading">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-6">
            <div className="reveal">
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-4">
                03 &mdash; Sustainability
              </span>
              <h2 id="sustainability-heading" className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight">
                The maritime future{" "}
                <em className="text-green-muted">Africa deserves.</em>
              </h2>
              <Link
                href="/sustainability"
                className="group inline-flex items-center gap-2 mt-8 text-ink font-semibold text-[15px] border-b border-ink/20 pb-1 hover:border-green hover:text-green transition-all duration-500"
              >
                Explore sustainability
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-all duration-500" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-6">
            <p className="reveal text-text-secondary text-base md:text-lg leading-relaxed">
              Maritime decarbonisation, blue economy stewardship, and the
              <strong className="text-ink"> Seamate Africa Seatime Initiative</strong> — our cadetship pipeline
              targeting 500 cadets in year one and 10,000 African seafarers over a
              decade, against a projected global shortage of 165,000 officers by 2035.
            </p>

            <div className="reveal mt-10 grid grid-cols-3 gap-6 md:gap-10">
              <div className="border-t-2 border-green/30 pt-4">
                <span className="font-mono text-green text-2xl md:text-3xl font-medium">500</span>
                <span className="block text-ink/45 text-[11px] uppercase tracking-wider mt-1.5">Cadet intake</span>
              </div>
              <div className="border-t-2 border-green/30 pt-4">
                <span className="font-mono text-green text-2xl md:text-3xl font-medium">10K</span>
                <span className="block text-ink/45 text-[11px] uppercase tracking-wider mt-1.5">10-year target</span>
              </div>
              <div className="border-t-2 border-green/30 pt-4">
                <span className="font-mono text-green text-2xl md:text-3xl font-medium">2030</span>
                <span className="block text-ink/45 text-[11px] uppercase tracking-wider mt-1.5">Decarb horizon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
