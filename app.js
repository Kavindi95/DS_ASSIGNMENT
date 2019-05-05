var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trainticket');
var db = mongoose.connection; //database object

app.get('/', function(req, res) {
    res.send('Hello world Hi');
});

app.listen(3000);
console.log('Running on port 3000...');