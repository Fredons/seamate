// ═══════════════════════════════════════════
// DivisionsOverview — homepage editorial list of all six Seamate Group divisions.
// Same row-per-item rhythm as the previous ServicesOverview but extended to 6.
// Each row links to its anchored section on /divisions.
// ═══════════════════════════════════════════

import Link from "next/link";
import { ArrowUpRight } from "../icons";
import { DIVISIONS } from "@/content/divisions";

export function DivisionsOverview() {
  return (
    <section className="bg-cream py-24 md:py-32" aria-labelledby="divisions-heading">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-12 md:mb-16">
          <div className="md:col-span-5">
            <div className="reveal">
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-4">
                01 &mdash; Divisions
              </span>
              <h2 id="divisions-heading" className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight">
                Six divisions.{" "}
                <em className="text-green-muted">One institutional team.</em>
              </h2>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="reveal text-text-secondary text-lg leading-relaxed max-w-[55ch] mt-2">
              Maritime, energy, logistics, industrial advisory, agro systems, and a
              workforce academy &mdash; managed from one operations centre in Lagos,
              with reach across the continent.
            </p>
            <Link
              href="/divisions"
              className="reveal inline-flex items-center gap-2 mt-8 text-ink font-semibold text-[15px] border-b border-ink/20 pb-1 hover:border-green hover:text-green transition-all duration-500 group"
            >
              See all divisions
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-all duration-500" />
            </Link>
          </div>
        </div>

        <div className="border-t border-ink/[0.08]">
          {DIVISIONS.map((division, i) => (
            <Link
              key={division.slug}
              href={`/divisions#${division.slug}`}
              className="reveal group block border-b border-ink/[0.08] py-7 md:py-9 transition-colors duration-500 hover:bg-paper"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center">
                <span className="col-span-2 md:col-span-1 font-mono text-green/60 text-sm">
                  {division.number}
                </span>
                <h3 className="col-span-10 md:col-span-4 font-display text-ink text-2xl md:text-3xl leading-tight tracking-tight">
                  {division.title}
                </h3>
                <p className="col-span-12 md:col-span-6 text-text-secondary text-[15px] md:text-base leading-relaxed">
                  {division.tagline}
                </p>
                <span className="col-span-12 md:col-span-1 flex md:justify-end">
                  <span className="w-10 h-10 rounded-full bg-green/[0.06] flex items-center justify-center group-hover:bg-green transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <ArrowUpRight className="w-4 h-4 text-green group-hover:text-cream transition-all duration-500" />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
