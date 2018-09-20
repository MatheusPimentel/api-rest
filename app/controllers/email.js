// HELLO WORLD
let nodemailer = require('nodemailer')
module.exports.sendEmail = function(application, req, res) {
  console.log('email -> ',req.body)
  const userMail = 'matheus200713@hotmail.com'
  const password = 'shhhhhhhhhhhhhhhh'
  let transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: userMail,
      pass: password
    }
  })

  let mailOptions = {
    from: userMail,
    to: 'matheus200713@gmail.com',
    subject: req.body.title,
    text: req.body.description
  }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      return res.status(500).send(error)
    }
    res.send(info.response)
    console.log('Email sent: ' + info.response);
  });
}