const nearley = require('nearley')
const grammar = require('./grammar')

function parseElectronicComponent(str) {
  const parser = new nearley.Parser(
    grammar.ParserRules,
    grammar.ParserStart,
    {keepHistory: true}
  )
  const chars = str.split('')
  let results = chars.map(c => {
    const info = parser.save()
    //if it fails, roll it back
    try {
      parser.feed(c)
    } catch(e) {
      parser.restore(info)
    }
    return parser.results[0]
  })
  //return the last valid result
  results = results.filter(r => r != null)
  return results[results.length - 1]
}

module.exports = parseElectronicComponent
