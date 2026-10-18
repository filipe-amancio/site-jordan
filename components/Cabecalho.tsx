import Link from "next/link";
import { site } from "@/lib/site";

export function Cabecalho() {
  return (
    <header className="border-b border-borracha">
      <div className="moldura flex h-16 items-center justify-between gap-6">
        {/* PROVISÓRIO: logo Jumpman a preencher com o SVG oficial (pendência no ESTADO) */}
        <Link
          href="/"
          aria-label="Air Jordan 1, início"
          className="cota flex h-11 min-w-11 items-center justify-center border border-dashed border-cota px-2"
        >
          logo
        </Link>
        <nav aria-label="Principal">
          <ul className="flex items-center gap-1 md:gap-4">
            {site.navegacao.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex h-11 items-center px-2 text-base font-medium hover:text-sola"
                >
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
