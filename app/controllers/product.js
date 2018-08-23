let Product = require('../models/Product')

module.exports.insert = function(application, req, res) {
  const produto = req.body
  let product = new Product(produto)
  product.save(function(err, userResponse) {
    if(err) {
      return res.status(500).send(err)
    }
    res.send(userResponse)
  })
}

module.exports.search = function(application, req, res) {
  const param = req.params.title
  console.log('param ->', param)
  
  if(param === '') {
    Product.find({}, function(err, productResponse) {
      if(err) {
        return res.status(500).send(err)
      }
      return res.send(productResponse)
    })
  }

  Product.find({titulo: param}, function(err, productResponse) {
    if(err) {
      return res.status(500).send(err)
    }
    return res.send(productResponse)
  })
}