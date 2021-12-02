const { gql } = require("apollo-server-express");

const typeDefs = gql`
enum Role {
  OWNER
  VET
}

type User {
  _id: ID
  username: String!
  password: String!
  pets: [Pet]
  notes: [Note]
  role: Role
 }
 
 type Pet {
  _id: ID
  firstName: String!
  lastName: String!
  breed: String!
  species: String!
 }

 type Note {
  _id: ID
  text: String!
  subject: String!
  createdAt: Date
}

input noteInput {
 text: String!
 subject: String!
 petId: ID!
}

input petInput {
 firstName:
 lastName:
 breed:
 species:
}

type Auth {
  token: ID!
  user: User
}


  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addNote(note:[noteInput]): Pet
    addPet(pet: [petInput]): User
  }
`;

module.exports = typeDefs;
