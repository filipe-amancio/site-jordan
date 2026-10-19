"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

// Interação-assinatura da direção B: a faixa das quatro vistas fica presa e desliza na horizontal
// conforme a rolagem, com a régua medindo o avanço e cada vista assentando no lugar (snap).
// Só com movimento liberado e tela larga e alta o bastante; fora disso (e sem JS) as vistas ficam
// empilhadas na vertical, como renderizadas no servidor. O layout horizontal vive no globals.css,
// sob [data-vistas-animado], atributo que só existe enquanto a animação está montada.
export function PalcoVistas({ children }: { children: React.ReactNode }) {
  const palco = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 64rem) and (min-height: 45rem)", () => {
        const el = palco.current!;
        el.setAttribute("data-vistas-animado", "");

        const faixa = el.querySelector<HTMLElement>("[data-faixa]")!;
        const vistas = gsap.utils.toArray<HTMLElement>("[data-vista]", el);
        const links = gsap.utils.toArray<HTMLAnchorElement>("[data-regua-segmento]", el);
        const preenche = gsap.utils.toArray<HTMLElement>("[data-regua-preenche]", el);
        const passos = vistas.length - 1;
        // Medida dentro da faixa (o offsetParent muda quando o palco é preso)
        const distancia = () => vistas[passos].offsetLeft - vistas[0].offsetLeft;

        gsap.set(preenche, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(preenche[0], { scaleX: 1 });

        let atual = -1;
        const marcar = (i: number) => {
          if (i === atual) return;
          atual = i;
          links.forEach((link, j) =>
            j === i ? link.setAttribute("aria-current", "step") : link.removeAttribute("aria-current")
          );
        };
        marcar(0);

        // Uma unidade de tempo por passagem de vista. O deslize é linear (ease "none") para casar com a
        // rolagem; a massa vem do scrub suavizado e o assentamento, do snap em cada vista.
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${distancia() * 1.25}`,
            pin: true,
            scrub: 0.8,
            // inertia: false assenta na vista mais próxima de onde a rolagem parou, sem projetar a
            // velocidade (senão o clique na régua, com rolagem suave, passava da vista pedida)
            snap: { snapTo: 1 / passos, inertia: false, duration: { min: 0.25, max: 0.7 }, delay: 0.08, ease: "power3.out" },
            invalidateOnRefresh: true,
            onUpdate: (self) => marcar(Math.round(self.progress * passos)),
          },
        });

        tl.to(faixa, { x: () => -distancia(), duration: passos }, 0);
        vistas.slice(1).forEach((vista, i) => {
          // Folhas sobrepostas: a foto e o número chegam um pouco atrasados em relação à folha
          tl.from(vista.querySelector("[data-vista-foto]"), { xPercent: 14, duration: 1 }, i);
          tl.from(vista.querySelector("[data-vista-numero]"), { xPercent: 60, duration: 1 }, i);
          tl.fromTo(preenche[i + 1], { scaleX: 0 }, { scaleX: 1, duration: 1 }, i);
        });

        // Na faixa presa, o link da régua leva à posição de rolagem da vista (a âncora apontaria para fora)
        const irPara = (evento: MouseEvent) => {
          const i = links.indexOf(evento.currentTarget as HTMLAnchorElement);
          const st = tl.scrollTrigger!;
          evento.preventDefault();
          window.scrollTo({ top: st.start + ((st.end - st.start) * i) / passos, behavior: "smooth" });
        };
        links.forEach((link) => link.addEventListener("click", irPara));

        return () => {
          links.forEach((link) => {
            link.removeEventListener("click", irPara);
            link.removeAttribute("aria-current");
          });
          el.removeAttribute("data-vistas-animado");
        };
      });
    },
    { scope: palco }
  );

  return <div ref={palco}>{children}</div>;
}
