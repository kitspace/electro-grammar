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

class LexerIgnoreListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.ignored = '';
  }
  syntaxError(lexer, offendingSymbol, line, char, err) {
    // hopefully there is a better way to get the input, but I haven't found it
    let input = err.split(':')[1].trim();
    input = input.substring(1, input.length - 1);
    this.ignored += input;
  }
}

class ParserIgnoreListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.ignored = '';
  }
  syntaxError(lexer, offendingSymbol, line, char, err) {
    this.ignored += offendingSymbol.getText();
  }
}

function parse(input) {
  const chars = new antlr4.InputStream(input);
  const lexer = new ElectroGrammarLexer(chars);
  const lexerIgnorer = new LexerIgnoreListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(lexerIgnorer);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ElectroGrammarParser(tokens);
  const parserIgnorer = new ParserIgnoreListener();
  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  parser.addErrorListener(parserIgnorer);

  const tree = parser.electro_grammar();
  const listener = new ElectroGrammarToObjectListener();
  const walker = antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  console.log({lexer: lexerIgnorer.ignored, parser: parserIgnorer.ignored});
  return {component: listener.obj, ignored: ''};
}

module.exports = {parse};
