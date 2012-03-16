var nano = require('nano');
var server = nano('http://mike:episode26@twuora.iriscouch.com/');
var db = server.use('mydb');
var fs = require('fs');

var readStream = fs.createReadStream('/home/ghilly/Documents/rails/prepcloud/public/images/logo.png');
readStream.pipe(db.attachment.insert('doc_two', 'my_photo', null, 'image/jpeg'));

// var writeStream = fs.createWriteStream('/tmp/prepcloud_email.png');
// db.attachment.get('doc_two', 'my_photo').pipe(writeStream);