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
    const component = parser.results[0]
    let ignored = prev.ignored
    if (!component || equals(component, prev.component)) {
      ignored += word
    }
    return {component: component || prev.component, ignored}
  }, {component: {}, ignored: ''})
  if (returnIgnored) {
    return {component: r.component, ignored: r.ignored.trim()}
  }
  return r.component
}

module.exports = parse
