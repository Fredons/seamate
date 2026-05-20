// ═══════════════════════════════════════════
// /partnerships — investors + careers on one anchored page.
// Replaces the brief's separate Investors & Partners and Careers pages.
// No forms — mailto-only intake with structured subject and body templates.
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { MailButton } from "@/components/MailButton";
import { PARTNERSHIPS } from "@/content/partnerships";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Seamate Group seeks partnerships with capital investors, government collaborators, industrial operators, maritime institutions, and regional trade stakeholders. We also welcome inquiries from skilled professionals across maritime, energy, logistics, and technical disciplines.",
  alternates: { canonical: "/partnerships" },
};

export default function PartnershipsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow={PARTNERSHIPS.hero.eyebrow}
        title={PARTNERSHIPS.hero.title}
        lede={PARTNERSHIPS.hero.lede}
      />

      {/* Anchor index */}
      <section className="bg-cream border-y border-ink/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { id: "partners", label: "Investors & Partners", body: "Capital, government, industry, infrastructure." },
              { id: "careers", label: "Careers & Workforce", body: "SASI cadetship, graduate trainees, experienced operators." },
            ].map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-start gap-3 border-t border-green/30 pt-4 hover:border-green transition-all"
              >
                <span className="font-mono text-green/60 text-xs mt-1">0{i + 1}</span>
                <span className="flex-1">
                  <span className="block text-ink font-semibold text-base tracking-tight group-hover:text-green transition-colors">
                    {item.label}
                  </span>
                  <span className="block text-text-secondary text-[13px] leading-relaxed mt-1.5">{item.body}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-green/40 mt-1 group-hover:translate-x-0.5 group-hover:text-green transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Investors & Partners ─── */}
      <section id="partners" className="scroll-mt-24 bg-cream py-24 md:py-32" aria-labelledby="partners-heading">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="md:col-span-5">
              <div className="reveal md:sticky md:top-32">
                <span className="font-mono text-green text-[11px] uppercase tracking-[0.25em] font-medium">
                  {PARTNERSHIPS.partners.eyebrow}
                </span>
                <h2 id="partners-heading" className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight mt-4">
                  Capital, government, industry,{" "}
                  <em className="text-green-muted">infrastructure.</em>
                </h2>
                <p className="text-text-secondary text-base leading-relaxed mt-6 max-w-[44ch]">
                  {PARTNERSHIPS.partners.body}
                </p>
                <div className="mt-8">
                  <MailButton
                    label="Start a partnership conversation"
                    subject={PARTNERSHIPS.partners.mailtoSubject}
                    body={PARTNERSHIPS.partners.mailtoBody}
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              {PARTNERSHIPS.partners.stakeholderGroups.map((group, i) => (
                <div
                  key={group.title}
                  className="reveal border-t border-ink/[0.08] pt-6"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-green/50 text-sm mt-1">0{i + 1}</span>
                    <div>
                      <h3 className="text-ink font-semibold text-lg tracking-tight">{group.title}</h3>
                      <p className="text-text-secondary text-[15px] leading-relaxed mt-2 max-w-[52ch]">{group.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Careers & Workforce ─── */}
      <section id="careers" className="scroll-mt-24 bg-paper py-24 md:py-32" aria-labelledby="careers-heading">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="md:col-span-5">
              <div className="reveal md:sticky md:top-32">
                <span className="font-mono text-green text-[11px] uppercase tracking-[0.25em] font-medium">
                  {PARTNERSHIPS.careers.eyebrow}
                </span>
                <h2 id="careers-heading" className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight mt-4">
                  Workforce as African{" "}
                  <em className="text-green-muted">competitive advantage.</em>
                </h2>
                <p className="text-text-secondary text-base leading-relaxed mt-6 max-w-[44ch]">
                  {PARTNERSHIPS.careers.body}
                </p>
                <div className="mt-8">
                  <MailButton
                    variant="secondary"
                    label="Send your background"
                    subject={PARTNERSHIPS.careers.mailtoSubject}
                    body={PARTNERSHIPS.careers.mailtoBody}
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              {PARTNERSHIPS.careers.pathways.map((pathway, i) => (
                <div
                  key={pathway.title}
                  className="reveal border-t border-ink/[0.08] pt-6"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-green/50 text-sm mt-1">0{i + 1}</span>
                    <div>
                      <h3 className="text-ink font-semibold text-lg tracking-tight">{pathway.title}</h3>
                      <p className="text-text-secondary text-[15px] leading-relaxed mt-2 max-w-[52ch]">{pathway.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
