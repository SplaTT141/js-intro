/*
if - palyginimo savyga

Palyginimo operatoriai:
- visi: >, <, >=, <=, ==, ===, !=, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if () else {}
if () {} ... else if () ...
if () {} ... else if () ... else {}
*/

console.log('START');

if (4 > 3) {
    console.log('Taip');
} else {
    console.log('Ne');
}

console.log('END');

console.clear();

const temp = 18;

if (temp >= 18) {
    console.log('Silta');
} else {
    console.log('Salta'); 
}

console.clear();

// jei zemiau 0 - salta
// jei zemiau 10 - meh
// jei zemiau 22 - silta
// jei daugiau - karsta

const temp1 = 220;

if (temp1 <= 0) {
    console.log('salta');   
} else if (temp1 <= 10) {
    console.log('meh');
} else if (temp1 <= 22) {
    console.log('silta');
} else {
    console.log('karsta');
}

console.clear();

if (4 == '4') {
    console.log('Tenkina');
} else {
    console.log('Netenkina');    
}

function highAndLow(numbers){
  
}

//assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");