//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math


console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2)

// abs neigiamus skaicius i teigiamu keicia
console.log(`\nabs`);
console.log(Math.abs(5));
console.log(Math.abs(-5));

// cbrt kubine saknis
console.log(`\ncbrt`);
console.log(Math.cbrt(8));
console.log(Math.cbrt(64));
console.log(Math.cbrt(27));
console.log(Math.cbrt(125));

// ceil apvalinimas i virsu
console.log(`\nceil`);
console.log(Math.ceil(8));
console.log(Math.ceil(8.9));
console.log(Math.ceil(8.1));
console.log(Math.ceil(8.00001));

// floor apvalina i apacia
console.log(`\nfloor`);
console.log(Math.floor(8));
console.log(Math.floor(8.001));
console.log(Math.floor(8.999999));

// round apvalina
console.log(`\nround`);
console.log(Math.round(8));
console.log(Math.round(8.001));
console.log(Math.round(8.5));
console.log(Math.round(8.999999));

// trunc 
console.log(`\ntrunc`);
console.log(Math.trunc(8));
console.log(Math.trunc(8.001));
console.log(Math.trunc(8.5));
console.log(Math.trunc(8.999999));
console.log(Math.trunc(-8.999999));

// hypot pitagoro teorema izambines skaiciavimui
console.log(`\nhypot`);
console.log(Math.hypot(3, 4));
console.log(Math.hypot(4, 5));
console.log(Math.hypot(4, 5, 6)); //kubo

// max didziausias skaicius
console.log(`\nmax`);
console.log(Math.max(3, 5, 15));
console.log(Math.max(-4, -2, 0, -1));
console.log(Math.max('asd', -2, 0, -1));

// min maziausias skaicius
console.log(`\nmin`);
console.log(Math.min(3, 5, 15));
console.log(Math.min(-4, -2, 0, -1));
console.log(Math.min('asd', -2, 0, -1));

// pow kelimas laipsniu
console.log(`\npow`);
console.log(Math.pow(2, 0)); //2 ** 0 - identiska
console.log(Math.pow(2, 1)); //2 ** 1
console.log(Math.pow(2, 2));
console.log(Math.pow(2, 3));

// sign grazina 1 arba -1 is bet kokio skaiciaus
console.log(`\nsign`);
console.log(Math.sign(8));
console.log(Math.sign(-8));
console.log(Math.sign(0));
console.log(Math.sign(Infinity));
console.log(Math.sign(-Infinity));

// sqrt kvadratine saknis
console.log(`\nsqrt`);
console.log(Math.sqrt(4));
console.log(Math.sqrt(9));
console.log(Math.sqrt(121));

// random [0...1) nuo 0 iki 1 random skaicius. 1 ne imtinai
console.log(`\nrandom`);
console.log(Math.random());

// random skacius: 3 arba 7

let count3 = 0;
let count7 = 0;

for (let i = 0; i < 1000; i++) {
    if (Math.random() < 0.5) {
        count3++;
    } else {
        count7++;
    }
}

console.log(count3, count7);

console.log('--------------------')
// [13...149]

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for (let i = 0; i <= 10; i++) {
    console.log(randomNumber(1, 10));
}

console.log('--------------------')
// console.log(randomNumber(1, 10));
// console.log(randomNumber(1, 10));
// console.log(randomNumber(1, 10));
// console.log(randomNumber(1, 10));
// console.log(randomNumber(1, 10));
// console.log(randomNumber(1, 10));
// console.log(randomNumber(1, 10));
// console.log(randomNumber(1, 10));

const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 1000000; i++) {
    const index = randomNumber(0, 9);
    counts[index]++;
}

console.log(counts);


const counts2 = [0, 0];

for (let i = 0; i < 1000000; i++) {
    const index = randomNumber(0, 1);
    counts2[index]++;
}

console.log(counts2);