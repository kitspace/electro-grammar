// Generated automatically by nearley, version 2.11.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    /*!
     * modified from arr-flatten <https://github.com/jonschlinkert/arr-flatten>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */

    function _flatten(arr, res) {
        var i = 0, cur
        var len = arr.length
        for (; i < len; i++) {
            cur = arr[i]
            Array.isArray(cur) ? _flatten(cur, res) : res.push(cur)
        }
        return res
    }

    function flatten (arr) {
        return _flatten(arr, [])
    }

    function filter(d) {
        return d.filter(function(t) {
            return t != null
        })
    }

    function nuller() {
        return  null
    }


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
    '6332': '2512',
  }


    function type(t) {
        return function(d) {
            return  [{type: t}].concat(d)
        }
    }


  function capacitance(d) {
    var quantity = d[0]
    var metricPrefix = d[2]
    var farad = d[4]

    return {capacitance: parseFloat(quantity + (metricPrefix || ''))}
  }


  function resistance(d, i, reject) {
    var integral = d[0]
    var metricPrefix = d[2][0]
    var fractional = d[2][1]
    var ohm = d[2][2]
    if (fractional) {
      if (/\./.test(integral.toString())) {
        return reject
      }
      var quantity = integral + '.' + fractional
    } else {
      var quantity = integral
    }
    return {resistance: parseFloat(quantity + (metricPrefix || ''))}
  }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": nuller},
    {"name": "__$ebnf$1", "symbols": [/[\s]/]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": nuller},
    {"name": "A", "symbols": [{"literal":"A"}]},
    {"name": "A", "symbols": [{"literal":"a"}]},
    {"name": "B", "symbols": [{"literal":"B"}]},
    {"name": "B", "symbols": [{"literal":"b"}]},
    {"name": "C", "symbols": [{"literal":"C"}]},
    {"name": "C", "symbols": [{"literal":"c"}]},
    {"name": "D", "symbols": [{"literal":"D"}]},
    {"name": "D", "symbols": [{"literal":"d"}]},
    {"name": "E", "symbols": [{"literal":"E"}]},
    {"name": "E", "symbols": [{"literal":"e"}]},
    {"name": "F", "symbols": [{"literal":"F"}]},
    {"name": "F", "symbols": [{"literal":"f"}]},
    {"name": "G", "symbols": [{"literal":"G"}]},
    {"name": "G", "symbols": [{"literal":"g"}]},
    {"name": "H", "symbols": [{"literal":"H"}]},
    {"name": "H", "symbols": [{"literal":"h"}]},
    {"name": "I", "symbols": [{"literal":"I"}]},
    {"name": "I", "symbols": [{"literal":"i"}]},
    {"name": "J", "symbols": [{"literal":"J"}]},
    {"name": "J", "symbols": [{"literal":"j"}]},
    {"name": "K", "symbols": [{"literal":"K"}]},
    {"name": "K", "symbols": [{"literal":"k"}]},
    {"name": "L", "symbols": [{"literal":"L"}]},
    {"name": "L", "symbols": [{"literal":"l"}]},
    {"name": "M", "symbols": [{"literal":"M"}]},
    {"name": "M", "symbols": [{"literal":"m"}]},
    {"name": "N", "symbols": [{"literal":"N"}]},
    {"name": "N", "symbols": [{"literal":"n"}]},
    {"name": "O", "symbols": [{"literal":"O"}]},
    {"name": "O", "symbols": [{"literal":"o"}]},
    {"name": "P", "symbols": [{"literal":"P"}]},
    {"name": "P", "symbols": [{"literal":"p"}]},
    {"name": "Q", "symbols": [{"literal":"Q"}]},
    {"name": "Q", "symbols": [{"literal":"q"}]},
    {"name": "R", "symbols": [{"literal":"R"}]},
    {"name": "R", "symbols": [{"literal":"r"}]},
    {"name": "S", "symbols": [{"literal":"S"}]},
    {"name": "S", "symbols": [{"literal":"s"}]},
    {"name": "T", "symbols": [{"literal":"T"}]},
    {"name": "T", "symbols": [{"literal":"t"}]},
    {"name": "U", "symbols": [{"literal":"U"}]},
    {"name": "U", "symbols": [{"literal":"u"}]},
    {"name": "V", "symbols": [{"literal":"V"}]},
    {"name": "V", "symbols": [{"literal":"v"}]},
    {"name": "W", "symbols": [{"literal":"W"}]},
    {"name": "W", "symbols": [{"literal":"w"}]},
    {"name": "X", "symbols": [{"literal":"X"}]},
    {"name": "X", "symbols": [{"literal":"x"}]},
    {"name": "Y", "symbols": [{"literal":"Y"}]},
    {"name": "Y", "symbols": [{"literal":"y"}]},
    {"name": "Z", "symbols": [{"literal":"Z"}]},
    {"name": "Z", "symbols": [{"literal":"z"}]},
    {"name": "exa", "symbols": [{"literal":"E"}]},
    {"name": "exa", "symbols": ["E", "X", "A"]},
    {"name": "peta", "symbols": [{"literal":"P"}]},
    {"name": "peta", "symbols": ["P", "E", "T", "A"]},
    {"name": "tera", "symbols": [{"literal":"T"}]},
    {"name": "tera", "symbols": ["T", "E", "R", "A"]},
    {"name": "giga", "symbols": [{"literal":"G"}]},
    {"name": "giga", "symbols": ["G", "I", "G", "A"]},
    {"name": "mega", "symbols": [{"literal":"M"}]},
    {"name": "mega", "symbols": ["M", "E", "G", "A"]},
    {"name": "kilo", "symbols": [{"literal":"k"}]},
    {"name": "kilo", "symbols": ["K", "I", "L", "O"]},
    {"name": "hecto", "symbols": [{"literal":"h"}]},
    {"name": "hecto", "symbols": ["H", "E", "C", "T", "O"]},
    {"name": "deci", "symbols": [{"literal":"d"}]},
    {"name": "deci", "symbols": ["D", "E", "C", "I"]},
    {"name": "centi", "symbols": [{"literal":"c"}]},
    {"name": "centi", "symbols": ["C", "E", "N", "T", "I"]},
    {"name": "milli", "symbols": [{"literal":"m"}]},
    {"name": "milli", "symbols": ["M", "I", "L", "L", "I"]},
    {"name": "micro", "symbols": [{"literal":"u"}]},
    {"name": "micro", "symbols": [/[\u03BC]/]},
    {"name": "micro", "symbols": [/[\u00B5]/]},
    {"name": "micro", "symbols": [/[\uD835]/, /[\uDECD]/]},
    {"name": "micro", "symbols": [/[\uD835]/, /[\uDF07]/]},
    {"name": "micro", "symbols": [/[\uD835]/, /[\uDF41]/]},
    {"name": "micro", "symbols": [/[\uD835]/, /[\uDF7B]/]},
    {"name": "micro", "symbols": [/[\uD835]/, /[\uDFB5]/]},
    {"name": "micro", "symbols": ["M", "I", "C", "R", "O"]},
    {"name": "nano", "symbols": [{"literal":"n"}]},
    {"name": "nano", "symbols": ["N", "A", "N", "O"]},
    {"name": "pico", "symbols": [{"literal":"p"}]},
    {"name": "pico", "symbols": ["P", "I", "C", "O"]},
    {"name": "femto", "symbols": [{"literal":"f"}]},
    {"name": "femto", "symbols": ["F", "E", "M", "T", "O"]},
    {"name": "atto", "symbols": [{"literal":"a"}]},
    {"name": "atto", "symbols": ["A", "T", "T", "O"]},
    {"name": "packageSize", "symbols": ["_packageSize"], "postprocess": 
        function(d) {
          return {size: filter(flatten(d)).join('')}
        }
        },
    {"name": "_packageSize", "symbols": ["_imperialSize"]},
    {"name": "_packageSize", "symbols": ["_metricSize"]},
    {"name": "_imperialSize$string$1", "symbols": [{"literal":"0"}, {"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_imperialSize", "symbols": ["_imperialSize$string$1"]},
    {"name": "_imperialSize$string$2", "symbols": [{"literal":"0"}, {"literal":"2"}, {"literal":"0"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_imperialSize", "symbols": ["_imperialSize$string$2"]},
    {"name": "_imperialSize$string$3", "symbols": [{"literal":"0"}, {"literal":"4"}, {"literal":"0"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_imperialSize", "symbols": ["_imperialSize$string$3"]},
    {"name": "_imperialSize$string$4", "symbols": [{"literal":"0"}, {"literal":"6"}, {"literal":"0"}, {"literal":"3"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_imperialSize", "symbols": ["_imperialSize$string$4"]},
    {"name": "_imperialSize$string$5", "symbols": [{"literal":"0"}, {"literal":"8"}, {"literal":"0"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_imperialSize", "symbols": ["_imperialSize$string$5"]},
    {"name": "_imperialSize$string$6", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":"8"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_imperialSize", "symbols": ["_imperialSize$string$6"]},
    {"name": "_imperialSize$string$7", "symbols": [{"literal":"1"}, {"literal":"2"}, {"literal":"0"}, {"literal":"6"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_imperialSize", "symbols": ["_imperialSize$string$7"]},
    {"name": "_imperialSize$string$8", "symbols": [{"literal":"1"}, {"literal":"2"}, {"literal":"1"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_imperialSize", "symbols": ["_imperialSize$string$8"]},
    {"name": "_imperialSize$string$9", "symbols": [{"literal":"1"}, {"literal":"8"}, {"literal":"0"}, {"literal":"6"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_imperialSize", "symbols": ["_imperialSize$string$9"]},
    {"name": "_imperialSize$string$10", "symbols": [{"literal":"2"}, {"literal":"0"}, {"literal":"1"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_imperialSize", "symbols": ["_imperialSize$string$10"]},
    {"name": "_imperialSize$string$11", "symbols": [{"literal":"2"}, {"literal":"5"}, {"literal":"1"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "_imperialSize", "symbols": ["_imperialSize$string$11"]},
    {"name": "_metricSize$ebnf$1", "symbols": []},
    {"name": "_metricSize$ebnf$1", "symbols": ["_metricSize$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_metricSize", "symbols": ["__metricSize", "_metricSize$ebnf$1", "M", "E", "T", "R", "I", "C"], "postprocess": function(d) { return toImperial[d[0]] }},
    {"name": "_metricSize$ebnf$2", "symbols": []},
    {"name": "_metricSize$ebnf$2", "symbols": ["_metricSize$ebnf$2", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_metricSize", "symbols": ["M", "E", "T", "R", "I", "C", "_metricSize$ebnf$2", "__metricSize"], "postprocess": function(d) { return toImperial[d[7]] }},
    {"name": "_metricSize", "symbols": ["unambigiousMetricSize"], "postprocess": function(d) { return toImperial[d[0]] }},
    {"name": "unambigiousMetricSize$string$1", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$1"]},
    {"name": "unambigiousMetricSize$string$2", "symbols": [{"literal":"1"}, {"literal":"6"}, {"literal":"0"}, {"literal":"8"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$2"]},
    {"name": "unambigiousMetricSize$string$3", "symbols": [{"literal":"2"}, {"literal":"0"}, {"literal":"1"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$3"]},
    {"name": "unambigiousMetricSize$string$4", "symbols": [{"literal":"2"}, {"literal":"5"}, {"literal":"2"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$4"]},
    {"name": "unambigiousMetricSize$string$5", "symbols": [{"literal":"3"}, {"literal":"2"}, {"literal":"1"}, {"literal":"6"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$5"]},
    {"name": "unambigiousMetricSize$string$6", "symbols": [{"literal":"3"}, {"literal":"2"}, {"literal":"2"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$6"]},
    {"name": "unambigiousMetricSize$string$7", "symbols": [{"literal":"4"}, {"literal":"5"}, {"literal":"1"}, {"literal":"6"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$7"]},
    {"name": "unambigiousMetricSize$string$8", "symbols": [{"literal":"5"}, {"literal":"0"}, {"literal":"2"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$8"]},
    {"name": "unambigiousMetricSize$string$9", "symbols": [{"literal":"6"}, {"literal":"3"}, {"literal":"3"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "unambigiousMetricSize", "symbols": ["unambigiousMetricSize$string$9"]},
    {"name": "__metricSize", "symbols": ["unambigiousMetricSize"]},
    {"name": "__metricSize$string$1", "symbols": [{"literal":"0"}, {"literal":"4"}, {"literal":"0"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "__metricSize", "symbols": ["__metricSize$string$1"]},
    {"name": "__metricSize$string$2", "symbols": [{"literal":"0"}, {"literal":"6"}, {"literal":"0"}, {"literal":"3"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "__metricSize", "symbols": ["__metricSize$string$2"]},
    {"name": "main", "symbols": ["component"], "postprocess": function(d) { return filter(flatten(d)) }},
    {"name": "component", "symbols": ["capacitor"], "postprocess": type('capacitor')},
    {"name": "component", "symbols": ["resistor"], "postprocess": type('resistor')},
    {"name": "component", "symbols": ["led"], "postprocess": type('led')},
    {"name": "capacitor", "symbols": ["cSpecs", "capacitance", "cSpecs"]},
    {"name": "capacitor", "symbols": ["cSpecs", "capacitance", "cSpecs"]},
    {"name": "capacitor$subexpression$1", "symbols": ["capacitanceNoFarad"]},
    {"name": "capacitor$subexpression$1", "symbols": ["capacitance"]},
    {"name": "capacitor", "symbols": ["cap", "cSpecs", "capacitor$subexpression$1", "cSpecs"]},
    {"name": "capacitor$subexpression$2", "symbols": ["capacitanceNoFarad"]},
    {"name": "capacitor$subexpression$2", "symbols": ["capacitance"]},
    {"name": "capacitor", "symbols": ["cap", "cSpecs", "capacitor$subexpression$2", "cSpecs"]},
    {"name": "cap$ebnf$1", "symbols": ["A"], "postprocess": id},
    {"name": "cap$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "cap$ebnf$2", "symbols": ["P"], "postprocess": id},
    {"name": "cap$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "cap$ebnf$3", "symbols": ["A"], "postprocess": id},
    {"name": "cap$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "cap$ebnf$4", "symbols": ["C"], "postprocess": id},
    {"name": "cap$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "cap$ebnf$5", "symbols": ["I"], "postprocess": id},
    {"name": "cap$ebnf$5", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "cap$ebnf$6", "symbols": ["T"], "postprocess": id},
    {"name": "cap$ebnf$6", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "cap$ebnf$7", "symbols": ["O"], "postprocess": id},
    {"name": "cap$ebnf$7", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "cap$ebnf$8", "symbols": ["R"], "postprocess": id},
    {"name": "cap$ebnf$8", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "cap", "symbols": ["C", "cap$ebnf$1", "cap$ebnf$2", "cap$ebnf$3", "cap$ebnf$4", "cap$ebnf$5", "cap$ebnf$6", "cap$ebnf$7", "cap$ebnf$8"], "postprocess": nuller},
    {"name": "cSpecs$ebnf$1", "symbols": []},
    {"name": "cSpecs$ebnf$1$subexpression$1", "symbols": ["_", "cSpec", "_"]},
    {"name": "cSpecs$ebnf$1", "symbols": ["cSpecs$ebnf$1", "cSpecs$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "cSpecs", "symbols": ["cSpecs$ebnf$1"]},
    {"name": "cSpecs", "symbols": ["__"]},
    {"name": "cSpec", "symbols": ["tolerance"]},
    {"name": "cSpec", "symbols": ["characteristic"]},
    {"name": "cSpec", "symbols": ["voltage_rating"]},
    {"name": "cSpec", "symbols": ["packageSize"]},
    {"name": "voltage_rating", "symbols": ["decimal", "_", "V"], "postprocess": function(d) { return {voltage_rating: d[0]} }},
    {"name": "characteristic", "symbols": ["characteristic_"], "postprocess": function(d) { return {characteristic: d[0][0]} }},
    {"name": "characteristic_", "symbols": ["class1"]},
    {"name": "characteristic_", "symbols": ["class2"]},
    {"name": "class1", "symbols": ["class1_ceramic_name"], "postprocess": id},
    {"name": "class1", "symbols": ["class1_eia_code"], "postprocess": id},
    {"name": "class1", "symbols": ["class1_ceramic_name", "_", {"literal":"/"}, "_", "class1_eia_code"], "postprocess": id},
    {"name": "class1", "symbols": ["class1_eia_code", "_", {"literal":"/"}, "_", "class1_ceramic_name"], "postprocess": id},
    {"name": "class1_ceramic_name", "symbols": ["C", {"literal":"0"}, "G"], "postprocess": function() { return 'C0G' }},
    {"name": "class1_ceramic_name$string$1", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "class1_ceramic_name", "symbols": ["P", "class1_ceramic_name$string$1"], "postprocess": function() { return 'M7G' }},
    {"name": "class1_ceramic_name$string$2", "symbols": [{"literal":"3"}, {"literal":"3"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$2"], "postprocess": function() { return 'H2G' }},
    {"name": "class1_ceramic_name$string$3", "symbols": [{"literal":"7"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$3"], "postprocess": function() { return 'L2G' }},
    {"name": "class1_ceramic_name$string$4", "symbols": [{"literal":"1"}, {"literal":"5"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$4"], "postprocess": function() { return 'P2H' }},
    {"name": "class1_ceramic_name$string$5", "symbols": [{"literal":"2"}, {"literal":"2"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$5"], "postprocess": function() { return 'R2H' }},
    {"name": "class1_ceramic_name$string$6", "symbols": [{"literal":"3"}, {"literal":"3"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$6"], "postprocess": function() { return 'S2H' }},
    {"name": "class1_ceramic_name$string$7", "symbols": [{"literal":"4"}, {"literal":"7"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$7"], "postprocess": function() { return 'T2H' }},
    {"name": "class1_ceramic_name$string$8", "symbols": [{"literal":"7"}, {"literal":"5"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$8"], "postprocess": function() { return 'U2J' }},
    {"name": "class1_ceramic_name$string$9", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$9"], "postprocess": function() { return 'Q3K' }},
    {"name": "class1_ceramic_name$string$10", "symbols": [{"literal":"1"}, {"literal":"5"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "class1_ceramic_name", "symbols": ["N", "class1_ceramic_name$string$10"], "postprocess": function() { return 'P3K' }},
    {"name": "class1_eia_code", "symbols": ["N", "P", {"literal":"0"}], "postprocess": function() { return 'C0G' }},
    {"name": "class1_eia_code", "symbols": ["M", {"literal":"7"}, "G"], "postprocess": function() { return 'M7G' }},
    {"name": "class1_eia_code", "symbols": ["H", {"literal":"2"}, "G"], "postprocess": function() { return 'H2G' }},
    {"name": "class1_eia_code", "symbols": ["L", {"literal":"2"}, "G"], "postprocess": function() { return 'L2G' }},
    {"name": "class1_eia_code", "symbols": ["P", {"literal":"2"}, "H"], "postprocess": function() { return 'P2H' }},
    {"name": "class1_eia_code", "symbols": ["R", {"literal":"2"}, "H"], "postprocess": function() { return 'R2H' }},
    {"name": "class1_eia_code", "symbols": ["S", {"literal":"2"}, "H"], "postprocess": function() { return 'S2H' }},
    {"name": "class1_eia_code", "symbols": ["T", {"literal":"2"}, "H"], "postprocess": function() { return 'T2H' }},
    {"name": "class1_eia_code", "symbols": ["U", {"literal":"2"}, "J"], "postprocess": function() { return 'U2J' }},
    {"name": "class1_eia_code", "symbols": ["Q", {"literal":"3"}, "K"], "postprocess": function() { return 'Q3K' }},
    {"name": "class1_eia_code", "symbols": ["P", {"literal":"3"}, "K"], "postprocess": function() { return 'P3K' }},
    {"name": "class2", "symbols": ["class2_letter", "class2_number", "class2_code"], "postprocess": function(d) { return d.join('').toUpperCase() }},
    {"name": "class2_letter", "symbols": ["X"]},
    {"name": "class2_letter", "symbols": ["Y"]},
    {"name": "class2_letter", "symbols": ["Z"]},
    {"name": "class2_number", "symbols": [{"literal":"4"}]},
    {"name": "class2_number", "symbols": [{"literal":"5"}]},
    {"name": "class2_number", "symbols": [{"literal":"6"}]},
    {"name": "class2_number", "symbols": [{"literal":"7"}]},
    {"name": "class2_number", "symbols": [{"literal":"8"}]},
    {"name": "class2_number", "symbols": [{"literal":"9"}]},
    {"name": "class2_code", "symbols": ["P"]},
    {"name": "class2_code", "symbols": ["R"]},
    {"name": "class2_code", "symbols": ["S"]},
    {"name": "class2_code", "symbols": ["T"]},
    {"name": "class2_code", "symbols": ["U"]},
    {"name": "class2_code", "symbols": ["V"]},
    {"name": "tolerance$ebnf$1$subexpression$1", "symbols": ["plusMinus", "_"]},
    {"name": "tolerance$ebnf$1", "symbols": ["tolerance$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "tolerance$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "tolerance", "symbols": ["tolerance$ebnf$1", "decimal", "_", {"literal":"%"}], "postprocess": function(d) { return {tolerance: d[1]} }},
    {"name": "plusMinus$string$1", "symbols": [{"literal":"+"}, {"literal":"/"}, {"literal":"-"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "plusMinus", "symbols": ["plusMinus$string$1"]},
    {"name": "plusMinus", "symbols": [{"literal":"±"}]},
    {"name": "plusMinus$string$2", "symbols": [{"literal":"+"}, {"literal":"-"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "plusMinus", "symbols": ["plusMinus$string$2"]},
    {"name": "capacitance$ebnf$1", "symbols": ["cMetricPrefix"], "postprocess": id},
    {"name": "capacitance$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "capacitance", "symbols": ["decimal", "_", "capacitance$ebnf$1", "_", "farad"], "postprocess": capacitance},
    {"name": "capacitanceNoFarad$ebnf$1", "symbols": ["cMetricPrefix"], "postprocess": id},
    {"name": "capacitanceNoFarad$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "capacitanceNoFarad", "symbols": ["decimal", "_", "capacitanceNoFarad$ebnf$1"], "postprocess": capacitance},
    {"name": "farad", "symbols": ["F"], "postprocess": nuller},
    {"name": "farad", "symbols": ["F", "A", "R", "A", "D"], "postprocess": nuller},
    {"name": "resistor", "symbols": ["rSpecs", "resistance", "rSpecs"]},
    {"name": "rSpecs$ebnf$1", "symbols": []},
    {"name": "rSpecs$ebnf$1$subexpression$1", "symbols": ["_", "rSpec", "_"]},
    {"name": "rSpecs$ebnf$1", "symbols": ["rSpecs$ebnf$1", "rSpecs$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "rSpecs", "symbols": ["rSpecs$ebnf$1"]},
    {"name": "rSpecs", "symbols": ["__"]},
    {"name": "rSpec", "symbols": ["tolerance"]},
    {"name": "rSpec", "symbols": ["power_rating"]},
    {"name": "rSpec", "symbols": ["packageSize"]},
    {"name": "power_rating$ebnf$1", "symbols": ["powerMetricPrefix"], "postprocess": id},
    {"name": "power_rating$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "power_rating", "symbols": ["decimal", "_", "power_rating$ebnf$1", "_", "watts"], "postprocess": 
        function(d) {
            var quantity = d[0]
            var metricPrefix = d[2]
            return {power_rating: parseFloat(quantity + (metricPrefix || ''))}
        }
        },
    {"name": "watts", "symbols": ["watts_"], "postprocess": nuller},
    {"name": "watts_", "symbols": ["W"]},
    {"name": "watts_", "symbols": ["W", "A", "T", "T", "S"]},
    {"name": "resistance", "symbols": ["decimal", "_", "rest"], "postprocess": resistance},
    {"name": "rest$ebnf$1", "symbols": ["int"], "postprocess": id},
    {"name": "rest$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rest$ebnf$2$subexpression$1", "symbols": ["_", "ohm"]},
    {"name": "rest$ebnf$2", "symbols": ["rest$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "rest$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rest", "symbols": ["rMetricPrefix", "rest$ebnf$1", "rest$ebnf$2"]},
    {"name": "rest", "symbols": ["ohm"]},
    {"name": "ohm", "symbols": ["ohm_"], "postprocess": nuller},
    {"name": "ohm_", "symbols": ["O", "H", "M"]},
    {"name": "ohm_", "symbols": [{"literal":"Ω"}]},
    {"name": "ohm_", "symbols": [{"literal":"Ω"}]},
    {"name": "led", "symbols": ["led_letters", "ledSpecs"]},
    {"name": "led", "symbols": ["ledSpecs", "led_letters"]},
    {"name": "led", "symbols": ["ledSpecs", "led_letters", "ledSpecs"]},
    {"name": "led_letters", "symbols": ["L", "E", "D"], "postprocess": nuller},
    {"name": "ledSpecs$ebnf$1$subexpression$1", "symbols": ["_", "ledSpec", "_"]},
    {"name": "ledSpecs$ebnf$1", "symbols": ["ledSpecs$ebnf$1$subexpression$1"]},
    {"name": "ledSpecs$ebnf$1$subexpression$2", "symbols": ["_", "ledSpec", "_"]},
    {"name": "ledSpecs$ebnf$1", "symbols": ["ledSpecs$ebnf$1", "ledSpecs$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ledSpecs", "symbols": ["ledSpecs$ebnf$1"]},
    {"name": "ledSpec", "symbols": ["packageSize"]},
    {"name": "ledSpec", "symbols": ["color"]},
    {"name": "color", "symbols": ["color_name"], "postprocess": function(d) { return {color: d[0]} }},
    {"name": "color_name", "symbols": ["R", "E", "D"], "postprocess": function() { return 'red' }},
    {"name": "color_name", "symbols": ["G", "R", "E", "E", "N"], "postprocess": function() { return 'green' }},
    {"name": "color_name", "symbols": ["B", "L", "U", "E"], "postprocess": function() { return 'blue' }},
    {"name": "color_name", "symbols": ["Y", "E", "L", "L", "O", "W"], "postprocess": function() { return 'yellow' }},
    {"name": "color_name", "symbols": ["O", "R", "A", "N", "G", "E"], "postprocess": function() { return 'orange' }},
    {"name": "color_name", "symbols": ["W", "H", "I", "T", "E"], "postprocess": function() { return 'white' }},
    {"name": "color_name", "symbols": ["A", "M", "B", "E", "R"], "postprocess": function() { return 'amber' }},
    {"name": "color_name", "symbols": ["C", "Y", "A", "N"], "postprocess": function() { return 'cyan' }},
    {"name": "color_name", "symbols": ["P", "U", "R", "P", "L", "E"], "postprocess": function() { return 'purple' }},
    {"name": "color_name", "symbols": ["Y", "E", "L", "L", "O", "W", "_", "G", "R", "E", "E", "N"], "postprocess": function() { return 'yellow green' }},
    {"name": "powerMetricPrefix", "symbols": ["giga"], "postprocess": function() { return 'e9  ' }},
    {"name": "powerMetricPrefix", "symbols": ["mega"], "postprocess": function() { return 'e6  ' }},
    {"name": "powerMetricPrefix", "symbols": ["kilo"], "postprocess": function() { return 'e3  ' }},
    {"name": "powerMetricPrefix", "symbols": ["milli"], "postprocess": function() { return 'e-3 ' }},
    {"name": "powerMetricPrefix", "symbols": ["micro"], "postprocess": function() { return 'e-6 ' }},
    {"name": "powerMetricPrefix", "symbols": ["nano"], "postprocess": function() { return 'e-9 ' }},
    {"name": "powerMetricPrefix", "symbols": ["pico"], "postprocess": function() { return 'e-12' }},
    {"name": "powerMetricPrefix", "symbols": ["femto"], "postprocess": function() { return 'e-15' }},
    {"name": "rMetricPrefix", "symbols": ["giga"], "postprocess": function() { return 'e9  ' }},
    {"name": "rMetricPrefix", "symbols": ["mega"], "postprocess": function() { return 'e6  ' }},
    {"name": "rMetricPrefix", "symbols": ["kilo"], "postprocess": function() { return 'e3  ' }},
    {"name": "rMetricPrefix", "symbols": ["R"], "postprocess": function() { return ''     }},
    {"name": "cMetricPrefix", "symbols": ["micro"], "postprocess": function() { return 'e-6 ' }},
    {"name": "cMetricPrefix", "symbols": ["nano"], "postprocess": function() { return 'e-9 ' }},
    {"name": "cMetricPrefix", "symbols": ["pico"], "postprocess": function() { return 'e-12' }}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
