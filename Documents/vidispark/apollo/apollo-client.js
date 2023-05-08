import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:7007",
  cache: new InMemoryCache(),
});

console.log("client", client);
export default client;
