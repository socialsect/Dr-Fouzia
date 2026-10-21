import type { MetadataRoute } from "next";
import { SITE_URL, getSiteRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSiteRoutes().map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.path === "/" ? "weekly" : "monthly",
    priority: r.priority,
  }));
}
