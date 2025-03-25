function multiply(a, b) {
    if (typeof a !== 'number' && typeof b !== 'number') {
        return 'Abu parametrai turi buti skaiciai'
    }

    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaicius'
    }

    if (typeof b !== 'number') {
        return 'Antrasis parametras turi buti skaicius'      
    }

    if (isNaN(a)) {
        return 'Pirmasis parametras nera normalus skaicius'
    }

    if (isNaN(b)) {
        return 'Antrasis parametras nera normalus skaicius'
    }

    if (a === Infinity || a === -Infinity
        &&
        b === Infinity || b === -Infinity) {
        return 'Abu parametrai negali buto begalybemis'
    }

    if (a === Infinity || a === -Infinity) {
        return 'Pirmasis parametras negali buti begalyba'
    }

    if (b === Infinity || b === -Infinity) {
        return 'Antrasis parametras negali buti begalyba'
    }

    return a * b;
}

console.log(multiply(2, 2));
console.log(multiply(7, 5));
console.log(multiply(7, -5));
console.log(multiply(-7, 5));
console.log(multiply(7, 0));
console.log(multiply(-7, -5));
console.log(multiply(-7, 0));
console.log(multiply(0, 5));

console.log(multiply(2, 'labas'));
console.log(multiply( 'labas', 2));
console.log(multiply(true, 3));
console.log(multiply(3, true));
console.log(multiply('labas', 'rytas'));
console.log(multiply(NaN, NaN));
console.log(multiply(1, NaN));
console.log(multiply(NaN, 1));
console.log(multiply([5], 1));

console.log(multiply(2, 1.5));
console.log(multiply(Infinity, 2));
console.log(multiply(2, Infinity));
console.log(multiply(Infinity, 3));
console.log(multiply(Infinity, Infinity));
console.log(multiply(Infinity, -Infinity));
console.log(multiply(-Infinity, -Infinity));