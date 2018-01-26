grammar Passive;
import Dielectric, Package, Units;

passive: resistor | capacitor | inductor | oscillator;

passive: resistor | capacitor | inductor | oscillator;
resistor: resistance rspec*;
rspec: rtype | rpackage | power;
rtype: POT;
rpackage: package_chip;
POT: P O T | P O T E N T I O M E T E R;

capacitor: capacitance cspec*;
cspec: dielectric | cpackage | voltage;
cpackage: package_chip;

inductor: inductance lspec*;
lspec: lpackage | current;
lpackage: package_chip;

oscillator: frequency ospec*;
ospec: capacitance;
