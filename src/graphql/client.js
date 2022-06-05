import { ApolloClient, InMemoryCache } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'

export const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss://prompt-finch-85.hasura.app/v1/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          'x-hasura-admin-secret':
            '4NKuF5yuVKMf8O7WUABGluWw4ivxrO0lsalxbuawIMapZYc47eAiCjhEGIPjCYyZ',
        },
      },
    },
  }),
  cache: new InMemoryCache(),
})
