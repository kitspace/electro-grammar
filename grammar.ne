@builtin "number.ne"
@include "letters.ne"
@include "util.ne"

main -> capacitor {% d => assignAll(filter(ramda.flatten(d))) %}

capacitor ->
    specs capacitance specs package_size specs
  | specs package_size specs capacitance specs

specs -> (_ spec _):* | __

spec -> (plus_minus _):? decimal _ "%" {% d => ({tolerance:d[1]}) %}

plus_minus -> "+/-" | "±"

package_size ->
    "0402"  {% d => ({size: d[0]}) %}
  | "0603"  {% d => ({size: d[0]}) %}
  | "0805"  {% d => ({size: d[0]}) %}
  | "1206"  {% d => ({size: d[0]}) %}

capacitance -> decimal _ modifier _ farad {%capacitance%}
@{%
  function capacitance(d) {
    [quantity, _, modifier, _, farad] = d
    console.log(quantity, modifier)

    return {capacitance: quantity * modifier}
  }
%}

modifier ->
    micro {% () => 10e-6 %}
  | pico  {% () => 10e-12 %}
  | nano  {% () => 10e-9 %}
  | null

farad -> "F" {% () => "F" %} | F A R A D {% () => "F" %}
micro -> "u" | "μ" | "𝜇" | "𝛍" | "𝝻" | "𝞵" | M I C R O
pico -> "p"
nano -> "n"
