/*
const assert = require('better-assert')

const equals = require('../lib/equals')
const parse = require('../lib/parse')

describe('equality check', () => {
    it('does not equal components of different types', () => {
        const c1 = parse('0.1uF 0402 10% 25V X7R').component
        const c2 = parse('1k 0603 1%').component
        assert(!equals(c1, c2))
    })
    it('equals empty objects', () => {
        assert(equals({}, {}))
    })
    it('equals empty string and empty object', () => {
        assert(equals('', {}))
    })
    it('equals null and empty object', () => {
        assert(equals(null, {}))
    })
    it('equals undefined and empty object', () => {
        assert(equals(undefined, {}))
    })
    it('equals capacitors', () => {
        const c1 = parse('0.1uF 0402 10% 25V X7R').component
        const c2 = parse('100nF 0402 10% 25V X7R').component
        assert(equals(c1, c2))
    })
    it('does not equal when attribute is missing for one', () => {
        const c1 = parse('0.1uF 0402 10% 25V X7R').component
        const c2 = parse('100nF 0402 10% X7R').component
        assert(!equals(c1, c2))
    })
    it('equals resistors', () => {
        const c1 = parse('1000 ohm 0603 1%').component
        const c2 = parse('1k 0603 1%').component
        assert(equals(c1, c2))
    })
    it('does not equal when slightly off', () => {
        const c1 = parse('1000.000000001 ohm 0603 1%').component
        const c2 = parse('1k 0603 1%').component
        assert(!equals(c1, c2))
    })
    it('equals LEDs', () => {
        const c1 = parse('led 0603 red').component
        const c2 = parse('LED 0603 RED').component
        assert(equals(c1, c2))
    })
})
*/
