@builtin "number.ne"
@include "letters.ne"
@include "util.ne"

main -> capacitor {% d => filter(ramda.flatten(d)) %}

capacitor ->
    specs capacitance specs package_size specs
  | specs package_size specs capacitance specs

specs -> (_ spec _):* | _

spec -> "25%"

package_size -> "0603" | "0805" | "1206"

capacitance -> decimal _ unit _ farad {% d => filter(d).join('') %}

unit ->
    micro {% () => 'u' %}
  | pico  {% () => 'p' %}
  | nano  {% () => 'n' %}
  | null

farad -> "F" {% () => "F" %} | F A R A D {% () => "F" %}
micro -> "u" | "μ" | "𝜇" | "𝛍" | "𝝻" | "𝞵" | M I C R O
pico -> "p"
nano -> "n"
