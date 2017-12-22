from lark import Lark
from grammar import grammar, TransformNearley

parser = Lark(grammar, start="n_main", parser='earley', lexer=None, earley__all_derivations=False)
def parse(text):
    specs = TransformNearley().transform(parser.parse(text))
    component = {}
    for s in specs:
        component.update(s)
    return component
