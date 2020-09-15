import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const link = createHttpLink({
  uri: "http://192.168.1.22:4000/graphql",
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export * from "./graphql-generated";
