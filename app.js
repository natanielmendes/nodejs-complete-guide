const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.json({limit: 100 * 1024 * 1024}));
// app.use(bodyParser.urlencoded({limit: 100 * 1024 * 1024}));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);
