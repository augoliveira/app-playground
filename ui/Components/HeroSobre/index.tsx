"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@heroicons/react/solid";

import Seta from "../../../public/img/seta.png";

const BackgroundImage = dynamic(
  () => import("#/ui/Components/BG/BackgroundImage"),

  {
    ssr: false,
  }
);

const css = { maxWidth: "100%", height: "auto" };

function HeroSobre() {
  return (
    <section id="sobre">
      <div className="conteudo">
        <article className="rightShow" id="a-dinamite">
          <h2>
            AGENCIA <strong className="text-white">UP EXPERT</strong>
          </h2>

          <h2>
            Up de
            <br />
            Criatividades estão
            <br />
            prontas para serem
            <br />
            utilizadas<span>.</span>
          </h2>

          <p>
            Somos uma <strong>AGÊNCIA FUL</strong> especializado em design com 8
            anos de atuação no mercado pronta para fazer seu negócio decolar.
            <span>
              <b>
                Soluções em desenvolvimento para atrair o público alvo correto
                para sua empresa.
              </b>
            </span>
            Prezamos pela qualidade e exclusividade em cada projeto sempre com
            foco em passar a mensagem para um público específico.
          </p>

          <div id="ctas">
            <div className="box">
              VOCÊ QUER BAIXAR
              <br />A APRESENTAÇÃO <br />
              COMPLETA
              <Link className="ir soft-hover" href="#" target="_blank">
                Clique Aqui
                <ArrowRightIcon className="block h-6 w-6 animate-bounce fill-yellow-500" />
              </Link>
            </div>

            <span id="ou">OU</span>

            <div className="box">
              DESEJA UM PROJETO
              <br />
              INCRÍVEL PARA <br />
              SEU NEGÓCIO?
              <Link className="ir soft-hover" href="#contato">
                Vamos Conversar
                <ArrowRightIcon className="block h-6 w-6 animate-bounce fill-yellow-500" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
export default HeroSobre;
