@builtin "number.ne"
@include "util.ne"
@include "metric_prefix.ne"
@include "package_size.ne"

main -> component {% d => assignAll(filter(ramda.flatten(d))) %}

component -> capacitor | resistor

capacitor ->
    cSpecs capacitance cSpecs packageSize cSpecs
  | cSpecs packageSize cSpecs capacitance cSpecs

cSpecs -> (_ cSpec _):* | __

cSpec -> (plusMinus _):? decimal _ "%" {% d => ({tolerance: d[1]}) %}

plusMinus -> "+/-" | "±" | "+-"

capacitance -> decimal _ metricPrefix _ farad {%capacitance%}
@{%
  function capacitance(d) {
    const [quantity, , metricPrefix, , farad] = d

    return {capacitance: parseFloat(`${quantity}${metricPrefix}`)}
  }
%}

farad -> "F" {% () => null %} | F A R A D {% () => null %}

resistor ->
    rSpecs resistance rSpecs packageSize rSpecs
  | rSpecs packageSize rSpecs resistance rSpecs


rSpecs -> (_ rSpec _):* | __

rSpec -> (plusMinus _):? decimal _ "%" {% d => ({tolerance: d[1]}) %}

resistance ->
  decimal metricPrefix int:? (_ ohm):? {% resistance %}

@{%
  function resistance(d, i, reject) {
    const [significantQuantity, metricPrefix, subQuantity, ohm] = d
    if (subQuantity) {
      if (/\./.test(significantQuantity.toString())) {
        return reject
      }
      var quantity = `${significantQuantity}.${subQuantity}`
    } else {
      var quantity = significantQuantity
    }
    return {resistance: parseFloat(`${quantity}${metricPrefix}`)}
  }
%}

ohm -> O H M {% () => null %}
