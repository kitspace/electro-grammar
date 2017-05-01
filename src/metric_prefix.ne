@include "letters.ne"

metricPrefix ->
    exa   {% () => 'e18 ' %}
  | peta  {% () => 'e15 ' %}
  | tera  {% () => 'e12 ' %}
  | giga  {% () => 'e9  ' %}
  | mega  {% () => 'e6  ' %}
  | kilo  {% () => 'e3  ' %}
  | hecto {% () => 'e2  ' %}
  | deci  {% () => 'e-1 ' %}
  | centi {% () => 'e-2 ' %}
  | milli {% () => 'e-3 ' %}
  | micro {% () => 'e-6 ' %}
  | nano  {% () => 'e-9 ' %}
  | pico  {% () => 'e-12' %}
  | femto {% () => 'e-15' %}
  | atto  {% () => 'e-18' %}
  | null  {% () => '' %}

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
