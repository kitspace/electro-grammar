var nearley = require('nearley')
var grammar = require('./grammar')

function parseElectronicComponent(str) {
  var parser = new nearley.Parser(
    grammar.ParserRules,
    grammar.ParserStart,
    {keepHistory: true}
  )
  var chars = str.split('')
  chars.forEach(function (c) {
    var info = parser.save()
    try {
      parser.feed(c)
    } catch(e) {
      parser.restore(info)
    }
  })
  return parser.results[0] || null
}

module.exports = parseElectronicComponent
