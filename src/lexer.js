const moo = require('moo')

const lexer = moo.compile({
    number: {
        match: /\d+?\.?\d*?\s*\D\S*(?:\s+|$)/,
        value: x => x.split(' ').join(''),
    },
    word: {
        match: /\S+(?:\s+|$)/,
        value: x => x.trim(),
    },
})

module.exports = lexer
