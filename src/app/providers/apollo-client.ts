import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';

import { getStoredToken } from '@/entities/session';

const token = getStoredToken();

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_API_URL,
  headers: { authorization: token ? `Bearer ${token}` : '' },
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
