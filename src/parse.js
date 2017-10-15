const nearley = require('nearley')
const grammar = require('./grammar')
const equals  = require('./equals')

function assignAll(objs) {
    return objs.reduce((prev, obj) => Object.assign(prev, obj), {})
}

function parse(str, {returnIgnored} = {}) {
    const parser = new nearley.Parser(
        grammar.ParserRules,
        grammar.ParserStart,
        {keepHistory: true}
    )

    const words = str.split(/;|,| /)
        .filter(word => word !== '')
        .map(word => word + ' ')

    let info = parser.save()

    const r = words.reduce((prev, word) => {
        // if it fails, roll it back
        let ignored = prev.ignored
        let maybeIgnored = prev.maybeIgnored
        let failed = false
        try {
            parser.feed(word)
        } catch(e) {
            failed = true
            parser.restore(info)
            // if it has failed, this word and any numbers coming before it
            // were definitely ignored
            ignored += maybeIgnored + word
            maybeIgnored = ''
        }
        let component = assignAll(parser.results[0] || [])
        const empty = Object.keys(component).length === 0
        if (empty) {
            component = null
        }
        if (!failed) {
            const hasPrev = Object.keys(prev.component).length !== 0
            const eq = equals(component, prev.component)
            maybeIgnored = ''
            if (hasPrev && (eq || empty)) {
                // the parser waits for further input on numbers so we can't be
                // sure if it has been ignored
                const isNumber = !isNaN(parseFloat(word))
                if (isNumber) {
                    maybeIgnored = word
                } else {
                    ignored += word
                }
            }
            else {
                info = parser.save()
            }
        }
        return {component: component || prev.component, ignored, maybeIgnored}
    }, {component: {}, ignored: '', maybeIgnored: ''})

    const ignored = (r.ignored + r.maybeIgnored).trim()

    if (returnIgnored) {
        return {component: r.component, ignored}
    }

    return r.component
}

module.exports = parse
