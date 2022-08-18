import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/hasselalcala/intro-to-the-graph",
  cache: new InMemoryCache(),
});

export default client;