var keystone = require('keystone');
var Category = keystone.list('Category').model;

var handlers = {
  getCategories: function(req, res) {
    Category.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
        res.status(200).json(data);
    });
  }
}
module.exports = handlers;