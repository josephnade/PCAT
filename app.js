const express = require('express');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const fs = require('fs');
const dbController = require('./controllers/dbController');
const pageRoute = require('./routers/pageRoute');
const photoRoute = require('./routers/photoRoute');
// CONSTANTS
const app = express();
const port = 3000;

dbController.connectionMongoDB();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEAWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
    methodOverride('_method', {
        methods: ['POST', 'GET'],
    })
);

// ROUTES
app.use('/', pageRoute);
app.use('/photos', photoRoute);

//Listened Port
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
});