// ═══════════════════════════════════════════
// EnergyTradePillar — homepage section
// Replaces the previous DangoteFlagship which over-led the page with one client.
// Same editorial rhythm as ServicesOverview and SustainabilitySnapshot:
// big display headline, one paragraph, three stats, CTA. No hero image.
// The Dangote composite gets a single dedicated moment on /energy-trade, not here.
// ═══════════════════════════════════════════

import Link from "next/link";
import { ArrowUpRight } from "../icons";

export function EnergyTradePillar() {
  return (
    <section className="bg-paper py-28 md:py-36" aria-labelledby="energy-trade-heading">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-12 md:mb-16">
          <div className="md:col-span-5">
            <div className="reveal">
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-4">
                02 &mdash; Energy &amp; Trade
              </span>
              <h2
                id="energy-trade-heading"
                className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight"
              >
                Petroleum distribution.{" "}
                <em className="text-green-muted">SPM offshore export. EMEA trading.</em>
              </h2>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="reveal text-text-secondary text-lg leading-relaxed max-w-[58ch] mt-2">
              Seamate Energy &amp; Trading handles domestic distribution of refined
              petroleum and petrochemical products via terminal gantry and truck
              loading, with offshore export through Single Point Mooring (SPM)
              systems &mdash; including as an approved distributor for Dangote
              Petroleum Refinery in Lagos.
            </p>
            <Link
              href="/energy-trade"
              className="reveal inline-flex items-center gap-2 mt-8 text-ink font-semibold text-[15px] border-b border-ink/20 pb-1 hover:border-green hover:text-green transition-all duration-500 group"
            >
              Explore Energy &amp; Trade
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-all duration-500" />
            </Link>
          </div>
        </div>

        {/* Pillars row — matches the same divider+mono pattern used elsewhere. */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-ink/[0.08] pt-10">
          {[
            { stat: "Lekki", label: "Refinery base" },
            { stat: "SPM", label: "Offshore export" },
            { stat: "FOB", label: "Delivery terms" },
            { stat: "EMEA", label: "Trading reach" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="reveal border-t-2 border-green/30 pt-4"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-mono text-green text-2xl md:text-3xl font-medium">{item.stat}</span>
              <span className="block text-ink/45 text-[11px] uppercase tracking-wider mt-1.5">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
