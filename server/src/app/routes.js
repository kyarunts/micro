var express = require('express');
var appRouter = express.Router();

var partnerHandlers = require('./controllers/partner');

appRouter.get('/partners', partnerHandlers.getByQuery);


module.exports = appRouter;
