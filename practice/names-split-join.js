/*
Funkcija gauna sakini, kuris atrodo taip:
"Siuo metu klaseje yra: jonas, Maryte, peTRas, ONA."
funkcijos darbas yra grazinti teisingai perrasyta sakini.
t.y. reikia istaisyti vardu rasyma.
Pvz.: "Siuo metu klaseje yra: Jonas, Maryte, Petras, Ona"
*/

/* planas:
- atiskiriame vardus is originalaus teksto
- konvertuojame teksta i mazasias raides
- issiskaidyti individualius vardus i masyva
- ciklas eina per individualius vardus ir:
    - pasiima pirma raide
    - ja padidina
    - apjungia i galutini normalu varda
- pagaminame galutini reikiama sakini
*/

function correctSentence(text) {
    const  parts = text.split(': ');
    const names = parts[1]
        .slice(0, -1)
        .toLowerCase()
        .split(', '); // pasalinam taska gale, mazinam raides ir padalinam i vardus

    for (i = 0; i < names.length; i++){
        const name = names[i];
        const firstLetter = name[0].toUpperCase();
        const restName = name.slice(1);
        console.log(name, '---', firstLetter + restName);
        
        const newName = firstLetter + restName;
        names[i] = newName;
    }

    console.log(names);

    return parts[0] + ': ' + names.join(', ') + '.';
}

console.log(correctSentence('Siuo metu klaseje yra: jonas, Maryte, peTRas, ONA.'));
