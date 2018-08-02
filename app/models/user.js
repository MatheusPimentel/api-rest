var Mongoose = require('Mongoose')
Mongoose.connect('mongodb://localhost/test')
var Schema = Mongoose.Schema

var userSchema = new Schema({
  nome: String,
  email: String,
  numero: String,
  senha: String
})

let User = Mongoose.model('user', userSchema)
module.exports = User