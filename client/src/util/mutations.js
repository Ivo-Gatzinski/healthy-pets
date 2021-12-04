import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation AddUser($password: String!, $username: String!) {
    addUser(password: $password, username: $username) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;
