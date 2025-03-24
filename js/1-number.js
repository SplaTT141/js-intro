/*
Kintamuju iniciavimas:
- const (default)
- let (kai reiksme turi tureti galimybe kisti)
- var (nenaudoti, nebent zinai ka darai)

Number

skaiciu tipai:
- sveikieji, desimtainiai
- teigiami, neigiami
- infinity, -infinity (teigiami, neigiami)
- NaN (skaiciaus tipo klaida)

aritmetiniai operatoriai:
- +, - , *, /, **, % (kelimas laipsniu),
% (dalybos liekana)
aritmetiniai priskirimo operatoriai:
- +=, -= , *=, /=, **=, %= (kelimas laipsniu),
% (dalybos liekana)
*/

const a = 1;
console.log(a);

const b = 9999;
console.log(b);
console.log (a + b);

const c = a + b;
console.log(c);

const n1 = 7 + 5; 
console.log(n1);

const n2 = 7 - 5; 
console.log(n2);

const n3 = 7 * 5; 
console.log(n3);

const n4 = 7 / 5; 
console.log(n4);

const n5 = 7 ** 5;
console.log(n5);

const n6 = 7 % 5;
console.log(n6);

console.log("-----------------");

let age = 99;
console.log(age);

age = 100;
console.log(age);

console.clear();

let sum = 10;
console.log(sum);

sum = sum + 5;
console.log(sum);

sum = sum * 5;
console.log(sum);

sum = sum ** 5;
console.log(sum);

sum = sum % 5;
console.log(sum);

let sum2 = 10;
console.log(sum2);

sum2 += 1;
console.log(sum2);

sum2 -= 2;
console.log(sum2);

sum2 *= 3;
console.log(sum2);
