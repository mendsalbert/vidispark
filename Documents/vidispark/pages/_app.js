import Head from "next/head";
import { useEffect, useContext } from "react";
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
  ApolloProvider,
} from "@apollo/client";
import { ComposeClient } from "@composedb/client";
import { Web3Provider } from "@ethersproject/providers";
import Web3Modal from "web3modal";
import { DIDSession } from "did-session";
import { EthereumWebAuth, getAccountId } from "@didtools/pkh-ethereum";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import definition from "../blog.runtime.json";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
// import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

import { AuthContext, AuthProvider } from "./authContext";

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

const networks = {
  theta: {
    chainId: `0x${Number(365).toString(16)}`,
    chainName: "Theta Testnet",
    nativeCurrency: {
      name: "Theta Testnet",
      symbol: "TFUEL",
      decimals: 18,
    },
    rpcUrls: ["https://eth-rpc-api-testnet.thetatoken.org/rpc"],
    blockExplorerUrls: ["https://testnet-explorer.thetatoken.org/"],
  },
};

const changeNetwork = async () => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks["theta"],
        },
      ],
    });
  } catch (err) {
    alert(err.message);
    // setError(err.message);
  }
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
  const { initDB } = useContext(AuthContext);

  console.log("user-----", initDB);
  useEffect(() => {
    countdown();
  }, []);

  const { address, isConnected } = useAccount();

  const compose = new ComposeClient({
    ceramic: "http://localhost:7007",
    definition,
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
  // const { setupWeaveDB } = authenticationContext;
  // Use ApolloLink instance in ApolloClient config
  const client = new ApolloClient({ cache: new InMemoryCache(), link });
  useEffect(async () => {
    changeNetwork();
    // setupWeaveDB();
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

      <AuthProvider>
        <ApolloProvider client={client}>
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains} theme={myTheme}>
              <Component {...pageProps} />
            </RainbowKitProvider>
          </WagmiConfig>
        </ApolloProvider>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
