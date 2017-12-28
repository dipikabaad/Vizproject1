// grab express
var express = require('express');
// create an express app
var app = express();

//Configure the App
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

// create an express route for the home page
// http://localhost:8080/
//Example of building dashboard with DC.js, d3.js and crossfilter.js
app.get('/', function(req, res) {
    res.render('pages/index12');
});
// http://localhost:8080/cross
//example of crossfilter
app.get('/cross', function(req, res) {
    res.render('pages/index1');
});
//example of D3
//http://localhost:8080/d3eg
app.get('/d3eg', function(req, res) {
    res.render('pages/index2');
});

// start the server on port 8080
app.listen(8080);
// send a message
console.log('Server has started for index12!');