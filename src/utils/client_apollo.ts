import { ApolloClient, InMemoryCache } from '@apollo/client';

const clientApollo = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

export default clientApollo;