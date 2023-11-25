const express = require('express');
const photoController = require('../controllers/photoController');
const router = express.Router();

router.route('/').post(photoController.createPhoto);
router.route('/edit/:id').get(photoController.getEditPage);
router.route('/:id').get(photoController.getPhoto);
router.route('/:id').put(photoController.updatePhoto);
router.route('/:id').delete(photoController.deletePhoto);

module.exports = router;