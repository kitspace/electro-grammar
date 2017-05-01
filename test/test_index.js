const assert  = require('assert')

const parseElectronicComponent = require('../lib/index')

describe('SMD Capacitors', () => {
  it('parses a capacitor', () => {
    const c = parseElectronicComponent('2uF 0603')
    assert(c.capacitance === (2e-6), 'capacitance value is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
  it('parses tolerance', () => {
    const c = parseElectronicComponent('2uF 0603 30%')
    assert(c.capacitance === (2e-6), 'capacitance value is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.tolerance === 30, 'tolerance is wrong')
  })
  it('parses +/- in tolerance', () => {
    const c = parseElectronicComponent('2uF 0603 +/-30%')
    assert(c.capacitance === (2e-6), 'capacitance value is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.tolerance === 30, 'tolerance is wrong')
  })
  it('parses ± in tolerance', () => {
    const c = parseElectronicComponent('2uF 0603 ±30%')
    assert(c.capacitance === (2e-6), 'capacitance value is wrong')
    assert(c.size === '0603', 'size is wrong')
    assert(c.tolerance === 30, 'tolerance is wrong')
  })
  it('parses +- in tolerance', () => {
    const c = parseElectronicComponent('2uF 0603 +-30%')
    assert(c.capacitance === (2e-6), 'capacitance value is wrong')
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
      const c = parseElectronicComponent(d)
      assert(c.capacitance === (10e-6), 'capacitance is wrong')
      assert(c.size === '0402', 'size is wrong')
    })
  })
})

describe('SMD Resistors', () => {
  it('parses a resistor', () => {
    const c = parseElectronicComponent('1k 0603')
    assert(c.resistance === 1000, 'resistance value is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
  it('parses "1k ohm"', () => {
    const c = parseElectronicComponent('1k ohm 0603')
    assert(c.resistance === 1000, 'resistance value is wrong')
    assert(c.size === '0603', 'size is wrong')
  })
  it('parses "1 ohm"', () => {
    const c = parseElectronicComponent('1 ohm 0402')
    assert(c.resistance === 1, 'resistance value is wrong')
    assert(c.size === '0402', 'size is wrong')
  })
  it('parses "1k5"', () => {
    const c = parseElectronicComponent('1k5 0402')
    assert(c.resistance === 1500, 'resistance value is wrong')
    assert(c.size === '0402', 'size is wrong')
  })
  it('parses "1Ω"', () => {
    const c = parseElectronicComponent('1Ω 0805')
    assert(c.resistance === 1, 'resistance value is wrong')
    assert(c.size === '0805', 'size is wrong')
  })
  it('parses tolerance', () => {
    const c = parseElectronicComponent('1k 0805 5%')
    assert(c.resistance === 1000, 'resistance value is wrong')
    assert(c.tolerance === 5, 'tolerance value is wrong')
    assert(c.size === '0805', 'size is wrong')
  })
})
