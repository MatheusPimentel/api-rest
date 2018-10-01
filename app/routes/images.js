module.exports = function (application) {
    const mapping = '/image'
    application.post(`${mapping}/save`, function (req, res) {
      application.app.controllers.images.save(application, req, res)
    })
}