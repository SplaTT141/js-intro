// function stringReverse(text) {
//     let result = '';

//     for (let i = text.length - 1; i >= 0; i--){
//         result += text[i];
//     }
//     return result;
// }

// function stringReverse(text) {
//     let result = '';

//     for (let i = 0; i < text.length; i++) {
//         result += text[text.length - i - 1];
//     }

//     return result;
// }

function stringReverse(text) {
    if (typeof text !== 'string') {
        return 'Reikalinga string tipo reiksme'
    }

    let result = '';

    for (let i = 0; i < text.length; i++) {
        result = text[i] + result;
    }

    return result;
}

console.log(stringReverse('abc'));
console.log(stringReverse('Jonas'));
console.log(stringReverse('grybautojas'));

console.log(stringReverse([]));
console.log(stringReverse([1, 2]));
console.log(stringReverse(['asd', 'efre']));
console.log(stringReverse(12345689));
console.log(stringReverse(true));
console.log(stringReverse(null));
console.log(stringReverse(undefined));
console.log(stringReverse(stringReverse));
console.log(stringReverse());
