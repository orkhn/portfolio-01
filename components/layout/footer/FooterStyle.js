import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  position: fixed;
  bottom: 5%;
  z-index: 2;
`;

export const ChatButton = styled.button`
  background: transparent;
  border-radius: 50%;
  border: 0;
  bottom: 3%;
  width: 5.5rem;
  height: 5.5rem;
  position: fixed;
  right: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 1;
  cursor: pointer;
  outline: none;

  ${({ chatBotState }) =>
    chatBotState === 'open' &&
    css`
      pointer-events: none;
      opacity: 0;
      transform: scale3d(0.5, 0.5, 0.5);
    `}

  @media (max-width:37.5em) {
    width: 3.5rem;
    height: 3.5rem;
    bottom: 2.5rem;
    right: 4.2rem;
    z-index: 5;

    path {
      fill: #f7f6f2;
    }
  }

  :hover {
    animation-name: buzz;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: 1;

    @keyframes buzz {
      10% {
        transform: translateX(3px) rotate(2deg);
      }
      20% {
        transform: translateX(-3px) rotate(-2deg);
      }
      30% {
        transform: translateX(3px) rotate(2deg);
      }
      40% {
        transform: translateX(-3px) rotate(-2deg);
      }
      50% {
        transform: translateX(2px) rotate(1deg);
      }
      60% {
        transform: translateX(-2px) rotate(-1deg);
      }
      70% {
        transform: translateX(2px) rotate(1deg);
      }
      80% {
        transform: translateX(-2px) rotate(-1deg);
      }
      90% {
        transform: translateX(1px) rotate(0);
      }
      100% {
        transform: translateX(-1px) rotate(0);
      }
    }
  }
`;
export const ChatBotIcon = ({ theme }) => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.8717 7.12416C40.9755 3.20261 35.8333 0.763282 30.3315 0.226705C24.8296 -0.309871 19.313 1.08994 14.7326 4.1848C10.1522 7.27966 6.79509 11.8756 5.24008 17.1803C3.68506 22.4851 4.02956 28.1661 6.2142 33.2441C6.44189 33.716 6.5166 34.2473 6.42791 34.7638L4.33831 44.8081C4.25781 45.1932 4.27425 45.5922 4.38615 45.9694C4.49806 46.3466 4.70193 46.69 4.97944 46.9689C5.20693 47.1947 5.47779 47.3722 5.7757 47.4905C6.07361 47.6089 6.3924 47.6657 6.71285 47.6575H7.18776L17.3508 45.6154C17.8673 45.5533 18.3911 45.627 18.8705 45.8291C23.9484 48.0137 29.6295 48.3582 34.9342 46.8032C40.2389 45.2482 44.8349 41.8911 47.9297 37.3107C51.0246 32.7303 52.4244 27.2137 51.8878 21.7118C51.3513 16.21 48.9119 11.0678 44.9904 7.17165L44.8717 7.12416ZM18.5855 26.2867C18.1159 26.2867 17.6568 26.1474 17.2663 25.8865C16.8758 25.6256 16.5715 25.2547 16.3917 24.8208C16.212 24.3869 16.165 23.9095 16.2566 23.4489C16.3482 22.9883 16.5744 22.5652 16.9065 22.2331C17.2386 21.901 17.6617 21.6748 18.1223 21.5832C18.5829 21.4916 19.0603 21.5386 19.4942 21.7183C19.9281 21.8981 20.299 22.2024 20.5599 22.5929C20.8208 22.9834 20.9601 23.4425 20.9601 23.9121C20.9601 24.5419 20.7099 25.1459 20.2646 25.5912C19.8193 26.0365 19.2153 26.2867 18.5855 26.2867V26.2867ZM28.0837 26.2867C27.614 26.2867 27.1549 26.1474 26.7645 25.8865C26.374 25.6256 26.0696 25.2547 25.8899 24.8208C25.7102 24.3869 25.6631 23.9095 25.7548 23.4489C25.8464 22.9883 26.0725 22.5652 26.4046 22.2331C26.7367 21.901 27.1598 21.6748 27.6204 21.5832C28.081 21.4916 28.5585 21.5386 28.9924 21.7183C29.4263 21.8981 29.7971 22.2024 30.058 22.5929C30.319 22.9834 30.4582 23.4425 30.4582 23.9121C30.4582 24.5419 30.208 25.1459 29.7627 25.5912C29.3174 26.0365 28.7134 26.2867 28.0837 26.2867ZM37.5818 26.2867C37.1122 26.2867 36.6531 26.1474 36.2626 25.8865C35.8721 25.6256 35.5678 25.2547 35.388 24.8208C35.2083 24.3869 35.1613 23.9095 35.2529 23.4489C35.3445 22.9883 35.5707 22.5652 35.9028 22.2331C36.2349 21.901 36.658 21.6748 37.1186 21.5832C37.5792 21.4916 38.0566 21.5386 38.4905 21.7183C38.9244 21.8981 39.2953 22.2024 39.5562 22.5929C39.8171 22.9834 39.9564 23.4425 39.9564 23.9121C39.9564 24.5419 39.7062 25.1459 39.2609 25.5912C38.8156 26.0365 38.2116 26.2867 37.5818 26.2867Z"
        fill={`${theme === 'light' ? '#0a192f' : '#64ffda'}`}
      />
    </svg>
  );
};
