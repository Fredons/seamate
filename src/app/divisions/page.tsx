// ═══════════════════════════════════════════
// /divisions — Seamate Group's six operating arms (Institutional Excellence).
// #maritime · #energy · #logistics · #industrial-advisory · #agro-systems · #academy
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { MailButton } from "@/components/MailButton";
import { DIVISIONS, type Division } from "@/content/divisions";
import { MS } from "@/components/icons";

export const metadata: Metadata = {
  title: "Divisions",
  description:
    "Six operating divisions of Seamate Group: Maritime (ship management, marine inspection, HSSE), Energy (Dangote distribution, SPM), Logistics (coastal trade, freight), Industrial Advisory, Agro Systems, and the Seamate Academy workforce arm.",
  alternates: { canonical: "/divisions" },
};

const ICONS: Record<string, string> = {
  maritime: "anchor",
  energy: "oil_barrel",
  logistics: "conveyor_belt",
  "industrial-advisory": "foundation",
  "agro-systems": "agriculture",
  academy: "school",
};

export default function DivisionsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Divisions"
        title={"Six divisions.\nOne institutional team."}
        lede="Maritime, energy, logistics, industrial advisory, agro systems, and a workforce academy — managed from one operations centre in Lagos, with reach across Africa and the EMEA trading corridor."
      />

      {/* Anchor index */}
      <section className="bg-surface-2 border-b border-steel-line/60">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-steel-line/40">
            {DIVISIONS.map((d) => (
              <a
                key={d.slug}
                href={`#${d.slug}`}
                className="group flex items-center gap-3 bg-surface-2 hover:bg-white px-4 py-4 transition-colors"
              >
                <MS name={ICONS[d.slug] ?? "category"} className="text-orange text-[22px]" />
                <span className="flex-1">
                  <span className="block font-display text-navy text-[14px] font-bold tracking-tight group-hover:text-orange transition-colors">
                    {d.shortName}
                  </span>
                </span>
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
      className={`scroll-mt-24 py-20 md:py-28 ${alt ? "bg-surface-2" : "bg-surface"}`}
      aria-labelledby={`${division.slug}-heading`}
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <div className="reveal md:sticky md:top-28">
              <span className="w-12 h-12 bg-navy flex items-center justify-center mb-6">
                <MS name={ICONS[division.slug] ?? "category"} className="text-orange text-[26px]" />
              </span>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-[2px] bg-orange" />
                <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">
                  Division {division.number}
                </span>
              </div>
              <h2
                id={`${division.slug}-heading`}
                className="font-display text-navy text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] leading-[1.05]"
              >
                {division.title}
              </h2>
              <p className="font-body text-text-secondary text-base leading-relaxed mt-5 max-w-[44ch]">
                {division.tagline}
              </p>
              <div className="mt-7">
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
              <div className="reveal img-reveal border-l-[3px] border-orange mb-10">
                <div className={`relative overflow-hidden ${division.image.aspect} ${division.image.mode === "contain" ? "bg-white border border-steel-line/60 border-l-0" : ""}`}>
                  <Image
                    src={division.image.src}
                    alt={division.image.alt}
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className={division.image.mode === "contain" ? "object-contain p-3" : "object-cover"}
                  />
                </div>
              </div>
            )}

            <div className="reveal">
              <p className="font-body text-text-secondary text-lg leading-relaxed max-w-[58ch]">{division.body}</p>

              <h3 className="font-ui text-navy text-[12px] font-bold uppercase tracking-[0.18em] mt-12 mb-4">
                Capabilities
              </h3>
              <ul className="border-t border-steel-line/60">
                {division.capabilities.map((cap, idx) => (
                  <li
                    key={cap}
                    className="reveal flex items-start gap-4 border-b border-steel-line/60 py-4"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    <span className="font-mono text-orange text-xs mt-1.5 shrink-0">
                      /{(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="font-body text-ink text-base leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>

              {/* Maritime — market chart */}
              {division.slug === "maritime" && (
                <figure className="reveal mt-12 bg-white border border-steel-line/60 overflow-hidden">
                  <div className="relative aspect-[5/4] bg-white">
                    <Image src="/images/vessel-types-chart.jpg" alt="Global commercial vessel mix by deadweight tonnage and value" fill sizes="(min-width: 768px) 55vw, 100vw" className="object-contain p-4" />
                  </div>
                  <figcaption className="px-5 py-4 border-t border-steel-line/60 flex items-start gap-4">
                    <span className="font-ui text-steel text-[10px] font-bold uppercase tracking-[0.18em] shrink-0 mt-0.5">Market scope</span>
                    <span className="font-body text-text-secondary text-[13px] leading-relaxed">
                      We manage offshore, cargo, tanker, project, and fishing vessels — segments that together account for the majority of global commercial deadweight.
                    </span>
                  </figcaption>
                </figure>
              )}

              {/* Energy — Dakar-Lagos map */}
              {division.slug === "energy" && (
                <figure className="reveal mt-12 bg-white border border-steel-line/60 overflow-hidden">
                  <div className="relative aspect-[5/4]">
                    <Image src="/images/dakar-lagos-highway.png" alt="Trans-West African Coastal Highway from Dakar to Lagos" fill sizes="(min-width: 768px) 55vw, 100vw" className="object-contain p-3" />
                  </div>
                  <figcaption className="px-5 py-4 border-t border-steel-line/60 flex items-start gap-4">
                    <span className="font-ui text-steel text-[10px] font-bold uppercase tracking-[0.18em] shrink-0 mt-0.5">Trading corridor</span>
                    <span className="font-body text-text-secondary text-[13px] leading-relaxed">
                      The Trans-West African Coastal Highway anchors our regional petroleum and trade movement, from Dakar through Lagos and onward across EMEA.
                    </span>
                  </figcaption>
                </figure>
              )}

              {/* Academy — SASI block (green = workforce / sustainability) */}
              {division.slug === "academy" && (
                <div className="reveal mt-12 bg-green-pale border border-green/25 border-l-[3px] border-l-green p-6 md:p-8">
                  <div className="flex items-center gap-2.5 mb-3">
                    <MS name="eco" filled className="text-green text-[18px]" />
                    <span className="font-ui text-green-muted text-[11px] font-bold uppercase tracking-[0.18em]">SASI Investment</span>
                  </div>
                  <p className="font-body text-ink text-[15px] leading-relaxed max-w-[60ch]">
                    We are raising $12M&ndash;$25M to scale SASI into a full
                    training-to-employment pipeline, partnering with tanker,
                    dry-cargo, and clean-energy vessel operators. For partnership
                    or capital inquiries, contact the program directly.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-6 md:gap-10">
                    {[
                      { v: "500", l: "Cadet intake" },
                      { v: "10K", l: "10-year target" },
                      { v: "2035", l: "Officer-shortage horizon" },
                    ].map((s) => (
                      <div key={s.l} className="border-t-2 border-green/40 pt-3">
                        <span className="font-display text-green-muted text-xl md:text-2xl font-extrabold">{s.v}</span>
                        <span className="block font-body text-ink/50 text-[11px] uppercase tracking-wider mt-1.5">{s.l}</span>
                      </div>
                    ))}
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
