'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';
import { Container } from '#/styles/styles';
import { Content, HomeText } from './styles';

export function HomeHero() {
  return (
    <Container>
      <Content>
        <HomeText>
          <h1>
            Publicidade <code>efetiva</code>
          </h1>

          <h2 className="cta-5-title">
            <Typewriter
              options={{
                wrapperClassName: 'color-font fw-600',
                strings: [
                  'Marca',
                  'Campanha',
                  'Impressos',
                  'Sites e aplicativos',
                ],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter;
              }}
            />
          </h2>
          <span>
            SOLUÇÕES COMPLETAS PARA CONQUISTAR A PREFERÊNCIA DO SEU CLIENTE
          </span>
        </HomeText>
      </Content>
    </Container>
  );
}
