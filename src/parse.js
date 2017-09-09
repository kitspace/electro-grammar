const nearley = require('nearley')
const grammar = require('./grammar')

function parse(str, {returnIgnored} = {}) {
  const parser = new nearley.Parser(
    grammar.ParserRules,
    grammar.ParserStart,
    {keepHistory: true}
  )
  const words = str.split(/;|,| /)
    .filter(word => word !== '')
    .map(word => word + ' ')
  let info = parser.save()
  let ignored = ''
  return words.reduce((prev, word) => {
    // if it fails, roll it back
    try {
      parser.feed(word)
    } catch(e) {
      ignored += word
      parser.restore(info)
    }
    info = parser.save()
    // return the latest valid result
    const result = parser.results[0]
    if (result && returnIgnored) {
      return {result, ignored: ignored.trim()}
    } else if (result) {
      return result
    } else {
      return prev
    }
  }, {})
}

module.exports = parse
