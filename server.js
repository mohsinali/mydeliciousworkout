const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home.hbs');
});

app.listen(port, () =>{
  console.log(`App is up and running: ${port}`);
});