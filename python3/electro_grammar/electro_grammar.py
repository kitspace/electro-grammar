from antlr4 import *
from antlr4.error.DiagnosticErrorListener import DiagnosticErrorListener
from antlr4.atn.PredictionMode import PredictionMode
from decimal import Decimal
from electro_grammar.ElectroGrammarLexer import ElectroGrammarLexer
from electro_grammar.ElectroGrammarListener import ElectroGrammarListener
from electro_grammar.ElectroGrammarParser import ElectroGrammarParser


def handle_unit(ctx):
    return Decimal(ctx.NUMBER().getText())


def handle_prefix(ctx):
    if hasattr(ctx, 'GIGA') and ctx.GIGA():
        return Decimal('1e9')
    if hasattr(ctx, 'MEGA') and ctx.MEGA():
        return Decimal('1e6')
    if hasattr(ctx, 'KILO') and ctx.KILO():
        return Decimal('1e3')
    if hasattr(ctx, 'MILI') and ctx.MILI():
        return Decimal('1e-3')
    if hasattr(ctx, 'MICRO') and ctx.MICRO():
        return Decimal('1e-6')
    if hasattr(ctx, 'NANO') and ctx.NANO():
        return Decimal('1e-9')
    if hasattr(ctx, 'PICO') and ctx.PICO():
        return Decimal('1e-12')
    return 1


def handle_package_size(ctx):
    if hasattr(ctx, 'METRIC_SIZE') and ctx.METRIC_SIZE():
        return ctx.METRIC_SIZE().getText()
    if hasattr(ctx, 'IMPERIAL_SIZE') and ctx.IMPERIAL_SIZE():
        return ctx.IMPERIAL_SIZE().getText()
    if hasattr(ctx, 'AMBIGUOUS_SIZE') and ctx.AMBIGUOUS_SIZE():
        return ctx.AMBIGUOUS_SIZE().getText()

class ElectroGrammarToObjectListener(ElectroGrammarListener):
    def __init__(self):
        self.obj = {}
        self.prefix = 1

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

    def exitMetric_size(self, ctx):
        imperial_lookup = {
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
        }
        self.obj['package_size'] = imperial_lookup[handle_package_size(ctx)]

    def exitImperial_size(self, ctx):
        self.obj['package_size'] = handle_package_size(ctx)

    def exitAmbiguous_size(self, ctx):
        print('Warn: Ambiguous package size found')
        self.obj['package_size'] = handle_package_size(ctx)

    def exitClass1(self, ctx):
        if ctx.M7G():
            dielectric = 'M7G'
        elif ctx.C0G():
            dielectric = 'C0G'
        elif ctx.H2G():
            dielectric = 'H2G'
        elif ctx.L2G():
            dielectric = 'L2G'
        elif ctx.P2H():
            dielectric = 'P2H'
        elif ctx.R2H():
            dielectric = 'R2H'
        elif ctx.S2H():
            dielectric = 'S2H'
        elif ctx.T2H():
            dielectric = 'T2H'
        elif ctx.U2J():
            dielectric = 'U2J'
        elif ctx.Q3K():
            dielectric = 'Q3K'
        elif ctx.P3K():
            dielectric = 'P3K'

        self.obj['dielectric'] = dielectric

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


def get_parser(start_rule):
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

        tree = getattr(parser, start_rule)()
        listener = ElectroGrammarToObjectListener()
        walker = ParseTreeWalker()
        walker.walk(listener, tree)
        return listener.obj
    return parse


def parse(input):
    return get_parser('electro_grammar')(input)
