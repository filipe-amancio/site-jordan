import type { MetadataRoute } from "next";
import { siteIndexavel, urlDoSite } from "@/lib/site";

// Rastreadores de IA: decisão consciente registrada na fase 7 (skill site-moderno-seo).
// Este site fica fora do Google e das IAs também em produção (noindex aprovado em 2026-10-18;
// SITE_INDEXAVEL não é definida), então o bloqueio abaixo vale para todos, IA incluída. A lista
// só passaria a valer se a decisão do noindex mudar.
const RASTREADORES_IA = ["GPTBot", "OAI-SearchBot", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended"];

export default function robots(): MetadataRoute.Robots {
  // Antes do lançamento (SITE_INDEXAVEL diferente de "true"): ninguém indexa.
  if (!siteIndexavel()) return { rules: { userAgent: "*", disallow: "/" } };

  return {
    rules: [{ userAgent: "*", allow: "/" }, ...RASTREADORES_IA.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${urlDoSite()}/sitemap.xml`,
  };
}
