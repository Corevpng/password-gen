const crypto = require('crypto');

function generatePassword(length = 12) {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
}

module.exports = generatePassword;