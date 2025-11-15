import type { NextConfig } from "next";

// Configure for GitHub Pages static export with custom domain.
// basePath and assetPrefix are empty for custom domains (fuscion.com).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
