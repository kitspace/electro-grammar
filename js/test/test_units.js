const assert = require('better-assert');

const {parse} = require('../lib/index');

describe('Capacitance', () => {
  it('uF is parsed correctly', () => {
    const cases = [
      '10uF',
    ];

    cases.forEach((text) => {
      const obj = parse(text);
      console.log(text, obj['capacitance']);
      assert(obj['capacitance'] === 10e-5);
    });
  });

  it('nF is parsed correctly', () => {
    const cases = [
      '10nF',
    ];

    cases.forEach((text) => {
      const obj = parse(text);
      console.log(text, obj['capacitance']);
      assert(obj['capacitance'] === 10e-8);
    });
  });

  it('pF is parsed correctly', () => {
    const cases = [
      '10pF',
    ];

    cases.forEach((text) => {
      const obj = parse(text);
      console.log(text, obj['capacitance']);
      assert(obj['capacitance'] === 10e-11);
    });
  });
});
