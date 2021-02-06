const assert = require('assert')
const { toMorse } = require('../src/dictionary')
const { encode, decode } = require('..')

describe('Morsee', () => {
  describe('to encode', () => {
    it('should return the correspondent latin char in morse dictionary', () => {
      assert.strictEqual(encode('h'), toMorse.h)
    })

    it('should return a word, with chars splitted by blank spaces', () => {
      assert.strictEqual(encode('hi'), `${toMorse.h} ${toMorse.i}`)
    })

    it('should return a sentence, with words splitted by slashes', () => {
      assert.strictEqual(
        encode('hi friend'),
        `${toMorse.h} ${toMorse.i} ${toMorse[' ']} ${toMorse.f} ${toMorse.r} ${toMorse.i} ${toMorse.e} ${toMorse.n} ${toMorse.d}`
      )
    })

    it('should return punctuation chars', () => {
      assert.strictEqual(
        encode('hi!'),
        `${toMorse.h} ${toMorse.i} ${toMorse['!']}`
      )
    })

    it('should return a new line char', () => {
      assert.strictEqual(
        encode('h\ni'),
        `${toMorse.h} ${toMorse['\n']} ${toMorse.i}`
      )
    })
  })

  describe('to decode', () => {
    it('should return the correspondent morse char in latin dictionary', () => {
      assert.strictEqual(decode('....'), 'h')
    })

    it('should return a word', () => {
      assert.strictEqual(decode('.... ..'), 'hi')
    })

    it('should return a sentence, with words splitted by blank spaces', () => {
      assert.strictEqual(decode('.... .. / ..-. .-. .. . -. -..'), 'hi friend')
    })

    it('should return punctuation chars', () => {
      assert.strictEqual(decode('.... .. -.-.--'), 'hi!')
    })

    it('should return a new line char', () => {
      assert.strictEqual(decode('.... .-.- ..'), 'h\ni')
    })
  })
})
