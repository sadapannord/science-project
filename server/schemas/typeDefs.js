const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    projects: [Project]!
  }
  
  type Project {
    _id: ID
    title: String
    notes: String
    searchHistory:[SearchHistory]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(title: String!, notes: String!): User
    addSearchHistory()
  }
  
  type Query {
    user: User
    projects:[Project]
  }
`;

module.exports = typeDefs;
