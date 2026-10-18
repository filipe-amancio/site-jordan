import type { Metadata } from "next";
import { Cores } from "@/components/secoes/home/Cores";
import { Forma } from "@/components/secoes/home/Forma";
import { Hero } from "@/components/secoes/home/Hero";
import { Legado } from "@/components/secoes/home/Legado";

export const metadata: Metadata = {
  title: { absolute: "Air Jordan 1 | Projeto conceitual BrandForge" },
  description:
    "O Air Jordan 1 em português: o legado de 1985, a forma peça por peça e as cores da linha. Projeto conceitual, sem vínculo com a Nike.",
  alternates: { canonical: "/" },
};

export default function Inicio() {
  return (
    <main id="conteudo">
      <Hero />
      <Legado />
      <Forma />
      <Cores />
    </main>
  );
}
