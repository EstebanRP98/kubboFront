// src/lib/apollo-client.js
'use client'

import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Cambia si usas hosting
  cache: new InMemoryCache(),
})

export default client
