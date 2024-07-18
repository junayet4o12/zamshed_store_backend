const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    measurement: {
        type: String,
        required: true
    },
    addedTime: {
        type: Number,
        required: true
    },
    isHot: {
        type: Boolean
    }
})
const Products = model('products', productSchema);
module.exports = Products;