const {eg_config, lexer_tests} = require('./utils');

describe('chip packages', () => {
  const config = eg_config('strict', 'package_size');

  const cases = {
    '008004': ['008004', '0201 metric'],
    '009005': ['009005', '03015'],
    '01005':  ['01005',  '0402 metric'],
    '0201':   ['0201',   '0603 metric'],
    '0402':   ['0402',   '1005'],
    '0603':   ['0603',   '1608'],
    '0805':   ['0805',   '2012'],
    '1008':   ['1008',   '2520'],
    '1206':   ['1206',   '3216'],
    '1210':   ['1210',   '3225'],
    '1806':   ['1806',   '4516'],
    '1825':   ['1825',   '4564'],
    '2010':   ['2010',   '5025'],
    '2512':   ['2512',   '6332'],
    '2920':   ['2920',   '7451']
  };

  lexer_tests(config, cases, 'package_size', null);
});
