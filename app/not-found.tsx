import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Página não encontrada | Air Jordan 1 conceitual" },
};

export default function NaoEncontrada() {
  return (
    <main id="conteudo" className="grade border-b border-borracha">
      <div className="moldura py-24 md:py-40">
        <h1 className="display max-w-[50rem] text-4xl md:text-6xl">Essa peça não está na prancha.</h1>
        <p className="mt-6 max-w-[36rem] text-lg">A página que você procurou não existe. O tênis continua inteiro.</p>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-14 items-center border border-couro bg-asfalto px-5 text-lg font-medium hover:bg-couro hover:text-asfalto"
        >
          Ver a linha
        </Link>
      </div>
    </main>
  );
}
