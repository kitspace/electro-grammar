const moo     = require('moo')
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
    const initialInfo = parser.save()

    const r = words.reduce((prev, word) => {
        // if it fails, roll it back
        let ignored = prev.ignored
        let maybeIgnored = prev.maybeIgnored
        let failed = false
        const hasPrev = Object.keys(prev.component).length !== 0
        try {
            parser.feed(word)
        } catch(e) {
            if (!hasPrev) {
                try {
                    parser.restore(initialInfo)
                    parser.feed(word)
                    ignored += maybeIgnored
                } catch (e) {
                    failed = true
                    parser.restore(info)
                    ignored += maybeIgnored + word
                    maybeIgnored = ''
                }
            } else {
                failed = true
                parser.restore(info)
                ignored += maybeIgnored + word
                maybeIgnored = ''
            }
        }
        let component = assignAll(parser.results[0] || [])
        const empty = Object.keys(component).length === 0
        if (!failed) {
            const eq = equals(component, prev.component)
            const isNumber = !isNaN(parseFloat(word))
            if (isNumber && (eq || empty)) {
                // the parser waits for further input on numbers so we can't be
                // sure it has been ignored
                maybeIgnored += word
            }
            else if (hasPrev && (eq || empty)) {
                ignored += maybeIgnored + word
                maybeIgnored = ''
            }
            else {
                maybeIgnored = ''
                info = parser.save()
            }
        }
        return {component: Object.assign(prev.component, component), ignored, maybeIgnored}
    }, {component: {}, ignored: '', maybeIgnored: ''})

    const ignored = (r.ignored + r.maybeIgnored).trim()

    if (returnIgnored) {
        return {component: r.component, ignored}
    }

    return r.component
}

module.exports = parse
