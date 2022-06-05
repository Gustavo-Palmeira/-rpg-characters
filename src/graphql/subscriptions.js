import { gql } from '@apollo/client'

export const LIST_CHARACTERS = gql`
  subscription ListCharacters {
    character(order_by: { created_at: desc }) {
      id
      description
      image
      name
      phrase
      class
      background
    }
  }
`
