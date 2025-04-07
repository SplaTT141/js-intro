const city = [
    'Tallinn', 600,
    'Minsk', 194.5,
    'Riga', 284.7,
    'Kaunas', 89.3,
    'Warsaw', 450,
    'Berlin', 820.4,
    'Stockholm', 660.8,
    'Kyiv', 590,
    'Moscow', 990,
    'Amsterdam', 1400.6
];

function kurTolimiausiai (miestai, greitis, laikas) {
    let maxA = 0;
    let kelias = greitis * laikas;
    let maxM = 0;

    for (i = 0; i < miestai.length; i += 2) {
        if (miestai[i+1] <= kelias && miestai[i+1] > maxA) {
            maxA = miestai[i+1];
            maxM = i;
        }
    }
    return miestai[maxM] + ' ' + miestai[maxM + 1]  
}

console.log(kurTolimiausiai(city, 200, 2));















// function travelTime(speed, time) {
//     let travelRange = speed * time;

//     for (i = 0; i < city.length; i += 2) {       
//         const cityName = city[i];
//         const distance = city[i + 1];
//         const farthestCities = distance;
        
//         if (distance <= travelRange) {
//             console.log(farthestCities);
//         }
//     }

// }

// console.log(travelTime(200, 2))
