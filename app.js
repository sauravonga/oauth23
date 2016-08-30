// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var courseController = require('./controllers/course');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');
var oauth2Controller = require('./controllers/oauth2');
var clientController = require('./controllers/client');
var router = require('./router');
var courserouter = require('./router/course');


// MongoDB
mongoose.connect('mongodb://localhost:27017/course91');

// Create our Express application
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');

// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use express session support since OAuth2orize requires it
app.use(session({
  secret: 'Super Secret Session Key',
  saveUninitialized: true,
  resave: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// Register all our routes with /api
app.use('/api', router);
app.use('/api', courserouter);

app.listen(app.get('port'), function() {
  console.log('app is running on port', app.get('port'));
});