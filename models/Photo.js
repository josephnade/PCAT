const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const PhotoSchema = new Schema({
    name: String,
    description: String,
    image: String,
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;