/*
 * Lexer Rules
 */

grammar ElectroGrammar;
import Passive, Semi;

electro_grammar: (passive | semi) SPECIAL_CHARS? EOF;

WHITESPACE: [\p{White_Space}] -> skip;

THROUGHHOLE: T H R O U G H '-'? H O L E -> skip;
SMD: S M D -> skip;
SPECIAL_CHARS: '–';