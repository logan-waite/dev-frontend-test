'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('src'));
app.use(express.static('node_modules'));

app.listen(4300, function () {
  console.log('Server now listening on port 4300');
});
