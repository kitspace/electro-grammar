@include "letters.ne"

metricPrefix ->
    exa   {% () => 10e18  %}
  | peta  {% () => 10e15  %}
  | tera  {% () => 10e12  %}
  | giga  {% () => 10e9   %}
  | mega  {% () => 10e6   %}
  | kilo  {% () => 10e3   %}
  | hecto {% () => 10e2   %}
  | deca  {% () => 10     %}
  | deci  {% () => 10e-1  %}
  | centi {% () => 10e-2  %}
  | milli {% () => 10e-3  %}
  | micro {% () => 10e-6  %}
  | nano  {% () => 10e-9  %}
  | pico  {% () => 10e-12 %}
  | femto {% () => 10e-15 %}
  | atto  {% () => 10e-18 %}
  | null

exa   -> "E" | E X A
peta  -> "P" | P E T A
tera  -> "T" | T E R A
giga  -> "G" | G I G A
mega  -> "M" | M E G A
kilo  -> "k" | K I L O
hecto -> "h" | H E C T O
deca  -> "da" | D E C A
deci  -> "d" | D E C I
centi -> "c" | C E N T I
milli -> "m" | M I L L I
micro ->
    "u"
  | [\u03BC]
  | [\u00B5]
  | [\uD835] [\uDECD]
  | [\uD835] [\uDF07]
  | [\uD835] [\uDF41]
  | [\uD835] [\uDF7B]
  | [\uD835] [\uDFB5]
  | M I C R O
nano  -> "n" | N A N O
pico  -> "p" | P I C O
femto -> "f" | F E M T O
atto  -> "a" | A T T O
