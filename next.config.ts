import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint during build
  },
};

export default nextConfig;
