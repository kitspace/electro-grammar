const yaml  = require('js-yaml')
const fs    = require('fs')
const parse = require('./src/parse')

let resistors = fs.readFileSync('./cpl-data/CPL for Production/Resistors.yaml')
resistors = yaml.safeLoad(resistors)
resistors = resistors.rows.map(r => {
  //ignore potentiometers and resistor arrays
  if (!/RES/.test(r.cplid)) {
    return
  }
  const v = parse(r.title)
  if (v.type === 'resistor') {
    v.cplid = r.cplid
    return v
  }
}).filter(v => v)
resistors = JSON.stringify(resistors, null, 2)
fs.writeFileSync('./lib/cpl_resistors.json', resistors)

let capacitors = fs.readFileSync('./cpl-data/CPL for Production/Capacitors.yaml')
capacitors = yaml.safeLoad(capacitors)
capacitors = capacitors.rows.map(c => {
  const v = parse(`${c.title} ${c.extravals.Characteristic}`)
  if (v.type === 'capacitor') {
    v.cplid = c.cplid
    return v
  }
}).filter(v => v)
capacitors = JSON.stringify(capacitors, null, 2)
fs.writeFileSync('./lib/cpl_capacitors.json', capacitors)

let leds = fs.readFileSync('./cpl-data/CPL for Production/LEDs.yaml')
leds = yaml.safeLoad(leds)
leds = leds.rows.map(c => {
  const v = parse(c.title)
  if (v.type === 'led') {
    v.cplid = c.cplid
    return v
  }
}).filter(v => v)
leds = JSON.stringify(leds, null, 2)
fs.writeFileSync('./lib/cpl_leds.json', leds)
