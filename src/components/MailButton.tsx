// ═══════════════════════════════════════════
// MailButton — primary / secondary CTA that opens the user's mail client
// with a contextual subject and body prefilled. No forms on the site.
// Stays a server component — pure anchor.
// ═══════════════════════════════════════════

import { ArrowUpRight } from "./icons";
import { buildMailto } from "@/content/site";

type Variant = "primary" | "secondary" | "link";

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
        className={`group inline-flex items-center gap-2 text-ink font-semibold text-[15px] border-b border-ink/20 pb-1 hover:border-green hover:text-green transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${className}`}
      >
        <span>{label}</span>
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />
      </a>
    );
  }

  if (variant === "secondary") {
    return (
      <a
        href={href}
        className={`group inline-flex w-full sm:w-auto items-center justify-center sm:justify-start gap-3 rounded-full border border-ink/15 hover:border-green/50 px-6 sm:px-7 py-4 text-ink font-medium text-[14px] sm:text-[15px] tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] hover:-translate-y-[1px] ${className}`}
      >
        <span>{label}</span>
        <ArrowUpRight className="w-4 h-4 text-green" />
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`group inline-flex w-full sm:w-auto items-center justify-center sm:justify-start gap-3 rounded-full bg-green hover:bg-green-light px-6 sm:px-7 py-4 text-cream font-semibold text-[14px] sm:text-[15px] tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] hover:-translate-y-[1px] hover:shadow-[0_8px_30px_rgba(29,122,75,0.25)] ${className}`}
    >
      <span>{label}</span>
      <span className="w-7 h-7 rounded-full bg-cream/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
        <ArrowUpRight className="w-4 h-4 text-cream" />
      </span>
    </a>
  );
}
