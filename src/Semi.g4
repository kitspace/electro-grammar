grammar Semi;
import Alphabet, Units;


semi: diode | transistor;


fragment CODE: [a-zA-Z0-9];


/* Diodes */
diode: DIODE? dspec+;

DIODE: D | D I O D E;
dspec: diode_type; /*| diode_code;*/

diode_type: signal | rectifier | led | schottky | zener;
/* diode_code: '1' N CODE+; */


signal: SIGNAL;
SIGNAL: S I G | S I G N A L;

rectifier: RECTIFIER;
RECTIFIER: R E C T | R E C T I F I E R;

led: LED? COLOR;
LED: L E D;
COLOR: R E D
     | G R E E N
     | B L U E
     | Y E L L O W
     | O R A N G E
     | W H I T E
     | A M B E R
     | C Y A N
     | P U R P L E
     | Y E L L O W G R E E N;

schottky: SCHOTTKY;
SCHOTTKY: S K | S C H O T T K Y;

zener: ZENER? voltage;
ZENER: Z | Z E N | Z E N E R;


/* Transistors */
transistor: TRANSISTOR? tspec+;

TRANSISTOR: T | T R A N | T R A N S I S T O R;
tspec: transistor_type; /*| transistor_code;*/

transistor_type: bjt | mos;
/*transistor_code: '2' N CODE+;*/


bjt: BJT? bjt_type;
BJT: Q | B J T;
bjt_type: NPN | PNP;
NPN: N P N;
PNP: P N P;

mos: MOS? mos_type;
MOS: M | M O S | M O S F E T;
mos_type: NMOS | PMOS;
NMOS: N M O S;
PMOS: P M O S;