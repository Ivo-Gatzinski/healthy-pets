import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      _id
      username
      pets {
        _id
        firstName
        lastName
        breed
        species
        notes {
          _id
          text
          subject
          createdAt
        }
      }
      role
    }
  }
`;