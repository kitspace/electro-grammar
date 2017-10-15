from lark import Lark
from grammar import grammar, TransformNearley

parser = Lark(grammar, start="n_main", parser='earley', lexer=None, earley__all_derivations=False)
def parse(text):
    return TransformNearley().transform(parser.parse(text))
