const Photo = require('../models/Photo');
const getAllPhotos = async(req, res) => {
    const photos = await Photo.find({}).sort('-created_at');
    res.render('index', {
        photos: photos,
    });
};

const getAboutPage = (req, res) => {
    res.render('about');
};
const getAddPage = (req, res) => {
    res.render('add');
};

module.exports = {
    getAllPhotos,
    getAboutPage,
    getAddPage,
};