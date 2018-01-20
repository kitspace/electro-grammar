var {ElectroGrammarLexer} = require('./ElectroGrammarLexer');
var {ElectroGrammarParser} = require('./ElectroGrammarParser');
var {ElectroGrammarListener} = require('./ElectroGrammarListener');
var antlr4 = require('antlr4');

var ElectroGrammarToObjectListener = function() {
  ElectroGrammarListener.call(this);
  this.obj = {};
  return this;
};

ElectroGrammarToObjectListener.prototype = Object.create(ElectroGrammarListener.prototype);
ElectroGrammarToObjectListener.prototype.constructor = ElectroGrammarToObjectListener;

ElectroGrammarToObjectListener.prototype.enterCapacitance = function(ctx) {
	var cprefix_lookup = {'u': 10e-6, 'n': 10e-9, 'p': 10e-12};
	var number = Number(ctx.NUMBER().getText());
	var cprefix = cprefix_lookup[ctx.CPREFIX().getText()];
	this.obj['capacitance'] = number * cprefix;
};

var parse = function(input) {
	var chars = new antlr4.InputStream(input);
	var lexer = new ElectroGrammarLexer(chars);
	var tokens = new antlr4.CommonTokenStream(lexer);
	var parser = new ElectroGrammarParser(tokens);
	parser.buildParseTrees = true;

	var tree = parser.electro_grammar();
	var listener = new ElectroGrammarToObjectListener();
	var walker = antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
	return listener.obj;
};

module.exports = {'parse': parse};
