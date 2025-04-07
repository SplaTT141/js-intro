/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

//push prideda i masyva nauja/us elementa (i jo gala)
console.log('\npush');
console.log('-'.repeat(15));

const list = [];
console.log(list);

list.push(8);
console.log(list);

list.push(8, 7, 8 , 4);
console.log(list);

const numbers = [10, 2, 8, 4, 6]; 
const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    console.log('---', numbers[i], numbers[i] * 2);

    doubleNumbers.push(numbers[i] * 2)
}

console.log(doubleNumbers);


const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const nameSizes = [];
const nameFirstLetters = [];
const upperCaseNames = [];

for (i = 0; i < names.length; i++) {
    const name = names[i];

    nameSizes.push(name.length)
    nameFirstLetters.push(name[0])
    upperCaseNames.push(name.toUpperCase());
}

console.log(nameSizes);
console.log(nameFirstLetters);
console.log(upperCaseNames);


const n1 = [1, 11, 111];
const n2 = [2, 22, 222, 2222];
const n12 = [];

// const n12 = [1, 11, 111, 2, 22, 222, 2222]

for (i = 0; i < n1.length; i++) {
    n12.push(n1[i])
}

for (i = 0; i < n2.length; i++) {
    n12.push(n2[i])
}

console.log(n12);

//pop nario pasalinimas (paskunitinis naris)
console.log('\npop');
console.log('-'.repeat(15));

const numbers2 = [10, 2, 8, 4, 6];

console.log(numbers2);

numbers2.pop();

const deleted = numbers2.pop();

console.log(numbers2, deleted);

//unshift itraukia nari i prieki
console.log('\nunshift');
console.log('-'.repeat(15));

numbers2.unshift(1);
numbers2.unshift(10);

console.log(numbers2);

//shift pasalina priekini nari
console.log('\nshift');
console.log('-'.repeat(15));

numbers2.shift();

console.log(numbers2);

//includes klausiame ar sarase yra kazkoks naris
console.log('\ninclude');
console.log('-'.repeat(15));

const magic = [11, 22, 33, 44, 55];
console.log(magic.includes(5));
console.log(magic.includes(55));

//join 
console.log('\njoin');
console.log('-'.repeat(15));

const texts = ['agurkas', 'svogunas', 'paprika', 'pomidoras'];

const products = `Reikalingi produktai: ${texts.join(', ')}.`;
console.log(products);

//reverse apsuka masyvo reiksmes
console.log('\nreverse');
console.log('-'.repeat(15));

console.log(texts);
texts.reverse();
console.log(texts);

//concat sujungia masyvus
console.log('\nconcat');
console.log('-'.repeat(15));

const c1 = [1, 11];
const c2 = [2, 22];
const c3 = [3, 33];
const c4 = [4, 44];

const c12 = c1.concat(c2)
console.log(c12);

const c34 = c3.concat(c4);
console.log(c34);

const c123 = c1.concat(c2).concat(c3);
console.log(c123);

const c1234 = c1.concat(c2, c3, c4);
console.log(c1234);

const c111 = c1.concat(c1, c1);
console.log(c111);

//splice istrina viska arba nurodyta kieki nuo nurodytos pozicijos
console.log('\nsplice');
console.log('-'.repeat(15));

const h = [11, 22, 33, 44, 55];

h.splice(1, 2);
console.log(h);
