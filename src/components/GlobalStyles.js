import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  button {
    outline: none;
    border:none;
    box-shadow:none; 
    cursor: pointer;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    background-color: #ffffff;
    color: black;
  }
`;

export default globalStyles;
