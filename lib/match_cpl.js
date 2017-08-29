'use strict';

var resistors = require('./cpl_resistors');
var capacitors = require('./cpl_capacitors');

function matchCPL(component) {
  if (component.capacitance != null) {
    return matchCapacitor(component);
  } else if (component.resistance != null) {
    return matchResistor(component);
  }
  return '';
}

function matchResistor(c) {
  return '';
}

function matchCapacitor(c) {
  return '';
}

module.exports = matchCPL;