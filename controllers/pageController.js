const Photo = require('../models/Photo');
const getAllPhotos = async(req, res) => {
    const page = req.query.page || 1;
    const photosPerPage = 2;
    const totalPhotoNumber = await Photo.find({}).countDocuments();
    const photos = await Photo.find({})
        .sort('-created_at')
        .skip((page - 1) * photosPerPage)
        .limit(photosPerPage);
    res.render('index', {
        photos: photos,
        current: page,
        pages: Math.ceil(totalPhotoNumber / photosPerPage),
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