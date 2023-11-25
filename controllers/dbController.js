const mongoose = require('mongoose');
// Connect DB
async function connectionMongoDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/pcat-test-db', {
            serverSelectionTimeoutMS: 5000,
        });
        console.log('Veritabanına başarıyla bağlandı');
    } catch (error) {
        console.log(`Bir hata oluştu: ${error}`);
    }
}

module.exports = { connectionMongoDB };