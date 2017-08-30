'use strict'
var electroGrammar = require('../lib/index')

var parse    = electroGrammar.parse
var matchCPL = electroGrammar.matchCPL

var input     = document.getElementById('input')
var component = document.getElementById('component')
var cplids    = document.getElementById('cplids')

var c = parse(input.value || input.placeholder)
component.innerHTML = JSON.stringify(c, null, 2)
cplids.innerHTML    = JSON.stringify(matchCPL(c), null, 2)

input.oninput = function handleChange(e) {
  c                   = parse(input.value)
  component.innerHTML = JSON.stringify(c, null, 2)
  cplids.innerHTML    = JSON.stringify(matchCPL(c), null, 2)
}

