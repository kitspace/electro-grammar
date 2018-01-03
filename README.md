# Electro Grammar Next

## Goals

- Parse descriptions of common electronic components
  - Primary:
    - Resistors
    - Capacitors
    - LEDs
  - Secondary
    - Inductors
    - Transistors
  - Tertiary:
    - Try and cover the [Common Parts Library][CPL]
- Be usable from multiple languages:
  - Primary:
    - Javascript (Browser & Node)
    - Python
    - Go
    - Java
  - Optional:
    - Rust
    - Haskell

## Output Details
In as much as possible the output should match that of the existing JS implementation except for:

- Unused i.e. ignored input should be returned. I made a [demo]( http://cloud.monostable.co.uk/egignore/) of an initial implementation but we need to change the lexing strategy to eek out th edge cases
- The grammar itself should work on "incomplete" descriptions i.e. component specs. E.g. the input `50V` should result in `{voltage_rating: 50}`.
- `size` should be renamed to `package`
- `characteristic` should be renamed to `dielectric` or `capacitor_dielectric`


## Open Questions

- Is floating point a good unit for capcitance, resistance e.t.c.? I noticed some floating point errors in the Python port when using them for calculation. What's a good alternative?
- Should we use Antlr or Pest or something else?
- Should we align the types with Octopart's taxonomy? (e.g. browsing parts from https://octopart.com)

---

# Electro Grammar [![Build Status][BADGE]][BUILD]

[![Sauce Test Status](https://saucelabs.com/browser-matrix/electro-grammar.svg)](https://saucelabs.com/u/electro-grammar)

This is a parser using [Nearley](http://nearley.js.org/) that defines a grammar for describing generic electronic components such as surface mount resistors, capacitors and LEDs.
A function to match the result to parts in the [Common Parts Library][CPL] is also provided.

```js
const {parse, matchCPL} = require('electro-grammar')
```
[:zap: demo](https://monostable.github.io/electro-grammar/)

## Parsing

### Capacitors
Parses capacitance, package size, characteristic, tolerance and voltage rating for capacitors.

```js
> parse('100nF 0603 C0G 10% 25V').component
{ type: 'capacitor',
  capacitance: 1e-7,
  size: '0603',
  characteristic: 'C0G',
  tolerance: 10,
  voltage_rating: 25 }
```

For [class 1][CLASS-1] ceramic names and EIA letter codes are understood.
For [class 2][CLASS-2] only EIA letter codes are understood.
In both cases only EIA letter codes are returned.

```js
> parse('10pF C0G/NP0').component
{ type: 'capacitor', capacitance: 1e-11, characteristic: 'C0G' }
> parse('10pF NP0').component
{ type: 'capacitor', capacitance: 1e-11, characteristic: 'C0G' }
> parse('10pF X7R').component
{ type: 'capacitor', capacitance: 1e-11, characteristic: 'X7R' }
```

### Resistors
Parses resistance, package size, tolerance and power rating for resistors.

```js
> parse('1k 0805 5% 125mW').component
{ type: 'resistor',
  resistance: 1000,
  size: '0805',
  tolerance: 5,
  power_rating: 0.125 }
```

Electro-grammar supports several different ways to express resistance.

```js
> parse('1.5k').component
{ type: 'resistor', resistance: 1500 }
> parse('1k5').component
{ type: 'resistor', resistance: 1500 }
> parse('500R').component
{ type: 'resistor', resistance: 500 }
> parse('1500 ohm').component
{ type: 'resistor', resistance: 1500 }
> parse('1500.0 ohm').component
{ type: 'resistor', resistance: 1500 }
> parse('1500 Ω').component
{ type: 'resistor', resistance: 1500 }
```

### LEDs

LEDs need to include the word 'LED' or 'led'.

```js
> parse('LED red').component
{ type: 'led', color: 'red' }
> parse('LED 0603').component
{ type: 'led', size: '0603' }
> parse('green led 1206').component
{ type: 'led', color: 'green', size: '1206' }
```


### Parsing Details

Converts all units to floating point numbers.

```js
> parse('100nF').component
{ type: 'capacitor', capacitance: 1e-7 }
> parse('0.1uF').component
{ type: 'capacitor', capacitance: 1e-7 }
```

The order of the terms doesn't matter.

```js
> parse('1% 0603 1uF').component
{ type: 'capacitor'
  capacitance: 0.000001,
  tolerance: 1,
  size: "0603" }
> parse('0603 1% 1uF').component
{ type: 'capacitor',
  capacitance: 0.000001,
  tolerance: 1,
  size: "0603" }
```

If no match is found component is an empty object.

```js
> parse('').component
{ component: {}, ignored: '' }
> parse('NE555P').component
{ component: {}, ignored: 'NE555P' }
```

Invalid input types will throw.

```js
> parse({})
TypeError: str.split is not a function
```

Any text not recognized as part of the grammar is returned in the ignored field.

```js
> parse('NE555P 1uF')
{ component: { type: 'capacitor', capacitance: 0.000001 },
  ignored: 'NE555P' }
> parse('these words 1k are ignored 0805')
{ component: { type: 'resistor', resistance: 1000, size: '0805' },
  ignored: 'these words are ignored' }
```

You can use metric package sizes but if it's ambigious you have to make it clear by using the `metric` keyword. Output for package sizes is always in imperial.

```js
> parse('1k 1608').component
{ type: 'resistor', resistance: 1000, size: '0603' }
> parse('1k metric 0603').component
{ type: 'resistor', resistance: 1000, size: '0201' }
> parse('1k 0603 metric').component
{ type: 'resistor', resistance: 1000, size: '0201' }
```

## CPL Matching
`matchCPL` tries to find as many matches as it can from the [Common Parts Library][CPL] and returns an array of CPL IDs.
You could match these against [CPL data][CPL-DATA] or search for them on Octopart to get exact part numbers.
If no matches are found or the function is given invalid input an empty array is returned.

```js
> c = parse('0.1uF 0805 25V').component
{ type: 'capacitor',
  capacitance: 1e-7,
  size: '0805',
  voltage_rating: 25 }
> matchCPL(c)
[ 'CPL-CAP-X7R-0805-100NF-50V' ]

> r = parse('10k 0603').component
{ type: 'resistor', resistance: 10000, size: '0603' }
> matchCPL(r)
[ 'CPL-RES-0603-10K-0.1W' ]

> // I don't think it's possible to make such a resistor
> r = parse('1k 1000000W').component
{ type: 'resistor', resistance: 1000, power_rating: 1000000 }
> matchCPL(r)
[]

> matchCPL({invalid: 'input'})
[]

> matchCPL(null)
[]
```

[CPL]: https://octopart.com/common-parts-library#Resistors
[CPL-DATA]: https://github.com/octopart/CPL-Data
[BADGE]: https://travis-ci.org/monostable/electro-grammar.svg?branch=master
[BUILD]: https://travis-ci.org/monostable/electro-grammar
[CLASS-1]: https://en.wikipedia.org/wiki/Ceramic_capacitor#Class_1_ceramic_capacitors
[CLASS-2]: https://en.wikipedia.org/wiki/Ceramic_capacitor#Class_2_ceramic_capacitors
