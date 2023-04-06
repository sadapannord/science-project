const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    name: String
    email: String
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
  }
  type Query {
    user: User
  }
`;

module.exports = typeDefs;
