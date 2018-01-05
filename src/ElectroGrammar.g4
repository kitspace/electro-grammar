/*
 * Lexer Rules
 */

grammar ElectroGrammar;
import Alphabet;

WORD : DIGIT+ WHITESPACE? (NANO | PICO) WHITESPACE? FARAD?;

WHITESPACE : [\p{White_Space}] -> skip;

words: WORD+;

fragment NANO: 'n';
fragment PICO: 'p';
fragment DIGIT: [0-9];
fragment FARAD: F | F A R A D;
