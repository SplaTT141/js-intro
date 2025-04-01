/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

console.log('Labas');
console.log('Labas'[0]);
console.log('Labas'[1]);
console.log('Labas'[2]);
console.log('Labas'[3]);
console.log('Labas'[4]);

const text = 'Pomidoras';
console.log(text[text.length - 1]);

// at leidzia surasti teksto raide pagal eiliskuma nuo priekio arba nuo galo
console.log(`\nat`);
console.log('----', text.at(0)); //nuo priekio
console.log('----', text.at(1));
console.log('----', text.at(2));
console.log('----', text.at(-1)); //nuo galo
console.log('----', text.at(-2));

// includes leidzia suzinoti ar yra tam tikra raide tekste
console.log(`\nincludes`);
console.log('Vasara'.includes('V'));
console.log('Vasara'.includes('a'));
console.log('Vasara'.includes('z'));

console.log('-----------')

function includes(text) {
    if (text.includes('a')) {
        return true;
    } else {
        return false;
    }
}

console.log(includes('vasara'));
console.log(includes('pietus'));

console.log('Bepasikulversiadamasis'.includes('kulve'));

// startsWith ar tekstas prasideda su tam tikra raide
console.clear();
console.log(`\nstartsWith`);
console.log('Pomidoras'.startsWith('a'));
console.log('Pomidoras'.startsWith('p'));
console.log('Pomidoras'.startsWith('P'));
console.log('Pomidoras'.startsWith('Pomid'));
console.log('Pomidoras'.startsWith('o'));

// endsWith ar tekstas baigiasi su tam tikra raide
console.log(`\nendsWith`);
console.log('Pomidoras'.endsWith('a'));
console.log('Pomidoras'.endsWith('p'));
console.log('Pomidoras'.endsWith('s'));  
console.log('Pomidoras'.endsWith('doras'));  