const nearley = require('nearley')
const assert  = require('assert')

const grammar = require('../lib/grammar')

describe('SMD capacitors', () => {
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

  it('parses tolerance 2', () => {
    const p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
    p.feed('1uF 0603 +/-30%')
    assert(p.results.length > 0, 'has no result')
  })

  it('parses tolerance 3', () => {
    const p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
    p.feed('1uF 0603 ±10%')
    assert(p.results.length > 0, 'has no result')
  })

  it('can have things in any order', () => {
    const p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
    p.feed('25% 0603 1uF')
    assert(p.results.length > 0, 'has no result')
  })

  it('can have things in any order 2', () => {
    const p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
    p.feed('25% 1uF 0603')
    assert(p.results.length > 0, 'has no result')
  })

  it('can have things in any order 3', () => {
    const p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
    p.feed('1uF 25% 0603')
    assert(p.results.length > 0, 'has no result')
  })

})
