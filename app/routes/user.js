module.exports = function (application) {
  const mapping = '/user'
  application.put(`${mapping}/alter/:_id`, function (req, res) {
    application.app.controllers.user.alter(application, req, res)
  })

  application.delete(`${mapping}/delete/:_id`, function (req, res) {
    application.app.controllers.user.delete(application, req, res)
  })

/*  application.get(`${mapping}/:_id`, function (req, res) {
    application.app.controllers.user.find(application, req, res)
  }) */
}