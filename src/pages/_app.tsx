import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

//Components
import { Header } from "../components/Header";

//Context
import { CartProvider } from "../context/CartProvider";

//Styles
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
