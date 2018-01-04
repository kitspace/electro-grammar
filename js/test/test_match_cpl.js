const assert = require('better-assert')

const { parse, matchCPL } = require('../lib/index')

describe('match CPL', () => {
    it('matches a capacitor', () => {
        const c = parse('0.1uF 0805 X7R').component
        const cpl_ids = matchCPL(c)
        assert(cpl_ids.length > 0)
    })
    it('matches a resistor', () => {
        const c = parse('10k 0805').component
        const cpl_ids = matchCPL(c)
        assert(cpl_ids.length > 0)
    })
    it("doesn't match a redonculous power resistor", () => {
        const c = parse('10k 0805 10000W').component
        const cpl_ids = matchCPL(c)
        assert(cpl_ids.length === 0)
    })
    it('matches an 0603 red LED', () => {
        const c = parse('LED red 0603').component
        const cpl_ids = matchCPL(c)
        assert(cpl_ids.length > 0)
    })
    it('returns [] on invalid input', () => {
        assert(matchCPL().length === 0)
        assert(matchCPL(null).length === 0)
        assert(matchCPL(undefined).length === 0)
        assert(matchCPL({}).length === 0)
        assert(matchCPL({ whatever: 1 }).length === 0)
        assert(matchCPL(['whatever', 2]).length === 0)
    })
})
