@builtin "number.ne"
@include "util.ne"
@include "metric_prefix.ne"
@include "package_size.ne"

main -> component {% d => assignAll(filter(lodashFlattenDeep(d))) %}

component -> capacitor | resistor

capacitor ->
    cSpecs capacitance cSpecs packageSize:? cSpecs
  | cSpecs packageSize:? cSpecs capacitance cSpecs
  | cap cSpecs packageSize:? cSpecs (capacitanceNoFarad | capacitance) cSpecs
  | cap cSpecs (capacitanceNoFarad | capacitance) cSpecs packageSize:? cSpecs

cap -> C A:? P:? A:? C:? I:? T:? O:? R:? {% () => null %}

cSpecs -> (_ cSpec _):* | __

cSpec -> tolerance | characteristic | voltage_rating

voltage_rating -> decimal _ V {% d => ({voltage_rating: d[0]}) %}

characteristic -> _characteristic {% d => ({characteristic: d[0]}) %}

combine[X, Y] -> $X | $Y | $X "/" $Y | $Y "/" $X
_characteristic ->
    X "7" R                    {% d => "X7R" %}
  | X "5" R                    {% d => "X5R" %}
  | combine[C "0" G,  N P "0"] {% () => 'C0G' %}
  | combine[P "100",  M "7" G] {% () => 'M7G' %}
  | combine[N "33",   H "2" G] {% () => 'H2G' %}
  | combine[N "75",   L "2" G] {% () => 'L2G' %}
  | combine[N "150",  P "2" H] {% () => 'P2H' %}
  | combine[N "220",  R "2" H] {% () => 'R2H' %}
  | combine[N "330",  S "2" H] {% () => 'S2H' %}
  | combine[N "470",  T "2" H] {% () => 'T2H' %}
  | combine[N "750",  U "2" J] {% () => 'U2J' %}
  | combine[N "1000", Q "3" K] {% () => 'Q3K' %}
  | combine[N "1500", P "3" K] {% () => 'P3K' %}


tolerance -> (plusMinus _):? decimal _ "%" {% d => ({tolerance: d[1]}) %}

plusMinus -> "+/-" | "±" | "+-"

capacitance -> decimal _ cMetricPrefix _ farad {%capacitance%}
capacitanceNoFarad -> decimal _ cMetricPrefix {%capacitance%}
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

rSpec -> tolerance | power_rating

power_rating -> decimal _ powerMetricPrefix _ watts {% d => {
  const [quantity, , metricPrefix] = d
  return {power_rating: parseFloat(`${quantity}${metricPrefix}`)}
} %}

watts -> watts_ {% () => null %}
watts_ -> W | W A T T S

resistance ->
  decimal _ rest {% resistance %}

rest -> rMetricPrefix int:? (_ ohm):? | ohm

@{%
  function resistance(d, i, reject) {
    const [integral, , [metricPrefix, fractional, ohm]] = d
    if (fractional) {
      if (/\./.test(integral.toString())) {
        return reject
      }
      var quantity = `${integral}.${fractional}`
    } else {
      var quantity = integral
    }
    return {resistance: parseFloat(`${quantity}${metricPrefix}`)}
  }
%}

ohm -> ohm_ {% () => null %}
ohm_ -> O H M | "Ω" | "Ω"

powerMetricPrefix ->
    giga  {% () => 'e9  ' %}
  | mega  {% () => 'e6  ' %}
  | kilo  {% () => 'e3  ' %}
  | milli {% () => 'e-3 ' %}
  | micro {% () => 'e-6 ' %}
  | nano  {% () => 'e-9 ' %}
  | pico  {% () => 'e-12' %}
  | femto {% () => 'e-15' %}
  | null  {% () => '' %}

rMetricPrefix ->
    giga  {% () => 'e9  ' %}
  | mega  {% () => 'e6  ' %}
  | kilo  {% () => 'e3  ' %}

cMetricPrefix ->
    micro {% () => 'e-6 ' %}
  | nano  {% () => 'e-9 ' %}
  | pico  {% () => 'e-12' %}
  | femto {% () => 'e-15' %}
  | null  {% () => '' %}

