// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "e", "symbols": ["N", "MS", "N", "MS", "N"], "postprocess": d => d.join('')},
    {"name": "MS", "symbols": [{"literal":"+"}], "postprocess": d => d[0]},
    {"name": "MS", "symbols": [{"literal":"-"}], "postprocess": d => d[0]},
    {"name": "N", "symbols": [{"literal":"1"}], "postprocess": d => d[0]},
    {"name": "N", "symbols": [{"literal":"2"}], "postprocess": d => d[0]},
    {"name": "N", "symbols": [{"literal":"3"}], "postprocess": d => d[0]},
    {"name": "N", "symbols": [{"literal":"4"}], "postprocess": d => d[0]},
    {"name": "N", "symbols": [{"literal":"5"}], "postprocess": d => d[0]},
    {"name": "N", "symbols": [{"literal":"6"}], "postprocess": d => d[0]},
    {"name": "N", "symbols": [{"literal":"7"}], "postprocess": d => d[0]},
    {"name": "N", "symbols": [{"literal":"8"}], "postprocess": d => d[0]},
    {"name": "N", "symbols": [{"literal":"9"}], "postprocess": d => d[0]},
    {"name": "N", "symbols": [{"literal":"0"}], "postprocess": d => d[0]},
    {"name": "N", "symbols": [{"literal":"1"}, "N"], "postprocess": d => d[0] + d[1]},
    {"name": "N", "symbols": [{"literal":"2"}, "N"], "postprocess": d => d[0] + d[1]},
    {"name": "N", "symbols": [{"literal":"3"}, "N"], "postprocess": d => d[0] + d[1]},
    {"name": "N", "symbols": [{"literal":"4"}, "N"], "postprocess": d => d[0] + d[1]},
    {"name": "N", "symbols": [{"literal":"5"}, "N"], "postprocess": d => d[0] + d[1]},
    {"name": "N", "symbols": [{"literal":"6"}, "N"], "postprocess": d => d[0] + d[1]},
    {"name": "N", "symbols": [{"literal":"7"}, "N"], "postprocess": d => d[0] + d[1]},
    {"name": "N", "symbols": [{"literal":"8"}, "N"], "postprocess": d => d[0] + d[1]},
    {"name": "N", "symbols": [{"literal":"9"}, "N"], "postprocess": d => d[0] + d[1]},
    {"name": "N", "symbols": [{"literal":"0"}, "N"], "postprocess": d => d[0] + d[1]}
]
  , ParserStart: "e"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
