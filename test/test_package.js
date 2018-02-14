const {eg_config, lexer_tests} = require('./utils');

describe('package', () => {
  const config = eg_config('strict', 'all_packages');

  describe('chip', () => {
    const cases = {
      '008004': ['008004', '0201 metric'],
      '009005': ['009005', '03015'],
      '01005': ['01005', '0402 metric'],
      '0201': ['0201', '0603 metric'],
      '0402': ['0402', '1005'],
      '0603': ['0603', '1608'],
      '0805': ['0805', '2012'],
      '1008': ['1008', '2520'],
      '1206': ['1206', '3216'],
      '1210': ['1210', '3225'],
      '1806': ['1806', '4516'],
      '1825': ['1825', '4564'],
      '2010': ['2010', '5025'],
      '2512': ['2512', '6332'],
      '2920': ['2920', '7451'],
    };
    lexer_tests(config, cases, 'package', null);
  });

  describe('EIA-XXXX-XX', () => {
    const cases = {
      'EIA-2012-12': ['EIA-2012-12', 'KEMET R', 'AVX R'],
      'EIA-3216-10': ['EIA-3216-10', 'KEMET I', 'AVX K'],
      'EIA-3216-12': ['EIA-3216-12', 'KEMET S', 'AVX S'],
      'EIA-3216-18': ['EIA-3216-18', 'KEMET A', 'AVX A'],
      'EIA-3528-12': ['EIA-3528-12', 'KEMET T', 'AVX T'],
      'EIA-3528-21': ['EIA-3528-21', 'KEMET B', 'AVX B'],
      'EIA-6032-15': ['EIA-6032-15', 'KEMET U', 'AVX W'],
      'EIA-6032-28': ['EIA-6032-28', 'KEMET C', 'AVX C'],
      'EIA-7260-38': ['EIA-7260-38', 'KEMET E', 'AVX V'],
      'EIA-7343-20': ['EIA-7343-20', 'KEMET V', 'AVX Y'],
      'EIA-7343-31': ['EIA-7343-31', 'KEMET D', 'AVX D'],
      'EIA-7343-43': ['EIA-7343-43', 'KEMET X', 'AVX E'],
    };
    lexer_tests(config, cases, 'package', null);
  });

  describe('Panasonic', () => {
    const cases = {
      'PANASONIC A': ['Panasonic A', 'ChemiCon B'],
      'PANASONIC B': ['Panasonic B', 'ChemiCon D'],
      'PANASONIC C': ['Panasonic C', 'ChemiCon E'],
      'PANASONIC D': ['Panasonic D', 'ChemiCon F'],
      'PANASONIC E': ['Panasonic E', 'Panasonic F', 'ChemiCon H'],
      'PANASONIC G': ['Panasonic G', 'ChemiCon J'],
      'CHEMICON K': ['ChemiCon K'],
      'PANASONIC H': ['Panasonic H'],
      'PANASONIC J': ['Panasonic J', 'ChemiCon L'],
      'PANASONIC K': ['Panasonic K', 'ChemiCon M'],
    };
    lexer_tests(config, cases, 'package', null);
  });

  describe('SOD', () => {
    const cases = {
      SOD723: ['SOD723'],
      SOD523: ['SOD523', 'SC79'],
      SOD323: ['SOD323', 'SC90'],
      SOD128: ['SOD128'],
      SOD123: ['SOD123'],
      SOD80C: ['SOD80C'],
    };
    lexer_tests(config, cases, 'package', null);
  });

  describe('MELF', () => {
    const cases = {
      'MICRO MELF': ['micro melf', '0102'],
      'MINI MELF': ['mini melf', '0204'],
      MELF: ['melf', '0207'],
    };
    lexer_tests(config, cases, 'package', null);
  });

  describe('DO214', () => {
    const cases = {
      DO214AA: ['DO214AA'],
      DO214AB: ['DO214AB'],
      DO214AC: ['DO214AC'],
    };
    lexer_tests(config, cases, 'package', null);
  });

  describe('SOT', () => {
    const cases = {
      SOT223: ['SOT223'],
      SOT89: ['SOT89'],
      SOT23: ['SOT23'],
      SOT323: ['SOT323'],
      SOT416: ['SOT416'],
      SOT663: ['SOT663'],
      SOT723: ['SOT723'],
      SOT883: ['SOT883'],
    };
    lexer_tests(config, cases, 'package', null);
  });

  describe('DPAK', () => {
    const cases = {
      DPAK: ['DPAK', 'TO252', 'SOT428'],
      D2PAK: ['D2PAK', 'TO263', 'SOT404'],
      D3PAK: ['D3PAK', 'TO268'],
    };
    lexer_tests(config, cases, 'package', null);
  });
});
