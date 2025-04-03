//1

let sum = 0

for (let i = 5; i <=15; i++) {
    console.log(sum += i); // console.log(sum = sum + i)
}

//2 
console.log('-'.repeat(20))

const t = 'Vakaras' 

for (let i = 0; i < t.length; i++) {
    console.log(t[i]);
}

//3 
console.log('-'.repeat(20))

for (let i = 0; i <= 10; i++) {
    console.log(`${6} * ${i} = ${6 * i}`);
}

//4
console.log('-'.repeat(20))

for (let i = 5; i >= 0; i--) {
    console.log(i);

    if (i === 0) {
        console.log('BOOM');
    }
}

