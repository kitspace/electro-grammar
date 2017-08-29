const nearley = require('nearley')
const assert  = require('better-assert')

const grammar = require('../lib/grammar')

describe('grammar', () => {
  let p
  beforeEach(() => {
    p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
  })

  it('parses', () => {
    p.feed('1uF 0603')
    assert(p.results.length > 0, 'has no result')
  })

  it('parses tolerance', () => {
    p.feed('1uF 0603 25%')
    assert(p.results.length > 0, 'has no result')
  })

  it('parses tolerance 2', () => {
    p.feed('1uF 0603 +/-30%')
    assert(p.results.length > 0, 'has no result')
  })

  it('parses tolerance 3', () => {
    p.feed('1uF 0603 ±10%')
    assert(p.results.length > 0, 'has no result')
  })

  it('can have things in any order', () => {
    p.feed('25% 0603 1uF')
    assert(p.results.length > 0, 'has no result')
  })

  it('can have things in any order 2', () => {
    p.feed('25% 1uF 0603')
    assert(p.results.length > 0, 'has no result')
  })

  it('can have things in any order 3', () => {
    p.feed('1uF 25% 0603')
    assert(p.results.length > 0, 'has no result')
  })

  it('rejects multiple decimal points', () => {
    try {
      p.feed('1.2.3uF 25% 0603')
    } catch (e) {
      assert(e.message.match(/Unexpected/), 'got a different error message')
    }
    assert(p.results == null, 'got a result')
  })

  it('parses voltage rating', () => {
    p.feed('1uF 25V')
    assert(p.results.length > 0, 'has no result')
  })
})
