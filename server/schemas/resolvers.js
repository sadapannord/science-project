const { User } = require("../models");

const resolvers = {
  Query: {
    user: async (_, { username }) => {
      return await User.findOne(username);
    },
  },
  Mutation: {
    // changeUser: async (parent, args) => {},
    addUser: async (parent, args) => {},
  },
};

module.exports = resolvers;
