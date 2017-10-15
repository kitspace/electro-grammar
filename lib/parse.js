'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var nearley = require('nearley');
var grammar = require('./grammar');

function assignAll(objs) {
  return objs.reduce(function (prev, obj) {
    return _extends(prev, obj);
  }, {});
}

function parse(str) {
  var parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart, { keepHistory: true });
  var words = str.split(' ');
  var info = parser.save();
  var res = words.reduce(function (prev, word) {
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
  }, []);
  return assignAll(res);
}

module.exports = parse;