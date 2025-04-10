// reikia patikrinti ar visi zenklai yra skaiciai
// reikia patikrinti ar skaiciu yra 4 arba 6  


function validatePIN (pin) {

    if (isNaN(Number(pin))) {
        return false;
    }
    if (pin < 0) {
        return false;
    }
    if (pin.includes('.') || pin.includes('\n')) {
        return false;
    }
    if (pin.length === 4 || pin.length === 6) {
        return true;
    } else {
        return false;
    }

    return 0;
  }

    console.log(validatePIN("123 "),)

console.log('-----------');

function DNAtoRNA(dna) {
    if (dna.includes('T')) {
        return dna.replaceAll('T', 'U')
    }
}

console.log(DNAtoRNA('TTT'))

console.log('-----------');

function greet(language) {
	if (language === 'english') {
    return 'Welcome';
  }
  	if (language === 'czech') {
    return 'Vitejte';
  }
  	if (language === 'danish') {
    return 'Velkomst';
  }
  	if (language === 'dutch') {
    return 'Welkom';
  }
  	if (language === 'estonian') {
    return 'Tere tulemast';
  }
  	if (language === 'finnish') {
    return 'Tervetuloa';
  }
  	if (language === 'flemish') {
    return 'Welgekomen';
  }
  	if (language === 'german') {
    return 'Willkommen';
  }
  	if (language === 'irish') {
    return 'Failte';
  }
  	if (language === 'italian') {
    return 'Benvenuto';
  }
    	if (language === 'latvian') {
    return 'Gaidits';
  }
    	if (language === 'lithuanian') {
    return 'Laukiamas';
  }
    	if (language === 'polish') {
    return 'Witamy';
  }
    	if (language === 'spanish') {
    return 'Bienvenido';
  }
      	if (language === 'swedish') {
    return 'Valkommen';
  }
      	if (language === 'welsh') {
    return 'Croeso';
  }
}

console.log(greet('english'))

console.log('-----------');

function smash (words) {
    return words.toString().replaceAll(',', ' ');
};


console.log(smash(['hello', 'world']));

console.clear();
console.log('-----------');

function stringClean(s){
    return s.replaceAll(/1|2|3|4|5|6|7|8|9|0/ig, '');     
}
  console.log(stringClean('12345698'))
  console.log(stringClean('a12b13c'))

  console.log('-----------');

  function abbrevName(name){

    const a = name.split(' ')
    const firstNameAbb = a[0][0]
    const secondNameAbb = a[1][0]
    
    return firstNameAbb.toUpperCase() + '.' + secondNameAbb.toUpperCase() 
  }

  console.log(abbrevName('Ernest Ivanov'))

console.log('-----------');

function noSpace(x){
  return x.replaceAll(' ', '');
}

console.log(noSpace('8aaaaa dddd r     ')) 

console.log('-----------');

function disemvowel(str) {
  return str.replaceAll(/a|e|i|o|u/ig, '');
}

console.log(disemvowel("This website is for losers LOL!"))
//Ths wbst s fr lsrs LL!

console.log('-----------');

function dnaStrand(dna) {
  return dna.split('').map(base => {
    if (base === 'A') return 'T';
    if (base === 'T') return 'A';
    if (base === 'C') return 'G';
    if (base === 'G') return 'C';
  }).join('');
}

console.log(dnaStrand('ATTGC')) // TAACG
console.log(dnaStrand('AAAA'))

console.log('-----------');


function century(year) {
  if (year % 100 === 0) {
    return Math.floor(year / 100)
  }
    return Math.floor(year / 100 + 1);
  }
  
console.log(century(1234))
console.log(century(1900))
console.log(century(2025))
console.log(century(101))
console.log(century(2))

console.log('-----------');

