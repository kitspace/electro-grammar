var electroGrammar = require('../lib/index')

var parse    = electroGrammar.parse
var matchCPL = electroGrammar.matchCPL

var input     = document.getElementById('input')
var component = document.getElementById('component')
var cplids    = document.getElementById('cplids')

function setOutput() {
  var c = parse(input.value || input.placeholder)
  component.innerHTML = JSON.stringify(c, null, 2)
  var cplParts = matchCPL(c)
  while (cplids.hasChildNodes()) {
      cplids.removeChild(cplids.lastChild);
  }
  cplParts.forEach(function(p) {
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.href = 'https://octopart.com/common-parts-library#' + p
    a.appendChild(document.createTextNode(p))
    li.appendChild(a)
    cplids.appendChild(li)
  })

}

setOutput()
input.oninput = setOutput
