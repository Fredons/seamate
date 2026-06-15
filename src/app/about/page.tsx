// ═══════════════════════════════════════════
// /about — Institutional Excellence. Story · Vision/Philosophy · Values ·
// Sustainability (green-led) · Why local · Credentials · Awards · Insights ·
// Leadership.
// ═══════════════════════════════════════════

import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { ABOUT } from "@/content/about";
import { AWARDS, CREDENTIALS } from "@/content/credentials";
import { MS } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Seamate Group — an African development platform founded in Lagos, 9 October 2007. ISO 9001:2015 certified. Six divisions: maritime, energy, logistics, industrial advisory, agro systems, and the Seamate Academy.",
  alternates: { canonical: "/about" },
};

const SDGS = [
  { num: "01", file: "/images/sdg/sdg-01.png", title: "No Poverty", caption: "Blue-economy livelihoods" },
  { num: "04", file: "/images/sdg/sdg-04.png", title: "Quality Education", caption: "Cadetship · STEM Hub" },
  { num: "07", file: "/images/sdg/sdg-07.png", title: "Clean Energy", caption: "Maritime decarbonisation" },
  { num: "14", file: "/images/sdg/sdg-14.png", title: "Life Below Water", caption: "Coastal stewardship" },
  { num: "17", file: "/images/sdg/sdg-17.png", title: "Partnerships", caption: "Industry & institutions" },
];

// Institutional eyebrow: orange tick + steel label (green variant for sustainability)
function Eyebrow({ children, tone = "orange" }: { children: React.ReactNode; tone?: "orange" | "green" }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className={`w-7 h-[2px] ${tone === "green" ? "bg-green" : "bg-orange"}`} />
      <span className={`font-ui text-[11px] font-bold uppercase tracking-[0.18em] ${tone === "green" ? "text-green-muted" : "text-steel"}`}>
        {children}
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero eyebrow={ABOUT.story.eyebrow} title={ABOUT.story.title} lede={ABOUT.story.lede} />

      {/* ─── Hero image ─── */}
      <section className="bg-surface pb-16 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="reveal img-reveal border-l-[3px] border-orange">
            <div className="relative overflow-hidden aspect-[21/9]">
              <Image src="/images/about-tanker-sunset.jpg" alt="Aerial view of a tanker at sea under a sunset sky" fill priority sizes="(min-width: 1280px) 1256px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Thesis + stats ─── */}
      <section className="bg-surface pb-16 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            <p className="md:col-span-7 reveal font-body text-text-secondary text-lg md:text-xl leading-relaxed max-w-[58ch]">
              {ABOUT.story.body}
            </p>
            <div className="md:col-span-5 reveal grid grid-cols-2 gap-px bg-steel-line/40 border border-steel-line/40">
              {[
                { value: "2007", label: "Incorporated" },
                { value: "6", label: "Divisions" },
                { value: "ISO", label: "9001:2015 Certified" },
                { value: "Africa", label: "Operating reach" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-6">
                  <span className="font-display text-navy text-2xl font-extrabold">{stat.value}</span>
                  <span className="block font-body text-steel text-[11px] uppercase tracking-wider mt-1.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Vision / Mission / Philosophy ─── */}
      <section className="bg-surface-2 py-20 md:py-28 scroll-mt-24" id="vision">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="reveal mb-12 md:mb-16 max-w-[820px]">
            <Eyebrow>01 · {ABOUT.philosophy.eyebrow}</Eyebrow>
            <h2 className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
              The thesis, <span className="text-orange">in three lines.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-steel-line/40 border border-steel-line/40">
            {[
              { label: "Vision", body: ABOUT.philosophy.vision },
              { label: "Mission", body: ABOUT.philosophy.mission },
              { label: "Strategic Philosophy", body: ABOUT.philosophy.philosophy },
            ].map((block, i) => (
              <div key={block.label} className="reveal bg-white p-8 md:p-10 relative" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="absolute top-0 left-0 h-[3px] w-full bg-orange" />
                <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em] block mb-4">{block.label}</span>
                <p className="font-body text-ink text-xl md:text-[1.4rem] leading-[1.35]">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="bg-surface py-20 md:py-28 scroll-mt-24" id="values">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="reveal mb-12 md:mb-16 max-w-[820px]">
            <Eyebrow>02 · What we hold to</Eyebrow>
            <h2 className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
              Three commitments, <span className="text-orange">applied every shift.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT.values.map((v, i) => (
              <div key={v.title} className="reveal bg-white border border-steel-line/60 p-8 relative" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="absolute top-0 left-0 h-[3px] w-full bg-navy" />
                <span className="font-mono text-orange text-sm">0{i + 1}</span>
                <h3 className="font-display text-navy text-xl md:text-2xl font-bold tracking-tight mt-4">{v.title}</h3>
                <p className="font-body text-text-secondary text-[15px] leading-relaxed mt-4">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sustainability & African Development (green-led) ─── */}
      <section className="bg-green-pale py-20 md:py-28 scroll-mt-24 border-y border-green/15" id="sustainability">
        <span id="african-development" aria-hidden="true" />
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-5">
              <div className="reveal md:sticky md:top-28">
                <Eyebrow tone="green">03 · {ABOUT.africanDevelopment.eyebrow}</Eyebrow>
                <h2 className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
                  Six integrated systems. <span className="text-green-muted">One long-horizon mandate.</span>
                </h2>
                <p className="font-body text-text-secondary text-base leading-relaxed mt-6 max-w-[42ch]">{ABOUT.africanDevelopment.body}</p>
              </div>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-7">
              {ABOUT.africanDevelopment.themes.map((theme, i) => (
                <div key={theme.title} className="reveal border-t-2 border-green/30 pt-5" style={{ transitionDelay: `${i * 60}ms` }}>
                  <span className="font-mono text-green-muted text-sm">0{i + 1}</span>
                  <h3 className="font-display text-navy text-lg font-bold tracking-tight mt-2">{theme.title}</h3>
                  <p className="font-body text-text-secondary text-[14px] leading-relaxed mt-2">{theme.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* UN SDG strip */}
          <div className="mt-20 md:mt-24 pt-14 md:pt-16 border-t border-green/20">
            <div className="reveal max-w-[820px] mb-10">
              <Eyebrow tone="green">Aligned to</Eyebrow>
              <h3 className="font-display text-navy text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-[-0.02em] leading-[1.1]">
                Five UN Sustainable Development Goals.
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {SDGS.map((sdg, i) => (
                <div key={sdg.num} className="reveal flex flex-col items-start" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="w-full aspect-square overflow-hidden border border-green/20">
                    <Image src={sdg.file} alt={`UN Sustainable Development Goal ${sdg.num} — ${sdg.title}`} width={512} height={512} sizes="(min-width: 1024px) 240px, 45vw" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-mono text-green-muted text-[10px] mt-3">SDG {sdg.num}</span>
                  <h4 className="font-display text-navy text-base font-bold tracking-tight mt-1">{sdg.title}</h4>
                  <p className="font-body text-text-secondary text-[12px] leading-relaxed mt-1.5">{sdg.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why local ─── */}
      <section className="bg-surface py-20 md:py-28 scroll-mt-24" id="why-local">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-5">
              <div className="reveal md:sticky md:top-28">
                <Eyebrow>04 · The local advantage</Eyebrow>
                <h2 className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
                  We&rsquo;re already there. <span className="text-orange">You don&rsquo;t need to be.</span>
                </h2>
                <p className="font-body text-text-secondary text-base leading-relaxed max-w-[44ch] mt-6">
                  Global operators usually fly teams in. Visas, mobilisation, weeks
                  of delay. Our clients skip that because we were already on the
                  ground before they called.
                </p>
              </div>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-7">
              {ABOUT.advantages.map((adv, i) => (
                <div key={adv.title} className="reveal border-t-2 border-orange/40 pt-5" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="font-mono text-orange text-sm">0{i + 1}</span>
                  <h3 className="font-display text-navy text-lg font-bold tracking-tight mt-2">{adv.title}</h3>
                  <p className="font-body text-text-secondary text-[14px] leading-relaxed mt-2">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Credentials ─── */}
      <section className="bg-surface-2 py-20 md:py-28 scroll-mt-24" id="credentials">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="reveal mb-12 max-w-[820px]">
            <Eyebrow>05 · Credentials</Eyebrow>
            <h2 className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
              Audited, licensed, <span className="text-orange">classified.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-steel-line/40 border border-steel-line/40">
            {CREDENTIALS.map((c) => (
              <div key={c.name} className="reveal flex items-start gap-3 bg-white p-6">
                <MS name="verified" filled className="text-green text-[20px] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-navy text-base font-bold tracking-tight">{c.name}</h3>
                  <p className="font-body text-text-secondary text-[13px] leading-relaxed mt-1">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Awards & Recognition ─── */}
      <section className="bg-surface py-20 md:py-28 scroll-mt-24" id="awards">
        <span id="recognition" aria-hidden="true" />
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="reveal mb-12 md:mb-16 max-w-[700px]">
            <Eyebrow>06 · Awards &amp; Recognition</Eyebrow>
            <h2 className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
              Independently verified. <span className="text-orange">Three times over.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AWARDS.map((award, i) => (
              <div key={award.year} className="reveal relative bg-white border border-steel-line/60 p-8 md:p-10" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="absolute top-0 left-0 h-[3px] w-full bg-navy" />
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-11 h-11 rounded-md bg-orange/10 flex items-center justify-center">
                    <MS name="emoji_events" filled className="text-orange text-[22px]" />
                  </span>
                  <span className="font-mono text-orange text-base">{award.date ?? award.year}</span>
                </div>
                <h3 className="font-display text-navy text-xl font-bold tracking-tight leading-snug">{award.name}</h3>
                <p className="font-ui text-steel text-[12px] font-semibold uppercase tracking-[0.06em] mt-3">{award.body}</p>
                <p className="font-body text-text-secondary text-[15px] leading-relaxed mt-5">{award.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7">
              <div className="reveal img-reveal border-l-[3px] border-orange">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image src="/images/wmd-2020-team.jpg" alt="Seamate representatives at IMO World Maritime Day 2020, Nigeria" fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
                </div>
              </div>
            </div>
            <div className="md:col-span-5 reveal">
              <Eyebrow>In the room</Eyebrow>
              <h3 className="font-display text-navy text-2xl md:text-3xl font-extrabold tracking-[-0.02em] leading-tight">
                IMO World Maritime Day, <span className="text-orange">2020.</span>
              </h3>
              <p className="font-body text-text-secondary text-base leading-relaxed mt-5 max-w-[40ch]">
                Seamate representatives among the Nigerian delegation at the
                International Maritime Organization&rsquo;s World Maritime Day,
                themed <em>Sustainable Shipping for a Sustainable Planet</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Insights ─── */}
      <section className="bg-surface-2 py-20 md:py-28 scroll-mt-24" id="insights">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="reveal max-w-[820px] mb-12 md:mb-16">
            <Eyebrow>07 · {ABOUT.insights.eyebrow}</Eyebrow>
            <h2 className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
              {ABOUT.insights.title}
            </h2>
            <p className="font-body text-text-secondary text-base leading-relaxed mt-6 max-w-[55ch]">{ABOUT.insights.lede}</p>
          </div>
          <div className="border-t border-steel-line/60">
            {ABOUT.insights.essays.map((essay, i) => (
              <article key={essay.slug} id={`insight-${essay.slug}`} className="reveal scroll-mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-b border-steel-line/60 py-12 md:py-16" style={{ transitionDelay: `${i * 80}ms` }}>
                <header className="md:col-span-4">
                  <span className="font-mono text-orange text-[11px] uppercase tracking-[0.2em] block mb-4">{essay.eyebrow}</span>
                  <h3 className="font-display text-navy text-2xl md:text-3xl font-bold leading-[1.1] tracking-tight">{essay.title}</h3>
                </header>
                <div className="md:col-span-8 space-y-5">
                  {essay.body.map((paragraph, p) => (
                    <p key={p} className="font-body text-text-secondary text-[16px] md:text-[17px] leading-relaxed max-w-[64ch]">{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Leadership ─── */}
      <section className="bg-surface py-20 md:py-28 scroll-mt-24" id="leadership">
        <div className="mx-auto max-w-[1280px] px-4 md:px-12">
          <div className="reveal max-w-[820px]">
            <Eyebrow>08 · {ABOUT.leadership.eyebrow}</Eyebrow>
            <h2 className="font-display text-navy text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.02em] leading-[1.05]">
              {ABOUT.leadership.title}
            </h2>
            <p className="font-body text-text-secondary text-lg leading-relaxed mt-8 max-w-[58ch]">{ABOUT.leadership.body}</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
