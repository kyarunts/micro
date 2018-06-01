var keystone = require('micrpkey');
var path = require('path');
var index = path.resolve(path.dirname(path.dirname(__dirname)) + '/public/index.html');

exports = module.exports = function (req, res) {
    console.log(index);
    res.sendFile(index);
	// var view = new keystone.View(req, res);
	// var locals = res.locals;

	// // locals.section is used to set the currently selected
	// // item in the header navigation.
	// locals.section = 'home';

	// // Render the view
	// view.render('index');
};
