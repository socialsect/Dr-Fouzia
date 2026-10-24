import type { MetadataRoute } from "next";
import { SITE_URL, getSiteRoutes } from "@/lib/site";
import { getAuthorSlugs, getBlogSitemapEntries } from "@/lib/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = getSiteRoutes().map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.path === "/" ? "weekly" : "monthly",
    priority: r.priority,
  }));

  // Blog posts + authors from Sanity; skip noindex posts. Static routes still ship if Sanity is unreachable.
  try {
    const [posts, authors] = await Promise.all([getBlogSitemapEntries(), getAuthorSlugs()]);
    for (const p of posts) {
      if (!p.slug || p.robots?.includes("noindex")) continue;
      entries.push({
        url: `${SITE_URL}/blog/${p.slug}`,
        lastModified: p.updatedAt || p.publishedAt || p._updatedAt,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
    for (const a of authors) {
      if (a.slug) entries.push({ url: `${SITE_URL}/blog/author/${a.slug}`, changeFrequency: "monthly", priority: 0.4 });
    }
  } catch (err) {
    console.error("Sitemap: failed to fetch blog routes from Sanity:", err);
  }
  return entries;
}
