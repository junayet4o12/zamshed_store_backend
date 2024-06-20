const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const orderedProductSchema = new Schema({
    productData: {
        type: Schema.Types.Mixed, 
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    clientEmail: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    writtenLocation: {
        type: String,
    },
    stage: {
        type: String,
        required: true
    },
    addedTime: {
        type: Number,
        required: true
    }
})
const OrderedProduct = model('orderedProduct', orderedProductSchema);
module.exports = OrderedProduct;  