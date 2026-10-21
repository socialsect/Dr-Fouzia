import type { MetadataRoute } from "next";
import { PRIVATE_PATHS, SITE_URL } from "@/lib/site";

// Search engines, AI training crawlers, AI search indexers and user-triggered AI fetchers.
const BOTS = [
  "Googlebot", "Googlebot-Image", "Google-Extended", "Bingbot", "Applebot", "Applebot-Extended",
  "DuckDuckBot", "DuckAssistBot", "YandexBot", "Baiduspider",
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai", "Claude-Web",
  "PerplexityBot", "Perplexity-User", "Meta-ExternalAgent", "Meta-ExternalFetcher", "FacebookBot",
  "Amazonbot", "CCBot", "cohere-ai", "MistralAI-User", "YouBot", "Bytespider", "Diffbot",
  "ImagesiftBot", "Timpibot", "PetalBot", "Ai2Bot", "Kagibot",
];

// A bot with its own group ignores "*", so the private-path rules are repeated.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },
      ...BOTS.map((userAgent) => ({ userAgent, allow: "/", disallow: PRIVATE_PATHS })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
