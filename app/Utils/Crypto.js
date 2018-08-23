let crypto = require('crypto')

/**
 * https://lollyrock.com/articles/nodejs-encryption/
 * Site onde mostra o uso do crypto
 */

module.exports = function Crypto() {
  this.algorithm = 'aes-256-ctr'
  this.key = 'a7Y8532Kni3acvbvghrf488Z8'

  this.cryptoPassword = function(password) {
    let cipher = crypto.createCipher(this.algorithm, this.key)
    let crypted = cipher.update(password, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted
  }
  
  this.decryptPassword = function(password){
    let decipher = crypto.createDecipher(this.algorithm, this.key)
    let dec = decipher.update(password, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
  }
}
