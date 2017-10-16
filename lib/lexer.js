'use strict';

var moo = require('moo');

var lexer = moo.compile({
    number: {
        match: /\d+?\.?\d*?\s*\D\S*(?: |$)/,
        value: function value(x) {
            return x.split(' ').join('');
        }
    },
    word: /.+?(?: |$)/
});

module.exports = lexer;