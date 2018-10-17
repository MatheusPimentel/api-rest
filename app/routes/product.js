module.exports = function(application) {
  const mapping = "/product";
  application.get(`${mapping}/search/:title`, function(req, res) {
    application.app.controllers.product.search(application, req, res);
  });

  application.post(`${mapping}/new`, function(req, res) {
    application.app.controllers.product.insert(application, req, res);
  });

  application.delete(`${mapping}/delete/:_id`, function(req, res) {
    application.app.controllers.product.delete(application, req, res);
  });

  application.put(`${mapping}/alter`, function(req, res) {
    application.app.controllers.product.alter(application, req, res);
  });
};
