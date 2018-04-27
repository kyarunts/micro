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
  sendEmail: function(req, res) {
    const { name, email, message } = req.body;
    if(!name || !email || !message) {
      res.json({ error : 'missing_field' });
    }
    var nodemailerMailgun = nodemailer.createTransport(mg(auth));
    nodemailerMailgun.use('compile', hbs(options));
    nodemailerMailgun.sendMail({
      from: 'bonusbuildings@gmail.com',
      to: 'gurgenmnxv@gmail.com',
      subject: 'Message from bonusbuildings.am',
      template: 'email_body',
      context: {
        name,
        email,
        message
      }
    }, function (err, info) {
        if (err) {
          console.log('Error: ' + err);
        } else {
            nodemailerMailgun.close();
            res.json({success : true})
        }
  });
  }
}
module.exports = handlers;
