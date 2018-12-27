# Morsee

is an encoder decoder of morse code written in javascript without dependencies

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

const encoded = encode('Hello World');
// .... . .-.. .-.. ---     .-- --- .-. .-.. -..

const decoded = decode('.... . .-.. .-.. ---     .-- --- .-. .-.. -..');
// Hello World
```

## License
The MIT License (MIT). Please see [License File](LICENSE) for more information.
