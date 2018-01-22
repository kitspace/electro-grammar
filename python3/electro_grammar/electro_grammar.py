from antlr4 import *
from antlr4.error.DiagnosticErrorListener import DiagnosticErrorListener
from antlr4.atn.PredictionMode import PredictionMode
from decimal import Decimal
from electro_grammar.ElectroGrammarLexer import ElectroGrammarLexer
from electro_grammar.ElectroGrammarListener import ElectroGrammarListener
from electro_grammar.ElectroGrammarParser import ElectroGrammarParser


class ElectroGrammarToObjectListener(ElectroGrammarListener):
    def __init__(self):
        self.obj = {}

    def exitVoltage(self, ctx):
        number = Decimal(str(ctx.NUMBER()))
        self.obj['voltage'] = number;

    def enterResistance(self, ctx):
        rprefix_lookup = {'M': 10e6, 'k': 10e3, 'K': 10e3, 'None': 1, 'm': 10-3};
        number = Decimal(str(ctx.NUMBER()))
        #print(str(ctx.RPREFIX()))
        #rprefix = rprefix_lookup[str(ctx.RPREFIX())]
        self.obj['resistance'] = number #* rprefix

    def enterCapacitance(self, ctx):
        #cprefix_lookup = {'u': 10e-6, 'n': 10e-9, 'p': 10e-12}
        number = Decimal(str(ctx.NUMBER()))
        #cprefix = cprefix_lookup[str(ctx.CPREFIX())]
        self.obj['capacitance'] = number #* cprefix


def parse(input):
    input = InputStream(input)
    lexer = ElectroGrammarLexer(input)
    stream = CommonTokenStream(lexer)
    parser = ElectroGrammarParser(stream)

    # adding ambiguity diagnostics, see antlr book page 157
    # https://github.com/antlr/antlr4/issues/2206
    parser.removeErrorListeners()
    parser.addErrorListener(DiagnosticErrorListener())
    parser._interp.predictionMode = PredictionMode.LL_EXACT_AMBIG_DETECTION

    tree = parser.electro_grammar()
    listener = ElectroGrammarToObjectListener()
    walker = ParseTreeWalker()
    walker.walk(listener, tree)
    return listener.obj
