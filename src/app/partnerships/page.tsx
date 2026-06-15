// ═══════════════════════════════════════════
// /partnerships — investors + careers (Institutional Excellence).
// No forms — mailto-only intake with structured templates.
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { MailButton } from "@/components/MailButton";
import { PARTNERSHIPS } from "@/content/partnerships";
import { MS } from "@/components/icons";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Seamate Group seeks partnerships with capital investors, government collaborators, industrial operators, maritime institutions, and regional trade stakeholders. We also welcome inquiries from skilled professionals across maritime, energy, logistics, and technical disciplines.",
  alternates: { canonical: "/partnerships" },
};

export default function PartnershipsPage() {
  return (
    <SiteShell>
      <PageHero eyebrow={PARTNERSHIPS.hero.eyebrow} title={PARTNERSHIPS.hero.title} lede={PARTNERSHIPS.hero.lede} />

      {/* Anchor index */}
      <section className="bg-surface-2 border-b border-steel-line/60">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-steel-line/40">
            {[
              { id: "partners", icon: "handshake", label: "Investors & Partners", body: "Capital, government, industry, infrastructure." },
              { id: "careers", icon: "groups", label: "Careers & Workforce", body: "SASI cadetship, graduate trainees, experienced operators." },
            ].map((item) => (
              <a key={item.id} href={`#${item.id}`} className="group flex items-center gap-4 bg-surface-2 hover:bg-white px-6 py-5 transition-colors">
                <MS name={item.icon} className="text-orange text-[26px]" />
                <span className="flex-1">
                  <span className="block font-display text-navy text-base font-bold tracking-tight group-hover:text-orange transition-colors">{item.label}</span>
                  <span className="block font-body text-text-secondary text-[13px] leading-relaxed mt-1">{item.body}</span>
                </span>
                <MS name="arrow_forward" className="text-steel group-hover:text-orange group-hover:translate-x-0.5 transition-all text-[20px]" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Investors & Partners ─── */}
      <section id="partners" className="scroll-mt-24 bg-surface py-20 md:py-28" aria-labelledby="partners-heading">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="md:col-span-5">
              <div className="reveal md:sticky md:top-28">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-[2px] bg-orange" />
                  <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">{PARTNERSHIPS.partners.eyebrow}</span>
                </div>
                <h2 id="partners-heading" className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
                  Capital, government, industry, <span className="text-orange">infrastructure.</span>
                </h2>
                <p className="font-body text-text-secondary text-base leading-relaxed mt-6 max-w-[44ch]">{PARTNERSHIPS.partners.body}</p>
                <div className="mt-8">
                  <MailButton variant="action" label="Start a Partnership" subject={PARTNERSHIPS.partners.mailtoSubject} body={PARTNERSHIPS.partners.mailtoBody} />
                </div>
              </div>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-7">
              {PARTNERSHIPS.partners.stakeholderGroups.map((group, i) => (
                <div key={group.title} className="reveal border-t-2 border-orange/40 pt-5" style={{ transitionDelay: `${i * 60}ms` }}>
                  <span className="font-mono text-orange text-sm">0{i + 1}</span>
                  <h3 className="font-display text-navy text-lg font-bold tracking-tight mt-2">{group.title}</h3>
                  <p className="font-body text-text-secondary text-[14px] leading-relaxed mt-2">{group.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Careers & Workforce (green-led — workforce/sustainability) ─── */}
      <section id="careers" className="scroll-mt-24 bg-green-pale py-20 md:py-28 border-y border-green/15" aria-labelledby="careers-heading">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="md:col-span-5">
              <div className="reveal md:sticky md:top-28">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-[2px] bg-green" />
                  <span className="font-ui text-green-muted text-[11px] font-bold uppercase tracking-[0.18em]">{PARTNERSHIPS.careers.eyebrow}</span>
                </div>
                <h2 id="careers-heading" className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
                  Workforce as African <span className="text-green-muted">competitive advantage.</span>
                </h2>
                <p className="font-body text-text-secondary text-base leading-relaxed mt-6 max-w-[44ch]">{PARTNERSHIPS.careers.body}</p>
                <div className="mt-8">
                  <MailButton variant="secondary" label="Send your background" subject={PARTNERSHIPS.careers.mailtoSubject} body={PARTNERSHIPS.careers.mailtoBody} />
                </div>
              </div>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-7">
              {PARTNERSHIPS.careers.pathways.map((pathway, i) => (
                <div key={pathway.title} className="reveal border-t-2 border-green/30 pt-5" style={{ transitionDelay: `${i * 60}ms` }}>
                  <span className="font-mono text-green-muted text-sm">0{i + 1}</span>
                  <h3 className="font-display text-navy text-lg font-bold tracking-tight mt-2">{pathway.title}</h3>
                  <p className="font-body text-text-secondary text-[14px] leading-relaxed mt-2">{pathway.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
