(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var electroGrammar = require('../lib/index')

var parse    = electroGrammar.parse
var matchCPL = electroGrammar.matchCPL

var input     = document.getElementById('input')
var component = document.getElementById('component')
var cplids    = document.getElementById('cplids')

function setOutput() {
  var r = parse(input.value || input.placeholder, {returnIgnored: true})
  component.innerHTML = JSON.stringify(r, null, 2)
  cplids.innerHTML    = JSON.stringify(matchCPL(r.component), null, 2)
}

setOutput()
input.oninput = setOutput

},{"../lib/index":7}],2:[function(require,module,exports){
module.exports = [
  {
    "type": "capacitor",
    "capacitance": 1e-12,
    "voltage_rating": 50,
    "size": "0402",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0402-1PF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1e-12,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-1PF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1e-11,
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0402",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0402-10PF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1e-11,
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-10PF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1.2e-11,
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-12PF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1.8e-11,
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-18PF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 2.2e-11,
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0402",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0402-22PF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 2.2e-11,
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-22PF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 2.7e-11,
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-27PF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 3.3e-11,
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-33PF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1e-10,
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-100PF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 2.2e-10,
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-220PF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1e-9,
    "tolerance": 5,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "C0G",
    "cplid": "CPL-CAP-C0G-0603-1NF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1e-9,
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0402",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0402-1NF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1e-9,
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-1NF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 4.7e-9,
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-4.7NF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1e-8,
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0402",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0402-10NF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1e-8,
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-10NF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 2.2e-8,
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-22NF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 4.7e-8,
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-47NF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1e-7,
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "0402",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0402-100NF-16V"
  },
  {
    "type": "capacitor",
    "capacitance": 1e-7,
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-100NF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 1e-7,
    "tolerance": 10,
    "voltage_rating": 50,
    "size": "0805",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0805-100NF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 2.2e-7,
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-220NF-16V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.000001,
    "tolerance": 10,
    "voltage_rating": 6.3,
    "size": "0402",
    "characteristic": "X5R",
    "cplid": "CPL-CAP-X5R-0402-1UF-6.3V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.000001,
    "tolerance": 10,
    "voltage_rating": 25,
    "size": "0603",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0603-1UF-25V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.000001,
    "tolerance": 10,
    "voltage_rating": 25,
    "size": "0805",
    "characteristic": "X7R",
    "cplid": "CPL-CAP-X7R-0805-1UF-25V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.0000047,
    "tolerance": 10,
    "voltage_rating": 10,
    "size": "0603",
    "characteristic": "X5R",
    "cplid": "CPL-CAP-X5R-0603-4.7UF-10V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.0000047,
    "tolerance": 10,
    "voltage_rating": 25,
    "size": "0805",
    "characteristic": "X5R",
    "cplid": "CPL-CAP-X5R-0805-4.7UF-25V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.00001,
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "0805",
    "characteristic": "X5R",
    "cplid": "CPL-CAP-X5R-0805-10UF-16V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.000022,
    "tolerance": 20,
    "voltage_rating": 6.3,
    "size": "0805",
    "characteristic": "X5R",
    "cplid": "CPL-CAP-X5R-0805-22UF-6.3V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.0001,
    "tolerance": 20,
    "voltage_rating": 6.3,
    "size": "1206",
    "characteristic": "X5R",
    "cplid": "CPL-CAP-X5R-1206-100UF-6.3V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.000001,
    "tolerance": 10,
    "voltage_rating": 35,
    "size": "1206",
    "cplid": "CPL-CAP-TAN-1206-1UF-35V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.0000047,
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "1206",
    "cplid": "CPL-CAP-TAN-1206-4.7UF-16V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.00001,
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "1206",
    "cplid": "CPL-CAP-TAN-1206-10UF-16V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.00001,
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "1210",
    "cplid": "CPL-CAP-TAN-1210-10UF-16V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.000022,
    "tolerance": 10,
    "voltage_rating": 16,
    "size": "1210",
    "cplid": "CPL-CAP-TAN-1210-22UF-16V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.000047,
    "tolerance": 10,
    "voltage_rating": 16,
    "cplid": "CPL-CAP-TAN-2312-47UF-16V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.0001,
    "tolerance": 10,
    "voltage_rating": 16,
    "cplid": "CPL-CAP-TAN-2312-100UF-16V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.0001,
    "tolerance": 10,
    "voltage_rating": 10,
    "cplid": "CPL-CAP-TAN-2312-100UF-10V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.0000022,
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-2.2UF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.0000047,
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-4.7UF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.00001,
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-10UF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.000022,
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-22UF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.000047,
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-47UF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.0001,
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-100UF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.00022,
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-220UF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.00047,
    "tolerance": 20,
    "voltage_rating": 50,
    "cplid": "CPL-CAP-ALU-RAD-470UF-50V"
  },
  {
    "type": "capacitor",
    "capacitance": 0.001,
    "tolerance": 20,
    "voltage_rating": 25,
    "cplid": "CPL-CAP-ALU-RAD-1000UF-25V"
  }
]
},{}],3:[function(require,module,exports){
module.exports = [
  {
    "type": "led",
    "color": "green",
    "size": "0603",
    "cplid": "CPL-LED-0603-GREEN"
  },
  {
    "type": "led",
    "color": "red",
    "size": "0603",
    "cplid": "CPL-LED-0603-RED"
  },
  {
    "type": "led",
    "color": "yellow",
    "size": "0603",
    "cplid": "CPL-LED-0603-YELLOW"
  },
  {
    "type": "led",
    "color": "orange",
    "size": "0603",
    "cplid": "CPL-LED-0603-ORANGE"
  },
  {
    "type": "led",
    "color": "amber",
    "size": "0603",
    "cplid": "CPL-LED-0603-AMBER"
  },
  {
    "type": "led",
    "color": "blue",
    "size": "0603",
    "cplid": "CPL-LED-0603-BLUE"
  },
  {
    "type": "led",
    "color": "white",
    "size": "0603",
    "cplid": "CPL-LED-0603-WHITE"
  }
]
},{}],4:[function(require,module,exports){
module.exports = [
  {
    "type": "resistor",
    "resistance": 0,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-0-0.063W"
  },
  {
    "type": "resistor",
    "resistance": 0,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-0-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 0,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-0-0.125W"
  },
  {
    "type": "resistor",
    "resistance": 0,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-0-0.25W"
  },
  {
    "type": "resistor",
    "resistance": 10,
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-10-0.063W"
  },
  {
    "type": "resistor",
    "resistance": 10,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-10-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 10,
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-10-0.125W"
  },
  {
    "type": "resistor",
    "resistance": 10,
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-10-0.25W"
  },
  {
    "type": "resistor",
    "resistance": 12,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-12-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 15,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-15-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 22,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-22-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 33.2,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-33.2-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 47,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-47-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 49.9,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-49.9-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 56.2,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-56.2-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 68.1,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-68.1-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 75,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-75-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 82.5,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-82.5-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 100,
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-100-0.063W"
  },
  {
    "type": "resistor",
    "resistance": 100,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-100-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 100,
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-100-0.125W"
  },
  {
    "type": "resistor",
    "resistance": 100,
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-100-0.25W"
  },
  {
    "type": "resistor",
    "resistance": 120,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-120-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 150,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-150-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 220,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-220-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 330,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-330-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 390,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-390-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 470,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-470-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 560,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-560-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 681,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-681-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 820,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-820-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 1000,
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-1K-0.063W"
  },
  {
    "type": "resistor",
    "resistance": 1000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-1K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 1000,
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-1K-0.125W"
  },
  {
    "type": "resistor",
    "resistance": 1000,
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-1K-0.25W"
  },
  {
    "type": "resistor",
    "resistance": 1200,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-1.2K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 1500,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-1.5K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 2000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-2K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 3300,
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0603-3.3K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 3300,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-3.3K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 3300,
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0603-3.3K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 3300,
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-0603-3.3K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 3600,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-3.6K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 4700,
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-4.7K-0.063W"
  },
  {
    "type": "resistor",
    "resistance": 4700,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-4.7K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 4700,
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-4.7K-0.125W"
  },
  {
    "type": "resistor",
    "resistance": 4700,
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-4.7K-0.25W"
  },
  {
    "type": "resistor",
    "resistance": 5600,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-5.6K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 6800,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-6.8K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 8200,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-8.2K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 10000,
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-10K-0.063W"
  },
  {
    "type": "resistor",
    "resistance": 10000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-10K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 10000,
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-10K-0.125W"
  },
  {
    "type": "resistor",
    "resistance": 10000,
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-10K-0.25W"
  },
  {
    "type": "resistor",
    "resistance": 12000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-12K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 15000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-15K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 22000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-22K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 33200,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-33.2K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 47000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-47K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 56200,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-56.2K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 68100,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-68.1K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 82500,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-82.5K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 100000,
    "tolerance": 1,
    "size": "0402",
    "power_rating": 0.063,
    "cplid": "CPL-RES-0402-100K-0.063W"
  },
  {
    "type": "resistor",
    "resistance": 100000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-100K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 100000,
    "tolerance": 1,
    "size": "0805",
    "power_rating": 0.125,
    "cplid": "CPL-RES-0805-100K-0.125W"
  },
  {
    "type": "resistor",
    "resistance": 100000,
    "tolerance": 1,
    "size": "1206",
    "power_rating": 0.25,
    "cplid": "CPL-RES-1206-100K-0.25W"
  },
  {
    "type": "resistor",
    "resistance": 120000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-120K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 150000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-150K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 220000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-220K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 332000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-332K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 470000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-470K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 562000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-562K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 681000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-681K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 825000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-825K-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 1000000,
    "tolerance": 1,
    "size": "0603",
    "power_rating": 0.1,
    "cplid": "CPL-RES-0603-1M-0.1W"
  },
  {
    "type": "resistor",
    "resistance": 0.05,
    "tolerance": 1,
    "size": "1206",
    "power_rating": 1,
    "cplid": "CPL-RES-1206-0.05-1W"
  }
]
},{}],5:[function(require,module,exports){
'use strict';

function equals(c1, c2) {
    c1 = c1 || {};
    c2 = c2 || {};
    if (!c1.type && !c2.type) {
        return true;
    }
    if (c1.type !== c2.type) {
        return false;
    }
    switch (c1.type) {
        case 'resistor':
            return sameResistor(c1, c2);
        case 'capacitor':
            return sameCapacitor(c1, c2);
        case 'led':
            return sameLED(c1, c2);
    }
}

function sameCapacitor(c1, c2) {
    return c1.capacitance === c2.capacitance && c1.size === c2.size && c1.characteristic === c2.characteristic && c1.tolerance === c2.tolerance && c1.voltage_rating === c2.voltage_rating;
}

function sameResistor(c1, c2) {
    return c1.resistance === c2.resistance && c1.size === c2.size && c1.tolerance === c2.tolerance && c1.power_rating === c2.power_rating;
}

function sameLED(c1, c2) {
    return c1.color === c2.color && c1.size === c2.size;
}

module.exports = equals;
},{}],6:[function(require,module,exports){
'use strict';

// Generated automatically by nearley, version 2.11.0
// http://github.com/Hardmath123/nearley
(function () {
    function id(x) {
        return x[0];
    }

    /*!
     * modified from arr-flatten <https://github.com/jonschlinkert/arr-flatten>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */

    function _flatten(arr, res) {
        var i = 0,
            cur;
        var len = arr.length;
        for (; i < len; i++) {
            cur = arr[i];
            Array.isArray(cur) ? _flatten(cur, res) : res.push(cur);
        }
        return res;
    }

    function flatten(arr) {
        return _flatten(arr, []);
    }

    function filter(d) {
        return d.filter(function (t) {
            return t != null;
        });
    }

    function nuller() {
        return null;
    }

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

    function type(t) {
        return function (d) {
            return [{ type: t }].concat(d);
        };
    }

    function capacitance(d) {
        var quantity = d[0];
        var metricPrefix = d[2];
        var farad = d[4];

        return { capacitance: parseFloat(quantity + (metricPrefix || '')) };
    }

    function resistance(d, i, reject) {
        var integral = d[0];
        var metricPrefix = d[2][0];
        var fractional = d[2][1];
        var ohm = d[2][2];
        if (fractional) {
            if (/\./.test(integral.toString())) {
                return reject;
            }
            var quantity = integral + '.' + fractional;
        } else {
            var quantity = integral;
        }
        return { resistance: parseFloat(quantity + (metricPrefix || '')) };
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
            } }, { "name": "_", "symbols": ["_$ebnf$1"], "postprocess": nuller }, { "name": "__$ebnf$1", "symbols": [/[\s]/] }, { "name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "__", "symbols": ["__$ebnf$1"], "postprocess": nuller }, { "name": "A", "symbols": [{ "literal": "A" }] }, { "name": "A", "symbols": [{ "literal": "a" }] }, { "name": "B", "symbols": [{ "literal": "B" }] }, { "name": "B", "symbols": [{ "literal": "b" }] }, { "name": "C", "symbols": [{ "literal": "C" }] }, { "name": "C", "symbols": [{ "literal": "c" }] }, { "name": "D", "symbols": [{ "literal": "D" }] }, { "name": "D", "symbols": [{ "literal": "d" }] }, { "name": "E", "symbols": [{ "literal": "E" }] }, { "name": "E", "symbols": [{ "literal": "e" }] }, { "name": "F", "symbols": [{ "literal": "F" }] }, { "name": "F", "symbols": [{ "literal": "f" }] }, { "name": "G", "symbols": [{ "literal": "G" }] }, { "name": "G", "symbols": [{ "literal": "g" }] }, { "name": "H", "symbols": [{ "literal": "H" }] }, { "name": "H", "symbols": [{ "literal": "h" }] }, { "name": "I", "symbols": [{ "literal": "I" }] }, { "name": "I", "symbols": [{ "literal": "i" }] }, { "name": "J", "symbols": [{ "literal": "J" }] }, { "name": "J", "symbols": [{ "literal": "j" }] }, { "name": "K", "symbols": [{ "literal": "K" }] }, { "name": "K", "symbols": [{ "literal": "k" }] }, { "name": "L", "symbols": [{ "literal": "L" }] }, { "name": "L", "symbols": [{ "literal": "l" }] }, { "name": "M", "symbols": [{ "literal": "M" }] }, { "name": "M", "symbols": [{ "literal": "m" }] }, { "name": "N", "symbols": [{ "literal": "N" }] }, { "name": "N", "symbols": [{ "literal": "n" }] }, { "name": "O", "symbols": [{ "literal": "O" }] }, { "name": "O", "symbols": [{ "literal": "o" }] }, { "name": "P", "symbols": [{ "literal": "P" }] }, { "name": "P", "symbols": [{ "literal": "p" }] }, { "name": "Q", "symbols": [{ "literal": "Q" }] }, { "name": "Q", "symbols": [{ "literal": "q" }] }, { "name": "R", "symbols": [{ "literal": "R" }] }, { "name": "R", "symbols": [{ "literal": "r" }] }, { "name": "S", "symbols": [{ "literal": "S" }] }, { "name": "S", "symbols": [{ "literal": "s" }] }, { "name": "T", "symbols": [{ "literal": "T" }] }, { "name": "T", "symbols": [{ "literal": "t" }] }, { "name": "U", "symbols": [{ "literal": "U" }] }, { "name": "U", "symbols": [{ "literal": "u" }] }, { "name": "V", "symbols": [{ "literal": "V" }] }, { "name": "V", "symbols": [{ "literal": "v" }] }, { "name": "W", "symbols": [{ "literal": "W" }] }, { "name": "W", "symbols": [{ "literal": "w" }] }, { "name": "X", "symbols": [{ "literal": "X" }] }, { "name": "X", "symbols": [{ "literal": "x" }] }, { "name": "Y", "symbols": [{ "literal": "Y" }] }, { "name": "Y", "symbols": [{ "literal": "y" }] }, { "name": "Z", "symbols": [{ "literal": "Z" }] }, { "name": "Z", "symbols": [{ "literal": "z" }] }, { "name": "exa", "symbols": [{ "literal": "E" }] }, { "name": "exa", "symbols": ["E", "X", "A"] }, { "name": "peta", "symbols": [{ "literal": "P" }] }, { "name": "peta", "symbols": ["P", "E", "T", "A"] }, { "name": "tera", "symbols": [{ "literal": "T" }] }, { "name": "tera", "symbols": ["T", "E", "R", "A"] }, { "name": "giga", "symbols": [{ "literal": "G" }] }, { "name": "giga", "symbols": ["G", "I", "G", "A"] }, { "name": "mega", "symbols": [{ "literal": "M" }] }, { "name": "mega", "symbols": ["M", "E", "G", "A"] }, { "name": "kilo", "symbols": [{ "literal": "k" }] }, { "name": "kilo", "symbols": ["K", "I", "L", "O"] }, { "name": "hecto", "symbols": [{ "literal": "h" }] }, { "name": "hecto", "symbols": ["H", "E", "C", "T", "O"] }, { "name": "deci", "symbols": [{ "literal": "d" }] }, { "name": "deci", "symbols": ["D", "E", "C", "I"] }, { "name": "centi", "symbols": [{ "literal": "c" }] }, { "name": "centi", "symbols": ["C", "E", "N", "T", "I"] }, { "name": "milli", "symbols": [{ "literal": "m" }] }, { "name": "milli", "symbols": ["M", "I", "L", "L", "I"] }, { "name": "micro", "symbols": [{ "literal": "u" }] }, { "name": "micro", "symbols": [/[\u03BC]/] }, { "name": "micro", "symbols": [/[\u00B5]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDECD]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDF07]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDF41]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDF7B]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDFB5]/] }, { "name": "micro", "symbols": ["M", "I", "C", "R", "O"] }, { "name": "nano", "symbols": [{ "literal": "n" }] }, { "name": "nano", "symbols": ["N", "A", "N", "O"] }, { "name": "pico", "symbols": [{ "literal": "p" }] }, { "name": "pico", "symbols": ["P", "I", "C", "O"] }, { "name": "femto", "symbols": [{ "literal": "f" }] }, { "name": "femto", "symbols": ["F", "E", "M", "T", "O"] }, { "name": "atto", "symbols": [{ "literal": "a" }] }, { "name": "atto", "symbols": ["A", "T", "T", "O"] }, { "name": "packageSize", "symbols": ["_packageSize"], "postprocess": function postprocess(d) {
                return { size: filter(flatten(d)).join('') };
            }
        }, { "name": "_packageSize", "symbols": ["_imperialSize"] }, { "name": "_packageSize", "symbols": ["_metricSize"] }, { "name": "_imperialSize$string$1", "symbols": [{ "literal": "0" }, { "literal": "1" }, { "literal": "0" }, { "literal": "0" }, { "literal": "5" }], "postprocess": function joiner(d) {
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
            } }, { "name": "__metricSize", "symbols": ["__metricSize$string$2"] }, { "name": "main", "symbols": ["_", "main_", "_"], "postprocess": function postprocess(d) {
                return filter(flatten(d));
            } }, { "name": "main_", "symbols": ["packageSize"], "postprocess": type('unknown') }, { "name": "main_", "symbols": ["component"] }, { "name": "component", "symbols": ["capacitor"], "postprocess": type('capacitor') }, { "name": "component", "symbols": ["resistor"], "postprocess": type('resistor') }, { "name": "component", "symbols": ["led"], "postprocess": type('led') }, { "name": "capacitor", "symbols": ["cSpecs", "capacitance", "cSpecs"] }, { "name": "capacitor$subexpression$1", "symbols": ["capacitanceNoFarad"] }, { "name": "capacitor$subexpression$1", "symbols": ["capacitance"] }, { "name": "capacitor", "symbols": ["cap", "cSpecs", "capacitor$subexpression$1", "cSpecs"] }, { "name": "cap$ebnf$1", "symbols": ["A"], "postprocess": id }, { "name": "cap$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
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
            } }, { "name": "cap", "symbols": ["C", "cap$ebnf$1", "cap$ebnf$2", "cap$ebnf$3", "cap$ebnf$4", "cap$ebnf$5", "cap$ebnf$6", "cap$ebnf$7", "cap$ebnf$8"], "postprocess": nuller }, { "name": "cSpecs$ebnf$1", "symbols": [] }, { "name": "cSpecs$ebnf$1$subexpression$1", "symbols": ["_", "cSpec", "_"] }, { "name": "cSpecs$ebnf$1", "symbols": ["cSpecs$ebnf$1", "cSpecs$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "cSpecs", "symbols": ["cSpecs$ebnf$1"] }, { "name": "cSpecs", "symbols": ["__"] }, { "name": "cSpec", "symbols": ["tolerance"] }, { "name": "cSpec", "symbols": ["characteristic"] }, { "name": "cSpec", "symbols": ["voltage_rating"] }, { "name": "cSpec", "symbols": ["packageSize"] }, { "name": "voltage_rating", "symbols": ["decimal", "_", "V"], "postprocess": function postprocess(d) {
                return { voltage_rating: d[0] };
            } }, { "name": "characteristic", "symbols": ["characteristic_"], "postprocess": function postprocess(d) {
                return { characteristic: d[0][0] };
            } }, { "name": "characteristic_", "symbols": ["class1"] }, { "name": "characteristic_", "symbols": ["class2"] }, { "name": "class1", "symbols": ["class1_ceramic_name"], "postprocess": id }, { "name": "class1", "symbols": ["class1_eia_code"], "postprocess": id }, { "name": "class1", "symbols": ["class1_ceramic_name", "_", { "literal": "/" }, "_", "class1_eia_code"], "postprocess": id }, { "name": "class1", "symbols": ["class1_eia_code", "_", { "literal": "/" }, "_", "class1_ceramic_name"], "postprocess": id }, { "name": "class1_ceramic_name", "symbols": ["C", { "literal": "0" }, "G"], "postprocess": function postprocess() {
                return 'C0G';
            } }, { "name": "class1_ceramic_name$string$1", "symbols": [{ "literal": "1" }, { "literal": "0" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1_ceramic_name", "symbols": ["P", "class1_ceramic_name$string$1"], "postprocess": function postprocess() {
                return 'M7G';
            } }, { "name": "class1_ceramic_name$string$2", "symbols": [{ "literal": "3" }, { "literal": "3" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$2"], "postprocess": function postprocess() {
                return 'H2G';
            } }, { "name": "class1_ceramic_name$string$3", "symbols": [{ "literal": "7" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$3"], "postprocess": function postprocess() {
                return 'L2G';
            } }, { "name": "class1_ceramic_name$string$4", "symbols": [{ "literal": "1" }, { "literal": "5" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$4"], "postprocess": function postprocess() {
                return 'P2H';
            } }, { "name": "class1_ceramic_name$string$5", "symbols": [{ "literal": "2" }, { "literal": "2" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$5"], "postprocess": function postprocess() {
                return 'R2H';
            } }, { "name": "class1_ceramic_name$string$6", "symbols": [{ "literal": "3" }, { "literal": "3" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$6"], "postprocess": function postprocess() {
                return 'S2H';
            } }, { "name": "class1_ceramic_name$string$7", "symbols": [{ "literal": "4" }, { "literal": "7" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$7"], "postprocess": function postprocess() {
                return 'T2H';
            } }, { "name": "class1_ceramic_name$string$8", "symbols": [{ "literal": "7" }, { "literal": "5" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$8"], "postprocess": function postprocess() {
                return 'U2J';
            } }, { "name": "class1_ceramic_name$string$9", "symbols": [{ "literal": "1" }, { "literal": "0" }, { "literal": "0" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$9"], "postprocess": function postprocess() {
                return 'Q3K';
            } }, { "name": "class1_ceramic_name$string$10", "symbols": [{ "literal": "1" }, { "literal": "5" }, { "literal": "0" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$10"], "postprocess": function postprocess() {
                return 'P3K';
            } }, { "name": "class1_eia_code", "symbols": ["N", "P", { "literal": "0" }], "postprocess": function postprocess() {
                return 'C0G';
            } }, { "name": "class1_eia_code", "symbols": ["M", { "literal": "7" }, "G"], "postprocess": function postprocess() {
                return 'M7G';
            } }, { "name": "class1_eia_code", "symbols": ["H", { "literal": "2" }, "G"], "postprocess": function postprocess() {
                return 'H2G';
            } }, { "name": "class1_eia_code", "symbols": ["L", { "literal": "2" }, "G"], "postprocess": function postprocess() {
                return 'L2G';
            } }, { "name": "class1_eia_code", "symbols": ["P", { "literal": "2" }, "H"], "postprocess": function postprocess() {
                return 'P2H';
            } }, { "name": "class1_eia_code", "symbols": ["R", { "literal": "2" }, "H"], "postprocess": function postprocess() {
                return 'R2H';
            } }, { "name": "class1_eia_code", "symbols": ["S", { "literal": "2" }, "H"], "postprocess": function postprocess() {
                return 'S2H';
            } }, { "name": "class1_eia_code", "symbols": ["T", { "literal": "2" }, "H"], "postprocess": function postprocess() {
                return 'T2H';
            } }, { "name": "class1_eia_code", "symbols": ["U", { "literal": "2" }, "J"], "postprocess": function postprocess() {
                return 'U2J';
            } }, { "name": "class1_eia_code", "symbols": ["Q", { "literal": "3" }, "K"], "postprocess": function postprocess() {
                return 'Q3K';
            } }, { "name": "class1_eia_code", "symbols": ["P", { "literal": "3" }, "K"], "postprocess": function postprocess() {
                return 'P3K';
            } }, { "name": "class2", "symbols": ["class2_letter", "class2_number", "class2_code"], "postprocess": function postprocess(d) {
                return d.join('').toUpperCase();
            } }, { "name": "class2_letter", "symbols": ["X"] }, { "name": "class2_letter", "symbols": ["Y"] }, { "name": "class2_letter", "symbols": ["Z"] }, { "name": "class2_number", "symbols": [{ "literal": "4" }] }, { "name": "class2_number", "symbols": [{ "literal": "5" }] }, { "name": "class2_number", "symbols": [{ "literal": "6" }] }, { "name": "class2_number", "symbols": [{ "literal": "7" }] }, { "name": "class2_number", "symbols": [{ "literal": "8" }] }, { "name": "class2_number", "symbols": [{ "literal": "9" }] }, { "name": "class2_code", "symbols": ["P"] }, { "name": "class2_code", "symbols": ["R"] }, { "name": "class2_code", "symbols": ["S"] }, { "name": "class2_code", "symbols": ["T"] }, { "name": "class2_code", "symbols": ["U"] }, { "name": "class2_code", "symbols": ["V"] }, { "name": "tolerance$ebnf$1$subexpression$1", "symbols": ["plusMinus", "_"] }, { "name": "tolerance$ebnf$1", "symbols": ["tolerance$ebnf$1$subexpression$1"], "postprocess": id }, { "name": "tolerance$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "tolerance", "symbols": ["tolerance$ebnf$1", "decimal", "_", { "literal": "%" }], "postprocess": function postprocess(d) {
                return { tolerance: d[1] };
            } }, { "name": "plusMinus$string$1", "symbols": [{ "literal": "+" }, { "literal": "/" }, { "literal": "-" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "plusMinus", "symbols": ["plusMinus$string$1"] }, { "name": "plusMinus", "symbols": [{ "literal": "±" }] }, { "name": "plusMinus$string$2", "symbols": [{ "literal": "+" }, { "literal": "-" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "plusMinus", "symbols": ["plusMinus$string$2"] }, { "name": "capacitance$ebnf$1", "symbols": ["cMetricPrefix"], "postprocess": id }, { "name": "capacitance$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "capacitance", "symbols": ["decimal", "_", "capacitance$ebnf$1", "_", "farad"], "postprocess": capacitance }, { "name": "capacitanceNoFarad$ebnf$1", "symbols": ["cMetricPrefix"], "postprocess": id }, { "name": "capacitanceNoFarad$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "capacitanceNoFarad", "symbols": ["decimal", "_", "capacitanceNoFarad$ebnf$1"], "postprocess": capacitance }, { "name": "farad", "symbols": ["F"], "postprocess": nuller }, { "name": "farad", "symbols": ["F", "A", "R", "A", "D"], "postprocess": nuller }, { "name": "resistor", "symbols": ["rSpecs", "resistance", "rSpecs"] }, { "name": "rSpecs$ebnf$1", "symbols": [] }, { "name": "rSpecs$ebnf$1$subexpression$1", "symbols": ["_", "rSpec", "_"] }, { "name": "rSpecs$ebnf$1", "symbols": ["rSpecs$ebnf$1", "rSpecs$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "rSpecs", "symbols": ["rSpecs$ebnf$1"] }, { "name": "rSpecs", "symbols": ["__"] }, { "name": "rSpec", "symbols": ["tolerance"] }, { "name": "rSpec", "symbols": ["power_rating"] }, { "name": "rSpec", "symbols": ["packageSize"] }, { "name": "power_rating$ebnf$1", "symbols": ["powerMetricPrefix"], "postprocess": id }, { "name": "power_rating$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "power_rating", "symbols": ["decimal", "_", "power_rating$ebnf$1", "_", "watts"], "postprocess": function postprocess(d) {
                var quantity = d[0];
                var metricPrefix = d[2];
                return { power_rating: parseFloat(quantity + (metricPrefix || '')) };
            }
        }, { "name": "watts", "symbols": ["watts_"], "postprocess": nuller }, { "name": "watts_", "symbols": ["W"] }, { "name": "watts_", "symbols": ["W", "A", "T", "T", "S"] }, { "name": "resistance", "symbols": ["decimal", "_", "rest"], "postprocess": resistance }, { "name": "rest$ebnf$1", "symbols": ["int"], "postprocess": id }, { "name": "rest$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "rest$ebnf$2$subexpression$1", "symbols": ["_", "ohm"] }, { "name": "rest$ebnf$2", "symbols": ["rest$ebnf$2$subexpression$1"], "postprocess": id }, { "name": "rest$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "rest", "symbols": ["rMetricPrefix", "rest$ebnf$1", "rest$ebnf$2"] }, { "name": "rest", "symbols": ["ohm"] }, { "name": "ohm", "symbols": ["ohm_"], "postprocess": nuller }, { "name": "ohm_", "symbols": ["O", "H", "M"] }, { "name": "ohm_", "symbols": [{ "literal": "Ω" }] }, { "name": "ohm_", "symbols": [{ "literal": "Ω" }] }, { "name": "led", "symbols": ["led_letters", "ledSpecs"] }, { "name": "led", "symbols": ["ledSpecs", "led_letters"] }, { "name": "led", "symbols": ["ledSpecs", "led_letters", "ledSpecs"] }, { "name": "led_letters", "symbols": ["L", "E", "D"], "postprocess": nuller }, { "name": "ledSpecs$ebnf$1$subexpression$1", "symbols": ["_", "ledSpec", "_"] }, { "name": "ledSpecs$ebnf$1", "symbols": ["ledSpecs$ebnf$1$subexpression$1"] }, { "name": "ledSpecs$ebnf$1$subexpression$2", "symbols": ["_", "ledSpec", "_"] }, { "name": "ledSpecs$ebnf$1", "symbols": ["ledSpecs$ebnf$1", "ledSpecs$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {
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
            } }, { "name": "rMetricPrefix", "symbols": ["giga"], "postprocess": function postprocess() {
                return 'e9  ';
            } }, { "name": "rMetricPrefix", "symbols": ["mega"], "postprocess": function postprocess() {
                return 'e6  ';
            } }, { "name": "rMetricPrefix", "symbols": ["kilo"], "postprocess": function postprocess() {
                return 'e3  ';
            } }, { "name": "rMetricPrefix", "symbols": ["R"], "postprocess": function postprocess() {
                return '';
            } }, { "name": "cMetricPrefix", "symbols": ["micro"], "postprocess": function postprocess() {
                return 'e-6 ';
            } }, { "name": "cMetricPrefix", "symbols": ["nano"], "postprocess": function postprocess() {
                return 'e-9 ';
            } }, { "name": "cMetricPrefix", "symbols": ["pico"], "postprocess": function postprocess() {
                return 'e-12';
            } }],
        ParserStart: "main"
    };
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = grammar;
    } else {
        window.grammar = grammar;
    }
})();
},{}],7:[function(require,module,exports){
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var moo = require('moo');
var nearley = require('nearley');
var equals = require('./equals');

var g = require('./grammar');
var grammar = nearley.Grammar.fromCompiled(g);

function assignAll(objs) {
    return objs.reduce(function (prev, obj) {
        return _extends(prev, obj);
    }, {});
}

function parse(str) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        returnIgnored = _ref.returnIgnored;

    var parser = new nearley.Parser(grammar);

    var words = str.split(/;|,| /).filter(function (word) {
        return word !== '';
    }).map(function (word) {
        return word + ' ';
    });

    var info = parser.save();
    var initialInfo = parser.save();

    var r = words.reduce(function (prev, word) {
        // if it fails, roll it back
        var ignored = prev.ignored;
        var maybeIgnored = prev.maybeIgnored;
        var failed = false;
        var hasPrev = Object.keys(prev.component).length !== 0;
        try {
            parser.feed(word);
        } catch (e) {
            if (!hasPrev) {
                try {
                    parser.restore(initialInfo);
                    parser.feed(word);
                    ignored += maybeIgnored;
                } catch (e) {
                    failed = true;
                    parser.restore(info);
                    ignored += maybeIgnored + word;
                    maybeIgnored = '';
                }
            } else {
                failed = true;
                parser.restore(info);
                ignored += maybeIgnored + word;
                maybeIgnored = '';
            }
        }
        var component = assignAll(parser.results[0] || []);
        var empty = Object.keys(component).length === 0;
        if (!failed) {
            var eq = equals(component, prev.component);
            var isNumber = !isNaN(parseFloat(word));
            if (isNumber && (eq || empty)) {
                // the parser waits for further input on numbers so we can't be
                // sure it has been ignored
                maybeIgnored += word;
            } else if (hasPrev && (eq || empty)) {
                ignored += maybeIgnored + word;
                maybeIgnored = '';
            } else {
                maybeIgnored = '';
                info = parser.save();
            }
        }
        return {
            component: _extends(prev.component, component),
            ignored: ignored,
            maybeIgnored: maybeIgnored
        };
    }, { component: {}, ignored: '', maybeIgnored: '' });

    var ignored = (r.ignored + r.maybeIgnored).trim();

    if (returnIgnored) {
        return { component: r.component, ignored: ignored };
    }

    return r.component;
}

module.exports = parse;
},{"./equals":5,"./grammar":6,"moo":10,"nearley":11}],10:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory) /* global define */
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.moo = factory()
  }
}(this, function() {
  'use strict';

  var hasOwnProperty = Object.prototype.hasOwnProperty

  // polyfill assign(), so we support IE9+
  var assign = typeof Object.assign === 'function' ? Object.assign :
    // https://tc39.github.io/ecma262/#sec-object.assign
    function(target, sources) {
      if (target == null) {
        throw new TypeError('Target cannot be null or undefined');
      }
      target = Object(target)

      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        if (source == null) continue

        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }

  var hasSticky = typeof new RegExp().sticky === 'boolean'

  /***************************************************************************/

  function isRegExp(o) { return o && o.constructor === RegExp }
  function isObject(o) { return o && typeof o === 'object' && o.constructor !== RegExp && !Array.isArray(o) }

  function reEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  }
  function reGroups(s) {
    var re = new RegExp('|' + s)
    return re.exec('').length - 1
  }
  function reCapture(s) {
    return '(' + s + ')'
  }
  function reUnion(regexps) {
    var source =  regexps.map(function(s) {
      return "(?:" + s + ")"
    }).join('|')
    return "(?:" + source + ")"
  }

  function regexpOrLiteral(obj) {
    if (typeof obj === 'string') {
      return '(?:' + reEscape(obj) + ')'

    } else if (isRegExp(obj)) {
      // TODO: consider /u support
      if (obj.ignoreCase) { throw new Error('RegExp /i flag not allowed') }
      if (obj.global) { throw new Error('RegExp /g flag is implied') }
      if (obj.sticky) { throw new Error('RegExp /y flag is implied') }
      if (obj.multiline) { throw new Error('RegExp /m flag is implied') }
      return obj.source

    } else {
      throw new Error('not a pattern: ' + obj)
    }
  }

  function objectToRules(object) {
    var keys = Object.getOwnPropertyNames(object)
    var result = []
    for (var i=0; i<keys.length; i++) {
      var key = keys[i]
      var thing = object[key]
      var rules = Array.isArray(thing) ? thing : [thing]
      var match = []
      rules.forEach(function(rule) {
        if (isObject(rule)) {
          if (match.length) result.push(ruleOptions(key, match))
          result.push(ruleOptions(key, rule))
          match = []
        } else {
          match.push(rule)
        }
      })
      if (match.length) result.push(ruleOptions(key, match))
    }
    return result
  }

  function arrayToRules(array) {
    var result = []
    for (var i=0; i<array.length; i++) {
      var obj = array[i]
      if (!obj.name) {
        throw new Error('Rule has no name: ' + JSON.stringify(obj))
      }
      result.push(ruleOptions(obj.name, obj))
    }
    return result
  }

  function ruleOptions(name, obj) {
    if (typeof obj !== 'object' || Array.isArray(obj) || isRegExp(obj)) {
      obj = { match: obj }
    }

    // nb. error implies lineBreaks
    var options = assign({
      tokenType: name,
      lineBreaks: !!obj.error,
      pop: false,
      next: null,
      push: null,
      error: false,
      value: null,
      getType: null,
    }, obj)

    // convert to array
    var match = options.match
    options.match = Array.isArray(match) ? match : match ? [match] : []
    options.match.sort(function(a, b) {
      return isRegExp(a) && isRegExp(b) ? 0
           : isRegExp(b) ? -1 : isRegExp(a) ? +1 : b.length - a.length
    })
    if (options.keywords) {
      options.getType = keywordTransform(options.keywords)
    }
    return options
  }

  function compileRules(rules, hasStates) {
    rules = Array.isArray(rules) ? arrayToRules(rules) : objectToRules(rules)

    var errorRule = null
    var groups = []
    var parts = []
    for (var i=0; i<rules.length; i++) {
      var options = rules[i]

      if (options.error) {
        if (errorRule) {
          throw new Error("Multiple error rules not allowed: (for token '" + options.tokenType + "')")
        }
        errorRule = options
      }

      // skip rules with no match
      if (options.match.length === 0) {
        continue
      }
      groups.push(options)

      // convert to RegExp
      var pat = reUnion(options.match.map(regexpOrLiteral))

      // validate
      var regexp = new RegExp(pat)
      if (regexp.test("")) {
        throw new Error("RegExp matches empty string: " + regexp)
      }
      var groupCount = reGroups(pat)
      if (groupCount > 0) {
        throw new Error("RegExp has capture groups: " + regexp + "\nUse (?: … ) instead")
      }
      if (!hasStates && (options.pop || options.push || options.next)) {
        throw new Error("State-switching options are not allowed in stateless lexers (for token '" + options.tokenType + "')")
      }

      // try and detect rules matching newlines
      if (!options.lineBreaks && regexp.test('\n')) {
        throw new Error('Rule should declare lineBreaks: ' + regexp)
      }

      // store regex
      parts.push(reCapture(pat))
    }

    var suffix = hasSticky ? '' : '|(?:)'
    var flags = hasSticky ? 'ym' : 'gm'
    var combined = new RegExp(reUnion(parts) + suffix, flags)

    return {regexp: combined, groups: groups, error: errorRule}
  }

  function compile(rules) {
    var result = compileRules(rules)
    return new Lexer({start: result}, 'start')
  }

  function compileStates(states, start) {
    var keys = Object.getOwnPropertyNames(states)
    if (!start) start = keys[0]

    var map = Object.create(null)
    for (var i=0; i<keys.length; i++) {
      var key = keys[i]
      map[key] = compileRules(states[key], true)
    }

    for (var i=0; i<keys.length; i++) {
      var groups = map[keys[i]].groups
      for (var j=0; j<groups.length; j++) {
        var g = groups[j]
        var state = g && (g.push || g.next)
        if (state && !map[state]) {
          throw new Error("Missing state '" + state + "' (in token '" + g.tokenType + "' of state '" + keys[i] + "')")
        }
        if (g && g.pop && +g.pop !== 1) {
          throw new Error("pop must be 1 (in token '" + g.tokenType + "' of state '" + keys[i] + "')")
        }
      }
    }

    return new Lexer(map, start)
  }

  function keywordTransform(map) {
    var reverseMap = Object.create(null)
    var byLength = Object.create(null)
    var types = Object.getOwnPropertyNames(map)
    for (var i=0; i<types.length; i++) {
      var tokenType = types[i]
      var item = map[tokenType]
      var keywordList = Array.isArray(item) ? item : [item]
      keywordList.forEach(function(keyword) {
        (byLength[keyword.length] = byLength[keyword.length] || []).push(keyword)
        if (typeof keyword !== 'string') {
          throw new Error("keyword must be string (in keyword '" + tokenType + "')")
        }
        reverseMap[keyword] = tokenType
      })
    }

    // fast string lookup
    // https://jsperf.com/string-lookups
    function str(x) { return JSON.stringify(x) }
    var source = ''
    source += '(function(value) {\n'
    source += 'switch (value.length) {\n'
    for (var length in byLength) {
      var keywords = byLength[length]
      source += 'case ' + length + ':\n'
      source += 'switch (value) {\n'
      keywords.forEach(function(keyword) {
        var tokenType = reverseMap[keyword]
        source += 'case ' + str(keyword) + ': return ' + str(tokenType) + '\n'
      })
      source += '}\n'
    }
    source += '}\n'
    source += '})'
    return eval(source) // getType
  }

  /***************************************************************************/

  var Lexer = function(states, state) {
    this.startState = state
    this.states = states
    this.buffer = ''
    this.stack = []
    this.reset()
  }

  Lexer.prototype.reset = function(data, info) {
    this.buffer = data || ''
    this.index = 0
    this.line = info ? info.line : 1
    this.col = info ? info.col : 1
    this.setState(info ? info.state : this.startState)
    return this
  }

  Lexer.prototype.save = function() {
    return {
      line: this.line,
      col: this.col,
      state: this.state,
    }
  }

  Lexer.prototype.setState = function(state) {
    if (!state || this.state === state) return
    this.state = state
    var info = this.states[state]
    this.groups = info.groups
    this.error = info.error || {lineBreaks: true, shouldThrow: true}
    this.re = info.regexp
  }

  Lexer.prototype.popState = function() {
    this.setState(this.stack.pop())
  }

  Lexer.prototype.pushState = function(state) {
    this.stack.push(this.state)
    this.setState(state)
  }

  Lexer.prototype._eat = hasSticky ? function(re) { // assume re is /y
    return re.exec(this.buffer)
  } : function(re) { // assume re is /g
    var match = re.exec(this.buffer)
    // will always match, since we used the |(?:) trick
    if (match[0].length === 0) {
      return null
    }
    return match
  }

  Lexer.prototype._getGroup = function(match) {
    if (match === null) {
      return -1
    }

    var groupCount = this.groups.length
    for (var i = 0; i < groupCount; i++) {
      if (match[i + 1] !== undefined) {
        return i
      }
    }
    throw new Error('oops')
  }

  function tokenToString() {
    return this.value
  }

  Lexer.prototype.next = function() {
    var re = this.re
    var buffer = this.buffer

    var index = re.lastIndex = this.index
    if (index === buffer.length) {
      return // EOF
    }

    var match = this._eat(re)
    var i = this._getGroup(match)

    var group, text
    if (i === -1) {
      group = this.error

      // consume rest of buffer
      text = buffer.slice(index)

    } else {
      text = match[0]
      group = this.groups[i]
    }

    // count line breaks
    var lineBreaks = 0
    if (group.lineBreaks) {
      var matchNL = /\n/g
      var nl = 1
      if (text === '\n') {
        lineBreaks = 1
      } else {
        while (matchNL.exec(text)) { lineBreaks++; nl = matchNL.lastIndex }
      }
    }

    var token = {
      type: (group.getType && group.getType(text)) || group.tokenType,
      value: group.value ? group.value(text) : text,
      text: text,
      toString: tokenToString,
      offset: index,
      lineBreaks: lineBreaks,
      line: this.line,
      col: this.col,
    }
    // nb. adding more props to token object will make V8 sad!

    var size = text.length
    this.index += size
    this.line += lineBreaks
    if (lineBreaks !== 0) {
      this.col = size - nl + 1
    } else {
      this.col += size
    }
    // throw, if no rule with {error: true}
    if (group.shouldThrow) {
      throw new Error(this.formatError(token, "invalid syntax"))
    }

    if (group.pop) this.popState()
    else if (group.push) this.pushState(group.push)
    else if (group.next) this.setState(group.next)
    return token
  }

  if (typeof Symbol !== 'undefined' && Symbol.iterator) {
    var LexerIterator = function(lexer) {
      this.lexer = lexer
    }

    LexerIterator.prototype.next = function() {
      var token = this.lexer.next()
      return {value: token, done: !token}
    }

    LexerIterator.prototype[Symbol.iterator] = function() {
      return this
    }

    Lexer.prototype[Symbol.iterator] = function() {
      return new LexerIterator(this)
    }
  }

  Lexer.prototype.formatError = function(token, message) {
    var value = token.value
    var index = token.offset
    var eol = token.lineBreaks ? value.indexOf('\n') : value.length
    var start = Math.max(0, index - token.col + 1)
    var firstLine = this.buffer.substring(start, index + eol)
    message += " at line " + token.line + " col " + token.col + ":\n\n"
    message += "  " + firstLine + "\n"
    message += "  " + Array(token.col).join(" ") + "^"
    return message
  }

  Lexer.prototype.clone = function() {
    return new Lexer(this.states, this.state)
  }

  Lexer.prototype.has = function(tokenType) {
    for (var s in this.states) {
      var groups = this.states[s].groups
      for (var i=0; i<groups.length; i++) {
        var group = groups[i]
        if (group.tokenType === tokenType) return true
        if (group.keywords && hasOwnProperty.call(group.keywords, tokenType)) {
          return true
        }
      }
    }
    return false
  }


  return {
    compile: compile,
    states: compileStates,
    error: Object.freeze({error: true}),
  }

}))

},{}],11:[function(require,module,exports){
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
    var copy = left.nextState(right);
    this.states.push(copy);
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

    var token;
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
                var next = state.nextState({data: value, token: token, isToken: true, reference: n - 1});
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
            err.token = token;
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
