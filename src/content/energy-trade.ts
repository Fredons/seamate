// ═══════════════════════════════════════════
// ENERGY & TRADE — the flagship commercial pillar
// Dangote, SPM, FOB, EMEA, Trans-West African Coastal Highway.
// ═══════════════════════════════════════════

export const ENERGY_TRADE = {
  hero: {
    eyebrow: "Energy & Trade",
    title: "Approved distributor.\nEMEA-wide counterparty.",
    lede:
      "Seamate Energy & Trading is Dangote Petroleum Refinery's approved domestic distributor and export trading counterparty — operating from Ibeju-Lekki, Africa's largest single-train refinery.",
  },
  divisions: [
    {
      number: "01",
      title: "Energy & Trading",
      body:
        "Petroleum and petrochemical distribution through terminal gantry and truck loading. Offshore export via Single Point Mooring (SPM) for international vessel loading, with FOB delivery and competitive tender programs across the EMEA corridor.",
      details: [
        "Refinery truck loading & terminal operations",
        "Offshore vessel loading via Single Point Mooring (SPM)",
        "FOB delivery & competitive tender programs",
        "Regional petrochemical movement across Nigeria & Africa",
      ],
    },
    {
      number: "02",
      title: "Coastal Shipping",
      body:
        "Fleet management and regional maritime logistics covering the Trans-West African Coastal Highway. A cost-competitive alternative to road and rail across coastal Nigeria and West Africa, supported by integrated seafarer training.",
      details: [
        "Fleet management & vessel operations",
        "Seafarer training & cadetship integration",
        "Coastal logistics across West Africa",
        "Port-interface services",
      ],
    },
  ],
  pillars: [
    { label: "Refinery base", value: "Ibeju-Lekki" },
    { label: "Offshore export", value: "SPM" },
    { label: "Delivery terms", value: "FOB" },
    { label: "Trading reach", value: "EMEA" },
  ],
} as const;
