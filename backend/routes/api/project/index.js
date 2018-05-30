var keystone = require('micrpkey');
var Project = keystone.list('Project').model;

var handlers = {
  getProjects: function(req, res) {
    Project.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
        res.status(200).json(data);
    });
  }
}
module.exports = handlers;