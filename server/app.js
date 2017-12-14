var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');


mongoose.connect(config.database, { useMongoClient: true }); 

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + config.database);
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

var api = require('./routes/api');
var admin = require('./routes/admin');
var indexUri = path.join(path.dirname(__dirname), 'client/micro/src/index.html');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', api);
app.use('/admin', admin);




app.all('*', function(req, res, next) {
  res.sendFile(indexUri);
})



module.exports = app;
