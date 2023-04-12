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
    projectAuthor: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(title: String!, notes: String!, projectAuthor: String!): User
  }

  type Query {
    users: [User]
    user(username: String!): User
    projects(username: String!): User
    project(projectId: ID!): Project
  }
`;

module.exports = typeDefs;
