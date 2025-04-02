const city = [
    'Kaunas', 89.3,
    'Riga', 284.7,
    'Tallinn', 600,
    'Warsaw', 450,
    'Berlin', 820.4,
    'Stockholm', 660.8,
    'Kyiv', 590,
    'Moscow', 990,
    'Minsk', 194.5,
    'Amsterdam', 1400.6
];

function travelTime(speed, time) {
    let travelRange = speed * time;

    for (i = 0; i < city.length; i += 2) {
        const distance = city[i+1];
        console.log(distance)
    }

}

console.log(travelTime(200, 2))