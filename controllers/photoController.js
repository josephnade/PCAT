const fs = require('fs');
const Photo = require('../models/Photo');

const createPhoto = async(req, res) => {
    let uploadedFile = req.files.image;
    uploadedPath = __dirname + '/../public/uploads/' + uploadedFile.name;
    if (!fs.existsSync('public/uploads')) fs.mkdirSync('public/uploads');
    uploadedFile.mv(uploadedPath, async(err) => {
        if (err) {
            console.log(err);
        } else {
            await Photo.create({
                ...req.body,
                image: '/uploads/' + uploadedFile.name,
            });
            res.redirect('/');
        }
    });
};
const getPhoto = async(req, res) => {
    const photo = await Photo.findById(req.params.id);
    res.render('photo', {
        photo: photo,
    });
};

const updatePhoto = async(req, res) => {
    const photo = await Photo.findById(req.params.id);
    photo.name = req.body.name;
    photo.description = req.body.description;
    photo.save();
    res.redirect(`/photos/${req.params.id}`);
};
const deletePhoto = async(req, res) => {
    const photo = await Photo.findById(req.params.id);
    let deletedPath = __dirname + '/public' + photo.image;
    if (fs.existsSync(deletedPath)) {
        fs.unlinkSync(deletedPath, (err) => {
            if (err) console.log(err);
        });
    }
    await Photo.findOneAndDelete({ _id: req.params.id });
    res.redirect(`/`);
};
const getEditPage = async(req, res) => {
    const photo = await Photo.findById(req.params.id);
    res.render('edit', {
        photo: photo,
    });
};

module.exports = {
    createPhoto,
    getPhoto,
    updatePhoto,
    deletePhoto,
    getEditPage,
};