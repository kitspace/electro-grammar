grammar Passive;
import Dielectric, PackageSize, Units;


passive: resistor | capacitor | inductor | oscillator;


resistor: resistance rspec*;
rspec: r_type | package_size | power | POT;
r_type: POT;
POT: P O T | P O T E N T I O M E T E R;

capacitor: capacitance cspec*;
cspec: dielectric | package_size | voltage;

inductor: inductance lspec*;
lspec: package_size | current;

oscillator: frequency ospec*;
ospec: capacitance;
