const marks = [10, 2, 8, 4, 6];

let sum = 0
for (const n of marks) {
    sum += n;
}

console.log(sum);

const sum2 = marks.reduce((total, n) => total + n);
console.log(sum2);

const minus = marks.reduce((total, n) => total - n);
console.log(minus);

const sum3 = marks.reduce((total, n) => total + n, 0); // su 0 nurodome nuo kokio skaiciaus pradet skaciavimus
console.log(sum3);

const minus2 = marks.reduce((total, n) => total - n, 0);
console.log(minus2);

const multi = marks.reduce((total, n) => total * n, 1);
console.log(multi);

const divide = marks.reduce((total, n) => total / n, 1);
console.log(divide);

const names = ['Jonas', 'Petras', 'Maryte', 'Ona'];

let abbr = '';
for (const name of names) {
    abbr += name[0] + '.'
}

console.log(abbr);

const abbr2 = names.reduce((total, name) => total + name[0] + '.', '');
console.log(abbr2);






