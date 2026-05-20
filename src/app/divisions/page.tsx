// ═══════════════════════════════════════════
// /divisions — Seamate Group's six operating arms on one anchored page.
// #maritime · #energy · #logistics · #industrial-advisory · #agro-systems · #academy
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { MailButton } from "@/components/MailButton";
import { DIVISIONS, type Division } from "@/content/divisions";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Divisions",
  description:
    "Six operating divisions of Seamate Group: Maritime (ship management, marine inspection, HSSE), Energy (Dangote distribution, SPM), Logistics (coastal trade, freight), Industrial Advisory, Agro Systems, and the Seamate Academy workforce arm.",
  alternates: { canonical: "/divisions" },
};

export default function DivisionsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Divisions"
        title={"Six divisions.\nOne institutional team."}
        lede="Maritime, energy, logistics, industrial advisory, agro systems, and a workforce academy — managed from one operations centre in Lagos, with reach across Africa and the EMEA trading corridor."
      />

      {/* Anchor index */}
      <section className="bg-cream border-y border-ink/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {DIVISIONS.map((d) => (
              <a
                key={d.slug}
                href={`#${d.slug}`}
                className="group flex items-start gap-3 border-t border-green/30 pt-4 hover:border-green transition-all"
              >
                <span className="font-mono text-green/60 text-xs mt-1">{d.number}</span>
                <span className="flex-1">
                  <span className="block text-ink font-semibold text-base tracking-tight group-hover:text-green transition-colors">
                    {d.shortName}
                  </span>
                  <span className="block text-text-secondary text-[12px] leading-relaxed mt-1.5">
                    {d.tagline}
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 text-green/40 mt-1 group-hover:translate-x-0.5 group-hover:text-green transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {DIVISIONS.map((division, i) => (
        <DivisionSection key={division.slug} division={division} alt={i % 2 === 1} />
      ))}
    </SiteShell>
  );
}

function DivisionSection({ division, alt }: { division: Division; alt: boolean }) {
  return (
    <section
      id={division.slug}
      className={`scroll-mt-24 py-24 md:py-32 ${alt ? "bg-paper" : "bg-cream"}`}
      aria-labelledby={`${division.slug}-heading`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <div className="reveal md:sticky md:top-32">
              <span className="font-mono text-green text-[11px] uppercase tracking-[0.25em] font-medium">
                {division.number} &mdash; Division
              </span>
              <h2
                id={`${division.slug}-heading`}
                className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight mt-4"
              >
                {division.title}
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mt-6 max-w-[44ch]">
                {division.tagline}
              </p>
              <div className="mt-8">
                <MailButton
                  variant="link"
                  to={division.contactEmail}
                  label={`Email ${division.shortName}`}
                  subject={division.mailtoSubject}
                  body={division.mailtoBody}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {division.image && (
              <div
                className={`reveal img-reveal rounded-[2rem] p-1.5 ring-1 ring-ink/[0.04] mb-10 ${
                  division.image.mode === "contain" ? "bg-paper" : "bg-ink/[0.03]"
                }`}
              >
                <div className={`rounded-[calc(2rem-0.375rem)] overflow-hidden relative ${division.image.aspect}`}>
                  <Image
                    src={division.image.src}
                    alt={division.image.alt}
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className={division.image.mode === "contain" ? "object-contain p-2" : "object-cover"}
                  />
                </div>
              </div>
            )}

            <div className="reveal">
              <p className="text-text-secondary text-lg leading-relaxed max-w-[58ch]">{division.body}</p>

              <h3 className="text-ink font-semibold text-[13px] uppercase tracking-[0.2em] mt-12 mb-4">
                Capabilities
              </h3>
              <ul className="border-t border-ink/[0.08]">
                {division.capabilities.map((cap, idx) => (
                  <li
                    key={cap}
                    className="reveal flex items-start gap-4 border-b border-ink/[0.08] py-4"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    <span className="font-mono text-green/50 text-xs mt-1.5 shrink-0">
                      /{(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-ink text-base leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>

              {/* Maritime gets the market-context chart */}
              {division.slug === "maritime" && (
                <figure className="reveal mt-12 rounded-2xl bg-paper border border-ink/[0.06] overflow-hidden">
                  <div className="relative aspect-[5/4] bg-paper">
                    <Image
                      src="/images/vessel-types-chart.jpg"
                      alt="Global commercial vessel mix by deadweight tonnage and value"
                      fill
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="object-contain p-4"
                    />
                  </div>
                  <figcaption className="px-5 py-4 border-t border-ink/[0.06] flex items-start gap-4">
                    <span className="font-mono text-green/50 text-[10px] uppercase tracking-[0.2em] shrink-0 mt-0.5">
                      Market scope
                    </span>
                    <span className="text-text-secondary text-[13px] leading-relaxed">
                      We manage offshore, cargo, tanker, project, and fishing vessels — segments that together account for the majority of global commercial deadweight.
                    </span>
                  </figcaption>
                </figure>
              )}

              {/* Energy gets the Dakar-Lagos highway map */}
              {division.slug === "energy" && (
                <figure className="reveal mt-12 rounded-2xl bg-paper border border-ink/[0.06] overflow-hidden">
                  <div className="relative aspect-[5/4]">
                    <Image
                      src="/images/dakar-lagos-highway.png"
                      alt="Trans-West African Coastal Highway from Dakar to Lagos"
                      fill
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="object-contain p-3"
                    />
                  </div>
                  <figcaption className="px-5 py-4 border-t border-ink/[0.06] flex items-start gap-4">
                    <span className="font-mono text-green/50 text-[10px] uppercase tracking-[0.2em] shrink-0 mt-0.5">
                      Trading corridor
                    </span>
                    <span className="text-text-secondary text-[13px] leading-relaxed">
                      The Trans-West African Coastal Highway anchors our regional petroleum and trade movement, from Dakar through Lagos and onward across EMEA.
                    </span>
                  </figcaption>
                </figure>
              )}

              {/* Academy gets the SASI investment block */}
              {division.slug === "academy" && (
                <div className="reveal mt-12 rounded-2xl bg-green-pale border border-green/20 p-6 md:p-8">
                  <span className="font-mono text-green text-[11px] uppercase tracking-[0.2em]">SASI Investment</span>
                  <p className="text-ink text-[15px] leading-relaxed mt-3 max-w-[60ch]">
                    We are raising $12M&ndash;$25M to scale SASI into a full
                    training-to-employment pipeline, partnering with tanker,
                    dry-cargo, and clean-energy vessel operators. For partnership
                    or capital inquiries, contact the program directly.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-6 md:gap-10">
                    <div className="border-t-2 border-green/30 pt-3">
                      <span className="font-mono text-green text-xl md:text-2xl font-medium">500</span>
                      <span className="block text-ink/45 text-[11px] uppercase tracking-wider mt-1.5">Cadet intake</span>
                    </div>
                    <div className="border-t-2 border-green/30 pt-3">
                      <span className="font-mono text-green text-xl md:text-2xl font-medium">10K</span>
                      <span className="block text-ink/45 text-[11px] uppercase tracking-wider mt-1.5">10-year target</span>
                    </div>
                    <div className="border-t-2 border-green/30 pt-3">
                      <span className="font-mono text-green text-xl md:text-2xl font-medium">2035</span>
                      <span className="block text-ink/45 text-[11px] uppercase tracking-wider mt-1.5">Officer-shortage horizon</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
