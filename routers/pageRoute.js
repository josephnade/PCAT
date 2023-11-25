const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/add').get(pageController.getAddPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/').get(pageController.getAllPhotos);

module.exports = router;