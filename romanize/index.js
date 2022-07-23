const units = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
const tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
const hundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
const thousands = ["","M","MM","MMM"];

const romanize = num => {
    let outputResult;
    if (isNaN(num)) return "Not a number";
    if (num <= 2999) {
        let unit = num % 10;
        let tenth = Math.floor(num / 10) < 10 ? Math.floor(num / 10) : Math.floor(num / 10) % 10;
        let hundred = Math.floor(num / 100) < 10 ? Math.floor(num / 100) : Math.floor(num / 100) % 10;
        let thousand = Math.floor(num / 1000) < 10 ? Math.floor(num / 1000) : Math.floor(num / 1000) % 10;
        outputResult = thousands[thousand] + hundreds[hundred] + tens[tenth] + units[unit];
        return num + " is " + outputResult;
    } else return "Sorry! Out of range"
}

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