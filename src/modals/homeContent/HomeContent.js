const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const homeContentSchema = new Schema({
    proprietor: {
        type: String,
    },
    dateOfBirth: {
        type: Number,
    },
    address: {
        type: String,
    },
    contactNumber: {
        type: String,
    },
    email: {
        type: String,
    },
    proprietorImage: {
        type: String,
    },
    shopName: {
        type: String,
    },
    shopAge: {
        type: String,
    },
    totalRoom: {
        type: String,
    },
    productTypesAmount: {
        type: String,
    },
    productAmount: {
        type: String,
    },
    dailyCustomers: {
        type: String,
    },
    shopAddress: {
        type: String,
    },
    shopImage: {
        type: String,
    },

})
const HomeContent = model('homeContent', homeContentSchema);
module.exports = HomeContent;