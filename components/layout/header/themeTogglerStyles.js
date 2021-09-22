import styled from 'styled-components';

export const ThemeToggler = styled.div`
  .switch {
    display: inline-block;
    position: relative;
    height: 3rem;
    width: 8rem;
    border-radius: 10em;
    transition: all 500ms ease-in-out;
    background: var(--title-color);

    @media (max-width: 37.5em) {
      height: 3rem;
      width: 6.5rem;
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

      &:before {
        position: absolute;
        content: '';
        height: 2rem;
        width: 2rem;
        left: 1rem;
        bottom: 0.5rem;
        background-color: var(--white-color);
        border-radius: 50%;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        @media (max-width: 37.5em) {
          left: 0.7rem;
        }
      }
      &:after {
        content: '\u263E';
        position: absolute;
        font-size: 2.5rem;
        height: 2.5rem;
        width: 2.2rem;
        right: 0.8rem;
        bottom: 0.8rem;

        color: var(--white-color);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        @media (max-width: 37.5em) {
          font-size: 2.5rem;
          right: 0.3rem;
          bottom: 0.8rem;
        }
      }
    }

    & input:checked + .slider:before {
      transform: translateX(3.8rem);

      @media (max-width: 37.5em) {
        transform: translateX(3.2rem);
      }
    }
    & input:checked + .slider:after {
      content: '☀';
      transform: translateX(-4.1rem);
      font-size: 2.7rem;
      bottom: 0.8rem;

      @media (max-width: 37.5em) {
        transform: translateX(-3.4rem);
        font-size: 2.3rem;
        bottom: 0.5rem;
      }
    }
    & input:checked + .slider {
      background: var(--orange-color);
      border-radius: 10em;
    }
  }
`;
