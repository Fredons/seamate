// ═══════════════════════════════════════════
// DIVISIONS — Seamate Group's six operating arms.
// Each division has its own anchor on /divisions and its own mailto context.
// Maritime is the deepest treatment (it carries the most operating history).
// Industrial Advisory and Agro Systems are framed as developmental capabilities
// — not portfolios — until executives provide closed-engagement examples.
// ═══════════════════════════════════════════

export type Division = {
  slug: string;
  number: string;
  title: string;
  shortName: string;
  tagline: string;
  body: string;
  capabilities: string[];
  contactEmail: "vessel" | "general";
  mailtoSubject: string;
  mailtoBody: string;
  image?: { src: string; alt: string; aspect: string; mode: "cover" | "contain" };
};

export const DIVISIONS: Division[] = [
  {
    slug: "maritime",
    number: "01",
    title: "Seamate Maritime",
    shortName: "Maritime",
    tagline: "Ship management, marine inspection, HSSE, and maritime advisory.",
    body:
      "The operating heart of Seamate Group. Eighteen years of ISO 9001:2015 certified maritime services covering five vessel classes — offshore, cargo, tanker, project, and fishing — with marine inspection across eight regimes (OVID/CMID, SIRE, MWS, ISM/MLC), HSSE & loss prevention, and maritime advisory. Registered as marine contractor across our operating regions.",
    capabilities: [
      "Ship management — technical, commercial, crewing, agency, bunker supplies",
      "Marine inspection — OVID/CMID, SIRE, MWS, ISM/MLC, terminal & jetty",
      "HSSE & loss prevention — fire & gas systems, photoluminescent signage, modeling",
      "Naval architecture & structural analysis",
      "Maritime advisory & intelligence",
      "Dry dock, new-build supervision, project consultancy",
    ],
    contactEmail: "vessel",
    mailtoSubject: "Seamate Maritime Inquiry",
    mailtoBody:
      "Hello Seamate Maritime,\n\nWe are evaluating engagement options for:\n\n- Vessel / asset type:\n- Flag / route:\n- Scope (ship management, inspection, HSSE, advisory):\n- Required start:\n\nWe'd like to discuss scope and references.\n\nThank you,\n",
    image: {
      src: "/images/tanker-rio-genoa.jpg",
      alt: "Aerial bow view of a tanker under power at sea",
      aspect: "aspect-[1/1]",
      mode: "cover",
    },
  },
  {
    slug: "energy",
    number: "02",
    title: "Seamate Energy",
    shortName: "Energy",
    tagline: "Petroleum distribution, SPM offshore export, refinery-linked logistics.",
    body:
      "Approved distributor for Dangote Petroleum Refinery — Africa's largest single-train refinery in Ibeju-Lekki — handling domestic and export petroleum movement. Refinery truck loading, terminal gantry operations, and Single Point Mooring (SPM) offshore loading with FOB delivery across the EMEA corridor and broader African markets.",
    capabilities: [
      "Domestic petroleum & petrochemical distribution",
      "Refinery truck loading & terminal gantry operations",
      "Offshore vessel loading via Single Point Mooring (SPM)",
      "FOB delivery & competitive tender programs",
      "Marine fuel systems & bunker supply",
      "Industrial fuel distribution",
    ],
    contactEmail: "general",
    mailtoSubject: "Seamate Energy & Trade Inquiry",
    mailtoBody:
      "Hello Seamate Energy,\n\nWe are interested in:\n- Product:\n- Volume:\n- Delivery terms (FOB / CIF / other):\n- Destination:\n- Target window:\n\nThank you,\n",
    image: {
      src: "/images/dangote-composite.jpg",
      alt: "Dangote Petroleum Refinery composite — tanker truck, refinery, offshore vessel at SPM",
      aspect: "aspect-[3/2]",
      mode: "cover",
    },
  },
  {
    slug: "logistics",
    number: "03",
    title: "Seamate Logistics",
    shortName: "Logistics",
    tagline: "Coastal trade systems, freight forwarding, supply chain across Africa.",
    body:
      "Cargo movement across the Trans-West African Coastal Highway and inland networks, with multimodal freight forwarding (sea, air, road), project cargo, container and break-bulk shipping, customs clearance, and integrated supply-chain coordination. A cost-competitive alternative to road and rail for moving goods across coastal Africa.",
    capabilities: [
      "International freight forwarding (sea, air, multimodal)",
      "Project cargo & oversized equipment movement",
      "Container & break-bulk shipping",
      "Coastal trade systems — Trans-West African Coastal Highway",
      "Customs clearance & trade compliance",
      "Supply-chain coordination & last-mile",
    ],
    contactEmail: "general",
    mailtoSubject: "Seamate Logistics Quote",
    mailtoBody:
      "Hello Seamate Logistics,\n\nWe would like a quote for:\n\n- Cargo type & weight / volume:\n- Origin → Destination:\n- Incoterm preference:\n- Target window:\n\nThank you,\n",
    image: {
      src: "/images/warehouse-forklift.jpg",
      alt: "Logistics warehouse with forklift moving palletised freight",
      aspect: "aspect-[1/1]",
      mode: "cover",
    },
  },
  {
    slug: "industrial-advisory",
    number: "04",
    title: "Seamate Industrial Advisory",
    shortName: "Industrial Advisory",
    tagline: "Maritime strategy, trade-corridor research, market-entry studies.",
    body:
      "Advisory capabilities drawn from eighteen years of African maritime and energy operations. We work with operators, investors, and government partners on supply-chain network design, market-entry studies for African expansion, sectoral research, and strategy for the AfCFTA-era trade corridors. Where execution is required, we engage through the Maritime, Energy, or Logistics divisions.",
    capabilities: [
      "Supply-chain & logistics network design",
      "Market-entry & feasibility studies for African operations",
      "Trade-corridor strategy & AfCFTA positioning",
      "Sectoral research — maritime, oil & gas, industrial",
      "Regulatory navigation — NIMASA, DPR, NCDMB, customs",
      "Operational due diligence for investors",
    ],
    contactEmail: "general",
    mailtoSubject: "Industrial Advisory Inquiry",
    mailtoBody:
      "Hello Seamate Industrial Advisory,\n\nWe'd like to discuss an advisory engagement:\n\n- Focus area (network design, market entry, sectoral research, regulatory, due diligence):\n- Geography:\n- Background:\n- Target timeline:\n\nThank you,\n",
  },
  {
    slug: "agro-systems",
    number: "05",
    title: "Seamate Agro Systems",
    shortName: "Agro Systems",
    tagline: "Agro-logistics and value-added systems for African food and energy.",
    body:
      "A developmental division applying our maritime, logistics, and energy footprint to African agro-industrial systems. Focus areas include agro-export logistics, cold-chain coordination, food-system corridors, value-added agriculture for export markets, and biofuel and waste-to-value applications at the energy–agriculture interface.",
    capabilities: [
      "Agro-export logistics & port coordination",
      "Cold-chain advisory & infrastructure design",
      "Food-system corridor planning",
      "Value-added agriculture for export",
      "Biofuels & waste-to-value initiatives",
      "Refinery-adjacent agro applications",
    ],
    contactEmail: "general",
    mailtoSubject: "Seamate Agro Systems Inquiry",
    mailtoBody:
      "Hello Seamate Agro Systems,\n\nWe'd like to explore a collaboration in:\n\n- Focus area (agro-export, cold-chain, biofuels, food-system corridors):\n- Geography:\n- Background:\n\nThank you,\n",
  },
  {
    slug: "academy",
    number: "06",
    title: "Seamate Academy",
    shortName: "Academy",
    tagline: "Maritime training, technical workforce, graduate trainees.",
    body:
      "The workforce-development arm of Seamate Group. Anchored by the Seamate Africa Seatime Initiative (SASI) — a training-to-employment pipeline targeting 500 cadets in year one and 10,000 African seafarers over a decade, against a projected global shortage of 165,000 officers by 2035. Extends to logistics education, industrial workforce development, technical mentorship, and a Maritime Technology & STEM Hub.",
    capabilities: [
      "SASI Cadetship — STCW-compliant deck & engineer officer training",
      "Maritime Technology & STEM Hub — youth career pathways",
      "Logistics & trade education",
      "Industrial workforce development",
      "Graduate trainee programs",
      "Technical mentorship & industry partnerships",
    ],
    contactEmail: "general",
    mailtoSubject: "Seamate Academy Inquiry",
    mailtoBody:
      "Hello Seamate Academy,\n\nMy interest:\n- [ ] Cadet enrollment\n- [ ] SASI investment / capital partnership\n- [ ] Vessel-operator partnership for seatime placements\n- [ ] Academic / institutional partnership\n- [ ] STEM Hub collaboration\n- [ ] Graduate trainee program\n\nBackground:\n\nThank you,\n",
  },
];

export function getDivision(slug: string): Division | undefined {
  return DIVISIONS.find((d) => d.slug === slug);
}
