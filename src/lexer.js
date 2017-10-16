const moo = require('moo')

const lexer = moo.compile({
    percent: {
        match: /(?:\+\/?-|±)?\s*\d+\.?\d*\s*%(?:\s+|$)/,
        value: x => x.split(' ').join(''),
    },
    number: {
        match: /\d+\.?\d*\s+[^0-9+±]\S*(?:\s+|$)/,
        value: x => x.split(' ').join(''),
    },
    word: {
        match: /\S+(?:\s+|$)/,
        value: x => x.trim(),
    },
})

module.exports = lexer
