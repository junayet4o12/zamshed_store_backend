const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,
    },
    ContactNumber: {
        type: String,
    },
    addedTime: {
        type: Number,
        required: true
    },
})
const Users = model('users', usersSchema);
module.exports = Users;  