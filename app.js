// load express
var express = require('express');

// Define what port you want to run at
var port = 3000;

// load body-parser for parsing incoming data (middleware)
var bodyParser = require('body-parser');

// for Cross Origin Request Security
var cors = require('cors');

// load the logger for your server logs
var logger = require('morgan');

// load mongoose for db
var mongoose = require('mongoose');
var database = 'mongodb://localhost/express-mongo-boilerplate';

// load pug for templating
var pug = require('pug');

// routes for the app
var routes = require('./routes');

// load the app by calling express() function
var app = express();

/****** MIDDLEWARE *******/
// load 'dev' to log everything for debugging
app.use(logger('combined'));
// for Cross Origin Request Security
app.options('*', cors());
// for parsing application/json 
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
/*************************/

// tell app to use the routes loaded from above
app.use('/', routes);

// set html templates to use pug
app.set('view engine', 'pug');

// Handle 404
app.use(function(req, res) {
   res.status(404).send('404: Path not Found');
});

// Handle 500
app.use(function(error, req, res, next) {
   res.status(500).send('500: Internal Server Error');
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
