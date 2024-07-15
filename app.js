const express = require('express');
const path = require('path');

const app = express();

//MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'temp/index.html'));
})



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