const nearley = require('nearley')
const assert  = require('assert')

const grammar = require('../grammar')

describe('parser', () => {
  it('parses', () => {
    const p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
    p.feed('1uF 0603')
    assert(p.results.length > 0, 'has no result')
  })

  it('parses tolerance', () => {
    const p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
    p.feed('1uF 0603 25%')
    assert(p.results.length > 0, 'has no result')
  })
})
