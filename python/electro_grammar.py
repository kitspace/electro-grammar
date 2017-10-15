from lark import Lark
from grammar import grammar, TranformNearley

parser = Lark(grammar, start="n_main", parser='earley', lexer=None, earley__all_derivations=False)
def parse(text):
    return TranformNearley().transform(parser.parse(text))
