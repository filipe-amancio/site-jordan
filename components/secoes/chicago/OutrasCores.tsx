import Link from "next/link";
import { CardsCores } from "@/components/CardsCores";

export function OutrasCores() {
  return (
    <section aria-labelledby="outras-titulo" className="moldura border-t border-borracha py-20 md:py-32">
      <h2 id="outras-titulo" className="display text-balance text-3xl md:text-5xl">
        O Chicago abriu a prancha. Tem mais vindo.
      </h2>
      <div className="mt-12">
        <CardsCores semChicago />
      </div>
      <Link
        href="/#cores"
        className="mt-10 inline-flex min-h-14 items-center border border-couro px-5 text-lg font-medium hover:bg-couro hover:text-asfalto"
      >
        Ver a linha
      </Link>
    </section>
  );
}
