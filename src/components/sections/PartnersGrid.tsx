// ═══════════════════════════════════════════
// PartnersGrid — the canonical, static, categorized logo set.
// Lives once, on /about. Replaces the sitewide scrolling marquee for inner
// pages. Grouped by role so it reads as a credentials reference, not a blur.
// ═══════════════════════════════════════════

import Image from "next/image";
import { OPERATORS, REGULATORS, STANDARDS, PROJECT_CLIENTS, type Partner } from "@/content/partners";

const GROUPS: { label: string; logos: Partner[] }[] = [
  { label: "Operators & Clients", logos: OPERATORS },
  { label: "Regulators & Authorities", logos: REGULATORS },
  { label: "Standards & Accreditation", logos: STANDARDS },
  { label: "Project Engagements", logos: PROJECT_CLIENTS },
];

export function PartnersGrid() {
  return (
    <section className="bg-surface-2 py-20 md:py-28 scroll-mt-24" id="partners-grid" aria-labelledby="partners-grid-heading">
      <div className="mx-auto max-w-[1280px] px-4 md:px-12">
        <div className="reveal mb-12 md:mb-16 max-w-[820px]">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-[2px] bg-green" />
            <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">Recognized &amp; Trusted</span>
          </div>
          <h2 id="partners-grid-heading" className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
            Clients, regulators, and <span className="text-orange">standards bodies.</span>
          </h2>
        </div>

        <div className="space-y-12 md:space-y-14">
          {GROUPS.map((group) => (
            <div key={group.label} className="reveal">
              <h3 className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em] mb-5">{group.label}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-steel-line/40 border border-steel-line/40">
                {group.logos.map((p) => (
                  <div
                    key={p.name}
                    className="group bg-white flex items-center justify-center h-24 md:h-28 px-6"
                    title={p.full}
                  >
                    <Image
                      src={p.logo}
                      alt={p.full}
                      width={200}
                      height={80}
                      sizes="220px"
                      className="h-12 md:h-14 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
