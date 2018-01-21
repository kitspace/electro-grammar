grammar Units;
import Alphabet;


unit: (voltage
    | current
    | power
    /*| resistance*/
    | capacitance
    | inductance
    | frequency
    | time
    | temperature);


fragment DIGIT: [0-9];
NUMBER: DIGIT* '.'? DIGIT+ | DIGIT+ '.'? DIGIT*;


fragment GIGA:   G  | G I G A;
fragment MEGA:  'M' | M E G A;
fragment KILO:   K  | K I L O;
fragment MILI:  'm' | M I L I;
fragment MICRO:  U  | M I C R O;
fragment NANO:   N  | N A N O;
fragment PICO:   P  | P I C O;


tolerance: PLUSMINUS? NUMBER '%';
PLUSMINUS: '+/-' | '±' | '+-';


voltage: NUMBER (VPREFIX? VOLT) tolerance?;
VPREFIX: KILO | MILI;
VOLT: V O L T | V;

current: NUMBER (APREFIX? AMPERE) tolerance?;
APREFIX: MILI | MICRO | NANO | PICO;
AMPERE: A | A M P E R E;

power: NUMBER PPREFIX? WATT tolerance?;
PPREFIX: MILI;
WATT: W | W A T T;

resistance: NUMBER RPREFIX? OHM? tolerance?;
RPREFIX: MEGA | KILO | MILI;
OHM: R | '\u{2126}' | O H M;

capacitance: NUMBER CPREFIX FARAD tolerance?;
CPREFIX: MICRO | NANO | PICO;
FARAD: F | F A R A D;

inductance: NUMBER LPREFIX? HENRY tolerance?;
LPREFIX: MILI | MICRO | NANO;
HENRY: H | H E N R Y;

frequency: NUMBER FPREFIX? HERZ tolerance?;
FPREFIX: GIGA | MEGA | KILO;
HERZ: H Z | H E R Z;

time: NUMBER TPREFIX? SECONDS tolerance?;
TPREFIX: MILI | NANO | PICO;
SECONDS: S | S E C | S E C O N D S;

temperature: NUMBER tunit tolerance?;
tunit: KELVIN | 'u{00b0}'? CELSIUS;
KELVIN:  K | K E L V I N;
CELSIUS: C | C E L S I U S;