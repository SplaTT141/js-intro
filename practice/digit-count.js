function skaitmenuKiekisSkaiciuje(num) {
    if (typeof num !== 'number' || !isFinite(num)) {
        return 'Pateikta netinkamo tipo reiksme';
    }
    
    const skaitmenuKiekis = num.toString();
    let count = skaitmenuKiekis.length;
    
    if (num % 1 !== 0) {
        count--;
    }

    if (num < 0) {
        count--
    }

    // if (num >= 2e+21) {
    // }

    return count;    
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log('---');
console.log(skaitmenuKiekisSkaiciuje(5.5));
console.log(skaitmenuKiekisSkaiciuje(55.55));
console.log(skaitmenuKiekisSkaiciuje(-55.55));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje());
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log(skaitmenuKiekisSkaiciuje(Infinity));
console.log(skaitmenuKiekisSkaiciuje(-Infinity));
console.log(skaitmenuKiekisSkaiciuje(2000000000000000000000));

console.log(2000000000000000000000);s
