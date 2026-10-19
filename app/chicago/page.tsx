import type { Metadata } from "next";
import { ModalCompra } from "@/components/Compra";
import { HeroChicago } from "@/components/secoes/chicago/Hero";
import { Historia } from "@/components/secoes/chicago/Historia";
import { Materiais } from "@/components/secoes/chicago/Materiais";
import { OutrasCores } from "@/components/secoes/chicago/OutrasCores";
import { VistaExplodida } from "@/components/secoes/chicago/VistaExplodida";
import { ogBase } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Air Jordan 1 Chicago | Projeto conceitual BrandForge" },
  description:
    "O Air Jordan 1 Chicago peça por peça: a história da cor, as quatro vistas e os materiais. Projeto conceitual, sem vínculo com a Nike.",
  alternates: { canonical: "/chicago" },
  openGraph: {
    ...ogBase,
    url: "/chicago",
    title: "Air Jordan 1 Chicago | Projeto conceitual BrandForge",
    description:
      "Branco, vermelho e preto, desde 1985. O Chicago peça por peça. Projeto conceitual, sem vínculo com a Nike.",
  },
};

export default function Chicago() {
  return (
    <main id="conteudo">
      <HeroChicago />
      <Historia />
      <VistaExplodida />
      <Materiais />
      <OutrasCores />
      <ModalCompra />
    </main>
  );
}
