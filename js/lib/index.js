var {ElectroGrammarLexer} = require('./ElectroGrammarLexer');
var {ElectroGrammarParser} = require('./ElectroGrammarParser');
var {ElectroGrammarListener} = require('./ElectroGrammarListener');
var antlr4 = require('antlr4');

var KeyPrinter = function() {
  ElectroGrammarListener.call(this);
  return this;
};

KeyPrinter.prototype = Object.create(ElectroGrammarListener.prototype);
KeyPrinter.prototype.constructor = KeyPrinter;

KeyPrinter.prototype.exitCapacitance = function(ctx) {
  var prefix = ctx
    .CPREFIX()
    .getText()
    .toLowerCase();
  if (prefix === 'micro') {
    prefix = 'u';
  } else {
    prefix = prefix[0];
  }
  var number = Number(ctx.NUMBER().getText());
  console.log('capacitance', `${number}${prefix}F`);
};

var input = '100 micro farad \n';
var chars = new antlr4.InputStream(input);
var lexer = new ElectroGrammarLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new ElectroGrammarParser(tokens);
parser.buildParseTrees = true;
var tree = parser.capacitance();
var printer = new KeyPrinter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
