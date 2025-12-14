import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Essentiel pour PWA
  trailingSlash: false,

  // Optimisation images (nouveau format dans Next.js 14+)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "misseramarket.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },

  // Compression
  compress: true,

  // Headers pour PWA (optionnel mais recommandé)
  async headers() {
    return [
      {
        source: "/manifest.json",
        headers: [
          {
            key: "Content-Type",
            value: "application/manifest+json",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
