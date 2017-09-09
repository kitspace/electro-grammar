const nearley = require('nearley')
const grammar = require('./grammar')
const equals  = require('./equals')

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
  const r = words.reduce((prev, word) => {
    // if it fails, roll it back
    try {
      parser.feed(word)
    } catch(e) {
      parser.restore(info)
    }
    info = parser.save()
    const result = parser.results[0]
    let ignored = prev.ignored
    if (!result || equals(result, prev.result)) {
      ignored += word
    }
    return {result: result || prev.result, ignored}
  }, {result: {}, ignored: ''})
  if (returnIgnored) {
    return {result: r.result, ignored: r.ignored.trim()}
  }
  return r.result
}

module.exports = parse
