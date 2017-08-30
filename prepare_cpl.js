const yaml    = require('js-yaml')
const fs      = require('fs')
const {parse} = require('./src/index')

let resistors = fs.readFileSync('./cpl-data/CPL for Production/Resistors.yaml')
resistors = yaml.safeLoad(resistors)
resistors = resistors.rows.map(r => {
  //ignore potentiometers and resistor arrays
  if (!/RES/.test(r.cplid)) {
    return
  }
  const v = parse(r.title)
  if (v) {
    v.cplid = r.cplid
    return v
  }
}).filter(v => v)
resistors = JSON.stringify(resistors, null, 2)
fs.writeFileSync('./src/cpl_resistors.json', resistors)
fs.writeFileSync('./lib/cpl_resistors.json', resistors)

let capacitors = fs.readFileSync('./cpl-data/CPL for Production/Capacitors.yaml')
capacitors = yaml.safeLoad(capacitors)
capacitors = capacitors.rows.map(c => {
  const v = parse(`${c.title} ${c.extravals.Characteristic}`)
  if (v) {
    v.cplid = c.cplid
    return v
  }
}).filter(v => v)
capacitors = JSON.stringify(capacitors, null, 2)
fs.writeFileSync('./src/cpl_capacitors.json', capacitors)
fs.writeFileSync('./lib/cpl_capacitors.json', capacitors)
