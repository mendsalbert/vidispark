import Head from "next/head";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { countdown } from "../src/utils";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import merge from "lodash.merge";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";
import { ComposeClient } from "@composedb/client";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
// import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

const xdcApothem = {
  id: 51,
  name: "Apothem-Network (TestNet)",
  network: "XDC Apothem Network (TestNet)",
  nativeCurrency: {
    decimals: 18,
    name: "XDC-Network",
    symbol: "XDC",
  },
  rpcUrls: {
    default: {
      http: ["https://erpc.apothem.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Apothem Explorer",
      url: "https://explorer.apothem.network/",
    },
  },
  testnet: true,
};
const { provider, chains } = configureChains(
  [xdcApothem],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Sustain",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    countdown();
  }, []);

  const { address, isConnected } = useAccount();
  console.log(address);

  const compose = new ComposeClient({
    ceramic: "http://localhost:7007",
  });

  // Create custom ApolloLink using ComposeClient instance to execute operations
  const link = new ApolloLink((operation) => {
    return new Observable((observer) => {
      compose.execute(operation.query, operation.variables).then(
        (result) => {
          observer.next(result);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  });

  // Use ApolloLink instance in ApolloClient config
  const client = new ApolloClient({ cache: new InMemoryCache(), link });
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

      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={myTheme}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  );
}

export default MyApp;
