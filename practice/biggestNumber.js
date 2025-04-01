function biggestNumber(list) {
    if (!Array.isArray(list)) {
        return 'Duomenys turi buti sarase'
    }

    if (!list.length) { // list.length === 0
        return 'Sarasas yra tuscias';
    }

    let biggest = -Infinity;
    
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number') {
            continue;
        }

        if (!isFinite(list[i])) { // tikrina ar skaicius yra baigtinis
            continue;
        }

        if (list[i] > biggest) {
            biggest = list[i];
        }
    }

    return biggest;
}

console.log(biggestNumber(1));
console.log(biggestNumber('labas'));
console.log(biggestNumber([]));

console.log(biggestNumber([4]), '-->', 4);
console.log(biggestNumber([1, 2]), '-->', 2);
console.log(biggestNumber([1, 2, 3]), '-->', 3);
console.log(biggestNumber([3, 2, 1]), '-->', 3);
console.log(biggestNumber([2, 3, 1]), '-->', 3);
console.log(biggestNumber([77, 45, 124]), '-->', 124);
console.log(biggestNumber([-77, -45, -124]), '-->', -45);

console.log(biggestNumber([1, 2, 'opa']));
console.log(biggestNumber(['opa', 1, 2]));
console.log(biggestNumber([1, 'opa', 2]));

console.log(biggestNumber([-1, -2, true])); // true ir false interpretuoja kaip 1
console.log(biggestNumber([true, -1, -2]));
console.log(biggestNumber([-1, true, -2]));
console.log(biggestNumber([-1, -2, false]));
console.log(biggestNumber([false, -1, -2]));
console.log(biggestNumber([-1, false, -2]));

console.log(biggestNumber([-1, -2, -Infinity]));
console.log(biggestNumber([-Infinity, -1, -2]));
console.log(biggestNumber([-1, -Infinity, -2]));

console.log(biggestNumber([-0.5, -2, Infinity]));
console.log(biggestNumber([Infinity, -0.5, -2]));
console.log(biggestNumber([-0.5, Infinity, -2]));

console.log(biggestNumber([-1, -2, NaN]));
console.log(biggestNumber([NaN, -1, -2]));
console.log(biggestNumber([-1, NaN, -2]));


console.clear();

function betterThanAverage(classPoints, yourPoints) {
    let averageGrade = 0
      for (let i = 0; i < classPoints.lenght; i++) {
        averageGrade = classPoints[i];   
      }
  }

console.log(averageGrade);