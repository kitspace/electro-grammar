packageSize -> _packageSize {% d => ({size: filter(lodashFlattenDeep(d))[0]}) %}
_packageSize -> _imperialSize | _metricSize
_imperialSize ->
    "01005"
  | "0201"
  | "0402"
  | "0603"
  | "0805"
  | "1008"
  | "1206"
  | "1210"
  | "1806"
  | "2010"
  | "2512"

_metricSize ->
    __metricSize [\s]:* M E T R I C {% d => toImperial[d[0]] %}
  | M E T R I C [\s]:* __metricSize {% d => toImperial[d[7]] %}
  | unambigiousMetricSize           {% d => toImperial[d[0]] %}
@{%
  const toImperial = {
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
%}

unambigiousMetricSize ->
    "1005"
  | "1608"
  | "2012"
  | "2520"
  | "3216"
  | "3225"
  | "4516"
  | "5025"
  | "6332"

__metricSize ->
    unambigiousMetricSize
  | "0402"
  | "0603"

M -> "M" | "m"
E -> "E" | "e"
T -> "T" | "t"
R -> "R" | "r"
I -> "I" | "i"
C -> "C" | "c"
