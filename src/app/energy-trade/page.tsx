// ═══════════════════════════════════════════
// /energy-trade — flagship commercial pillar.
// Dangote, SPM, FOB, EMEA, Coastal Shipping.
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { MailButton } from "@/components/MailButton";
import { ENERGY_TRADE } from "@/content/energy-trade";

export const metadata: Metadata = {
  title: "Energy & Trade",
  description:
    "Dangote Petroleum Refinery's approved domestic distributor and export trading counterparty. SPM offshore loading, FOB delivery, coastal shipping across the EMEA corridor.",
  alternates: { canonical: "/energy-trade" },
};

export default function EnergyTradePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow={ENERGY_TRADE.hero.eyebrow}
        title={ENERGY_TRADE.hero.title}
        lede={ENERGY_TRADE.hero.lede}
      />

      {/* Hero composite strip — native 3:2 ratio, no crop. */}
      <section className="bg-cream pb-16 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal img-reveal rounded-[2rem] bg-ink/[0.03] p-1.5 ring-1 ring-ink/[0.04]">
            <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden relative aspect-[3/2]">
              <Image
                src="/images/dangote-composite.jpg"
                alt="Dangote Petroleum Refinery composite: tanker truck at gantry, offshore vessel at Single Point Mooring (SPM)"
                fill
                priority
                sizes="(min-width: 1400px) 1376px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars strip */}
      <section className="bg-cream border-y border-ink/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {ENERGY_TRADE.pillars.map((item) => (
              <div key={item.label} className="border-t-2 border-green/30 pt-4">
                <span className="font-mono text-green text-2xl md:text-3xl font-medium">{item.value}</span>
                <span className="block text-ink/45 text-[11px] uppercase tracking-wider mt-1.5">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured engagement — text-led pull quote.
          The composite hero image above already does the visual heavy lifting;
          repeating it here read as a Dangote ad. This treatment keeps the
          editorial weight without the duplicate visual. */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal flex items-center gap-4 mb-10 md:mb-12">
            <span className="font-mono text-green text-[11px] uppercase tracking-[0.25em] font-medium">
              Featured engagement
            </span>
            <span className="h-[1px] flex-1 bg-ink/[0.1]" />
          </div>

          <div className="reveal max-w-[1100px]">
            <span className="font-display text-green-muted text-6xl md:text-8xl leading-none opacity-30 block">
              &ldquo;
            </span>
            <blockquote className="font-display text-ink text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] tracking-tight -mt-4 md:-mt-8">
              Dangote Refinery, Ibeju-Lekki —{" "}
              <em className="text-green-muted">
                Africa&rsquo;s largest single-train refinery,
              </em>{" "}
              served by Seamate&rsquo;s approved domestic distribution and SPM
              offshore export.
            </blockquote>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-10 mt-12 md:mt-16">
            <p className="md:col-span-7 text-text-secondary text-lg leading-relaxed max-w-[58ch]">
              As an approved distributor, Seamate handles refined petroleum and
              petrochemical movement from the refinery into the domestic Nigerian
              market and out across the EMEA corridor through Single Point Mooring
              offshore loading.
            </p>
            <div className="md:col-span-5 md:pl-10 md:border-l md:border-ink/[0.08]">
              <span className="font-mono text-ink/40 text-[11px] uppercase tracking-[0.25em] block mb-3">
                Engagement scope
              </span>
              <ul className="space-y-2.5 text-ink text-[15px]">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green mt-2 shrink-0" />Approved domestic distributor</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green mt-2 shrink-0" />Export trading counterparty</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-green mt-2 shrink-0" />SPM offshore vessel loading</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Two divisions */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal mb-16 md:mb-20 max-w-[820px]">
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-4">
              Two divisions
            </span>
            <h2 className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight">
              Energy &amp; Trading,{" "}
              <em className="text-green-muted">plus Coastal Shipping.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {ENERGY_TRADE.divisions.map((div, i) => {
              const isCoastalShipping = div.title === "Coastal Shipping";
              return (
                <div key={div.title} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="rounded-[2rem] bg-paper p-1.5 ring-1 ring-ink/[0.04] hover-lift h-full">
                    <div className="rounded-[calc(2rem-0.375rem)] bg-white p-8 md:p-10 h-full flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                      <span className="font-mono text-green/60 text-sm">{div.number}</span>
                      <h3 className="font-display text-ink text-2xl md:text-3xl leading-tight tracking-tight mt-3">
                        {div.title}
                      </h3>

                      {isCoastalShipping && (
                        <figure className="mt-6 rounded-xl overflow-hidden border border-ink/[0.06] bg-paper">
                          {/* Native ratio 1.21; using 5:4 (1.25) so the map renders
                              edge-to-edge without letterboxing. */}
                          <div className="relative aspect-[5/4]">
                            <Image
                              src="/images/dakar-lagos-highway.png"
                              alt="Trans-West African Coastal Highway map from Dakar to Lagos"
                              fill
                              sizes="(min-width: 768px) 40vw, 100vw"
                              className="object-contain p-3"
                            />
                          </div>
                          <figcaption className="font-mono text-ink/45 text-[10px] uppercase tracking-[0.2em] px-4 py-2.5 border-t border-ink/[0.06]">
                            Trans-West African Coastal Highway · Dakar → Lagos
                          </figcaption>
                        </figure>
                      )}

                      <p className="text-text-secondary text-base leading-relaxed mt-6">{div.body}</p>

                      <ul className="mt-8 space-y-3 flex-1">
                        {div.details.map((d) => (
                          <li key={d} className="flex items-start gap-3 text-ink text-[15px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-green mt-2 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trader CTA */}
      <section className="bg-navy py-20 md:py-28 text-cream">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="md:col-span-7 reveal">
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green-light font-medium mb-4">
                Trader inquiries
              </span>
              <h2 className="font-display text-cream text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight">
                Tender programs, FOB deliveries,{" "}
                <em className="text-green-light">SPM loading slots.</em>
              </h2>
              <p className="text-cream/65 text-lg leading-relaxed max-w-[55ch] mt-6">
                For domestic distribution, export tender programs, or SPM loading
                inquiries, contact the trading desk directly.
              </p>
            </div>
            <div className="md:col-span-5 flex md:justify-end">
              <div className="reveal">
                <MailButton
                  label="Email the trading desk"
                  subject="Energy & Trade Inquiry"
                  body={
                    "Hello Seamate Energy & Trading,\n\nWe're interested in:\n- Product:\n- Volume:\n- Delivery terms (FOB / CIF / other):\n- Destination port(s):\n- Target window:\n\nThank you,\n"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
