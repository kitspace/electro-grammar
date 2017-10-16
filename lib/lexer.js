'use strict';

var moo = require('moo');

var lexer = moo.compile({
    percent: {
        match: /(?:\+\/?-|±)?\s*\d+\.?\d*\s*%(?:\s+|$)/,
        value: function value(x) {
            return x.split(' ').join('');
        }
    },
    number: {
        match: /\d+\.?\d*\s+[^0-9+±]\S*(?:\s+|$)/,
        value: function value(x) {
            return x.split(' ').join('');
        }
    },
    word: {
        match: /\S+(?:\s+|$)/,
        value: function value(x) {
            return x.trim();
        }
    }
});

module.exports = lexer;