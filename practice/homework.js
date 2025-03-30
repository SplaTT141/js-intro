// ND: Surasyti visas imanomas kombinacijas, su && ir ||, kai
// naudojamas 4 boolean reiksmes.

// ND: kiek gavosi kombinaciju?

// console.log(false && false && true && false);

/*
Kintamųjų inicijavimas

Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į 

Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console

Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console ??????????????????????????????

Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

const n1 = 1
console.log(n1);

const n2 = 2
console.log(n2);

const n3 = 3
console.log(n3);


const l1 = 'Jonas';
console.log(l1);

const l2 = 'Petras';
console.log(l2);

const l3 = 'Ona';
console.log(l3);


const numberList1 = [1 , 2, 3, 4, 5];
console.log(numberList1);

const numberList2 = [6, 7, 8, 9, 10];
console.log(numberList2);

const numberList3 = [11, 12, 13, 14, 15];
console.log(numberList3);

console.clear()

const nameList1 = ['Jonas', 'Benas', 'Petras', 'Danute', 'Egle'];
console.log(nameList1);

const nameList2 = ['Irena', 'Bebras', 'Kestutis', 'Petriukas', 'Ernestas'];
console.log(nameList2);

const nameList3 = ['Rimas', 'Rimantas', 'Saulius', 'Alvydas', 'Suo'];
console.log(nameList3);

console.clear();

/*
Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console

Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console

Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console

Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

console.log(n1 + n2 + n3);

console.log(l1 + ' ' + l2 + ' ' + l3);

console.log(numberList1[0] - numberList1[1] + numberList1[2] - numberList1[3] + numberList1[4]);
console.log(numberList2[0] - numberList2[1] + numberList2[2] - numberList2[3] + numberList2[4]);
console.log(numberList3[0] - numberList3[1] + numberList3[2] - numberList3[3] + numberList3[4]);

console.log(nameList1[4] + ', ' + nameList1[3] + ', ' + nameList1[2] + ', ' + nameList1[1] + ', ' + nameList1[0]);

console.log('--------------------------------');

const student1 = ['Jonas', 8, 9, 1, 4, 7];
const student2 = ['Rimas', 5, 3 ,2 ,1, 1];
const student3 = ['Marius', 2, 1, 1, 1, 3];

function studentAvarage (student) {
    console.log('Mokinio vardas ' + student[0]);
    const avarage = (student[1] + student[2] + student[3] + student[4] + student[5]) / 5;
    if (avarage >= 3.5) {
        console.log(`Islaikyta! Pazymiu vidurkis yra: ${avarage}`);
    }   else {
        console.log(`Neislaikyta! Pazymiu vidurkis yra: ${avarage}`);
            const avarageWithAdditional10 = (avarage * 5 + 10) / 6;
            if (avarageWithAdditional10 >= 3.5) {
                console.log(`Gavus 10, kursas butu islaikytas, vidurkis butu: ${avarageWithAdditional10}`)
            }   else {
                console.log('Nepadetu net papildomas 10');
            }
    }
}

studentAvarage(student1);
studentAvarage(student2);
studentAvarage(student3);

console.clear();

const movie1 = ['Filmas 1', 'comedy', 7];
const movie2 = ['Filmas 2', 'drama', 10];
const movie3 = ['Filmas 3', 'thriller', 8];
const movie4 = ['Filmas 4', 'action', 2];
const movie5 = ['Filmas 5', 'romance', 4];

const favGenre = 'action';
const movieRating = 8;

function movieRecommendation() {

    let movieFound = false;

    if (movie1[1] === favGenre || movie1[2] >= movieRating) {
        console.log('Sis filmas jums turetu patikti: ' + movie1[0]);
        movieFound = true;
    }
    if (movie2[1] === favGenre || movie2[2] >= movieRating) {
        console.log('Sis filmas jums turetu patikti: ' + movie2[0]);
        movieFound = true;
    }
    if (movie3[1] === favGenre || movie3[2] >= movieRating) {
        console.log('Sis filmas jums turetu patikti: ' + movie3[0]);
        movieFound = true;
    }
    if (movie4[1] === favGenre || movie4[2] >= movieRating) {
        console.log('Sis filmas jums turetu patikti: ' + movie4[0]);
        movieFound = true;
    }
    if (movie5[1] === favGenre || movie5[2] >= movieRating) {
        console.log('Sis filmas jums turetu patikti: ' + movie5[0]);
        movieFound = true;
    }
    if (movieFound === false) {
        console.log('Joks is pateiktu filmu jums nepatiktu')
    }
}

movieRecommendation();

console.clear();

const k1 = 24
const k2 = 27

if (k1 > k2) {
    console.log(`Disdesnis skaicius yra: ${k1}`);
}  else if (k1 < k2) {
    console.log(`Didesnis skaicius yra ${k2}`);
}
if (k1 > k2) {
    console.log(`Mazesnis skaicius yra: ${k2}`);
}  else if (k1 < k2) {
    console.log(`Mazesnis skaicius yra ${k1}`);
}
if (k1 === k2) {
    console.log (`Skaiciai yra lygus`);
}  else  if (k1 !== k2) {
    console.log('Skaiciai yra nelygus');
}
if (k1 >= k2) {
    console.log(`Didesnis arba lygus skaicius yra: ${k1}`);
} else if (k1 <= k2) {
    console.log(`Didesnis arba lygus skaicius yra: ${k2}`);
}

console.clear();

const word1 = "Abrikosas";
const word2 = "Automobilis";

console.log(word1.length, word2.length);

if (word1.length > word2.length) {
    console.log(`Didesni raidziu skaiciuturi zodis: ${word1}`);
}  else if (word1.length < word2.length) {
    console.log(`Mazesni raidziu skaiciuturi zodis: ${word2}`);
}
if (word1.length > word2.length) {
    console.log(`Mazesni raidziu skaiciuturi zodis: ${word2}`);
}  else if (word1.length < word2.length) {
    console.log(`Mazesni raidziu skaiciu turi zodis: ${word1}`);
}
if (word1.length === word2.length) {
    console.log (`Zodziu raidziu skaicius yra nelygus`);
}  else  if (word1.length !== word2.length) {
    console.log('Zodziu raidziu skaicius yra lygus');
}
if (word1.length >= word2.length) {
    console.log(`Didesni arba lygu raidziu skaiciu turi zodis: ${word1}`);
} else if (word1.length <= word2.length) {
    console.log(`Didesni arba lygu raidziu skaiciu turi zodis: ${word2}`);
}

console.clear();

const wordList1 = ['naminis', 'pomidorinis'];
const wordList2 = ['giedra', 'apsiniauke'];

const wordList1LetterCount = wordList1[0].length + wordList1[1].length;
const wordList2LetterCount = wordList2[0].length + wordList2[1].length;

if (wordList1LetterCount > wordList2LetterCount) {
    console.log(`Didesni raidziu skaiciu turi sarasas: ${wordList1LetterCount}`);
}  else if (wordList1LetterCount < wordList2LetterCount) {
    console.log(`Mazesni raidziu skaiciu turi sarasas: ${wordList2LetterCount}`);
}
if (wordList1LetterCount > wordList2LetterCount) {
    console.log(`Mazesni raidziu skaiciu turi sarasas: ${wordList2LetterCount}`);
}  else if (wordList1LetterCount < wordList2LetterCount) {
    console.log(`Mazesni raidziu skaiciu turisarasass: ${wordList1LetterCount}`);
}
if (wordList1LetterCount === wordList2LetterCount) {
    console.log (`Sarasu raidziu skaicius yra lygus`);
}  else  if (wordList1LetterCount !== wordList2LetterCount) {
    console.log('Sarasu raidziu skaicius yra nelygus');
}
if (wordList1LetterCount >= wordList2LetterCount) {
    console.log(`Didesni arba lygu raidziu skaiciu turi sarasas: ${wordList1LetterCount}`);
} else if (wordList1LetterCount <= wordList2LetterCount) {
    console.log(`Didesni arba lygu raidziu skaiciu turi sarasas: ${wordList2LetterCount}`);
}

console.clear();

// Funkcija

function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

console.clear();

// function daugyba(skaicius1, skaicius2) {
//     let rezultatas = skaicius1 * skaicius2;
//     return rezultatas;
// }

// console.log(daugyba(10,11));
// console.log(daugyba(1, 1));

function skaitmenuKiekisSkaiciuje(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return 'Pateikta netinkamo tipo reiksme';
    }

    const skaitmenuKiekis = num.toString();
    return skaitmenuKiekis.length; 
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

console.clear();

function didziausiasSkaiciusSarase(array) {
    if (typeof array === 'undefined') {
        return 'Pateiktas sarasas negali buti tuscias';
    }

    if (typeof array !== 'Array') {
        return 'Pateikta netinkamo tipo reiksme'
    }
}

console.log(didziausiasSkaiciusSarase([1, 2]));
console.log(didziausiasSkaiciusSarase());
console.log(didziausiasSkaiciusSarase('a'));
console.log(didziausiasSkaiciusSarase(1));

console.clear();

// Ciklas

 for (let i = 0; i < 11; i++) {
    console.log(i);
 }

 console.clear();

 for (let i = 11; i > 0; i--) {
    console.log(i);
 }

 console.clear();

 for (let i = 0; i < 21; i += 2) {
    console.log(i);
 }

 console.clear();

 for (let i = 0; i < 21; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
 }

 console.clear();

 for (let i = 0; i < 11; i++) {
    console.log(i*i);
 }

console.clear();

for (let i = 0; i < 11; i++) {
    console.log(i*i*i);
}

console.clear();

for (let i = 0; i < 11; i++) {
    console.log('7 *', i, '=', 7 * i);
}

console.clear();

for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(i));
}

console.clear();

for (let i = 5; i > 0; i--) {
    console.log('*'.repeat(i));
}

console.clear();

for (let i = 0; i < 51; i++) {
    if (i % 3 === 0) {     
        console.log(i);
    }
}

console.clear();

for (let i = 0; i <= 50; i++) {
    if (i % 5 === 0) {     
        console.log(i);
    }
}

console.clear();
console.log('------------------');

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        console.log(i);
}

console.clear();
console.log('------------------');

for (let i = 0; i < 5; i++) {
    console.log('Hello, World!');
}

console.clear();
console.log('------------------');

//1

for (let i = 1; i <= 100; i++) {
    if (i % 4 === 0) {
        console.log(i + ' Fizz')
    } else {
        console.log(i);  
    }
}

console.clear();
console.log('------------------');

//2

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i + ' Fizz');
    }
    else if (i % 5 === 0) {
        console.log(i + ' Buzz');
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + ' FizzBuzz');
    } else {
        console.log(i);
    }
}

console.clear();
console.log('------------------');

//4

for (let i = 1; i <=20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' Even');
    }
    
    if (i % 2 !== 0) {
        console.log(i + ' Odd');
    }
}

console.clear();
console.log('------------------');

//5

for (let i = 0; i <= 10; i++) {
    console.log(i, '* 8 =' , i * 8);
}

console.clear();
console.log('------------------');

//6

for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        console.log(i);     
    }
}

console.clear();
console.log('------------------');

//3

// let x = 1;
// let y = 2;
// let z = 0;

// for (let i = 1; i <= 10; i++) {
//     if (i === 1) {
//         console.log(x);
//     } else if (i === 2) {
//         console.log(y);
//     } else {
//         z = x + y;
//         x = y;
//         y = z;
//         console.log(z);
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     console.log('a'.repeat(i));
// }

