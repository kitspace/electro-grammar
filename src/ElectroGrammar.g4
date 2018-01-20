/*
 * Lexer Rules
 */

grammar ElectroGrammar;
import PackageSize, Units;

electro_grammar : capacitor;

capacitor : capacitance package_size?;

WHITESPACE : [\p{White_Space}] -> skip;
