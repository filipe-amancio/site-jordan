import { LinkBrandForge } from "@/components/LinkBrandForge";
import { site } from "@/lib/site";

// Igual em todas as páginas. Leva o aviso de projeto conceitual (BRIEF §2, regra 1) e os créditos (regra 5).
// O aviso é desenhado como o carimbo de uma prancha técnica, o bloco de título no canto do desenho.

// Fontes agrupadas por veículo, na ordem em que aparecem em site.fontes
const porVeiculo = site.fontes.reduce<Record<string, string[]>>((grupos, f) => {
  (grupos[f.veiculo] ??= []).push(f.url);
  return grupos;
}, {});

export function Rodape() {
  return (
    <footer id="rodape" className="grade border-t border-couro pb-28 md:pb-12">
      <div className="moldura grid gap-10 pt-12 md:pt-16 lg:grid-cols-[1fr_28rem] lg:items-end">
        <p className="display max-w-[40rem] text-3xl md:text-5xl">Montado peça por peça pela BrandForge.</p>

        <div className="border border-couro bg-asfalto">
          <dl>
            <div className="grid grid-cols-[6rem_1fr] border-b border-borracha">
              <dt className="cota border-r border-borracha px-3 py-3">Projeto</dt>
              <dd className="px-3 py-3 text-base">
                Projeto conceitual por BrandForge, sem vínculo com a Nike, Inc. ou a Jordan Brand.
              </dd>
            </div>
            <div className="grid grid-cols-[6rem_1fr] border-b border-borracha">
              <dt className="cota border-r border-borracha px-3 py-3">Marcas</dt>
              <dd className="cota px-3 py-3 text-base">
                Nike, Air Jordan, Swoosh, Jumpman e Wings são marcas da Nike, Inc.
              </dd>
            </div>
          </dl>
          <LinkBrandForge className="largura-expandida flex min-h-14 w-full items-center bg-sola px-3 text-lg font-extrabold text-asfalto hover:bg-couro" />
        </div>
      </div>

      <div className="moldura mt-12">
        <details className="group border-y border-borracha bg-asfalto">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 text-base font-medium [&::-webkit-details-marker]:hidden">
            Créditos e fontes
            <span aria-hidden="true" className="display text-xl text-sola group-open:hidden">
              +
            </span>
            <span aria-hidden="true" className="display hidden text-xl text-sola group-open:inline">
              −
            </span>
          </summary>
          <div className="grid gap-6 pb-6 pt-2 lg:grid-cols-[18rem_1fr]">
            <div className="grid content-start gap-1 text-base">
              <p>Vídeo da abertura: gerado por IA para este projeto.</p>
              <p>Imagens: Nike, Inc.</p>
            </div>
            <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(porVeiculo).map(([veiculo, urls]) => (
                <li key={veiculo} className="text-base">
                  <span className="cota text-base">{veiculo}: </span>
                  {urls.map((url, i) => (
                    <span key={url}>
                      {i > 0 && <span className="text-cota"> · </span>}
                      <a
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-flex min-h-11 items-center underline decoration-cota underline-offset-4 hover:decoration-sola hover:decoration-2"
                      >
                        {urls.length > 1 ? `matéria ${i + 1}` : "matéria"}
                        <span className="sr-only"> de {veiculo}, abre em nova aba</span>
                      </a>
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </footer>
  );
}
