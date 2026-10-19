import type { NextConfig } from "next";
import { siteIndexavel } from "./lib/site";

// CSP completada na fase 7: o site só carrega do próprio domínio (fonte via next/font, vídeo,
// poster e JS em public/ e _next/). Páginas estáticas não aceitam nonce, por isso 'unsafe-inline'
// nos scripts inline do Next (guia "Without Nonces" do Next). Em dev, o HMR pede 'unsafe-eval'.
// No preview da Vercel (fase 8) entra o domínio da barra de comentários (vercel.live).
const dev = process.env.NODE_ENV === "development";
const vercelLive = process.env.VERCEL_ENV === "preview" ? " https://vercel.live" : "";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}${vercelLive}`,
  `style-src 'self' 'unsafe-inline'${vercelLive}`,
  `img-src 'self' blob: data:${vercelLive}${vercelLive ? " https://vercel.com" : ""}`,
  `font-src 'self'${vercelLive}${vercelLive ? " https://assets.vercel.com" : ""}`,
  "media-src 'self'",
  `connect-src 'self'${vercelLive}${vercelLive ? " wss://ws-us3.pusher.com" : ""}`,
  `frame-src ${vercelLive ? "https://vercel.live" : "'none'"}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

// Headers de segurança base (skill seguranca-web, assets/headers-seguranca.md)
const headersSeguranca = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    const headers = siteIndexavel() ? headersSeguranca : [...headersSeguranca, { key: "X-Robots-Tag", value: "noindex, nofollow" }];
    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
