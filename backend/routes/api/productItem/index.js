var keystone = require('micrpkey');
var Productitem = keystone.list('Productitem').model;

var handlers = {
  getProductItems: function(req, res) {
    Productitem.find()
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