const mongoose = require('mongoose');
const schema = mongoose.Schema;

const subjectSchema = new schema({
    name: {
        type: String,
        required: true,
        min: 6,
    },

    code: { 
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255,
    },

    semester: {
        type: Number,
        min: 1,
        max: 8,
    },

    branch: {
        type: String,
        required: true,
        min: 1,
        max: 255,
    },

    notes: [{
        type: String,
        default: [],
    }],

    tutorials: [{
        type: String,
        default: [],
    }],
});



module.exports = mongoose.model('Subject', subjectSchema);