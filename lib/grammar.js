'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Generated automatically by nearley, version 2.15.1
// http://github.com/Hardmath123/nearley
(function () {
    function id(x) {
        return x[0];
    }

    var flatten = require('./flatten');

    var filter = function filter(d) {
        return d.filter(function (t) {
            return t !== null;
        });
    };

    var assignAll = function assignAll(objs) {
        return objs.reduce(function (prev, obj) {
            return _extends(prev, obj);
        });
    };

    var nuller = function nuller() {
        return null;
    };

    var toImperial = {
        '0402': '01005',
        '0603': '0201',
        '1005': '0402',
        '1608': '0603',
        '2012': '0805',
        '2520': '1008',
        '3216': '1206',
        '3225': '1210',
        '4516': '1806',
        '4532': '1812',
        '5025': '2010',
        '6332': '2512'
    };

    function type(t) {
        return function (d) {
            return [{ type: t }].concat(d);
        };
    }

    function voltage_rating(d, i, reject) {
        var _d = _slicedToArray(d, 3),
            integral = _d[0],
            _d$ = _slicedToArray(_d[2], 2),
            v = _d$[0],
            fractional = _d$[1];

        if (fractional) {
            if (/\./.test(integral.toString())) {
                return reject;
            }
            var quantity = integral + '.' + fractional;
        } else {
            var quantity = integral;
        }
        return { voltage_rating: parseFloat(quantity) };
    }

    function capacitance(d, i, reject) {
        var _d2 = _slicedToArray(d, 3),
            integral = _d2[0],
            _d2$ = _slicedToArray(_d2[2], 2),
            metricPrefix = _d2$[0],
            fractional = _d2$[1];

        if (fractional) {
            if (/\./.test(integral.toString()) || metricPrefix === "") {
                return reject;
            }
            var quantity = integral + '.' + fractional;
        } else {
            var quantity = integral;
        }
        return { capacitance: parseFloat('' + quantity + metricPrefix) };
    }

    function resistance(d, i, reject) {
        var _d3 = _slicedToArray(d, 3),
            integral = _d3[0],
            _d3$ = _slicedToArray(_d3[2], 3),
            metricPrefix = _d3$[0],
            fractional = _d3$[1],
            ohm = _d3$[2];

        if (fractional) {
            if (/\./.test(integral.toString())) {
                return reject;
            }
            var quantity = integral + '.' + fractional;
        } else {
            var quantity = integral;
        }
        return { resistance: parseFloat('' + quantity + metricPrefix) };
    }
    var grammar = {
        Lexer: undefined,
        ParserRules: [{ "name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/] }, { "name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": function postprocess(d) {
                return parseInt(d[0].join(""));
            }
        }, { "name": "int$ebnf$1$subexpression$1", "symbols": [{ "literal": "-" }] }, { "name": "int$ebnf$1$subexpression$1", "symbols": [{ "literal": "+" }] }, { "name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id }, { "name": "int$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "int$ebnf$2", "symbols": [/[0-9]/] }, { "name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": function postprocess(d) {
                if (d[0]) {
                    return parseInt(d[0][0] + d[1].join(""));
                } else {
                    return parseInt(d[1].join(""));
                }
            }
        }, { "name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/] }, { "name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/] }, { "name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{ "literal": "." }, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"] }, { "name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id }, { "name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": function postprocess(d) {
                return parseFloat(d[0].join("") + (d[1] ? "." + d[1][1].join("") : ""));
            }
        }, { "name": "decimal$ebnf$1", "symbols": [{ "literal": "-" }], "postprocess": id }, { "name": "decimal$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "decimal$ebnf$2", "symbols": [/[0-9]/] }, { "name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/] }, { "name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "decimal$ebnf$3$subexpression$1", "symbols": [{ "literal": "." }, "decimal$ebnf$3$subexpression$1$ebnf$1"] }, { "name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id }, { "name": "decimal$ebnf$3", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": function postprocess(d) {
                return parseFloat((d[0] || "") + d[1].join("") + (d[2] ? "." + d[2][1].join("") : ""));
            }
        }, { "name": "percentage", "symbols": ["decimal", { "literal": "%" }], "postprocess": function postprocess(d) {
                return d[0] / 100;
            }
        }, { "name": "jsonfloat$ebnf$1", "symbols": [{ "literal": "-" }], "postprocess": id }, { "name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/] }, { "name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/] }, { "name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{ "literal": "." }, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"] }, { "name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id }, { "name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id }, { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/] }, { "name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"] }, { "name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id }, { "name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": function postprocess(d) {
                return parseFloat((d[0] || "") + d[1].join("") + (d[2] ? "." + d[2][1].join("") : "") + (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : ""));
            }
        }, { "name": "_$ebnf$1", "symbols": [] }, { "name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "_", "symbols": ["_$ebnf$1"], "postprocess": function postprocess() {
                return null;
            } }, { "name": "__$ebnf$1", "symbols": [/[\s]/] }, { "name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "__", "symbols": ["__$ebnf$1"], "postprocess": function postprocess() {
                return null;
            } }, { "name": "A", "symbols": [{ "literal": "A" }] }, { "name": "A", "symbols": [{ "literal": "a" }] }, { "name": "B", "symbols": [{ "literal": "B" }] }, { "name": "B", "symbols": [{ "literal": "b" }] }, { "name": "C", "symbols": [{ "literal": "C" }] }, { "name": "C", "symbols": [{ "literal": "c" }] }, { "name": "D", "symbols": [{ "literal": "D" }] }, { "name": "D", "symbols": [{ "literal": "d" }] }, { "name": "E", "symbols": [{ "literal": "E" }] }, { "name": "E", "symbols": [{ "literal": "e" }] }, { "name": "F", "symbols": [{ "literal": "F" }] }, { "name": "F", "symbols": [{ "literal": "f" }] }, { "name": "G", "symbols": [{ "literal": "G" }] }, { "name": "G", "symbols": [{ "literal": "g" }] }, { "name": "H", "symbols": [{ "literal": "H" }] }, { "name": "H", "symbols": [{ "literal": "h" }] }, { "name": "I", "symbols": [{ "literal": "I" }] }, { "name": "I", "symbols": [{ "literal": "i" }] }, { "name": "J", "symbols": [{ "literal": "J" }] }, { "name": "J", "symbols": [{ "literal": "j" }] }, { "name": "K", "symbols": [{ "literal": "K" }] }, { "name": "K", "symbols": [{ "literal": "k" }] }, { "name": "L", "symbols": [{ "literal": "L" }] }, { "name": "L", "symbols": [{ "literal": "l" }] }, { "name": "M", "symbols": [{ "literal": "M" }] }, { "name": "M", "symbols": [{ "literal": "m" }] }, { "name": "N", "symbols": [{ "literal": "N" }] }, { "name": "N", "symbols": [{ "literal": "n" }] }, { "name": "O", "symbols": [{ "literal": "O" }] }, { "name": "O", "symbols": [{ "literal": "o" }] }, { "name": "P", "symbols": [{ "literal": "P" }] }, { "name": "P", "symbols": [{ "literal": "p" }] }, { "name": "Q", "symbols": [{ "literal": "Q" }] }, { "name": "Q", "symbols": [{ "literal": "q" }] }, { "name": "R", "symbols": [{ "literal": "R" }] }, { "name": "R", "symbols": [{ "literal": "r" }] }, { "name": "S", "symbols": [{ "literal": "S" }] }, { "name": "S", "symbols": [{ "literal": "s" }] }, { "name": "T", "symbols": [{ "literal": "T" }] }, { "name": "T", "symbols": [{ "literal": "t" }] }, { "name": "U", "symbols": [{ "literal": "U" }] }, { "name": "U", "symbols": [{ "literal": "u" }] }, { "name": "V", "symbols": [{ "literal": "V" }] }, { "name": "V", "symbols": [{ "literal": "v" }] }, { "name": "W", "symbols": [{ "literal": "W" }] }, { "name": "W", "symbols": [{ "literal": "w" }] }, { "name": "X", "symbols": [{ "literal": "X" }] }, { "name": "X", "symbols": [{ "literal": "x" }] }, { "name": "Y", "symbols": [{ "literal": "Y" }] }, { "name": "Y", "symbols": [{ "literal": "y" }] }, { "name": "Z", "symbols": [{ "literal": "Z" }] }, { "name": "Z", "symbols": [{ "literal": "z" }] }, { "name": "exa", "symbols": [{ "literal": "E" }] }, { "name": "exa", "symbols": ["E", "X", "A"] }, { "name": "peta", "symbols": [{ "literal": "P" }] }, { "name": "peta", "symbols": ["P", "E", "T", "A"] }, { "name": "tera", "symbols": [{ "literal": "T" }] }, { "name": "tera", "symbols": ["T", "E", "R", "A"] }, { "name": "giga", "symbols": [{ "literal": "G" }] }, { "name": "giga", "symbols": ["G", "I", "G"] }, { "name": "giga", "symbols": ["G", "I", "G", "A"] }, { "name": "mega", "symbols": [{ "literal": "M" }] }, { "name": "mega", "symbols": ["M", "E", "G"] }, { "name": "mega", "symbols": ["M", "E", "G", "A"] }, { "name": "kilo", "symbols": ["K"] }, { "name": "kilo", "symbols": ["K", "I", "L", "O"] }, { "name": "hecto", "symbols": [{ "literal": "h" }] }, { "name": "hecto", "symbols": ["H", "E", "C", "T", "O"] }, { "name": "deci", "symbols": [{ "literal": "d" }] }, { "name": "deci", "symbols": ["D", "E", "C", "I"] }, { "name": "centi", "symbols": [{ "literal": "c" }] }, { "name": "centi", "symbols": ["C", "E", "N", "T", "I"] }, { "name": "milli", "symbols": [{ "literal": "m" }] }, { "name": "milli", "symbols": ["M", "I", "L", "L", "I"] }, { "name": "micro", "symbols": ["U"] }, { "name": "micro", "symbols": [/[\u03BC]/] }, { "name": "micro", "symbols": [/[\u00B5]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDECD]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDF07]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDF41]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDF7B]/] }, { "name": "micro", "symbols": [/[\uD835]/, /[\uDFB5]/] }, { "name": "micro", "symbols": ["M", "I", "C", "R", "O"] }, { "name": "nano", "symbols": ["N"] }, { "name": "nano", "symbols": ["N", "A", "N"] }, { "name": "nano", "symbols": ["N", "A", "N", "O"] }, { "name": "pico", "symbols": ["P"] }, { "name": "pico", "symbols": ["P", "I", "C", "O"] }, { "name": "femto", "symbols": [{ "literal": "f" }] }, { "name": "femto", "symbols": ["F", "E", "M", "T", "O"] }, { "name": "atto", "symbols": [{ "literal": "a" }] }, { "name": "atto", "symbols": ["A", "T", "T", "O"] }, { "name": "packageSize", "symbols": ["_packageSize"], "postprocess": function postprocess(d) {
                return { size: filter(flatten(d))[0] };
            } }, { "name": "_packageSize", "symbols": ["_imperialSize"] }, { "name": "_packageSize", "symbols": ["_metricSize"] }, { "name": "_imperialSize$string$1", "symbols": [{ "literal": "0" }, { "literal": "1" }, { "literal": "0" }, { "literal": "0" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$1"] }, { "name": "_imperialSize$string$2", "symbols": [{ "literal": "0" }, { "literal": "2" }, { "literal": "0" }, { "literal": "1" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$2"] }, { "name": "_imperialSize$string$3", "symbols": [{ "literal": "0" }, { "literal": "4" }, { "literal": "0" }, { "literal": "2" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$3"] }, { "name": "_imperialSize$string$4", "symbols": [{ "literal": "0" }, { "literal": "6" }, { "literal": "0" }, { "literal": "3" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$4"] }, { "name": "_imperialSize$string$5", "symbols": [{ "literal": "0" }, { "literal": "8" }, { "literal": "0" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$5"] }, { "name": "_imperialSize$string$6", "symbols": [{ "literal": "1" }, { "literal": "0" }, { "literal": "0" }, { "literal": "8" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$6"] }, { "name": "_imperialSize$string$7", "symbols": [{ "literal": "1" }, { "literal": "2" }, { "literal": "0" }, { "literal": "6" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$7"] }, { "name": "_imperialSize$string$8", "symbols": [{ "literal": "1" }, { "literal": "2" }, { "literal": "1" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$8"] }, { "name": "_imperialSize$string$9", "symbols": [{ "literal": "1" }, { "literal": "8" }, { "literal": "0" }, { "literal": "6" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$9"] }, { "name": "_imperialSize$string$10", "symbols": [{ "literal": "2" }, { "literal": "0" }, { "literal": "1" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$10"] }, { "name": "_imperialSize$string$11", "symbols": [{ "literal": "2" }, { "literal": "5" }, { "literal": "1" }, { "literal": "2" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "_imperialSize", "symbols": ["_imperialSize$string$11"] }, { "name": "_metricSize$ebnf$1", "symbols": [] }, { "name": "_metricSize$ebnf$1", "symbols": ["_metricSize$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "_metricSize", "symbols": ["__metricSize", "_metricSize$ebnf$1", "M", "E", "T", "R", "I", "C"], "postprocess": function postprocess(d) {
                return toImperial[d[0]];
            } }, { "name": "_metricSize$ebnf$2", "symbols": [] }, { "name": "_metricSize$ebnf$2", "symbols": ["_metricSize$ebnf$2", /[\s]/], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "_metricSize", "symbols": ["M", "E", "T", "R", "I", "C", "_metricSize$ebnf$2", "__metricSize"], "postprocess": function postprocess(d) {
                return toImperial[d[7]];
            } }, { "name": "_metricSize", "symbols": ["unambigiousMetricSize"], "postprocess": function postprocess(d) {
                return toImperial[d[0]];
            } }, { "name": "unambigiousMetricSize$string$1", "symbols": [{ "literal": "1" }, { "literal": "0" }, { "literal": "0" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$1"] }, { "name": "unambigiousMetricSize$string$2", "symbols": [{ "literal": "1" }, { "literal": "6" }, { "literal": "0" }, { "literal": "8" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$2"] }, { "name": "unambigiousMetricSize$string$3", "symbols": [{ "literal": "2" }, { "literal": "0" }, { "literal": "1" }, { "literal": "2" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$3"] }, { "name": "unambigiousMetricSize$string$4", "symbols": [{ "literal": "2" }, { "literal": "5" }, { "literal": "2" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$4"] }, { "name": "unambigiousMetricSize$string$5", "symbols": [{ "literal": "3" }, { "literal": "2" }, { "literal": "1" }, { "literal": "6" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$5"] }, { "name": "unambigiousMetricSize$string$6", "symbols": [{ "literal": "3" }, { "literal": "2" }, { "literal": "2" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$6"] }, { "name": "unambigiousMetricSize$string$7", "symbols": [{ "literal": "4" }, { "literal": "5" }, { "literal": "1" }, { "literal": "6" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$7"] }, { "name": "unambigiousMetricSize$string$8", "symbols": [{ "literal": "5" }, { "literal": "0" }, { "literal": "2" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$8"] }, { "name": "unambigiousMetricSize$string$9", "symbols": [{ "literal": "6" }, { "literal": "3" }, { "literal": "3" }, { "literal": "2" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$9"] }, { "name": "__metricSize", "symbols": ["unambigiousMetricSize"] }, { "name": "__metricSize$string$1", "symbols": [{ "literal": "0" }, { "literal": "4" }, { "literal": "0" }, { "literal": "2" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "__metricSize", "symbols": ["__metricSize$string$1"] }, { "name": "__metricSize$string$2", "symbols": [{ "literal": "0" }, { "literal": "6" }, { "literal": "0" }, { "literal": "3" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "__metricSize", "symbols": ["__metricSize$string$2"] }, { "name": "M", "symbols": [{ "literal": "M" }] }, { "name": "M", "symbols": [{ "literal": "m" }] }, { "name": "E", "symbols": [{ "literal": "E" }] }, { "name": "E", "symbols": [{ "literal": "e" }] }, { "name": "T", "symbols": [{ "literal": "T" }] }, { "name": "T", "symbols": [{ "literal": "t" }] }, { "name": "R", "symbols": [{ "literal": "R" }] }, { "name": "R", "symbols": [{ "literal": "r" }] }, { "name": "I", "symbols": [{ "literal": "I" }] }, { "name": "I", "symbols": [{ "literal": "i" }] }, { "name": "C", "symbols": [{ "literal": "C" }] }, { "name": "C", "symbols": [{ "literal": "c" }] }, { "name": "main", "symbols": ["component"], "postprocess": function postprocess(d) {
                return assignAll(filter(flatten(d)));
            } }, { "name": "component", "symbols": ["capacitor"], "postprocess": type('capacitor') }, { "name": "component", "symbols": ["resistor"], "postprocess": type('resistor') }, { "name": "component", "symbols": ["led"], "postprocess": type('led') }, { "name": "capacitor$ebnf$1", "symbols": ["packageSize"], "postprocess": id }, { "name": "capacitor$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "capacitor", "symbols": ["cSpecs", "capacitance", "cSpecs", "capacitor$ebnf$1", "cSpecs"] }, { "name": "capacitor$ebnf$2", "symbols": ["packageSize"], "postprocess": id }, { "name": "capacitor$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "capacitor", "symbols": ["cSpecs", "capacitor$ebnf$2", "cSpecs", "capacitance", "cSpecs"] }, { "name": "capacitor$ebnf$3", "symbols": ["packageSize"], "postprocess": id }, { "name": "capacitor$ebnf$3", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "capacitor$subexpression$1", "symbols": ["capacitanceNoFarad"] }, { "name": "capacitor$subexpression$1", "symbols": ["capacitance"] }, { "name": "capacitor", "symbols": ["cap", "cSpecs", "capacitor$ebnf$3", "cSpecs", "capacitor$subexpression$1", "cSpecs"] }, { "name": "capacitor$subexpression$2", "symbols": ["capacitanceNoFarad"] }, { "name": "capacitor$subexpression$2", "symbols": ["capacitance"] }, { "name": "capacitor$ebnf$4", "symbols": ["packageSize"], "postprocess": id }, { "name": "capacitor$ebnf$4", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "capacitor", "symbols": ["cap", "cSpecs", "capacitor$subexpression$2", "cSpecs", "capacitor$ebnf$4", "cSpecs"] }, { "name": "cap$ebnf$1", "symbols": ["A"], "postprocess": id }, { "name": "cap$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$2", "symbols": ["P"], "postprocess": id }, { "name": "cap$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$3", "symbols": ["A"], "postprocess": id }, { "name": "cap$ebnf$3", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$4", "symbols": ["C"], "postprocess": id }, { "name": "cap$ebnf$4", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$5", "symbols": ["I"], "postprocess": id }, { "name": "cap$ebnf$5", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$6", "symbols": ["T"], "postprocess": id }, { "name": "cap$ebnf$6", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$7", "symbols": ["O"], "postprocess": id }, { "name": "cap$ebnf$7", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap$ebnf$8", "symbols": ["R"], "postprocess": id }, { "name": "cap$ebnf$8", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "cap", "symbols": ["C", "cap$ebnf$1", "cap$ebnf$2", "cap$ebnf$3", "cap$ebnf$4", "cap$ebnf$5", "cap$ebnf$6", "cap$ebnf$7", "cap$ebnf$8"], "postprocess": nuller }, { "name": "cSpecs$ebnf$1", "symbols": [] }, { "name": "cSpecs$ebnf$1$subexpression$1", "symbols": ["_", "cSpec", "_"] }, { "name": "cSpecs$ebnf$1", "symbols": ["cSpecs$ebnf$1", "cSpecs$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "cSpecs", "symbols": ["cSpecs$ebnf$1"] }, { "name": "cSpecs", "symbols": ["__"] }, { "name": "cSpec", "symbols": ["tolerance"] }, { "name": "cSpec", "symbols": ["characteristic"] }, { "name": "cSpec", "symbols": ["voltage_rating"] }, { "name": "voltage_rating", "symbols": ["decimal", "_", "voltageRest"], "postprocess": voltage_rating }, { "name": "voltageRest$ebnf$1", "symbols": ["int"], "postprocess": id }, { "name": "voltageRest$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "voltageRest", "symbols": ["V", "voltageRest$ebnf$1"] }, { "name": "characteristic", "symbols": ["characteristic_"], "postprocess": function postprocess(d) {
                return { characteristic: d[0][0] };
            } }, { "name": "characteristic_", "symbols": ["class1"] }, { "name": "characteristic_", "symbols": ["class2"] }, { "name": "class1$macrocall$2", "symbols": ["C", { "literal": "0" }, "G"] }, { "name": "class1$macrocall$3", "symbols": ["N", "P", { "literal": "0" }] }, { "name": "class1$macrocall$1", "symbols": ["class1$macrocall$2"] }, { "name": "class1$macrocall$1", "symbols": ["class1$macrocall$3"] }, { "name": "class1$macrocall$1", "symbols": ["class1$macrocall$2", { "literal": "/" }, "class1$macrocall$3"] }, { "name": "class1$macrocall$1", "symbols": ["class1$macrocall$3", { "literal": "/" }, "class1$macrocall$2"] }, { "name": "class1", "symbols": ["class1$macrocall$1"], "postprocess": function postprocess() {
                return 'C0G';
            } }, { "name": "class1$macrocall$5", "symbols": ["C", "O", "G"] }, { "name": "class1$macrocall$6", "symbols": ["N", "P", "O"] }, { "name": "class1$macrocall$4", "symbols": ["class1$macrocall$5"] }, { "name": "class1$macrocall$4", "symbols": ["class1$macrocall$6"] }, { "name": "class1$macrocall$4", "symbols": ["class1$macrocall$5", { "literal": "/" }, "class1$macrocall$6"] }, { "name": "class1$macrocall$4", "symbols": ["class1$macrocall$6", { "literal": "/" }, "class1$macrocall$5"] }, { "name": "class1", "symbols": ["class1$macrocall$4"], "postprocess": function postprocess() {
                return 'C0G';
            } }, { "name": "class1$macrocall$8$string$1", "symbols": [{ "literal": "1" }, { "literal": "0" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$8", "symbols": ["P", "class1$macrocall$8$string$1"] }, { "name": "class1$macrocall$9", "symbols": ["M", { "literal": "7" }, "G"] }, { "name": "class1$macrocall$7", "symbols": ["class1$macrocall$8"] }, { "name": "class1$macrocall$7", "symbols": ["class1$macrocall$9"] }, { "name": "class1$macrocall$7", "symbols": ["class1$macrocall$8", { "literal": "/" }, "class1$macrocall$9"] }, { "name": "class1$macrocall$7", "symbols": ["class1$macrocall$9", { "literal": "/" }, "class1$macrocall$8"] }, { "name": "class1", "symbols": ["class1$macrocall$7"], "postprocess": function postprocess() {
                return 'M7G';
            } }, { "name": "class1$macrocall$11$string$1", "symbols": [{ "literal": "3" }, { "literal": "3" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$11", "symbols": ["N", "class1$macrocall$11$string$1"] }, { "name": "class1$macrocall$12", "symbols": ["H", { "literal": "2" }, "G"] }, { "name": "class1$macrocall$10", "symbols": ["class1$macrocall$11"] }, { "name": "class1$macrocall$10", "symbols": ["class1$macrocall$12"] }, { "name": "class1$macrocall$10", "symbols": ["class1$macrocall$11", { "literal": "/" }, "class1$macrocall$12"] }, { "name": "class1$macrocall$10", "symbols": ["class1$macrocall$12", { "literal": "/" }, "class1$macrocall$11"] }, { "name": "class1", "symbols": ["class1$macrocall$10"], "postprocess": function postprocess() {
                return 'H2G';
            } }, { "name": "class1$macrocall$14$string$1", "symbols": [{ "literal": "7" }, { "literal": "5" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$14", "symbols": ["N", "class1$macrocall$14$string$1"] }, { "name": "class1$macrocall$15", "symbols": ["L", { "literal": "2" }, "G"] }, { "name": "class1$macrocall$13", "symbols": ["class1$macrocall$14"] }, { "name": "class1$macrocall$13", "symbols": ["class1$macrocall$15"] }, { "name": "class1$macrocall$13", "symbols": ["class1$macrocall$14", { "literal": "/" }, "class1$macrocall$15"] }, { "name": "class1$macrocall$13", "symbols": ["class1$macrocall$15", { "literal": "/" }, "class1$macrocall$14"] }, { "name": "class1", "symbols": ["class1$macrocall$13"], "postprocess": function postprocess() {
                return 'L2G';
            } }, { "name": "class1$macrocall$17$string$1", "symbols": [{ "literal": "1" }, { "literal": "5" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$17", "symbols": ["N", "class1$macrocall$17$string$1"] }, { "name": "class1$macrocall$18", "symbols": ["P", { "literal": "2" }, "H"] }, { "name": "class1$macrocall$16", "symbols": ["class1$macrocall$17"] }, { "name": "class1$macrocall$16", "symbols": ["class1$macrocall$18"] }, { "name": "class1$macrocall$16", "symbols": ["class1$macrocall$17", { "literal": "/" }, "class1$macrocall$18"] }, { "name": "class1$macrocall$16", "symbols": ["class1$macrocall$18", { "literal": "/" }, "class1$macrocall$17"] }, { "name": "class1", "symbols": ["class1$macrocall$16"], "postprocess": function postprocess() {
                return 'P2H';
            } }, { "name": "class1$macrocall$20$string$1", "symbols": [{ "literal": "2" }, { "literal": "2" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$20", "symbols": ["N", "class1$macrocall$20$string$1"] }, { "name": "class1$macrocall$21", "symbols": ["R", { "literal": "2" }, "H"] }, { "name": "class1$macrocall$19", "symbols": ["class1$macrocall$20"] }, { "name": "class1$macrocall$19", "symbols": ["class1$macrocall$21"] }, { "name": "class1$macrocall$19", "symbols": ["class1$macrocall$20", { "literal": "/" }, "class1$macrocall$21"] }, { "name": "class1$macrocall$19", "symbols": ["class1$macrocall$21", { "literal": "/" }, "class1$macrocall$20"] }, { "name": "class1", "symbols": ["class1$macrocall$19"], "postprocess": function postprocess() {
                return 'R2H';
            } }, { "name": "class1$macrocall$23$string$1", "symbols": [{ "literal": "3" }, { "literal": "3" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$23", "symbols": ["N", "class1$macrocall$23$string$1"] }, { "name": "class1$macrocall$24", "symbols": ["S", { "literal": "2" }, "H"] }, { "name": "class1$macrocall$22", "symbols": ["class1$macrocall$23"] }, { "name": "class1$macrocall$22", "symbols": ["class1$macrocall$24"] }, { "name": "class1$macrocall$22", "symbols": ["class1$macrocall$23", { "literal": "/" }, "class1$macrocall$24"] }, { "name": "class1$macrocall$22", "symbols": ["class1$macrocall$24", { "literal": "/" }, "class1$macrocall$23"] }, { "name": "class1", "symbols": ["class1$macrocall$22"], "postprocess": function postprocess() {
                return 'S2H';
            } }, { "name": "class1$macrocall$26$string$1", "symbols": [{ "literal": "4" }, { "literal": "7" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$26", "symbols": ["N", "class1$macrocall$26$string$1"] }, { "name": "class1$macrocall$27", "symbols": ["T", { "literal": "2" }, "H"] }, { "name": "class1$macrocall$25", "symbols": ["class1$macrocall$26"] }, { "name": "class1$macrocall$25", "symbols": ["class1$macrocall$27"] }, { "name": "class1$macrocall$25", "symbols": ["class1$macrocall$26", { "literal": "/" }, "class1$macrocall$27"] }, { "name": "class1$macrocall$25", "symbols": ["class1$macrocall$27", { "literal": "/" }, "class1$macrocall$26"] }, { "name": "class1", "symbols": ["class1$macrocall$25"], "postprocess": function postprocess() {
                return 'T2H';
            } }, { "name": "class1$macrocall$29$string$1", "symbols": [{ "literal": "7" }, { "literal": "5" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$29", "symbols": ["N", "class1$macrocall$29$string$1"] }, { "name": "class1$macrocall$30", "symbols": ["U", { "literal": "2" }, "J"] }, { "name": "class1$macrocall$28", "symbols": ["class1$macrocall$29"] }, { "name": "class1$macrocall$28", "symbols": ["class1$macrocall$30"] }, { "name": "class1$macrocall$28", "symbols": ["class1$macrocall$29", { "literal": "/" }, "class1$macrocall$30"] }, { "name": "class1$macrocall$28", "symbols": ["class1$macrocall$30", { "literal": "/" }, "class1$macrocall$29"] }, { "name": "class1", "symbols": ["class1$macrocall$28"], "postprocess": function postprocess() {
                return 'U2J';
            } }, { "name": "class1$macrocall$32$string$1", "symbols": [{ "literal": "1" }, { "literal": "0" }, { "literal": "0" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$32", "symbols": ["N", "class1$macrocall$32$string$1"] }, { "name": "class1$macrocall$33", "symbols": ["Q", { "literal": "3" }, "K"] }, { "name": "class1$macrocall$31", "symbols": ["class1$macrocall$32"] }, { "name": "class1$macrocall$31", "symbols": ["class1$macrocall$33"] }, { "name": "class1$macrocall$31", "symbols": ["class1$macrocall$32", { "literal": "/" }, "class1$macrocall$33"] }, { "name": "class1$macrocall$31", "symbols": ["class1$macrocall$33", { "literal": "/" }, "class1$macrocall$32"] }, { "name": "class1", "symbols": ["class1$macrocall$31"], "postprocess": function postprocess() {
                return 'Q3K';
            } }, { "name": "class1$macrocall$35$string$1", "symbols": [{ "literal": "1" }, { "literal": "5" }, { "literal": "0" }, { "literal": "0" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "class1$macrocall$35", "symbols": ["N", "class1$macrocall$35$string$1"] }, { "name": "class1$macrocall$36", "symbols": ["P", { "literal": "3" }, "K"] }, { "name": "class1$macrocall$34", "symbols": ["class1$macrocall$35"] }, { "name": "class1$macrocall$34", "symbols": ["class1$macrocall$36"] }, { "name": "class1$macrocall$34", "symbols": ["class1$macrocall$35", { "literal": "/" }, "class1$macrocall$36"] }, { "name": "class1$macrocall$34", "symbols": ["class1$macrocall$36", { "literal": "/" }, "class1$macrocall$35"] }, { "name": "class1", "symbols": ["class1$macrocall$34"], "postprocess": function postprocess() {
                return 'P3K';
            } }, { "name": "class2", "symbols": ["class2_letter", "class2_number", "class2_code"], "postprocess": function postprocess(d) {
                return d.join('').toUpperCase();
            } }, { "name": "class2_letter", "symbols": ["X"] }, { "name": "class2_letter", "symbols": ["Y"] }, { "name": "class2_letter", "symbols": ["Z"] }, { "name": "class2_number", "symbols": [{ "literal": "4" }] }, { "name": "class2_number", "symbols": [{ "literal": "5" }] }, { "name": "class2_number", "symbols": [{ "literal": "6" }] }, { "name": "class2_number", "symbols": [{ "literal": "7" }] }, { "name": "class2_number", "symbols": [{ "literal": "8" }] }, { "name": "class2_number", "symbols": [{ "literal": "9" }] }, { "name": "class2_code", "symbols": ["P"] }, { "name": "class2_code", "symbols": ["R"] }, { "name": "class2_code", "symbols": ["S"] }, { "name": "class2_code", "symbols": ["T"] }, { "name": "class2_code", "symbols": ["U"] }, { "name": "class2_code", "symbols": ["V"] }, { "name": "tolerance$ebnf$1$subexpression$1", "symbols": ["plusMinus", "_"] }, { "name": "tolerance$ebnf$1", "symbols": ["tolerance$ebnf$1$subexpression$1"], "postprocess": id }, { "name": "tolerance$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "tolerance", "symbols": ["tolerance$ebnf$1", "decimal", "_", { "literal": "%" }], "postprocess": function postprocess(d) {
                return { tolerance: d[1] };
            } }, { "name": "plusMinus$string$1", "symbols": [{ "literal": "+" }, { "literal": "/" }, { "literal": "-" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "plusMinus", "symbols": ["plusMinus$string$1"] }, { "name": "plusMinus", "symbols": [{ "literal": "±" }] }, { "name": "plusMinus$string$2", "symbols": [{ "literal": "+" }, { "literal": "-" }], "postprocess": function joiner(d) {
                return d.join('');
            } }, { "name": "plusMinus", "symbols": ["plusMinus$string$2"] }, { "name": "capacitance", "symbols": ["capacitanceNoFarad", "_", "farad"], "postprocess": id }, { "name": "capacitanceNoFarad", "symbols": ["decimal", "_", "capacitanceRest"], "postprocess": capacitance }, { "name": "capacitanceRest$ebnf$1", "symbols": ["int"], "postprocess": id }, { "name": "capacitanceRest$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "capacitanceRest", "symbols": ["cMetricPrefix", "capacitanceRest$ebnf$1"] }, { "name": "farad", "symbols": ["F"], "postprocess": nuller }, { "name": "farad", "symbols": ["F", "A", "R", "A", "D"], "postprocess": nuller }, { "name": "resistor$ebnf$1", "symbols": ["resistor_prefix"], "postprocess": id }, { "name": "resistor$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "resistor$ebnf$2", "symbols": ["packageSize"], "postprocess": id }, { "name": "resistor$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "resistor", "symbols": ["resistor$ebnf$1", "rSpecs", "resistance", "rSpecs", "resistor$ebnf$2", "rSpecs"] }, { "name": "resistor$ebnf$3", "symbols": ["resistor_prefix"], "postprocess": id }, { "name": "resistor$ebnf$3", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "resistor$ebnf$4", "symbols": ["packageSize"], "postprocess": id }, { "name": "resistor$ebnf$4", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "resistor", "symbols": ["resistor$ebnf$3", "rSpecs", "resistor$ebnf$4", "rSpecs", "resistance", "rSpecs"] }, { "name": "resistor$ebnf$5", "symbols": ["packageSize"], "postprocess": id }, { "name": "resistor$ebnf$5", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "resistor", "symbols": ["resistor_prefix", "rSpecs", "resistanceNoR", "rSpecs", "resistor$ebnf$5", "rSpecs"] }, { "name": "resistor$ebnf$6", "symbols": ["packageSize"], "postprocess": id }, { "name": "resistor$ebnf$6", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "resistor", "symbols": ["resistor_prefix", "rSpecs", "resistor$ebnf$6", "rSpecs", "resistanceNoR", "rSpecs"] }, { "name": "resistor_prefix", "symbols": ["R"], "postprocess": nuller }, { "name": "resistor_prefix", "symbols": ["R", "E", "S"], "postprocess": nuller }, { "name": "resistor_prefix", "symbols": ["R", "E", "S", "I", "S", "T", "O", "R"], "postprocess": nuller }, { "name": "rSpecs$ebnf$1", "symbols": [] }, { "name": "rSpecs$ebnf$1$subexpression$1", "symbols": ["_", "rSpec", "_"] }, { "name": "rSpecs$ebnf$1", "symbols": ["rSpecs$ebnf$1", "rSpecs$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "rSpecs", "symbols": ["rSpecs$ebnf$1"] }, { "name": "rSpecs", "symbols": ["__"] }, { "name": "rSpec", "symbols": ["tolerance"] }, { "name": "rSpec", "symbols": ["power_rating"] }, { "name": "power_rating", "symbols": ["power_rating_decimal"] }, { "name": "power_rating", "symbols": ["power_rating_fraction"] }, { "name": "power_rating_fraction", "symbols": ["decimal", { "literal": "/" }, "decimal", "_", "watts"], "postprocess": function postprocess(d) {
                var _d4 = _slicedToArray(d, 3),
                    n1 = _d4[0],
                    _ = _d4[1],
                    n2 = _d4[2];

                return { power_rating: n1 / n2 };
            } }, { "name": "power_rating_decimal", "symbols": ["decimal", "_", "powerMetricPrefix", "_", "watts"], "postprocess": function postprocess(d) {
                var _d5 = _slicedToArray(d, 3),
                    quantity = _d5[0],
                    metricPrefix = _d5[2];

                return { power_rating: parseFloat('' + quantity + metricPrefix) };
            } }, { "name": "watts", "symbols": ["watts_"], "postprocess": nuller }, { "name": "watts_", "symbols": ["W"] }, { "name": "watts_", "symbols": ["W", "A", "T", "T", "S"] }, { "name": "resistance", "symbols": ["decimal", "_", "rest"], "postprocess": resistance }, { "name": "rest$ebnf$1", "symbols": ["int"], "postprocess": id }, { "name": "rest$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "rest$ebnf$2$subexpression$1", "symbols": ["_", "ohm"] }, { "name": "rest$ebnf$2", "symbols": ["rest$ebnf$2$subexpression$1"], "postprocess": id }, { "name": "rest$ebnf$2", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "rest", "symbols": ["rMetricPrefix", "rest$ebnf$1", "rest$ebnf$2"] }, { "name": "rest", "symbols": ["ohm"] }, { "name": "resistanceNoR", "symbols": ["decimal"], "postprocess": function postprocess(d) {
                return { resistance: d[0] };
            } }, { "name": "ohm", "symbols": ["ohm_"], "postprocess": nuller }, { "name": "ohm_$subexpression$1$ebnf$1", "symbols": ["S"], "postprocess": id }, { "name": "ohm_$subexpression$1$ebnf$1", "symbols": [], "postprocess": function postprocess(d) {
                return null;
            } }, { "name": "ohm_$subexpression$1", "symbols": ["ohm_$subexpression$1$ebnf$1"] }, { "name": "ohm_", "symbols": ["O", "H", "M", "ohm_$subexpression$1"] }, { "name": "ohm_", "symbols": [{ "literal": "Ω" }] }, { "name": "ohm_", "symbols": [{ "literal": "Ω" }] }, { "name": "led", "symbols": ["led_letters", "ledSpecs"] }, { "name": "led", "symbols": ["ledSpecs", "led_letters"] }, { "name": "led", "symbols": ["ledSpecs", "led_letters", "ledSpecs"] }, { "name": "led_letters", "symbols": ["L", "E", "D"], "postprocess": nuller }, { "name": "ledSpecs$ebnf$1$subexpression$1", "symbols": ["_", "ledSpec", "_"] }, { "name": "ledSpecs$ebnf$1", "symbols": ["ledSpecs$ebnf$1$subexpression$1"] }, { "name": "ledSpecs$ebnf$1$subexpression$2", "symbols": ["_", "ledSpec", "_"] }, { "name": "ledSpecs$ebnf$1", "symbols": ["ledSpecs$ebnf$1", "ledSpecs$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {
                return d[0].concat([d[1]]);
            } }, { "name": "ledSpecs", "symbols": ["ledSpecs$ebnf$1"] }, { "name": "ledSpec", "symbols": ["packageSize"] }, { "name": "ledSpec", "symbols": ["color"] }, { "name": "color", "symbols": ["color_name"], "postprocess": function postprocess(d) {
                return { color: d[0] };
            } }, { "name": "color_name", "symbols": ["R", "E", "D"], "postprocess": function postprocess() {
                return 'red';
            } }, { "name": "color_name", "symbols": ["G", "R", "E", "E", "N"], "postprocess": function postprocess() {
                return 'green';
            } }, { "name": "color_name", "symbols": ["B", "L", "U", "E"], "postprocess": function postprocess() {
                return 'blue';
            } }, { "name": "color_name", "symbols": ["Y", "E", "L", "L", "O", "W"], "postprocess": function postprocess() {
                return 'yellow';
            } }, { "name": "color_name", "symbols": ["O", "R", "A", "N", "G", "E"], "postprocess": function postprocess() {
                return 'orange';
            } }, { "name": "color_name", "symbols": ["W", "H", "I", "T", "E"], "postprocess": function postprocess() {
                return 'white';
            } }, { "name": "color_name", "symbols": ["A", "M", "B", "E", "R"], "postprocess": function postprocess() {
                return 'amber';
            } }, { "name": "color_name", "symbols": ["C", "Y", "A", "N"], "postprocess": function postprocess() {
                return 'cyan';
            } }, { "name": "color_name", "symbols": ["P", "U", "R", "P", "L", "E"], "postprocess": function postprocess() {
                return 'purple';
            } }, { "name": "color_name", "symbols": ["Y", "E", "L", "L", "O", "W", "_", "G", "R", "E", "E", "N"], "postprocess": function postprocess() {
                return 'yellow green';
            } }, { "name": "powerMetricPrefix", "symbols": ["giga"], "postprocess": function postprocess() {
                return 'e9  ';
            } }, { "name": "powerMetricPrefix", "symbols": ["mega"], "postprocess": function postprocess() {
                return 'e6  ';
            } }, { "name": "powerMetricPrefix", "symbols": ["kilo"], "postprocess": function postprocess() {
                return 'e3  ';
            } }, { "name": "powerMetricPrefix", "symbols": ["milli"], "postprocess": function postprocess() {
                return 'e-3 ';
            } }, { "name": "powerMetricPrefix", "symbols": ["micro"], "postprocess": function postprocess() {
                return 'e-6 ';
            } }, { "name": "powerMetricPrefix", "symbols": ["nano"], "postprocess": function postprocess() {
                return 'e-9 ';
            } }, { "name": "powerMetricPrefix", "symbols": ["pico"], "postprocess": function postprocess() {
                return 'e-12';
            } }, { "name": "powerMetricPrefix", "symbols": ["femto"], "postprocess": function postprocess() {
                return 'e-15';
            } }, { "name": "powerMetricPrefix", "symbols": [], "postprocess": function postprocess() {
                return '';
            } }, { "name": "rMetricPrefix", "symbols": ["giga"], "postprocess": function postprocess() {
                return 'e9  ';
            } }, { "name": "rMetricPrefix", "symbols": ["mega"], "postprocess": function postprocess() {
                return 'e6  ';
            } }, { "name": "rMetricPrefix", "symbols": ["kilo"], "postprocess": function postprocess() {
                return 'e3  ';
            } }, { "name": "rMetricPrefix", "symbols": ["R"], "postprocess": function postprocess() {
                return '';
            } }, { "name": "rMetricPrefix", "symbols": ["milli"], "postprocess": function postprocess() {
                return 'e-3 ';
            } }, { "name": "rMetricPrefix", "symbols": ["micro"], "postprocess": function postprocess() {
                return 'e-6 ';
            } }, { "name": "cMetricPrefix", "symbols": ["milli"], "postprocess": function postprocess() {
                return 'e-3 ';
            } }, { "name": "cMetricPrefix", "symbols": ["micro"], "postprocess": function postprocess() {
                return 'e-6 ';
            } }, { "name": "cMetricPrefix", "symbols": ["nano"], "postprocess": function postprocess() {
                return 'e-9 ';
            } }, { "name": "cMetricPrefix", "symbols": ["pico"], "postprocess": function postprocess() {
                return 'e-12';
            } }, { "name": "cMetricPrefix", "symbols": [], "postprocess": function postprocess() {
                return '';
            } }],
        ParserStart: "main"
    };
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = grammar;
    } else {
        window.grammar = grammar;
    }
})();