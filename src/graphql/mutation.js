import { gql } from '@apollo/client'

export const ADD_CHARACTER = gql`
  mutation MyMutation(
    $background: String!
    $class: String!
    $description: String!
    $image: String!
    $name: String!
    $phrase: String!
  ) {
    insert_character(
      objects: {
        background: $background
        class: $class
        description: $description
        image: $image
        name: $name
        phrase: $phrase
      }
    ) {
      returning {
        id
      }
    }
  }
`
