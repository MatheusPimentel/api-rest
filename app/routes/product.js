module.exports = function (application) {
  const mapping = '/product'
  application.get(`${mapping}/search/:title`, function (req, res) {
    application.app.controllers.product.search(application, req, res)
  })

  application.post(`${mapping}/novo`, function (req, res) {
    application.app.controllers.product.insert(application, req, res)
  })
}