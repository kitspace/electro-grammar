grammar ElectroGrammar;
import Passive;

electro_grammar: passive EOF;

ignored: UNKNOWN* EOF;

UNKNOWN: .+?;
