const { AuthenticationError } = require("apollo-server-express");
const { User, Project } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("projects");
    },
    user: async (parent, { username }) => {
      return await User.findOne(username);
    },
    projects: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Project.find(params).sort({ createdAt: -1 });
    },
    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId });
    },
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
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addProject: async (parent, { title, notes, projectAuthor }) => {
      //deleted, context from 45
      //if (context.user) {
      //   console.log("did it work");
      //   // original attempt
      //   const project = await Project.create({
      //     title,
      //     notes,
      //     projectAuthor: context.user.username,
      //   });
      //   await User.findOneAndUpdate(
      //     { _id: context.user._id },
      //     { $addToSet: { projects: project._id } }
      //   );

      //   return project;
      // }
      const project = await Project.create({ title, notes, projectAuthor });
      await User.findOneAndUpdate(
        { username: projectAuthor },
        { $addToSet: { projects: project._id } }
      );
    },
  },
};

module.exports = resolvers;
