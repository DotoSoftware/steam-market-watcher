import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colorModeConfig } from "../utils/color-mode-utils";
import type { AppProps } from "next/app";
import { customTheme } from "../themes/theme";
import FontFace from "../themes/fontFace";
import Head from "next/head";

const theme = extendTheme({
  config: colorModeConfig,
  ...customTheme,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/ico" sizes="96x96" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
        <meta name="theme-color" content="#319795" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <FontFace />
    </>
  );
}

export default MyApp;
