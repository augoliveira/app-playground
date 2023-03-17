'use client';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: 0;
  border-top: 4px solid var(--border-second-color);
  padding: 1.3rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  .links {
    cursor: pointer;
    display: flex;
    gap: 8px;
    font-size: 1.3rem;

    a {
      &:hover {
        color: var(--first-color);
      }
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--light-slate);
    line-height: 1.1;
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--first-color);
    }

    &.inline-link {
      color: var(--first-color);
    }
  }
`;
