const nearley = require('nearley')
const grammar = require('./grammar')

const assignAll = objs => objs.reduce((prev, obj) => Object.assign(prev, obj), {})

function parse(str) {
  const parser = new nearley.Parser(
    grammar.ParserRules,
    grammar.ParserStart,
    {keepHistory: true}
  )
  const chars = str.split(' ')
  let info = parser.save()
  const res = chars.reduce((prev, c) => {
    c = c.replace(/,|;/, '') + ' '
    //if it fails, roll it back
    try {
      parser.feed(c)
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
