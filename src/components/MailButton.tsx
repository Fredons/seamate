// ═══════════════════════════════════════════
// MailButton — contextual mailto CTA. No forms on the site.
// Institutional Excellence styling: sharp radius, Inter uppercase labels.
//   primary   → navy filled (default institutional CTA)
//   action    → safety orange filled (highest-priority CTA)
//   secondary → steel ghost outline
//   link      → underline arrow link
// ═══════════════════════════════════════════

import { ArrowUpRight } from "./icons";
import { buildMailto } from "@/content/site";

type Variant = "primary" | "action" | "secondary" | "link";

type Props = {
  to?: "general" | "vessel";
  subject: string;
  body?: string;
  label: string;
  variant?: Variant;
  className?: string;
};

export function MailButton({ to, subject, body, label, variant = "primary", className = "" }: Props) {
  const href = buildMailto({ to, subject, body });

  if (variant === "link") {
    return (
      <a
        href={href}
        className={`group inline-flex items-center gap-2 font-ui text-[13px] font-semibold uppercase tracking-[0.08em] text-navy border-b-2 border-navy/20 pb-1 hover:border-orange hover:text-orange transition-all duration-300 ${className}`}
      >
        <span>{label}</span>
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-transform duration-300" />
      </a>
    );
  }

  if (variant === "secondary") {
    return (
      <a
        href={href}
        className={`group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-md border border-steel-line px-7 py-4 text-navy font-ui text-[12px] font-bold uppercase tracking-[0.1em] hover:border-navy hover:bg-navy/[0.03] transition-all duration-300 active:scale-[0.98] ${className}`}
      >
        <span>{label}</span>
        <ArrowUpRight className="w-4 h-4 text-orange" />
      </a>
    );
  }

  const fill =
    variant === "action"
      ? "bg-orange hover:bg-orange-dark"
      : "bg-navy hover:bg-navy-mid";

  return (
    <a
      href={href}
      className={`group inline-flex w-full sm:w-auto items-center justify-center gap-3 ${fill} px-7 py-4 rounded-md text-white font-ui text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300 active:scale-[0.98] ${className}`}
    >
      <span>{label}</span>
      <span className="w-6 h-6 rounded-sm bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
      </span>
    </a>
  );
}
