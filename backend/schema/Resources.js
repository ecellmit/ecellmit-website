const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Resources = new Schema({
    category: {
        type: String,
        required: true
    },
    photo: String,
    heading: {
        type: String,
        required: true
    },
    subheading: {
        type: String,
        required: true
    },
    tags: {
        type: Array
    },
    urlLink: {
        type: String,
        required: true
    }
});

module.exports = resources = mongoose.model('Resources', Resources);