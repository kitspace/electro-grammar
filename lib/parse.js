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
  var chars = str.split(' ');
  var info = parser.save();
  var res = chars.reduce(function (prev, c) {
    c = c.replace(/,|;/, '') + ' ';
    //if it fails, roll it back
    try {
      parser.feed(c);
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