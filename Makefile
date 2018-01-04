java:
	antlr4 electro_grammar/ElectroGrammar.g4 -o java
	javac java/electro_grammar/*.java -d java/electro_grammar

python3:
	antlr4 -Dlanguage=Python3 electro_grammar/ElectroGrammar.g4 -o python3

.PHONY: python3 java
