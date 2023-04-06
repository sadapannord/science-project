const  User = require("../models/User");

const resolvers = {
  Query: {
    user: async () => {
      return await User.find({});

    },
  },
  Mutation: {
    // changeUser: async (parent, args) => {},
    addUser: async (parent, args) => {},
  },
};

module.exports = resolvers;
