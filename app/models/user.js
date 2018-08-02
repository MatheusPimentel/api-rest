var mongoose = require('Mongoose')
mongoose.connect('mongodb://localhost:27017/project_learning')
var Schema = mongoose.Schema

var userSchema = new Schema({
  nome: String,
  email: String,
  numero: String,
  senha: String
})

let User = mongoose.model('user', userSchema)
module.exports = User