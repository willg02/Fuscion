import type { NextConfig } from "next";

// Configure for GitHub Pages static export.
// For project pages (user.github.io/repo), set BASE_PATH and ASSET_PREFIX to 
// the repo name (e.g. "/Fuscion"). For custom domains, leave them empty.
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH || "",
  assetPrefix: process.env.ASSET_PREFIX || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
