const {eg_config, parser_tests} = require('./utils');

describe('diode', () => {
  const config = eg_config('strict', 'diode');

  describe('parses diode codes', () => {
    const cases = {
      '1N4148': {
        type: 'diode',
        code: '1N4148',
      },
    };
    parser_tests(config, cases);
  });

  describe('signal', () => {
    const result_no_code = {
      type: 'diode',
      dtype: 'signal',
    };
    const result = {
      type: 'diode',
      dtype: 'signal',
      code: '1N4148',
    };
    const cases = {
      sig: result_no_code,
      'sig 1N4148': result,
      '1N4148 sig': result,
    };
    parser_tests(config, cases);
  });

  describe('rectifier', () => {
    const result_no_code = {
      type: 'diode',
      dtype: 'rectifier',
    };
    const result = {
      type: 'diode',
      dtype: 'rectifier',
      code: '1N4007',
    };
    const cases = {
      rect: result_no_code,
      'rect 1N4007': result,
      '1N4007 rect': result,
    };
    parser_tests(config, cases);
  });

  describe('schottky', () => {
    const result_no_code = {
      type: 'diode',
      dtype: 'schottky',
    };
    const result = {
      type: 'diode',
      dtype: 'schottky',
      code: 'BAT54S',
    };
    const cases = {
      sk: result_no_code,
      'sk BAT54S': result,
      'BAT54S sk': result,
    };
    parser_tests(config, cases);
  });

  describe('led', () => {
    const cases = {
      'led white': {
        type: 'diode',
        dtype: 'led',
        color: 'white',
      },
    };
    parser_tests(config, cases);
  });

  describe('zener', () => {
    const cases = {
      'z 5V': {
        type: 'diode',
        dtype: 'zener',
        voltage: 5,
      },
    };
    parser_tests(config, cases);
  });
});

describe('transistor', () => {
  const config = eg_config('strict', 'transistor');

  describe('parses transistor codes correctly', () => {
    const cases = {
      '2N2222': {
        type: 'transistor',
        code: '2N2222',
      },
    };
    parser_tests(config, cases);
  });

  describe('npn', () => {
    const result = {
      type: 'transistor',
      ttype: 'npn',
      code: '2N2222',
    };
    const cases = {
      'npn 2N2222': result,
      '2N2222 npn': result,
    };
    parser_tests(config, cases);
  });

  describe('pnp', () => {
    const result = {
      type: 'transistor',
      ttype: 'pnp',
      code: 'BC547',
    };
    const cases = {
      'pnp BC547': result,
      'BC547 pnp': result,
    };
    parser_tests(config, cases);
  });

  describe('nmos', () => {
    const result = {
      type: 'transistor',
      ttype: 'nmos',
      code: '2N7000',
    };
    const cases = {
      'nmos 2N7000': result,
      '2N7000 nmos': result,
    };
    parser_tests(config, cases);
  });

  describe('pmos', () => {
    const cases = {
      pmos: {
        type: 'transistor',
        ttype: 'pmos',
      },
    };
    parser_tests(config, cases);
  });
});
