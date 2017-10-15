@builtin "number.ne"
@include "util.ne"
@include "metric_prefix.ne"
@include "package_size.ne"

main -> component {% function(d) { return filter(flatten(d)) } %}

component ->
    capacitor {% type('capacitor') %}
  | resistor {% type('resistor') %}
  | led {% type('led') %}

@{%
    function type(t) {
        return function(d) {
            return  [{type: t}].concat(d)
        }
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

voltage_rating -> decimal _ V {% function(d) { return {voltage_rating: d[0]} } %}

characteristic -> characteristic_ {% function(d) { return {characteristic: d[0][0]} } %}

# see https://en.wikipedia.org/wiki/Ceramic_capacitor#Class_1_ceramic_capacitor
# https://en.wikipedia.org/wiki/Ceramic_capacitor#Class_2_ceramic_capacitor
characteristic_ -> class1 | class2

class1 ->
    class1_ceramic_name                          {% id %}
  | class1_eia_code                              {% id %}
  | class1_ceramic_name _ "/" _ class1_eia_code  {% id %}
  | class1_eia_code _ "/" _ class1_ceramic_name  {% id %}

class1_ceramic_name ->
    C "0" G  {% function() { return 'C0G' } %}
  | P "100"  {% function() { return 'M7G' } %}
  | N "33"   {% function() { return 'H2G' } %}
  | N "75"   {% function() { return 'L2G' } %}
  | N "150"  {% function() { return 'P2H' } %}
  | N "220"  {% function() { return 'R2H' } %}
  | N "330"  {% function() { return 'S2H' } %}
  | N "470"  {% function() { return 'T2H' } %}
  | N "750"  {% function() { return 'U2J' } %}
  | N "1000" {% function() { return 'Q3K' } %}
  | N "1500" {% function() { return 'P3K' } %}

class1_eia_code ->
  N P "0" {% function() { return 'C0G' } %}
| M "7" G {% function() { return 'M7G' } %}
| H "2" G {% function() { return 'H2G' } %}
| L "2" G {% function() { return 'L2G' } %}
| P "2" H {% function() { return 'P2H' } %}
| R "2" H {% function() { return 'R2H' } %}
| S "2" H {% function() { return 'S2H' } %}
| T "2" H {% function() { return 'T2H' } %}
| U "2" J {% function() { return 'U2J' } %}
| Q "3" K {% function() { return 'Q3K' } %}
| P "3" K {% function() { return 'P3K' } %}

class2 -> class2_letter class2_number class2_code
  {% function(d) { return d.join('').toUpperCase() } %}
class2_letter -> X | Y | Z
class2_number -> "4" | "5" | "6" | "7" | "8" | "9"
class2_code -> P | R | S | T | U | V

tolerance -> (plusMinus _):? decimal _ "%" {% function(d) { return {tolerance: d[1]} } %}

plusMinus -> "+/-" | "±" | "+-"

capacitance -> decimal _ cMetricPrefix:? _ farad {% capacitance %}
capacitanceNoFarad -> decimal _ cMetricPrefix:? {% capacitance %}
@{%
  function capacitance(d) {
    var quantity = d[0]
    var metricPrefix = d[2]
    var farad = d[4]

    return {capacitance: parseFloat(quantity + (metricPrefix || ''))}
  }
%}

farad -> F {% nuller %} | F A R A D {% nuller %}


## Resistors ##

resistor ->
    rSpecs resistance rSpecs packageSize:? rSpecs
  | rSpecs packageSize:? rSpecs resistance rSpecs


rSpecs -> (_ rSpec _):* | __

rSpec -> tolerance | power_rating

power_rating -> decimal _ powerMetricPrefix:? _ watts {%
    function(d) {
        var quantity = d[0]
        var metricPrefix = d[2]
        return {power_rating: parseFloat(quantity + (metricPrefix || ''))}
    }
%}

watts -> watts_ {% nuller %}
watts_ -> W | W A T T S

resistance ->
  decimal _ rest {% resistance %}

rest -> rMetricPrefix int:? (_ ohm):? | ohm

@{%
  function resistance(d, i, reject) {
    var integral = d[0]
    var metricPrefix = d[2][0]
    var fractional = d[2][1]
    var ohm = d[2][2]
    if (fractional) {
      if (/\./.test(integral.toString())) {
        return reject
      }
      var quantity = integral + '.' + fractional
    } else {
      var quantity = integral
    }
    return {resistance: parseFloat(quantity + (metricPrefix || ''))}
  }
%}

ohm -> ohm_ {% nuller %}
ohm_ -> O H M | "Ω" | "Ω"


## LEDs ##

led ->
     led_letters ledSpecs
   | ledSpecs led_letters
   | ledSpecs led_letters ledSpecs

led_letters -> L E D {% nuller %}

ledSpecs -> (_ ledSpec _):+

ledSpec -> packageSize | color

color -> color_name {% function(d) { return {color: d[0]} } %}
color_name ->
    R E D                   {% function() { return 'red' } %}
  | G R E E N               {% function() { return 'green' } %}
  | B L U E                 {% function() { return 'blue' } %}
  | Y E L L O W             {% function() { return 'yellow' } %}
  | O R A N G E             {% function() { return 'orange' } %}
  | W H I T E               {% function() { return 'white' } %}
  | A M B E R               {% function() { return 'amber' } %}
  | C Y A N                 {% function() { return 'cyan' } %}
  | P U R P L E             {% function() { return 'purple' } %}
  | Y E L L O W _ G R E E N {% function() { return 'yellow green' } %}


## Metric Prefixes ##

powerMetricPrefix ->
    giga  {% function() { return 'e9  ' } %}
  | mega  {% function() { return 'e6  ' } %}
  | kilo  {% function() { return 'e3  ' } %}
  | milli {% function() { return 'e-3 ' } %}
  | micro {% function() { return 'e-6 ' } %}
  | nano  {% function() { return 'e-9 ' } %}
  | pico  {% function() { return 'e-12' } %}
  | femto {% function() { return 'e-15' } %}

rMetricPrefix ->
    giga  {% function() { return 'e9  ' } %}
  | mega  {% function() { return 'e6  ' } %}
  | kilo  {% function() { return 'e3  ' } %}
  | R     {% function() { return ''     } %}

cMetricPrefix ->
    micro {% function() { return 'e-6 ' } %}
  | nano  {% function() { return 'e-9 ' } %}
  | pico  {% function() { return 'e-12' } %}

