from decimal import Decimal
import pytest
import unittest
import electro_grammar as eg;


def parser(unit):
    def parse(input):
        return eg.get_parser(unit)(input)[unit]
    return parse


giga = Decimal('1e9')
mega = Decimal('1e6')
kilo = Decimal('1e3')
mili = Decimal('1e-3')
micro = Decimal('1e-6')
nano = Decimal('1e-9')
pico = Decimal('1e-12')


class ParseUnitsTests(unittest.TestCase):
    def test_parse_voltage(self):
        parse = parser('voltage')
        assert parse('1kV') == kilo
        assert parse('1V') == 1
        assert parse('1mV') == mili

    def test_parse_current(self):
        parse = parser('current')
        assert parse('1A') == 1
        assert parse('1mA') == mili
        assert parse('1nA') == nano
        assert parse('1pA') == pico

    def test_parse_power(self):
        parse = parser('power')
        assert parse('1W') == 1
        assert parse('1mW') == mili

    def test_parse_resistance(self):
        parse = parser('resistance')
        assert parse('1M') == mega;
        assert parse('1K') == kilo;
        assert parse('1k') == kilo;
        assert parse('1')  == 1
        assert parse('1R')  == 1
        assert parse('1m') == mili;

    def test_parse_capacitance(self):
        parse = parser('capacitance')
        assert parse('1uF') == micro;
        assert parse('1nF') == nano;
        assert parse('1pF') == pico;

    def test_parse_inductance(self):
        parse = parser('inductance')
        assert parse('1H') == 1
        assert parse('1mH') == mili
        assert parse('1nH') == nano

    def test_parse_frequency(self):
        parse = parser('frequency')
        assert parse('1GHz') == giga
        assert parse('1MHz') == mega
        assert parse('1KHz') == kilo
        assert parse('1khz') == kilo
        assert parse('1Hz') == 1

    def test_parse_time(self):
        parse = parser('time')
        assert parse('1s') == 1
        assert parse('1ms') == mili
        assert parse('1ns') == nano
        assert parse('1ps') == pico

    def test_parse_temperature(self):
        parse = parser('temperature')
        assert parse('1C') == 1
        assert parse('1°C')
