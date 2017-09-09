'use strict';

var nearley = require('nearley');
var grammar = require('./grammar');

function parse(str) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      returnIgnored = _ref.returnIgnored;

  var parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart, { keepHistory: true });
  var words = str.split(/;|,| /).filter(function (word) {
    return word !== '';
  }).map(function (word) {
    return word + ' ';
  });
  var info = parser.save();
  var ignored = '';
  return words.reduce(function (prev, word) {
    // if it fails, roll it back
    try {
      parser.feed(word);
    } catch (e) {
      ignored += word;
      parser.restore(info);
    }
    info = parser.save();
    // return the latest valid result
    var result = parser.results[0];
    if (result && returnIgnored) {
      return { result: result, ignored: ignored.trim() };
    } else if (result) {
      return result;
    } else {
      return prev;
    }
  }, {});
}

module.exports = parse;