let Crypto = require('../Utils/Crypto')
let User = require('../models/user')
module.exports.register = function(application, req, res) {
  var user = new User(req.body)
  var crypto = new Crypto()
  let password = crypto.cryptoPassword(user.senha)
  user.senha = password
  // let passwordDecryptd = crypto.decryptPassword(password)

  user.save(function(err, userResponse) {
    if(err) {
      return console.error(err)
    }
    objUser = {
      nome: userResponse.nome,
      email: userResponse.email,
      numero: userResponse.numero,
      senha: userResponse.senha
    }
    res.send(objUser)
  })
}

module.exports.login = function(application, req, res) {
  User.findOne({'email': req.body.email, 'senha': req.body.senha}, function(err, user) {
    if(err) {
      return console.error(err)
    }
    objUser = {
      nome: user.nome,
      email: user.email,
      numero: user.numero
    }
    res.send(objUser)
  })
}

module.exports.olaMundo = function(application, req, res) {
  let olaMundo = 'ola mundo!'
    res.send({olaMundo})
}