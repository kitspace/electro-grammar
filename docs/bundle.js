(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var electroGrammar = require('../lib/index')

var parse    = electroGrammar.parse
var matchCPL = electroGrammar.matchCPL

var input     = document.getElementById('input')
var component = document.getElementById('component')
var cplids    = document.getElementById('cplids')

function setOutput() {
  var c = parse(input.value || input.placeholder)
  component.innerHTML = JSON.stringify(c, null, 2)
  cplids.innerHTML    = JSON.stringify(matchCPL(c), null, 2)
}

setOutput()
input.oninput = setOutput

},{"../lib/index":7}],2:[function(require,module,exports){
module.exports=[
  {
    "capacitance": 1e-12,
    "type": "capacitor",
    "voltage_rating": 50,
    "size": "0402",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0402-1PF-50V"
  },
  {
    "capacitance": 1e-12,
    "type": "capacitor",
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-1PF-50V"
  },
  {
    "capacitance": 1e-11,
    "type": "capacitor",
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0402",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0402-10PF-50V"
  },
  {
    "capacitance": 1e-11,
    "type": "capacitor",
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-10PF-50V"
  },
  {
    "capacitance": 1.2e-11,
    "type": "capacitor",
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-12PF-50V"
  },
  {
    "capacitance": 1.8e-11,
    "type": "capacitor",
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-18PF-50V"
  },
  {
    "capacitance": 2.2e-11,
    "type": "capacitor",
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0402",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0402-22PF-50V"
  },
  {
    "capacitance": 2.2e-11,
    "type": "capacitor",
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-22PF-50V"
  },
  {
    "capacitance": 2.7e-11,
    "type": "capacitor",
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-27PF-50V"
  },
  {
    "capacitance": 3.3e-11,
    "type": "capacitor",
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-33PF-50V"
  },
  {
    "capacitance": 1e-10,
    "type": "capacitor",
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-100PF-50V"
  },
  {
    "capacitance": 2.2e-10,
    "type": "capacitor",
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-220PF-50V"
  },
  {
    "capacitance": 1e-9,
    "type": "capacitor",
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-1NF-50V"
  },
  {
    "capacitance": 1e-9,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0402",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0402-1NF-50V"
  },
  {
    "capacitance": 1e-9,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-1NF-50V"
  },
  {
    "capacitance": 4.7e-9,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-4.7NF-50V"
  },
  {
    "capacitance": 1e-8,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0402",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0402-10NF-50V"
  },
  {
    "capacitance": 1e-8,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-10NF-50V"
  },
  {
    "capacitance": 2.2e-8,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-22NF-50V"
  },
  {
    "capacitance": 4.7e-8,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-47NF-50V"
  },
  {
    "capacitance": 1e-7,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "0402",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0402-100NF-16V"
  },
  {
    "capacitance": 1e-7,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-100NF-50V"
  },
  {
    "capacitance": 1e-7,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0805",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0805-100NF-50V"
  },
  {
    "capacitance": 2.2e-7,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-220NF-16V"
  },
  {
    "capacitance": 0.000001,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 6.3,
    "size": "0402",
    "characteristic": "X5R",
    "cplid": "CPL-CAP-X5R-0402-1UF-6.3V"
  },
  {
    "capacitance": 0.000001,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 25,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-1UF-25V"
  },
  {
    "capacitance": 0.000001,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 25,
    "size": "0805",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0805-1UF-25V"
  },
  {
    "capacitance": 0.0000047,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 10,
    "size": "0603",
    "characteristic": "X5R",
    "cplid": "CPL-CAP-X5R-0603-4.7UF-10V"
  },
  {
    "capacitance": 0.0000047,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 25,
    "size": "0805",
    "characteristic": "X5R",
    "cplid": "CPL-CAP-X5R-0805-4.7UF-25V"
  },
  {
    "capacitance": 0.00001,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "0805",
    "characteristic": "X5R",
    "cplid": "CPL-CAP-X5R-0805-10UF-16V"
  },
  {
    "capacitance": 0.000022,
    "type": "capacitor",
    "tolerance": 20,
    "voltage_rating": 6.3,
    "size": "0805",
    "characteristic": "X5R",
    "cplid": "CPL-CAP-X5R-0805-22UF-6.3V"
  },
  {
    "capacitance": 0.0001,
    "type": "capacitor",
    "tolerance": 20,
    "voltage_rating": 6.3,
    "size": "1206",
    "characteristic": "X5R",
    "cplid": "CPL-CAP-X5R-1206-100UF-6.3V"
  },
  {
    "capacitance": 0.000001,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 35,
    "size": "1206",
    "cplid": "CPL-CAP-TAN-1206-1UF-35V"
  },
  {
    "capacitance": 0.0000047,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "1206",
    "cplid": "CPL-CAP-TAN-1206-4.7UF-16V"
  },
  {
    "capacitance": 0.00001,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "1206",
    "cplid": "CPL-CAP-TAN-1206-10UF-16V"
  },
  {
    "capacitance": 0.00001,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "1210",
    "cplid": "CPL-CAP-TAN-1210-10UF-16V"
  },
  {
    "capacitance": 0.000022,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "1210",
    "cplid": "CPL-CAP-TAN-1210-22UF-16V"
  },
  {
    "capacitance": 0.000047,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 16,
    "cplid": "CPL-CAP-TAN-2312-47UF-16V"
  },
  {
    "capacitance": 0.0001,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 16,
    "cplid": "CPL-CAP-TAN-2312-100UF-16V"
  },
  {
    "capacitance": 0.0001,
    "type": "capacitor",
    "tolerance": 10,
    "voltage_rating": 10,
    "cplid": "CPL-CAP-TAN-2312-100UF-10V"
  },
  {
    "capacitance": 0.0000022,
    "type": "capacitor",
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-2.2UF-50V"
  },
  {
    "capacitance": 0.0000047,
    "type": "capacitor",
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-4.7UF-50V"
  },
  {
    "capacitance": 0.00001,
    "type": "capacitor",
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-10UF-50V"
  },
  {
    "capacitance": 0.000022,
    "type": "capacitor",
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-22UF-50V"
  },
  {
    "capacitance": 0.000047,
    "type": "capacitor",
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-47UF-50V"
  },
  {
    "capacitance": 0.0001,
    "type": "capacitor",
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-100UF-50V"
  },
  {
    "capacitance": 0.00022,
    "type": "capacitor",
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-220UF-50V"
  },
  {
    "capacitance": 0.00047,
    "type": "capacitor",
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-470UF-50V"
  },
  {
    "capacitance": 0.001,
    "type": "capacitor",
    "tolerance": 20,
    "voltage_rating": 25,
    "cplid": "CPL-CAP-ALU-RAD-1000UF-25V"
  }
]
},{}],3:[function(require,module,exports){
module.exports=[
  {
    "color": "green",
    "type": "led",
    "size": "0603",
    "cplid": "CPL-LED-0603-GREEN"
  },
  {
    "color": "red",
    "type": "led",
    "size": "0603",
    "cplid": "CPL-LED-0603-RED"
  },
  {
    "color": "yellow",
    "type": "led",
    "size": "0603",
    "cplid": "CPL-LED-0603-YELLOW"
  },
  {
    "color": "orange",
    "type": "led",
    "size": "0603",
    "cplid": "CPL-LED-0603-ORANGE"
  },
  {
    "color": "amber",
    "type": "led",
    "size": "0603",
    "cplid": "CPL-LED-0603-AMBER"
  },
  {
    "color": "blue",
    "type": "led",
    "size": "0603",
    "cplid": "CPL-LED-0603-BLUE"
  },
  {
    "color": "white",
    "type": "led",
    "size": "0603",
    "cplid": "CPL-LED-0603-WHITE"
  }
]
},{}],4:[function(require,module,exports){
module.exports=[
  {
    "resistance": 0,
    "type": "resistor",
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-0-0.063W"
  },
  {
    "resistance": 0,
    "type": "resistor",
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-0-0.1W"
  },
  {
    "resistance": 0,
    "type": "resistor",
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-0-0.125W"
  },
  {
    "resistance": 0,
    "type": "resistor",
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-0-0.25W"
  },
  {
    "resistance": 10,
    "type": "resistor",
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-10-0.063W"
  },
  {
    "resistance": 10,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-10-0.1W"
  },
  {
    "resistance": 10,
    "type": "resistor",
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-10-0.125W"
  },
  {
    "resistance": 10,
    "type": "resistor",
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-10-0.25W"
  },
  {
    "resistance": 12,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-12-0.1W"
  },
  {
    "resistance": 15,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-15-0.1W"
  },
  {
    "resistance": 22,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-22-0.1W"
  },
  {
    "resistance": 33.2,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-33.2-0.1W"
  },
  {
    "resistance": 47,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-47-0.1W"
  },
  {
    "resistance": 49.9,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-49.9-0.1W"
  },
  {
    "resistance": 56.2,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-56.2-0.1W"
  },
  {
    "resistance": 68.1,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-68.1-0.1W"
  },
  {
    "resistance": 75,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-75-0.1W"
  },
  {
    "resistance": 82.5,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-82.5-0.1W"
  },
  {
    "resistance": 100,
    "type": "resistor",
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-100-0.063W"
  },
  {
    "resistance": 100,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-100-0.1W"
  },
  {
    "resistance": 100,
    "type": "resistor",
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-100-0.125W"
  },
  {
    "resistance": 100,
    "type": "resistor",
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-100-0.25W"
  },
  {
    "resistance": 120,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-120-0.1W"
  },
  {
    "resistance": 150,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-150-0.1W"
  },
  {
    "resistance": 220,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-220-0.1W"
  },
  {
    "resistance": 330,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-330-0.1W"
  },
  {
    "resistance": 390,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-390-0.1W"
  },
  {
    "resistance": 470,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-470-0.1W"
  },
  {
    "resistance": 560,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-560-0.1W"
  },
  {
    "resistance": 681,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-681-0.1W"
  },
  {
    "resistance": 820,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-820-0.1W"
  },
  {
    "resistance": 1000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-1K-0.063W"
  },
  {
    "resistance": 1000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-1K-0.1W"
  },
  {
    "resistance": 1000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-1K-0.125W"
  },
  {
    "resistance": 1000,
    "type": "resistor",
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-1K-0.25W"
  },
  {
    "resistance": 1200,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-1.2K-0.1W"
  },
  {
    "resistance": 1500,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-1.5K-0.1W"
  },
  {
    "resistance": 2000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-2K-0.1W"
  },
  {
    "resistance": 3300,
    "type": "resistor",
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0603-3.3K-0.1W"
  },
  {
    "resistance": 3300,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-3.3K-0.1W"
  },
  {
    "resistance": 3300,
    "type": "resistor",
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0603-3.3K-0.1W"
  },
  {
    "resistance": 3300,
    "type": "resistor",
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-0603-3.3K-0.1W"
  },
  {
    "resistance": 3600,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-3.6K-0.1W"
  },
  {
    "resistance": 4700,
    "type": "resistor",
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-4.7K-0.063W"
  },
  {
    "resistance": 4700,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-4.7K-0.1W"
  },
  {
    "resistance": 4700,
    "type": "resistor",
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-4.7K-0.125W"
  },
  {
    "resistance": 4700,
    "type": "resistor",
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-4.7K-0.25W"
  },
  {
    "resistance": 5600,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-5.6K-0.1W"
  },
  {
    "resistance": 6800,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-6.8K-0.1W"
  },
  {
    "resistance": 8200,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-8.2K-0.1W"
  },
  {
    "resistance": 10000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-10K-0.063W"
  },
  {
    "resistance": 10000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-10K-0.1W"
  },
  {
    "resistance": 10000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-10K-0.125W"
  },
  {
    "resistance": 10000,
    "type": "resistor",
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-10K-0.25W"
  },
  {
    "resistance": 12000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-12K-0.1W"
  },
  {
    "resistance": 15000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-15K-0.1W"
  },
  {
    "resistance": 22000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-22K-0.1W"
  },
  {
    "resistance": 33200,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-33.2K-0.1W"
  },
  {
    "resistance": 47000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-47K-0.1W"
  },
  {
    "resistance": 56200,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-56.2K-0.1W"
  },
  {
    "resistance": 68100,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-68.1K-0.1W"
  },
  {
    "resistance": 82500,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-82.5K-0.1W"
  },
  {
    "resistance": 100000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-100K-0.063W"
  },
  {
    "resistance": 100000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-100K-0.1W"
  },
  {
    "resistance": 100000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-100K-0.125W"
  },
  {
    "resistance": 100000,
    "type": "resistor",
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-100K-0.25W"
  },
  {
    "resistance": 120000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-120K-0.1W"
  },
  {
    "resistance": 150000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-150K-0.1W"
  },
  {
    "resistance": 220000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-220K-0.1W"
  },
  {
    "resistance": 332000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-332K-0.1W"
  },
  {
    "resistance": 470000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-470K-0.1W"
  },
  {
    "resistance": 562000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-562K-0.1W"
  },
  {
    "resistance": 681000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-681K-0.1W"
  },
  {
    "resistance": 825000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-825K-0.1W"
  },
  {
    "resistance": 1000000,
    "type": "resistor",
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-1M-0.1W"
  },
  {
    "resistance": 0.05,
    "type": "resistor",
    "tolerance": 1,
    "size": "1206",
    "power_rating": 1,
    "cplid": "CPL-RES-1206-0.05-1W"
  }
]
},{}],5:[function(require,module,exports){
/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function (arr) {
  return flat(arr, []);
};

function flat(arr, res) {
  var i = 0,
      cur;
  var len = arr.length;
  for (; i < len; i++) {
    cur = arr[i];
    Array.isArray(cur) ? flat(cur, res) : res.push(cur);
  }
  return res;
}
},{}],6:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
    function id(x) {
        return x[0];
    }

    var flatten = require('./flatten');

    var filter = function filter(d) {
        return d.filter(function (token) {
            return token !== null;
        });
    };

    var assignAll = function assignAll(objs) {
        return objs.reduce(function (prev, obj) {
            return Object.assign(prev, obj);
        });
    };

    var toImperial = {
        '0402': '01005',
        '0603': '0201',
        '1005': '0402',
        '1608': '0603',
        '2012': '0805',
        '2520': '1008',
        '3216': '1206',
        '3225': '1210',
        '4516': '1806',
        '4532': '1812',
        '5025': '2010',
        '6332': '2512'
    };

    function type_capacitor(d) {
        return d.concat([{ type: 'capacitor' }]);
    }
    function type_resistor(d) {
        return d.concat([{ type: 'resistor' }]);
    }
    function type_led(d) {
        return d.concat([{ type: 'led' }]);
    }

    function capacitance(d) {
        var _d = _slicedToArray(d, 5),
            quantity = _d[0],
            metricPrefix = _d[2],
            farad = _d[4];

        return { capacitance: parseFloat('' + quantity + metricPrefix) };
    }

    function resistance(d, i, reject) {
        var _d2 = _slicedToArray(d, 3),
            integral = _d2[0],
            _d2$ = _slicedToArray(_d2[2], 3),
            metricPrefix = _d2$[0],
            fractional = _d2$[1],
            ohm = _d2$[2];

        if (fractional) {
            if (/\./.test(integral.toString())) {
                return reject;
            }
            var quantity = integral + '.' + fractional;
        } else {
            var quantity = integral;
        }
        return { resistance: parseFloat('' + quantity + metricPrefix) };
    }
    var grammar = {
        Lexer: undefined,
        ParserRules: [{ "name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/] }, { "name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": function postprocess(d) {
                return parseInt(d[0].join(""));
            }
        }, { "name": "int$ebnf$1$subexpression$1", "symbols": [{ "literal": "-" }] }, { "name": "int$ebnf$1$subexpression$1", "symbols": [{ "literal": "+" }] }, { "name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id }, { "name": "int$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "int$ebnf$2", "symbols": [/[0-9]/] }, { "name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": function postprocess(d) {
                if (d[0]) {
                    return parseInt(d[0][0] + d[1].join(""));
                } else {
                    return parseInt(d[1].join(""));
                }
            }
        }, { "name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/] }, { "name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/] }, { "name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{ "literal": "." }, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"] }, { "name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id }, { "name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": function postprocess(d) {
                return parseFloat(d[0].join("") + (d[1] ? "." + d[1][1].join("") : ""));
            }
        }, { "name": "decimal$ebnf$1", "symbols": [{ "literal": "-" }], "postprocess": id }, { "name": "decimal$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "decimal$ebnf$2", "symbols": [/[0-9]/] }, { "name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/] }, { "name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "decimal$ebnf$3$subexpression$1", "symbols": [{ "literal": "." }, "decimal$ebnf$3$subexpression$1$ebnf$1"] }, { "name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id }, { "name": "decimal$ebnf$3", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": function postprocess(d) {
                return parseFloat((d[0] || "") + d[1].join("") + (d[2] ? "." + d[2][1].join("") : ""));
            }
        }, { "name": "percentage", "symbols": ["decimal", { "literal": "%" }], "postprocess": function postprocess(d) {
                return d[0] / 100;
            }
        }, { "name": "jsonfloat$ebnf$1", "symbols": [{ "literal": "-" }], "postprocess": id }, { "name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/] }, { "name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/] }, { "name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{ "literal": "." }, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"] }, { "name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id }, { "name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id }, { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/] }, { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"] }, { "name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id }, { "name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": function postprocess(d) {
                return parseFloat((d[0] || "") + d[1].join("") + (d[2] ? "." + d[2][1].join("") : "") + (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : ""));
            }
        }, { "name": "_$ebnf$1", "symbols": [] }, { "name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "_", "symbols": ["_$ebnf$1"], "postprocess": function postprocess() {
                return null;
            } }, { "name": "__$ebnf$1", "symbols": [/[\s]/] }, { "name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "__", "symbols": ["__$ebnf$1"], "postprocess": function postprocess() {
                return null;
            } }, { "name": "A", "symbols": [{ "literal": "A" }] }, { "name": "A", "symbols": [{ "literal": "a" }] }, { "name": "B", "symbols": [{ "literal": "B" }] }, { "name": "B", "symbols": [{ "literal": "b" }] }, { "name": "C", "symbols": [{ "literal": "C" }] }, { "name": "C", "symbols": [{ "literal": "c" }] }, { "name": "D", "symbols": [{ "literal": "D" }] }, { "name": "D", "symbols": [{ "literal": "d" }] }, { "name": "E", "symbols": [{ "literal": "E" }] }, { "name": "E", "symbols": [{ "literal": "e" }] }, { "name": "F", "symbols": [{ "literal": "F" }] }, { "name": "F", "symbols": [{ "literal": "f" }] }, { "name": "G", "symbols": [{ "literal": "G" }] }, { "name": "G", "symbols": [{ "literal": "g" }] }, { "name": "H", "symbols": [{ "literal": "H" }] }, { "name": "H", "symbols": [{ "literal": "h" }] }, { "name": "I", "symbols": [{ "literal": "I" }] }, { "name": "I", "symbols": [{ "literal": "i" }] }, { "name": "J", "symbols": [{ "literal": "J" }] }, { "name": "J", "symbols": [{ "literal": "j" }] }, { "name": "K", "symbols": [{ "literal": "K" }] }, { "name": "K", "symbols": [{ "literal": "k" }] }, { "name": "L", "symbols": [{ "literal": "L" }] }, { "name": "L", "symbols": [{ "literal": "l" }] }, { "name": "M", "symbols": [{ "literal": "M" }] }, { "name": "M", "symbols": [{ "literal": "m" }] }, { "name": "N", "symbols": [{ "literal": "N" }] }, { "name": "N", "symbols": [{ "literal": "n" }] }, { "name": "O", "symbols": [{ "literal": "O" }] }, { "name": "O", "symbols": [{ "literal": "o" }] }, { "name": "P", "symbols": [{ "literal": "P" }] }, { "name": "P", "symbols": [{ "literal": "p" }] }, { "name": "Q", "symbols": [{ "literal": "Q" }] }, { "name": "Q", "symbols": [{ "literal": "q" }] }, { "name": "R", "symbols": [{ "literal": "R" }] }, { "name": "R", "symbols": [{ "literal": "r" }] }, { "name": "S", "symbols": [{ "literal": "S" }] }, { "name": "S", "symbols": [{ "literal": "s" }] }, { "name": "T", "symbols": [{ "literal": "T" }] }, { "name": "T", "symbols": [{ "literal": "t" }] }, { "name": "U", "symbols": [{ "literal": "U" }] }, { "name": "U", "symbols": [{ "literal": "u" }] }, { "name": "V", "symbols": [{ "literal": "V" }] }, { "name": "V", "symbols": [{ "literal": "v" }] }, { "name": "W", "symbols": [{ "literal": "W" }] }, { "name": "W", "symbols": [{ "literal": "w" }] }, { "name": "X", "symbols": [{ "literal": "X" }] }, { "name": "X", "symbols": [{ "literal": "x" }] }, { "name": "Y", "symbols": [{ "literal": "Y" }] }, { "name": "Y", "symbols": [{ "literal": "y" }] }, { "name": "Z", "symbols": [{ "literal": "Z" }] }, { "name": "Z", "symbols": [{ "literal": "z" }] }, { "name": "exa", "symbols": [{ "literal": "E" }] }, { "name": "exa", "symbols": ["E", "X", "A"] }, { "name": "peta", "symbols": [{ "literal": "P" }] }, { "name": "peta", "symbols": ["P", "E", "T", "A"] }, { "name": "tera", "symbols": [{ "literal": "T" }] }, { "name": "tera", "symbols": ["T", "E", "R", "A"] }, { "name": "giga", "symbols": [{ "literal": "G" }] }, { "name": "giga", "symbols": ["G", "I", "G", "A"] }, { "name": "mega", "symbols": [{ "literal": "M" }] }, { "name": "mega", "symbols": ["M", "E", "G", "A"] }, { "name": "kilo", "symbols": [{ "literal": "k" }] }, { "name": "kilo", "symbols": ["K", "I", "L", "O"] }, { "name": "hecto", "symbols": [{ "literal": "h" }] }, { "name": "hecto", "symbols": ["H", "E", "C", "T", "O"] }, { "name": "deci", "symbols": [{ "literal": "d" }] }, { "name": "deci", "symbols": ["D", "E", "C", "I"] }, { "name": "centi", "symbols": [{ "literal": "c" }] }, { "name": "centi", "symbols": ["C", "E", "N", "T", "I"] }, { "name": "milli", "symbols": [{ "literal": "m" }] }, { "name": "milli", "symbols": ["M", "I", "L", "L", "I"] }, { "name": "micro", "symbols": [{ "literal": "u" }] }, { "name": "micro", "symbols": [/[\u03BC]/] }, { "name": "micro", "symbols": [/[\u00B5]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDECD]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDF07]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDF41]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDF7B]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDFB5]/] }, { "name": "micro", "symbols": ["M", "I", "C", "R", "O"] }, { "name": "nano", "symbols": [{ "literal": "n" }] }, { "name": "nano", "symbols": ["N", "A", "N", "O"] }, { "name": "pico", "symbols": [{ "literal": "p" }] }, { "name": "pico", "symbols": ["P", "I", "C", "O"] }, { "name": "femto", "symbols": [{ "literal": "f" }] }, { "name": "femto", "symbols": ["F", "E", "M", "T", "O"] }, { "name": "atto", "symbols": [{ "literal": "a" }] }, { "name": "atto", "symbols": ["A", "T", "T", "O"] }, { "name": "packageSize", "symbols": ["_packageSize"], "postprocess": function postprocess(d) {
                return { size: filter(flatten(d))[0] };
            } }, { "name": "_packageSize", "symbols": ["_imperialSize"] }, { "name": "_packageSize", "symbols": ["_metricSize"] }, { "name": "_imperialSize$string$1", "symbols": [{ "literal": "0" }, { "literal": "1" }, { "literal": "0" }, { "literal": "0" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$1"] }, { "name": "_imperialSize$string$2", "symbols": [{ "literal": "0" }, { "literal": "2" }, { "literal": "0" }, { "literal": "1" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$2"] }, { "name": "_imperialSize$string$3", "symbols": [{ "literal": "0" }, { "literal": "4" }, { "literal": "0" }, { "literal": "2" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$3"] }, { "name": "_imperialSize$string$4", "symbols": [{ "literal": "0" }, { "literal": "6" }, { "literal": "0" }, { "literal": "3" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$4"] }, { "name": "_imperialSize$string$5", "symbols": [{ "literal": "0" }, { "literal": "8" }, { "literal": "0" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$5"] }, { "name": "_imperialSize$string$6", "symbols": [{ "literal": "1" }, { "literal": "0" }, { "literal": "0" }, { "literal": "8" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$6"] }, { "name": "_imperialSize$string$7", "symbols": [{ "literal": "1" }, { "literal": "2" }, { "literal": "0" }, { "literal": "6" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$7"] }, { "name": "_imperialSize$string$8", "symbols": [{ "literal": "1" }, { "literal": "2" }, { "literal": "1" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$8"] }, { "name": "_imperialSize$string$9", "symbols": [{ "literal": "1" }, { "literal": "8" }, { "literal": "0" }, { "literal": "6" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$9"] }, { "name": "_imperialSize$string$10", "symbols": [{ "literal": "2" }, { "literal": "0" }, { "literal": "1" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$10"] }, { "name": "_imperialSize$string$11", "symbols": [{ "literal": "2" }, { "literal": "5" }, { "literal": "1" }, { "literal": "2" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$11"] }, { "name": "_metricSize$ebnf$1", "symbols": [] }, { "name": "_metricSize$ebnf$1", "symbols": ["_metricSize$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "_metricSize", "symbols": ["__metricSize", "_metricSize$ebnf$1", "M", "E", "T", "R", "I", "C"], "postprocess": function postprocess(d) {
                return toImperial[d[0]];
            } }, { "name": "_metricSize$ebnf$2", "symbols": [] }, { "name": "_metricSize$ebnf$2", "symbols": ["_metricSize$ebnf$2", /[\s]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "_metricSize", "symbols": ["M", "E", "T", "R", "I", "C", "_metricSize$ebnf$2", "__metricSize"], "postprocess": function postprocess(d) {
                return toImperial[d[7]];
            } }, { "name": "_metricSize", "symbols": ["unambigiousMetricSize"], "postprocess": function postprocess(d) {
                return toImperial[d[0]];
            } }, { "name": "unambigiousMetricSize$string$1", "symbols": [{ "literal": "1" }, { "literal": "0" }, { "literal": "0" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$1"] }, { "name": "unambigiousMetricSize$string$2", "symbols": [{ "literal": "1" }, { "literal": "6" }, { "literal": "0" }, { "literal": "8" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$2"] }, { "name": "unambigiousMetricSize$string$3", "symbols": [{ "literal": "2" }, { "literal": "0" }, { "literal": "1" }, { "literal": "2" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$3"] }, { "name": "unambigiousMetricSize$string$4", "symbols": [{ "literal": "2" }, { "literal": "5" }, { "literal": "2" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$4"] }, { "name": "unambigiousMetricSize$string$5", "symbols": [{ "literal": "3" }, { "literal": "2" }, { "literal": "1" }, { "literal": "6" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$5"] }, { "name": "unambigiousMetricSize$string$6", "symbols": [{ "literal": "3" }, { "literal": "2" }, { "literal": "2" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$6"] }, { "name": "unambigiousMetricSize$string$7", "symbols": [{ "literal": "4" }, { "literal": "5" }, { "literal": "1" }, { "literal": "6" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$7"] }, { "name": "unambigiousMetricSize$string$8", "symbols": [{ "literal": "5" }, { "literal": "0" }, { "literal": "2" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$8"] }, { "name": "unambigiousMetricSize$string$9", "symbols": [{ "literal": "6" }, { "literal": "3" }, { "literal": "3" }, { "literal": "2" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$9"] }, { "name": "__metricSize", "symbols": ["unambigiousMetricSize"] }, { "name": "__metricSize$string$1", "symbols": [{ "literal": "0" }, { "literal": "4" }, { "literal": "0" }, { "literal": "2" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "__metricSize", "symbols": ["__metricSize$string$1"] }, { "name": "__metricSize$string$2", "symbols": [{ "literal": "0" }, { "literal": "6" }, { "literal": "0" }, { "literal": "3" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "__metricSize", "symbols": ["__metricSize$string$2"] }, { "name": "M", "symbols": [{ "literal": "M" }] }, { "name": "M", "symbols": [{ "literal": "m" }] }, { "name": "E", "symbols": [{ "literal": "E" }] }, { "name": "E", "symbols": [{ "literal": "e" }] }, { "name": "T", "symbols": [{ "literal": "T" }] }, { "name": "T", "symbols": [{ "literal": "t" }] }, { "name": "R", "symbols": [{ "literal": "R" }] }, { "name": "R", "symbols": [{ "literal": "r" }] }, { "name": "I", "symbols": [{ "literal": "I" }] }, { "name": "I", "symbols": [{ "literal": "i" }] }, { "name": "C", "symbols": [{ "literal": "C" }] }, { "name": "C", "symbols": [{ "literal": "c" }] }, { "name": "main", "symbols": ["component"], "postprocess": function postprocess(d) {
                return assignAll(filter(flatten(d)));
            } }, { "name": "component", "symbols": ["capacitor"], "postprocess": type_capacitor }, { "name": "component", "symbols": ["resistor"], "postprocess": type_resistor }, { "name": "component", "symbols": ["led"], "postprocess": type_led }, { "name": "capacitor$ebnf$1", "symbols": ["packageSize"], "postprocess": id }, { "name": "capacitor$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "capacitor", "symbols": ["cSpecs", "capacitance", "cSpecs", "capacitor$ebnf$1", "cSpecs"] }, { "name": "capacitor$ebnf$2", "symbols": ["packageSize"], "postprocess": id }, { "name": "capacitor$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "capacitor", "symbols": ["cSpecs", "capacitor$ebnf$2", "cSpecs", "capacitance", "cSpecs"] }, { "name": "capacitor$ebnf$3", "symbols": ["packageSize"], "postprocess": id }, { "name": "capacitor$ebnf$3", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "capacitor$subexpression$1", "symbols": ["capacitanceNoFarad"] }, { "name": "capacitor$subexpression$1", "symbols": ["capacitance"] }, { "name": "capacitor", "symbols": ["cap", "cSpecs", "capacitor$ebnf$3", "cSpecs", "capacitor$subexpression$1", "cSpecs"] }, { "name": "capacitor$subexpression$2", "symbols": ["capacitanceNoFarad"] }, { "name": "capacitor$subexpression$2", "symbols": ["capacitance"] }, { "name": "capacitor$ebnf$4", "symbols": ["packageSize"], "postprocess": id }, { "name": "capacitor$ebnf$4", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "capacitor", "symbols": ["cap", "cSpecs", "capacitor$subexpression$2", "cSpecs", "capacitor$ebnf$4", "cSpecs"] }, { "name": "cap$ebnf$1", "symbols": ["A"], "postprocess": id }, { "name": "cap$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$2", "symbols": ["P"], "postprocess": id }, { "name": "cap$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$3", "symbols": ["A"], "postprocess": id }, { "name": "cap$ebnf$3", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$4", "symbols": ["C"], "postprocess": id }, { "name": "cap$ebnf$4", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$5", "symbols": ["I"], "postprocess": id }, { "name": "cap$ebnf$5", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$6", "symbols": ["T"], "postprocess": id }, { "name": "cap$ebnf$6", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$7", "symbols": ["O"], "postprocess": id }, { "name": "cap$ebnf$7", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$8", "symbols": ["R"], "postprocess": id }, { "name": "cap$ebnf$8", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap", "symbols": ["C", "cap$ebnf$1", "cap$ebnf$2", "cap$ebnf$3", "cap$ebnf$4", "cap$ebnf$5", "cap$ebnf$6", "cap$ebnf$7", "cap$ebnf$8"], "postprocess": function postprocess() {
                return null;
            } }, { "name": "cSpecs$ebnf$1", "symbols": [] }, { "name": "cSpecs$ebnf$1$subexpression$1", "symbols": ["_", "cSpec", "_"] }, { "name": "cSpecs$ebnf$1", "symbols": ["cSpecs$ebnf$1", "cSpecs$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "cSpecs", "symbols": ["cSpecs$ebnf$1"] }, { "name": "cSpecs", "symbols": ["__"] }, { "name": "cSpec", "symbols": ["tolerance"] }, { "name": "cSpec", "symbols": ["characteristic"] }, { "name": "cSpec", "symbols": ["voltage_rating"] }, { "name": "voltage_rating", "symbols": ["decimal", "_", "V"], "postprocess": function postprocess(d) {
                return { voltage_rating: d[0] };
            } }, { "name": "characteristic", "symbols": ["_characteristic"], "postprocess": function postprocess(d) {
                return { characteristic: d[0][0] };
            } }, { "name": "_characteristic", "symbols": ["class1"] }, { "name": "_characteristic", "symbols": ["class2"] }, { "name": "class1$macrocall$2", "symbols": ["C", { "literal": "0" }, "G"] }, { "name": "class1$macrocall$3", "symbols": ["N", "P", { "literal": "0" }] }, { "name": "class1$macrocall$1", "symbols": ["class1$macrocall$2"] }, { "name": "class1$macrocall$1", "symbols": ["class1$macrocall$3"] }, { "name": "class1$macrocall$1", "symbols": ["class1$macrocall$2", { "literal": "/" }, "class1$macrocall$3"] }, { "name": "class1$macrocall$1", "symbols": ["class1$macrocall$3", { "literal": "/" }, "class1$macrocall$2"] }, { "name": "class1", "symbols": ["class1$macrocall$1"], "postprocess": function postprocess() {
                return 'C0G';
            } }, { "name": "class1$macrocall$5$string$1", "symbols": [{ "literal": "1" }, { "literal": "0" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$5", "symbols": ["P", "class1$macrocall$5$string$1"] }, { "name": "class1$macrocall$6", "symbols": ["M", { "literal": "7" }, "G"] }, { "name": "class1$macrocall$4", "symbols": ["class1$macrocall$5"] }, { "name": "class1$macrocall$4", "symbols": ["class1$macrocall$6"] }, { "name": "class1$macrocall$4", "symbols": ["class1$macrocall$5", { "literal": "/" }, "class1$macrocall$6"] }, { "name": "class1$macrocall$4", "symbols": ["class1$macrocall$6", { "literal": "/" }, "class1$macrocall$5"] }, { "name": "class1", "symbols": ["class1$macrocall$4"], "postprocess": function postprocess() {
                return 'M7G';
            } }, { "name": "class1$macrocall$8$string$1", "symbols": [{ "literal": "3" }, { "literal": "3" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$8", "symbols": ["N", "class1$macrocall$8$string$1"] }, { "name": "class1$macrocall$9", "symbols": ["H", { "literal": "2" }, "G"] }, { "name": "class1$macrocall$7", "symbols": ["class1$macrocall$8"] }, { "name": "class1$macrocall$7", "symbols": ["class1$macrocall$9"] }, { "name": "class1$macrocall$7", "symbols": ["class1$macrocall$8", { "literal": "/" }, "class1$macrocall$9"] }, { "name": "class1$macrocall$7", "symbols": ["class1$macrocall$9", { "literal": "/" }, "class1$macrocall$8"] }, { "name": "class1", "symbols": ["class1$macrocall$7"], "postprocess": function postprocess() {
                return 'H2G';
            } }, { "name": "class1$macrocall$11$string$1", "symbols": [{ "literal": "7" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$11", "symbols": ["N", "class1$macrocall$11$string$1"] }, { "name": "class1$macrocall$12", "symbols": ["L", { "literal": "2" }, "G"] }, { "name": "class1$macrocall$10", "symbols": ["class1$macrocall$11"] }, { "name": "class1$macrocall$10", "symbols": ["class1$macrocall$12"] }, { "name": "class1$macrocall$10", "symbols": ["class1$macrocall$11", { "literal": "/" }, "class1$macrocall$12"] }, { "name": "class1$macrocall$10", "symbols": ["class1$macrocall$12", { "literal": "/" }, "class1$macrocall$11"] }, { "name": "class1", "symbols": ["class1$macrocall$10"], "postprocess": function postprocess() {
                return 'L2G';
            } }, { "name": "class1$macrocall$14$string$1", "symbols": [{ "literal": "1" }, { "literal": "5" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$14", "symbols": ["N", "class1$macrocall$14$string$1"] }, { "name": "class1$macrocall$15", "symbols": ["P", { "literal": "2" }, "H"] }, { "name": "class1$macrocall$13", "symbols": ["class1$macrocall$14"] }, { "name": "class1$macrocall$13", "symbols": ["class1$macrocall$15"] }, { "name": "class1$macrocall$13", "symbols": ["class1$macrocall$14", { "literal": "/" }, "class1$macrocall$15"] }, { "name": "class1$macrocall$13", "symbols": ["class1$macrocall$15", { "literal": "/" }, "class1$macrocall$14"] }, { "name": "class1", "symbols": ["class1$macrocall$13"], "postprocess": function postprocess() {
                return 'P2H';
            } }, { "name": "class1$macrocall$17$string$1", "symbols": [{ "literal": "2" }, { "literal": "2" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$17", "symbols": ["N", "class1$macrocall$17$string$1"] }, { "name": "class1$macrocall$18", "symbols": ["R", { "literal": "2" }, "H"] }, { "name": "class1$macrocall$16", "symbols": ["class1$macrocall$17"] }, { "name": "class1$macrocall$16", "symbols": ["class1$macrocall$18"] }, { "name": "class1$macrocall$16", "symbols": ["class1$macrocall$17", { "literal": "/" }, "class1$macrocall$18"] }, { "name": "class1$macrocall$16", "symbols": ["class1$macrocall$18", { "literal": "/" }, "class1$macrocall$17"] }, { "name": "class1", "symbols": ["class1$macrocall$16"], "postprocess": function postprocess() {
                return 'R2H';
            } }, { "name": "class1$macrocall$20$string$1", "symbols": [{ "literal": "3" }, { "literal": "3" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$20", "symbols": ["N", "class1$macrocall$20$string$1"] }, { "name": "class1$macrocall$21", "symbols": ["S", { "literal": "2" }, "H"] }, { "name": "class1$macrocall$19", "symbols": ["class1$macrocall$20"] }, { "name": "class1$macrocall$19", "symbols": ["class1$macrocall$21"] }, { "name": "class1$macrocall$19", "symbols": ["class1$macrocall$20", { "literal": "/" }, "class1$macrocall$21"] }, { "name": "class1$macrocall$19", "symbols": ["class1$macrocall$21", { "literal": "/" }, "class1$macrocall$20"] }, { "name": "class1", "symbols": ["class1$macrocall$19"], "postprocess": function postprocess() {
                return 'S2H';
            } }, { "name": "class1$macrocall$23$string$1", "symbols": [{ "literal": "4" }, { "literal": "7" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$23", "symbols": ["N", "class1$macrocall$23$string$1"] }, { "name": "class1$macrocall$24", "symbols": ["T", { "literal": "2" }, "H"] }, { "name": "class1$macrocall$22", "symbols": ["class1$macrocall$23"] }, { "name": "class1$macrocall$22", "symbols": ["class1$macrocall$24"] }, { "name": "class1$macrocall$22", "symbols": ["class1$macrocall$23", { "literal": "/" }, "class1$macrocall$24"] }, { "name": "class1$macrocall$22", "symbols": ["class1$macrocall$24", { "literal": "/" }, "class1$macrocall$23"] }, { "name": "class1", "symbols": ["class1$macrocall$22"], "postprocess": function postprocess() {
                return 'T2H';
            } }, { "name": "class1$macrocall$26$string$1", "symbols": [{ "literal": "7" }, { "literal": "5" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$26", "symbols": ["N", "class1$macrocall$26$string$1"] }, { "name": "class1$macrocall$27", "symbols": ["U", { "literal": "2" }, "J"] }, { "name": "class1$macrocall$25", "symbols": ["class1$macrocall$26"] }, { "name": "class1$macrocall$25", "symbols": ["class1$macrocall$27"] }, { "name": "class1$macrocall$25", "symbols": ["class1$macrocall$26", { "literal": "/" }, "class1$macrocall$27"] }, { "name": "class1$macrocall$25", "symbols": ["class1$macrocall$27", { "literal": "/" }, "class1$macrocall$26"] }, { "name": "class1", "symbols": ["class1$macrocall$25"], "postprocess": function postprocess() {
                return 'U2J';
            } }, { "name": "class1$macrocall$29$string$1", "symbols": [{ "literal": "1" }, { "literal": "0" }, { "literal": "0" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$29", "symbols": ["N", "class1$macrocall$29$string$1"] }, { "name": "class1$macrocall$30", "symbols": ["Q", { "literal": "3" }, "K"] }, { "name": "class1$macrocall$28", "symbols": ["class1$macrocall$29"] }, { "name": "class1$macrocall$28", "symbols": ["class1$macrocall$30"] }, { "name": "class1$macrocall$28", "symbols": ["class1$macrocall$29", { "literal": "/" }, "class1$macrocall$30"] }, { "name": "class1$macrocall$28", "symbols": ["class1$macrocall$30", { "literal": "/" }, "class1$macrocall$29"] }, { "name": "class1", "symbols": ["class1$macrocall$28"], "postprocess": function postprocess() {
                return 'Q3K';
            } }, { "name": "class1$macrocall$32$string$1", "symbols": [{ "literal": "1" }, { "literal": "5" }, { "literal": "0" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$32", "symbols": ["N", "class1$macrocall$32$string$1"] }, { "name": "class1$macrocall$33", "symbols": ["P", { "literal": "3" }, "K"] }, { "name": "class1$macrocall$31", "symbols": ["class1$macrocall$32"] }, { "name": "class1$macrocall$31", "symbols": ["class1$macrocall$33"] }, { "name": "class1$macrocall$31", "symbols": ["class1$macrocall$32", { "literal": "/" }, "class1$macrocall$33"] }, { "name": "class1$macrocall$31", "symbols": ["class1$macrocall$33", { "literal": "/" }, "class1$macrocall$32"] }, { "name": "class1", "symbols": ["class1$macrocall$31"], "postprocess": function postprocess() {
                return 'P3K';
            } }, { "name": "class2", "symbols": ["class2_letter", "class2_number", "class2_code"], "postprocess": function postprocess(d) {
                return d.join('');
            } }, { "name": "class2_letter", "symbols": ["X"] }, { "name": "class2_letter", "symbols": ["Y"] }, { "name": "class2_letter", "symbols": ["Z"] }, { "name": "class2_number", "symbols": [{ "literal": "4" }] }, { "name": "class2_number", "symbols": [{ "literal": "5" }] }, { "name": "class2_number", "symbols": [{ "literal": "6" }] }, { "name": "class2_number", "symbols": [{ "literal": "7" }] }, { "name": "class2_number", "symbols": [{ "literal": "8" }] }, { "name": "class2_number", "symbols": [{ "literal": "9" }] }, { "name": "class2_code", "symbols": ["P"] }, { "name": "class2_code", "symbols": ["R"] }, { "name": "class2_code", "symbols": ["S"] }, { "name": "class2_code", "symbols": ["T"] }, { "name": "class2_code", "symbols": ["U"] }, { "name": "class2_code", "symbols": ["V"] }, { "name": "tolerance$ebnf$1$subexpression$1", "symbols": ["plusMinus", "_"] }, { "name": "tolerance$ebnf$1", "symbols": ["tolerance$ebnf$1$subexpression$1"], "postprocess": id }, { "name": "tolerance$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "tolerance", "symbols": ["tolerance$ebnf$1", "decimal", "_", { "literal": "%" }], "postprocess": function postprocess(d) {
                return { tolerance: d[1] };
            } }, { "name": "plusMinus$string$1", "symbols": [{ "literal": "+" }, { "literal": "/" }, { "literal": "-" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "plusMinus", "symbols": ["plusMinus$string$1"] }, { "name": "plusMinus", "symbols": [{ "literal": "±" }] }, { "name": "plusMinus$string$2", "symbols": [{ "literal": "+" }, { "literal": "-" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "plusMinus", "symbols": ["plusMinus$string$2"] }, { "name": "capacitance", "symbols": ["decimal", "_", "cMetricPrefix", "_", "farad"], "postprocess": capacitance }, { "name": "capacitanceNoFarad", "symbols": ["decimal", "_", "cMetricPrefix"], "postprocess": capacitance }, { "name": "farad", "symbols": [{ "literal": "F" }], "postprocess": function postprocess() {
                return null;
            } }, { "name": "farad", "symbols": ["F", "A", "R", "A", "D"], "postprocess": function postprocess() {
                return null;
            } }, { "name": "resistor$ebnf$1", "symbols": ["packageSize"], "postprocess": id }, { "name": "resistor$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "resistor", "symbols": ["rSpecs", "resistance", "rSpecs", "resistor$ebnf$1", "rSpecs"], "postprocess": type_resistor }, { "name": "resistor$ebnf$2", "symbols": ["packageSize"], "postprocess": id }, { "name": "resistor$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "resistor", "symbols": ["rSpecs", "resistor$ebnf$2", "rSpecs", "resistance", "rSpecs"], "postprocess": type_resistor }, { "name": "rSpecs$ebnf$1", "symbols": [] }, { "name": "rSpecs$ebnf$1$subexpression$1", "symbols": ["_", "rSpec", "_"] }, { "name": "rSpecs$ebnf$1", "symbols": ["rSpecs$ebnf$1", "rSpecs$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "rSpecs", "symbols": ["rSpecs$ebnf$1"] }, { "name": "rSpecs", "symbols": ["__"] }, { "name": "rSpec", "symbols": ["tolerance"] }, { "name": "rSpec", "symbols": ["power_rating"] }, { "name": "power_rating", "symbols": ["decimal", "_", "powerMetricPrefix", "_", "watts"], "postprocess": function postprocess(d) {
                var _d3 = _slicedToArray(d, 3),
                    quantity = _d3[0],
                    metricPrefix = _d3[2];

                return { power_rating: parseFloat('' + quantity + metricPrefix) };
            } }, { "name": "watts", "symbols": ["watts_"], "postprocess": function postprocess() {
                return null;
            } }, { "name": "watts_", "symbols": ["W"] }, { "name": "watts_", "symbols": ["W", "A", "T", "T", "S"] }, { "name": "resistance", "symbols": ["decimal", "_", "rest"], "postprocess": resistance }, { "name": "rest$ebnf$1", "symbols": ["int"], "postprocess": id }, { "name": "rest$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "rest$ebnf$2$subexpression$1", "symbols": ["_", "ohm"] }, { "name": "rest$ebnf$2", "symbols": ["rest$ebnf$2$subexpression$1"], "postprocess": id }, { "name": "rest$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "rest", "symbols": ["rMetricPrefix", "rest$ebnf$1", "rest$ebnf$2"] }, { "name": "rest", "symbols": ["ohm"] }, { "name": "ohm", "symbols": ["ohm_"], "postprocess": function postprocess() {
                return null;
            } }, { "name": "ohm_", "symbols": ["O", "H", "M"] }, { "name": "ohm_", "symbols": [{ "literal": "Ω" }] }, { "name": "ohm_", "symbols": [{ "literal": "Ω" }] }, { "name": "ohm_", "symbols": ["R"] }, { "name": "led", "symbols": ["led_letters", "ledSpecs"] }, { "name": "led", "symbols": ["ledSpecs", "led_letters"] }, { "name": "led", "symbols": ["ledSpecs", "led_letters", "ledSpecs"] }, { "name": "led_letters", "symbols": ["L", "E", "D"], "postprocess": function postprocess() {
                return null;
            } }, { "name": "ledSpecs$ebnf$1$subexpression$1", "symbols": ["_", "ledSpec", "_"] }, { "name": "ledSpecs$ebnf$1", "symbols": ["ledSpecs$ebnf$1$subexpression$1"] }, { "name": "ledSpecs$ebnf$1$subexpression$2", "symbols": ["_", "ledSpec", "_"] }, { "name": "ledSpecs$ebnf$1", "symbols": ["ledSpecs$ebnf$1", "ledSpecs$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "ledSpecs", "symbols": ["ledSpecs$ebnf$1"] }, { "name": "ledSpec", "symbols": ["packageSize"] }, { "name": "ledSpec", "symbols": ["color"] }, { "name": "color", "symbols": ["color_name"], "postprocess": function postprocess(d) {
                return { color: d[0] };
            } }, { "name": "color_name", "symbols": ["R", "E", "D"], "postprocess": function postprocess() {
                return 'red';
            } }, { "name": "color_name", "symbols": ["G", "R", "E", "E", "N"], "postprocess": function postprocess() {
                return 'green';
            } }, { "name": "color_name", "symbols": ["B", "L", "U", "E"], "postprocess": function postprocess() {
                return 'blue';
            } }, { "name": "color_name", "symbols": ["Y", "E", "L", "L", "O", "W"], "postprocess": function postprocess() {
                return 'yellow';
            } }, { "name": "color_name", "symbols": ["O", "R", "A", "N", "G", "E"], "postprocess": function postprocess() {
                return 'orange';
            } }, { "name": "color_name", "symbols": ["W", "H", "I", "T", "E"], "postprocess": function postprocess() {
                return 'white';
            } }, { "name": "color_name", "symbols": ["A", "M", "B", "E", "R"], "postprocess": function postprocess() {
                return 'amber';
            } }, { "name": "color_name", "symbols": ["C", "Y", "A", "N"], "postprocess": function postprocess() {
                return 'cyan';
            } }, { "name": "color_name", "symbols": ["P", "U", "R", "P", "L", "E"], "postprocess": function postprocess() {
                return 'purple';
            } }, { "name": "color_name", "symbols": ["Y", "E", "L", "L", "O", "W", "_", "G", "R", "E", "E", "N"], "postprocess": function postprocess() {
                return 'yellow green';
            } }, { "name": "powerMetricPrefix", "symbols": ["giga"], "postprocess": function postprocess() {
                return 'e9  ';
            } }, { "name": "powerMetricPrefix", "symbols": ["mega"], "postprocess": function postprocess() {
                return 'e6  ';
            } }, { "name": "powerMetricPrefix", "symbols": ["kilo"], "postprocess": function postprocess() {
                return 'e3  ';
            } }, { "name": "powerMetricPrefix", "symbols": ["milli"], "postprocess": function postprocess() {
                return 'e-3 ';
            } }, { "name": "powerMetricPrefix", "symbols": ["micro"], "postprocess": function postprocess() {
                return 'e-6 ';
            } }, { "name": "powerMetricPrefix", "symbols": ["nano"], "postprocess": function postprocess() {
                return 'e-9 ';
            } }, { "name": "powerMetricPrefix", "symbols": ["pico"], "postprocess": function postprocess() {
                return 'e-12';
            } }, { "name": "powerMetricPrefix", "symbols": ["femto"], "postprocess": function postprocess() {
                return 'e-15';
            } }, { "name": "powerMetricPrefix", "symbols": [], "postprocess": function postprocess() {
                return '';
            } }, { "name": "rMetricPrefix", "symbols": ["giga"], "postprocess": function postprocess() {
                return 'e9  ';
            } }, { "name": "rMetricPrefix", "symbols": ["mega"], "postprocess": function postprocess() {
                return 'e6  ';
            } }, { "name": "rMetricPrefix", "symbols": ["kilo"], "postprocess": function postprocess() {
                return 'e3  ';
            } }, { "name": "cMetricPrefix", "symbols": ["micro"], "postprocess": function postprocess() {
                return 'e-6 ';
            } }, { "name": "cMetricPrefix", "symbols": ["nano"], "postprocess": function postprocess() {
                return 'e-9 ';
            } }, { "name": "cMetricPrefix", "symbols": ["pico"], "postprocess": function postprocess() {
                return 'e-12';
            } }, { "name": "cMetricPrefix", "symbols": ["femto"], "postprocess": function postprocess() {
                return 'e-15';
            } }, { "name": "cMetricPrefix", "symbols": [], "postprocess": function postprocess() {
                return '';
            } }],
        ParserStart: "main"
    };
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = grammar;
    } else {
        window.grammar = grammar;
    }
})();
},{"./flatten":5}],7:[function(require,module,exports){
'use strict';

var parse = require('./parse');
var matchCPL = require('./match_cpl');
module.exports = { parse: parse, matchCPL: matchCPL };
},{"./match_cpl":8,"./parse":9}],8:[function(require,module,exports){
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
    var color = c.color == null || cpl.color === c.color;
    var size = c.size == null || cpl.size === c.size;
    if (color && size) {
      return prev.concat([cpl.cplid]);
    }
    return prev;
  }, []);
}

module.exports = matchCPL;
},{"./cpl_capacitors":2,"./cpl_leds":3,"./cpl_resistors":4}],9:[function(require,module,exports){
'use strict';

var nearley = require('nearley');
var grammar = require('./grammar');

function parse(str) {
  var parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart, { keepHistory: true });
  var chars = str.split(' ');
  var info = parser.save();
  return chars.reduce(function (prev, c) {
    c = c.replace(/,|;/, '') + ' ';
    //if it fails, roll it back
    try {
      parser.feed(c);
    } catch (e) {
      parser.restore(info);
    }
    info = parser.save();
    //return the latest valid result
    return parser.results[0] || prev;
  }, {});
}

module.exports = parse;
},{"./grammar":6,"nearley":10}],10:[function(require,module,exports){
(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.nearley = factory();
    }
}(this, function() {

function Rule(name, symbols, postprocess) {
    this.id = ++Rule.highestId;
    this.name = name;
    this.symbols = symbols;        // a list of literal | regex class | nonterminal
    this.postprocess = postprocess;
    return this;
}
Rule.highestId = 0;

Rule.prototype.toString = function(withCursorAt) {
    function stringifySymbolSequence (e) {
        return e.literal ? JSON.stringify(e.literal) :
               e.type ? '%' + e.type : e.toString();
    }
    var symbolSequence = (typeof withCursorAt === "undefined")
                         ? this.symbols.map(stringifySymbolSequence).join(' ')
                         : (   this.symbols.slice(0, withCursorAt).map(stringifySymbolSequence).join(' ')
                             + " ● "
                             + this.symbols.slice(withCursorAt).map(stringifySymbolSequence).join(' ')     );
    return this.name + " → " + symbolSequence;
}


// a State is a rule at a position from a given starting point in the input stream (reference)
function State(rule, dot, reference, wantedBy) {
    this.rule = rule;
    this.dot = dot;
    this.reference = reference;
    this.data = [];
    this.wantedBy = wantedBy;
    this.isComplete = this.dot === rule.symbols.length;
}

State.prototype.toString = function() {
    return "{" + this.rule.toString(this.dot) + "}, from: " + (this.reference || 0);
};

State.prototype.nextState = function(child) {
    var state = new State(this.rule, this.dot + 1, this.reference, this.wantedBy);
    state.left = this;
    state.right = child;
    if (state.isComplete) {
        state.data = state.build();
    }
    return state;
};

State.prototype.build = function() {
    var children = [];
    var node = this;
    do {
        children.push(node.right.data);
        node = node.left;
    } while (node.left);
    children.reverse();
    return children;
};

State.prototype.finish = function() {
    if (this.rule.postprocess) {
        this.data = this.rule.postprocess(this.data, this.reference, Parser.fail);
    }
};


function Column(grammar, index) {
    this.grammar = grammar;
    this.index = index;
    this.states = [];
    this.wants = {}; // states indexed by the non-terminal they expect
    this.scannable = []; // list of states that expect a token
    this.completed = {}; // states that are nullable
}


Column.prototype.process = function(nextColumn) {
    var states = this.states;
    var wants = this.wants;
    var completed = this.completed;

    for (var w = 0; w < states.length; w++) { // nb. we push() during iteration
        var state = states[w];

        if (state.isComplete) {
            state.finish();
            if (state.data !== Parser.fail) {
                // complete
                var wantedBy = state.wantedBy;
                for (var i = wantedBy.length; i--; ) { // this line is hot
                    var left = wantedBy[i];
                    this.complete(left, state);
                }

                // special-case nullables
                if (state.reference === this.index) {
                    // make sure future predictors of this rule get completed.
                    var exp = state.rule.name;
                    (this.completed[exp] = this.completed[exp] || []).push(state);
                }
            }

        } else {
            // queue scannable states
            var exp = state.rule.symbols[state.dot];
            if (typeof exp !== 'string') {
                this.scannable.push(state);
                continue;
            }

            // predict
            if (wants[exp]) {
                wants[exp].push(state);

                if (completed.hasOwnProperty(exp)) {
                    var nulls = completed[exp];
                    for (var i = 0; i < nulls.length; i++) {
                        var right = nulls[i];
                        this.complete(state, right);
                    }
                }
            } else {
                wants[exp] = [state];
                this.predict(exp);
            }
        }
    }
}

Column.prototype.predict = function(exp) {
    var rules = this.grammar.byName[exp] || [];

    for (var i = 0; i < rules.length; i++) {
        var r = rules[i];
        var wantedBy = this.wants[exp];
        var s = new State(r, 0, this.index, wantedBy);
        this.states.push(s);
    }
}

Column.prototype.complete = function(left, right) {
    var inp = right.rule.name;
    if (left.rule.symbols[left.dot] === inp) {
        var copy = left.nextState(right);
        this.states.push(copy);
    }
}


function Grammar(rules, start) {
    this.rules = rules;
    this.start = start || this.rules[0].name;
    var byName = this.byName = {};
    this.rules.forEach(function(rule) {
        if (!byName.hasOwnProperty(rule.name)) {
            byName[rule.name] = [];
        }
        byName[rule.name].push(rule);
    });
}

// So we can allow passing (rules, start) directly to Parser for backwards compatibility
Grammar.fromCompiled = function(rules, start) {
    var lexer = rules.Lexer;
    if (rules.ParserStart) {
      start = rules.ParserStart;
      rules = rules.ParserRules;
    }
    var rules = rules.map(function (r) { return (new Rule(r.name, r.symbols, r.postprocess)); });
    var g = new Grammar(rules, start);
    g.lexer = lexer; // nb. storing lexer on Grammar is iffy, but unavoidable
    return g;
}


function StreamLexer() {
  this.reset("");
}

StreamLexer.prototype.reset = function(data, state) {
    this.buffer = data;
    this.index = 0;
    this.line = state ? state.line : 1;
    this.lastLineBreak = state ? -state.col : 0;
}

StreamLexer.prototype.next = function() {
    if (this.index < this.buffer.length) {
        var ch = this.buffer[this.index++];
        if (ch === '\n') {
          this.line += 1;
          this.lastLineBreak = this.index;
        }
        return {value: ch};
    }
}

StreamLexer.prototype.save = function() {
  return {
    line: this.line,
    col: this.index - this.lastLineBreak,
  }
}

StreamLexer.prototype.formatError = function(token, message) {
    // nb. this gets called after consuming the offending token,
    // so the culprit is index-1
    var buffer = this.buffer;
    if (typeof buffer === 'string') {
        var nextLineBreak = buffer.indexOf('\n', this.index);
        if (nextLineBreak === -1) nextLineBreak = buffer.length;
        var line = buffer.substring(this.lastLineBreak, nextLineBreak)
        var col = this.index - this.lastLineBreak;
        message += " at line " + this.line + " col " + col + ":\n\n";
        message += "  " + line + "\n"
        message += "  " + Array(col).join(" ") + "^"
        return message;
    } else {
        return message + " at index " + (this.index - 1);
    }
}


function Parser(rules, start, options) {
    if (rules instanceof Grammar) {
        var grammar = rules;
        var options = start;
    } else {
        var grammar = Grammar.fromCompiled(rules, start);
    }
    this.grammar = grammar;

    // Read options
    this.options = {
        keepHistory: false,
        lexer: grammar.lexer || new StreamLexer,
    };
    for (var key in (options || {})) {
        this.options[key] = options[key];
    }

    // Setup lexer
    this.lexer = this.options.lexer;
    this.lexerState = undefined;

    // Setup a table
    var column = new Column(grammar, 0);
    var table = this.table = [column];

    // I could be expecting anything.
    column.wants[grammar.start] = [];
    column.predict(grammar.start);
    // TODO what if start rule is nullable?
    column.process();
    this.current = 0; // token index
}

// create a reserved token for indicating a parse fail
Parser.fail = {};

Parser.prototype.feed = function(chunk) {
    var lexer = this.lexer;
    lexer.reset(chunk, this.lexerState);

    while (token = lexer.next()) {
        // We add new states to table[current+1]
        var column = this.table[this.current];

        // GC unused states
        if (!this.options.keepHistory) {
            delete this.table[this.current - 1];
        }

        var n = this.current + 1;
        var nextColumn = new Column(this.grammar, n);
        this.table.push(nextColumn);

        // Advance all tokens that expect the symbol
        var literal = token.value;
        var value = lexer.constructor === StreamLexer ? token.value : token;
        var scannable = column.scannable;
        for (var w = scannable.length; w--; ) {
            var state = scannable[w];
            var expect = state.rule.symbols[state.dot];
            // Try to consume the token
            // either regex or literal
            if (expect.test ? expect.test(value) :
                expect.type ? expect.type === token.type
                            : expect.literal === literal) {
                // Add it
                var next = state.nextState({data: value, token: token, isToken: true});
                nextColumn.states.push(next);
            }
        }

        // Next, for each of the rules, we either
        // (a) complete it, and try to see if the reference row expected that
        //     rule
        // (b) predict the next nonterminal it expects by adding that
        //     nonterminal's start state
        // To prevent duplication, we also keep track of rules we have already
        // added

        nextColumn.process();

        // If needed, throw an error:
        if (nextColumn.states.length === 0) {
            // No states at all! This is not good.
            var message = this.lexer.formatError(token, "invalid syntax") + "\n";
            message += "Unexpected " + (token.type ? token.type + " token: " : "");
            message += JSON.stringify(token.value !== undefined ? token.value : token) + "\n";
            var err = new Error(message);
            err.offset = this.current;
            throw err;
        }

        // maybe save lexer state
        if (this.options.keepHistory) {
          column.lexerState = lexer.save()
        }

        this.current++;
    }
    if (column) {
      this.lexerState = lexer.save()
    }

    // Incrementally keep track of results
    this.results = this.finish();

    // Allow chaining, for whatever it's worth
    return this;
};

Parser.prototype.save = function() {
    var column = this.table[this.current];
    column.lexerState = this.lexerState;
    return column;
};

Parser.prototype.restore = function(column) {
    var index = column.index;
    this.current = index;
    this.table[index] = column;
    this.table.splice(index + 1);
    this.lexerState = column.lexerState;

    // Incrementally keep track of results
    this.results = this.finish();
};

// nb. deprecated: use save/restore instead!
Parser.prototype.rewind = function(index) {
    if (!this.options.keepHistory) {
        throw new Error('set option `keepHistory` to enable rewinding')
    }
    // nb. recall column (table) indicies fall between token indicies.
    //        col 0   --   token 0   --   col 1
    this.restore(this.table[index]);
};

Parser.prototype.finish = function() {
    // Return the possible parsings
    var considerations = [];
    var start = this.grammar.start;
    var column = this.table[this.table.length - 1]
    column.states.forEach(function (t) {
        if (t.rule.name === start
                && t.dot === t.rule.symbols.length
                && t.reference === 0
                && t.data !== Parser.fail) {
            considerations.push(t);
        }
    });
    return considerations.map(function(c) {return c.data; });
};

return {
    Parser: Parser,
    Grammar: Grammar,
    Rule: Rule,
};

}));

},{}]},{},[1]);
