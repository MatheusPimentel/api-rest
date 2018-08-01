module.exports = function (application) {
  application.get('/olamundo', function (req, res) {
    let olaMundo = 'ola mundo!'
    res.send({olaMundo})
  })
  
  application.post('/register', function (req, res) {
    application.app.controllers.login.register(application, req, res)
  })
}