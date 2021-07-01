import styled from 'styled-components';

export const ScrollBtn = styled.span`
  position: absolute;
  left: 50%;
  bottom: 5rem;
  animation: fadeInUp 1.2s ease infinite;
  cursor: pointer;

  ::before {
    color: ${({ theme }) => theme.secondary};
    content: '«';
    font-size: 6rem;
    height: 4rem;
    width: 6rem;
    letter-spacing: -1px;
    line-height: 4rem;
    margin-left: -3rem;
    opacity: 0.8;
    text-align: center;
    display: inline-block;
    transform: rotate(270deg);

    @media (max-width: 37.5em) {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(4rem);
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
