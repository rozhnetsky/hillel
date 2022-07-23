const units = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
const tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
const hundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
const thousands = ["","M","MM","MMM"];

const romanize = num => {
    if (isNaN(num)) return "Not a number";

    const floor = (num, division) => Math.floor(num / division);

    if (num <= 3999) {
        let unit = num % 10;
        let tenth = floor(num, 10) < 10 ? floor(num, 10) : floor(num, 10) % 10;
        let hundred = floor(num, 100) < 10 ? floor(num, 100) : floor(num, 100) % 10;
        let thousand = floor(num, 1000) < 10 ? floor(num, 1000) : floor(num, 1000) % 10;
        let outputResult = thousands[thousand] + hundreds[hundred] + tens[tenth] + units[unit];
        return num + " is " + outputResult;
    } else return "Sorry! Out of range"
}

console.log(romanize("string"));

console.log(romanize(1989));

console.log(romanize(1));

console.log(romanize(5));

console.log(romanize(10));

console.log(romanize(11));

console.log(romanize(13));

console.log(romanize(14));

console.log(romanize(20));

console.log(romanize(23));

console.log(romanize(30));

console.log(romanize(35));

console.log(romanize(99));

console.log(romanize(100));

console.log(romanize(2021));

console.log(romanize(3999));

console.log(romanize(4000));