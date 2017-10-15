'use strict';

var nearley = require('nearley');
var grammar = require('./grammar');

function parse(str) {
  var parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart, { keepHistory: true });
  var words = str.split(' ');
  var info = parser.save();
  return words.reduce(function (prev, word) {
    word = word.replace(/,|;/, '') + ' ';
    //if it fails, roll it back
    try {
      parser.feed(word);
    } catch (e) {
      parser.restore(info);
    }
    info = parser.save();
    //return the latest valid result
    return parser.results[0] || prev;
  }, {});
}

module.exports = parse;