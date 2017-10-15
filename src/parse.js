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
        let failed = false
        try {
            parser.feed(word)
        } catch(e) {
            failed = true
            parser.restore(info)
            ignored += word
        }
        const component = assignAll(parser.results[0] || [])
        if (!failed) {
            if (Object.keys(prev.component) > 0 && equals(component, prev.component)) {
                parser.restore(info)
                ignored += word
            }
            info = parser.save()
        }
        return {component: component || prev.component, ignored}
    }, {component: {}, ignored: ''})

    if (returnIgnored) {
        return {component: r.component, ignored: r.ignored.trim()}
    }

    return r.component
}

module.exports = parse
