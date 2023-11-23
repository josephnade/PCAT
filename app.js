const express = require('express');
const mongoose = require('mongoose');
const Photo = require('./models/Photo');
// CONSTANTS
const app = express();
const port = 3000;

// Connect DB
async function connectionMongoDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/pcat-test-db', {
            serverSelectionTimeoutMS: 5000
        });
        console.log("Veritabanına başarıyla bağlandı");
    } catch (error) {
        console.log(`Bir hata oluştu: ${error}`);
    }
}
connectionMongoDB();


// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEAWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get('/', async(req, res) => {
    const photos = await Photo.find({});
    res.render('index', {
        photos: photos
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/add', (req, res) => {
    res.render('add');
});
app.post('/photos', async(req, res) => {
    await Photo.create(req.body);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
});