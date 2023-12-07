# PCAT Uygulaması

PCAT, fotoğrafları yükleyip görüntüleyebileceğiniz, güncelleyebileceğiniz ve silebileceğiniz bir web uygulamasıdır. Bu uygulama Node.js, MongoDB Atlas ve temel bir MVC tasarım deseni kullanılarak geliştirilmiştir.

## Başlangıç

Aşağıdaki adımları takip ederek PCAT uygulamasını başlatabilirsiniz.

### 1. Gerekli Paketleri Yükleme

Uygulamanın çalışabilmesi için öncelikle gerekli paketleri yüklemeniz gerekmektedir. Terminal veya komut istemcisine şu komutu yazarak paketleri yükleyebilirsiniz:

```bash
npm install
```
### 2. MongoDB Atlas Bağlantısı
Uygulama, MongoDB Atlas üzerindeki bir veritabanını kullanmaktadır. Bu nedenle, MongoDB Atlas'ta bir hesap oluşturun ve bir veritabanı oluşturun. Oluşturduğunuz veritabanının bağlantı URL'sini alın ve dbController.js dosyasında mongoose.connect(url) satırını düzenleyin:
```javascript
await mongoose.connect('<your_mongodb_url>', {
    serverSelectionTimeoutMS: 5000,
});
```
### 3. Uygulamayı Başlatma
Tüm gerekli paketleri yükledikten ve MongoDB bağlantısını sağladıktan sonra uygulamayı başlatabilirsiniz:
```bash
npm start
```

Uygulamanın bitmiş halini [buradan](https://pcat-app-risy.onrender.com/) ulaşabilirsiniz.

### Kullanım
Uygulama, temel fotoğraf paylaşım özelliklerini içerir. Ana sayfada fotoğrafları görüntüleyebilir, yeni fotoğraf ekleyebilir, mevcut fotoğrafları güncelleyebilir ve silebilirsiniz.
