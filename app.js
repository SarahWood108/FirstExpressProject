const express = require('express');
const app = express();

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('./index.pug');

});

// make a route for the about page of the website

app.get('/about', (req, res) => {
    res.render('./about.pug');

});

app.get('/random', (req, res) => {
    res.render('./random.pug');

});


app.listen(3000);
