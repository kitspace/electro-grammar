'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var nearley = require('nearley');
var grammar = require('./grammar');
var equals = require('./equals');

function assignAll(objs) {
    return objs.reduce(function (prev, obj) {
        return _extends(prev, obj);
    }, {});
}

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
        var ignored = prev.ignored;
        var maybeIgnored = prev.maybeIgnored;
        var failed = false;
        try {
            parser.feed(word);
        } catch (e) {
            failed = true;
            parser.restore(info);
            // if it has failed, this word and any numbers coming before it
            // were definitely ignored
            ignored += maybeIgnored + word;
            maybeIgnored = '';
        }
        var component = assignAll(parser.results[0] || []);
        var empty = Object.keys(component).length === 0;
        if (empty) {
            component = null;
        }
        if (!failed) {
            var hasPrev = Object.keys(prev.component).length !== 0;
            var eq = equals(component, prev.component);
            maybeIgnored = '';
            if (hasPrev && (eq || empty)) {
                // the parser waits for further input on numbers so we can't be
                // sure if it has been ignored
                var isNumber = !isNaN(parseFloat(word));
                if (isNumber) {
                    maybeIgnored = word;
                } else {
                    ignored += word;
                }
            } else {
                info = parser.save();
            }
        }
        return { component: component || prev.component, ignored: ignored, maybeIgnored: maybeIgnored };
    }, { component: {}, ignored: '', maybeIgnored: '' });

    var ignored = (r.ignored + r.maybeIgnored).trim();

    if (returnIgnored) {
        return { component: r.component, ignored: ignored };
    }

    return r.component;
}

module.exports = parse;