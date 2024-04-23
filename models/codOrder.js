const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codOrderDetailsSchema = new Schema({
    orderID: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    orderItems: {
        type: Array,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const codOrder = mongoose.model('codOrder', codOrderDetailsSchema);

module.exports = codOrder;
