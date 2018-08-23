var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/project_learning')
var Schema = mongoose.Schema

var userSchema = new Schema({
  nome: {type: String, uppercase: true},
  email: {type: String, unique: true},
  numero: {type: Number},
  senha: {type: String}
})

let User = mongoose.model('users', userSchema)
module.exports = User