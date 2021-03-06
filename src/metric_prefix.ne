@include "letters.ne"

exa   -> "E" | E X A
peta  -> "P" | P E T A
tera  -> "T" | T E R A
giga  -> "G" | G I G | G I G A
mega  -> "M" | M E G | M E G A
kilo  ->  K  | K I L O
hecto -> "h" | H E C T O
deci  -> "d" | D E C I
centi -> "c" | C E N T I
milli -> "m" | M I L L I
micro ->
    U
  | [\u03BC]
  | [\u00B5]
  | [\uD835] [\uDECD]
  | [\uD835] [\uDF07]
  | [\uD835] [\uDF41]
  | [\uD835] [\uDF7B]
  | [\uD835] [\uDFB5]
  | M I C R O
nano  -> N   | N A N | N A N O
pico  -> P   | P I C O
femto -> "f" | F E M T O
atto  -> "a" | A T T O
