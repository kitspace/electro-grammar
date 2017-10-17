'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var moo = require('moo');
var nearley = require('nearley');
var equals = require('./equals');

var compiledGrammar = require('./grammar');
var grammar = nearley.Grammar.fromCompiled(compiledGrammar);

function assignAll(objs) {
    return objs.reduce(function (prev, obj) {
        return _extends(prev, obj);
    }, {});
}

function parse(str) {
    var parser = new nearley.Parser(grammar);

    var words = str.split(/;|,| /).filter(function (word) {
        return word !== '';
    }).map(function (word) {
        return word + ' ';
    });

    var info = parser.save();
    var initialInfo = parser.save();

    var r = words.reduce(function (prev, word) {
        // if it fails, roll it back
        var ignored = prev.ignored;
        var maybeIgnored = prev.maybeIgnored;
        var failed = false;
        var hasPrev = Object.keys(prev.component).length !== 0;
        try {
            parser.feed(word);
        } catch (e) {
            if (!hasPrev) {
                try {
                    parser.restore(initialInfo);
                    parser.feed(word);
                    ignored += maybeIgnored;
                } catch (e) {
                    failed = true;
                    parser.restore(info);
                    ignored += maybeIgnored + word;
                    maybeIgnored = '';
                }
            } else {
                failed = true;
                parser.restore(info);
                ignored += maybeIgnored + word;
                maybeIgnored = '';
            }
        }
        var component = assignAll(parser.results[0] || []);
        var empty = Object.keys(component).length === 0;
        if (!failed) {
            var eq = equals(component, prev.component);
            var isNumber = !isNaN(parseFloat(word));
            if (isNumber && (eq || empty)) {
                // the parser waits for further input on numbers so we can't be
                // sure it has been ignored
                maybeIgnored += word;
            } else if (hasPrev && (eq || empty)) {
                ignored += maybeIgnored + word;
                maybeIgnored = '';
            } else {
                maybeIgnored = '';
                info = parser.save();
            }
        }
        return {
            component: _extends(prev.component, component),
            ignored: ignored,
            maybeIgnored: maybeIgnored
        };
    }, { component: {}, ignored: '', maybeIgnored: '' });

    return {
        component: r.component,
        ignored: (r.ignored + r.maybeIgnored).trim()
    };
}

module.exports = parse;