@builtin "number.ne"
@include "util.ne"
@include "metric_prefix.ne"
@include "package_size.ne"

main -> capacitor {% d => assignAll(filter(ramda.flatten(d))) %}

capacitor ->
    cSpecs capacitance cSpecs package_size cSpecs
  | cSpecs package_size cSpecs capacitance cSpecs

cSpecs -> (_ cSpec _):* | __

cSpec -> (plus_minus _):? decimal _ "%" {% d => ({tolerance: d[1]}) %}

plus_minus -> "+/-" | "±" | "+-"

capacitance -> decimal _ metric_prefix _ farad {%capacitance%}
@{%
  function capacitance(d) {
    const [quantity, , metric_prefix, , farad] = d

    return {capacitance: quantity * metric_prefix}
  }
%}

farad -> "F" {% () => null %} | F A R A D {% () => null %}
