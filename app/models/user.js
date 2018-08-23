let mongoose = require('../../config/mongoConnection')
let Schema = mongoose.Schema

let userSchema = new Schema({
  nome: {type: String, uppercase: true},
  email: {type: String, unique: true},
  numero: {type: Number},
  senha: {type: String}
})

let User = mongoose.model('users', userSchema)
module.exports = User