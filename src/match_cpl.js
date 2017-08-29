const resistors  = require('./cpl_resistors')
const capacitors = require('./cpl_capacitors')

function matchCPL(component) {
  if (component.capacitance != null) {
    return matchCapacitor(component)
  } else if (component.resistance != null) {
    return matchResistor(component)
  }
  return []
}

function matchResistor(c) {
  return resistors.reduce((prev, cpl) => {
    const resistance = cpl.resistance === c.resistance
    const size       = c.size == null || cpl.size === c.size
    const tolerance  = c.tolerance == null || cpl.tolerance <= c.tolerance
    if (resistance && size && tolerance) {
      return prev.concat([cpl.cplid])
    }
    return prev
  }, [])
}

function matchCapacitor(c) {
  return capacitors.reduce((prev, cpl) => {
    const capacitance = cpl.capacitance === c.capacitance
    const size        = c.size == null || cpl.size === c.size
    const characteristic = c.characteristic == null
      || cpl.characteristic === c.characteristic
    const tolerance = c.tolerance == null || cpl.tolerance <= c.tolerance
    const voltage_rating = c.voltage_rating == null
      || cpl.voltage_rating >= c.voltage_rating
    if (capacitance && size && characteristic && tolerance && voltage_rating) {
      return prev.concat([cpl.cplid])
    }
    return prev
  }, [])
}

module.exports = matchCPL
