/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-sync-scripts */
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";

import { useEffect } from "react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js" />
      </Head>
      <Component {...pageProps} />;
    </>
  )
}

export default MyApp;
