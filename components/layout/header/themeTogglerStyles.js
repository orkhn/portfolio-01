import styled from 'styled-components';

export const ThemeToggler = styled.div`
  .switch {
    display: inline-block;
    position: relative;
    height: 3.5rem;
    width: 8rem;
    border-radius: 10em;
    transition: all 500ms ease-in-out;
    background: var(--title-color);

    @media (max-width: 37.5em) {
      height: 3rem;
      width: 6.8rem;
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
        height: 2.7rem;
        width: 2.7rem;
        left: 0.6rem;
        bottom: 0.4rem;
        background-color: var(--white-color);
        border-radius: 50%;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        @media (max-width: 37.5em) {
          height: 2.1rem;
          width: 2.1rem;
          left: 0.7rem;
          bottom: 0.4rem;
        }
      }
      &:after {
        content: '\u263E';
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        font-size: 3.2rem;
        height: 2.8rem;
        width: 2.8rem;
        right: 0.5rem;
        bottom: 0.2rem;
        color: var(--white-color);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        @media (max-width: 37.5em) {
          font-size: 2.4rem;
          right: 0.5rem;
          top: 0.2rem;
        }
      }
    }

    & input:checked + .slider:before {
      transform: translateX(3.8rem);

      @media (max-width: 37.5em) {
        transform: translateX(3.3rem);
      }
    }
    & input:checked + .slider:after {
      content: '☀';
      transform: translateX(-4.1rem);
      font-size: 3.4rem;
      bottom: 0.2rem;

      @media (max-width: 37.5em) {
        transform: translateX(-3.2rem);
        font-size: 2.3rem;
        top: 0.2rem;
      }
    }
    & input:checked + .slider {
      background: var(--orange-color);
      border-radius: 10em;
    }
  }
`;
