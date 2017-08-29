const nearley = require('nearley')
const grammar = require('./grammar')

function parseElectronicComponent(str) {
  const parser = new nearley.Parser(
    grammar.ParserRules,
    grammar.ParserStart,
    {keepHistory: true}
  )
  const chars = str.split(' ')
  let info = parser.save()
  return chars.reduce((prev, c) => {
    //if it fails, roll it back
    c = c.replace(/,|;/, '') + ' '
    try {
      parser.feed(c)
    } catch(e) {
      parser.restore(info)
    }
    info = parser.save()
    //return the latest valid result
    return parser.results[0] || prev
  }, null)
}

module.exports = parseElectronicComponent
