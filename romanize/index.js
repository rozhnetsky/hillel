const units = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
const tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];

const romanize = num => {
    let outputResult;
    if (isNaN(num)) return "Not a number";
    if (num <= 99) {
        let tenth = Math.floor(num / 10);
        let unit = num % 10;
        outputResult = tens[tenth] + units[unit];
        return outputResult;
    } else return "Sorry! Out of range"
}

console.log(romanize("aaa"));

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