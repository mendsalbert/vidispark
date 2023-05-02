import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon02.png"
        />

        <title>Digital Store</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
