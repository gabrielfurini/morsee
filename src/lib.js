const { toMorse, fromMorse } = require('./dictionary')

const encode = (str) =>
  [...str.toLowerCase()].map((letter) => toMorse[letter]).join(' ')

const decode = (str) =>
  str
    .split(' ')
    .map((morse) => fromMorse[morse])
    .join('')

module.exports = {
  encode,
  decode,
}
