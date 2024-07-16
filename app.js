const express = require('express');
const mongoose = require('mongoose');

const ejs = require('ejs');
const path = require('path');

const Photo = require('./models/Photo');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db');

//template engine
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));   //url'deki datayı okur
app.use(express.json());    // jsona çevirir

app.get('/', async (req, res) => {
    const photos = await Photo.find({});
    res.render('index', {
        photos
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/photos', async (req, res) => {
    await Photo.create(req.body);
    res.redirect('/');
});


//bu da bi middleware yaani
/* app.get('/', (req, res) => {

    const photo = {
        id: 1,
        name: "photo1",
        description: "photo desc 1",
    }
    res.send(photo);
}); */

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} adresinde baslatildi.`);
});
