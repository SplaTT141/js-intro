/*
Object - objektas, (kitose kalbose siek tiek
panasu i hashmap, dictionary)
*/

const empty = {};
console.log(empty);

const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

console.log(person);

// Sveiki, mano vardas x.
console.log(`Mano vardas ${person['name']}.`);

// Sveiki, man yra x metu.
console.log(`Man yra ${person['age']} metu.`);

// Standartine sintakse, kaip paimti reiksme 
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);

// Supaprastinta sintakse 
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

const demo = { // Techniskai visi objektu raktai yra stringai(programa pati sudeda kabutes)
    color: 'red',
    'is married':  true,
    5: 77,
};

console.log(demo['color']);
console.log(demo['5']);
console.log(demo[5]);
console.log(demo['is married']); 

console.log(demo.color);

console.clear();

const pc = {
    cpuCores: 8,
    ram: 16,
    diskSpace: 512,
    diskType: 'ssd',
    os: 'win10'
};

console.log(pc.cpuCores);
console.log(pc.ram);

pc.ram = 32;
console.log(pc.ram);

pc.os = 'win98';
console.log(pc.os);

console.clear();

const student = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
    phoneNumbers: [],
    parents: [
        {
            name: 'Petras',
            age: 77,
            phoneNumbers: [111111111, 333333333],
        },
        {
            name: 'Ona',
            age: 66,
            phoneNumbers: [222222222, 4444444444, 9999999],
        },
    ],
};

console.log(student.name);
console.log(student.phoneNumbers.length); // Kiek Maryte turi telefono numeriu
console.log(student.parents.length); // Kiek Maryte turi tevu
console.log(student.parents[0].name); // Tevu vardas
console.log(student.parents[1].name);
console.log(student.parents[0].age); // Tevu amzius
console.log(student.parents[1].age); 
console.log(student.parents[0].phoneNumbers.length); // Kiek numeriu turi tevas
console.log(student.parents[1].phoneNumbers.length); 
console.log(student.parents[1].phoneNumbers[2]); // Mamos naujausas numeris

console.clear();

const name = 'Jonas';
const age = 99;
const isMarried = true;

const name1 = 'Maryte';
const age1 = 88;
const isMarried1 = false;

const student1 = ['Jonas', 99, true];
const student2 = ['Maryte', 88, false];
const student3 = ['Petras', false, 77];
const student4 = [true, 66, 'Ona'];

const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true
};

const stud2 = {
    age: 88,
    isMarried: false,
    name: 'Maryte',
};

console.log(stud1.name);
console.log(stud2.name);
