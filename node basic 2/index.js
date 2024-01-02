var express = require('express');
var app = express();

let comments = [];

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// index page
app.get('/', function(req, res) {
  res.render('index',{ comments: comments });
});

app.post('/create', function(req, res) {
  console.log(req.body)
  
  const { content } = req.body

  comments.push(content)
  
  console.log(comments)
  
  res.redirect('/')
});

app.listen(3000);
console.log('Server is listening on port 3000');
