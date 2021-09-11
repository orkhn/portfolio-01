import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Hero = styled.section`
  display: flex;
  width: 90%;
  margin: 8rem auto 0 auto;
  padding: 4rem 3rem;
  border-radius: 3rem;
  background: ${({ theme }) => theme.heroDesktop};
  box-shadow: ${({ theme }) => theme.heroShadow};

  .gradientColor {
    background: linear-gradient(
      271deg,
      #a0e9ff 30%,
      #a162e8 50%,
      #f093b0 70%,
      #edca85 94%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 56.25em) {
    flex-direction: column;
    justify-content: space-between;
    height: 70vh;
    padding: 4rem 1rem;
    background: ${({ theme }) => theme.heroMobile};
  }
`;

export const Description = styled(motion.div)`
  padding: 4rem;
  width: 50%;

  @media (max-width: 56.25em) {
    width: 100%;
    padding: 0;
    margin-top: 5rem;
  }
`;

export const Heading = styled(motion.h1)`
  font-size: clamp(4rem, 4.8vw, 10rem);
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 100%;
  color: ${({ theme }) => theme.title};

  @media (max-width: 56.25em) {
    text-align: center;
  }
`;

export const descriptionVariants = {
  hidden: { y: 70, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.6, ease: 'backOut' },
  },
};

export const Img = styled(motion.img)`
  width: 50%;

  @media (max-width: 56.25em) {
    width: 100%;
  }
`;
