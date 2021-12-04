import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      _id
      username
      pets {
        firstName
        lastName
        breed
        species
        notes {
          text
          subjecxt
          createdAt
        }
      }
      role
    }
  }
`;
