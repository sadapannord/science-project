const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return await User.findOne(username);
    },
    project: async (parent, { username }) => {
      return await Project.findOne({ _id: username });
    }
  },
  Mutation: {
    // changeUser: async (parent, args) => {},
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addProject: async (parent, { title, notes }, context) => {
      if (context.user) {
        const project = await Project.create({
            title,
            notes,
            projectAuthor: context.user.username
          });
       await User.findOneAndUpdate(
        {_id: context.user._id},
        {$addToSet: {projects: project._id}}
       ); 
       
       return project;
      }
    }
  },
};

module.exports = resolvers;
