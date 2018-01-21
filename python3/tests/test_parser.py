import pytest
import unittest
import electro_grammar as eg;


class ParserTests(unittest.TestCase):
    def test_parse_resistance(self):
        assert eg.parse('10k')['resistance'] == 10e5;
