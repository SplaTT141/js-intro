/*
FOR (loop) -ciklas
*/

for (let i = 0; i < 5; i++) {
    console.log('a)', i);
}

console.log('--------------------');

for (let i = 10; i > 0; i--) {
    console.log('b)', i); 
}

console.log('--------------------');

for (let i = 0; i < 11; i += 2) {
    console.log('c', i);
}

console.log('--------------------');

for (let k = 0; k < 1; k += 0.1) {
    console.log('d)', k);
}

console.log('--------------------');

for (let k = 0; k < 10; k++) {
    console.log('e)', k / 10);
}

console.log('--------------------');

console.log(0.1 + 0.2);
console.log((10 + 20) / 100);

console.log('--------------------');

console.log('Labas');
console.log('Labas');
console.log('Labas');
console.log('Labas');

for (let i = 1; i < 5; i++ ) {
    console.log('Ate');
}

console.log('--------------------');

const n = 6;

console.log(`${n} * 1 = ${n * 1}`);
console.log(`${n} * 2 = ${n * 2}`);
console.log(`${n} * 3 = ${n * 3}`);

console.log('--------------------');

for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}
