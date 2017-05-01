@builtin "number.ne"
@include "util.ne"
@include "metric_prefix.ne"
@include "package_size.ne"

main -> component {% d => assignAll(filter(lodashFlattenDeep(d))) %}

component -> capacitor | resistor

capacitor ->
    cSpecs capacitance cSpecs packageSize:? cSpecs
  | cSpecs packageSize:? cSpecs capacitance cSpecs

cSpecs -> (_ cSpec _):* | __

cSpec -> tolerance | characteristic

characteristic -> _characteristic {% d => ({characteristic: d[0]}) %}

_characteristic ->
    X "7" R             {% d => "X7R" %}
  | X "5" R             {% d => "X5R" %}
  | C "0" G             {% d => "C0G/NP0" %}
  | N P "0"             {% d => "C0G/NP0" %}
  | C "0" G "/" N P "0" {% d => "C0G/NP0" %}

tolerance -> (plusMinus _):? decimal _ "%" {% d => ({tolerance: d[1]}) %}

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
    rSpecs resistance rSpecs packageSize:? rSpecs
  | rSpecs packageSize:? rSpecs resistance rSpecs


rSpecs -> (_ rSpec _):* | __

rSpec -> tolerance

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
