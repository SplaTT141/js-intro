// reikia patikrinti ar visi zenklai yra skaiciai
// reikia patikrinti ar skaiciu yra 4 arba 6

function validatePIN(pin) {
  if (isNaN(Number(pin))) {
    return false;
  }
  if (pin < 0) {
    return false;
  }
  if (pin.includes(".") || pin.includes("\n")) {
    return false;
  }
  if (pin.length === 4 || pin.length === 6) {
    return true;
  } else {
    return false;
  }

  return 0;
}

console.log(validatePIN("123 "));

console.log("-----------");

function DNAtoRNA(dna) {
  if (dna.includes("T")) {
    return dna.replaceAll("T", "U");
  }
}

console.log(DNAtoRNA("TTT"));

console.log("-----------");

function greet(language) {
  if (language === "english") {
    return "Welcome";
  }
  if (language === "czech") {
    return "Vitejte";
  }
  if (language === "danish") {
    return "Velkomst";
  }
  if (language === "dutch") {
    return "Welkom";
  }
  if (language === "estonian") {
    return "Tere tulemast";
  }
  if (language === "finnish") {
    return "Tervetuloa";
  }
  if (language === "flemish") {
    return "Welgekomen";
  }
  if (language === "german") {
    return "Willkommen";
  }
  if (language === "irish") {
    return "Failte";
  }
  if (language === "italian") {
    return "Benvenuto";
  }
  if (language === "latvian") {
    return "Gaidits";
  }
  if (language === "lithuanian") {
    return "Laukiamas";
  }
  if (language === "polish") {
    return "Witamy";
  }
  if (language === "spanish") {
    return "Bienvenido";
  }
  if (language === "swedish") {
    return "Valkommen";
  }
  if (language === "welsh") {
    return "Croeso";
  }
}

console.log(greet("english"));

console.log("-----------");

function smash(words) {
  return words.toString().replaceAll(",", " ");
}

console.log(smash(["hello", "world"]));

console.clear();
console.log("-----------");

function stringClean(s) {
  return s.replaceAll(/1|2|3|4|5|6|7|8|9|0/gi, "");
}
console.log(stringClean("12345698"));
console.log(stringClean("a12b13c"));

console.log("-----------");

function abbrevName(name) {
  const a = name.split(" ");
  const firstNameAbb = a[0][0];
  const secondNameAbb = a[1][0];

  return firstNameAbb.toUpperCase() + "." + secondNameAbb.toUpperCase();
}

console.log(abbrevName("Ernest Ivanov"));

console.log("-----------");

function noSpace(x) {
  return x.replaceAll(" ", "");
}

console.log(noSpace("8aaaaa dddd r     "));

console.log("-----------");

function disemvowel(str) {
  return str.replaceAll(/a|e|i|o|u/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));
//Ths wbst s fr lsrs LL!

console.log("-----------");

function dnaStrand(dna) {
  return dna
    .split("")
    .map((base) => {
      if (base === "A") return "T";
      if (base === "T") return "A";
      if (base === "C") return "G";
      if (base === "G") return "C";
    })
    .join("");
}

console.log(dnaStrand("ATTGC")); // TAACG
console.log(dnaStrand("AAAA"));

console.log("-----------");

function century(year) {
  if (year % 100 === 0) {
    return Math.floor(year / 100);
  }
  return Math.floor(year / 100 + 1);
}

console.log(century(1234));
console.log(century(1900));
console.log(century(2025));
console.log(century(101));
console.log(century(2));

console.log("-----------");
console.clear();

function maps(x) {
  let doubleX = 0;
  let list = [];
  for (i = 0; i < x.length; i++) {
    doubleX = x[i] * 2;
    console.log(doubleX);
    list.push(doubleX);
  }
  return list;
}

console.log(maps([1, 2, 3]));

console.log("-----------");

function invert(array) {
  let reversedNums = [];
  for (i = 0; i < array.length; i++) {
    reversedNums.push(array[i] * -1);
  }
  return reversedNums;
}

console.log(invert([1, -2, 3, -4, 5]));

const arrowFunc = function (arr) {
  return arr.map((el) => String.fromCharCode(el)).join("");
};

console.log(arrowFunc([84, 101, 115, 116, 75]));

console.log("-----------");

const booleanToString = (b) => (b ? "true" : "false");

// function booleanToString(b) {
//   if (b === true) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
console.log(booleanToString(false));

console.log("-----------");

function findSmallestInt(arr) {
  let arr1 = [];
  for (i = 0; i < arr.length; i++) {
    arr1.push(arr[i]);
    console.log(arr1);
  }
  let arr2 = arr1.join(", ");
  let arr3 = Number(arr2);
  console.log(typeof arr2);
  console.log(typeof arr3);
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));

console.log("----------");

function filter_list(l) {
  const onlyNums = [];

  for (i = 0; i < l.length; i++)
    if (typeof l[i] === "number") {
      onlyNums.push(l[i]);
    }

  return onlyNums;
}

console.log(filter_list([1, 2, "a", "b", 3]));

console.log("----------");

// function digitize(n) {
//   arr = [n];
//   for (i = 0; i < n.length; i++) {
//     arr += n[i];
//   }
//   arr.reverse()
//   return arr.reverse();
// }
// console.log(digitize(173));

// function digitize(n) {
//   const zzz = n.split("");
// }
// console.log(digitize(173));

console.log("----------");

function uniqueInOrder(iterable) {
  let separation = "";
  if (typeof iterable === "string") {
    separation = iterable.split("");
    return separation.filter((a, i) => separation[i - 1] !== a);
  } else {
    return iterable.filter((a, i) => iterable[i - 1] !== a);
  }
}

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]

console.log("----------");

function toJadenCase(sentence) {
  let splitSentence = sentence.toLowerCase().split(" ");
  for (let i = 0; i < splitSentence.length; i++) {
    splitSentence[i] =
      splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1);
  }
  return splitSentence.join(" ");
}

console.log(toJadenCase("laba diena"));
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
console.log(toJadenCase("most trees are blue"));

console.log("----------");
