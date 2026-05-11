// ═══════════════════════════════════════════
// SERVICES — four operational lines + one technical-consulting offer.
// Each service has its own anchor on /services and its own mailto context.
// ═══════════════════════════════════════════

export type Service = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  body: string;
  capabilities: string[];
  contactEmail: "vessel" | "general";
  mailtoSubject: string;
  mailtoBody: string;
  // aspect: tailwind-class fragment for the section image container.
  // mode: "cover" (photo, crop OK) or "contain" (document/text — never crop).
  image: { src: string; alt: string; aspect: string; mode: "cover" | "contain" };
};

export const SERVICES: Service[] = [
  {
    slug: "ship-management",
    number: "01",
    title: "Ship Management",
    tagline: "End-to-end management for five vessel classes across Africa.",
    body:
      "Offshore, cargo, tanker, project, and fishing vessels. Technical and commercial operations run from one team, registered as vendors and marine contractors across our operating regions.",
    capabilities: [
      "Dry dock operations & new-build supervision",
      "Superintendency & marine port operations",
      "Crewing, agency, and bunker supplies",
      "Commercial solutions & vessel purchase delivery",
      "Project solutions & technical consultancy",
    ],
    contactEmail: "vessel",
    mailtoSubject: "Ship Management Inquiry",
    mailtoBody:
      "Hello Seamate,\n\nWe are evaluating ship-management partners for the following vessel(s):\n\n- Vessel type:\n- Flag:\n- Route / area of operation:\n- Required start:\n\nWe'd like to discuss scope and references.\n\nThank you,\n",
    image: {
      src: "/images/tanker-rio-genoa.jpg",
      alt: "Aerial bow view of a crude tanker under power at sea",
      aspect: "aspect-[1/1]",
      mode: "cover",
    },
  },
  {
    slug: "marine-inspection",
    number: "02",
    title: "Marine Inspection",
    tagline: "Eight inspection regimes, one accredited team.",
    body:
      "OVID/CMID, SIRE and pre-SIRE, Marine Warranty Survey, ISM and MLC audits, terminal and jetty assessments, naval architecture, marine maintenance, and technical consultancy on LNG/LPG projects.",
    capabilities: [
      "OVID / CMID — DP maintenance, DP trials, FMEA",
      "SIRE & pre-SIRE — tankers, chemical, LPG/LNG, barges",
      "Marine Warranty Survey — rig ops & load testing",
      "ISM / MLC internal & flag-state audit",
      "Terminal inspection & port facility assessment",
      "Naval architecture & structural analysis",
    ],
    contactEmail: "general",
    mailtoSubject: "Marine Inspection Booking",
    mailtoBody:
      "Hello Seamate,\n\nWe would like to request a Marine Inspection. Please find our scope below:\n\n- Inspection regime (OVID/CMID, SIRE, MWS, ISM/MLC, other):\n- Vessel / asset details:\n- Location:\n- Preferred window:\n\nKindly send a quote and timeline.\n\nThank you,\n",
    image: {
      src: "/images/cargo-vessel-dusk.jpg",
      alt: "Cargo vessel underway at dusk against a coastal range",
      aspect: "aspect-[3/2]",
      mode: "cover",
    },
  },
  {
    slug: "hsse",
    number: "03",
    title: "HSSE & Loss Prevention",
    tagline: "Engineered safety — modeling, equipment, and continuity.",
    body:
      "Fire protection and detection, gas analysis, photoluminescent escape systems, and computer-based HSSE monitoring. Risk identification, business-continuity planning, and disaster-recovery design for industrial and maritime operations.",
    capabilities: [
      "Fire-fighting equipment & detection system installation",
      "Fire & gas detection analyses",
      "Photoluminescent safety signs & escape route layouts",
      "Computer-based HSSE monitoring systems",
      "Safety modeling, site inspections, action management",
      "Business continuity & disaster recovery planning",
    ],
    contactEmail: "general",
    mailtoSubject: "HSSE Consultancy Inquiry",
    mailtoBody:
      "Hello Seamate,\n\nWe are looking for HSSE & loss-prevention support for the following operation:\n\n- Site / asset:\n- Scope (fire, gas, signage, modeling, full audit):\n- Standards applicable:\n- Target start:\n\nLooking forward to discussing.\n\nThank you,\n",
    image: {
      src: "/images/hsse-brochure.jpg",
      alt: "Seamate HSSE brochure spread showing photoluminescent escape signage and accreditations",
      aspect: "aspect-[3/2]",
      mode: "contain",
    },
  },
  {
    slug: "shipping-logistics",
    number: "04",
    title: "Shipping & Logistics",
    tagline: "Freight forwarding with a West African operational base.",
    body:
      "Project cargo, containerised and break-bulk freight, customs clearance, and supply-chain coordination — managed from Lagos with partner networks reaching across EMEA.",
    capabilities: [
      "International freight forwarding (sea, air, multimodal)",
      "Project cargo & oversized equipment movement",
      "Container & break-bulk shipping",
      "Customs clearance & trade compliance",
      "Supply-chain coordination & last-mile",
    ],
    contactEmail: "general",
    mailtoSubject: "Shipping & Logistics Quote",
    mailtoBody:
      "Hello Seamate,\n\nWe would like a quote for the following shipment:\n\n- Cargo type & weight / volume:\n- Origin → Destination:\n- Incoterm preference:\n- Target window:\n\nThank you,\n",
    image: {
      src: "/images/warehouse-forklift.jpg",
      alt: "Logistics warehouse with forklift moving palletised freight",
      aspect: "aspect-[1/1]",
      mode: "cover",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
