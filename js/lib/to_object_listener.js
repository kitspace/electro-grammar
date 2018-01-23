const {ElectroGrammarListener} = require('./ElectroGrammarListener');

function handle_unit(ctx, prefix) {
  return  Number(ctx.NUMBER().getText() + prefix);
}

function handle_prefix(ctx) {
  if ('GIGA' in ctx && ctx.GIGA()) {
    return 'e9';
  }
  if ('MEGA' in ctx && ctx.MEGA()) {
    return 'e6';
  }
  if ('KILO' in ctx && ctx.KILO()) {
    return 'e3';
  }
  if ('MILI' in ctx && ctx.MILI()) {
    return 'e-3';
  }
  if ('MICRO' in ctx && ctx.MICRO()) {
    return 'e-6';
  }
  if ('NANO' in ctx && ctx.NANO()) {
    return 'e-9';
  }
  if ('PICO' in ctx && ctx.PICO()) {
    return 'e-12';
  }
  return '';
}

function handle_package_size(ctx) {
  if ('METRIC_SIZE' in ctx && ctx.METRIC_SIZE()) {
    return ctx.METRIC_SIZE().getText();
  }
  if ('IMPERIAL_SIZE' in ctx && ctx.IMPERIAL_SIZE()) {
    return ctx.IMPERIAL_SIZE().getText();
  }
  if ('AMBIGUOUS_SIZE' in ctx && ctx.AMBIGUOUS_SIZE()) {
    return ctx.AMBIGUOUS_SIZE().getText();
  }
  return '';
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
  exitMetric_size(ctx) {
    var imperial_lookup = {
      '0201': '008004',
      '03015': '009005',
      '0402': '01005',
      '0603': '0201',
      '1005': '0402',
      '1608': '0603',
      '2012': '0805',
      '2520': '1008',
      '3216': '1206',
      '3225': '1210',
      '4516': '1806',
      '4532': '1812',
      '4564': '1825',
      '5025': '2010',
      '6332': '2512',
      '7451': '2920'
    };
    this.obj['package_size'] = imperial_lookup[handle_package_size(ctx)];
  }
  exitImperial_size(ctx) {
    this.obj['package_size'] = handle_package_size(ctx);
  }
  exitAmbiguous_size(ctx) {
    console.log('Warn: Ambiguous package size found');
    this.obj['package_size'] = handle_package_size(ctx);
  }
  exitClass1(ctx) {
    var dielectric;
    if (ctx.M7G()) {
      dielectric = 'M7G';
    }
    else if (ctx.C0G()) {
      dielectric = 'C0G';
    }
    else if (ctx.H2G()) {
      dielectric = 'H2G';
    }
    else if (ctx.L2G()) {
      dielectric = 'L2G';
    }
    else if (ctx.P2H()) {
      dielectric = 'P2H';
    }
    else if (ctx.R2H()) {
      dielectric = 'R2H';
    }
    else if (ctx.S2H()) {
      dielectric = 'S2H';
    }
    else if (ctx.T2H()) {
      dielectric = 'T2H';
    }
    else if (ctx.U2J()) {
      dielectric = 'U2J';
    }
    else if (ctx.Q3K()) {
      dielectric = 'Q3K';
    }
    else if (ctx.P3K()) {
      dielectric = 'P3K';
    }

    this.obj['dielectric'] = dielectric;
  }
  exitClass2(ctx) {
    this.obj['dielectric'] = ctx.CLASS2().getText().toUpperCase();
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
    if (ctx.POT())
      this.obj['rtype'] = 'pot';
  }
  exitDiode(ctx) {
    this.obj['type'] = 'diode';
  }
  exitDcode(ctx) {
    this.obj['code'] = ctx.DCODE().getText().toUpperCase();
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
    this.obj['color'] = ctx.COLOR().getText().toLowerCase();
  }
  exitTransistor(ctx) {
    this.obj['type'] = 'transistor';
  }
  exitTtype(ctx) {
    this.obj['ttype'] = ctx.TTYPE().getText().toLowerCase();
  }
  exitTcode(ctx) {
    this.obj['code'] = ctx.TCODE().getText().toUpperCase();
  }
}

exports.ToObjectListener = ToObjectListener;
