const nearley = require('nearley')
const grammar = require('./grammar')

function assignAll(objs) {
  return objs.reduce((prev, obj) => Object.assign(prev, obj), {})
}

function parse(str) {
  const parser = new nearley.Parser(
    grammar.ParserRules,
    grammar.ParserStart,
    {keepHistory: true}
  )
  const words = str.split(' ')
  let info = parser.save()
  const res = words.reduce((prev, word) => {
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
  }, [])
  return assignAll(res)
}

module.exports = parse
