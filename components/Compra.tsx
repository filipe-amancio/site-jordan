"use client";

import { useEffect, useId, useRef, useState } from "react";
import { LinkBrandForge } from "@/components/LinkBrandForge";
import { site } from "@/lib/site";

// "Comprar" simulado (BRIEF §2, regras 2 e 7): <dialog> nativo, tamanho guardado só no estado
// da página, nada enviado a lugar nenhum. Um modal por página, aberto por qualquer BotaoComprar.
const ID_MODAL = "modal-compra";

export function BotaoComprar({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      className={className}
      onClick={() => (document.getElementById(ID_MODAL) as HTMLDialogElement | null)?.showModal()}
    >
      Comprar
    </button>
  );
}

export function ModalCompra() {
  const ref = useRef<HTMLDialogElement>(null);
  const [tamanho, setTamanho] = useState<number | null>(null);
  const [passo, setPasso] = useState<1 | 2>(1);
  const [tentou, setTentou] = useState(false);
  const idTitulo = useId();
  const idAjuda = useId();
  const refTitulo2 = useRef<HTMLHeadingElement>(null);

  // O botão "Comprar" do passo 1 some ao avançar: leva o foco para o título do passo 2
  useEffect(() => {
    if (passo === 2) refTitulo2.current?.focus();
  }, [passo]);

  function fechar() {
    ref.current?.close();
  }

  function aoFechar() {
    setPasso(1);
    setTentou(false);
  }

  return (
    <dialog
      ref={ref}
      id={ID_MODAL}
      aria-labelledby={idTitulo}
      onClose={aoFechar}
      className="m-auto w-[min(100%-2rem,34rem)] border border-couro bg-asfalto p-0 text-couro"
    >
      <div className="flex justify-end border-b border-borracha">
        <button
          type="button"
          onClick={fechar}
          aria-label="Fechar"
          className="flex h-12 items-center px-4 text-base underline-offset-4 hover:underline"
        >
          Fechar
        </button>
      </div>

      {passo === 1 ? (
        <div className="grid gap-6 p-5 md:p-8">
          <h2 id={idTitulo} className="display text-2xl md:text-3xl">
            Qual é o seu número?
          </h2>
          <fieldset aria-describedby={idAjuda}>
            <legend className="cota mb-3 text-base">Tamanho (BR)</legend>
            <div className="grid grid-cols-4 gap-px bg-borracha">
              {site.tamanhos.map((t) => (
                <label
                  key={t}
                  className="flex min-h-12 cursor-pointer items-center justify-center bg-asfalto text-lg has-checked:bg-couro has-checked:text-asfalto has-focus-visible:outline-2 has-focus-visible:outline-couro"
                >
                  <input
                    type="radio"
                    name="tamanho"
                    value={t}
                    checked={tamanho === t}
                    onChange={() => setTamanho(t)}
                    className="sr-only"
                  />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>
          {/* Região viva sempre presente: o aviso é anunciado quando o texto muda */}
          <p
            id={idAjuda}
            role="alert"
            className={tentou && !tamanho ? "border-l-4 border-sola pl-3 text-base text-couro" : "cota text-base"}
          >
            Escolha um tamanho para continuar.
            {tentou && !tamanho ? <span className="sr-only"> Nenhum tamanho escolhido.</span> : null}
          </p>
          <button
            type="button"
            aria-disabled={!tamanho}
            onClick={() => (tamanho ? setPasso(2) : setTentou(true))}
            className="largura-expandida flex min-h-14 items-center px-4 text-lg font-extrabold uppercase bg-sola text-asfalto aria-disabled:cursor-not-allowed aria-disabled:bg-borracha aria-disabled:text-cota"
          >
            Comprar
          </button>
        </div>
      ) : (
        <div className="grid gap-5 p-5 md:p-8">
          <h2 id={idTitulo} ref={refTitulo2} tabIndex={-1} className="display text-2xl outline-none md:text-3xl">
            Esse par não sai da prancha.
          </h2>
          <p className="text-lg">
            Projeto conceitual por BrandForge, sem vínculo com a Nike, Inc. ou a Jordan Brand. Nada foi comprado e
            nenhum dado seu foi guardado.
          </p>
          <p className="text-lg font-semibold">Quer um site assim para a sua marca?</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <LinkBrandForge className="largura-expandida flex min-h-14 items-center justify-center bg-sola px-4 font-extrabold text-asfalto" />
            <button
              type="button"
              onClick={fechar}
              className="flex min-h-14 items-center justify-center border border-couro px-4 hover:bg-couro hover:text-asfalto"
            >
              Voltar ao Chicago
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
