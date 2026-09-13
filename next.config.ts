import type { NextConfig } from "next";

/**
 * The site is fully static (every route is prerendered, no API routes, no
 * server actions, no dynamic params), so it is exported to static HTML and
 * deployed to GitHub Pages.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  // GitHub Pages serves files directly; no trailing-slash rewrite server exists.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Assets are pre-optimized at build time (WebP, correctly sized), so the
    // runtime optimizer is disabled — required for static export.
    unoptimized: true,
  },
};

export default nextConfig;
