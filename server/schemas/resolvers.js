

const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { User, Pet } = require("../models");
const { signToken } = require("../util/auth");
const { dateScalar } = require("./customScalars");

const resolvers = {
  Date: dateScalar,
  Query: {
    pet: async (parent, { petId }) => {
      return Pet.findOne({ _id: petId });
    },
    me: async (parent, args, ctx) => {
      // if ctx.user is undefined, then no token or an invalid token was
      // provided by the client.
      if (!ctx.user) {
        throw new AuthenticationError("Must be logged in.");
      }
      return User.findOne({ username: ctx.user.username }).populate("pets");
    },
  },
  Mutation: {
    addUser: async (parent, { user: userData }) => {
      try {
        const user = await User.create(userData);
        const token = await signToken(user);
        return { user, token };
      } catch (error) {
        if (error.code === 11000) {
          const [[key, value]] = Object.entries(error.keyValue);
          throw new UserInputError(`${key} "${value}" already exists.`);
        }
        throw error;
      }
    },
    login: async (parent, args) => {
      const { username, password } = args;
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("Invalid username or password");
      }
      const authentic = await user.isCorrectPassword(password);
      if (!authentic) {
        throw new AuthenticationError("Invalid username or password");
      }
      const token = await signToken(user);
      user.lastLogin = Date.now();
      await user.save();
      return { token, user };
    },
    addPet: async (parent, { pet }, context) => {
      // console.log("In addPet");
      // console.log(args);
      // console.log(context.user);
      if (context.user) {
        const { firstName, lastName, species, breed } = pet;
        
        const updatedPet = await Pet.create(pet);
        
        console.log(updatedPet);

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { pets: updatedPet._id } },
          { new: true, runValidators: true }
        );

        return updatedPet;
      }
      throw new AuthenticationError("Please log in.");
    },
    addNote: async (parent, { note }, context) => {
      if (context.user?.role === "VET") {
        try {
          const {petId, text, subject} = note;
          const updatedPet = await Pet.findOneAndUpdate(
            { _id: petId },
            { $addToSet: { notes: {text, subject} } },
            { new: true, runValidators: true }
          );
          return updatedPet;
        } catch (err) {
          console.log(err);
          throw new Error("Unexpected error.");
        }
      }
      throw new AuthenticationError("Please log in.");
    },
  },
};

module.exports = resolvers;
