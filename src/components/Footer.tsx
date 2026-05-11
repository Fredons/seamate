// ═══════════════════════════════════════════
// Footer — editorial paper register, matching the rest of the site.
// Three bands:
//   1. Reach Seamate — big tagline + two mailto cards
//   2. Sitemap — 4 columns with deep anchored links
//   3. Legal ribbon — thin row at the very bottom
// Replaces the previous navy block which didn't match the site register.
// ═══════════════════════════════════════════

import Image from "next/image";
import Link from "next/link";
import { SITE, CONTACT } from "@/content/site";
import { ArrowUpRight } from "./icons";

const FOOTER_COLUMNS = [
  {
    label: "Services",
    links: [
      { label: "Ship Management", href: "/services#ship-management" },
      { label: "Marine Inspection", href: "/services#marine-inspection" },
      { label: "HSSE & Loss Prevention", href: "/services#hsse" },
      { label: "Shipping & Logistics", href: "/services#shipping-logistics" },
    ],
  },
  {
    label: "Sustainability",
    links: [
      { label: "Decarbonisation", href: "/sustainability#decarbonisation" },
      { label: "Blue Economy", href: "/sustainability#blue-economy" },
      { label: "Cadetship · SASI", href: "/sustainability#cadetship" },
      { label: "STEM Hub", href: "/sustainability#stem-hub" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Energy & Trade", href: "/energy-trade" },
      { label: "Credentials", href: "/about#credentials" },
      { label: "Awards", href: "/about#recognition" },
      { label: "Partner with us", href: "/about#partner-with-us" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const MAILTO_CARDS = [
  {
    eyebrow: "General inquiries",
    email: CONTACT.emails.general,
    scope: "Inspection · HSSE · Logistics · Partnerships",
  },
  {
    eyebrow: "Vessel operations",
    email: CONTACT.emails.vessel,
    scope: "Ship management · Vendor registration",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper">
      {/* ─── Band 1 — Reach Seamate ─── */}
      <section className="border-t border-ink/[0.08]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-5">
              <span className="font-mono text-green text-[11px] uppercase tracking-[0.25em] block mb-6">
                Reach Seamate
              </span>
              <h2 className="font-display text-ink text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.02] tracking-tight">
                Built in Lagos.{" "}
                <em className="text-green-muted">Trusted across EMEA.</em>
              </h2>
              <p className="text-text-secondary text-base leading-relaxed max-w-[40ch] mt-6">
                Lagos office, EMEA coverage. {CONTACT.responseTime}
              </p>

              <div className="mt-8 space-y-2.5">
                {CONTACT.phones.map((phone) => (
                  <p key={phone.e164} className="font-mono text-ink/70 text-[14px]">
                    <span className="text-ink/35 text-[11px] uppercase tracking-[0.2em] mr-3">{phone.label}</span>
                    <a href={`tel:${phone.e164}`} className="hover:text-green transition-colors">
                      {phone.number}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {MAILTO_CARDS.map(({ eyebrow, email, scope }) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="group block rounded-2xl bg-white border border-ink/[0.08] p-6 md:p-7 hover:border-green/40 hover:shadow-[0_8px_30px_rgba(29,122,75,0.08)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-ink/45 text-[11px] uppercase tracking-[0.2em] font-medium">{eyebrow}</span>
                    <span className="w-7 h-7 rounded-full bg-green/[0.06] flex items-center justify-center group-hover:bg-green transition-all duration-500">
                      <ArrowUpRight className="w-3.5 h-3.5 text-green group-hover:text-cream transition-colors duration-500" />
                    </span>
                  </div>
                  <p className="font-mono text-ink text-base md:text-lg mt-4 break-all group-hover:text-green transition-colors duration-500">
                    {email}
                  </p>
                  <p className="text-text-secondary text-[13px] leading-relaxed mt-3">{scope}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Band 2 — Sitemap ─── */}
      <section className="border-t border-ink/[0.08]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" aria-label="Seamate — home" className="inline-block">
                <Image
                  src="/seamate-logo.png"
                  alt=""
                  width={150}
                  height={42}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-text-secondary text-[13px] leading-relaxed mt-5 max-w-[26ch]">
                Promoting health, safety, and the environment from Lagos since 9 October 2007.
              </p>
              <p className="font-mono text-ink/40 text-[11px] mt-4">
                {SITE.rcNumber} · D&amp;B {SITE.dunsBradstreet}
              </p>
            </div>

            {FOOTER_COLUMNS.map((col) => (
              <div key={col.label}>
                <h4 className="text-ink/45 text-[11px] uppercase tracking-[0.2em] font-medium mb-5">
                  {col.label}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-ink/75 text-[14px] hover:text-green transition-colors duration-500"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Band 3 — Legal ribbon ─── */}
      <section className="bg-ink/[0.03] border-t border-ink/[0.08]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-ink/45 text-[12px] font-mono">
              &copy; 2007&ndash;{year} {SITE.legalName}. All rights reserved.
            </p>
            <p className="text-ink/35 text-[12px] font-mono">
              ISO 9001:2015 · NIMASA · DPR · RINA · eCMID · D&amp;B Verified
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
