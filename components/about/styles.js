import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled.section`
  width: 100%;
  margin-top: 14rem;
  animation: fadeInUp 0.7s ease-in-out;

  @media (max-width: 56.25em) {
    height: 60vh;
    width: 80%;
  }
`;

export const Intro = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(240px, 1fr));
  height: 100vh;
`;

export const Passion = styled(Intro)`
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    margin-left: 3rem;
  }

  h3 {
    margin-top: 0.7rem;
    margin-bottom: -1rem;
    text-align: center;
    font-size: 2.4rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.secondary};
  }

  img {
    width: 50rem;
  }
`;

export const Skills = styled(Intro)`
  h2 {
    margin-bottom: 8rem;
  }
  img {
    width: 50rem;
  }

  .skill-area {
    display: flex;
    flex-direction: column;
  }

  [class^='block-'] {
    display: flex;
    flex-direction: row;
    gap: 2;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3%;
  height: 17rem;
  padding: 1rem 1rem 2rem 1rem;
  flex-grow: 1; // 1+1+1 =3 => 1/3 X 100% => 33.33% each

  flex-basis: (100%)/3; // 33.33% each
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 10px;
  background-color: #fff;
  margin: 0.5rem;

  .heading {
    display: flex;
    align-items: start;
    justify-content: flex-start;
    width: 100%;
    height: 30%;

    img {
      padding-right: 0;
      width: 4rem;
      height: 4rem;
    }
  }
  .circle {
    height: 65%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h2`
  text-align: center;
  word-spacing: 0.4rem;
  font-size: 3.4rem;
  margin-top: 0.8rem;
  padding-right: 16rem;
  color: ${({ theme }) => theme.secondary};
  text-transform: uppercase;

  &.titleNoAligned {
    text-align: start;
  }
`;

export const Img = styled(motion.div)``;

export const Indicator = styled(motion.div)`
  position: relative;

  span {
    color: #ff4d5a;
    font-size: 3.4rem;
    padding-left: 6.2rem;

    ::before {
      content: '';
      width: 4.8rem;
      height: 2px;
      background: ${({ theme }) => theme.secondary};
      position: absolute;
      top: 2rem;
      left: 0;
    }
  }
`;

export const Illustration = styled(motion.div)`
  grid-column: 2 / span 2;
`;

export const Content = styled.div`
  grid-column: 4 / span 2;
  padding-left: 3rem;

  p {
    font-size: 1.4rem;
    padding: 2rem 0;
    text-align: justify;
    word-spacing: -0.3rem;

    color: ${({ theme }) => theme.secondary};
  }
`;

export const Connection = styled(motion.div)`
  .buttons {
    display: flex;
    gap: 2rem;
  }
`;

export const Button = styled(motion.div)`
  display: flex;
  color: ${({ theme }) => theme.secondary};

  &:nth-child(1) {
    margin-left: auto;
  }

  svg {
    width: 2rem;
    margin-right: 0.7rem;
  }

  a {
    background: ${({ theme }) => theme.aboutResume};
    color: currentColor;
    transition: all 0.2s ease-in-out;
    padding: 1rem 1.8rem;
    /* border-bottom: 1px solid ${({ theme }) => theme.secondary}; */
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    position: relative;

    background: linear-gradient(currentColor 0 0) 0 100%,
      linear-gradient(currentColor 0 0) 0 100%,
      linear-gradient(currentColor 0 0) 100% 100%,
      linear-gradient(currentColor 0 0) 100% 100%;
    background-size: var(--p, 50%) 2px, 2px var(--d, 0);
    background-repeat: no-repeat;
    transition: 0.5s;

    :hover {
      --d: 100%;
      --p: 0%;
    }
  }
`;

export const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      role="img"
    >
      <path
        fill="currentColor"
        d="M8.75 17.612v4.638a.751.751 0 001.354.444l2.713-3.692zM23.685.139a.75.75 0 00-.782-.054l-22.5 11.75a.752.752 0 00.104 1.375l6.255 2.138 13.321-11.39L9.775 16.377l10.483 3.583a.753.753 0 00.984-.599l2.75-18.5a.751.751 0 00-.307-.722z"
      />
    </svg>
  );
};
export const ResumeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-23 0 512 512.001">
      <path
        fill="currentColor"
        d="M348.945 221.64v-96.894c0-2.773-1.28-5.336-3.093-7.363L237.219 3.309C235.19 1.176 232.309 0 229.429 0H57.196C25.398 0 0 25.93 0 57.73v325.684c0 31.8 25.398 57.305 57.195 57.305h135.953C218.863 483.402 265.605 512 318.852 512c80.886 0 146.941-65.734 146.941-146.727.11-70.75-50.688-129.867-116.848-143.632zM240.102 37.458l72.882 76.723h-47.273c-14.086 0-25.61-11.63-25.61-25.715zM57.195 419.375c-19.953 0-35.851-16.008-35.851-35.96V57.73c0-20.062 15.898-36.386 35.851-36.386h161.563v67.12c0 25.93 21.023 47.06 46.953 47.06h61.89v83.34c-3.199-.106-5.761-.427-8.535-.427-37.242 0-71.496 14.301-97.32 36.711H86.223c-5.871 0-10.672 4.801-10.672 10.668 0 5.872 4.8 10.672 10.672 10.672h115.675c-7.578 10.672-13.875 21.344-18.78 33.082H86.222c-5.871 0-10.672 4.801-10.672 10.672 0 5.867 4.8 10.672 10.672 10.672h89.957c-2.668 10.672-4.055 22.516-4.055 34.36 0 19.206 3.734 38.203 10.457 54.21H57.195zm261.766 71.39c-69.149 0-125.387-56.238-125.387-125.386 0-69.149 56.13-125.387 125.387-125.387 69.254 0 125.383 56.238 125.383 125.387 0 69.148-56.235 125.387-125.383 125.387zm0 0"
      />
      <path
        fill="currentColor"
        d="M86.223 223.027H194.32c5.871 0 10.672-4.804 10.672-10.672 0-5.87-4.8-10.671-10.672-10.671H86.223c-5.871 0-10.672 4.8-10.672 10.671 0 5.868 4.8 10.672 10.672 10.672zm0 0M373.594 363.137l-43.856 47.273V293.883c0-5.871-4.804-10.672-10.672-10.672-5.87 0-10.671 4.8-10.671 10.672V410.41l-44.18-47.273c-4.055-4.266-10.883-4.586-15.152-.532-4.27 4.055-4.59 10.778-.532 15.047l62.426 67.121c2.027 2.133 4.8 3.414 7.79 3.414 2.987 0 5.76-1.28 7.788-3.414l62.535-67.12c4.055-4.27 3.84-11.098-.43-15.048-4.374-4.054-10.988-3.734-15.046.532zm0 0"
      />
    </svg>
  );
};