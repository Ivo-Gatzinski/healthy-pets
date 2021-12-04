const { Schema, model } = require("mongoose");
const noteSchema = require("./Note");

const petSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },
  species: {
    type: String,
    required: true,
    trim: true
  },
  notes: [noteSchema]
});

module.exports = petSchema;
