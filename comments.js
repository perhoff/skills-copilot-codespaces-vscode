// Create web server
// 1. Load modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var comments = require('./comments.json');

// 2. Set up server
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 3. Define routes
app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var comment = {