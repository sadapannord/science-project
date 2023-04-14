const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  //original
  // projects: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Project",
  //   },
  // ],

  //add new version of projects, maybe this will work?
  projects: [
    {
      title: {
        type: String,
        required: true,
      },
      notes: {
        type: String,
        required: "Dont forget to add notes!",
        minlength: 1,
        maxlength: 280,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updated: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});
// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
