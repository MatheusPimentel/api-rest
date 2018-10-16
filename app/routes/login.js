module.exports = function(application) {
  application.get("/olamundo", function(req, res) {
    application.app.controllers.login.olaMundo(application, req, res);
  });

  application.post("/register", function(req, res) {
    application.app.controllers.login.register(application, req, res);
  });

  application.get("/login/email/:email/senha/:senha", function(req, res) {
    application.app.controllers.login.login(application, req, res);
  });

  application.get("/verify", function(req, res) {
    application.app.controllers.login.verifyToken(application, req, res);
  });
};
