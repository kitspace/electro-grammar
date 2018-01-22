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


class ElectroGrammarToObjectListener(ElectroGrammarListener):
    def __init__(self):
        self.obj = {}
        self.prefix = 1

    def exitVprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitVoltage(self, ctx):
        self.obj['voltage'] = handle_unit(ctx) * self.prefix

    def exitAprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitCurrent(self, ctx):
        self.obj['current'] = handle_unit(ctx) * self.prefix

    def exitPprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitPower(self, ctx):
        self.obj['power'] = handle_unit(ctx) * self.prefix

    def exitRprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitResistance(self, ctx):
        self.obj['resistance'] = handle_unit(ctx) * self.prefix

    def exitCprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitCapacitance(self, ctx):
        self.obj['capacitance'] = handle_unit(ctx) * self.prefix

    def exitLprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitInductance(self, ctx):
        self.obj['inductance'] = handle_unit(ctx) * self.prefix

    def exitFprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitFrequency(self, ctx):
        self.obj['frequency'] = handle_unit(ctx) * self.prefix

    def exitTprefix(self, ctx):
        self.prefix = handle_prefix(ctx)

    def exitTime(self, ctx):
        self.obj['time'] = handle_unit(ctx) * self.prefix

    def exitTemperature(self, ctx):
        self.obj['temperature'] = handle_unit(ctx)


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
