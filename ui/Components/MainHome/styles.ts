"use client";

import styled from "styled-components";

export const Wrapper = styled.main`
  height: 100%;

  color: #fff;

  width: auto;

  height: 100%;

  text-align: center;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  color: #fff;

  z-index: 1;

  @media (max-width: 970px) {
    width: 100%;

    margin: 0 auto;
  }
`;

export const Logo = styled.div`
  margin-bottom: 2rem;

  svg {
    width: 200px;

    fill: white;
  }

  color: white;
`;

export const Title = styled.h1`
  font-size: 2.5rem;

  @media (max-width: 970px) {
    width: 100%;

    font-size: 1.5rem;

    margin-bottom: 1rem;
  }
`;

export const Description = styled.h2`
  background: linear-gradient(
    167.95deg,
    rgba(255, 255, 255, 0.4) 0%,

    rgba(255, 255, 255, 0) 100%
  );

  backdrop-filter: blur(20px);

  box-shadow: inset 10px 10px 20px rgba(255, 255, 255, 0.2);

  border-radius: 30px;

  font-family: "Montserrat";

  display: inline-block;

  zoom: 1;

  vertical-align: top;

  padding: 0 45px;

  margin: 0 auto;

  font-size: 50px;

  font-weight: 900;

  color: #ff8600;

  box-shadow: inset 10px 10px 20px rgba(255, 255, 255, 0.2);

  position: relative;

  z-index: 1;

  @media (max-width: 970px) {
    width: 100%;

    font-size: 2rem;
  }

  @media (max-width: 375px) {
    font-size: 2.8rem;
  }
`;
