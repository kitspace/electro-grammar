const {eg_config, lexer_tests} = require('./utils');

describe('dielectric', () => {
  const config = eg_config('strict', 'dielectric');

  describe('class1', () => {
    const cases = {
      M7G: ['M7G', 'm7g', 'P100', 'p100', 'ag'],
      C0G: ['C0G', 'c0g', 'NP0', 'np0', 'cg'],
      H2G: ['H2G', 'h2g', 'N33', 'n33', 'hg'],
      L2G: ['L2G', 'l2g', 'N75', 'n75', 'lg'],
      P2H: ['P2H', 'p2h', 'N150', 'n150', 'ph'],
      R2H: ['R2H', 'r2h', 'N220', 'n220', 'rh'],
      S2H: ['S2H', 's2h', 'N330', 'n330', 'sh'],
      T2H: ['T2H', 't2h', 'N470', 'n470', 'th'],
      U2J: ['U2J', 'u2j', 'N750', 'n750', 'uj'],
      Q3K: ['Q3K', 'q3k', 'N1000', 'n1000', 'qk'],
      P3K: ['P3K', 'p3k', 'N1500', 'n1500', 'vk'],
    };

    lexer_tests(config, cases, 'dielectric', null);
  });

  describe('class2', () => {
    const cases = {
      X4P: ['X4P', 'x4p'],
      Y5R: ['Y5R', 'y5r'],
      Z6S: ['Z6S', 'z6s'],
    };
    lexer_tests(config, cases, 'dielectric', null);
  });

  describe('aluminium electrolytic', () => {
    const cases = {
      ALU: ['ALU', 'alu', 'aluminium', 'elco', 'electrolytic'],
    };
    lexer_tests(config, cases, 'dielectric', null);
  });

  describe('tantalum', () => {
    const cases = {
      TAN: ['TAN', 'tan', 'tantalum'],
    };
    lexer_tests(config, cases, 'dielectric', null);
  });
});
