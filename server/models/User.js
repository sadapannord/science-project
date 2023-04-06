const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min_length: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
  // {
  //     toJSON: {
  //         getters: true,
  //     },
  //     id: false,
  // }
);

const User = model("User", userSchema);

module.exports = User;
