import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

//Components
import { Header } from "../components/Header";

//Styles
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
