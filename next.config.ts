import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permanent redirects so any prior links pointing at /services, /energy-trade,
  // or /sustainability route to the new Seamate Group IA without a 404.
  async redirects() {
    return [
      { source: "/services", destination: "/divisions", permanent: true },
      { source: "/services/:slug*", destination: "/divisions", permanent: true },
      { source: "/energy-trade", destination: "/divisions#energy", permanent: true },
      { source: "/sustainability", destination: "/about#african-development", permanent: true },
      { source: "/sustainability/:slug*", destination: "/about#african-development", permanent: true },
    ];
  },
};

export default nextConfig;
