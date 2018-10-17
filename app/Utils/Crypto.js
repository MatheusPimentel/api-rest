let crypto = require("crypto");
let algorithm = "aes-256-ctr";
let key = "a7Y8532Kni3acvbvghrf488Z8";
/**
 * https://lollyrock.com/articles/nodejs-encryption/
 * Site onde mostra o uso do crypto
 */

let Crypto = function() {};

// FAZ A CRIPTOGRAFIA DA SENHA
Crypto.cryptoPassword = function(password) {
  let cipher = crypto.createCipher(algorithm, key);
  let crypted = cipher.update(password, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
};

// DESCRIPTOGRAFA A SENHA
Crypto.decryptPassword = function(password) {
  let decipher = crypto.createDecipher(algorithm, key);
  let dec = decipher.update(password, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
};

module.exports = Crypto;
