import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --light-gray: #F0F0F0;
    --dark-gray: #A4A4A4;
    --black: #000;
    --green: #4fff4d;
    --red: #ff5252;
  }

  // * {
  //   margin: 0;
  //   padding: 0;
  //   box-sizing: border-box;
  // }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #f0f2f5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    outline: 'none';
  }

  [disabled] {
    cursor: not-allowed;
  }
`;
