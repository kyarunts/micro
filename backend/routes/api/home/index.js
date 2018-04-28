var keystone = require('keystone');
var Product = keystone.list('Product').model;
var Partner = keystone.list('Partner').model;
var Project = keystone.list('Project').model;

var handlers = {
  getItemsForHomePage: function(req, res) {
    const productsRequest = Product.find()
      .sort('-appearsOnHomePage')
      .limit(3)
      .populate('category')
      .exec();
    const partnersRequest = Partner.find()
      .sort('-appearsOnHomePage')
      .limit(5)
      .exec();
    const projectsRequest = Project.find()
      .sort('-appearsOnHomePage')
      .limit(3)
      .exec();
    Promise.all([
      productsRequest,
      partnersRequest,
      projectsRequest
    ])
    .then((data) => {
      const result = {
        products: data[0],
        partners: data[1],
        projects: data[2],
      }
      res.json(result);
    })
    .catch(e => {
      res.status(500).send({
        message: "error",
        error: e
      })
    })
  }
}
module.exports = handlers;