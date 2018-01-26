from antlr4 import *
from antlr4.error.DiagnosticErrorListener import DiagnosticErrorListener
from antlr4.atn.PredictionMode import PredictionMode
from enum import Enum
from decimal import Decimal
from electro_grammar.ElectroGrammarLexer import ElectroGrammarLexer
from electro_grammar.ElectroGrammarListener import ElectroGrammarListener
from electro_grammar.ElectroGrammarParser import ElectroGrammarParser


class Warnings(Enum):
    ambiguous_size = 0;


class Warning(object):
    def __init__(self, ty, message):
        self.ty = ty
        self.message = message

    def __str__(self):
        return 'warning: %s: %s' % (self.ty.name, self.message)

    def __repr__(self):
        return self.ty.name


def handle_unit(ctx):
    return Decimal(ctx.NUMBER().getText())


def handle_option(ctx, options):
    for k, v in options.items():
        if hasattr(ctx, k) and getattr(ctx, k)():
            return v

def handle_prefix(ctx):
    prefix = {
        'GIGA': Decimal('1e9'),
        'MEGA': Decimal('1e6'),
        'KILO': Decimal('1e3'),
        'MILI': Decimal('1e-3'),
        'MICRO': Decimal('1e-6'),
        'NANO': Decimal('1e-9'),
        'PICO': Decimal('1e-12')
    }
    return handle_option(ctx, prefix)


def handle_package_chip(ctx):
    chip = {
        'CHIP_0201': '0201',
        'CHIP_0402': '0402',
        'CHIP_0603': '0603',
        'CHIP_i008004': '008004',
        'CHIP_i009005': '009005',
        'CHIP_i01005': '01005',
        'CHIP_i0201': '0201',
        'CHIP_i0402': '0402',
        'CHIP_i0603': '0603',
        'CHIP_i0805': '0805',
        'CHIP_i1008': '1008',
        'CHIP_i1206': '1206',
        'CHIP_i1210': '1210',
        'CHIP_i1806': '1806',
        'CHIP_i1812': '1812',
        'CHIP_i1825': '1825',
        'CHIP_i2010': '2010',
        'CHIP_i2512': '2512',
        'CHIP_i2920': '2920'
    }
    return handle_option(ctx, chip)


def handle_package_eia(ctx):
    eia = {
        'EIA_2012_12': 'EIA-2012-12',
        'EIA_3216_10': 'EIA-3216-10',
        'EIA_3216_12': 'EIA-3216-12',
        'EIA_3216_18': 'EIA-3216-18',
        'EIA_3528_12': 'EIA-3528-12',
        'EIA_3528_21': 'EIA-3528-21',
        'EIA_6032_15': 'EIA-6032-15',
        'EIA_6032_28': 'EIA-6032-28',
        'EIA_7260_38': 'EIA-7260-38',
        'EIA_7343_20': 'EIA-7343-20',
        'EIA_7343_31': 'EIA-7343-31',
        'EIA_7343_43': 'EIA-7343-43'
    }
    return handle_option(ctx, eia)


def handle_package_panasonic(ctx):
    panasonic = {
        'PANASONIC_A': 'PANASONIC A',
        'PANASONIC_B': 'PANASONIC B',
        'PANASONIC_C': 'PANASONIC C',
        'PANASONIC_D': 'PANASONIC D',
        'PANASONIC_E': 'PANASONIC E',
        'PANASONIC_G': 'PANASONIC G',
        'PANASONIC_H': 'PANASONIC H',
        'PANASONIC_J': 'PANASONIC J',
        'PANASONIC_K': 'PANASONIC K',
        'CHEMICON_K': 'CHEMICON K'
    }
    return handle_option(ctx, panasonic)


def handle_package_sod(ctx):
    sod = {
        'SOD_723': 'SOD723',
        'SOD_523': 'SOD523',
        'SOD_323': 'SOD323',
        'SOD_128': 'SOD128',
        'SOD_123': 'SOD123',
        'SOD_80C': 'SOD80C'
    }
    return handle_option(ctx, sod)


def handle_package_melf(ctx):
    melf = {
        'MICRO_MELF': 'MICRO MELF',
        'MINI_MELF': 'MINI MELF',
        'DEF_MELF': 'MELF'
    }
    return handle_option(ctx, melf)


def handle_package_do214(ctx):
    do214 = {
        'DO214_AA': 'DO214AA',
        'DO214_AB': 'DO214AB',
        'DO214_AC': 'DO214AC'
    }
    return handle_option(ctx, do214)


def handle_package_sot(ctx):
    sot = {
        'SOT223': 'SOT223',
        'SOT89': 'SOT89',
        'SOT23': 'SOT23',
        'SOT323': 'SOT323',
        'SOT416': 'SOT416',
        'SOT663': 'SOT663',
        'SOT723': 'SOT723',
        'SOT883': 'SOT883'
    }
    return handle_option(ctx, sot)


def handle_package_dpak(ctx):
    dpak = {
        'DPAK': 'DPAK',
        'D2PAK': 'D2PAK',
        'D3PAK': 'D3PAK'
    }
    return handle_option(ctx, dpak)


class ElectroGrammarToObjectListener(ElectroGrammarListener):
    def __init__(self):
        self.obj = {}
        self.warnings = []
        self.prefix = 1

    def warn(self, wty, ctx):
        warning = Warning(wty, ctx.getText())
        self.warnings.append(warning)

    def exitVprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitVoltage(self, ctx):
        self.obj['voltage'] = handle_unit(ctx) * self.prefix
        self.prefix = 1

    def exitAprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitCurrent(self, ctx):
        self.obj['current'] = handle_unit(ctx) * self.prefix
        self.prefix = 1

    def exitPprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitPower(self, ctx):
        self.obj['power'] = handle_unit(ctx) * self.prefix
        self.prefix = 1

    def exitRprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitResistance(self, ctx):
        self.obj['resistance'] = handle_unit(ctx) * self.prefix
        self.prefix = 1

    def exitCprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitCapacitance(self, ctx):
        self.obj['capacitance'] = handle_unit(ctx) * self.prefix
        self.prefix = 1

    def exitLprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitInductance(self, ctx):
        self.obj['inductance'] = handle_unit(ctx) * self.prefix
        self.prefix = 1

    def exitFprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitFrequency(self, ctx):
        self.obj['frequency'] = handle_unit(ctx) * self.prefix
        self.prefix = 1

    def exitTprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitTime(self, ctx):
        self.obj['time'] = handle_unit(ctx) * self.prefix
        self.prefix = 1

    def exitTemperature(self, ctx):
        self.obj['temperature'] = handle_unit(ctx)

    def exitTolerance(self, ctx):
        self.obj['tolerance'] = handle_unit(ctx)

    def exitPackage_chip_ambiguous(self, ctx):
        self.obj['package'] = handle_package_chip(ctx)
        self.warn(Warnings.ambiguous_size, ctx)

    def exitPackage_chip_unambiguous(self, ctx):
        self.obj['package'] = handle_package_chip(ctx)

    def exitPackage_eia(self, ctx):
        self.obj['package'] = handle_package_eia(ctx)

    def exitPackage_panasonic(self, ctx):
        self.obj['package'] = handle_package_panasonic(ctx)

    def exitPackage_sod(self, ctx):
        self.obj['package'] = handle_package_sod(ctx)

    def exitPackage_melf(self, ctx):
        self.obj['package'] = handle_package_melf(ctx)

    def exitPackage_do214(self, ctx):
        self.obj['package'] = handle_package_do214(ctx)

    def exitPackage_sot(self, ctx):
        self.obj['package'] = handle_package_sot(ctx)

    def exitPackage_dpak(self, ctx):
        self.obj['package'] = handle_package_dpak(ctx)

    def exitClass1(self, ctx):
        dielectric = {
            'M7G': 'M7G',
            'C0G': 'C0G',
            'H2G': 'H2G',
            'L2G': 'L2G',
            'P2H': 'P2H',
            'R2H': 'R2H',
            'S2H': 'S2H',
            'T2H': 'T2H',
            'U2J': 'U2J',
            'Q3K': 'Q3K',
            'P3K': 'P3K'
        };
        self.obj['dielectric'] = handle_option(ctx, dielectric)

    def exitClass2(self, ctx):
        self.obj['dielectric'] = ctx.CLASS2().getText().upper()

    def exitAlu(self, ctx):
        self.obj['dielectric'] = 'ALU'

    def exitTan(self, ctx):
        self.obj['dielectric'] = 'TAN'

    def exitResistor(self, ctx):
        self.obj['type'] = 'resistor'

    def exitCapacitor(self, ctx):
        self.obj['type'] = 'capacitor'

    def exitInductor(self, ctx):
        self.obj['type'] = 'inductor'

    def exitOscillator(self, ctx):
        self.obj['type'] = 'oscillator'

    def exitRtype(self, ctx):
        if ctx.POT():
            self.obj['rtype'] = 'pot'

    def exitDiode(self, ctx):
        self.obj['type'] = 'diode'

    def exitDcode(self, ctx):
        self.obj['code'] = ctx.DCODE().getText().upper()

    def exitSignal(self, ctx):
        self.obj['dtype'] = 'signal'

    def exitRectifier(self, ctx):
        self.obj['dtype'] = 'rectifier'

    def exitLed(self, ctx):
        self.obj['dtype'] = 'led'

    def exitSchottky(self, ctx):
        self.obj['dtype'] = 'schottky'

    def exitZener(self, ctx):
        self.obj['dtype'] = 'zener'

    def exitColor(self, ctx):
        self.obj['color'] = ctx.COLOR().getText().lower()

    def exitTransistor(self, ctx):
        self.obj['type'] = 'transistor'

    def exitTtype(self, ctx):
        self.obj['ttype'] = ctx.TTYPE().getText().lower()

    def exitTcode(self, ctx):
        self.obj['code'] = ctx.TCODE().getText().upper()


def get_parser(parser='strict', rule='electro_grammar'):
    def parse(input):
        input = InputStream(input)
        lexer = ElectroGrammarLexer(input)
        stream = CommonTokenStream(lexer)
        parser = ElectroGrammarParser(stream)

        # adding ambiguity diagnostics, see antlr book page 157
        # https://github.com/antlr/antlr4/issues/2206
        #parser.removeErrorListeners()
        parser.addErrorListener(DiagnosticErrorListener())
        parser._interp.predictionMode = PredictionMode.LL_EXACT_AMBIG_DETECTION

        tree = getattr(parser, rule)()
        listener = ElectroGrammarToObjectListener()
        walker = ParseTreeWalker()
        walker.walk(listener, tree)
        return {'result': listener.obj, 'warnings': listener.warnings};
    return parse


def parse(input):
    return get_parser('electro_grammar')(input)
