import { site } from "@/lib/site";

// "Falar com a BrandForge": rótulo único para o contato. Enquanto o contato não chega
// (pendência no ESTADO), o botão aparece sem destino e marcado como provisório.
export function LinkBrandForge({ className = "" }: { className?: string }) {
  if (site.contatoBrandForge) {
    return (
      <a href={site.contatoBrandForge} className={className}>
        Falar com a BrandForge
      </a>
    );
  }
  return (
    // PROVISÓRIO (não pode ir ao ar assim): texto 2,07:1 com a opacidade; some quando o contato chegar
    <span data-provisorio="contato da BrandForge a preencher" className={`${className} opacity-60`}>
      Falar com a BrandForge
    </span>
  );
}
