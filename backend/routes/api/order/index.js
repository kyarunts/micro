var keystone = require('keystone');
var Order = keystone.list('Order');

var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var hbs = require('nodemailer-express-handlebars');

var auth = {
  auth: {
    api_key: 'key-e56990dffa7ba23528253f2ccd1be205',
    domain: 'sandboxfaf0391e46a7480693c3e58ab17f018d.mailgun.org'
  }
}

var options = {
  viewEngine: {
      extname: '.hbs',
      layoutsDir: 'templates/emails/',
  },
  viewPath: 'templates/emails/',
  extName: '.hbs'
};

var handlers = {
  createOrder: function(req, res) {
    let { name, phone, email, products } = req.body;
    const newOrder = new Order.model({
      name,
      phone,
      email,
      products
    });
    newOrder.save((err) => {
      const id = newOrder._id;
      const url = `http://localhost:3000/admin/orders/${id}`;
      var nodemailerMailgun = nodemailer.createTransport(mg(auth));
      nodemailerMailgun.use('compile', hbs(options));
      nodemailerMailgun.sendMail({
        from: 'bonusbuildings@gmail.com',
        to: 'gurgenmnxv@gmail.com',
        subject: 'Message from bonusbuildings.am',
        template: 'order_template',
        context: {
          name,
          url,
          email
        }
      }, function (err, info) {
          if (err) {
            console.log('Error: ' + err);

          } else {
              nodemailerMailgun.close();
              res.json({success : true})
          }
    });
    })
  }
}
module.exports = handlers;
