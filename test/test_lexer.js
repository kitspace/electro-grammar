const assert  = require('better-assert')

const lexer = require('../lib/lexer')

describe('lexer', () => {
  it('globs together numbers 1', () => {
    lexer.reset('1 k')
    const t = lexer.next()
    assert(t.value === '1k')
  })
  it('globs together numbers 2', () => {
    lexer.reset('100 uF')
    const t = lexer.next()
    assert(t.value === '100uF')
  })
  it('leaves numbers globbed together', () => {
    lexer.reset('1k')
    const t = lexer.next()
    assert(t.value === '1k')
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
  it('lexes', () => {
    const description = 'adjalkjd 100 µF akjdlkjda 100µF 0603 kajdlkja 8000 alkdjlkajd boojjk'
    const expected = ['adjalkjd', '100µF', 'akjdlkjda', '100µF', '0603kajdlkja', '8000alkdjlkajd', 'boojjk']
    lexer.reset(description)
    expected.forEach(result => {
      const t = lexer.next()
      assert(t.value === result)
    })
  })
  it('can deal with multiple spaces', () => {
    const description = 'adjalkjd 100   µF   akjdlkjda     100µF 0603 kajdlkja    8000 alkdjlkajd boojjk'
    const expected = ['adjalkjd', '100µF', 'akjdlkjda', '100µF', '0603kajdlkja', '8000alkdjlkajd', 'boojjk']
    lexer.reset(description)
    expected.forEach(result => {
      const t = lexer.next()
      assert(t.value === result)
    })
  })
  it('lexes percent numbers correctly', () => {
    const description = '+/- 10% +/- 10 %  ± 1 % +- 5% +-5%'
    const expected = ['+/-10%', '+/-10%', '±1%', '+-5%', '+-5%']
    lexer.reset(description)
    expected.forEach(result => {
      const t = lexer.next()
      assert(t.value === result)
    })
  })
  it("recognizes percent", () => {
    const description = '10% +- 10%  ± 1 %'
    const expected = ['10%', '+-10%', '±1%']
    lexer.reset(description)
    expected.forEach(result => {
      const t = lexer.next()
      assert(t.value === result)
      assert(t.type === 'percent')
    })
  })
  it("doesn't glob together percent plus and minus after a number", () => {
    const description = '10 +/- 10% +- 10% 500 ± 1 %'
    const expected = ['10', '+/-10%', '+-10%', '500', '±1%']
    lexer.reset(description)
    expected.forEach(result => {
      const t = lexer.next()
      assert(t.value === result)
    })
  })
  it("deals with things already together", () => {
    const description = '100k ohm 5 k'
    const expected = ['100k', 'ohm', '5k']
    lexer.reset(description)
    expected.forEach(result => {
      const t = lexer.next()
      assert(t.value === result)
    })
  })
})
