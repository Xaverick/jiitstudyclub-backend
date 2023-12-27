const mongoose = require('mongoose');
const schema = mongoose.Schema;

const semesterSchema = new schema({
    name: {
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

    subjects: {
        type: schema.Types.ObjectId,
        ref: 'subjects',
    },


});

module.exports = mongoose.model('Semester', semesterSchema);