@builtin "number.ne"
@include "letters.ne"

main -> capacitor

capacitor -> ( _ capacitance_expression _ ):+

capacitance_expression -> capacitance | package_size

package_size -> "0603" | "0805" | "1206"

capacitance -> decimal _ unit _ farad

unit ->
    micro {% () => 'u' %}
  | pico  {% () => 'p' %}
  | nano  {% () => 'n' %}
  | null

farad -> "F" {% () => "F" %} | F A R A D {% () => "F" %}
micro -> "u" | "μ" | "𝜇" | "𝛍" | "𝝻" | "𝞵" | M I C R O
pico -> "p"
nano -> "n"

# Whitespace. The important thing here is that the postprocessor
# is a null-returning function. This is a memory efficiency trick.
_ -> [\s]:*     {% function(d) {return null } %}
