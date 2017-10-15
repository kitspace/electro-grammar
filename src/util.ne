#whitespace
_  -> [\s]:*  {% function() { return null } %}
__ -> [\s]:+  {% function() { return null } %}

@{%
'use strict';


function flat(arr, res) {
  var i = 0, cur;
  var len = arr.length;
  for (; i < len; i++) {
    cur = arr[i];
    Array.isArray(cur) ? flat(cur, res) : res.push(cur);
  }
  return res;
}

function flatten (arr) {
  return flat(arr, []);
}

  var filter = function(d) { return  d.filter(function(t){ return t !== null }) }

  var nuller = function() {return  null}
%}
