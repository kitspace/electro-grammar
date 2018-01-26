const {ElectroGrammarLexer} = require('./ElectroGrammarLexer');
const {ElectroGrammarParser} = require('./ElectroGrammarParser');
const {ElectroGrammarListener} = require('./electro_grammar_listener');
const antlr4 = require('antlr4');

function get_parser(parser, rule) {
  function parse(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new ElectroGrammarLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ElectroGrammarParser(tokens);

    // enable grammar ambiguity diagnostic output
    // see Antlr book ch 9.2, page 156
    // https://github.com/antlr/antlr4/issues/2206
    parser.removeErrorListeners();
    parser.addErrorListener(new antlr4.error.DiagnosticErrorListener());
    parser._interp.PredictionMode =
      antlr4.atn.PredictionMode.LL_EXACT_AMBIG_DETECTION;

    parser.buildParseTrees = true;

    if (!(rule in parser)) {
      throw new Error('Unknown rule ' + rule);
    }
    const tree = parser[rule]();
    const listener = new ElectroGrammarListener();
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    return {'result': listener.obj};
  }
  return parse;
}

function parse(input) {
  return get_parser('electro_grammar')(input);
}

module.exports = {get_parser, parse};
