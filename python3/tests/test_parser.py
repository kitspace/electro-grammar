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

    def test_parse_tolerance(self):
        parse = parser('tolerance')
        assert parse('1%') == 1
        assert parse('+-1%') == 1
        assert parse('+/-1%') == 1
        assert parse('±1%') == 1


class ParsePackageSizeTests(unittest.TestCase):
    def test_parse_imperial(self):
        parse = parser('package_size')
        assert parse('008004') == '008004'
        assert parse('009005') == '009005'
        assert parse('01005') == '01005'
        assert parse('0805') == '0805'
        assert parse('1008') == '1008'
        assert parse('1206') == '1206'
        assert parse('1210') == '1210'
        assert parse('1806') == '1806'
        assert parse('1825') == '1825'
        assert parse('2010') == '2010'
        assert parse('2512') == '2512'
        assert parse('2920') == '2920'

        assert parse('imperial 0201') == '0201'
        assert parse('imperial 0402') == '0402'
        assert parse('imperial 0603') == '0603'

    def test_parse_metric(self):
        parse = parser('package_size')
        assert parse('03015') == '009005'
        assert parse('1005') == '0402'
        assert parse('1608') == '0603'
        assert parse('2012') == '0805'
        assert parse('2520') == '1008'
        assert parse('3216') == '1206'
        assert parse('3225') == '1210'
        assert parse('4516') == '1806'
        assert parse('4532') == '1812'
        assert parse('4564') == '1825'
        assert parse('5025') == '2010'
        assert parse('6332') == '2512'
        assert parse('7451') == '2920'

        assert parse('metric 0201') == '008004'
        assert parse('metric 0402') == '01005'
        assert parse('metric 0603') == '0201'

    def test_parse_ambiguous(self):
        parse = parser('package_size')
        assert parse('0201') == '0201'
        assert parse('0402') == '0402'
        assert parse('0603') == '0603'

        assert parse('i0402') == '0402'
        assert parse('0402i') == '0402'
        assert parse('imperial 0402') == '0402'
        assert parse('0402 imperial') == '0402'

        #assert parse('m0603') == '0201'
        #assert parse('0603m') == '0201'
        assert parse('metric 0603') == '0201'
        assert parse('0603 metric') == '0201'


class ParseDielectricTests(unittest.TestCase):
    def test_parse_class1(self):
        parse = parser('dielectric')
        assert parse('M7G') == 'M7G'
        assert parse('TH') == 'T2H'
        assert parse('N1500') == 'P3K'

    def test_parse_class2(self):
        parse = parser('dielectric')
        assert parse('x4p') == 'X4P'
        assert parse('y5r') == 'Y5R'
        assert parse('z6s') == 'Z6S'

    def test_parse_alu(self):
        parse = parser('dielectric')
        assert parse('alu') == 'ALU'
        assert parse('Aluminium') == 'ALU'
        assert parse('Elco') == 'ALU'
        assert parse('Electrolytic') == 'ALU'

    def test_parse_tan(self):
        parse = parser('dielectric')
        assert parse('tan') == 'TAN'
        assert parse('tantalum') == 'TAN'
