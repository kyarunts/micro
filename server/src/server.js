var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jsonwebtoken = require('jsonwebtoken');

var userRoutes = require('./user/routes');
var appRoutes = require('./app/routes');

var port = process.env.PORT || 8080;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://admin:admin@ds129936.mlab.com:29936/micro', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    if (
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'JWT'
    ) {
        jsonwebtoken.verify(
            req.headers.authorization.split(' ')[1],
            'RESTFULAPIs',
            (err, decode) => {
                if (err) {
                    req.user = undefined;
                }
                else {
                    console.log(decode)
                    req.user = decode;
                    next();
                }
            }
        );
    }
    else {
        req.user = undefined;
        next();
    }
});

// app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/app', appRoutes)
// app.use('/api/customer', customerRoutes);

app.listen(port);
