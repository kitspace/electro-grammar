ANTLR=antlr4 -Xexact-output-dir
GRAMMAR=src/ElectroGrammar.g4

java: $(GRAMMAR)
	$(ANTLR) $< -o java/
	javac java/*.java -d java/

clean-java:
	rm -f java/*

python3: $(GRAMMAR)
	$(ANTLR) -Dlanguage=Python3 $< -o python3/

clean-python3:
	rm -f python3/*

clean: clean-java clean-python3

.PHONY: python3 java clean-python3 clean-java clean
