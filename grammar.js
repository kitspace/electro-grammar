// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "AS", "symbols": ["AS", {"literal":"+"}, "MD"], "postprocess": d => d[0] + d[2]},
    {"name": "AS", "symbols": ["AS", {"literal":"-"}, "MD"], "postprocess": d => d[0] - d[2]},
    {"name": "AS", "symbols": ["MD"], "postprocess": d => d[0]},
    {"name": "P", "symbols": [{"literal":"("}, "AS", {"literal":")"}], "postprocess": d => d[1]},
    {"name": "P", "symbols": ["N"], "postprocess": d => d[0]},
    {"name": "MD", "symbols": ["MD", {"literal":"*"}, "P"], "postprocess": d => d[0] * d[2]},
    {"name": "MD", "symbols": ["MD", {"literal":"/"}, "P"], "postprocess": d => d[0] / d[2]},
    {"name": "MD", "symbols": ["P"], "postprocess": d => d[0]},
    {"name": "N$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "N$ebnf$1", "symbols": ["N$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "N", "symbols": ["N$ebnf$1"], "postprocess": d => parseInt(d[0].join(''), 10)}
]
  , ParserStart: "AS"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
