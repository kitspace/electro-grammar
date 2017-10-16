'use strict';

var moo = require('moo');

var lexer = moo.compile({
    number: {
        match: /(?:\+\/-|±|\+-)?\s*\d+?\.?\d*?\s*\D\S*(?:\s+|$)/,
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