grammar Semi;
import Alphabet, Units;


semi: diode | transistor;


/* Diodes */
diode: dspec+;

dspec: dtype? dcode
     | dcode? dtype;
dtype: signal | rectifier | led | schottky | zener;
dcode: DCODE;
DCODE: JEDEC_DIODE_CODE | PRO_ELECTRON_DIODE_CODE;


signal: SIGNAL;
SIGNAL: S I G | S I G N A L;

rectifier: RECTIFIER;
RECTIFIER: R E C T | R E C T I F I E R;

led: LED? color;
LED: L E D;

color: COLOR;
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
transistor: ttype? tcode
          | tcode? ttype;
ttype: TTYPE;
tcode: TCODE;
TCODE: JEDEC_TRANSISTOR_CODE | PRO_ELECTRON_TRANSISTOR_CODE;

TTYPE: NPN | PNP | NMOS | PMOS;
fragment NPN: N P N;
fragment PNP: P N P;
fragment NMOS: N M O S;
fragment PMOS: P M O S;


/* Device codes */
fragment ALPHANUM: [0-9a-zA-Z];

JEDEC_DIODE_CODE: '1' N DIGIT+;
JEDEC_TRANSISTOR_CODE: [23] N DIGIT+;

fragment PRO_ELECTRON_MATERIAL: A | B | C | R;

fragment PRO_ELECTRON_DIODE_TYPE: A | B | E | H | X | Y | Z;
fragment PRO_ELECTRON_TRANSISTOR_TYPE: C | D | F | L | S | U;
fragment PRO_ELECTRON_OTHER_TYPE: G | N | P | Q | R | T | W;

fragment PRO_ELECTRON_SERIAL: ALPHANUM DIGIT DIGIT ALPHANUM*;

PRO_ELECTRON_DIODE_CODE: PRO_ELECTRON_MATERIAL PRO_ELECTRON_DIODE_TYPE PRO_ELECTRON_SERIAL;
PRO_ELECTRON_TRANSISTOR_CODE: PRO_ELECTRON_MATERIAL PRO_ELECTRON_TRANSISTOR_TYPE PRO_ELECTRON_SERIAL;