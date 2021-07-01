import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const Hero = styled.section`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 3rem;
  z-index: 1;
  position: absolute;
  top: 25%;
  left: 5%;
  transform: translateY(-25%);
  background: ${({ theme }) => theme.heroBackground};
  border-radius: 2.2rem;
  display: flex;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: 37.5em) {
    height: 70%;
    margin: 2rem 0;
    padding: 4rem 1rem;
    flex-direction: column;
    justify-content: space-between;
    background: ${({ theme }) => theme.heroBackground2};
  }

  @media (min-width: 37.51em) and (max-width: 56.25em) {
    display: block;
    margin-top: -1rem;
  }

  @media (min-width: 56.26em) and (max-width: 75em) {
    margin-top: -7rem;
  }

  @media (min-width: 75.01em) and (max-width: 112.5em) {
    margin-top: -5rem;
  }
`;

export const Description = styled(motion.div)`
  width: 50%;
  h1 {
    font-size: clamp(4rem, 4.8vw, 9rem);
    line-height: 1.1;
    color: ${({ theme }) => theme.title};
    text-align: start;
  }

  @media (max-width: 56.25em) {
    flex-grow: 1;
  }

  @media (max-width: 37.5em) {
    width: 100%;

    h1 {
      text-align: center;
    }
  }
`;

export const movingParagraph = styled.div`
  font-size: clamp(1.6rem, 0.7156rem + 1.4218vw, 2.5rem);
  color: ${({ theme }) => theme.grey};
  margin-right: 7.3rem;
  line-height: 1;
  text-align: end;

  @media (max-width: 37.5em) {
    margin: 0 1rem 0 0;
  }

  div {
    overflow: hidden;
    position: relative;
    height: 40px;
    width: 100%;

    @media (min-width: 37.51em) and (max-width: 56.25em) {
      width: 35rem;
      height: 43px;
    }

    li {
      margin-bottom: 57px;
      text-align: start;
      padding-left: 0.3rem;

      @media (max-width: 37.5em) {
        text-align: center;
        padding: 0.6rem 0;
        width: 100%;
      }

      @media (min-width: 37.51em) and (max-width: 56.25em) {
        padding: 0.6rem 0;
      }

      @media (min-width: 56.15em) and (max-width: 75em) {
        padding: 0.4rem 0;
      }
      @media (min-width: 75em) and (max-width: 112.5em) {
        padding: 0.2rem 0;
      }
    }
  }

  .flip {
    animation: flip 7s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
  }

  @keyframes flip {
    0% {
      margin-top: -180px;
    }
    5% {
      margin-top: -90px;
    }
    50% {
      margin-top: -90px;
    }
    55% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }
`;

export const descriptionVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

export const Img = styled.img`
  width: 50%;
  height: auto;

  @media (max-width: 56.25em) {
    width: 100%;
  }
`;
