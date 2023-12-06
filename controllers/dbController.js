const mongoose = require('mongoose');
// Connect DB
async function connectionMongoDB() {
    try {
        await mongoose.connect('mongodb+srv://josephnade:05369659190Yy@cluster.u1ra4eq.mongodb.net/', {
            serverSelectionTimeoutMS: 5000,
        });
        console.log('Veritabanına başarıyla bağlandı');
    } catch (error) {
        console.log(`Bir hata oluştu: ${error}`);
    }
}

module.exports = { connectionMongoDB };