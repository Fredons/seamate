// ═══════════════════════════════════════════
// DivisionsOverview — Strategic Divisions card grid (Stitch).
// Centered heading + orange rule, six structural icon cards (white, steel
// border, navy top-border on hover, Material Symbol, corner detail).
// ═══════════════════════════════════════════

import Link from "next/link";
import { MS } from "../icons";
import { DIVISIONS } from "@/content/divisions";

const ICONS: Record<string, string> = {
  maritime: "anchor",
  energy: "oil_barrel",
  logistics: "conveyor_belt",
  "industrial-advisory": "foundation",
  "agro-systems": "agriculture",
  academy: "school",
};

export function DivisionsOverview() {
  return (
    <section className="bg-surface py-20 md:py-28" aria-labelledby="divisions-heading">
      <div className="mx-auto max-w-[1280px] px-4 md:px-12">
        <div className="text-center mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-[2px] bg-orange" />
            <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">What we operate</span>
            <span className="w-7 h-[2px] bg-orange" />
          </div>
          <h2 id="divisions-heading" className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em]">
            Six Strategic Divisions
          </h2>
          <p className="font-body text-text-secondary text-lg leading-relaxed max-w-[60ch] mx-auto mt-5">
            Maritime, energy, logistics, industrial advisory, agro systems, and a
            workforce academy — managed from one operations centre in Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {DIVISIONS.map((d) => (
            <Link
              key={d.slug}
              href={`/divisions#${d.slug}`}
              className="reveal group relative bg-white border border-steel-line/60 p-8 overflow-hidden transition-all duration-300 hover:border-navy hover:shadow-[0_12px_40px_rgba(21,23,28,0.08)]"
            >
              {/* corner detail */}
              <span className="absolute top-0 right-0 w-14 h-14 -mr-7 -mt-7 rotate-45 bg-surface-2 transition-colors duration-300 group-hover:bg-green/10" />
              {/* green top accent on hover — "go" */}
              <span className="absolute top-0 left-0 h-[3px] w-0 bg-green transition-all duration-500 group-hover:w-full" />

              <MS name={ICONS[d.slug] ?? "category"} className="text-orange text-[44px] mb-6 block transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-display text-navy text-xl font-bold tracking-tight">{d.title}</h3>
              <p className="font-body text-text-secondary text-[15px] leading-relaxed mt-3 mb-6">{d.tagline}</p>
              <span className="font-ui text-navy text-[12px] font-bold uppercase tracking-[0.08em] inline-flex items-center gap-2 group-hover:gap-3 group-hover:text-green transition-all duration-300">
                Learn More <MS name="arrow_forward" className="text-[18px]" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
