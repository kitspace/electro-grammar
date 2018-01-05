ANTLR=antlr4 -Xexact-output-dir
GRAMMAR=src/ElectroGrammar.g4
GRAMMAR_FILES=$(wildcard src/*.g4)

all: js

java: $(GRAMMAR) $(GRAMMAR_FILES)
	$(ANTLR) $< -o java/
	javac java/*.java -d java/

clean-java:
	rm -f java/*

python3: $(GRAMMAR) $(GRAMMAR_FILES)
	$(ANTLR) -Dlanguage=Python3 $< -o python3/

clean-python3:
	rm -f python3/*


js: $(GRAMMAR) $(GRAMMAR_FILES)
	$(ANTLR) -Dlanguage=JavaScript $< -o js/lib/

clean-js:
	rm -f js/lib/ElectroGrammar*

clean: clean-java clean-python3 clean-js

.PHONY: all clean python3 clean-python3 java clean-java clean js clean-js
