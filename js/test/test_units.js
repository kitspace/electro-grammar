const assert = require('better-assert');

const {parse} = require('../lib/index');

describe('Capacitance', () => {
  it('parses uF correctly', () => {
    const cases = [
      '10uF',
    ];

    cases.forEach((text) => {
      const obj = parse(text);
      assert(obj.capacitance === 10e-6);
    });
  });

  it('parses nF correctly', () => {
    const cases = [
      '10nF',
    ];

    cases.forEach((text) => {
      const obj = parse(text);
      assert(obj.capacitance === 10e-9);
    });
  });

  it('parses pF correctly', () => {
    const cases = [
      '10pF',
    ];

    cases.forEach((text) => {
      const obj = parse(text);
      assert(obj.capacitance === 10e-12);
    });
  });
});
