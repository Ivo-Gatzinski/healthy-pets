const { Schema, model } = require("mongoose");

const petSchema = new Schema ({
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
    
    notes: [
        {
            type:
            Schema.types.ObjectId,
            ref: 'Note',
        },
    ],
});

module.exports = Pet;