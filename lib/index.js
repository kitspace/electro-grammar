'use strict';

var nearley = require('nearley');
var grammar = require('./grammar');

function parseElectronicComponent(str) {
  var parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart, { keepHistory: true });
  var chars = str.split('');
  var info = parser.save();
  return chars.reduce(function (prev, c) {
    //if it fails, roll it back
    try {
      parser.feed(c);
    } catch (e) {
      parser.restore(info);
    }
    if (parser.results.length) {
      info = parser.save();
    }
    //return the latest valid result
    return parser.results[0] || prev;
  }, null);
}

parseElectronicComponent.matchCPL = require('./match_cpl');

module.exports = parseElectronicComponent;