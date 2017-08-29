import resistors from '../cpl-data/CPL for Production/Resistors.yaml'
import capacitors from '../cpl-data/CPL for Production/Capacitors.yaml'

function matchCPL(component) {
  if (component.capacitance != null) {
    return matchCapacitor(component)
  } else if (component.resistance != null) {
    return matchResistor(component)
  }
  return ''
}

function matchResistor(c) {
  return ''
}

function matchCapacitor(c) {
  return ''
}

module.exports = matchCPL
