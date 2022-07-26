const replicate = (num, amount, arr = [], i = 0) => {
    if (amount < 0 || i === amount) return arr;
    arr.push(num);
    replicate(num, amount, arr, i + 1);
    return arr;
}

console.log(replicate(5, 3)) // [5, 5, 5]
console.log(replicate(69, 1)) // [69]
console.log(replicate(12, 9))
console.log(replicate(6, -2)) // []