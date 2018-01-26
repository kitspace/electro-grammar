const cli = require('cli');
const lib = require('../lib/index');

const args = cli.parse({
  parser: [ 'p', 'Parser to use (strict | lax)', 'string', 'strict' ],
  rule: [ 'r', 'Rule to use', 'string', 'electro_grammar']
});

const input = process.argv[process.argv.length - 1];
const parse = lib.get_parser(args.rule);
const result = parse(input);
const json = JSON.stringify(result);
console.log(json);
