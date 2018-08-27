let mongoose = require('../../config/mongoConnection')
let Schema = mongoose.Schema

let imageSchema = new Schema({
  img: { data: Buffer, contentType: String },
  foreignId: {type: String}
})

let images = mongoose.model('images', imageSchema)
module.exports = images