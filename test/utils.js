const assert = require('better-assert');
const {execSync} = require('child_process');
const {format} = require('util');

const get_js_parser = require('../js/lib/index.js').get_parser;

let bin_py = 'python3 python3/cli.py';
if (process.env.TRAVIS === 'true') {
  bin_py = 'pipenv run python3 python3/cli.py'
}

const originalIt = global.it;

function eg_config(parser, rule) {
  return {parser, rule};
}

function id(x) {
  return x;
}

function egIt(description, fn) {
  const {config, inputs, result} = fn();
  originalIt('js: ' + description, (done) => {
    jscheck(config, inputs, result, done);
  });
  originalIt('py: ' + description, (done) => {
    pycheck(config, inputs, result, done);
  });
};

function lexer_tests(config, cases, key, transform) {
  if (transform === null) {
    transform = id;
  }
  for (const [output, inputs] of Object.entries(cases)) {
    egIt('lexes ' + inputs[0], () => {
      const result = {};
      result[key] = transform(output);
      return {config, inputs, result};
    });
  }
}

function parser_tests(config, cases) {
  for (const [input, result] of Object.entries(cases)) {
    egIt('parses ' + input, () => {
      const inputs = [input];
      return {config, inputs, result};
    });
  }
}

function jscheck(config, cases, expected, done) {
  function parse(input, cb) {
    const result = get_js_parser(config.parser, config.rule)(input);
    cb(result);
  }
  run_test(parse, cases, expected, done);
}

function pycheck(config, cases, expected, done) {
  function parse(input, cb) {
    const result = run_cli_parser(bin_py, config, input);
    cb(result);
  }
  run_test(parse, cases, expected, done);
}

function run_test(parse, cases, expected, done) {
  cases.forEach((input) => {
    const actual = parse(input, (actual) => {
      check_result(actual, expected);
    });
  });
  done();
}

function run_cli_parser(bin, config, input) {
  const cmd = format('%s --parser=%s --rule=%s "%s"', bin,
                     config.parser, config.rule, input);
  const stdout = execSync(cmd).toString();
  return JSON.parse(stdout);
}

function check_result(actual, result) {
  for (const [key, value] of Object.entries(result)) {
    try {
      assert(actual.result[key] === value);
    } catch(ex) {
      ex.message = format('%s should equal %s', actual.result[key], value);
      throw ex;
    }
  }
}

module.exports = {eg_config, lexer_tests, parser_tests};
