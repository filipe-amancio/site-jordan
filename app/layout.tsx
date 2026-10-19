import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";
import { JsonLdNegocio } from "@/components/seo/JsonLd";
import { ogBase, site, siteIndexavel, urlDoSite } from "@/lib/site";
import "./globals.css";

// Archivo variável com o eixo de largura (62–125): expandida no display, normal no corpo,
// condensada nas cotas e no carimbo (DIRECAO, direção B).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(urlDoSite()),
  title: site.nome,
  description: site.descricao,
  alternates: { canonical: "/" },
  openGraph: ogBase,
  robots: siteIndexavel() ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={archivo.variable}>
      <body className="min-h-dvh antialiased">
        <Cabecalho />
        {children}
        <Rodape />
        <JsonLdNegocio />
      </body>
    </html>
  );
}
