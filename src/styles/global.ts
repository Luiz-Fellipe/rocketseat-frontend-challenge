import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  };

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background}
  }


  body, input, textarea, button {
    font-family: 'Saira', sans-serif;
    font-weight: 400;
  }
`;
