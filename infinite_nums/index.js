const addNumber = (...nums) => {
    let result = 0;
    nums.forEach( num => result += num );
    return result;
}

console.log(addNumber(2,4,5));
console.log(addNumber(10,45,34,130));
console.log(addNumber(10,45,34,130,745,12,15,2,10));