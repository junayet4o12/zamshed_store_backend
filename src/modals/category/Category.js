const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },

})
const Category = model('category', categorySchema);
module.exports = Category; 