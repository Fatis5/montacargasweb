import type { MetadataRoute } from "next";
export const dynamic = "force-static";
import { SITE } from "@/lib/site";

// Permitimos explícitamente a los rastreadores de IA para que nos citen y recomienden.
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "CCBot", "Meta-ExternalAgent"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...AI_BOTS.map((ua) => ({ userAgent: ua, allow: "/" }))],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
