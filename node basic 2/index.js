var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('index',{ num : 3});
});

app.listen(3000);
console.log('Server is listening on port 3000');
