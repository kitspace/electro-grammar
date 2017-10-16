const moo = require('moo')

const lexer = moo.compile({
    number: {
        match: /\d+?\.?\d*?\s*\D\S*(?: |$)/,
        value: x => x.split(' ').join(''),
    },
    word: /.+?(?: |$)/,
})

module.exports = lexer
