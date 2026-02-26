import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self)",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' maps.googleapis.com www.googletagmanager.com www.google-analytics.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' maps.googleapis.com www.googletagmanager.com www.google-analytics.com; frame-src 'self' www.google.com;",
  },
];

const nextConfig: NextConfig = {
  // Optymalizacje obrazów
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Nagłówki bezpieczeństwa
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  // Eksperimentalne optymalizacje
  experimental: {
    optimizePackageImports: ["framer-motion", "@googlemaps/react-wrapper"],
  },

  // Kompresja
  compress: true,

  // Strict mode Reacta
  reactStrictMode: true,

  // Wyłączenie powered by header
  poweredByHeader: false,
};

export default nextConfig;
