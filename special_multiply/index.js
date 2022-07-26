const specialMultiply = (a, b) => {
    if (b) return a * b;
    return function (b) {
        return a * b;
    };
}

console.log(specialMultiply(3, 4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // function(){}....