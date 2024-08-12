import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #222;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  input, button {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
