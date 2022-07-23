const findDaysInMonth = (m, y) => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const month = months.indexOf(m) + 1;
    const days = new Date(y, month, 0).getDate();
    return `${m} has ${days} days in ${y}`
}

console.log(findDaysInMonth('February', 2012)) // "The Month has 29 days"
console.log(findDaysInMonth('February', 2013)) // "The Month has 28 days"
console.log(findDaysInMonth('April', 2012)) // "The Month has 30 days"