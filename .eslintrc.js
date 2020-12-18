module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    node: true,
    mocha: true,
  },
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single', { avoidEscape: true }],
  },
}
