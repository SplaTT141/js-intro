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

console.log('-----------')
const a = 0.25
const b = .25
const c = 125

console.log(Number.isInteger(a));
console.log(Number.isInteger(b));
console.log(Number.isInteger(c));