// ═══════════════════════════════════════════
// /contact — Institutional Excellence. Emails, phones, trust line, office.
// No forms; partner wall hidden (page goal is action).
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { CopyButton } from "@/components/CopyButton";
import { MS } from "@/components/icons";
import { CONTACT, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Seamate Group in Lagos. Email vessel@seamategroup.com for ship management, info@seamategroup.com for general. 24-hour response, GMT+1.",
  alternates: { canonical: "/contact" },
};

const EMAIL_LINES = [
  { label: "General inquiries", value: CONTACT.emails.general, note: "Marine inspection, HSSE, shipping & logistics, partnerships, sustainability." },
  { label: "Vessel & ship management", value: CONTACT.emails.vessel, note: "Ship management bookings, vendor registration, operational requests." },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title={"Email, phone, or both.\nWe answer within 24 hours."}
        lede="Two operating emails, two lines, one team in Lagos. We respond inside one business day, GMT+1, every day except Sundays."
      />

      {/* Emails */}
      <section className="bg-surface py-20 md:py-28" id="email">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4">
              <div className="reveal md:sticky md:top-28">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-[2px] bg-orange" />
                  <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">01 · Email</span>
                </div>
                <h2 className="font-display text-navy text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.06]">
                  Pick the right inbox. <span className="text-orange">It reaches the right team.</span>
                </h2>
              </div>
            </div>
            <div className="md:col-span-8 space-y-5">
              {EMAIL_LINES.map((line, i) => (
                <div key={line.value} className="reveal relative bg-white border border-steel-line/60 p-6 md:p-8" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="absolute top-0 left-0 h-[3px] w-full bg-navy" />
                  <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">{line.label}</span>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <a href={`mailto:${line.value}`} className="font-mono text-navy text-base sm:text-lg md:text-xl hover:text-orange transition-colors break-all">{line.value}</a>
                    <CopyButton value={line.value} label={`${line.label} email`} />
                  </div>
                  <p className="font-body text-text-secondary text-[15px] leading-relaxed mt-3 max-w-[55ch]">{line.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phones */}
      <section className="bg-surface-2 py-20 md:py-28" id="phone">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4">
              <div className="reveal md:sticky md:top-28">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-[2px] bg-orange" />
                  <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">02 · Phone</span>
                </div>
                <h2 className="font-display text-navy text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.06]">
                  Direct lines <span className="text-orange">to the operations desk.</span>
                </h2>
                <p className="font-body text-text-secondary text-base leading-relaxed mt-6 max-w-[40ch]">{CONTACT.hours}</p>
              </div>
            </div>
            <div className="md:col-span-8 space-y-5">
              {CONTACT.phones.map((phone, i) => (
                <div key={phone.e164} className="reveal bg-white border border-steel-line/60 p-5 sm:p-6 md:p-8 flex items-center gap-4 sm:gap-5" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="w-11 h-11 sm:w-12 sm:h-12 bg-navy flex items-center justify-center shrink-0">
                    <MS name="call" className="text-orange text-[22px]" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">{phone.label}</span>
                    <a href={`tel:${phone.e164}`} className="block font-mono text-navy text-base sm:text-lg md:text-xl hover:text-orange transition-colors mt-1.5 break-all">{phone.number}</a>
                  </div>
                  <CopyButton value={phone.number} label={`${phone.label} phone`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust line */}
      <section className="bg-surface border-t border-steel-line/60">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-[2px] bg-green" />
                <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">03 · Trusted by</span>
              </div>
              <h2 className="font-display text-navy text-2xl md:text-3xl font-extrabold tracking-[-0.02em] leading-tight">
                NLNG, Dangote, ExxonMobil — and ten others.
              </h2>
            </div>
            <div className="md:col-span-7 flex items-center md:justify-end gap-2.5 flex-wrap">
              {["ISO 9001:2015", "NIMASA Licensed", "DPR Permit", "RINA Classified", "eCMID Inspector", "D&B Verified"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 bg-white border border-steel-line/60 px-3.5 py-1.5 text-steel text-[12px] font-ui font-semibold uppercase tracking-[0.04em]">
                  <span className="w-1.5 h-1.5 bg-green" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office card */}
      <section className="bg-navy py-20 md:py-28 text-on-dark">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 reveal">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-[2px] bg-green-light" />
                <span className="font-ui text-green-light text-[11px] font-bold uppercase tracking-[0.18em]">04 · In person</span>
              </div>
              <h2 className="font-display text-white text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
                Lagos office, <span className="text-orange">{SITE.region} coverage.</span>
              </h2>
              <p className="font-body text-on-dark/65 text-base leading-relaxed max-w-[40ch] mt-6">
                For a site visit or face-to-face meeting, please coordinate by
                email or phone. Walk-ins are subject to operational schedule.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="reveal bg-navy-mid border border-on-dark/10 border-l-[3px] border-l-orange p-8 md:p-10">
                <span className="font-ui text-on-dark/40 text-[11px] font-bold uppercase tracking-[0.18em]">Headquarters</span>
                <p className="font-display text-white text-2xl md:text-3xl font-extrabold tracking-tight mt-3">{SITE.headquarters}</p>
                <p className="font-body text-on-dark/55 text-[15px] leading-relaxed mt-4 max-w-[40ch]">
                  Coverage across the Gulf of Guinea, the Trans-West African
                  Coastal Highway, and the broader EMEA trading corridor.
                </p>
                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-on-dark/10">
                  <MS name="schedule" className="text-green-light text-[20px]" />
                  <p className="font-mono text-on-dark/60 text-sm">{CONTACT.responseTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
