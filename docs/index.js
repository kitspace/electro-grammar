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
