const genRandom = (startNum, endNum) => {
    let length = endNum - startNum;
    let randomIndex = Math.floor(Math.random() * length);
    let nums = [];
    for (let i = startNum; i <= endNum; i++) nums.push(i)
    return nums[randomIndex];
}

console.log(genRandom(1,10)) // random int between 1 to 10
console.log(genRandom(80,90)) // random int between 80 to 90