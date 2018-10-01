const Image = require('../models/Images');
const fs = require('fs');

//INSERÇÃO DE UMA NOVA IMAGEM
module.exports.save = function(application, req, res) {
    const img = req.body;
    console.log('imagem -> ', img)
    
    const image = new Image;
    image.img.data = fs.readFileSync(img);
    image.img.contentType = 'image/jpg';

    image.save(function(err, response) {
        if(err) {
            return res.status(500).send(err)
        }
        res.send(response)
    })
}