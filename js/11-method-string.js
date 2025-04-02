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

// indexOf nurodo raides pozicija (nurodo pirma pasitaikiuse)
console.log(`\nindexOf`);
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('mido')); // grazina 2, nes prasideda nuo antros pozicijos
console.log('Pomidoras'.indexOf('p')); // nurodo -1 kai neranda

console.log('Pomidoras'.indexOf('o', 0)); // nurodom pozicija nuo kurios ieskoti
console.log('Pomidoras'.indexOf('o', 1));
console.log('Pomidoras'.indexOf('o', 2));

console.log('-----------')

console.log('Kulverstukas'.indexOf('u'));
console.log('Kulverstukas'.indexOf('u', 0));
console.log('Kulverstukas'.indexOf('u', 1));
console.log('Kulverstukas'.indexOf('u', 2));

const k = 'Kulverstukas';
console.log(k.indexOf('u'))
console.log(k.indexOf('u', 2))
console.log(k.indexOf('u', k.indexOf('u') + 1)) //taip randa sekancia raide po pirmos 
console.log(k.indexOf('s', k.indexOf('s') + 1))
console.log(k.indexOf('e', k.indexOf('e') + 1)) //nesugebejo rasti kitos e raidos, todel grazino -1

// repaet
console.log(`\nrepeat`);
console.log('a');
console.log('aaaaaaaaaaaaaa');
console.log('a'.repeat(20));

const symbol = 'm';
const megaSymbol = symbol.repeat(10);
console.log(megaSymbol);

// function stringRepeat (text, count) {
//     let result = '';

//     for (let i = 0; i < Math.floor(count); i++) {

//         result += text;
//     }

//     return result;
// }

// console.log(stringRepeat('rikiki ', 3.999999));


// replace
console.log(`\nreplace`);

const summer = 'vasara'.replace('a', '-');
console.log(summer);

const summer2 = 'vasara'.replace('a', '-').replace('a', '-');
console.log(summer2);

const summer3 = 'vasara'.replace('a', '-').replace('a', '-').replace('a', '-').replace('a', '-');
console.log(summer3);

const cloud = 'debeselis'.replace(/e/ig, '*'.repeat(3));
console.log(cloud);

// replaceAll
console.log(`\nreplaceAll`);
console.log('vasara'.replaceAll('a', '-'))

console.log('ananasas'.replace('a', ''));
console.log('ananasas'.replaceAll('a', ''));

// toUpperCase padidina visas mazasias raides
console.log(`\ntoUpperCase`);

console.log('Labas'.toUpperCase());
console.log('labas'.toUpperCase());

// toULowerCase sumazina visas didziases raides
console.log(`\ntoLowerCase`);

console.log('LABAS'.toLowerCase());
console.log('Labas'.toLowerCase());

// slice
console.log(`\nslice`);

console.log('pomidoras'.slice());
console.log('pomidoras'.slice(0));
console.log('pomidoras'.slice(1));
console.log('pomidoras'.slice(2));

console.log('pomidoras'.slice(0, 1));
console.log('pomidoras'.slice(0, 2));
console.log('pomidoras'.slice(1, 3));
console.log('pomidoras'.slice(2, 7));

console.log('pomidoras'.slice(3, 1));
console.log('pomidoras'.slice(0, -1));
console.log('pomidoras'.slice(0, -2));
console.log('pomidoras'.slice(3, -3));

console.log('pomidoras'.slice(-3));
console.log('pomidoras'.slice(-4));




































