const {ElectroGrammarLexer} = require('./ElectroGrammarLexer');
const {ElectroGrammarParser} = require('./ElectroGrammarParser');
const {ElectroGrammarListener} = require('./ElectroGrammarListener');
const {ToObjectListener} = require('./to_object_listener');
const antlr4 = require('antlr4');

class IgnoreListener extends ElectroGrammarListener {
  constructor() {
    super();
    this.obj = '';
  }
  exitIgnored(ctx) {
    ctx.UNKNOWN().forEach(s => {
      this.obj += s.getText();
    });
  }
}

function get_parser(start_rule, listener) {
  function parse(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new ElectroGrammarLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ElectroGrammarParser(tokens);
    parser.buildParseTrees = true;

    const tree = parser[start_rule]();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    return listener.obj;
  }
  return parse;
}

function parse(input) {
  return get_parser('electro_grammar')(input);
}

function parse(input) {
  const parseComponent = get_parser('electro_grammar', new ToObjectListener());
  const component = parseComponent(input);
  const parseIgnored = get_parser('ignored', new IgnoreListener());
  const ignored = parseIgnored(input);
  return {component, ignored};
}

module.exports = {parse};
