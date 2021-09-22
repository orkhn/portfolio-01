import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

/*===== VARIABLES CSS =====*/
:root {
  

  /*========== Colors ==========*/
  --primary-color: #f1eee9;
  --primary-color-forDark: #0A192F;
  --secondary-color: #0A192F;
  --secondary-color-forDark: #64ffda;
  --hero-background-Desktop: linear-gradient(to right, #8bd5dc, #eca787);
  --hero-background-Desktop-forDark: linear-gradient(to bottom, #8bd5dc, #eca787);
  --title-color: #232320;
  --title-color-forDark: #ccd6f6;
  --selection-background-color:#fff;
  --selection-text-color:#0077b6;
  --white-color: #ffffff;
  --orange-color: #f36d18;

 

  /*========== Font and typography ==========*/
  --body-font: 'DejaVuSansMono', Arial, sans-serif;
  --heading-font:'Bogart', Arial, sans-serif;

  /*========== Box Shadows ==========*/
  --box-Shadow-1: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  --box-Shadow-2:  0 0 0 1px rgba(0, 0, 0, 0.05), 0 5px 30px 0 rgba(0, 0, 0, 0.15),
    0 3px 3px 0 rgba(0, 0, 0, 0.05);
  --box-Shadow-3: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

  *,
  *::before,
  *::after {
    margin:0;
    padding:0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    height:100%;
    width:100%;
  
  }

  body {
    background: ${({ theme }) => theme.primary};
    font-family: var(--body-font);
    transition: all .5s linear;
    height:100%;
    width:100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--heading-font);
    font-weight: 900;
  }

  ul {
    list-style: none;
  }

  ::selection {
    background: var(--selection-background-color);
    color: var(--selection-text-color);
  }

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
`;
