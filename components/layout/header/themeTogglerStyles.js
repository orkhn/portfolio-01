import styled from 'styled-components';

export const ThemeToggler = styled.div`
  .switch {
    display: inline-block;
    position: relative;
    height: 2.8rem;
    width: 6.8rem;
    border-radius: 10em;
    transition: all 500ms ease-in-out;
    background: var(--title-color);

    @media (max-width: 37.5em) {
      height: 2.5rem;
      width: 6rem;
    }

    & input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: 0.3s;

      &:before {
        position: absolute;
        content: '';
        height: 2rem;
        width: 2rem;
        left: 0.8rem;
        bottom: 0.4rem;
        background-color: var(--white-color);
        border-radius: 50%;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        @media (max-width: 37.5em) {
          left: 0.7rem;
          bottom: 0.27rem;
        }
      }
      &:after {
        content: '\u263E';
        position: absolute;
        font-size: 2.5rem;
        height: 2.5rem;
        width: 2.2rem;
        right: 0.5rem;
        bottom: 0.6rem;

        color: var(--white-color);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        @media (max-width: 37.5em) {
          font-size: 2.4rem;
          right: 0.2rem;
          top: -0.4rem;
        }
      }
    }

    & input:checked + .slider:before {
      transform: translateX(3.2rem);

      @media (max-width: 37.5em) {
        transform: translateX(2.6rem);
      }
    }
    & input:checked + .slider:after {
      content: '☀';
      transform: translateX(-3.5rem);
      font-size: 2.4rem;
      bottom: 0.5rem;

      @media (max-width: 37.5em) {
        transform: translateX(-3.3rem);
        font-size: 2.3rem;
        top: -0.5rem;
      }
    }
    & input:checked + .slider {
      background: var(--orange-color);
      border-radius: 10em;
    }
  }
`;
