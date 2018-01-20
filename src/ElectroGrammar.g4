/*
 * Lexer Rules
 */

grammar ElectroGrammar;
import Alphabet;

electro_grammar : capacitance;

capacitance : NUMBER CPREFIX FARAD?;

fragment DIGIT: [0-9];
NUMBER: DIGIT* '.'? DIGIT+ | DIGIT+ '.'? DIGIT*;

fragment NANO: 'n' | N A N O;
fragment PICO: 'p' | P I C O;
fragment MICRO: 'u' | M I C R O;
CPREFIX: MICRO | NANO | PICO;

FARAD: F | F A R A D;

WHITESPACE : [\p{White_Space}] -> skip;
