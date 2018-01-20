grammar PackageSize;
import Alphabet;

package_size: IMPERIAL_SIZE | METRIC_SIZE;

IMPERIAL_SIZE: '01005'
             | '0201'
             | '0805'
             | '1008'
             | '1206'
             | '1806'
             | '2010'
             | '2512'
             | IMPERIAL AMBIGUOUS_SIZE
             | AMBIGUOUS_SIZE IMPERIAL;

METRIC_SIZE : '1005'
            | '1608'
            | '2012'
            | '2520'
            | '3216'
            | '3225'
            | '4516'
            | '5025'
            | '6332'
            | METRIC AMBIGUOUS_SIZE
            | AMBIGUOUS_SIZE METRIC;

AMBIGUOUS_SIZE : '0402'
               | '0603';

METRIC   : M | M E T R I C;
IMPERIAL : I | I M P E R I A L;