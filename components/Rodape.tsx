import { LinkBrandForge } from "@/components/LinkBrandForge";
import { site } from "@/lib/site";

// Igual em todas as páginas. Leva o aviso de projeto conceitual (BRIEF §2, regra 1) e os créditos (regra 5).
export function Rodape() {
  return (
    <footer id="rodape" className="mt-24 border-t border-couro pb-28 md:pb-12">
      <div className="moldura grid gap-10 pt-10 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-[40rem]">
          <p className="display text-2xl md:text-3xl">Montado peça por peça pela BrandForge.</p>
          <p className="mt-4 text-lg">
            Projeto conceitual por BrandForge, sem vínculo com a Nike, Inc. ou a Jordan Brand.
          </p>
          <p className="cota mt-2 text-base">
            Nike, Air Jordan, Swoosh, Jumpman e Wings são marcas da Nike, Inc.
          </p>
        </div>
        <LinkBrandForge className="largura-expandida inline-flex min-h-14 items-center justify-center border border-couro px-5 text-lg font-extrabold hover:bg-couro hover:text-asfalto" />
      </div>

      <div className="moldura mt-10">
        <details className="border-t border-borracha pt-4">
          <summary className="flex min-h-11 cursor-pointer items-center text-base font-medium">
            Créditos e fontes
          </summary>
          <div className="grid gap-4 pb-4 pt-2">
            <p className="text-base">Imagens: Nike, Inc.</p>
            <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
              {site.fontes.map((f) => (
                <li key={f.url} className="cota text-base">
                  <a href={f.url} rel="noopener noreferrer" target="_blank" className="underline-offset-4 hover:text-couro hover:underline">
                    {f.veiculo}: {new URL(f.url).hostname.replace(/^www\./, "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </footer>
  );
}
