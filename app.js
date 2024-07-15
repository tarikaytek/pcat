const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

//template engine
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/add', (req, res) => {
    res.render('add');
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
