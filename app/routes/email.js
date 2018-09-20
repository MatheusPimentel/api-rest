module.exports = function (application) {
  const mail = 'mail'
  application.post(`/${mail}/sendmail`, function (req, res) {
    application.app.controllers.email.sendEmail(application, req, res)
  })
}