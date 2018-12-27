const letters = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
}

const digits = {
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
}

const specials = {
  ' ': '/',
}

const toMorse = {
  ...letters,
  ...digits,
  ...specials,
}

const fromMorse = Object.keys(toMorse)
  .reduce((obj, char) => ({ ...obj, [toMorse[char]]: char }), {})

module.exports = {
  toMorse,
  fromMorse,
}
