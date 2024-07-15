const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {

    const photo = {
        id: 1,
        name: "photo1",
        description: "photo desc 1",
    }
    res.send(photo);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} adresinde baslatildi.`);
});