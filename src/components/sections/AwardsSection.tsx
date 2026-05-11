// ═══════════════════════════════════════════
// AwardsSection — three real awards, named, dated, verifiable.
// ═══════════════════════════════════════════

import { TrophyIcon } from "../icons";
import { AWARDS } from "@/content/credentials";

export function AwardsSection() {
  return (
    <section className="bg-paper py-24 md:py-32" aria-labelledby="awards-heading">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="reveal mb-16 md:mb-20 max-w-[700px]">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-4">
            04 &mdash; Recognition
          </span>
          <h2 id="awards-heading" className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight">
            Independently verified.{" "}
            <em className="text-green-muted">Three times over.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AWARDS.map((award, i) => (
            <div key={award.year} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="rounded-[2rem] bg-ink/[0.02] p-1.5 ring-1 ring-ink/[0.04] hover-lift h-full">
                <div className="rounded-[calc(2rem-0.375rem)] bg-white p-8 md:p-10 h-full flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center">
                      <TrophyIcon className="w-5 h-5 text-green" />
                    </span>
                    <span className="font-mono text-green text-lg font-medium">{award.year}</span>
                  </div>
                  <h3 className="font-display text-ink text-2xl leading-tight tracking-tight">{award.name}</h3>
                  <p className="text-ink/50 text-[13px] font-medium uppercase tracking-wider mt-3">{award.body}</p>
                  <p className="text-text-secondary text-[15px] leading-relaxed mt-6 flex-1">{award.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
