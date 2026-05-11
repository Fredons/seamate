// ═══════════════════════════════════════════
// /about — single dense page: story, values, why local, credentials,
// awards, and partnership invitation. No /management sub-page (no names yet).
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { MailButton } from "@/components/MailButton";
import { ABOUT } from "@/content/about";
import { AWARDS, CREDENTIALS } from "@/content/credentials";
import { NAMED_TECH_PARTNERS } from "@/content/partners";
import { TrophyIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Seamate Maritime Integrated Services — founded 9 October 2007 in Lagos. ISO 9001:2015 certified, NIMASA licensed, DPR permit holder, D&B verified. Built for African maritime work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow={ABOUT.story.eyebrow}
        title={ABOUT.story.title}
        lede={ABOUT.story.lede}
      />

      {/* ─── Hero image strip — native 16:9, exact match. ─── */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal img-reveal rounded-[2rem] bg-ink/[0.03] p-1.5 ring-1 ring-ink/[0.04]">
            <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden relative aspect-[16/9]">
              <Image
                src="/images/about-tanker-sunset.jpg"
                alt="Aerial view of a tanker at sea under a sunset sky"
                fill
                priority
                sizes="(min-width: 1400px) 1376px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── The thesis ─── */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="md:col-span-7 reveal">
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[58ch]">
                {ABOUT.story.body}
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="reveal grid grid-cols-2 gap-4">
                {[
                  { value: "2007", label: "Incorporated" },
                  { value: "18+", label: "Years operating" },
                  { value: "ISO", label: "9001:2015 Certified" },
                  { value: "EMEA", label: "Reach" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white p-5 border border-ink/[0.06]">
                    <span className="font-mono text-green text-2xl font-medium">{stat.value}</span>
                    <span className="block text-ink/45 text-[11px] uppercase tracking-wider mt-1.5">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="bg-paper py-20 md:py-28 scroll-mt-24" id="values">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal mb-12 md:mb-16 max-w-[820px]">
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-4">
              01 &mdash; What we hold to
            </span>
            <h2 className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight">
              Three commitments,{" "}
              <em className="text-green-muted">applied every shift.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ABOUT.values.map((v, i) => (
              <div key={v.title} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="font-mono text-green/60 text-sm">0{i + 1}</span>
                <h3 className="font-display text-ink text-2xl md:text-3xl leading-tight tracking-tight mt-4">{v.title}</h3>
                <p className="text-text-secondary text-[15px] leading-relaxed mt-4 max-w-[40ch]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why local ─── */}
      <section className="bg-cream py-20 md:py-28 scroll-mt-24" id="why-local">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-5">
              <div className="reveal md:sticky md:top-32">
                <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-4">
                  02 &mdash; The local advantage
                </span>
                <h2 className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight">
                  We&rsquo;re already there.{" "}
                  <em className="text-green-muted">You don&rsquo;t need to be.</em>
                </h2>
                <p className="text-text-secondary text-base leading-relaxed max-w-[44ch] mt-6">
                  Global operators usually fly teams in. Visas, mobilisation, weeks
                  of delay. Our clients skip that because we were already on the
                  ground before they called.
                </p>
              </div>
            </div>
            <div className="md:col-span-7 space-y-6">
              {ABOUT.advantages.map((adv, i) => (
                <div key={adv.title} className="reveal border-t border-ink/[0.08] pt-6" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-green/50 text-sm mt-1">0{i + 1}</span>
                    <div>
                      <h3 className="text-ink font-semibold text-lg tracking-tight">{adv.title}</h3>
                      <p className="text-text-secondary text-[15px] leading-relaxed mt-2 max-w-[50ch]">{adv.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Credentials ─── */}
      <section className="bg-paper py-20 md:py-28 scroll-mt-24" id="credentials">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal mb-12 max-w-[820px]">
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-4">
              03 &mdash; Credentials
            </span>
            <h2 className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight">
              Audited, licensed,{" "}
              <em className="text-green-muted">classified.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 border-t border-ink/[0.08] pt-8">
            {CREDENTIALS.map((c, i) => (
              <div
                key={c.name}
                className="reveal flex items-start gap-4 border-b border-ink/[0.06] pb-6"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="font-mono text-green/50 text-xs mt-1">/0{(i % 9) + 1}</span>
                <div>
                  <h3 className="text-ink font-semibold text-base tracking-tight">{c.name}</h3>
                  <p className="text-text-secondary text-[14px] leading-relaxed mt-1.5">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Awards ─── */}
      <section className="bg-cream py-20 md:py-28 scroll-mt-24" id="recognition">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="reveal mb-12 md:mb-16 max-w-[700px]">
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green font-medium mb-4">
              04 &mdash; Recognition
            </span>
            <h2 className="font-display text-ink text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight">
              Independently verified.{" "}
              <em className="text-green-muted">Three times over.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AWARDS.map((award, i) => (
              <div key={award.year} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="rounded-[2rem] bg-ink/[0.02] p-1.5 ring-1 ring-ink/[0.04] hover-lift h-full">
                  <div className="rounded-[calc(2rem-0.375rem)] bg-white p-8 md:p-10 h-full flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center">
                        <TrophyIcon className="w-5 h-5 text-green" />
                      </span>
                      <span className="font-mono text-green text-lg font-medium">{award.date ?? award.year}</span>
                    </div>
                    <h3 className="font-display text-ink text-2xl leading-tight tracking-tight">{award.name}</h3>
                    <p className="text-ink/50 text-[13px] font-medium uppercase tracking-wider mt-3">{award.body}</p>
                    <p className="text-text-secondary text-[15px] leading-relaxed mt-6 flex-1">{award.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ─── In the room ─── */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7">
              <div className="reveal img-reveal rounded-[2rem] bg-ink/[0.03] p-1.5 ring-1 ring-ink/[0.04]">
                {/* Native 4:3 group photo — matching container keeps heads visible. */}
                <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden relative aspect-[4/3]">
                  <Image
                    src="/images/wmd-2020-team.jpg"
                    alt="Seamate representatives at IMO World Maritime Day 2020, Nigeria"
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-5 reveal">
              <span className="font-mono text-green text-[11px] uppercase tracking-[0.25em] block mb-4">
                In the room
              </span>
              <h3 className="font-display text-ink text-2xl md:text-3xl leading-tight tracking-tight">
                IMO World Maritime Day,{" "}
                <em className="text-green-muted">2020.</em>
              </h3>
              <p className="text-text-secondary text-base leading-relaxed mt-5 max-w-[40ch]">
                Seamate representatives among the Nigerian delegation at the
                International Maritime Organization&rsquo;s World Maritime Day,
                themed <em>Sustainable Shipping for a Sustainable Planet</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Partner With Us ─── */}
      <section className="bg-navy py-20 md:py-28 text-cream scroll-mt-24" id="partner-with-us">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="md:col-span-6 reveal">
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-green-light font-medium mb-4">
                05 &mdash; Partner with Seamate
              </span>
              <h2 className="font-display text-cream text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-tight">
                {ABOUT.partnership.title}
              </h2>
              <p className="text-cream/65 text-lg leading-relaxed max-w-[55ch] mt-6">{ABOUT.partnership.body}</p>
              <div className="mt-10">
                <MailButton
                  label="Start a partnership conversation"
                  subject="Partnership Inquiry"
                  body={
                    "Hello Seamate,\n\nWe represent [Company] and we're interested in exploring a partnership focused on:\n\n- Area of collaboration:\n- Markets of interest:\n- Our relevant expertise:\n\nWe'd welcome an introductory call.\n\nThank you,\n"
                  }
                />
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="reveal space-y-5">
                {ABOUT.partnership.requirements.map((req, i) => (
                  <div key={req} className="flex items-start gap-4 border-t border-cream/10 pt-5">
                    <span className="font-mono text-green-light text-sm mt-1">0{i + 1}</span>
                    <p className="text-cream/75 text-base leading-relaxed">{req}</p>
                  </div>
                ))}
              </div>

              {/* Named technical partners */}
              <div className="reveal mt-10 pt-10 border-t border-cream/10">
                <span className="font-mono text-cream/40 text-[11px] uppercase tracking-[0.25em] block mb-6">
                  Active technical partnerships
                </span>
                <div className="grid grid-cols-2 gap-4">
                  {NAMED_TECH_PARTNERS.map((p) => (
                    <div
                      key={p.name}
                      className="rounded-2xl bg-cream/[0.04] border border-cream/10 p-5 flex items-center justify-center h-24"
                      title={p.full}
                    >
                      <Image
                        src={p.logo}
                        alt={p.full}
                        width={160}
                        height={64}
                        sizes="160px"
                        className="max-h-12 w-auto object-contain brightness-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
