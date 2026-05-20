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
