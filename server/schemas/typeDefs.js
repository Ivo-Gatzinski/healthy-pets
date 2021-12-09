const { gql } = require("apollo-server-express");

const typeDefs = gql`
scalar Date

enum Role {
  OWNER
  VET
}

type User {
  _id: ID!
  username: String!
  pets: [Pet]
  role: Role
 }
 
 type Pet {
  _id: ID!
  firstName: String!
  lastName: String!
  breed: String!
  species: String!
  notes: [Note]
 }

 type Note {
  _id: ID!
  text: String!
  subject: String!
  createdAt: Date!
}

input userInput {
  username: String!
  password: String!
  role: Role!
}

input noteInput {
 text: String!
 subject: String!
 petId: ID!
}

input petInput {
 firstName: String!
 lastName: String!
 breed: String!
 species: String!
}

type Auth {
  token: ID!
  user: User
}


  type Query {
    me: User
    pet(petId: ID!): Pet
  }

  type Mutation {
    addUser(user: userInput): Auth
    login(username: String!, password: String!): Auth
    addNote(note: noteInput!): Pet
    addPet(pet: petInput!): Pet
  }
`;

module.exports = typeDefs;
