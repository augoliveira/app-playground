"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import addParlx from "#/app/common/addParlx";
import initIsotope from "#/app/common/initIsotope";
import { Button, Highlight } from "#/ui/button1";
import { ChevronIcon } from "#/ui/Components/icons/chevron";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

import Case1 from "/public/assets/dinamite/Gestor/upoads/cases/1.jpg";
import Case10 from "/public/assets/dinamite/Gestor/upoads/cases/10.jpg";
import Case11 from "/public/assets/dinamite/Gestor/upoads/cases/11.jpg";
import Case12 from "/public/assets/dinamite/Gestor/upoads/cases/12.jpg";
import Case2 from "/public/assets/dinamite/Gestor/upoads/cases/2.jpg";
import Case3 from "/public/assets/dinamite/Gestor/upoads/cases/3.jpg";
import Case4 from "/public/assets/dinamite/Gestor/upoads/cases/4.jpg";
import Case5 from "/public/assets/dinamite/Gestor/upoads/cases/5.jpg";
import Case6 from "/public/assets/dinamite/Gestor/upoads/cases/6.jpg";
import Case7 from "/public/assets/dinamite/Gestor/upoads/cases/7.jpg";
import Case8 from "/public/assets/dinamite/Gestor/upoads/cases/8.jpg";
import Case9 from "/public/assets/dinamite/Gestor/upoads/cases/9.jpg";
import Bg from "/public/img/parallax/bg.jpg";

import Seta from "../../../public/img/seta.png";

const Wrapper = styled.div`
  z-index: -3;
`;

const Demos = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
  }, [fixedHeader, MainContent]);
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
      addParlx();
      document.querySelector("body").style.backgroundColor = "#121214";
    }
  }, [pageLoaded]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [displayImage, setDisplayImage] = useState(true);

  useEffect(() => {
    setDisplayImage(false);
  }, []);

  return (
    <>
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign bg-img"
        data-overlay-dark="4"
      >
        <Wrapper>
          <Image
            layout="fill"
            blurDataURL
            objectFit="cover"
            quality={100}
            alt="water_portrait"
            src={Bg} //image saved in public/home
          />
        </Wrapper>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <Button
                    className="animate-fade-in translate-y-[-1rem] opacity-0"
                    href="https://wzap.me/121844149042"
                    variant="secondary"
                    size="small"
                  >
                    <span>Agência de estratégia digital</span>{" "}
                    <Highlight>→</Highlight>
                  </Button>
                  <h2
                    className="cta-5-title"
                    style={{ fontFamily: `Montserrat, sans-serif` }}
                  >
                    <font
                      className="klickart-font"
                      style={{ color: `#6E4BEC` }}
                    >
                      <b className="medium-b">O que a </b>
                      <font
                        className="klickart-font"
                        style={{ color: `rgb(255, 255, 255)` }}
                      >
                        <b className="medium-b">UP</b>
                      </font>
                      <b className="medium-b"> faz?</b>
                    </font>
                  </h2>
                  <h3>
                    <Typewriter
                      options={{
                        wrapperClassName: "color-font fw-900",
                        strings: [
                          "Desenvolvimento de marca",
                          "Comunicação digital",
                          "Grafica e impressos",
                          "Desenvolvimento de sites, landing page",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                      loop={true}
                      onInit={(typewriter) => {
                        typewriter;
                      }}
                    />
                  </h3>

                  <div>
                    <Button
                      className="animate-fade-in translate-y-[-1rem] opacity-0 [--animation-delay:600ms]"
                      href="/"
                      variant="primary"
                      size="large"
                    >
                      <span>WhatsApp </span>
                      <Highlight>
                        <ChevronIcon />
                      </Highlight>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content" ref={MainContent}>
        <section id="cases">
          <div className="conteudo-fluid">
            <header>
              <h1 className="leftShow">CASES</h1>
              <nav className="rightShow">
                <ul>
                  <li className="soft-hover filter" id="design">
                    DESIGN GRÁFICO
                  </li>
                  <li className="soft-hover filter" id="id">
                    IDENTIDADE VISUAL
                  </li>
                  <li className="soft-hover filter" id="website">
                    WEBSITE
                  </li>
                  <li className="soft-hover filter" id="capa">
                    CAPA CD/DVD
                  </li>
                  <li className="soft-hover filter" id="redes">
                    REDES SOCIAIS
                  </li>
                  <li className="soft-hover ativo ultimo filter" id="todos">
                    TODOS
                  </li>
                </ul>
                <br />
              </nav>

              <div className="select" id="slct-home">
                <select
                  name="slct"
                  // eslint-disable-next-line react/no-unknown-property
                  name1="categoria-case"
                  className="cs-select cs-skin-border"
                >
                  <option disabled="disabled" selected="selected">
                    SELECIONE UMA OPÇÃO
                  </option>
                  <option value="todos">TODOS</option>
                  <option value="design">DESIGN GRÁFICO</option>
                  <option value="id">IDENTIDADE VISUAL</option>
                  <option value="website">WEBSITE</option>
                  <option value="redes">REDES SOCIAIS</option>
                </select>
              </div>

              <br />
            </header>
          </div>

          <div id="container">
            <div className="case redes todos">
              <div className="case-ative">
                <Image
                  src={Case1}
                  alt="Picture of the author"
                  placeholder="blur"
                  width={653}
                  height={499}
                />
              </div>
              <div className="case-hover">
                <span className="categoria">REDES SOCIAIS</span>
                <h2>Comunidade Plagiados</h2>
                <hr />
                <Link
                  href="/portfolio/comunidade-plagiados-1-0"
                  className="soft-hover"
                >
                  Veja o Case displayImage && (
                  <div style={{ position: "relative", width: 17, height: 12 }}>
                    <Image priority src={Seta} alt="" sizes="100%" />
                  </div>
                  )
                </Link>
              </div>
            </div>

            <div className="case id todos">
              <div className="case-ative">
                <Image
                  src={Case2}
                  alt="Picture of the author"
                  placeholder="blur"
                  width={653}
                  height={499}
                />
              </div>
              <div className="case-hover">
                <span className="categoria">IDENTIDADE VISUAL</span>
                <h2>Rino Maromba</h2>
                <hr />
                <a href="/portfolio/rino-maromba" className="soft-hover">
                  Veja o Case displayImage && (
                  <div style={{ position: "relative", width: 17, height: 12 }}>
                    <Image priority src={Seta} alt="" sizes="100%" />
                  </div>
                  )
                </a>
              </div>
            </div>

            <div className="case design todos">
              <div className="case-ative">
                <Image
                  src={Case3}
                  alt="Picture of the author"
                  placeholder="blur"
                  width={653}
                  height={499}
                />
              </div>
              <div className="case-hover">
                <span className="categoria">DESIGN GRÁFICO</span>
                <h2>Marjore Fios</h2>
                <hr />
                <Link href="/portfolio/marjore-fios-2" className="soft-hover">
                  Veja o Case displayImage && (
                  <div style={{ position: "relative", width: 17, height: 12 }}>
                    <Image priority src={Seta} alt="" sizes="100%" />
                  </div>
                  )
                </Link>
              </div>
            </div>

            <div className="case id todos">
              <div className="case-ative">
                <Image
                  src={Case4}
                  alt="Picture of the author"
                  placeholder="blur"
                  width={653}
                  height={499}
                />
              </div>
              <div className="case-hover">
                <span className="categoria">IDENTIDADE VISUAL</span>
                <h2>Inventório</h2>
                <hr />
                <Link href="/portfolio/inventorio" className="soft-hover">
                  Veja o Case displayImage && (
                  <div style={{ position: "relative", width: 17, height: 12 }}>
                    <Image priority src={Seta} alt="" sizes="100%" />
                  </div>
                  )
                </Link>
              </div>
            </div>

            <div className="case id todos">
              <div className="case-ative">
                <Image
                  src={Case5}
                  alt="Picture of the author"
                  placeholder="blur"
                  width={653}
                  height={499}
                />
              </div>
              <div className="case-hover">
                <span className="categoria">IDENTIDADE VISUAL</span>
                <h2>MLHS</h2>
                <hr />
                <Link href="/portfolio/mlhs" className="soft-hover">
                  Veja o Case displayImage && (
                  <div style={{ position: "relative", width: 17, height: 12 }}>
                    <Image priority src={Seta} alt="" sizes="100%" />
                  </div>
                  )
                </Link>
              </div>
            </div>

            <div className="case id todos">
              <div className="case-ative">
                <Image
                  src={Case6}
                  alt="Picture of the author"
                  placeholder="blur"
                  width={653}
                  height={499}
                />
              </div>
              <div className="case-hover">
                <span className="categoria">IDENTIDADE VISUAL</span>
                <h2>Plagiados - Jornada da Identidade Visual Premium</h2>
                <hr />
                <Link
                  href="/portfolio/plagiados-jornada-da-identidade-visual-premium-0"
                  className="soft-hover"
                >
                  Veja o Case displayImage && (
                  <div style={{ position: "relative", width: 17, height: 12 }}>
                    <Image priority src={Seta} alt="" sizes="100%" />
                  </div>
                  )
                </Link>
              </div>
            </div>

            <div className="case id todos">
              <div className="case-ative">
                <Image
                  src={Case7}
                  alt="Picture of the author"
                  placeholder="blur"
                  width={653}
                  height={499}
                />
              </div>
              <div className="case-hover">
                <span className="categoria">IDENTIDADE VISUAL</span>
                <h2>ICC</h2>
                <hr />
                <Link href="/portfolio/icc-1-0" className="soft-hover">
                  Veja o Case displayImage && (
                  <div style={{ position: "relative", width: 17, height: 12 }}>
                    <Image priority src={Seta} alt="" sizes="100%" />
                  </div>
                  )
                </Link>
              </div>
            </div>

            <div className="case id todos">
              <div className="case-ative">
                <Image
                  src={Case8}
                  alt="Picture of the author"
                  placeholder="blur"
                  width={653}
                  height={499}
                />
              </div>
              <div className="case-hover">
                <span className="categoria">IDENTIDADE VISUAL</span>
                <h2>Global Center</h2>
                <hr />
                <Link href="/portfolio/global-center" className="soft-hover">
                  Veja o Case displayImage && (
                  <div style={{ position: "relative", width: 17, height: 12 }}>
                    <Image priority src={Seta} alt="" sizes="100%" />
                  </div>
                  )
                </Link>
              </div>
            </div>

            <div className="case id todos">
              <div className="case-ative">
                <Image
                  src={Case9}
                  alt="Picture of the author"
                  placeholder="blur"
                  width={653}
                  height={499}
                />
              </div>
              <div className="case-hover">
                <span className="categoria">IDENTIDADE VISUAL</span>
                <h2>Investir no Brasil</h2>
                <hr />
                <Link
                  href="/portfolio/investir-no-brasil"
                  className="soft-hover"
                >
                  Veja o Case displayImage && (
                  <div style={{ position: "relative", width: 17, height: 12 }}>
                    <Image priority src={Seta} alt="" sizes="100%" />
                  </div>
                  )
                </Link>
              </div>
            </div>

            <div className="case id todos">
              <div className="case-ative">
                <Image
                  src={Case10}
                  alt="Picture of the author"
                  placeholder="blur"
                  width={653}
                  height={499}
                />
              </div>
              <div className="case-hover">
                <span className="categoria">IDENTIDADE VISUAL</span>
                <h2>Fina Fibra</h2>
                <hr />
                <Link href="/portfolio/fina-fibra" className="soft-hover">
                  Veja o Case displayImage && (
                  <div style={{ position: "relative", width: 17, height: 12 }}>
                    <Image priority src={Seta} alt="" sizes="100%" />
                  </div>
                  )
                </Link>
              </div>
            </div>

            <div className="case id todos">
              <div className="case-ative">
                <Image
                  src={Case11}
                  alt="Picture of the author"
                  placeholder="blur"
                  width={653}
                  height={499}
                />
              </div>
              <div className="case-hover">
                <span className="categoria">IDENTIDADE VISUAL</span>
                <h2>Plagiados</h2>
                <hr />
                <Link href="/portfolio/plagiados-1-1-0" className="soft-hover">
                  Veja o Case displayImage && (
                  <div style={{ position: "relative", width: 17, height: 12 }}>
                    <Image priority src={Seta} alt="" sizes="100%" />
                  </div>
                  )
                </Link>
              </div>
            </div>

            <div className="case id todos">
              <div className="case-ative">
                <Image
                  src={Case12}
                  alt="Picture of the author"
                  placeholder="blur"
                  width={653}
                  height={499}
                />
              </div>
              <div className="case-hover">
                <span className="categoria">IDENTIDADE VISUAL</span>
                <h2>Prenda e peão</h2>
                <hr />
                <Link href="/portfolio/prenda-e-peao" className="soft-hover">
                  Veja o Case displayImage && (
                  <div style={{ position: "relative", width: 17, height: 12 }}>
                    <Image priority src={Seta} alt="" sizes="100%" />
                  </div>
                  )
                </Link>
              </div>
            </div>
            <br />
          </div>
          <br />
          <div className="conteudo-fluid">
            <Link href="/cases">
              <button id="ver-mais-home" className="soft-hover">
                MAIS PROJETOS
              </button>
            </Link>

            <div id="carregando">Carregando...</div>
            <div id="acabou">Nada a ser carregado.</div>
          </div>
          <br />
        </section>
      </div>
    </>
  );
};

export default Demos;
