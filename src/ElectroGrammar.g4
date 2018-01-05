/*
 * Lexer Rules
 */

grammar ElectroGrammar;

WORD : [\P{White_Space}]+;

WHITESPACE : [\p{White_Space}] -> skip;

words: WORD+;
