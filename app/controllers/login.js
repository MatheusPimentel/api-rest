module.exports.register = function(application, req, res) {
  console.log(req.body)

}

module.exports.login = function(application, req, res) {
  console.log(req.body)
  application.app.models.login.login(req, res)
}

module.exports.olaMundo = function(application, req, res) {
  let olaMundo = 'ola mundo!'
    res.send({olaMundo})
}