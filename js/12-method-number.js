// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)

console.log('-'.repeat(15));

// Number.isFinite arba isFinite- ar skaicius yra baigtinis
console.log(`\nisFinite`);
console.log(isFinite(5));
console.log(isFinite(-3.14));
console.log(isFinite(true));
console.log(Number.isFinite(true));

console.log(isFinite([1, 2]));
console.log(isFinite(Infinity));
console.log(isFinite('adasdas'));
console.log(isFinite(NaN));

// Number.isInteger tikrina ar skaicius yra sveikasis
console.log('-'.repeat(15));
console.log(`\nNumber.isInteger`);

console.log(Number.isInteger(5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(0));
console.log(Number.isInteger(-5.1));
console.log(Number.isInteger(5.1));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));

// Number.isNaN - tikrina ar reiksme yra NaN
console.log('-'.repeat(15));
console.log(`\nNumber.isNaN`);

console.log(Number.isNaN(5));
console.log(Number.isNaN(-5.2));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(-NaN));
console.log(Number.isNaN(Infinity), isNaN(Infinity));
console.log(Number.isNaN('asda'), isNaN('asda'));

// parseInt grazina sveikaji skaiciu is string
console.log('-'.repeat(15));
console.log(`\nparseInt`);

const userInput = '22';
const userNumber = parseInt(userInput);
const a = userNumber + 5;

console.log(a);

console.log(parseInt('65'));
console.log(parseInt('5.4024'));
console.log(parseInt('-5.4024'));
console.log(parseInt('du'));
console.log(parseInt('du22.24'));
console.log(parseInt('2244.1du'));

// parseFloat grazina skaiciu is string, tik itraukia ir skaicius po kablelio 
console.log('-'.repeat(15));
console.log(`\nparseFloat`);

console.log(parseFloat('44'));
console.log(parseFloat('44.4444'));
console.log(parseFloat('du22.24'));
console.log(parseFloat('du'));
console.log(parseFloat('22.44du'));

// toFixed apvalina skaiciu iki nurodytos reiksmes, perdaro i number i string
console.log('-'.repeat(15));
console.log(`\ntoFixed`);

const b = 12.456265;
const c = b.toFixed(4);
console.log(c);
console.log(typeof c);

const d = parseFloat(c);
console.log(d);
console.log(typeof d);

console.log(3.14.toFixed(0));
console.log(3.14.toFixed(2));
console.log(3.14.toFixed(3));


