from decimal import Decimal
import pytest
import unittest
import electro_grammar as eg;


def parser(unit, key=None):
    if key is None:
        key = unit

    def parse(input):
        obj = eg.get_parser(unit)(input)
        if key:
            return obj[key]
        else:
            return obj
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
        assert parse('1uA') == micro
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
        assert parse('1uH') == micro
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
        assert parse('1us') == micro
        assert parse('1ns') == nano
        assert parse('1ps') == pico

    def test_parse_temperature(self):
        parse = parser('temperature')
        assert parse('1C') == 1
        assert parse('1°C') == 1

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


class ParsePassiveTests(unittest.TestCase):
    def test_parse_resistor(self):
        parse = parser('passive', key=False)
        res = parse('10k')
        assert res['type'] == 'resistor'
        assert res['resistance'] == 10 * kilo

        res = parse('10k 10%')
        assert res['type'] == 'resistor'
        assert res['tolerance'] == 10

        res = parse('10k 0805')
        assert res['type'] == 'resistor'
        assert res['package_size'] == '0805'

        res = parse('10k 125mW')
        assert res['type'] == 'resistor'
        assert res['power'] == 125 * mili

        res = parse('10k 10% 0805 125mW')
        assert res['type'] == 'resistor'
        assert res['resistance'] == 10 * kilo
        assert res['tolerance'] == 10
        assert res['package_size'] == '0805'
        assert res['power'] == 125 * mili

        res = parse('10k pot')
        assert res['type'] == 'resistor'
        assert res['rtype'] == 'pot'

    def test_parse_capacitor(self):
        parse = parser('passive', key=False)
        cap = parse('10nF')
        assert cap['type'] == 'capacitor'
        assert cap['capacitance'] == 10 * nano

        cap = parse('10nF 10%')
        assert cap['type'] == 'capacitor'
        assert cap['tolerance'] == 10

        cap = parse('10nF 0805')
        assert cap['type'] == 'capacitor'
        assert cap['package_size'] == '0805'

        cap = parse('10nF 25V')
        assert cap['type'] == 'capacitor'
        assert cap['voltage'] == 25

        cap = parse('10uF alu')
        assert cap['type'] == 'capacitor'
        assert cap['dielectric'] == 'ALU'

        cap = parse('10nF 10% 0805 25V X7R')
        assert cap['type'] == 'capacitor'
        assert cap['capacitance'] == 10 * nano
        assert cap['tolerance'] == 10
        assert cap['package_size'] == '0805'
        assert cap['voltage'] == 25
        assert cap['dielectric'] == 'X7R'


    def test_parse_inductor(self):
        parse = parser('passive', key=False)
        ind = parse('10mH')
        assert ind['type'] == 'inductor'
        assert ind['inductance'] == 10 * mili

        ind = parse('10mH 10%')
        assert ind['type'] == 'inductor'
        assert ind['tolerance'] == 10

        ind = parse('10mH 0805')
        assert ind['type'] == 'inductor'
        assert ind['package_size'] == '0805'

        ind = parse('10mH 500mA')
        assert ind['type'] == 'inductor'
        assert ind['current'] == 500 * mili

        ind = parse('10mH 10% 0805 500mA')
        assert ind['type'] == 'inductor'
        assert ind['inductance'] == 10 * mili
        assert ind['tolerance'] == 10
        assert ind['package_size'] == '0805'
        assert ind['current'] == 500 * mili

    def test_parse_oscillator(self):
        parse = parser('passive', key=False)
        osc = parse('16MHz')
        assert osc['type'] == 'oscillator'
        assert osc['frequency'] == 16 * mega

        # should be defined in ppm
        osc = parse('16MHz 1%')
        assert osc['type'] == 'oscillator'
        assert osc['tolerance'] == 1

        osc = parse('16MHz 12pF')
        assert osc['type'] == 'oscillator'
        assert osc['capacitance'] == 12 * pico

        osc = parse('16MHz 1% 12pF')
        assert osc['type'] == 'oscillator'
        assert osc['frequency'] == 16 * mega
        assert osc['tolerance'] == 1
        assert osc['capacitance'] == 12 * pico


class ParseDiodeTests(unittest.TestCase):
    def test_parse_code(self):
        parse = parser('electro_grammar', key=False)
        d = parse('1N4148')
        assert d['type'] == 'diode'
        assert d['code'] == '1N4148'

    def test_parse_signal(self):
        parse = parser('electro_grammar', key=False)
        d = parse('sig')
        assert d['type'] == 'diode'
        assert d['dtype'] == 'signal'

        d = parse('sig 1N4148')
        assert d['type'] == 'diode'
        assert d['dtype'] == 'signal'
        assert d['code'] == '1N4148'

        d = parse('1N4148 sig')
        assert d['type'] == 'diode'
        assert d['dtype'] == 'signal'
        assert d['code'] == '1N4148'

    def test_parse_rectifier(self):
        parse = parser('electro_grammar', key=False)
        d = parse('rect')
        assert d['type'] == 'diode'
        assert d['dtype'] == 'rectifier'

        d = parse('rect 1N4007')
        assert d['type'] == 'diode'
        assert d['dtype'] == 'rectifier'
        assert d['code'] == '1N4007'

        d = parse('1N4007 rect')
        assert d['type'] == 'diode'
        assert d['dtype'] == 'rectifier'
        assert d['code'] == '1N4007'

    def test_parse_schottky(self):
        parse = parser('electro_grammar', key=False)
        d = parse('sk')
        assert d['type'] == 'diode'
        assert d['dtype'] == 'schottky'

        d = parse('sk BAT54S')
        assert d['type'] == 'diode'
        assert d['dtype'] == 'schottky'
        assert d['code'] == 'BAT54S'

        d = parse('BAT54S sk')
        assert d['type'] == 'diode'
        assert d['dtype'] == 'schottky'
        assert d['code'] == 'BAT54S'

    def test_parse_led(self):
        parse = parser('electro_grammar', key=False)
        d = parse('led white')
        assert d['type'] == 'diode'
        assert d['dtype'] == 'led'
        assert d['color'] == 'white'

    def test_parse_zener(self):
        parse = parser('electro_grammar', key=False)
        d = parse('z 5V')
        assert d['type'] == 'diode'
        assert d['dtype'] == 'zener'
        assert d['voltage'] == 5


class ParseTransistorTests(unittest.TestCase):
    def test_parse_code(self):
        parse = parser('electro_grammar', key=False)
        q = parse('2N2222')
        assert q['type'] == 'transistor'
        assert q['code'] == '2N2222'

    def test_parse_npn(self):
        parse = parser('electro_grammar', key=False)
        q = parse('npn 2N2222')
        assert q['type'] == 'transistor'
        assert q['ttype'] == 'npn'
        assert q['code'] == '2N2222'

        q = parse('2N2222 npn')
        assert q['type'] == 'transistor'
        assert q['ttype'] == 'npn'
        assert q['code'] == '2N2222'

    def test_parse_pnp(self):
        parse = parser('electro_grammar', key=False)
        q = parse('pnp BC547')
        assert q['type'] == 'transistor'
        assert q['ttype'] == 'pnp'
        assert q['code'] == 'BC547'

        q = parse('BC547 pnp')
        assert q['type'] == 'transistor'
        assert q['ttype'] == 'pnp'
        assert q['code'] == 'BC547'

    def test_parse_nmos(self):
        parse = parser('electro_grammar', key=False)
        q = parse('nmos 2N7000')
        assert q['type'] == 'transistor'
        assert q['ttype'] == 'nmos'
        assert q['code'] == '2N7000'

        q = parse('2N7000 nmos')
        assert q['type'] == 'transistor'
        assert q['ttype'] == 'nmos'
        assert q['code'] == '2N7000'

    def test_parse_pmos(self):
        parse = parser('electro_grammar', key=False)
        q = parse('pmos')
        assert q['type'] == 'transistor'
        assert q['ttype'] == 'pmos'
