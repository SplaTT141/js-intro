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

console.clear();

const marks = [10, 2, 8, 4, 6];

let sum = 0;

sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];

console.log(sum);

let sum2 = 0;

for (let i = 0; i < marks.length; i++) {
    console.log('index', i, '-->', marks[i]);
    sum2 += marks[i];
}

console.log(sum2);

console.log('------------------');

// Studento vardas yra VARDAS.

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i = 0; i < names.length; i++) {
    console.log(`Studento vardas yra ${names[i]}`);
}

console.clear();
// Vardas "VARDAS" yra sudarytas is 6 raidziu.

for (let i = 0; i < names.length; i++) {
    console.log(`Vardas ${names[i]} yra sudarytas is ${names[i].length} raidziu`);
}

console.log('------------------Identiskas rezultatas:');

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const s = `Vardas ${name} yra sudarytas is ${names.length} raidziu`;
    console.log(s);
}
