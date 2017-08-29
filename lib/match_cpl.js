'use strict';

var resistors = require('./cpl_resistors');
var capacitors = require('./cpl_capacitors');

function matchCPL(component) {
  if (component.capacitance != null) {
    return matchCapacitor(component);
  } else if (component.resistance != null) {
    return matchResistor(component);
  }
  return [];
}

function matchResistor(c) {
  return resistors.reduce(function (prev, cpl) {
    var resistance = cpl.resistance === c.resistance;
    var size = c.size == null || cpl.size === c.size;
    var tolerance = c.tolerance == null || cpl.tolerance <= c.tolerance;
    if (resistance && size && tolerance) {
      return prev.concat([cpl.cplid]);
    }
    return prev;
  }, []);
}

function matchCapacitor(c) {
  return capacitors.reduce(function (prev, cpl) {
    var capacitance = cpl.capacitance === c.capacitance;
    var size = c.size == null || cpl.size === c.size;
    var characteristic = c.characteristic == null || cpl.characteristic === c.characteristic;
    var tolerance = c.tolerance == null || cpl.tolerance <= c.tolerance;
    var voltage_rating = c.voltage_rating == null || cpl.voltage_rating >= c.voltage_rating;
    if (capacitance && size && characteristic && tolerance && voltage_rating) {
      return prev.concat([cpl.cplid]);
    }
    return prev;
  }, []);
}

module.exports = matchCPL;