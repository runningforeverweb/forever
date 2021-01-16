const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/views/images'));
app.use(express.static(__dirname + '/views/style'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('index.hbs');
});

app.listen(port, () => {
    console.log(`Server is up at Port: ${port}`);
});