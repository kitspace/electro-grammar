grammar PackageSize;
import Alphabet, Units;

package_size: metric_size
            | imperial_size
            | ambiguous_size;

metric_size: METRIC_SIZE
           | METRIC (METRIC_SIZE | AMBIGUOUS_SIZE)
           | (METRIC_SIZE | AMBIGUOUS_SIZE) METRIC;

imperial_size: IMPERIAL_SIZE
             | IMPERIAL (IMPERIAL_SIZE | AMBIGUOUS_SIZE)
             | (IMPERIAL_SIZE | AMBIGUOUS_SIZE) IMPERIAL;

ambiguous_size: AMBIGUOUS_SIZE;

METRIC_SIZE: '03015'
           | '1005'
           | '1608'
           | '2012'
           | '2520'
           | '3216'
           | '3225'
           | '4516'
           | '4532'
           | '4564'
           | '5025'
           | '6332'
           | '7451';

IMPERIAL_SIZE: '008004'
             | '009005'
             | '01005'
             | '0805'
             | '1008'
             | '1206'
             | '1210'
             | '1806'
             | '1812'
             | '1825'
             | '2010'
             | '2512'
             | '2920';

AMBIGUOUS_SIZE : '0201'
               | '0402'
               | '0603';

METRIC: M E T R I C;
IMPERIAL: I | I M P E R I A L;
