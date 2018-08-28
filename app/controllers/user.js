let User = require('../models/User')
// FAZ A ALTERAÇÃO DE UM USUÁRIO
module.exports.alter = function(application, req, res) {
  const reqUser = req.body
  User.findOne({email: reqUser.email}, function(err, userResponse) {
    if(err) {
      return res.status(500).send(err)
    }
    if (userResponse) {
      userResponse = reqUser.nome
      userResponse = reqUser.numero

      userResponse.save(function(err, response) {
        if(err) {
          return res.status(500).send(err)
        }
        return res.send(response)
      })
    }
    res.status(500).send({message: 'Não foi possível alterar o usuário'})
  })
}

// FAZ A DELEÇÃO DE UM USUÁRIO
module.exports.delete = function(application, req, res) {
  User.deleteOne({_id: req.params._id}, function (err) {
    if (err) {
      return res.status(500).send(err)
    }
    res.send({message: 'Usuário excluido com sucesso'})
  })
}