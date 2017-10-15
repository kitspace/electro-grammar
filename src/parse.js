const nearley = require('nearley')
const grammar = require('./grammar')

function parse(str) {
  const parser = new nearley.Parser(
    grammar.ParserRules,
    grammar.ParserStart,
    {keepHistory: true}
  )
  const words = str.split(' ')
  let info = parser.save()
  return words.reduce((prev, word) => {
    word = word.replace(/,|;/, '') + ' '
    //if it fails, roll it back
    try {
      parser.feed(word)
    } catch(e) {
      parser.restore(info)
    }
    info = parser.save()
    //return the latest valid result
    return parser.results[0] || prev
  }, {})
}

module.exports = parse
