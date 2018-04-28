var keystone = require('keystone');
var Product = keystone.list('Product').model;

var handlers = {
  getProducts: function(req, res) {
    Product.find()
      .populate('category')
      .exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
        res.status(200).json(data);
    });
  }
}
module.exports = handlers;