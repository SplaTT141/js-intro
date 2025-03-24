function empty() {
    //logika
}

const a = empty();
console.log(a);

console.log(empty());

function penki() {
    return 5;
}

const c = penki();
console.log(c);

function hi(){
    return 'hi';
}

const d = hi();
console.log(d);

// Jonas -> Labas, Jonas!

function hiPerson(name) {
    // return 'Labas, ' + name + '!';
    return `Labas, ${name}!`
}

console.log(hiPerson('Jonai'));
console.log(hiPerson('Maryte'));
console.log(hiPerson('Petrai'));

console.clear();

// 2+2 = 4
// 7+5 = 12

function sum(num1, num2) {
    return num1 + num2;
}

const e = sum(2, 2);
console.log(e);

const f = sum(7, 5);
console.log(f);

const g = sum(-7, 15);
console.log(g);

console.clear();

// 100 -> 121 Eur
// 200 -> 242 Eur
// 73 -> 88.33 Eur

function priceWithVAT(price) {
    const updatedPrice = price * 1.21;

    return updatedPrice + ' Eur';
}

const p1 = priceWithVAT(100);
console.log(p1);

const p2 = priceWithVAT(200);
console.log(p2);

const p3 = priceWithVAT(73);
console.log(p3);

console.clear();

// Jonas -> Zodis "Jonas" yra sudarytas is 5 raidziu.
// Jonas -> Zodis "Maryte" yra sudarytas is 6 raidziu.
// Jonas -> Zodis "Petras" yra sudarytas is 6 raidziu.
// Jonas -> Zodis "Ona" yra sudarytas is 3 raidziu.

// function nameSymbolCount(name) {
//     return `Zodis ${name} yra sudarytas is ${name.length} raidziu`;
// }

// const name1 = nameSymbolCount('Jonas');
// const name2 = nameSymbolCount('Maryte');
// const name3 = nameSymbolCount('Petras');
// const name4 = nameSymbolCount('Ona');
// const name5 = nameSymbolCount('Onalalalalal');

// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(name4);
// console.log(name5);

function nameSymbolCount(name) {
    const size = name.length;
    return `Zodis ${name} yra sudarytas is ${size} raidziu`;
}

const name1 = nameSymbolCount('Jonas');
const name2 = nameSymbolCount('Maryte');
const name3 = nameSymbolCount('Petras');
const name4 = nameSymbolCount('Ona');
const name5 = nameSymbolCount('Onalalalalal');

console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);
console.log(name5);

console.clear();

// 5 -> Gautas skaicius: 5.
// -13 -> Gautas skaicius: -13.
// 777 -> Gautas skaicius: 777.

function number(gn) {
    return `Gautas skaicius: ${gn}.`
}

const gn1 = number(5);
const gn2 = number(-13);
const gn3 = number(777);

console.log(gn1);
console.log(gn2);
console.log(gn3);

console.clear()

// 2, 2 -> 2 + 2 = 4
// 7, 5 -> 7 + 5 = 12
// -7, 15 -> -7 + 15 = 8

function count(n1, n2) {
    // return `${n1} + ${n2} = ${n1 + n2}`;

    const result = n1 + n2;
    return `${n1} + ${n2} = ${result}`
}

const count1 = count(2, 2);
const count2 = count(7, 5);
const count3 = count(-7, 15);

console.log(count1);
console.log(count2);
console.log(count3);

console.clear();

// for (let count = 0; count < 11; count++) {
//     console.log(count)

for (let count = 0; count < 0; count++) {
    console.log(count);
}