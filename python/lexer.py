# -*- coding: utf-8 -*
import re

def number(scanner, token):
    return {'type': 'number', 'text': token, 'value': ''.join(token.split(' '))}

def word(scanner, token):
    return {'type': 'word', 'text': token, 'value': token.strip()}

scanner = re.Scanner([
    (r'(?:\+\/-|±|\+-)?\s*\d+?\.?\d*?\s*\D\S*(?:\s+|$)', number),
    (r'\S+(?:\s+|$)', word),
])

def lex(text):
    results, remainder = scanner.scan(text)
    return results

print(lex('adjalkjd 100 +- 10 % akjdlkjda 100µF 0603 kajdlkja 8000 alkdjlkajd hooch'))
