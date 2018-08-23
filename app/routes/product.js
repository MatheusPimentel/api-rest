module.exports = function (application) {
  const mapping = '/product'
  application.get(`${mapping}/search/:title`, function (req, res) {
    application.app.controllers.product.search(application, req, res)
  })
}