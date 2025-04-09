const texts = ['labas', 'rytas', 'Lietuva', 'duona', 'aviza', 'Zirnis', 'Anakonda'];
console.log(texts);

// sortiruoja teksta pagal abecele, bet didziosios raides eina pirmos

texts.sort();
console.log(texts);

const pseudo = ['d', 'b', 'ca', 'bf', 'ba', 'cc', 'db', 'baa', 'bac'];
pseudo.sort();
console.log(pseudo);

// sortiruoja skaicius pagal abecele iki to kol ivedam rodykline funkcija

const numbers = [10, 2, 8, 1, 4, 12, 23, 6].sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

const people = [
    {name: 'Petras', age: 77},
    {name: 'Jonas', age: 99},
    {name: 'Ona', age: 66},
    {name: 'Maryte', age: 88},
];

people.sort((a, b) => a.age - b.age) //sortiruojam pagal amziu
console.log(people);

people.sort((a, b) => a.name.length - b.name.length) //sortiruojam pagal vardo ilgi
console.log(people);

people.sort((a, b) => a.name > b.name ? 1 : -1) //sortiruojam pagal vardus abecele tvarka
console.log(people);







