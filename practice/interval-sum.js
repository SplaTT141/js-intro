function intervalSum(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
}

console.log('1)', intervalSum(0, 100));
console.log('2)', intervalSum(-50, 50));
console.log('3)', intervalSum(-70, 30));
console.log('4)', intervalSum(574, 815));

console.log('5)', intervalSum(0, 0));
console.log('6)', intervalSum(0, 1));
console.log('7)', intervalSum(0, 2));
console.log('8)', intervalSum(0, 3));
console.log('9)', intervalSum(0, 4));
console.log('10)', intervalSum(0, 5));
console.log('11)', intervalSum(0, 6));
console.log('12)', intervalSum(0, 10));
console.log('13)', intervalSum(0, 1000));
console.log('14)', intervalSum(0, 10_000));
console.log('15)', intervalSum(0, 10_000_000));