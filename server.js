const express = require('express');
const hbs = require('hbs');
var _ = require('lodash');
const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home.hbs');
});

app.get('/workout/:day', (req, res) => {  
  res.render('monday.hbs', { day: _.startCase(req.params['day']) });
});

app.listen(port, () =>{
  console.log(`App is up and running: ${port}`);
});