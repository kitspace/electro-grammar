grammar Units;
import Alphabet;


fragment DIGIT: [0-9];
NUMBER: DIGIT* '.'? DIGIT+ | DIGIT+ '.'? DIGIT*;


GIGA:   G  | G I G A;
MEGA:  'M' | M E G A;
KILO:   K  | K I L O;
MILI:  'm' | M I L I;
MICRO:  U  | M I C R O       | 'µ';
NANO:   N  | N A N O;
PICO:   P  | P I C O;

VOLT:    V   | V O L T;
AMPERE:  A   | A M P E R E;
WATT:    W   | W A T T;
OHM:     R   | O H M         | 'Ω';
FARAD:   F   | F A R A D;
HENRY:   H   | H E N R Y;
HERZ:    H Z | H E R Z;
SECOND:  S   | S E C O N D;
CELSIUS: C   | C E L S I U S;

PLUSMINUS: '+/-' | '±' | '+-';


unit: voltage
    | current
    | power
    | resistance
    | capacitance
    | inductance
    | frequency
    | time
    | temperature;

tolerance: PLUSMINUS? NUMBER '%';

voltage: NUMBER vprefix? VOLT tolerance?;
vprefix: KILO | MILI;

current: NUMBER aprefix? AMPERE tolerance?;
aprefix: MILI | MICRO | NANO | PICO;

power: NUMBER pprefix? WATT tolerance?;
pprefix: MILI;

resistance: NUMBER (rprefix | OHM) tolerance?;
rprefix: MEGA | KILO | MILI;

capacitance: NUMBER cprefix FARAD tolerance?;
cprefix: MICRO | NANO | PICO;

inductance: NUMBER lprefix? HENRY tolerance?;
lprefix: MILI | MICRO | NANO;

frequency: NUMBER fprefix? HERZ tolerance?;
fprefix: GIGA | MEGA | KILO;

time: NUMBER tprefix? SECOND tolerance?;
tprefix: MILI | MICRO | NANO | PICO;

temperature: NUMBER '°'? CELSIUS tolerance?;