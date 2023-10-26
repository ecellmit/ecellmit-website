const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Alumni = new Schema({
    sortOrder: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
    },
    social: {
        instagram: String,
        linkedin: String,
        email: String
    }
});

module.exports = alumni = mongoose.model('Alumni', Alumni);