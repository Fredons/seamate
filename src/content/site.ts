// ═══════════════════════════════════════════
// SITE — global brand and contact constants
// One source of truth for everything that appears in nav, footer, metadata,
// structured data, and contextual mailto links across the site.
// ═══════════════════════════════════════════

export const SITE = {
  name: "Seamate Group",
  shortName: "Seamate",
  legalName: "Seamate Maritime Integrated Services Limited",
  groupName: "Seamate Group",
  rcNumber: "RC713064",
  dunsBradstreet: "561378707",
  incorporated: "2007-10-09",
  description:
    "African development platform operating across maritime, energy, logistics, industrial advisory, agro systems, and workforce development. Headquartered in Lagos. ISO 9001:2015 certified. Approved distributor for Dangote Petroleum Refinery.",
  url: "https://seamategroup.com",
  ogImage: "/og-image.png",
  twitter: "@seamategroup",
  locale: "en_NG",
  responseSLA: "24 hours, GMT+1",
  region: "Africa",
  headquarters: "Lagos, Nigeria",
} as const;

// Resolve the absolute base URL for metadata (og:image, canonical, etc.).
// Critical for link previews: the og:image URL must point at the domain that
// actually serves THIS site, not the canonical brand domain if that's still
// pointing elsewhere (e.g. the legacy site).
//   1. NEXT_PUBLIC_SITE_URL          — manual override (set this once the
//                                       custom domain points at this deploy)
//   2. VERCEL_PROJECT_PRODUCTION_URL — the production domain on Vercel
//   3. VERCEL_URL                    — the per-deployment preview URL
//   4. SITE.url                      — local / fallback
export function getBaseUrl(): string {
  const env = process.env;
  if (env.NEXT_PUBLIC_SITE_URL) return env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (env.VERCEL_ENV === "production" && env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`;
  return SITE.url;
}

export const CONTACT = {
  emails: {
    general: "info@seamategroup.com",
    vessel: "vessel@seamategroup.com",
  },
  phones: [
    { label: "Primary", number: "+234 815 238 9425", e164: "+2348152389425" },
    { label: "Operations", number: "+234 815 268 5854", e164: "+2348152685854" },
  ],
  responseTime: "We respond to email within 24 hours, GMT+1.",
  hours: "Monday to Friday, 08:00 to 18:00 GMT+1",
} as const;

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Divisions", href: "/divisions" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
] as const;

// Contextual mailto builder: feeds Hero/CTA/Service buttons with a
// pre-filled subject + body so the buyer's mail client opens ready to send.
export function buildMailto(opts: {
  to?: "general" | "vessel";
  subject: string;
  body?: string;
}): string {
  const to = CONTACT.emails[opts.to ?? "general"];
  const params = new URLSearchParams();
  params.set("subject", opts.subject);
  if (opts.body) params.set("body", opts.body);
  return `mailto:${to}?${params.toString().replace(/\+/g, "%20")}`;
}
