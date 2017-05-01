'use strict';

var nearley = require('nearley');
var grammar = require('./grammar');

function parseElectronicComponent(str) {
  var parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart, { keepHistory: true });
  var chars = str.split('');
  return chars.reduce(function (prev, c) {
    var info = parser.save();
    //if it fails, roll it back
    try {
      parser.feed(c);
    } catch (e) {
      parser.restore(info);
    }
    //return the latest valid result
    return parser.results[0] || prev;
  }, null);
}

module.exports = parseElectronicComponent;