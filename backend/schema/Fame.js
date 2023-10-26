const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Fame = new Schema({
    startup: {
        type: String,
        required: true
    },
    logo: {
        type: String,
    },
    website: String,
    founders: [{
        name: {
            type:String,
            required: true
        },
        linkedin: {
            type:String,
            required: true
        } 
    }],
});

module.exports = fame = mongoose.model('Fame', Fame);