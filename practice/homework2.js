//if array
//1

const arr = [1, 2, 3, 4];

if (arr.includes(3)) {
    console.log(`Sarase yra pateiktas skaicius`);
}   else {
    console.log(`Sarase nera pateikto skaiciaus`);
} 

//2

const arr2 = [];

if (arr2.length === 0) {
    console.log('Masyvas yra tuscias')
}   else {
    console.log('Masyvas nera tuscias');
}

//3

const arr3 = [1, -2, 3, -4];

if (arr3[0] > 0 || arr3[1] > 0 || arr3[2] > 0 || arr3[3] > 0) {
    console.log('Sarase yra sveikuju skaiciu');
}   else {
    console.log('Sarase nera sveikuju skaiciu');
}

//4

const arr4 = [2, 4, 6];

if (arr4[0] % 2 === 0 && arr4[1] % 2 === 0 && arr4[2] % 2 === 0 ) {
    console.log('Visi saraso skaiciai yra lyginiai')
} else {
    console.log('Ne visi saraso skaiciai yra lyginiai')
}

//5 

const arr5 = [3, 5, -2];

if (arr5[0] < 0 || arr5[1] < 0 || arr5[2] < 0) {
    console.log('Sarase yra neigiamu skaicius')
} else {
    console.log('Sarase nera neigiamu skaiciu')
}

//6

const arr6 = [1, 3, 5];

if (arr6[0] > arr6[2]) {
    console.log('Pirmas skaicius yra didesnis uz paskutini')
} else {
    console.log('Pirmas skaicius nera didesnis uz paskutini')
}

//7

const arr7 = [1, 2, 3, 4, 5, 6]

if (arr7.length > 5) {
    console.log('Sarasas yra ilegnis uz 5')
}   else {
    console.log('Sarasas yra trumpesnis uz 5');
}

//8

const arr8 = ['obuolys', 'bananas', 'vysnia'];

if (typeof arr8[0] === 'string' && typeof arr8[1] === 'string' && typeof arr8[2] === 'string') {
    console.log('Visi saraso kintamieji yra teksto tipo');
} else {
    console.log('Ne visi saraso kintamieji yra teksto tipo');  
}

//9

const arr9 = [2, 5, 12, 4];

if (Math.max(...arr9) > 10) {
    console.log(`Didziausias skaicius yra : ${Math.max(...arr9)} ir jis yra > 10`);
}   else {
    console.log(`Didziausias skaicius yra : ${Math.max(...arr9)} ir jis yra < 10`)
}

//10
                
// const arr10 = [2, 2, 2, 2, 2, 5, 6];

console.clear();

// if

//1

const num = 3;

if (num === 3) {
    console.log('Teigiamas');
}

//2 

const num1 = 15;

if (num1 % 5 === 0) {
    console.log('Skaicius dalijasi is 5');
}

//3

const text = 'abrikosas';

if (text.length >5 ) {
    console.log('Zodyje daugiau negu 5 zodziai');
}

//4

const personeAge = 20;

if (personeAge >= 18) {
    console.log("Asmuo gali balsuoti");
}

//5

const personeAge1 = 15;

if (personeAge1 >= 13 && personeAge1 <=19) {
    console.log('Paauglys');
}

//6

const num2 = 7;

if (num2 % 2 === 0) {
    console.log('Sis skaicius yra lyginis')
}   else {
    console.log('Sis skaicius nera lyginis')
}

//7

const text1 = 'JavaScript';

if (text1 === 'JavaScript') {
    console.log(`Teksto kintamasis '${text1}' yra lygis 'JavasScript'`)
}

//8

const num3 = 15

if (num3 >= 10 && num3 <=20) {
    console.log(`${num3} yra tarp 10 ir 20`);
}

//9

const num4 = 150;

if (num4 >= 100) {
    console.log(`Skaicius ${num4} yra didesnis arba lygus uz 100`)
}

console.clear();

// funkcijos

//1

function fun(n) {
    if (n > 0) {
        return `Skacius ${n} yra teigiamas`
    } else {
        return `Skaicius ${n} yra neigiamas`
    }
}

console.log(fun(2))

//2 

function fun1(n1) {
    return `Skaiciaus ${n1} kvadratas yra: ${n1 * n1}`;
}

console.log(fun1(11));

//3

function fun2(n2, n3) {
    if (n2 > n3) {
        return n2;
    } else if (n2 < n3) {
        return n3;
    } else {
        return 'Skaiciai yra lygus';
    }
}

console.log(fun2(14, 11));

//4 

function fun3(t) {
    if (t === 'JavaScript') {
        return 'Eiluteje yra zodis "JavaScript"'
    }
}

console.log(fun3('JavaScript'));

//5

function fun4(n4) {
    if (n4 % 2 === 0) {
        return `Skacius ${n4} yra lyginis`
    } else {
        return `Skaicius ${n4} yra nelyginis`
    }
}

console.log(fun4(4));

//6

function fun5(variable) {
    if (typeof variable === 'number' && variable >= 0) {
        return variable - variable - variable;
    } else if (typeof variable === 'number' && variable < 0) {
        return variable - variable - variable;
    }

    if (typeof variable === 'string' && variable.length === 4) {
        return variable[3] + variable[2] + variable[1] + variable[0];
    } else if (typeof variable === 'string' && variable.length === 5) {
        return variable[4] + variable[3] + variable[2] + variable[1] + variable[0];
    } else {
        return `Ivestas zodis su netinkamu skaiciumi simboliu`
    }
}

console.log(fun5(2))
console.log(fun5(-10))
console.log(fun5('Jana'))
console.log(fun5('Jonas'))

//7 a

function fun6(area) {
    return `Staciakampio plitas yra: ${area[0] * area[1]}`;
}

console.log(fun6([2, 4]));

//7 b

function fun7(side1, side2) {
    return `Staciakampio plitas yra: ${side1 * side2}`;
}

console.log(fun7(4, 8));

//8

function fun8(num5) {
    if (num5 % 3 === 0) {
        return `Skaicius ${num5} dalijasi is 3`
    } else {
        return `Skaicius ${num5} nesidalija is 3`
    }
}

console.log(fun8(9));

//9

function fun9(t1) {
    if (t1[0] === 'a') {
        return `Teksto tipo kintomasis prasideda raide 'a'` ;
    } else {
        return 'Teksto tipo kintamasis neprasideda raide "a"';
    }
}

console.log(fun9('atrakcionas'))

//10

function fun10(n5, n6, n7) {
    return `Siu skaiciu vidurkis yra: ${(n5 + n6 + n7) / 3}`
}

console.log(fun10(3, 2, 4));

//11

function fun11(t2) {
    return t2.length;
}

console.log(fun11('Abrikosas'));

//12

function fun12(t3, t4) {
    return t3 + t4;
}

console.log(fun12('Labas', 'rytas'));

//13

function fun13(n8) {
    if (n8 >= 1 && n8 <=3) {
        return true;
    } else {
        return false;
    }
}

console.log(fun13(2));