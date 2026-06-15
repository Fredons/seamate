// ═══════════════════════════════════════════
// PageHero — inner-page hero, Institutional Excellence.
// Clean surface, Inter bold display headline, orange signal tick eyebrow,
// Source Serif lede.
// ═══════════════════════════════════════════

import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "wide";
};

export function PageHero({ eyebrow, title, lede, align = "left" }: Props) {
  return (
    <section className="relative bg-surface pt-32 pb-14 md:pt-40 md:pb-20 border-b border-steel-line/50">
      <div className="mx-auto max-w-[1280px] px-4 md:px-12">
        <div className={align === "wide" ? "max-w-[1000px]" : "max-w-[800px]"}>
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="w-7 h-[2px] bg-orange" />
            <span className="font-ui text-steel text-[11px] font-bold uppercase tracking-[0.18em]">
              {eyebrow}
            </span>
          </div>
          <h1 className="reveal font-display text-ink text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.04] tracking-[-0.02em] whitespace-pre-line">
            {title}
          </h1>
          {lede && (
            <p className="reveal font-body text-text-secondary text-lg md:text-xl leading-relaxed max-w-[60ch] mt-7">
              {lede}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
