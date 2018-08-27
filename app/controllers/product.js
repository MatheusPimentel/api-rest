let Product = require('../models/Product')

// INSERÇÃO DE UM NOVO PRODUTO
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

// PESQUISA DE UM PRODUTO
module.exports.search = function(application, req, res) {
  const param = req.params.title
  
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

// ESCLUSÃO DE UM PRODUTO
module.exports.delete = function(application, req, res) {
  const id = req.params._id
  Product.deleteOne({_id: id}, function (err) {
    if (err) {
      return res.status(500).send(err)
    }
    res.send({deletado: true})   
  })
}