import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri:'/graphql', //uri:${process.env.REACT_APP_APOLLO_URI/graphql}
  cache: new InMemoryCache(),
});