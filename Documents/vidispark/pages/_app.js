import Head from "next/head";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { countdown } from "../src/utils";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    countdown();
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon01.png"
        />

        <title>NFT</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
