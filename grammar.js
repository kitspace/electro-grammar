// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "e", "symbols": ["N", "MS", "N", "MS", "N"], "postprocess": d => d.join('')},
    {"name": "MS", "symbols": [{"literal":"+"}], "postprocess": d => d[0]},
    {"name": "MS", "symbols": [{"literal":"-"}], "postprocess": d => d[0]},
    {"name": "N$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "N$ebnf$1", "symbols": ["N$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "N", "symbols": ["N$ebnf$1"], "postprocess": d => d[0].join('')}
]
  , ParserStart: "e"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
