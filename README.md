# Morsee

is an encoder decoder of morse code written in javascript without dependencies

<p>
  <a href="https://npmjs.org/package/morsee"><img alt="NPM version" src="https://img.shields.io/npm/v/morsee.svg?style=flat-square" /></a>
  <a href="https://travis-ci.org/gabrielfurini/morsee"><img alt="Build Status" src="https://api.travis-ci.com/gabrielfurini/morsee.svg" /></a>
  <a href="https://codecov.io/gh/gabrielfurini/morsee/branch/master"><img alt="Coverage Status" src="https://img.shields.io/codecov/c/github/gabrielfurini/morsee/master.svg?style=flat-square" /></a>
  <a href="https://npmjs.org/package/morsee"><img alt="Total downloads" src="https://img.shields.io/npm/dt/morsee.svg" /></a>
</p>

## Installation

### npm

```bash
$ npm install morsee --save
```

### yarn

```bash
$ yarn add morsee
```

## Usage

```js
const { encode, decode } = require('morsee');

const encoded = encode('hello world');
// .... . .-.. .-.. ---     .-- --- .-. .-.. -..

const decoded = decode('.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
// hello world
```

## License
The MIT License (MIT). Please see [License File](LICENSE) for more information.
