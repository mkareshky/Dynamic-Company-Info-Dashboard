import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  html, body {
    width: 100%;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }

  * {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    h2, h3 {
      font-size: 1.5em;
    }
    p {
      font-size: 0.9em;
    }
  }
`;


export default GlobalStyles;
