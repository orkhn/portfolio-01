import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GridContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 32rem;
  gap: 2rem;

  @media (max-width: 80em) {
    width: 100%;
    grid-auto-rows: 45rem;
  }

  @media (max-width: 75em) {
    grid-auto-rows: 22rem 48rem 30rem;
  }

  @media (max-width: 56.25em) {
    grid-auto-rows: 15rem 43rem 30rem 30rem;
  }

  @media (max-width: 37.5em) {
    grid-auto-rows: 10rem 43rem 23rem 30rem;
    gap: 1.5rem;
  }
`;

const Card = styled(motion.div)`
  border-radius: 2.5rem;
  background: #0c3139;
  color: #72e5ce;
  word-spacing: -0.3rem;
  box-shadow: var(--box-Shadow-3);

  @media (max-width: 37.5em) {
    border-radius: 1.8rem;
  }
`;

export const TitleCard = styled(Card)`
  grid-column: 1/5;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 10rem;
  }

  span {
    font-size: clamp(2rem, 4.8vw, 8rem);
  }

  @media (max-width: 75em) {
    grid-column: 5/9;

    img {
      width: 7rem;
    }
  }

  @media (max-width: 37.5em) {
    grid-column: 5/9;

    img {
      width: 4.5rem;
      padding-top: 0.6rem;
    }

    span {
      font-size: 2.4rem;
    }
  }
`;

export const DemonstrationCard = styled(Card)`
  grid-column: 5/13;
  position: relative;

  @media (max-width: 75em) {
    grid-row: 2/3;
    grid-column: 1/13;
  }
`;

export const TechnologiesCard = styled(Card)`
  grid-column: 7/13;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    font-size: clamp(2rem, 4.8vw, 4rem);
  }

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    gap: 3rem;

    li {
      span {
        display: block;
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 75em) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 56.25em) {
    grid-column: 1/13;
  }

  @media (max-width: 56.25em) {
    h2 {
      font-size: 2.5rem;
    }

    img {
      width: 5rem;
    }

    ul {
      gap: 1rem;
    }
  }
`;

export const InfoCard = styled(Card)`
  grid-column: 1/7;
  padding: 1.8rem;

  p {
    font-size: 2.6rem;
  }

  @media (max-width: 80em) {
    display: flex;
    align-items: center;
  }

  @media (max-width: 75em) {
    p {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 56.25em) {
    grid-column: 1/13;
  }

  @media (max-width: 37.5em) {
    p {
      font-size: 1.9rem;
    }
  }
`;

export const Links = styled.div`
  position: absolute;
  width: 15%;
  bottom: 2rem;
  right: 2rem;

  ul {
    display: flex;
    justify-content: space-evenly;
  }
  img {
    width: 3rem;
  }

  @media (max-width: 37.5em) {
    width: 30%;
  }
`;
