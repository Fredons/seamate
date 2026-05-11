// ═══════════════════════════════════════════
// /contact — no forms. Emails, phones, address, response promise.
// Partner wall is hidden here (page goal is action, not credentials).
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { CopyButton } from "@/components/CopyButton";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { CONTACT, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Seamate Maritime Integrated Services in Lagos. Email vessel@seamategroup.com for ship management, info@seamategroup.com for general. 24-hour response, GMT+1.",
  alternates: { canonical: "/contact" },
};

const EMAIL_LINES = [
  {
    label: "General inquiries",
    value: CONTACT.emails.general,
    note: "Marine inspection, HSSE, shipping & logistics, partnerships, sustainability.",
  },
  {
    label: "Vessel & ship management",
    value: CONTACT.emails.vessel,
    note: "Ship management bookings, vendor registration, operational requests.",
  },
];

export default function ContactPage() {
  return (
    <SiteShell hidePartnerWall>
      <PageHero
        eyebrow="Contact"
        title={"Email, phone, or both.\nWe answer within 24 hours."}
        lede="Two operating emails, two lines, one team in Lagos. We respond inside one business day, GMT+1, every day except Sundays."
      />

      {/* Emails */}
      <section className="bg-cream py-20 md:py-28" id="email">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4">
              <div className="reveal md:sticky md:top-32">
                <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-4">
                  01 &mdash; Email
                </span>
                <h2 className="font-display text-ink text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.05] tracking-tight">
                  Pick the right inbox.{" "}
                  <em className="text-green-muted">It reaches the right team.</em>
                </h2>
              </div>
            </div>

            <div className="md:col-span-8 space-y-5">
              {EMAIL_LINES.map((line, i) => (
                <div
                  key={line.value}
                  className="reveal rounded-2xl bg-white border border-ink/[0.06] p-6 md:p-8 hover-lift"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-ink/45 text-[11px] uppercase tracking-[0.2em] font-medium">{line.label}</span>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <a
                      href={`mailto:${line.value}`}
                      className="font-mono text-ink text-base sm:text-lg md:text-xl hover:text-green transition-colors break-all"
                    >
                      {line.value}
                    </a>
                    <CopyButton value={line.value} label={`${line.label} email`} />
                  </div>
                  <p className="text-text-secondary text-[15px] leading-relaxed mt-3 max-w-[55ch]">{line.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phones */}
      <section className="bg-paper py-20 md:py-28" id="phone">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-4">
              <div className="reveal md:sticky md:top-32">
                <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-4">
                  02 &mdash; Phone
                </span>
                <h2 className="font-display text-ink text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.05] tracking-tight">
                  Direct lines{" "}
                  <em className="text-green-muted">to the operations desk.</em>
                </h2>
                <p className="text-text-secondary text-base leading-relaxed mt-6 max-w-[40ch]">{CONTACT.hours}</p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-5">
              {CONTACT.phones.map((phone, i) => (
                <div
                  key={phone.e164}
                  className="reveal rounded-2xl bg-white border border-ink/[0.06] p-5 sm:p-6 md:p-8 hover-lift flex items-center gap-4 sm:gap-5"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-green/[0.06] border border-green/[0.12] flex items-center justify-center shrink-0">
                    <PhoneIcon className="w-5 h-5 text-green" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="text-ink/45 text-[11px] uppercase tracking-[0.2em] font-medium">{phone.label}</span>
                    <a
                      href={`tel:${phone.e164}`}
                      className="block font-mono text-ink text-base sm:text-lg md:text-xl hover:text-green transition-colors mt-1.5 break-all"
                    >
                      {phone.number}
                    </a>
                  </div>
                  <CopyButton value={phone.number} label={`${phone.label} phone`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust line — replaces the full partner wall on /contact */}
      <section className="bg-cream border-t border-ink/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-3">
                03 &mdash; Trusted by
              </span>
              <h2 className="font-display text-ink text-2xl md:text-3xl leading-tight tracking-tight">
                NLNG, Dangote, ExxonMobil — and ten others.
              </h2>
            </div>
            <div className="md:col-span-7 flex items-center md:justify-end gap-3 flex-wrap">
              {[
                "ISO 9001:2015",
                "NIMASA Licensed",
                "DPR Permit",
                "RINA Classified",
                "eCMID Inspector",
                "D&B Verified",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full bg-paper border border-ink/[0.08] px-3.5 py-1.5 text-ink/60 text-[12px] font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green/60" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office card */}
      <section className="bg-navy py-20 md:py-28 text-cream">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 reveal">
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green-light font-medium mb-4">
                04 &mdash; In person
              </span>
              <h2 className="font-display text-cream text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.05] tracking-tight">
                Lagos office,{" "}
                <em className="text-green-light">{SITE.region} coverage.</em>
              </h2>
              <p className="text-cream/65 text-base leading-relaxed max-w-[40ch] mt-6">
                For a site visit or face-to-face meeting, please coordinate by
                email or phone. Walk-ins are subject to operational schedule.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="reveal rounded-2xl bg-navy-light border border-cream/10 p-8 md:p-10">
                <span className="text-cream/40 text-[11px] uppercase tracking-[0.2em] font-medium">Headquarters</span>
                <p className="font-display text-cream text-2xl md:text-3xl leading-tight mt-3">{SITE.headquarters}</p>
                <p className="text-cream/55 text-[15px] leading-relaxed mt-4 max-w-[40ch]">
                  Coverage across the Gulf of Guinea, the Trans-West African
                  Coastal Highway, and the broader EMEA trading corridor.
                </p>
                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-cream/10">
                  <span className="w-8 h-8 rounded-full bg-green-light/15 flex items-center justify-center">
                    <MailIcon className="w-4 h-4 text-green-light" />
                  </span>
                  <p className="text-cream/60 text-sm font-mono">{CONTACT.responseTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
