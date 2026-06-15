// ═══════════════════════════════════════════
// AwardsSection — Institutional Excellence cards (Stitch).
// White cards, steel border, navy 3px top accent, Material Symbol trophy.
// ═══════════════════════════════════════════

import { MS } from "../icons";
import { AWARDS } from "@/content/credentials";

export function AwardsSection() {
  return (
    <section className="bg-surface-2 py-20 md:py-28" aria-labelledby="awards-heading">
      <div className="mx-auto max-w-[1280px] px-4 md:px-12">
        <div className="text-center mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-[2px] bg-orange" />
            <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">Recognition</span>
            <span className="w-7 h-[2px] bg-orange" />
          </div>
          <h2 id="awards-heading" className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em]">
            Independently Verified
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AWARDS.map((award, i) => (
            <div
              key={award.year}
              className="reveal relative bg-white border border-steel-line/60 p-8 md:p-10 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(21,23,28,0.07)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="absolute top-0 left-0 h-[3px] w-full bg-navy" />
              <div className="flex items-center gap-3 mb-6">
                <span className="w-11 h-11 rounded-md bg-orange/10 flex items-center justify-center">
                  <MS name="emoji_events" filled className="text-orange text-[22px]" />
                </span>
                <span className="font-mono text-orange text-base font-medium">{award.date ?? award.year}</span>
              </div>
              <h3 className="font-display text-navy text-xl font-bold tracking-tight leading-snug">{award.name}</h3>
              <p className="font-ui text-steel text-[12px] font-semibold uppercase tracking-[0.06em] mt-3">{award.body}</p>
              <p className="font-body text-text-secondary text-[15px] leading-relaxed mt-5">{award.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
