let atvirukoTekstas = 'Labai geras daiktas yra televizorius as su juo galiu matyti jus';
// let atvirukoRaide = 'a';

function atvirukoLipdukai(raide) {

    let atvirukoSuma = 0;

    for (let i = 0; i < atvirukoTekstas.length; i++) {
        if (atvirukoTekstas[i] === raide) {
            atvirukoSuma++;
        }
    }
    
    return atvirukoSuma;
}

console.log(atvirukoLipdukai('a'));
console.log(atvirukoLipdukai('z'));
console.log(atvirukoLipdukai('x'));

const atvirukoBalses = ['a', 'e', 'o', 'u', 'i'];

for (let i = 0; i < atvirukoBalses.length; i++) {
    console.log('Raide ' + atvirukoBalses[i] + ' pasikartoja ' + atvirukoLipdukai(atvirukoBalses[i]))
}

// for (let i = 0; i < atvirukoBalses.length; i++) {
//         atvirukoTekstas.replace(/a/g, '*')
// }

//     return atvirukoTekstas;
// }

// if (atvirukoTekstas.includes('a')) {
//     atvirukoTekstas.replace(/a/ig, '*')
// }

console.log(atvirukoTekstas);
console.log(atvirukoTekstas.replace(/[aeoui]/ig, '*'));
