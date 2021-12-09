import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation AddUser($user: userInput) {
    addUser(user: $user) {
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

export const ADD_NOTE = gql`
mutation AddNote($note: noteInput!) {
  addNote(note: $note) {
    notes {
    _id
    text
    subject
    }
  }
}
`;

export const ADD_PET = gql`
mutation addPet($pet: petInput!) {
  addPet(pet: $pet) {
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
}
`;

