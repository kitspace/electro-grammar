#whitespace
_  -> [\s]:*  {% nuller %}
__ -> [\s]:+  {% nuller %}

@{%
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
        return  d.filter(function(t) {
            return t != null
        })
    }

    function nuller() {
        return  null
    }
%}
