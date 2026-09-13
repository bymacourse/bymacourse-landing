import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site.config";

// Required for `output: "export"` — the manifest is emitted as a static file.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "BYMA",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FBF7F1",
    theme_color: "#3B1E5A",
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}
