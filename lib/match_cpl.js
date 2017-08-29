'use strict';

var resistors = require('./cpl_resistors');
var capacitors = require('./cpl_capacitors');

function matchCPL(component) {
  if (component.capacitance != null) {
    return matchCapacitor(component);
  } else if (component.resistance != null) {
    var r = matchResistor(component);
    console.log(r);
    return r;
  }
  return [];
}

function matchResistor(c) {
  console.log(c);
  return resistors.reduce(function (prev, cpl_part) {
    console.log(cpl_part);
    var resistance = cpl_part.resistance === c.resistance;
    var size = cpl_part.size === c.size;
    var tolerance = cpl_part.tolerance >= c.tolerance;
    if (resistance && size && tolerance) {
      return prev.concat([cpl_part.cplid]);
    }
    return prev;
  }, []);
}

function matchCapacitor(c) {
  return [];
}

module.exports = matchCPL;