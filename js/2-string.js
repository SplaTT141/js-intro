/*
string- tekstas, simboliu grandinele

tekstines reiksmes iniciavimas:
- ' (vienguba kabute)
- " (dviguba kabute)
- ` (backtick)

Specialieji simboliai:
- \ (privercia sekanti simboli buti spausdintinu)
- \r (return, kursorius grizta i eilutes pradzia)
- \n (new line, kursorius nusileidzia viena eilute zemun)
- \t (tab)
*/

const a = "Labas";
console.log(a);

//vienguba kabute tekste

const k1 = "'";
console.log(k1);

//dviguba kabute tekste

const k2 = '"';
console.log(k2);

const name = "Jonas";
const surname = "Jonaitis";
const fullname = name + " " + surname;

console.log(fullname);

//vienguba ir dviguba kabutes
const k12 = "Vienguba (')" + ' Dviguba (")';
console.log(k12);

//vienguba (') kabute.
const k3 = 'Vienguba (\') kabute.';
console.log(k3);

//dviguba (") kabute.
const k4 = "Dviguba (\") kabute.";
console.log(k4);

//vienguba ir dviguba kabutes

const k5 = 'Vienguba (\') kabute, Dviguba (\") kabute.';
console.log(k5);

const backSlash1 = "\\";
const backSlash2 = '\\\\';

console.log(backSlash1);
console.log(backSlash2);

console.clear();

/* Multiline tekstas
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/

const html = "<header>\r\n\
\<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t</nav>\r\n\
</header>";

console.log(html);

console.log('------------------');

const html2 = "<header>\n\
\<img>\n\
\t<nav>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t</nav>\n\
</header>";

console.log(html2)

console.log('------------------');

const html3 = "<header>\r\
\<img>\r\
\t<nav>\r\
\t\t<a></a>\r\
\t\t<a></a>\r\
\t\t<a></a>\r\
\t</nav>\r\
</header>";

console.log(html3)

console.log('------------------');

console.log('randome text with \t tab in it \n and new line');

console.clear();

const b1 = `Vienguba (') kabute.`;
console.log(b1);

const b2 = `Dviguba (") kabute.`;
console.log(b2);

const b3 = `Vienguba (') ir dviguba (") kabute.`;
console.log(b3);

const b4 = `Backtick (\`)`;
console.log(b4);

const b5 = `<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>`;
console.log(b5);


// Maryte yra viena is keturiu legendiniu studentu.
const studentName = "Maryte";
const amount = 4;
const student = studentName + ' yra viena/s is ' + amount + ' legendiniu studentu';

console.log(student);

const student2 = `${studentName} yra viena/s is ${amount} legendiniu studentu`;

console.log(student2);

console.clear();

const word = 'pomidoras';
const wordSymbolCount = word.length;

console.log(word);
console.log(wordSymbolCount);
const textSize = "aaaaaaaaaaaaaaaaa".length;
console.log(textSize);

console.clear()

const age = 9879;
const ageDigitsCount = ('' + age).length;
console.log(ageDigitsCount);

const ageDigitsCount2 = age.toString().length;
console.log(ageDigitsCount2);

console.clear();

const text = 'Kebabas';
const firstSymbol = text[0];
console.log(firstSymbol);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);
console.log(text[6]);

console.log(text[0] + text[1] + text[2] + text[3] + text[4] + text [5] + text[6])

console.log(age.toString()[0]);
console.log(age.toString()[1]);
console.log(age.toString()[2]);
console.log(age.toString()[3]);

console.clear();

// Zodyje sachmatai pirmoji raide yra "S"

const game = "sachmatai";
const gameSentence = `Zodyje "${game}" pirmoji raide yra "${game[0]}", o trecioji yra: "${game[2]}"`;

console.log(gameSentence);

console.clear();

const textSymbolReverse = text[6] + text[5] + text[4] + text[3] + text[2] + text[1] + text[0]
console.log(textSymbolReverse);