/*
BOOLEAN - logine reiksme
- true
- false

Loginiai operatoriai:
- && - and (ir)
- || - or (arba)

*/

const isEven = true;
const isOdd = false;

console.log('&&----------------')

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log('||----------------')

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

console.clear();

console.log('Ar vaikinas eis i pasimatyma?')

const arGrazi = false;
const arTurtinga = false;

console.log(arGrazi || arTurtinga);

console.clear();

console.log(false && false || true);

console.clear();
