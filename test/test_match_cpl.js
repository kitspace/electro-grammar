const assert = require('better-assert')

const {parse, matchCPL} = require('../lib/index')

describe('match CPL', () => {
  it('matches a capacitor', () => {
    const c = parse('0.1uF 0603')
    const cpl_ids = matchCPL(c)
    assert(cpl_ids.length > 0)
  })
  it('matches a resistor', () => {
    const c = parse('10k 0805')
    const cpl_ids = matchCPL(c)
    assert(cpl_ids.length > 0)
  })
  it("doesn't match a redonculous power resistor", () => {
    const c = parse('10k 0805 10000W')
    const cpl_ids = matchCPL(c)
    assert(cpl_ids.length === 0)
  })
})
