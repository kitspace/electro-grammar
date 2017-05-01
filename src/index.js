const nearley = require('nearley')
const grammar = require('./grammar')

function parseElectronicComponent(str) {
  const parser = new nearley.Parser(
    grammar.ParserRules,
    grammar.ParserStart,
    {keepHistory: true}
  )
  const chars = str.split('')
  return chars.reduce((prev, c) => {
    const info = parser.save()
    //if it fails, roll it back
    try {
      parser.feed(c)
    } catch(e) {
      parser.restore(info)
    }
    //return the latest valid result
    return parser.results[0] || prev
  }, null)
}

module.exports = parseElectronicComponent
