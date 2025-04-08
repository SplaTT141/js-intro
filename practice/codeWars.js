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