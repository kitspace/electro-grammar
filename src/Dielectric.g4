grammar Dielectric;
import Alphabet;


dielectric: CLASS1 | CLASS2 | ALU | TAN;


CLASS1: M7G | C0G | H2G | L2G | P2H | R2H | S2H | T2H | U2J | Q3K | P3K;

M7G: P  '100' | A G | M '7' G;
C0G: N P  '0' | C G | C '0' G;
H2G: N   '33' | H G | H '2' G;
L2G: N   '75' | L G | L '2' G;
P2H: N  '150' | P H | P '2' H;
R2H: N  '220' | R H | R '2' H;
S2H: N  '330' | S H | S '2' H;
T2H: N  '470' | T H | T '2' H;
U2J: N  '750' | U J | U '2' J;
Q3K: N '1000' | Q K | Q '3' K;
P3K: N '1500' | V K | P '3' K;


CLASS2: LTEMP UTEMP TEMPSTABILITY;

LTEMP: X | Y | Z;
UTEMP: '4' | '5' | '6' | '7' | '8' | '9';
TEMPSTABILITY: 'P' | 'R' | 'S' | 'T' | 'U' | 'V';


ALU: A L U | A L U M I N I U M | E L C O | E L E C T R O L Y T I C;


TAN: T A N | T A N T A L U M;