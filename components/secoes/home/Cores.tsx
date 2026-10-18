import { CardsCores } from "@/components/CardsCores";

export function Cores() {
  return (
    <section id="cores" aria-labelledby="cores-titulo" className="moldura scroll-mt-4 py-20 md:py-32">
      <h2 id="cores-titulo" className="display text-3xl md:text-5xl">
        Uma forma. Quatro jeitos de chegar.
      </h2>
      <p className="mt-5 max-w-[36rem] text-lg">Começamos pelo Chicago. As outras estão na prancha.</p>
      <div className="mt-12">
        <CardsCores />
      </div>
    </section>
  );
}
