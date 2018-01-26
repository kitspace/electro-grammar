const {ElectroGrammarListener} = require('./ElectroGrammarListener');

function handle_option(ctx, options) {
  const key = Object.keys(options).find(key => {
    if (key in ctx && ctx[key]()) {
      return key;
    }
  });
  return options[key];
}

function handle_unit(ctx, prefix) {
  return Number(ctx.NUMBER().getText() + prefix);
}

function handle_prefix(ctx) {
  const prefix = {
    GIGA: 'e9',
    MEGA: 'e6',
    KILO: 'e3',
    MILI: 'e-3',
    MICRO: 'e-6',
    NANO: 'e-9',
    PICO: 'e-12',
  };
  return handle_option(ctx, prefix);
}

function handle_package_chip(ctx) {
  const chip = {
    CHIP_0201: '0201',
    CHIP_0402: '0402',
    CHIP_0603: '0603',
    CHIP_i008004: '008004',
    CHIP_i009005: '009005',
    CHIP_i01005: '01005',
    CHIP_i0201: '0201',
    CHIP_i0402: '0402',
    CHIP_i0603: '0603',
    CHIP_i0805: '0805',
    CHIP_i1008: '1008',
    CHIP_i1206: '1206',
    CHIP_i1210: '1210',
    CHIP_i1806: '1806',
    CHIP_i1812: '1812',
    CHIP_i1825: '1825',
    CHIP_i2010: '2010',
    CHIP_i2512: '2512',
    CHIP_i2920: '2920',
  };
  return handle_option(ctx, chip);
}

function handle_package_eia(ctx) {
  const eia = {
    EIA_2012_12: 'EIA-2012-12',
    EIA_3216_10: 'EIA-3216-10',
    EIA_3216_12: 'EIA-3216-12',
    EIA_3216_18: 'EIA-3216-18',
    EIA_3528_12: 'EIA-3528-12',
    EIA_3528_21: 'EIA-3528-21',
    EIA_6032_15: 'EIA-6032-15',
    EIA_6032_28: 'EIA-6032-28',
    EIA_7260_38: 'EIA-7260-38',
    EIA_7343_20: 'EIA-7343-20',
    EIA_7343_31: 'EIA-7343-31',
    EIA_7343_43: 'EIA-7343-43',
  };
  return handle_option(ctx, eia);
}

function handle_package_panasonic(ctx) {
  const panasonic = {
    PANASONIC_A: 'PANASONIC A',
    PANASONIC_B: 'PANASONIC B',
    PANASONIC_C: 'PANASONIC C',
    PANASONIC_D: 'PANASONIC D',
    PANASONIC_E: 'PANASONIC E',
    PANASONIC_G: 'PANASONIC G',
    PANASONIC_H: 'PANASONIC H',
    PANASONIC_J: 'PANASONIC J',
    PANASONIC_K: 'PANASONIC K',
    CHEMICON_K: 'CHEMICON K',
  };
  return handle_option(ctx, panasonic);
}

function handle_package_sod(ctx) {
  const sod = {
    SOD_723: 'SOD723',
    SOD_523: 'SOD523',
    SOD_323: 'SOD323',
    SOD_128: 'SOD128',
    SOD_123: 'SOD123',
    SOD_80C: 'SOD80C',
  };
  return handle_option(ctx, sod);
}

function handle_package_melf(ctx) {
  const melf = {
    MICRO_MELF: 'MICRO MELF',
    MINI_MELF: 'MINI MELF',
    DEF_MELF: 'MELF',
  };
  return handle_option(ctx, melf);
}

function handle_package_do214(ctx) {
  const do214 = {
    DO214_AA: 'DO214AA',
    DO214_AB: 'DO214AB',
    DO214_AC: 'DO214AC',
  };
  return handle_option(ctx, do214);
}

function handle_package_sot(ctx) {
  const sot = {
    SOT223: 'SOT223',
    SOT89: 'SOT89',
    SOT23: 'SOT23',
    SOT323: 'SOT323',
    SOT416: 'SOT416',
    SOT663: 'SOT663',
    SOT723: 'SOT723',
    SOT883: 'SOT883',
  };
  return handle_option(ctx, sot);
}

function handle_package_dpak(ctx) {
  const dpak = {
    DPAK: 'DPAK',
    D2PAK: 'D2PAK',
    D3PAK: 'D3PAK',
  };
  return handle_option(ctx, dpak);
}

class ToObjectListener extends ElectroGrammarListener {
  constructor() {
    super();
    this.obj = {};
    this.prefix = '';
  }
  exitVprefix(ctx) {
    this.prefix = handle_prefix(ctx);
  }
  exitVoltage(ctx) {
    this.obj['voltage'] = handle_unit(ctx, this.prefix);
    this.prefix = '';
  }
  exitAprefix(ctx) {
    this.prefix = handle_prefix(ctx);
  }
  exitCurrent(ctx) {
    this.obj['current'] = handle_unit(ctx, this.prefix);
    this.prefix = '';
  }
  exitPprefix(ctx) {
    this.prefix = handle_prefix(ctx);
  }
  exitPower(ctx) {
    this.obj['power'] = handle_unit(ctx, this.prefix);
    this.prefix = '';
  }
  exitRprefix(ctx) {
    this.prefix = handle_prefix(ctx);
  }
  exitResistance(ctx) {
    this.obj['resistance'] = handle_unit(ctx, this.prefix);
    this.prefix = '';
  }
  exitCprefix(ctx) {
    this.prefix = handle_prefix(ctx);
  }
  exitCapacitance(ctx) {
    this.obj['capacitance'] = handle_unit(ctx, this.prefix);
    this.prefix = '';
  }
  exitLprefix(ctx) {
    this.prefix = handle_prefix(ctx);
  }
  exitInductance(ctx) {
    this.obj['inductance'] = handle_unit(ctx, this.prefix);
    this.prefix = '';
  }
  exitFprefix(ctx) {
    this.prefix = handle_prefix(ctx);
  }
  exitFrequency(ctx) {
    this.obj['frequency'] = handle_unit(ctx, this.prefix);
    this.prefix = '';
  }
  exitTprefix(ctx) {
    this.prefix = handle_prefix(ctx, this.prefix);
  }
  exitTime(ctx) {
    this.obj['time'] = handle_unit(ctx, this.prefix);
    this.prefix = '';
  }
  exitTemperature(ctx) {
    this.obj['temperature'] = handle_unit(ctx, '');
  }
  exitTolerance(ctx) {
    this.obj['tolerance'] = handle_unit(ctx, '');
  }
  exitPackage_chip_ambiguous(ctx) {
    this.obj['package'] = handle_package_chip(ctx);
    console.log('warning: ambiguous_size: ' + this.obj['package']);
  }
  exitPackage_chip_unambiguous(ctx) {
    this.obj['package'] = handle_package_chip(ctx);
  }
  exitPackage_eia(ctx) {
    this.obj['package'] = handle_package_eia(ctx);
  }
  exitPackage_panasonic(ctx) {
    this.obj['package'] = handle_package_panasonic(ctx);
  }
  exitPackage_sod(ctx) {
    this.obj['package'] = handle_package_sod(ctx);
  }
  exitPackage_melf(ctx) {
    this.obj['package'] = handle_package_melf(ctx);
  }
  exitPackage_do214(ctx) {
    this.obj['package'] = handle_package_do214(ctx);
  }
  exitPackage_sot(ctx) {
    this.obj['package'] = handle_package_sot(ctx);
  }
  exitPackage_dpak(ctx) {
    this.obj['package'] = handle_package_dpak(ctx);
  }
  exitClass1(ctx) {
    const dielectric = {
      M7G: 'M7G',
      C0G: 'C0G',
      H2G: 'H2G',
      L2G: 'L2G',
      P2H: 'P2H',
      R2H: 'R2H',
      S2H: 'S2H',
      T2H: 'T2H',
      U2J: 'U2J',
      Q3K: 'Q3K',
      P3K: 'P3K',
    };
    this.obj['dielectric'] = handle_option(ctx, dielectric);
  }
  exitClass2(ctx) {
    this.obj['dielectric'] = ctx
      .CLASS2()
      .getText()
      .toUpperCase();
  }
  exitAlu(ctx) {
    this.obj['dielectric'] = 'ALU';
  }
  exitTan(ctx) {
    this.obj['dielectric'] = 'TAN';
  }
  exitResistor(ctx) {
    this.obj['type'] = 'resistor';
  }
  exitCapacitor(ctx) {
    this.obj['type'] = 'capacitor';
  }
  exitInductor(ctx) {
    this.obj['type'] = 'inductor';
  }
  exitOscillator(ctx) {
    this.obj['type'] = 'oscillator';
  }
  exitRtype(ctx) {
    if (ctx.POT()) this.obj['rtype'] = 'pot';
  }
  exitDiode(ctx) {
    this.obj['type'] = 'diode';
  }
  exitDcode(ctx) {
    this.obj['code'] = ctx
      .DCODE()
      .getText()
      .toUpperCase();
  }
  exitSignal(ctx) {
    this.obj['dtype'] = 'signal';
  }
  exitRectifier(ctx) {
    this.obj['dtype'] = 'rectifier';
  }
  exitLed(ctx) {
    this.obj['dtype'] = 'led';
  }
  exitSchottky(ctx) {
    this.obj['dtype'] = 'schottky';
  }
  exitZener(ctx) {
    this.obj['dtype'] = 'zener';
  }
  exitColor(ctx) {
    this.obj['color'] = ctx
      .COLOR()
      .getText()
      .toLowerCase();
  }
  exitTransistor(ctx) {
    this.obj['type'] = 'transistor';
  }
  exitTtype(ctx) {
    this.obj['ttype'] = ctx
      .TTYPE()
      .getText()
      .toLowerCase();
  }
  exitTcode(ctx) {
    this.obj['code'] = ctx
      .TCODE()
      .getText()
      .toUpperCase();
  }
}

exports.ToObjectListener = ToObjectListener;
