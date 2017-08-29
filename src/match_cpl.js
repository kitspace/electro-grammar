const resistors  = require('./cpl_resistors')
const capacitors = require('./cpl_capacitors')

function matchCPL(component) {
  if (component.capacitance != null) {
    return matchCapacitor(component)
  } else if (component.resistance != null) {
    let r =  matchResistor(component)
    console.log(r)
    return r
  }
  return []
}

function matchResistor(c) {
  return resistors.reduce((prev, cpl_part) => {
    const resistance = cpl_part.resistance === c.resistance
    const size       = cpl_part.size === c.size
    const tolerance  = cpl_part.tolerance >= c.tolerance
    if (resistance && size && tolerance) {
      return prev.concat([cpl_part.cplid])
    }
    return prev
  }, [])
}

function matchCapacitor(c) {
  return []
}

module.exports = matchCPL
