@builtin "number.ne"
@include "util.ne"
@include "metric_prefix.ne"
@include "package_size.ne"

main -> capacitor {% d => assignAll(filter(ramda.flatten(d))) %}

capacitor ->
    specs capacitance specs package_size specs
  | specs package_size specs capacitance specs

specs -> (_ spec _):* | __

spec -> (plus_minus _):? decimal _ "%" {% d => ({tolerance: d[1]}) %}

plus_minus -> "+/-" | "±"

capacitance -> decimal _ metric_prefix _ farad {%capacitance%}
@{%
  function capacitance(d) {
    [quantity, _, metric_prefix, _, farad] = d

    return {capacitance: quantity * metric_prefix}
  }
%}

farad -> "F" {% () => null %} | F A R A D {% () => null %}
