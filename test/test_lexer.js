const assert  = require('better-assert')

const lexer = require('../lib/lexer')

describe('lexer', () => {
  it('globs together numbers 1', () => {
    lexer.reset('1 k')
    const t = lexer.next()
    assert(t.value === '1k')
  })
  it('globs together numbers 2', () => {
    lexer.reset('1k')
    const t = lexer.next()
    assert(t.value === '1k')
  })
  it('globs together numbers 3', () => {
    lexer.reset('100 uF')
    const t = lexer.next()
    assert(t.value === '100uF')
  })
  it('globs together numbers 3', () => {
    lexer.reset('100 uF')
    const t = lexer.next()
    assert(t.value === '100uF')
  })
  it('globs together all the various ways of saying micro', () => {
    const cases = [
      ['10uF', '10uF 0402'],
      ['10micro', '10 micro Farad 0402'],
      ['10𝛍F', '10 𝛍F 0402'],
      ['10𝜇F', '10 𝜇F 0402'],
      ['10𝝁F', '10𝝁F 0402'],
      ['10𝝻F', '10    𝝻F 0402'],
      ['10𝞵F', '10𝞵F 0402'],
    ]
    cases.forEach(([result, description]) => {
      lexer.reset(description)
      const t = lexer.next()
      assert(t.value === result)
    })
  })
})
