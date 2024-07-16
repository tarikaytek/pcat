const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// connect DB
mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db');
// create schema
const PhotoSchema = new Schema({
    title: String,
    description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo
/* Photo.create({
    title: "Photo 1",
    description: "Photo desc 1"
}).then(() => console.log('anan'));
 */

Photo.find({});