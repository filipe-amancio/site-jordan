import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// PROVISÓRIO (pendência no ESTADO): marca neutra "1" em vermelho sola até chegar o logo oficial.
// Não é logo da Nike nem da Jordan: logos só a partir dos arquivos fornecidos (BRIEF §2, regra 6).
const fonte = readFile(join(process.cwd(), "assets/Archivo_Expanded-ExtraBold.ttf"));

export async function imagemIcone(lado: number) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#e0283f",
          color: "#16171a",
          fontFamily: "Archivo",
          fontSize: lado * 0.78,
          lineHeight: 1,
        }}
      >
        1
      </div>
    ),
    { width: lado, height: lado, fonts: [{ name: "Archivo", data: await fonte, weight: 800, style: "normal" }] },
  );
}
