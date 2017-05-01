#whitespace
_  -> [\s]:*  {% () => null %}
__ -> [\s]:+  {% () => null %}

@{%
  const lodashFlattenDeep = require('lodash.flattendeep')

  const filter = d => {
    return d.filter((token) => {
      return token !== null;
    });
  };

  function assignAll(objs) {
    return objs.reduce((prev, obj) => Object.assign(prev, obj))
  }

%}
