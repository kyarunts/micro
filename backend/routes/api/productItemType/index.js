var keystone = require('keystone');
var Productitemtype = keystone.list('Productitemtype').model;

var handlers = {
  getProductItemTypes: function(req, res) {
    Productitemtype.find()
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