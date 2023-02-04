/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import Image from 'next/image'
import Link from 'next/link';
import { Container, TextContainer, InfosContainer, Identidade, Design } from './styles';
import Seta from '../../../public/img/seta.png'
import Case1 from '/public/assets/dinamite/Gestor/upoads/cases/1.jpg'
import Case2 from '/public/assets/dinamite/Gestor/upoads/cases/2.jpg'
import Case3 from '/public/assets/dinamite/Gestor/upoads/cases/3.jpg'
import Case4 from '/public/assets/dinamite/Gestor/upoads/cases/4.jpg'
import Case5 from '/public/assets/dinamite/Gestor/upoads/cases/5.jpg'
import Case6 from '/public/assets/dinamite/Gestor/upoads/cases/6.jpg'
import Case7 from '/public/assets/dinamite/Gestor/upoads/cases/7.jpg'
import Case8 from '/public/assets/dinamite/Gestor/upoads/cases/8.jpg'
import Case9 from '/public/assets/dinamite/Gestor/upoads/cases/9.jpg'
import Case10 from '/public/assets/dinamite/Gestor/upoads/cases/10.jpg'
import Case11 from '/public/assets/dinamite/Gestor/upoads/cases/11.jpg'
import Case12 from '/public/assets/dinamite/Gestor/upoads/cases/12.jpg'

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <TextContainer>
        <h2>SOMOS</h2>
        <h1>
          ESPE
          <br />
          CIALI
          <br />
          STA!
        </h1>
        <hr />
        <br />
        <h2>qualidade</h2>
      </TextContainer>
      <div>
        <InfosContainer>
          <Design data-aos="zoom-in">
            <h2>
              Design
              <br />
              Gráfico<span>.</span>
            </h2>
            <div className="servico-hover" id="design-hover">
              <p>
                Folder, flyer, cartão de <br />
                visita, pasta, papel timbrado,
                <br /> outdoor, painel, uniforme, <br />
                crachá, adesivo, revista, livro...
              </p>
            </div>
          </Design>
          <Identidade data-aos="zoom-in">
            <span className="purple">
              <h2>
                Identidade
                <br />
                Visual<span>.</span>
              </h2>
            </span>
            <div>
              <p>
                A identidade da sua empresa <br /> reflete a qualidade do
                <br />
                produto/serviço que você <br />
                oferece? Se a resposta for <br />
                não, nós podemos ajudar você.
              </p>
            </div>
          </Identidade>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
