import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Retired consultation landing page → main contact page.
      {
        source: "/consultation",
        destination: "/contact",
        statusCode: 301,
      },
      // Renamed CBT routes → Calm Mind Sessions (permanent 308 redirects).
      {
        source: "/cbt",
        destination: "/calm-mind-sessions",
        permanent: true,
      },
      {
        source: "/cbt/:path*",
        destination: "/calm-mind-sessions/:path*",
        permanent: true,
      },
      {
        source: "/cbt-:slug",
        destination: "/calm-mind-sessions-:slug",
        permanent: true,
      },
      {
        source: "/integrated-functional-medicine-cbt",
        destination: "/integrated-functional-medicine-calm-mind-sessions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
