/*
 * Lexer Rules
 */

grammar ElectroGrammar;
import Passive, Semi;

electro_grammar: passive | semi;

WHITESPACE: [\p{White_Space}] -> skip;
