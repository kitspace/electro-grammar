const assert = require('better-assert')

const {parse} = require('../lib/index')

describe('parsing', () => {
  it("doesn't parse nonsense", () => {
    const c = parse('this is total rubbish')
    assert(c.type == null)
  })
  it('returns empty object on empty', () => {
    assert(parse('').type == null)
  })
})

describe('SMD Capacitors', () => {
  it('parses a capacitor', () => {
    const c = parse('2uF 0603')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 2e-6, 'capacitance value is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
  it("doesn't parse nonsense", () => {
    const c = parse('this is total rubbish')
    assert(c.type == null)
  })
  it('parses tolerance', () => {
    const c = parse('2uF 0603 30%')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 2e-6, 'capacitance value is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.tolerance === 30, 'tolerance is wrong')
  })
  it('parses +/- in tolerance', () => {
    const c = parse('2uF 0603 +/-30%')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 2e-6, 'capacitance value is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.tolerance === 30, 'tolerance is wrong')
  })
  it('parses ± in tolerance', () => {
    const c = parse('2uF 0603 ±30%')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 2e-6, 'capacitance value is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.tolerance === 30, 'tolerance is wrong')
  })
  it('parses +- in tolerance', () => {
    const c = parse('2uF 0603 +-30%')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 2e-6, 'capacitance value is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.tolerance === 30, 'tolerance is wrong')
  })
  it('parses all the various ways of saying micro', () => {
    const descriptions = [
      '10uF 0402',
      '10 micro Farad 0402',
      '10𝛍F 0402',
      '10𝜇F 0402',
      '10𝝁 F 0402',
      '10    𝝻F 0402',
      '10𝞵F 0402',
    ]
    descriptions.forEach(d => {
      const c = parse(d)
      assert(c.type === 'capacitor')
      assert(c.capacitance === 10e-6, 'capacitance is wrong')
      assert(c.size === '0402', 'size is wrong')
    })
  })
  it('ignores extra words', () => {
    const c = parse('100nF 0603 kajdlkja alkdjlkajd')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
  it('ignores extra words 2', () => {
    const c = parse('adjalkjd 100nF akjdlkjda 0603 kajdlkja alkdjlkajd')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
  it('ignores extra words 3', () => {
    const c = parse('capacitor 100nF 0603, warehouse 5')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
  it('ignores extra words 4', () => {
    const c = parse('adjalkjd 0603 akjdlkjda 100nF kajdlkja alkdjlkajd')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
  it('parses characteristic X7R', () => {
    const c = parse('100nF 0603 X7R')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.characteristic === 'X7R', 'characteristic is wrong')
  })
  it('parses characteristic x7r', () => {
    const c = parse('100nF 0603 x7r')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.characteristic === 'X7R', 'characteristic is wrong')
  })
  it('parses characteristic Z5U', () => {
    const c = parse('100nF 0603 Z5U')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.characteristic === 'Z5U', 'characteristic is wrong')
  })
  it('parses characteristic Y5V', () => {
    const c = parse('100nF 0603 Y5V')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.characteristic === 'Y5V', 'characteristic is wrong')
  })
  it('parses characteristic C0G', () => {
    const c = parse('100nF 0603 C0G')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.characteristic === 'C0G', 'characteristic is wrong')
  })
  it('parses characteristic NPO', () => {
    const c = parse('100nF 0603 NP0')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.characteristic === 'C0G', 'characteristic is wrong')
  })
  it('parses characteristic np0', () => {
    const c = parse('100nF 0603 NP0')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.characteristic === 'C0G', 'characteristic is wrong')
  })
  it('parses characteristic c0g', () => {
    const c = parse('100nF 0603 NP0')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.characteristic === 'C0G', 'characteristic is wrong')
  })
  it('parses characteristic C0G/NP0', () => {
    const c = parse('100nF 0603 C0G/NP0')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.characteristic === 'C0G', 'characteristic is wrong')
  })
  it('parses without metric prefix', () => {
    const c = parse('1F 0603 25V')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 1, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.voltage_rating === 25, 'rating is wrong')
  })
  it('parses voltage rating', () => {
    const c = parse('100nF 0603 25V')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.voltage_rating === 25, 'rating is wrong')
  })
  it('parses voltage rating with small v and space', () => {
    const c = parse('100nF 0603 25 v')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.voltage_rating === 25, 'rating is wrong')
  })
  it('takes a hint', () => {
    const c = parse('C 100n 0603')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
  it('takes a hint 2', () => {
    const c = parse('Capacitor 100n 0603')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
  it('takes a hint 3', () => {
    const c = parse('cap 100n 0603')
    assert(c.type === 'capacitor')
    assert(c.capacitance === 100e-9, 'capacitance is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
})

describe('SMD Resistors', () => {
  it('parses a resistor', () => {
    const c = parse('1k 0603')
    assert(c.type === 'resistor')
    assert(c.resistance === 1000, 'resistance value is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
  it('parses "1k ohm"', () => {
    const c = parse('1k ohm 0603')
    assert(c.type === 'resistor')
    assert(c.resistance === 1000, 'resistance value is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
  it('parses "1 ohm"', () => {
    const c = parse('1 ohm 0402')
    assert(c.type === 'resistor')
    assert(c.resistance === 1, 'resistance value is wrong')
    assert(c.size === '0402', 'size is wrong')
  })
  it('parses "1k5"', () => {
    const c = parse('1k5 0402')
    assert(c.type === 'resistor')
    assert(c.resistance === 1500, 'resistance value is wrong')
    assert(c.size === '0402', 'size is wrong')
  })
  it('parses "1.5k"', () => {
    const c = parse('1.5k 0402')
    assert(c.type === 'resistor')
    assert(c.resistance === 1500, 'resistance value is wrong')
    assert(c.size === '0402', 'size is wrong')
  })
  it('parses "1Ω"', () => {
    const c = parse('1Ω 0805')
    assert(c.type === 'resistor')
    assert(c.resistance === 1, 'resistance value is wrong')
    assert(c.size === '0805', 'size is wrong')
  })
  it('parses "1 Ω"', () => {
    const c = parse('1Ω 0805')
    assert(c.type === 'resistor')
    assert(c.resistance === 1, 'resistance value is wrong')
    assert(c.size === '0805', 'size is wrong')
  })
  it('parses "100R"', () => {
    const c = parse('100R')
    assert(c.type === 'resistor')
    assert(c.resistance === 100, 'resistance value is wrong')
  })
  it('parses tolerance', () => {
    const c = parse('1k 0805 5%')
    assert(c.type === 'resistor')
    assert(c.resistance === 1000, 'resistance value is wrong')
    assert(c.tolerance === 5, 'tolerance value is wrong')
    assert(c.size === '0805', 'size is wrong')
  })
  it('parses power rating', () => {
    const c = parse('1k 0805 5% 100mW')
    assert(c.type === 'resistor')
    assert(c.resistance === 1000, 'resistance value is wrong')
    assert(c.tolerance === 5, 'tolerance value is wrong')
    assert(c.size === '0805', 'size is wrong')
    assert(c.power_rating === 0.100, 'power rating is wrong')
  })
  it('parses power rating 2', () => {
    const c = parse('0 ohm 0201 0.125W')
    assert(c.type === 'resistor')
    assert(c.resistance === 0, 'resistance value is wrong')
    assert(c.size === '0201', 'size is wrong')
    assert(c.power_rating === 0.125, 'power rating is wrong')
  })
})

describe('SMD LEDs', () => {
  it('parses red LED' , () => {
    const c = parse('led red 0603')
    assert(c.type === 'led')
    assert(c.color === 'red')
    assert(c.size === '0603', 'size is wrong')
  })
  it('parses green LED' , () => {
    const c = parse('SMD LED GREEN 0805')
    assert(c.type === 'led')
    assert(c.color === 'green')
    assert(c.size === '0805', 'size is wrong')
  })
})
