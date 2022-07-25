const checkAnagram = (first, second) => {
    const a = first.toLowerCase().split('').sort().join('');
    const b = second.toLowerCase().split('').sort().join('');
    return a === b;
}

console.log(checkAnagram("sleep", "speel"))// true
console.log(checkAnagram("sLeEP", "speel")) // true
console.log(checkAnagram("Hi", "Bye")) // false