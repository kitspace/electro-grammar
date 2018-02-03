import argparse
import decimal
import json
import sys
import electro_grammar as eg


class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return float(o)
        return super(DecimalEncoder, self).default(o)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Electro grammar parser')

    parser.add_argument('--parser', default='strict', type=str,
                        help='an integer for the accumulator')
    parser.add_argument('--rule', default='electro_grammar', type=str,
                        help='sum the integers (default: find the max)')
    parser.add_argument('input', type=str)

    args = parser.parse_args()
    result = eg.get_parser(args.parser, args.rule)(args.input)
    warnings = []
    for warning in result['warnings']:
        warnings.append(repr(warning))
        print(str(warning), file=sys.stderr)

    result['warnings'] = warnings
    j = json.dumps(result, cls=DecimalEncoder)
    print(j)
