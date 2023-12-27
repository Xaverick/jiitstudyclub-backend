const semester = require('../models/semesterModel.js');
const subject = require('../models/subjectsModel.js');
const { cloudinary } = require("../cloudinary")


module.exports.getSemester = async (req, res) => {
    const sem = await semester.findOne({ semester: req.params.id });
    res.json(sem);
};


module.exports.getSubject = async (req, res) => {
    const sub = await subject.findOne({ code: req.params.name });
    res.json(sub);
}




