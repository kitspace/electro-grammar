'use strict';

var nearley = require('nearley');
var grammar = require('./grammar');

function parseElectronicComponent(str) {
  var parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart, { keepHistory: true });
  var chars = str.split('');
  var results = chars.map(function (c) {
    var info = parser.save();
    //if it fails, roll it back
    try {
      parser.feed(c);
    } catch (e) {
      parser.restore(info);
    }
    return parser.results[0];
  });
  //return the last valid result
  results = results.filter(function (r) {
    return r != null;
  });
  return results[results.length - 1];
}

module.exports = parseElectronicComponent;