// ═══════════════════════════════════════════
// ICONS — small stroke set + Material Symbols helper.
// All marked aria-hidden by default. Wrap with semantic text for a11y.
// ═══════════════════════════════════════════

type IconProps = { className?: string };

const base = "stroke-current fill-none";

// Material Symbol — institutional iconography matching the Stitch system.
// Usage: <MS name="anchor" className="text-5xl text-orange" filled />
export function MS({
  name,
  className = "",
  filled = false,
  weight,
}: {
  name: string;
  className?: string;
  filled?: boolean;
  weight?: number;
}) {
  const settings = `'FILL' ${filled ? 1 : 0}${weight ? `, 'wght' ${weight}` : ""}`;
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: settings }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

export function ArrowUpRight({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

export function ArrowRight({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function MailIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

export function TrophyIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 22v-4.54a3.55 3.55 0 00-.66-2.05M14 22v-4.54a3.55 3.55 0 01.66-2.05M18 2v6.91A6 6 0 0112 14a6 6 0 01-6-5.09V2z" />
    </svg>
  );
}

export function CloseIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6l-12 12" />
    </svg>
  );
}

export function MenuIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CopyIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={`${base} ${className}`} viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
