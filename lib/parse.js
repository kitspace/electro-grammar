'use strict';

var nearley = require('nearley');
var grammar = require('./grammar');
var equals = require('./equals');

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
  var r = words.reduce(function (prev, word) {
    // if it fails, roll it back
    try {
      parser.feed(word);
    } catch (e) {
      parser.restore(info);
    }
    info = parser.save();
    var result = parser.results[0];
    var ignored = prev.ignored;
    if (!result || equals(result, prev.result)) {
      ignored += word;
    }
    return { result: result || prev.result, ignored: ignored };
  }, { result: {}, ignored: '' });
  if (returnIgnored) {
    return { result: r.result, ignored: r.ignored.trim() };
  }
  return r.result;
}

module.exports = parse;