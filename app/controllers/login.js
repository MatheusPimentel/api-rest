let Crypto = require('../Utils/Crypto')
let User = require('../models/user')
module.exports.register = function(application, req, res) {
  let user = new User(req.body)
  let crypto = new Crypto()
  const password = crypto.cryptoPassword(user.senha)
  user.senha = password

  user.save(function(err, userResponse) {
    if(err) {
      return res.status(500).send(err)
    }
    const objUser = {
      nome: userResponse.nome,
      email: userResponse.email,
      numero: userResponse.numero,
      senha: userResponse.senha
    }
    res.send(objUser)
  })
}

module.exports.login = function(application, req, res) {
  const email = req.params.email
  const senha = req.params.senha
  let crypto = new Crypto()
  User.findOne({email: email}, function(err, user) {
    if(err) {
      return res.status(500).send(err)
    }
    const password = crypto.decryptPassword(user.senha)
    if (password === senha) {
      return res.send(user)
    }
    res.status(500).send({message: 'Usuário não encontrado'})
  })
}

module.exports.olaMundo = function(application, req, res) {
  let olaMundo = 'ola mundo!'
    res.send({olaMundo})
}
