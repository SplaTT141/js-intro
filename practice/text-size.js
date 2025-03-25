/*
reikalinga funkcija, kuri gauna teksta, kuri grazina rezultata,
priklausoma nuo teksto ilgdio.
- jei tuscia: 'tuscias tekstas'
- jei maziau 10: 'trumpas tekstas is N simboliu'
- jei maziau 20: ' tekstas is N simboliu'
- jei ilgesnis: 'ilgas tekstas is N simobliu'
*/

function textSize(text) {
    if (text.length === 0) {
        return `Tuscias tekstas`;
    }
    if (text.length < 10) {
        return `Trumpas tekstas is ${text.length} simboliu`;
    }
    if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu`;
    }
    if (text.length > 20) {
        return `Ilgas tekstas is ${text.length} simboliu`;
    }
}

console.log(textSize(''));
console.log(textSize('Labas'));
console.log(textSize('Labanakt'));
console.log(textSize('Virs desimt'));
console.log(textSize('Labas rytas, Lietuva! Ka tu?'));

