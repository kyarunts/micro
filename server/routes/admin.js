var express = require('express');
var router = express.Router();
var User = require('../models/User');
var jwt = require('jsonwebtoken');
var config = require('../config');

/* GET users listing. */
router.get('/', function (req, res) {

});

router.post('/login', function (req, res, next) {
  User.findOne({
    username: req.body.username
  }, function (err, user) {
    if (err) {
      res.status(400).json({
        success: false,
        message: 'Error processing request ' + err
      });
    }

    if (!user) {
      res.status(201).json({
        success: false,
        message: 'Incorrect login credentials.'
      });
    } else if (user) {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          var token = jwt.sign(user.toJSON(), config.secret, {
            expiresIn: config.tokenexp
          });
          res.status(201).json({
            success: true,
            message: {
              'userid': user._id,
              'username': user.username
            },
            token: token
          });
        } else {
          res.status(401).json({
            success: false,
            message: 'Incorrect login credentials.'
          });
        }
      });
    }
  });
})


module.exports = router;

function authenticate(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['authorization'];
  if (token) {
    jwt.verify(token, config.secret, function (err, decoded) {
      if (err) {
        return res.status(201).json({
          success: false,
          message: 'Authenticate token expired, please login again.',
          errcode: 'exp-token'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Fatal error, Authenticate token not available.',
      errcode: 'no-token'
    });
  }
}