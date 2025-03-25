/* 
Reikalinga funkcija, kuri gauna vartotoja amziu (metais) ir atitnikamai
grazina zodi:
- suauges
- vaikas
Amziaus ribos kriterijus: >= 18 metu.
*/

function isAdult(age) {
    if (age >= 18) {
        return 'suauges';
    }   else {
        return 'vaikas';
    }
}

console.log(isAdult(99), '-->', 'suages');
console.log(isAdult(18), '-->', 'suages');
console.log(isAdult(12), '-->', 'vaikas');
