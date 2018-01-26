const {eg_config, parser_tests} = require('./utils');

describe('passive', () => {
  const config = eg_config('strict', 'passive');

  describe('resistor', () => {
    const cases = {
      '10k': {
        type: 'resistor',
        resistance: 10e3,
      },
      '10k 10%': {
        type: 'resistor',
        tolerance: 10,
      },
      '10k 0805': {
        type: 'resistor',
        package: '0805',
      },
      '10k 125mW': {
        type: 'resistor',
        power: 125e-3,
      },
      '10k pot': {
        type: 'resistor',
        rtype: 'pot',
      },
      '10k 10% 0805 125mW': {
        type: 'resistor',
        resistance: 10e3,
        tolerance: 10,
        package: '0805',
        power: 125e-3,
      },
    };
    parser_tests(config, cases);
  });

  describe('capacitor', () => {
    const cases = {
      '10nF': {
        type: 'capacitor',
        capacitance: 10e-9,
      },
      '10nF 10%': {
        type: 'capacitor',
        tolerance: 10,
      },
      '10nF 0805': {
        type: 'capacitor',
        package: '0805',
      },
      '10nF 25V': {
        type: 'capacitor',
        voltage: 25,
      },
      '10uF alu': {
        type: 'capacitor',
        dielectric: 'ALU',
      },
      '10nF 10% 0805 25V X7R': {
        type: 'capacitor',
        capacitance: 10e-9,
        tolerance: 10,
        package: '0805',
        voltage: 25,
        dielectric: 'X7R',
      },
    };
    parser_tests(config, cases);
  });

  describe('inductor', () => {
    const cases = {
      '10mH': {
        type: 'inductor',
        inductance: 10e-3,
      },
      '10mH 10%': {
        type: 'inductor',
        tolerance: 10,
      },
      '10mH 500mA': {
        type: 'inductor',
        current: 500e-3,
      },
      '10mH 10% 0805 500mA': {
        type: 'inductor',
        inductance: 10e-3,
        tolerance: 10,
        package: '0805',
        current: 500e-3,
      },
    };
    parser_tests(config, cases);
  });

  describe('oscillators correctly', () => {
    const cases = {
      '16MHz': {
        type: 'oscillator',
        frequency: 16e6,
      },
      '16MHz 1%': {
        type: 'oscillator',
        tolerance: 1,
      },
      '16MHz 12pF': {
        type: 'oscillator',
        capacitance: 12e-12,
      },
      '16MHz 1% 12pF': {
        type: 'oscillator',
        frequency: 16e6,
        tolerance: 1,
        capacitance: 12e-12,
      },
    };
    parser_tests(config, cases);
  });
});
