let Crypto = require('../Utils/Crypto')
let User = require('../models/User')
// REGISTRO DE USUÁRIO
module.exports.register = function(application, req, res) {
  let user = new User(req.body)
  const password = Crypto.cryptoPassword(user.senha)
  user.senha = password

  user.save(function(err, userResponse) {
    if(err) {
      return res.status(500).send(err)
    }
    res.send(userResponse)
  })
}

// LOGIN DE UM USUÁRIO
module.exports.login = function(application, req, res) {
  const email = req.params.email
  const senha = req.params.senha
  User.findOne({email: email}, function(err, user) {
    if(err) {
      return res.status(500).send(err)
    }
    const password = Crypto.decryptPassword(user.senha)
    if (password === senha) {
      return res.send(user)
    }
    res.status(500).send({message: 'Usuário não encontrado'})
  })
}

// HELLO WORLD
module.exports.olaMundo = function(application, req, res) {
  let olaMundo = 'ola mundo!'
    res.send({olaMundo})
}
