import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin:0;
    padding:0;
    box-sizing:inherit;
  }

  html {
    font-size:62.5%;
    box-sizing: border-box;
    scroll-behavior:smooth;

    @media only screen and (min-width: 112.5em) {
    font-size: 82.5%;
    } 
  }

  body {
    background-color: ${({ theme }) => theme.primary};
    font-family: 'DejaVuSansMono' ,Helvetica, Arial, sans-serif;;
    transition: all .5s linear;
  }

  img {
  width: 100%;
  display: block;
  object-fit: cover;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Cormorant', Helvetica, Arial, sans-serif;
    font-weight: 500;
  }

  a,
  button,
  h6,
  input,
  li,
  p {
    font-family: 'DejaVuSansMono', Helvetica, Arial, sans-serif;
  }

  ul {
    list-style: none;
  }

  ::selection {
    background: #f1faee;
    color: #0077b6;
  }
`;
