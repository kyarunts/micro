var keystone = require('keystone');
var Partner = keystone.list('Partner').model;

var handlers = {
  getPartners: function(req, res) {
    Partner.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
        res.status(200).json(data);
    });
  }
}
module.exports = handlers;