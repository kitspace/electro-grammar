@builtin "number.ne"
@include "util.ne"
@include "metric_prefix.ne"
@include "package_size.ne"

main -> capacitor {% d => assignAll(filter(ramda.flatten(d))) %}

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

    return {capacitance: quantity * metricPrefix}
  }
%}

farad -> "F" {% () => null %} | F A R A D {% () => null %}
