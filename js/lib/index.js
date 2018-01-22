const {ElectroGrammarLexer} = require('./ElectroGrammarLexer');
const {ElectroGrammarParser} = require('./ElectroGrammarParser');
const {ElectroGrammarListener} = require('./ElectroGrammarListener');
const antlr4 = require('antlr4');

class ElectroGrammarToObjectListener extends ElectroGrammarListener {
  constructor() {
    super();
    this.obj = {};
  }
  enterCapacitance(ctx) {
    const cprefix_lookup = {u: 'e-6', n: 'e-9', p: 'e-12'};
    const number = ctx.NUMBER().getText();
    const cprefix = cprefix_lookup[ctx.CPREFIX().getText()];
    this.obj.capacitance = Number(number + cprefix);
    this.obj.type = 'capacitor';
  }
}

function parse(input) {
  const chars = new antlr4.InputStream(input);
  const lexer = new ElectroGrammarLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ElectroGrammarParser(tokens);

  // enable grammar ambiguity diagnostic output, see Antlr book ch 9.2
  parser.removeErrorListeners();
  parser.addErrorListener(new antlr4.error.DiagnosticErrorListener());
  // we should also be doing something like the following, but it doesn't work in JS yet
  // https://github.com/antlr/antlr4/issues/2206
  //
  //  parser
  //    .getInterpreter()
  //    .setPredictionMode(antlr.atn.PredictionMode.LL_EXACT_AMBIG_DETECTION);
  //
  // maybe we just have to test for ambiguity in Java (or Python?)

  parser.buildParseTrees = true;

  const tree = parser.electro_grammar();
  const listener = new ElectroGrammarToObjectListener();
  const walker = antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  return listener.obj;
}

module.exports = {parse};
