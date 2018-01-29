const {eg_config, lexer_tests} = require('./utils');

describe('units', () => {
  const config = eg_config('strict', 'unit');

  describe('voltage', () => {
    const cases = {
      1e3: ['1kV', '1KV', '1kv', '1Kv', '1kilovolt', '1kvolt', '1kilov'],
      1: ['1V', '1v'],
      1e-3: ['1mV'],
    };
    lexer_tests(config, cases, 'voltage', Number);
  });

  describe('current', () => {
    const cases = {
      1: ['1A'],
      1e-3: ['1mA'],
      1e-6: ['1uA'],
      1e-9: ['1nA'],
      1e-12: ['1pA'],
    };
    lexer_tests(config, cases, 'current', Number);
  });

  describe('power', () => {
    const cases = {
      1: ['1W'],
      1e-3: ['1mW'],
    };
    lexer_tests(config, cases, 'power', Number);
  });

  describe('resistance', () => {
    const cases = {
      1e6: ['1M'],
      1e3: ['1k', '1K'],
      1: ['1', '1R', '1Ω'],
      1e-3: ['1m'],
    };
    lexer_tests(config, cases, 'resistance', Number);
  });

  describe('capacitance', () => {
    const cases = {
      1e-6: ['1uF', '1µF'],
      1e-9: ['1nF'],
      1e-12: ['1pF'],
    };
    lexer_tests(config, cases, 'capacitance', Number);
  });

  describe('inductance', () => {
    const cases = {
      1: ['1H'],
      1e-3: ['1mH'],
      1e-6: ['1uH'],
      1e-9: ['1nH'],
    };
    lexer_tests(config, cases, 'inductance', Number);
  });

  describe('frequency', () => {
    const cases = {
      1e9: ['1GHz'],
      1e6: ['1MHz'],
      1e3: ['1KHz', '1kHz', '1khz'],
      1: ['1Hz', '1hz'],
    };
    lexer_tests(config, cases, 'frequency', Number);
  });

  describe('time', () => {
    const cases = {
      1: ['1s'],
      1e-3: ['1ms'],
      1e-6: ['1us'],
      1e-9: ['1ns'],
      1e-12: ['1ps'],
    };
    lexer_tests(config, cases, 'time', Number);
  });

  describe('temperature', () => {
    const cases = {
      1: ['1°C', '1C'],
    };
    lexer_tests(config, cases, 'temperature', Number);
  });
});
