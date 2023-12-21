const router = require('express').Router();
const general = require('../controllers/generalController.js');
const { isLoggedIn } = require('../middleware.js');
const catchAsync = require('../utils/CatchAsync.js');


router.route('/semester/:id')
    .get(isLoggedIn, catchAsync(general.getSemester));


router.route('/subject/:name')
    .get(isLoggedIn, catchAsync(general.getSubject));


module.exports = router;