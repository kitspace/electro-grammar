// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

  const ramda = require('ramda')

  const filter = d => {
    return d.filter((token) => {
      return token !== null;
    });
  };

var grammar = {
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
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null }},
    {"name": "__", "symbols": [/[\s]/], "postprocess": function(d) {return null }},
    {"name": "main", "symbols": ["capacitor"], "postprocess": d => filter(ramda.flatten(d))},
    {"name": "capacitor", "symbols": ["specs", "capacitance", "specs", "package_size", "specs"]},
    {"name": "capacitor", "symbols": ["specs", "package_size", "specs", "capacitance", "specs"]},
    {"name": "specs$ebnf$1", "symbols": []},
    {"name": "specs$ebnf$1$subexpression$1", "symbols": ["_", "spec", "_"]},
    {"name": "specs$ebnf$1", "symbols": ["specs$ebnf$1", "specs$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "specs", "symbols": ["specs$ebnf$1"]},
    {"name": "specs", "symbols": ["__"]},
    {"name": "spec$ebnf$1", "symbols": ["plus_minus"], "postprocess": id},
    {"name": "spec$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "spec", "symbols": ["spec$ebnf$1", "_", "decimal", "_", {"literal":"%"}], "postprocess": d => d[2] + '%'},
    {"name": "plus_minus$string$1", "symbols": [{"literal":"+"}, {"literal":"/"}, {"literal":"-"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "plus_minus", "symbols": ["plus_minus$string$1"]},
    {"name": "plus_minus", "symbols": [{"literal":"±"}]},
    {"name": "package_size$string$1", "symbols": [{"literal":"0"}, {"literal":"4"}, {"literal":"0"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "package_size", "symbols": ["package_size$string$1"]},
    {"name": "package_size$string$2", "symbols": [{"literal":"0"}, {"literal":"6"}, {"literal":"0"}, {"literal":"3"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "package_size", "symbols": ["package_size$string$2"]},
    {"name": "package_size$string$3", "symbols": [{"literal":"0"}, {"literal":"8"}, {"literal":"0"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "package_size", "symbols": ["package_size$string$3"]},
    {"name": "package_size$string$4", "symbols": [{"literal":"1"}, {"literal":"2"}, {"literal":"0"}, {"literal":"6"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "package_size", "symbols": ["package_size$string$4"]},
    {"name": "capacitance", "symbols": ["decimal", "_", "unit", "_", "farad"], "postprocess": d => filter(d).join('')},
    {"name": "unit", "symbols": ["micro"], "postprocess": () => 'u'},
    {"name": "unit", "symbols": ["pico"], "postprocess": () => 'p'},
    {"name": "unit", "symbols": ["nano"], "postprocess": () => 'n'},
    {"name": "unit", "symbols": []},
    {"name": "farad", "symbols": [{"literal":"F"}], "postprocess": () => "F"},
    {"name": "farad", "symbols": ["F", "A", "R", "A", "D"], "postprocess": () => "F"},
    {"name": "micro", "symbols": [{"literal":"u"}]},
    {"name": "micro", "symbols": [{"literal":"μ"}]},
    {"name": "micro$string$1", "symbols": [{"literal":"�"}, {"literal":"�"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "micro", "symbols": ["micro$string$1"]},
    {"name": "micro$string$2", "symbols": [{"literal":"�"}, {"literal":"�"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "micro", "symbols": ["micro$string$2"]},
    {"name": "micro$string$3", "symbols": [{"literal":"�"}, {"literal":"�"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "micro", "symbols": ["micro$string$3"]},
    {"name": "micro$string$4", "symbols": [{"literal":"�"}, {"literal":"�"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "micro", "symbols": ["micro$string$4"]},
    {"name": "micro", "symbols": ["M", "I", "C", "R", "O"]},
    {"name": "pico", "symbols": [{"literal":"p"}]},
    {"name": "nano", "symbols": [{"literal":"n"}]}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
