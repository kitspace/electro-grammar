# NPM module for parsing electronic component descriptions

This is a parser using [Nearley](http://nearley.js.org/) that defines a grammar for describing generic electronic components such as surface mount resistors and capacitors.

```js
const parseElectronicComponent = require('parse-electronic-component')

const c = parseElectronicComponent('100nF 0603 C0G 10%')
assert(c.capacitance    === 100e-9)
assert(c.size           === '0603')
assert(c.characteristic === 'C0G')
assert(c.tolerance      === 10)

const r = parseElectronicComponent('1k 0805 5%')
assert(r.resistance === 1000)
assert(r.size       === '0805')
assert(r.tolerance  === 5)
```
