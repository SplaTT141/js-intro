// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);

// for (let i = 0; i < 4; i++) {
//     console.log(1);
// }

// const arr = ['a', 'b', 'c'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//uzduotis
// function squareSum(numbers){
//     let sum = 0;
    
//     for (i = 0; i < numbers.length; i++) {
//     //   sum = sum + (numbers[i] * numbers[i]);
//       sum += (numbers[i] * numbers[i]);
//     }
//     return sum;
//   }

// console.log(squareSum([0, 3, 4, 5]));

//uzduotis 2

// function grow(x){

//     let result = 1
    
//     for (i = 0; i < x.length; i++) {
//     //   result *= x[i];
//       result = result * x[i]
//     }
//     return result;
//   }

//   console.log(grow([4, 1, 1, 1, 4])) // 16
//   console.log(grow([2, 2, 2, 2, 2, 2])) // 64

  //uzduotis 3

  function countPositivesSumNegatives(input) {
    if (input === [] || input === null) {
        return [];
    }

    let biggestNum = 0;
    let count = 0;

    for (i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            biggestNum++
        } else if (input[i] < 0) {
            count += input[i];
        }
    }
    return [biggestNum, count]
  }

  console.log(countPositivesSumNegatives([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, -11, -12, -13, -14, -15])); // [12, -65]
  console.log(countPositivesSumNegatives([])); 
  console.log(countPositivesSumNegatives(null)); 