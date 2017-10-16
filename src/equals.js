function equals(c1, c2) {
    c1 = c1 || {}
    c2 = c2 || {}
    if (!c1.type && !c2.type) {
        return true
    }
    if (c1.type !== c2.type) {
        return false
    }
    switch (c1.type) {
        case 'resistor':
            return sameResistor(c1, c2)
        case 'capacitor':
            return sameCapacitor(c1, c2)
        case 'led':
            return sameLED(c1, c2)
    }
}

function sameCapacitor(c1, c2) {
    return (
        c1.capacitance === c2.capacitance &&
        c1.size === c2.size &&
        c1.characteristic === c2.characteristic &&
        c1.tolerance === c2.tolerance &&
        c1.voltage_rating === c2.voltage_rating
    )
}

function sameResistor(c1, c2) {
    return (
        c1.resistance === c2.resistance &&
        c1.size === c2.size &&
        c1.tolerance === c2.tolerance &&
        c1.power_rating === c2.power_rating
    )
}

function sameLED(c1, c2) {
    return c1.color === c2.color && c1.size === c2.size
}

module.exports = equals
