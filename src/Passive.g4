grammar Passive;
import Dielectric, PackageSize, Units;


passive: resistor | capacitor | inductor | oscillator;


resistor: RESISTOR? resistance rspec*;
rspec: rtype | package_size | power;
rtype: RESISTOR | POT;
RESISTOR: R E S I S T O R;
POT: P O T | P O T E N T I O M E T E R;

capacitor: CAPACITOR? capacitance cspec*;
cspec: dielectric | package_size | voltage;
CAPACITOR: C A P A C I T O R;

inductor: inductance lspec*;
lspec: package_size | current;

oscillator: frequency ospec*;
ospec: capacitance;
