# Whitespace. The important thing here is that the postprocessor
# is a null-returning function. This is a memory efficiency trick.
_ -> [\s]:*     {% function(d) {return null } %}

__ -> [\s]     {% function(d) {return null } %}

@{%
  const ramda = require('ramda')

  const filter = d => {
    return d.filter((token) => {
      return token !== null;
    });
  };

%}
