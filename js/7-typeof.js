/*
TYPEOF - duomenu tipo nustatymo operatorius
*/

console.log(typeof 5);
console.log(typeof 'asd');
console.log(typeof false);
console.log(typeof true);
console.log(typeof NaN);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof ['a', 'b', 'c']);
console.log(typeof [true, false]);
console.log(typeof undefined);

function sum(a, b) {
    return a + b;
}

console.log(typeof sum);
console.log(typeof sum());
console.log(typeof null);

const a = null
if (a === null) {
    console.log('NULL');
}

const b = [];
if (Array.isArray(b)) {
    console.log('ARRAY');
}
