const express = require('express');
const hbs = require('hbs');

var app = express();
app.use(require('express-jquery')('/jquery.js'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home.hbs');
});

app.listen(3000);