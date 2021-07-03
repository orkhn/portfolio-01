import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ChatBot = styled.div`
  width: 35rem;
  height: 60rem;
  border-radius: 30px;
  background: var(--white-color);
  position: fixed;
  right: 5.5rem;
  bottom: 4.5rem;
  z-index: 10;
  box-shadow: var(--box-Shadow-2);
  pointer-events: none;
  opacity: 0;
  transform: translate3d(0, 3rem, 0);
  transition: all 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @media (max-width: 27.5em) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  ${({ chatBotState }) =>
    chatBotState === 'open' &&
    css`
      opacity: 1;
      transform: translateZ(0);
      pointer-events: auto;
    `}

  .agent,
  .user {
    padding: 0.7rem 1.2rem;
    max-width: 80%;
    line-height: 1.5;
    border-radius: 1rem;
    font-size: 1.8rem;
    margin-top: 1rem;
  }
  .mw-93 {
    max-width: 90%;
  }

  .agent {
    background: var(--white-color);
    color: #222;
    border: 1px solid #c5ced6;
    border-radius: 0 20rem 10rem 10rem;
    margin-right: auto;
    min-width: 90%;
    font-weight: bold;
    .mt-sm {
      margin-top: 1rem;
    }
    .link-btn {
      background: #fff6eb;
      color: #462905;
      border-radius: 2rem;
      padding: 1.2rem 0.5rem;
      border: 0;
      font-size: 1.5rem;
      display: inline-block;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      :hover {
        background: #ffebd2;
      }

      :active {
        background: #ffdfb8;
        outline: 0;
        transform: translateY(4px);
      }
      :focus {
        outline: 0;
      }
    }
  }
  .user {
    background: #222;
    color: #fff;
    margin-left: auto;
    border-radius: 10rem 20rem 0rem 20rem;
  }
`;

export const ChatHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #222;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 24%;
  border-radius: 25px 25px 0 0;
  z-index: 11;

  @media (max-width: 27.5em) {
    border-radius: 0;
  }

  .name {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 3px;
    margin-top: 1.2rem;
    color: #fff;
    display: block;
  }

  .close-btn {
    background: #222;
    border: 0;
    padding: 1rem 1.5rem;
    transition: all 0.2s ease-in-out;
    border-radius: 6px;
    display: grid;
    place-items: center;
    cursor: pointer;
    outline: none;
    position: absolute;
    top: 2rem;
    right: 2rem;

    :active,
    :hover {
      background: #363636;
    }
  }
`;

export const ChatContent = styled.div`
  height: 42rem;
  width: 100%;
  position: absolute;
  top: 16rem;
  padding: 0 1.6rem 4rem;
  overflow: auto;
  z-index: 10;

  @media (max-width: 27.5em) {
    height: 90%;
    top: 22rem;
  }
`;

export const ChatAnswer = styled(motion.div)`
  display: ${({ currentQuestion }) => (currentQuestion === 0 ? 'none' : 'flex')};
  pointer-events: ${({ currentQuestion }) => (currentQuestion === 0 ? 'none' : 'auto')};
  flex-direction: column;
`;

export const ChatQuestion = styled(motion.div)`
  margin-top: 1rem;
  text-align: end;
  .question-btn {
    background: #fff6eb;
    color: #462905;
    transition: all 0.2s ease-in-out;
    border-radius: 2rem;
    padding: 1.2rem 2rem;
    border: 0;
    font-size: 1.5rem;
    display: block;
    cursor: pointer;
    margin-top: 1rem;
    :first-child {
      display: ${({ currentQuestion }) => (currentQuestion === 1 ? 'none' : 'initial')};
    }
    :nth-child(2) {
      display: ${({ currentQuestion }) => (currentQuestion === 2 ? 'none' : 'initial')};
    }
    :nth-child(3) {
      display: ${({ currentQuestion }) => (currentQuestion === 3 ? 'none' : 'initial')};
    }
    :hover {
      background: #ffebd2;
    }
    :active {
      background: #ffdfb8;
      outline: 0;
      transform: translateY(4px);
    }
    :focus {
      outline: 0;
    }
  }
`;

export const TypingBubble = styled.div`
  background-color: #fff6eb;
  padding: 1.6rem 2.8rem;
  border-radius: 2rem;
  border-bottom-left-radius: 2px;
  margin-top: 1.2rem;
  width: 30%;
  .typing {
    align-items: center;
    display: flex;
    height: 1.7rem;
    .dot {
      animation: TypingAnimation 1s infinite ease-in-out;
      background-color: #ffdfb9;
      border-radius: 50%;
      height: 0.7rem;
      margin-right: 4px;
      vertical-align: middle;
      width: 0.7rem;
      display: inline-block;
      :nth-child(1) {
        animation-delay: 200ms;
      }
      :nth-child(2) {
        animation-delay: 300ms;
      }
      :nth-child(3) {
        animation-delay: 400ms;
      }
      :last-child {
        margin-right: 0;
      }
    }
  }
  @keyframes TypingAnimation {
    0% {
      transform: translateY(0px);
      background-color: #ffdfb9; // rgba(20,105,69,.7);
    }
    28% {
      transform: translateY(-7px);
      background-color: #ffc988; //rgba(20,105,69,.4);
    }
    44% {
      transform: translateY(0px);
      background-color: #feb254; //rgba(20,105,69,.2);
    }
  }
`;

export const CloseIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.41425 6.00025L11.7072 1.70725C12.0982 1.31625 12.0982 0.68425 11.7072 0.29325C11.3162 -0.09775 10.6843 -0.09775 10.2933 0.29325L6.00025 4.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L4.58625 6.00025L0.29325 10.2933C-0.09775 10.6843 -0.09775 11.3162 0.29325 11.7072C0.48825 11.9022 0.74425 12.0002 1.00025 12.0002C1.25625 12.0002 1.51225 11.9022 1.70725 11.7072L6.00025 7.41425L10.2933 11.7072C10.4883 11.9022 10.7442 12.0002 11.0002 12.0002C11.2562 12.0002 11.5122 11.9022 11.7072 11.7072C12.0982 11.3162 12.0982 10.6843 11.7072 10.2933L7.41425 6.00025Z"
        fill="white"
      ></path>
    </svg>
  );
};
