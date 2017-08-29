# NPM module for parsing electronic component descriptions

This is a parser using [Nearley](http://nearley.js.org/) that defines a grammar for describing generic electronic components such as surface mount resistors and capacitors.

```js
> parseElectronicComponent = require('parse-electronic-component')
```
Parses capacitance, package size, characteristic, tolerance and voltage rating for capacitors.

```js
> parseElectronicComponent('100nF 0603 C0G 10% 25V')
{ capacitance: 1e-7,
  size: '0603',
  characteristic: 'C0G',
  tolerance: 10,
  voltage_rating: 25 }
```

Converts all units to floating point numbers.

```js
> parseElectronicComponent('0.1uF 0603')
{ capacitance: 1e-7, size: '0603' }
```

Parses resistance, size and tolerance for resistors.

```js
> parseElectronicComponent('1k 0805 5%')
{ resistance: 1000, size: '0805', tolerance: 5 }
```
You can use metric package sizes as long as you specify.
Output for package sizes is always in imperial.

```js
> parseElectronicComponent('1k metric 0603')
{ resistance: 1000, size: '0201' }
> parseElectronicComponent('1k 0603 metric')
{ resistance: 1000, size: '0201' }
```

Text that is not part of the grammar is simply ignored.

```js
> parseElectronicComponent('these words 1k are ignored 0805')
{ resistance: 1000, size: '0805' }
```
