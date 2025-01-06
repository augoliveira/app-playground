"use client";

import React from "react";

import { Container } from "#/styles/styles";
import Typewriter from "typewriter-effect";

import { Content, HomeText, Title } from "./styles";

function Home() {
  return (
    <Container>
      <Content>
        <HomeText>
          <Title>
            Agência de <code>Marketing</code>
          </Title>

          <h2>
            <blockquote>AUMENTE SUAS VENDAS E FATURAMENTO COM </blockquote>
          </h2>

          <h4>
            <span>TRÁFEGO P</span>

            <span>AG</span>

            <span>O</span>
          </h4>

          <h2>
            <Typewriter
              options={{
                wrapperClassName: "fw-900",
                strings: [
                  "Desenvolvimento de marca",
                  "Comunicação digital",
                  "Grafica e impressos",
                  "Desenvolvimento de sites, landing page",
                ],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter;
              }}
            />
          </h2>
        </HomeText>
      </Content>
    </Container>
  );
}
export default Home;
