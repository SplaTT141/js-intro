// function intervalCount(start, end, divider) {
//     let count = 0;
    
// for (let i = start; i <= end; i++) {
//     if (i % divider === 0) {
//         count++
//     }
// }
//     return `Skaiciu intervale tarp ${start} ir ${end}, besidalijanciu be liekanos is ${divider} yra ${count} vienetai,`;
// }

function intervalCount(start, end, divider) {
    if (typeof start !== 'number' || typeof end !== 'number' || typeof divider !== 'number' ) {
        return 'Netinkamas kintamuju tipas';
    }

    if (start % 1 !== 0 || end % 1 !== 0 || divider % 1 !== 0) {
        return 'Skaicius turi buti sveikasis';
    }

    if (start > end) {
        return 'Intervalo pradzia negali buti ilgesne uz intervalo pabaiga';
    }

    let count = 0;
    
    const trueStart = start;

for (let i = start; i <= end; i += divider) {
        count++;
    }
    //galutinis tiksas yra formule, kurios uzuomina yra zemiau pateikta lygtis/logika:
    //count = (end - start) / divider;
    return `Skaiciu intervale tarp ${start} ir ${end}, besidalijanciu be liekanos is ${divider} yra ${count} vienetai,`;
}

console.log(intervalCount(0, 11, 3));
console.log(intervalCount(0, 11, 5));
console.log(intervalCount(0, 11, 7));

console.log(intervalCount(1, 11, 3));
console.log(intervalCount(1, 11, 5));
console.log(intervalCount(1, 11, 7));

console.log('---------------------------------');

console.log(intervalCount('asd', 11, 7));
console.log(intervalCount(1, 'asd', 7));
console.log(intervalCount(1, 11, 'asd'));
console.log(intervalCount(1, 11, undefined));
console.log(intervalCount(null, 11, 7));
console.log(intervalCount(1, [], 7));
console.log(intervalCount(1, true, 7));

console.log('---------------------------------');

console.log(intervalCount(NaN, 11, 7.1));
console.log(intervalCount(0, NaN, 7.1));
console.log(intervalCount(0, 11, NaN));
console.log(intervalCount(0, 11, 7.1));
console.log(intervalCount(2, 1, 7));

console.log(intervalCount(Infinity, 11, 7.1));
console.log(intervalCount(100, 11, 7.1));
console.log(intervalCount(0, Infinity, 7.1));
console.log(intervalCount(0, 11, Infinity));
