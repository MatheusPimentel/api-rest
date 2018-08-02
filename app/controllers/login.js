let User = require('../models/user')
module.exports.register = function(application, req, res) {
  //console.log(req.body)
  var user = new User(req.body)

  user.save(function(err, userResponse) {
    if(err) {
      console.log('caiu erro')
      return console.error(err)
    } 
    console.log('deu certo')
    console.dir(userResponse.body)
    res.send('deu certo')
  })
}

module.exports.login = function(application, req, res) {
  //console.log(req.body)
  User.findOne({'email': req.email}, function(err, user) {
    if(err) {
      console.log('caiu erro')
      return console.error(err)
    }
    console.log('deu certo')
    console.dir(user)
    res.send('deu certo')
  })
}

module.exports.olaMundo = function(application, req, res) {
  let olaMundo = 'ola mundo!'
    res.send({olaMundo})
}