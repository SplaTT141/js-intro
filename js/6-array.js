/*
ARRAY - sarasas, Arejus, matrica, masyvas, list'as, rinkinys
*/

const empty = [];
console.log(empty);

const luckyNumbers = [7, 777, 13, 666, 8, 2];
console.log(luckyNumbers);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);

console.log(luckyNumbers[0] + luckyNumbers[1] + luckyNumbers[4]);

const firstNumber = luckyNumbers[0];
console.log(firstNumber);

console.clear();

const numbers = [10, 2, 8, 4, 6];
const totalSum1 = numbers[0] + numbers[1] + numbers[2] + numbers[3] + 
numbers[4];
console.log(totalSum1);

let totalSum2 = 0;
console.log(totalSum2);

totalSum2 += numbers[0];
console.log(totalSum2);

totalSum2 += numbers[1];
console.log(totalSum2);

totalSum2 += numbers[2];
console.log(totalSum2);

totalSum2 += numbers[3];
console.log(totalSum2);

totalSum2 += numbers[4];
console.log(totalSum2);

let totalSum3 = 0
totalSum3 += numbers[0];
totalSum3 += numbers[1];
totalSum3 += numbers[2];
totalSum3 += numbers[3];
totalSum3 += numbers[4];
console.log(totalSum3);

const dictionary = ['pomidoras', 'agurkas', 'bulve', 'kefyras',
'druska', 'svogunu laiskai', 'lasiniai'];

// Patiekalui reikes: a, b, c, d.

const sentence1 = 'Patiekalui reikes: ' + dictionary[0] + ', '
+ dictionary[1] + ', ' + dictionary[2] + ', ' + dictionary[3] + ', '
+ dictionary[4] + ', ' + dictionary[5] + ', ' + dictionary[6]+ '.' ;
console.log(sentence1);

console.clear();

let index = 0;
let sentence2 = 'Patiekalui reikes: ';

sentence2 += dictionary[index] + ', '; 

index += 1;
sentence2 += dictionary[index] + ', '; 

index += 1;
sentence2 += dictionary[index] + ', '; 

index += 1;
sentence2 += dictionary[index] + ', '; 

index += 1;
sentence2 += dictionary[index] + ', '; 

index += 1;
sentence2 += dictionary[index] + ', '; 

index += 1;
sentence2 += dictionary[index] + '.'; 

console.log(sentence2);

let k = 0;
k = k + 1;
k += 1;
k++;
++k;

console.log(k);

console.clear();

let i = 0;
let sentence3 = 'Patiekalui reikes: ';

sentence3 += dictionary[i++] + ', ';
sentence3 += dictionary[i++] + ', ';
sentence3 += dictionary[i++] + ', ';
sentence3 += dictionary[i++] + ', ';
sentence3 += dictionary[i++] + ', ';
sentence3 += dictionary[i++] + ', ';
sentence3 += dictionary[i++] + '.';

console.log(sentence3);

console.clear();

let j = -1;
let sentence = 'Patiekalui reikes: ';

sentence += dictionary[++j] + ', ';
sentence += dictionary[++j] + ', ';
sentence += dictionary[++j] + ', ';
sentence += dictionary[++j] + ', ';
sentence += dictionary[++j] + ', ';
sentence += dictionary[++j] + ', ';
sentence += dictionary[++j] + '.';

console.log(sentence);