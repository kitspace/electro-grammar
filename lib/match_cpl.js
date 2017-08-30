'use strict';

var resistors = require('./cpl_resistors');
var capacitors = require('./cpl_capacitors');
var leds = require('./cpl_leds');

function matchCPL(component) {
  component = component || {};
  switch (component.type) {
    case 'capacitor':
      return matchCapacitor(component);
    case 'resistor':
      return matchResistor(component);
    case 'led':
      return matchLED(component);
  }
  return [];
}

function matchResistor(c) {
  return resistors.reduce(function (prev, cpl) {
    var resistance = cpl.resistance === c.resistance;
    var size = c.size == null || cpl.size === c.size;
    var tolerance = c.tolerance == null || cpl.tolerance <= c.tolerance;
    var power_rating = c.power_rating == null || cpl.power_rating >= c.power_rating;
    if (resistance && size && tolerance && power_rating) {
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

function matchLED(c) {
  return leds.reduce(function (prev, cpl) {
    var led_color = cpl.led_color === c.led_color;
    var size = c.size == null || cpl.size === c.size;
    if (led_color && size) {
      return prev.concat([cpl.cplid]);
    }
    return prev;
  }, []);
}

module.exports = matchCPL;