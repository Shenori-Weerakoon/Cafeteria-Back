const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedback = new Schema({
    email: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});
const feedbackSchema = mongoose.model('feedback', feedback);
module.exports = feedbackSchema;