const nearley = require('nearley')
const grammar = require('./grammar')

function parseElectronicComponent(str) {
  const parser = new nearley.Parser(
    grammar.ParserRules,
    grammar.ParserStart,
    {keepHistory: true}
  )
  const chars = str.split('')
  chars.forEach(c => {
    const info = parser.save()
    try {
      parser.feed(c)
    } catch(e) {
      parser.restore(info)
    }
  })
  return parser.results[0] || null
}

module.exports = parseElectronicComponent
