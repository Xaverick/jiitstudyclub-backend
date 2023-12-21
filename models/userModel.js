const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    username: {
        type: String,
        required: true,
        min: 6,
    },

    email: { 
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255,

    },

    password: { 
        type: String,
        required: true,
        min: 8,
    },

    semester: {
        type: Number,
        min: 1,
        max: 8,
    },

    bookmarks: {
        type: Array,
        default: [],
    },


});


module.exports = mongoose.model('User', userSchema);