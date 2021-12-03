const { Schema, model } = require("mongoose");

const noteSchema = new Schema ({
    text: {
        type: String,
        required: 'You need to leave a note.',
        minlength: 1,
        trim: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) =>
        dateFormat(timestamp),
    },

    subject: {
        type: String,
        required: true,
        trim: true,
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = noteSchema;