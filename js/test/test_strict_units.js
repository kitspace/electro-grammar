const assert = require('better-assert');

const {get_parser} = require('../lib/index');

function parser(start_rule, key=null) {
  if (key === null) {
    key = start_rule;
  }

  function parse(input) {
    var obj = get_parser(start_rule)(input);
    if (key) {
      return obj[key];
    }
    return obj;
  }

  return parse;
}

function check_with_parser(parser) {
  function check(cases) {
    cases.forEach((test) => {
      // console.log(test, parser(test[0]));
      if (test.length == 2) {
        assert(parser(test[0]) === test[1]);
      } else {
        assert(parser(test[0])[test[1]] === test[2]);
      }
    });
  }
  return check;
}

describe('strict units', () => {
  it('parses voltage correctly', () => {
    const check = check_with_parser(parser('voltage'));

    check([
      ['1kV', 1e3],
      ['1V', 1],
      ['1mV', 1e-3],
    ]);
  });

  it('parses current correctly', () => {
    const parse = parser('current');

    const cases = [
      ['1A', 1],
      ['1mA', 1e-3],
      ['1uA', 1e-6],
      ['1nA', 1e-9],
      ['1pA', 1e-12],
    ];

    cases.forEach((test) => {
      assert(parse(test[0]) === test[1]);
    });
  });

  it('parses power correctly', () => {
    const parse = parser('power');

    const cases = [
      ['1W', 1],
      ['1mW', 1e-3],
    ];

    cases.forEach((test) => {
      assert(parse(test[0]) === test[1]);
    });
  });

  it('parses resistance correctly', () => {
    const parse = parser('resistance');

    const cases = [
      ['1M', 1e6],
      ['1K', 1e3],
      ['1k', 1e3],
      ['1', 1],
      ['1R', 1],
      ['1m', 1e-3],
    ];

    cases.forEach((test) => {
      assert(parse(test[0]) === test[1]);
    });
  });

  it('parses capacitance correctly', () => {
    const parse = parser('capacitance');

    const cases = [
      ['1uF', 1e-6],
      ['1nF', 1e-9],
      ['1pF', 1e-12],
    ];

    cases.forEach((test) => {
      assert(parse(test[0]) === test[1]);
    });
  });

  it('parses inductance correctly', () => {
    const parse = parser('inductance');

    const cases = [
      ['1H', 1],
      ['1mH', 1e-3],
      ['1uH', 1e-6],
      ['1nH', 1e-9],
    ];

    cases.forEach((test) => {
      assert(parse(test[0]) === test[1]);
    });
  });

  it('parses frequency correctly', () => {
    const parse = parser('frequency');

    const cases = [
      ['1GHz', 1e9],
      ['1MHz', 1e6],
      ['1KHz', 1e3],
      ['1kHz', 1e3],
      ['1Hz', 1],
    ];

    cases.forEach((test) => {
      assert(parse(test[0]) === test[1]);
    });
  });

  it('parses time correctly', () => {
    const parse = parser('time');

    const cases = [
      ['1s', 1],
      ['1ms', 1e-3],
      ['1us', 1e-6],
      ['1ns', 1e-9],
      ['1ps', 1e-12],
    ];

    cases.forEach((test) => {
      assert(parse(test[0]) === test[1]);
    });
  });

  it('parses temperature correctly', () => {
    const parse = parser('temperature');

    const cases = [
      ['1C', 1],
      ['1°C', 1],
    ];

    cases.forEach((test) => {
      assert(parse(test[0]) === test[1]);
    });
  });
});

describe('strict tolerance', () => {
  it('parses tolerance correctly', () => {
    const check = check_with_parser(parser('tolerance'));

    check([
      ['1%', 1],
      ['+-1%', 1],
      ['+/-1%', 1],
      ['±1%', 1],
    ]);
  });
});

describe('strict package size', () => {
  const check = check_with_parser(parser('package_size'));

  it('parses imperial packages correctly', () => {
    check([
      ['008004', '008004'],
      ['009005', '009005'],
      ['01005', '01005'],
      ['0805', '0805'],
      ['1008', '1008'],
      ['1206', '1206'],
      ['1210', '1210'],
      ['1806', '1806'],
      ['1825', '1825'],
      ['2010', '2010'],
      ['2512', '2512'],
      ['2920', '2920'],

      ['imperial 0201', '0201'],
      ['imperial 0402', '0402'],
      ['imperial 0603', '0603'],
    ]);
  });

  it('parses metric packages correctly', () => {
    check([
      ['03015', '009005'],
      ['1005', '0402'],
      ['1608', '0603'],
      ['2012', '0805'],
      ['2520', '1008'],
      ['3216', '1206'],
      ['3225', '1210'],
      ['4516', '1806'],
      ['4532', '1812'],
      ['4564', '1825'],
      ['5025', '2010'],
      ['6332', '2512'],
      ['7451', '2920'],

      ['metric 0201', '008004'],
      ['metric 0402', '01005'],
      ['metric 0603', '0201'],
    ]);
  });

  it('parses ambiguous packages correctly', () => {
    check([
      ['0201', '0201'],
      ['0402', '0402'],
      ['0603', '0603'],

      ['i0402', '0402'],
      ['0402i', '0402'],
      ['imperial 0402', '0402'],
      ['0402 imperial', '0402'],

      //['m0603', '0201'],
      //['0603m', '0201'],
      ['metric 0603', '0201'],
      ['0603 metric', '0201'],
    ]);
  });
});

describe('strict dielectric', () => {
  check = check_with_parser(parser('dielectric'));

  it('parses class1 dielectrics correctly', () => {
    check([
      ['M7G', 'M7G'],
      ['TH', 'T2H'],
      ['N1500', 'P3K'],
    ]);
  });

  it('parses class2 dielectrics correctly', () => {
    check([
      ['x4p', 'X4P'],
      ['y5r', 'Y5R'],
      ['z6s', 'Z6S'],
    ]);
  });

  it('parses alu dielectrics correctly', () => {
    check([
      ['alu', 'ALU'],
      ['Aluminium', 'ALU'],
      ['Elco', 'ALU'],
      ['Electrolytic', 'ALU'],
    ]);
  });

  it('parses tan dielectrics correctly', () => {
    check([
      ['tan', 'TAN'],
      ['tantalum', 'TAN'],
    ]);
  });
});

describe('strict passive', () => {
  const parse = parser('passive', key=false);
  const check = check_with_parser(parse);

  it('parses resistors correctly', () => {
    check([
      ['10k', 'type', 'resistor'],
      ['10k', 'resistance', 10e3],

      ['10k 10%', 'type', 'resistor'],
      ['10k 10%', 'tolerance', 10],

      ['10k 0805', 'type', 'resistor'],
      ['10k 0805', 'package_size', '0805'],

      ['10k 125mW', 'type', 'resistor'],
      ['10k 125mW', 'power', 125e-3],

      ['10k pot', 'type', 'resistor'],
      ['10k pot', 'rtype', 'pot'],

      ['10k 10% 0805 125mW', 'type', 'resistor'],
      ['10k 10% 0805 125mW', 'resistance', 10e3],
      ['10k 10% 0805 125mW', 'tolerance', 10],
      ['10k 10% 0805 125mW', 'package_size', '0805'],
      ['10k 10% 0805 125mW', 'power', 125e-3],
    ]);
  });

  it('parses capacitors correctly', () => {
    check([
      ['10nF', 'type', 'capacitor'],
      ['10nF', 'capacitance', 10e-9],

      ['10nF 10%', 'type', 'capacitor'],
	    ['10nF 10%', 'tolerance', 10],

      ['10nF 0805', 'type', 'capacitor'],
      ['10nF 0805', 'package_size', '0805'],

      ['10nF 25V', 'type', 'capacitor'],
      ['10nF 25V', 'voltage', 25],

      ['10uF alu', 'type', 'capacitor'],
      ['10uF alu', 'dielectric', 'ALU'],

      ['10nF 10% 0805 25V X7R', 'type', 'capacitor'],
      ['10nF 10% 0805 25V X7R', 'capacitance', 10e-9],
      ['10nF 10% 0805 25V X7R', 'tolerance', 10],
      ['10nF 10% 0805 25V X7R', 'package_size', '0805'],
      ['10nF 10% 0805 25V X7R', 'voltage', 25],
      ['10nF 10% 0805 25V X7R', 'dielectric', 'X7R'],
    ]);
  });

  it('parses inductors correctly', () => {
    check([
      ['10mH', 'type', 'inductor'],
      ['10mH', 'inductance', 10e-3],

      ['10mH 10%', 'type', 'inductor'],
      ['10mH 10%', 'tolerance', 10],

      ['10mH 0805', 'type', 'inductor'],
      ['10mH 0805', 'package_size', '0805'],

      ['10mH 500mA', 'type', 'inductor'],
      ['10mH 500mA', 'current', 500e-3],

      ['10mH 10% 0805 500mA', 'type', 'inductor'],
      ['10mH 10% 0805 500mA', 'inductance', 10e-3],
      ['10mH 10% 0805 500mA', 'tolerance', 10],
      ['10mH 10% 0805 500mA', 'package_size', '0805'],
      ['10mH 10% 0805 500mA', 'current', 500e-3],
    ]);
  });

  it('parses oscillators correctly', () => {
    check([
      ['16MHz', 'type', 'oscillator'],
      ['16MHz', 'frequency', 16e6],

      // should be defined in ppm
      ['16MHz 1%', 'type', 'oscillator'],
      ['16MHz 1%', 'tolerance', 1],

      ['16MHz 12pF', 'type', 'oscillator'],
      ['16MHz 12pF', 'capacitance', 12e-12],

      ['16MHz 1% 12pF', 'type', 'oscillator'],
      ['16MHz 1% 12pF', 'frequency', 16e6],
      ['16MHz 1% 12pF', 'tolerance', 1],
      ['16MHz 1% 12pF', 'capacitance', 12e-12],
    ]);
  });
});

describe('strict diode', () => {
  const parse = parser('diode', key=false);
  const check = check_with_parser(parse);

  it('parses codes correctly', () => {
    check([
      ['1N4148', 'type', 'diode'],
      ['1N4148', 'code', '1N4148'],
    ]);
  });

  it('parses signal diodes correctly', () => {
    check([
      ['sig', 'type', 'diode'],
      ['sig', 'dtype', 'signal'],

      ['sig 1N4148', 'type', 'diode'],
      ['sig 1N4148', 'dtype', 'signal'],
      ['sig 1N4148', 'code', '1N4148'],

      ['1N4148 sig', 'type', 'diode'],
      ['1N4148 sig', 'dtype', 'signal'],
      ['1N4148 sig', 'code', '1N4148'],
    ]);
  });

  it('parses rectifier diodes correctly', () => {
    check([
      ['rect', 'type', 'diode'],
      ['rect', 'dtype', 'rectifier'],

      ['rect 1N4007', 'type', 'diode'],
      ['rect 1N4007', 'dtype', 'rectifier'],
      ['rect 1N4007', 'code', '1N4007'],

      ['1N4007 rect', 'type', 'diode'],
      ['1N4007 rect', 'dtype', 'rectifier'],
      ['1N4007 rect', 'code', '1N4007'],
    ]);
  });

  it('parses schottky diodes correctly', () => {
    check([
      ['sk', 'type', 'diode'],
      ['sk', 'dtype', 'schottky'],

      ['sk BAT54S', 'type', 'diode'],
      ['sk BAT54S', 'dtype', 'schottky'],
      ['sk BAT54S', 'code', 'BAT54S'],

      ['BAT54S sk', 'type', 'diode'],
      ['BAT54S sk', 'dtype', 'schottky'],
      ['BAT54S sk', 'code', 'BAT54S'],
    ]);
  });

  it('parses leds correctly', () => {
    check([
      ['led white', 'type', 'diode'],
      ['led white', 'dtype', 'led'],
      ['led white', 'color', 'white'],
    ]);
  });

  it('parses zener diodes correctly', () => {
    check([
      ['z 5V', 'type', 'diode'],
      ['z 5V', 'dtype', 'zener'],
      ['z 5V', 'voltage', 5],
    ]);
  });
});

describe('strict transistor', () => {
  const parse = parser('transistor', key=false);
  const check = check_with_parser(parse);

  it('parses transistor codes correctly', () => {
    check([
      ['2N2222', 'type', 'transistor'],
      ['2N2222', 'code', '2N2222'],
    ]);
  });

  it('parses npn transistors correctly', () => {
    check([
      ['npn 2N2222', 'type', 'transistor'],
      ['npn 2N2222', 'ttype', 'npn'],
      ['npn 2N2222', 'code', '2N2222'],

      ['2N2222 npn', 'type', 'transistor'],
      ['2N2222 npn', 'ttype', 'npn'],
      ['2N2222 npn', 'code', '2N2222'],
    ]);
  });

  it('parses pnp transistors correctly', () => {
    check([
      ['pnp BC547', 'type', 'transistor'],
      ['pnp BC547', 'ttype', 'pnp'],
      ['pnp BC547', 'code', 'BC547'],

      ['BC547 pnp', 'type', 'transistor'],
      ['BC547 pnp', 'ttype', 'pnp'],
      ['BC547 pnp', 'code', 'BC547'],
    ]);
  });

  it('parses nmos transistors correctly', () => {
    check([
      ['nmos 2N7000', 'type', 'transistor'],
      ['nmos 2N7000', 'ttype', 'nmos'],
      ['nmos 2N7000', 'code', '2N7000'],

      ['2N7000 nmos', 'type', 'transistor'],
      ['2N7000 nmos', 'ttype', 'nmos'],
      ['2N7000 nmos', 'code', '2N7000'],
    ]);
  });

  it('parses pmos transistors correctly', () => {
    check([
      ['pmos', 'type', 'transistor'],
      ['pmos', 'ttype', 'pmos'],
    ]);
  });
});
