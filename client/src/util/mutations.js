import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation AddUser($password: String!, $username: String!) {
    addUser(password: $password, username: $username) {
      user {
        username
        password
        role
      }
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

export const ADD_NOTE = gql`
mutation AddNote($note: noteInput) {
  addNote(note: $note) {
    notes {
    text
    subject
    }
  }
}
`;

export const ADD_PET = gql`
mutation AddPet($pet: petInput) {
  addPet(pet: $pet) {
    pets {
    firstName
    lastName
    breed
    species
    }
  }
}
`;