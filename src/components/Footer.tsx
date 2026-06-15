// ═══════════════════════════════════════════
// Footer — deep navy institutional footer (Stitch system).
// 4 columns: brand + social, Divisions, Company, Contact. Legal bottom bar.
// ═══════════════════════════════════════════

import Image from "next/image";
import Link from "next/link";
import { SITE, CONTACT } from "@/content/site";
import { MS } from "./icons";

const COLUMNS = [
  {
    label: "Divisions",
    links: [
      { label: "Seamate Maritime", href: "/divisions#maritime" },
      { label: "Seamate Energy", href: "/divisions#energy" },
      { label: "Seamate Logistics", href: "/divisions#logistics" },
      { label: "Industrial Advisory", href: "/divisions#industrial-advisory" },
      { label: "Agro Systems", href: "/divisions#agro-systems" },
      { label: "Seamate Academy", href: "/divisions#academy" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Sustainability", href: "/about#sustainability" },
      { label: "Credentials", href: "/about#credentials" },
      { label: "Awards", href: "/about#awards" },
      { label: "Insights", href: "/about#insights" },
      { label: "Leadership", href: "/about#leadership" },
    ],
  },
  {
    label: "Engage",
    links: [
      { label: "Investors & Partners", href: "/partnerships#partners" },
      { label: "Careers & Workforce", href: "/partnerships#careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-on-dark">
      {/* Brand keyline — green thread, mirrors the top of the page */}
      <div className="h-[3px] w-full bg-green" />
      <div className="mx-auto max-w-[1280px] px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 py-20 md:py-24">
        <div className="md:col-span-4">
          {/* Color logo on a white plaque — the mark has solid colour blocks
              that don't invert to white cleanly. */}
          <span className="inline-flex bg-white px-4 py-3">
            <Image src="/seamate-logo.png" alt="Seamate Group" width={150} height={40} className="h-10 w-auto" />
          </span>
          <p className="font-body text-on-dark/60 text-[15px] leading-relaxed max-w-[34ch] mt-6">
            World-class maritime, energy, and logistics solutions across the
            African continent since 9 October 2007.
          </p>
          <p className="font-mono text-on-dark/40 text-[11px] mt-5">
            {SITE.rcNumber} · D&amp;B {SITE.dunsBradstreet}
          </p>
          <div className="flex gap-3 mt-7">
            {[
              { icon: "public", href: SITE.url },
              { icon: "mail", href: `mailto:${CONTACT.emails.general}` },
              { icon: "call", href: `tel:${CONTACT.phones[0].e164}` },
            ].map((s) => (
              <a
                key={s.icon}
                href={s.href}
                className="w-10 h-10 rounded-md border border-on-dark/20 flex items-center justify-center text-on-dark/70 hover:bg-green hover:border-green hover:text-white transition-all duration-300"
              >
                <MS name={s.icon} className="text-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.label} className="md:col-span-2">
            <h4 className="font-ui text-on-dark text-[11px] font-bold uppercase tracking-[0.18em] mb-6">
              {col.label}
            </h4>
            <ul className="space-y-3.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-on-dark/60 text-[14px] hover:text-orange transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <h4 className="font-ui text-on-dark text-[11px] font-bold uppercase tracking-[0.18em] mb-6">Contact</h4>
          <p className="font-body text-on-dark/45 text-[13px]">Corporate HQ</p>
          <p className="font-body text-white text-[14px] mb-4">{SITE.headquarters}</p>
          {CONTACT.phones.map((p) => (
            <a key={p.e164} href={`tel:${p.e164}`} className="block font-mono text-on-dark/60 text-[13px] hover:text-white transition-colors">
              {p.number}
            </a>
          ))}
          <a href={`mailto:${CONTACT.emails.general}`} className="block font-mono text-on-dark/60 text-[13px] mt-2 hover:text-white transition-colors">
            {CONTACT.emails.general}
          </a>
        </div>
      </div>

      <div className="border-t border-on-dark/10">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-mono text-on-dark/45 text-[11px]">
            &copy; 2007&ndash;{year} {SITE.legalName}. ISO 9001:2015 Certified.
          </p>
          <p className="font-mono text-on-dark/40 text-[11px] uppercase tracking-[0.12em]">
            NIMASA · DPR · RINA · eCMID · D&amp;B Verified
          </p>
        </div>
      </div>
    </footer>
  );
}
