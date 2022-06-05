import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import { client } from './graphql/client'
import RpgContext from './context/CharacterContext'

ReactDOM.render(
  <ApolloProvider client={client}>
    <RpgContext>
      <App />
    </RpgContext>
  </ApolloProvider>,
  document.querySelector('#root')
)
