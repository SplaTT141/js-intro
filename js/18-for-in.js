const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

const keys = Object.keys(person);

// for (const key of keys) {
//     console.log(person[key]);
// }

for (const key in person) {
    console.log(person[key]);
}

console.log('--------------')
// skaiciuojam kokiu raidziu daugiausia
const text = 'papajus';
const symbols = {};

for (const s of text) { //pasidarom simbolio analize
    if (symbols[s]) {
        symbols[s]++
    } else {
        symbols[s] = 1;
    }
}

let max = 0

for (const s in symbols) { //susirandam didziausia kieki
    if (symbols[s] > max) {
        max = symbols[s];
    }
}

console.log(max);

const maxSymbols = []; //pagal didziausia kieki atskiriam raide
for (const s in symbols) {
    if (symbols[s] === max) {
        maxSymbols.push(s);
    }
}

console.log(maxSymbols);