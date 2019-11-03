'use strict'

const replace = require('buffer-replace')

module.exports = (pw, enc = 'base64') => {
  return String(replace(Buffer.from(pw, enc), Buffer.from('00', 'hex'), Buffer.from('')))
}
