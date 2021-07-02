import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 8rem auto 0 auto;
  padding: 2rem 3rem;
  border-radius: 2rem;
  background: ${({ theme }) => theme.heroDesktop};
  box-shadow: ${({ theme }) => theme.heroShadow};

  @media (max-width: 56.25em) {
    flex-direction: column;
    justify-content: space-between;
    height: 70vh;
    padding: 4rem 1rem;
    background: ${({ theme }) => theme.heroMobile};
  }
`;

export const Description = styled(motion.div)`
  width: 50%;

  @media (max-width: 56.25em) {
    width: 100%;
  }
`;

export const Heading = styled(motion.h1)`
  text-transform: uppercase;
  text-align: start;
  font-size: clamp(4rem, 4.8vw, 7rem);
  color: ${({ theme }) => theme.title};

  @media (max-width: 56.25em) {
    text-align: center;
  }
`;

export const descriptionVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

export const Img = styled(motion.img)`
  width: 50%;

  @media (max-width: 56.25em) {
    width: 100%;
  }
`;
