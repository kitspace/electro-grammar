from antlr4 import *
from decimal import Decimal
from ElectroGrammarLexer import ElectroGrammarLexer
from ElectroGrammarListener import ElectroGrammarListener
from ElectroGrammarParser import ElectroGrammarParser


class ElectroGrammarToObjectListener(ElectroGrammarListener):
    def __init__(self):
        self.obj = {}

    def enterCapacitance(self, ctx):
        cprefix_lookup = {'u': 10e-6, 'n': 10e-9, 'p': 10e-12}
        number = Decimal(str(ctx.NUMBER()))
        cprefix = cprefix_lookup[str(ctx.CPREFIX())]
        self.obj['capacitance'] = number * cprefix


def parse(input):
    input = InputStream(input)
    lexer = ElectroGrammarLexer(input)
    stream = CommonTokenStream(lexer)
    parser = ElectroGrammarParser(stream)
    tree = parser.electro_grammar()
    listener = ElectroGrammarToObjectListener()
    walker = ParseTreeWalker()
    walker.walk(listener, tree)
    return listener.obj


def main(argv):
    tree = parse(argv[1])
    print(tree)


if __name__ == '__main__':
    import sys
    main(sys.argv)
