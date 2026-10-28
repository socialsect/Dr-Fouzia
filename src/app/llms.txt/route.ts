import { SITE_URL, getSiteRoutes } from "@/lib/site";

// llms.txt: curated, markdown index of the site for LLM agents (https://llmstxt.org).
export function GET() {
  const routes = getSiteRoutes();
  const home = routes.find((r) => r.path === "/");
  const links = routes
    .filter((r) => r !== home)
    .map((r) => `- [${r.title}](${SITE_URL}${r.path})`)
    .join("\n");

  const body = `# Dr. Fouzia Al Ali

> Functional medicine doctor and family physician in Dubai, UAE. Root-cause, unhurried care across functional medicine, CBT, women's hormonal health, metabolic health, gut health, healthy ageing and aesthetic medicine.

Home: ${SITE_URL}
Sitemap: ${SITE_URL}/sitemap.xml
Booking: ${SITE_URL}/contact

## Pages

${links}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
