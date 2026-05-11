// ═══════════════════════════════════════════
// /services — single page, four anchored service sections.
// #ship-management · #marine-inspection · #hsse · #shipping-logistics
// Each section has its own mailto CTA pre-filled with that service's subject.
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { MailButton } from "@/components/MailButton";
import { SERVICES, type Service } from "@/content/services";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ship management for five vessel classes. Marine inspection across eight regimes (OVID/CMID, SIRE, MWS, ISM/MLC). HSSE & loss prevention. Shipping & logistics across EMEA.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title={"Four operational lines.\nOne integrated team."}
        lede="Ship management, marine inspection, HSSE & loss prevention, and shipping & logistics — managed by one operations group, registered as marine contractors and vendors across our operating regions."
      />

      {/* Hero image strip — offshore-vessel is square (1:1); using 16:9 keeps the
          vessel framed without the extreme letterbox an ultrawide would produce.
          object-position keeps the bow centred on the right side. */}
      <section className="bg-cream pb-16 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal img-reveal rounded-[2rem] bg-ink/[0.03] p-1.5 ring-1 ring-ink/[0.04]">
            <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden relative aspect-[16/9]">
              <Image
                src="/images/offshore-vessel.jpg"
                alt="Red offshore supply vessel berthed at a port near a lighthouse"
                fill
                priority
                sizes="(min-width: 1400px) 1376px, 100vw"
                className="object-cover object-[center_60%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Anchor index */}
      <section className="bg-cream border-y border-ink/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="group flex items-start gap-3 border-t border-green/30 pt-4 hover:border-green transition-all"
              >
                <span className="font-mono text-green/60 text-xs mt-1">{s.number}</span>
                <span className="flex-1">
                  <span className="block text-ink font-semibold text-base tracking-tight group-hover:text-green transition-colors">
                    {s.title}
                  </span>
                  <span className="block text-text-secondary text-[13px] leading-relaxed mt-1.5">
                    {s.tagline}
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 text-green/40 mt-1 group-hover:translate-x-0.5 group-hover:text-green transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      {SERVICES.map((service, i) => (
        <ServiceSection key={service.slug} service={service} alt={i % 2 === 1} />
      ))}
    </SiteShell>
  );
}

function ServiceSection({ service, alt }: { service: Service; alt: boolean }) {
  return (
    <section
      id={service.slug}
      className={`scroll-mt-24 py-24 md:py-32 ${alt ? "bg-paper" : "bg-cream"}`}
      aria-labelledby={`${service.slug}-heading`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <div className="reveal md:sticky md:top-32">
              <span className="font-mono text-green text-[11px] uppercase tracking-[0.25em] font-medium">
                {service.number} &mdash; Service line
              </span>
              <h2
                id={`${service.slug}-heading`}
                className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight mt-4"
              >
                {service.title}
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mt-6 max-w-[44ch]">
                {service.tagline}
              </p>
              <div className="mt-8">
                <MailButton
                  variant="link"
                  to={service.contactEmail}
                  label={`Email about ${service.title}`}
                  subject={service.mailtoSubject}
                  body={service.mailtoBody}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className={`reveal img-reveal rounded-[2rem] p-1.5 ring-1 ring-ink/[0.04] mb-10 ${service.image.mode === "contain" ? "bg-paper" : "bg-ink/[0.03]"}`}>
              <div className={`rounded-[calc(2rem-0.375rem)] overflow-hidden relative ${service.image.aspect}`}>
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className={service.image.mode === "contain" ? "object-contain p-2" : "object-cover"}
                />
              </div>
            </div>

            <div className="reveal">
              <p className="text-text-secondary text-lg leading-relaxed max-w-[58ch]">
                {service.body}
              </p>

              <h3 className="text-ink font-semibold text-[13px] uppercase tracking-[0.2em] mt-12 mb-4">
                Capabilities
              </h3>
              <ul className="border-t border-ink/[0.08]">
                {service.capabilities.map((cap, idx) => (
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

              {/* Ship Management gets a market-context chart — frames the service
                  scope against the global commercial vessel mix. */}
              {service.slug === "ship-management" && (
                <figure className="reveal mt-12 rounded-2xl bg-paper border border-ink/[0.06] overflow-hidden">
                  <div className="relative aspect-[5/4] bg-paper">
                    <Image
                      src="/images/vessel-types-chart.jpg"
                      alt="Global commercial vessel mix by deadweight tonnage and value — bulk carriers, oil tankers, container ships, gas carriers, offshore, general cargo"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
