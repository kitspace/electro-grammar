const resistors  = require('./cpl_resistors')
const capacitors = require('./cpl_capacitors')
const leds       = require('./cpl_leds')

function matchCPL(component) {
  component = component || {}
  switch (component.type) {
    case 'capacitor':
      return matchCapacitor(component)
    case 'resistor':
      return matchResistor(component)
    case 'led':
      return matchLED(component)
  }
  return []
}

function matchResistor(c) {
  return resistors.reduce((prev, cpl) => {
    const resistance = cpl.resistance === c.resistance
    const size       = c.size == null || cpl.size === c.size
    const tolerance  = c.tolerance == null || cpl.tolerance <= c.tolerance
    const power_rating = c.power_rating == null
      || cpl.power_rating >= c.power_rating
    if (resistance && size && tolerance && power_rating) {
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

function matchLED(c) {
  return leds.reduce((prev, cpl) => {
    const led_color = cpl.led_color === c.led_color
    const size      = c.size == null || cpl.size === c.size
    if (led_color && size) {
      return prev.concat([cpl.cplid])
    }
    return prev
  }, [])
}

module.exports = matchCPL
