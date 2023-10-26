const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema({
    articleName: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    writers: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    url: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true 
    }
});

module.exports = blog = mongoose.model('Blog', Blog);