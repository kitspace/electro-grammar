@builtin "number.ne"
@include "util.ne"
@include "metric_prefix.ne"
@include "package_size.ne"

main -> component {% d => assignAll(filter(flatten(d))) %}

component ->
    capacitor {% type('capacitor') %}
  | resistor {% type('resistor') %}
  | led {% type('led') %}

@{%
    function type(t) {
      return d => [{type: t}].concat(d)
    }
%}

## Capacitors ##

# the description can come in any order
# if it starts with 'c' or 'capacitor' then F or farad can be ommitted
capacitor ->
    cSpecs capacitance cSpecs packageSize:? cSpecs
  | cSpecs packageSize:? cSpecs capacitance cSpecs
  | cap cSpecs packageSize:? cSpecs (capacitanceNoFarad | capacitance) cSpecs
  | cap cSpecs (capacitanceNoFarad | capacitance) cSpecs packageSize:? cSpecs


cap -> C A:? P:? A:? C:? I:? T:? O:? R:? {% nuller %}

cSpecs -> (_ cSpec _):* | __

cSpec -> tolerance | characteristic | voltage_rating

voltage_rating -> decimal _ V {% d => ({voltage_rating: d[0]}) %}

characteristic -> _characteristic {% d => ({characteristic: d[0][0]}) %}

_characteristic -> class1 | class2

combine[X, Y] -> $X | $Y | $X "/" $Y | $Y "/" $X
class1 ->
    combine[C "0" G,  N P "0"] {% () => 'C0G' %}
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

class2 -> class2_letter class2_number class2_code {% d => (
  d.join('').toUpperCase()
)%}
class2_letter -> X | Y | Z
class2_number -> "4" | "5" | "6" | "7" | "8" | "9"
class2_code -> P | R | S | T | U | V

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

farad -> "F" {% nuller %} | F A R A D {% nuller %}

## Resistors ##

resistor ->
    rSpecs resistance rSpecs packageSize:? rSpecs
  | rSpecs packageSize:? rSpecs resistance rSpecs


rSpecs -> (_ rSpec _):* | __

rSpec -> tolerance | power_rating

power_rating -> decimal _ powerMetricPrefix _ watts {% d => {
  const [quantity, , metricPrefix] = d
  return {power_rating: parseFloat(`${quantity}${metricPrefix}`)}
} %}

watts -> watts_ {% nuller %}
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

ohm -> ohm_ {% nuller %}
ohm_ -> O H M | "Ω" | "Ω" | R


## LEDs ##

led ->
     led_letters ledSpecs
   | ledSpecs led_letters
   | ledSpecs led_letters ledSpecs

led_letters -> L E D {% nuller %}

ledSpecs -> (_ ledSpec _):+

ledSpec -> packageSize | color

color -> color_name {% d => ({color: d[0]}) %}
color_name ->
  R E D                        {% () => 'red' %}
  | G R E E N                  {% () => 'green' %}
  | B L U E                    {% () => 'blue' %}
  | Y E L L O W                {% () => 'yellow' %}
  | O R A N G E                {% () => 'orange' %}
  | W H I T E                  {% () => 'white' %}
  | A M B E R                  {% () => 'amber' %}
  | C Y A N                    {% () => 'cyan' %}
  | P U R P L E                {% () => 'purple' %}
  | Y E L L O W _ G R E E N    {% () => 'yellow green' %}


## Metric Prefixes ##

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

