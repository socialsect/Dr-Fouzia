import fs from "node:fs";
import path from "node:path";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export type SiteRoute = {
  path: string;
  title: string;
  lastModified: Date;
  priority: number;
};

const APP_DIR = path.join(process.cwd(), "src", "app");

function walk(dir: string, segments: string[], out: SiteRoute[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    // skip api, private (_x), dynamic ([x]) and route-group-less specials
    if (name === "api" || name.startsWith("_") || name.startsWith("[")) continue;
    const next = name.startsWith("(") ? segments : [...segments, name];
    const full = path.join(dir, name);
    const page = path.join(full, "page.tsx");
    if (fs.existsSync(page)) {
      const src = fs.readFileSync(page, "utf8");
      if (!/index:\s*false/.test(src)) {
        const url = "/" + next.join("/");
        const title =
          src.match(/\btitle:\s*["'`]([^"'`]+)["'`]/)?.[1] ??
          next[next.length - 1].replace(/-/g, " ");
        out.push({
          path: url,
          title: title.replace(/\s*\|\s*Dr\.? Fouzia.*$/i, ""),
          lastModified: fs.statSync(page).mtime,
          priority: url.split("/").length > 2 ? 0.6 : 0.8,
        });
      }
    }
    walk(full, next, out);
  }
}

export function getSiteRoutes(): SiteRoute[] {
  const root = path.join(APP_DIR, "page.tsx");
  const routes: SiteRoute[] = [
    {
      path: "/",
      title: "Home",
      lastModified: fs.statSync(root).mtime,
      priority: 1,
    },
  ];
  walk(APP_DIR, [], routes);
  return routes;
}

/** Paths crawlers should not touch (also noindex / non-content). */
export const PRIVATE_PATHS = ["/api/", "/consultation"];
